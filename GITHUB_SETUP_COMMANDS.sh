#!/bin/bash

# GitHub Setup Commands
# Run these commands in your terminal to set up GitHub

echo "🚀 GitHub Repository Setup"
echo "=========================="
echo ""
echo "Follow these steps:"
echo ""

# Get repository name
REPO_NAME="${1:-revaya-company-website}"
echo "Repository name: $REPO_NAME"
echo ""

echo "Step 1: Create repository on GitHub"
echo "------------------------------------"
echo "1. Go to: https://github.com/new"
echo "2. Repository name: $REPO_NAME"
echo "3. Choose: Private (recommended) or Public"
echo "4. DO NOT check: README, .gitignore, or license"
echo "5. Click 'Create repository'"
echo ""
echo "Step 2: After creating, run these commands:"
echo "--------------------------------------------"
echo ""
echo "# Add GitHub remote (replace YOUR_USERNAME with your GitHub username)"
echo "git remote add origin https://github.com/YOUR_USERNAME/$REPO_NAME.git"
echo ""
echo "# Rename branch to main"
echo "git branch -M main"
echo ""
echo "# Push to GitHub"
echo "git push -u origin main"
echo ""
echo ""
echo "Alternative: If you have GitHub CLI installed, run:"
echo "  gh repo create $REPO_NAME --private --source=. --remote=origin --push"
echo ""

