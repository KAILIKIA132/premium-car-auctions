#!/bin/bash

# Premium Car Auctions - Installation Script
echo "🚗 Premium Car Auctions - Installation Script"
echo "=============================================="

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    echo "   Visit: https://nodejs.org/"
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18+ is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js $(node -v) detected"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo "✅ Dependencies installed successfully"

# Create .env.local from template
if [ ! -f .env.local ]; then
    echo "📝 Creating environment file..."
    cp env.example .env.local
    echo "✅ Environment file created (.env.local)"
    echo "⚠️  Please update .env.local with your actual values"
else
    echo "✅ Environment file already exists"
fi

# Install Prisma CLI globally if not installed
if ! command -v prisma &> /dev/null; then
    echo "📦 Installing Prisma CLI..."
    npm install -g prisma
fi

echo "✅ Prisma CLI ready"

# Database setup instructions
echo ""
echo "🗄️  Database Setup Required:"
echo "   1. Create a PostgreSQL database"
echo "   2. Update DATABASE_URL in .env.local"
echo "   3. Run: npx prisma db push"
echo "   4. Run: npx prisma db seed"
echo ""

# Development server instructions
echo "🚀 Ready to start development!"
echo "   Run: npm run dev"
echo "   Open: http://localhost:3000"
echo ""

echo "🎉 Installation complete!"
echo "   Next steps:"
echo "   1. Set up your database"
echo "   2. Configure environment variables"
echo "   3. Run the development server"
echo "   4. Start building amazing features!"
