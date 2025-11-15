#!/bin/bash

# GitHub CLI Setup Script
# This script will help set up GitHub CLI and create your repository

echo "🚀 GitHub CLI Setup Script"
echo "=========================="
echo ""

# Check if GitHub CLI is installed
if command -v gh &> /dev/null; then
    echo "✅ GitHub CLI is already installed"
    gh --version
else
    echo "❌ GitHub CLI not found"
    echo ""
    echo "To install GitHub CLI, run one of these commands:"
    echo ""
    echo "Option 1 - Using Homebrew (recommended):"
    echo "  brew install gh"
    echo ""
    echo "Option 2 - Manual download:"
    echo "  Visit: https://cli.github.com/"
    echo ""
    echo "After installing, run this script again."
    exit 1
fi

echo ""
echo "Checking GitHub authentication..."
if gh auth status &> /dev/null; then
    echo "✅ Already authenticated with GitHub"
    gh auth status
else
    echo "❌ Not authenticated"
    echo ""
    echo "To authenticate, run:"
    echo "  gh auth login"
    echo ""
    echo "This will open a browser for you to log in."
    exit 1
fi

echo ""
echo "✅ Ready to create repository!"
echo ""
echo "To create and push your repository, run:"
echo "  ./create-repo.sh"
echo ""

