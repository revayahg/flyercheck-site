#!/bin/bash

# Create GitHub Repository and Push Code
# This script automates the entire GitHub setup process

set -e  # Exit on any error

echo "🚀 GitHub Repository Setup"
echo "=========================="
echo ""

# Try to find gh in common locations
export PATH="/usr/local/bin:/opt/homebrew/bin:$HOME/.local/bin:$PATH"

# Check if GitHub CLI is installed
if ! command -v gh &> /dev/null; then
    echo "❌ GitHub CLI not found in PATH"
    echo ""
    echo "Please try one of these:"
    echo "1. Open a NEW terminal window and run this script again"
    echo "2. Or run: source ~/.zshrc (or ~/.bash_profile)"
    echo "3. Or use manual git commands (see GITHUB_SETUP_COMMANDS.sh)"
    echo ""
    exit 1
fi

# Check if authenticated
if ! gh auth status &> /dev/null; then
    echo "❌ Not authenticated with GitHub"
    echo ""
    echo "Please authenticate first:"
    echo "  gh auth login"
    echo ""
    echo "This will open a browser for you to log in."
    exit 1
fi

# Get repository name
REPO_NAME="${1:-revaya-company-website}"
echo "Repository name: $REPO_NAME"
echo ""

# Ask for visibility
echo "Repository visibility:"
echo "  1) Private (recommended)"
echo "  2) Public"
read -p "Choose (1 or 2) [default: 1]: " VISIBILITY_CHOICE
VISIBILITY_CHOICE=${VISIBILITY_CHOICE:-1}

if [ "$VISIBILITY_CHOICE" = "2" ]; then
    VISIBILITY="public"
else
    VISIBILITY="private"
fi

echo ""
echo "Creating repository: $REPO_NAME ($VISIBILITY)..."
echo ""

# Create repository
gh repo create "$REPO_NAME" --"$VISIBILITY" --source=. --remote=origin --push

echo ""
echo "✅ Repository created and code pushed!"
echo ""
echo "Next steps:"
echo "1. Go to: https://vercel.com/new"
echo "2. Import your repository: $REPO_NAME"
echo "3. Add OPENAI_API_KEY environment variable"
echo "4. Deploy!"
echo ""
echo "Opening repository in browser..."
gh repo view --web

