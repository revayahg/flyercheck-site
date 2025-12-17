#!/bin/bash

# Quick Vercel Deployment Script
# This will deploy your site to Vercel

set -e

echo "🚀 Deploying to Vercel"
echo "======================"
echo ""

# Check if logged in
if ! npx vercel whoami &> /dev/null; then
    echo "❌ Not logged in to Vercel"
    echo ""
    echo "Please log in first:"
    echo "  npx vercel login"
    echo ""
    echo "This will open a browser for you to authenticate."
    echo "After logging in, run this script again."
    exit 1
fi

echo "✅ Logged in to Vercel"
npx vercel whoami
echo ""

# Check if project already exists
echo "Checking for existing project..."
PROJECT_EXISTS=$(npx vercel ls 2>&1 | grep -i "revaya-company-website" || echo "")

if [ -n "$PROJECT_EXISTS" ]; then
    echo "✅ Project exists, deploying to production..."
    npx vercel --prod --yes
else
    echo "📦 Creating new project..."
    echo ""
    echo "You'll be asked a few questions:"
    echo "  - Link to existing project? → No"
    echo "  - Project name? → revaya-company-website (or press Enter)"
    echo "  - Directory? → ./ (press Enter)"
    echo ""
    npx vercel --yes
    echo ""
    echo "Now deploying to production..."
    npx vercel --prod --yes
fi

echo ""
echo "✅ Deployment complete!"
echo ""
echo "Your site should be live now!"
echo "Run 'npx vercel' to see your deployment URL"

