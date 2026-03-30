#!/usr/bin/env python3

import json
import re
import signal
import subprocess
import sys
import time
from datetime import datetime
from pathlib import Path


REPO_ROOT = Path(__file__).resolve().parent.parent
CONTENT_FILE = REPO_ROOT / "content" / "site-content.md"
CONTENT_FILE_RELATIVE = CONTENT_FILE.relative_to(REPO_ROOT).as_posix()
REQUIRED_SECTIONS = {"site", "home", "research", "resume", "contact"}
SECTION_PATTERN = re.compile(
    r"^##\s+([a-z0-9-]+)\s*$([\s\S]*?)(?=^##\s+[a-z0-9-]+\s*$|\Z)",
    re.MULTILINE,
)
JSON_BLOCK_PATTERN = re.compile(r"```json\s*([\s\S]*?)\s*```", re.IGNORECASE)
POLL_INTERVAL_SECONDS = 1.0
DEBOUNCE_SECONDS = 1.5

running = True


def log(message):
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    print(f"[{timestamp}] {message}", flush=True)


def handle_signal(signum, _frame):
    global running
    running = False
    log(f"Received signal {signum}, stopping watcher.")


def run_git_command(args, check=True):
    result = subprocess.run(
        ["git", *args],
        cwd=REPO_ROOT,
        capture_output=True,
        text=True,
    )

    if check and result.returncode != 0:
        stderr = result.stderr.strip()
        stdout = result.stdout.strip()
        detail = stderr or stdout or f"git {' '.join(args)} failed"
        raise RuntimeError(detail)

    return result


def validate_content_file():
    source = CONTENT_FILE.read_text(encoding="utf-8").strip()
    sections = {}

    for section_name, section_body in SECTION_PATTERN.findall(source):
        json_match = JSON_BLOCK_PATTERN.search(section_body)
        if not json_match:
            continue

        try:
            sections[section_name] = json.loads(json_match.group(1).strip())
        except json.JSONDecodeError as error:
            raise RuntimeError(
                f'Invalid JSON in section "{section_name}" of content/site-content.md: {error}'
            ) from error

    missing_sections = sorted(REQUIRED_SECTIONS - sections.keys())
    if missing_sections:
        raise RuntimeError(
            "Missing required sections in content/site-content.md: "
            + ", ".join(missing_sections)
        )


def get_current_branch():
    result = run_git_command(["branch", "--show-current"])
    branch = result.stdout.strip()
    if not branch:
        raise RuntimeError("Unable to determine current git branch.")
    return branch


def content_file_has_changes():
    result = run_git_command(["status", "--porcelain", "--", CONTENT_FILE_RELATIVE], check=False)
    return bool(result.stdout.strip())


def publish_once():
    validate_content_file()

    if not content_file_has_changes():
        log("No content changes detected after save; skipping publish.")
        return

    branch = get_current_branch()
    commit_message = "content: auto-update site content"

    run_git_command(["add", "--", CONTENT_FILE_RELATIVE])
    diff_result = run_git_command(
        ["diff", "--cached", "--quiet", "--", CONTENT_FILE_RELATIVE],
        check=False,
    )

    if diff_result.returncode == 0:
        log("The content file matches the current commit; nothing to publish.")
        return

    run_git_command(["commit", "--only", "--message", commit_message, "--", CONTENT_FILE_RELATIVE])
    run_git_command(["push", "origin", branch])
    log(f"Published {CONTENT_FILE_RELATIVE} to origin/{branch}.")


def wait_for_stable_mtime(last_seen_mtime):
    stable_since = time.monotonic()
    current_mtime = last_seen_mtime

    while running:
        time.sleep(POLL_INTERVAL_SECONDS)
        latest_mtime = CONTENT_FILE.stat().st_mtime_ns
        if latest_mtime != current_mtime:
            current_mtime = latest_mtime
            stable_since = time.monotonic()
            continue

        if time.monotonic() - stable_since >= DEBOUNCE_SECONDS:
            return current_mtime

    return current_mtime


def main():
    if not CONTENT_FILE.exists():
        log(f"Content file not found: {CONTENT_FILE}")
        return 1

    signal.signal(signal.SIGINT, handle_signal)
    signal.signal(signal.SIGTERM, handle_signal)

    last_mtime = CONTENT_FILE.stat().st_mtime_ns
    log(f"Watching {CONTENT_FILE_RELATIVE} for changes.")

    while running:
        time.sleep(POLL_INTERVAL_SECONDS)
        current_mtime = CONTENT_FILE.stat().st_mtime_ns
        if current_mtime == last_mtime:
            continue

        last_mtime = wait_for_stable_mtime(current_mtime)

        try:
            publish_once()
        except Exception as error:  # noqa: BLE001
            log(f"Auto-publish failed: {error}")

    return 0


if __name__ == "__main__":
    sys.exit(main())
