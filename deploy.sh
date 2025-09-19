#!/bin/bash

# 🚀 Premium Car Auctions - Deployment Script
echo "🚀 Starting deployment process..."

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📦 Initializing git repository..."
    git init
    git add .
    git commit -m "Initial commit - Premium Car Auctions"
fi

# Check if remote origin exists
if ! git remote get-url origin > /dev/null 2>&1; then
    echo "⚠️  No GitHub remote found. Please:"
    echo "1. Create a repository on GitHub"
    echo "2. Add it as remote: git remote add origin https://github.com/yourusername/your-repo.git"
    echo "3. Push: git push -u origin main"
    exit 1
fi

# Push to GitHub
echo "📤 Pushing to GitHub..."
git add .
git commit -m "Deploy: Premium Car Auctions - Kenya Localized" || echo "No changes to commit"
git push origin main

echo "✅ Code pushed to GitHub!"
echo ""
echo "🎯 Next Steps:"
echo "1. Go to https://vercel.com"
echo "2. Sign up/Login with GitHub"
echo "3. Click 'New Project'"
echo "4. Import your repository"
echo "5. Deploy!"
echo ""
echo "🌐 Your app will be live at: https://your-app-name.vercel.app"
echo ""
echo "📱 Features included:"
echo "✅ Full car auction platform"
echo "✅ Kenya localized (KSH currency, Kenyan cities)"
echo "✅ Responsive design"
echo "✅ User authentication"
echo "✅ Live auctions"
echo "✅ Dashboard and user management"
