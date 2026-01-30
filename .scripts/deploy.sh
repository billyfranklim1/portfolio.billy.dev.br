#!/bin/bash
set -e

echo "Deployment started ..."

# Load nvm and use correct Node version
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
nvm use 24 || nvm use 20

# Pull the latest version of the app
git pull origin main

# Install dependencies
yarn install --frozen-lockfile --ignore-engines

# Build the application
npm run build

# Restart PM2 process
pm2 restart billy-portfolio --update-env || pm2 start npm --name "billy-portfolio" -- start -- -p 3002

echo "Deployment finished!"
echo "Deployed via GitHub Actions"
