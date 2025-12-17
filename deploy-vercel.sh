#!/bin/bash

# Deploy to Vercel using CLI
# This will handle the deployment automatically

set -e

echo "🚀 Deploying to Vercel"
echo "======================"
echo ""

# Try to find vercel in common locations
export PATH="/usr/local/bin:/opt/homebrew/bin:$HOME/.local/bin:$HOME/.npm-global/bin:$PATH"

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI not found"
    echo ""
    echo "Installing Vercel CLI..."
    npm install -g vercel
    
    # Try again
    export PATH="/usr/local/bin:/opt/homebrew/bin:$HOME/.local/bin:$HOME/.npm-global/bin:$PATH"
    if ! command -v vercel &> /dev/null; then
        echo "❌ Still not found. Please install manually:"
        echo "   npm install -g vercel"
        echo "   Then run: vercel login"
        exit 1
    fi
fi

echo "✅ Vercel CLI found"
vercel --version
echo ""

# Check if logged in
if ! vercel whoami &> /dev/null; then
    echo "❌ Not logged in to Vercel"
    echo ""
    echo "Please log in:"
    echo "  vercel login"
    echo ""
    echo "This will open a browser for authentication."
    exit 1
fi

echo "✅ Logged in to Vercel"
vercel whoami
echo ""

# Deploy
echo "Deploying project..."
echo ""

# Use --yes to skip prompts, --prod for production
vercel --prod --yes

echo ""
echo "✅ Deployment complete!"
echo ""
echo "Your site should be live now!"
echo "Check your Vercel dashboard for the URL."

