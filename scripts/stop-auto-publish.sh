#!/bin/sh

set -eu

REPO_ROOT="$(CDPATH= cd -- "$(dirname "$0")/.." && pwd)"
PID_FILE="$REPO_ROOT/.autopublish/auto_publish.pid"

if [ ! -f "$PID_FILE" ]; then
  echo "Auto-publish watcher is not running."
  exit 0
fi

PID="$(cat "$PID_FILE")"
if kill -0 "$PID" 2>/dev/null; then
  kill "$PID"
  echo "Stopped auto-publish watcher with PID $PID."
else
  echo "Process $PID is not running."
fi

rm -f "$PID_FILE"
