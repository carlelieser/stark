#!/bin/bash
# Deploy STARK commands from src/ to commands/stark/ for distribution

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"

SRC_DIR="$PROJECT_ROOT/src"
DEST_DIR="$PROJECT_ROOT/commands/stark"

# Ensure destination exists
mkdir -p "$DEST_DIR"

# Copy all command files
echo "Deploying STARK commands..."
cp "$SRC_DIR"/*.md "$DEST_DIR/"

# Count deployed files
COUNT=$(ls -1 "$DEST_DIR"/*.md 2>/dev/null | wc -l | tr -d ' ')

echo "Deployed $COUNT commands to commands/stark/"
echo ""
echo "Commands available:"
ls -1 "$DEST_DIR"/*.md | xargs -I {} basename {} .md | sed 's/^/  \/stark:/'
