---
title: Cranford Ch 9 – Deploy Test
tags: [cranford, shownotes]
description: Show notes for episode 687 – Cranford Chapter 9
created: 2025-01-26T16:00:21-05:00
uuid: 8f852070-dc28-11ef-baa7-65e9cc494757
---
## Book Series: Cranford ch 9

Wasn’t planning for money
---

Episode Number: 687

\

Title - old alfred



cd /Users/heatherordover/quartz

echo "🐳 Deep cleaning CURRENT-Book folder for Moby-Dick..."
rm -rf CURRENT-Book
cp -R ~/vaults/MOBY ./CURRENT-Book

echo "🔍 Checking for contentDir in config..."
grep contentDir quartz.config.ts

echo "🧼 Removing old public folder..."
rm -rf public

echo "⚙️ Running Quartz build..."
/usr/local/opt/node@20/bin/npx quartz build

git add .
git commit -m "Clean sync and deploy from MOBY"
git push

osascript -e 'display notification "Deployed to GitHub + Netlify!" with title "CraftLit Moby-Dick Site"'

# 🪄 Replace the webhook URL below with your actual Netlify Moby build hook
curl -X POST -d '{}' https://api.netlify.com/build_hooks/PASTE-YOUR-MOBY-HOOK-HERE








curl -X POST -d '{}' https://api.netlify.com/build_hooks/67fd75bc013093007bf7cf3c







\

Raffle
NO LONGER THE x-stitch
\

## A-Block - Crafty Chat
YouTube Cards?
CIDER
and
Elderberry https://hildaskitchenblog.com/recipe/easy-elderberry-wine-recipe/

![[Pasted image 20250528153841.jpg]]
## B-Block - Book Talk
YouTube Cards?
- Michaelmas to  ladies day Sept 29–Mar25
- Wombwell’s Lions: https://wdc.contentdm.oclc.org/digital/collection/warwephem/id/1376/
- Saracen’s Head Turban: [the Inn](https://en.wikipedia.org/wiki/Saracen%27s_Head,_London), 
- https://i.ebayimg.com/images/g/oU8AAOSw5B9iBiju/s-l400.jpg
- 

## C-Block - Book Audio / crafty video
YouTube Cards?



#### WHO'S Crafty Video and what to link out to?
YouTube Cards?
\

## D-Block - Post-chapter Chat
YouTube Cards?
\

## E-Block - Outro


---

- [ ] crafty links<!-- {"uuid":"daab429d-c016-4d6a-9c20-e33ee237b8f1"} -->

- [ ] Book Talk links<!-- {"uuid":"d9a40a47-47a4-42c5-8968-0de3ed212f9d"} -->

- [ ] other sites/creators to link out to/pimp<!-- {"uuid":"850a1d79-56f0-4361-98bc-744de20736b4"} -->

https://wdc.contentdm.oclc.org/digital/collection/warwephem/id/1376/