#!/bin/bash

echo "🧹 Cleaning up and rebuilding Quartz site..."

# Step 1: Stop any running Quartz server (you already did with Ctrl+C)

# Step 2: Remove old public folder
rm -rf public
echo "🗑️ Removed old 'public' folder."

# Step 3: Run the Quartz build
npx quartz build

# Step 4: Preview site locally
echo "🌐 Starting local preview server..."
npx serve public