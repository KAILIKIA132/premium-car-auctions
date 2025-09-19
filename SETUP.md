# Premium Car Auctions - Setup Guide

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- PostgreSQL database
- Git

### 1. Installation
```bash
# Clone the repository
git clone <your-repo-url>
cd premium-car-auctions

# Run the installation script
chmod +x install.sh
./install.sh

# Or install manually
npm install
```

### 2. Environment Setup
```bash
# Copy environment template
cp env.example .env.local

# Edit .env.local with your values
nano .env.local
```

**Required Environment Variables:**
```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/car_auctions?schema=public"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"

# Stripe (for payments)
STRIPE_PUBLISHABLE_KEY="pk_test_..."
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."
```

### 3. Database Setup
```bash
# Push schema to database
npx prisma db push

# Seed with sample data
npx prisma db seed

# Open Prisma Studio (optional)
npx prisma studio
```

### 4. Start Development
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
premium-car-auctions/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── auth/              # Authentication pages
│   ├── auctions/          # Auction pages
│   ├── cars/              # Car listing pages
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── layout/           # Layout components
│   └── sections/         # Page sections
├── lib/                  # Utility libraries
│   ├── auth.ts          # NextAuth configuration
│   ├── prisma.ts        # Prisma client
│   └── utils.ts         # Utility functions
├── prisma/               # Database schema
│   └── schema.prisma    # Prisma schema
├── types/               # TypeScript types
└── public/              # Static assets
```

## 🎨 Key Features Implemented

### ✅ Completed Features
- **Modern UI/UX**: Responsive design with Tailwind CSS
- **Authentication**: NextAuth.js with role-based access
- **Database**: Prisma ORM with PostgreSQL
- **Car Listings**: Advanced search and filtering
- **Auction System**: Live auction interface
- **Component Library**: Reusable UI components
- **Type Safety**: Full TypeScript implementation

### 🚧 Pending Features
- **Real-time Bidding**: WebSocket integration
- **Payment Processing**: Stripe integration
- **Admin Dashboard**: Management interface
- **Image Upload**: Vehicle photo management
- **Email Notifications**: Transactional emails

## 🔧 Development Commands

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Database
npm run db:push      # Push schema changes
npm run db:studio    # Open Prisma Studio
npm run db:seed      # Seed database

# TypeScript
npx tsc --noEmit     # Type check
```

## 🌐 API Endpoints

### Authentication
- `POST /api/auth/signin` - User sign in
- `POST /api/auth/signup` - User registration
- `GET /api/auth/session` - Get current session

### Auctions
- `GET /api/auctions` - List auctions
- `POST /api/auctions` - Create auction
- `GET /api/auctions/[id]` - Get auction details
- `POST /api/auctions/[id]/bid` - Place bid

### Cars
- `GET /api/cars` - List cars
- `POST /api/cars` - Create car listing
- `GET /api/cars/[id]` - Get car details
- `PUT /api/cars/[id]` - Update car listing

## 🎯 Next Steps

1. **Set up your database** with the provided schema
2. **Configure environment variables** for your services
3. **Customize the design** to match your brand
4. **Add payment processing** with Stripe
5. **Implement real-time features** with WebSocket
6. **Deploy to production** (Vercel recommended)

## 🆘 Troubleshooting

### Common Issues

**Database Connection Error:**
```bash
# Check your DATABASE_URL format
# Should be: postgresql://user:password@host:port/database
```

**Prisma Client Error:**
```bash
# Regenerate Prisma client
npx prisma generate
```

**Build Errors:**
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

**TypeScript Errors:**
```bash
# Check type definitions
npx tsc --noEmit
```

## 📞 Support

- **Documentation**: Check the README.md
- **Issues**: Create a GitHub issue
- **Email**: support@premiumauctions.com

---

**Happy Coding! 🚗✨**
