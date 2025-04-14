#!/bin/bash

# Define paths
SOURCE_DIR="$HOME/vaults/Cranford"
DEST_DIR="$HOME/quartz/content"
PROJECT_DIR="$HOME/quartz"

# Step 1: Copy latest Obsidian-synced files into Quartz content folder
echo "Syncing Cranford notes from Obsidian vault..."
rm -rf "$DEST_DIR"
cp -R "$SOURCE_DIR" "$DEST_DIR"

# Step 2: Change into project directory
cd "$PROJECT_DIR" || exit

# Step 3: Add changes to git if there are any
if [[ -n $(git status --porcelain) ]]; then
  echo "Committing and pushing changes to GitHub..."
  git add content
  git commit -m "Update Cranford content from Obsidian sync"
  git push origin main
else
  echo "No changes to commit."
fi

echo "✅ Sync complete!"