#!/bin/bash

cd "$(dirname "$0")"

echo "🔍 Checking for contentDir in config..."
grep contentDir quartz.config.ts

echo "🧹 Removing old public folder..."
rm -rf public

echo "⚙️ Running Quartz build..."
npx quartz build