#!/bin/bash

# Push to GitHub using Personal Access Token
# This script will help you push your code to an existing GitHub repository

set -e

echo "🚀 Push to GitHub Repository"
echo "============================="
echo ""

# Get repository URL
if [ -z "$1" ]; then
    echo "Usage: ./push-to-github.sh <repository-url>"
    echo ""
    echo "Example:"
    echo "  ./push-to-github.sh https://github.com/username/repo-name.git"
    echo ""
    echo "Or if you want to enter it interactively:"
    read -p "Enter your GitHub repository URL: " REPO_URL
else
    REPO_URL="$1"
fi

# Check if remote already exists
if git remote get-url origin &> /dev/null; then
    echo "⚠️  Remote 'origin' already exists:"
    git remote -v
    echo ""
    read -p "Do you want to update it? (y/n) [n]: " UPDATE_REMOTE
    if [ "$UPDATE_REMOTE" = "y" ] || [ "$UPDATE_REMOTE" = "Y" ]; then
        git remote set-url origin "$REPO_URL"
        echo "✅ Remote updated"
    else
        echo "Using existing remote"
        REPO_URL=$(git remote get-url origin)
    fi
else
    echo "Adding remote: $REPO_URL"
    git remote add origin "$REPO_URL"
fi

echo ""
echo "Current branch:"
git branch --show-current

echo ""
echo "Renaming branch to 'main' (if needed)..."
git branch -M main

echo ""
echo "Ready to push!"
echo ""
echo "When prompted for password, use your GitHub Personal Access Token"
echo ""
read -p "Press Enter to push to GitHub..."

git push -u origin main

echo ""
echo "✅ Code pushed successfully!"
echo ""
echo "Repository URL: $REPO_URL"
echo ""

