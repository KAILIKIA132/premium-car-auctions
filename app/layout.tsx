import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { MobileNav } from '@/components/layout/mobile-nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Premium Car Auctions - World Class Vehicle Auctions',
  description: 'Professional car auction platform featuring premium vehicles from around the world. Bid on luxury cars, classic vehicles, and more.',
  keywords: 'car auctions, luxury cars, classic cars, vehicle auctions, premium automobiles',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 pb-16 md:pb-0">
              {children}
            </main>
            <Footer />
            <MobileNav />
          </div>
        </Providers>
      </body>
    </html>
  )
}