#!/bin/bash

# Push to GitHub using Personal Access Token
# Usage: GITHUB_TOKEN=your_token ./push-with-token.sh <repo-url>

set -e

if [ -z "$GITHUB_TOKEN" ]; then
    echo "❌ GITHUB_TOKEN environment variable not set"
    echo ""
    echo "Usage:"
    echo "  GITHUB_TOKEN=your_token_here ./push-with-token.sh <repo-url>"
    echo ""
    echo "Or set it first:"
    echo "  export GITHUB_TOKEN=your_token_here"
    echo "  ./push-with-token.sh <repo-url>"
    exit 1
fi

if [ -z "$1" ]; then
    echo "❌ Repository URL not provided"
    echo ""
    echo "Usage:"
    echo "  GITHUB_TOKEN=your_token ./push-with-token.sh https://github.com/username/repo.git"
    exit 1
fi

REPO_URL="$1"

# Extract username and repo from URL for display
if [[ $REPO_URL =~ github.com[:/]([^/]+)/([^/]+)\.git ]]; then
    USERNAME="${BASH_REMATCH[1]}"
    REPO_NAME="${BASH_REMATCH[2]}"
    echo "🚀 Pushing to: $USERNAME/$REPO_NAME"
else
    echo "🚀 Pushing to: $REPO_URL"
fi

echo ""

# Check if remote exists
if git remote get-url origin &> /dev/null; then
    CURRENT_URL=$(git remote get-url origin)
    echo "Current remote: $CURRENT_URL"
    
    # Update remote with token
    REPO_URL_WITH_TOKEN=$(echo "$REPO_URL" | sed "s|https://|https://$GITHUB_TOKEN@|")
    git remote set-url origin "$REPO_URL_WITH_TOKEN"
    echo "✅ Remote updated with token"
else
    # Add remote with token
    REPO_URL_WITH_TOKEN=$(echo "$REPO_URL" | sed "s|https://|https://$GITHUB_TOKEN@|")
    git remote add origin "$REPO_URL_WITH_TOKEN"
    echo "✅ Remote added with token"
fi

# Rename branch to main
echo "Renaming branch to 'main'..."
git branch -M main

# Push
echo ""
echo "Pushing code to GitHub..."
git push -u origin main

# Remove token from remote URL for security
REPO_URL_CLEAN=$(echo "$REPO_URL" | sed "s|https://.*@|https://|")
git remote set-url origin "$REPO_URL_CLEAN"

echo ""
echo "✅ Successfully pushed to GitHub!"
echo ""
echo "Repository: $REPO_URL"
echo ""
echo "Next steps:"
echo "1. Go to: https://vercel.com/new"
echo "2. Import repository: $REPO_NAME"
echo "3. Add OPENAI_API_KEY environment variable"
echo "4. Deploy!"

