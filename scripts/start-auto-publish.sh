#!/bin/sh

set -eu

REPO_ROOT="$(CDPATH= cd -- "$(dirname "$0")/.." && pwd)"
STATE_DIR="$REPO_ROOT/.autopublish"
PID_FILE="$STATE_DIR/auto_publish.pid"
LOG_FILE="$STATE_DIR/auto_publish.log"

mkdir -p "$STATE_DIR"

if [ -f "$PID_FILE" ]; then
  PID="$(cat "$PID_FILE")"
  if kill -0 "$PID" 2>/dev/null; then
    echo "Auto-publish watcher is already running with PID $PID."
    exit 0
  fi
  rm -f "$PID_FILE"
fi

nohup /usr/bin/python3 "$REPO_ROOT/scripts/auto_publish_md.py" >>"$LOG_FILE" 2>&1 &
PID=$!
echo "$PID" >"$PID_FILE"

echo "Started auto-publish watcher with PID $PID."
echo "Log file: $LOG_FILE"
