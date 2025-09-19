'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  Home, 
  Search, 
  Gavel, 
  Heart, 
  User,
  Plus,
  Bell
} from 'lucide-react'

export function MobileNav() {
  const pathname = usePathname()
  const [notificationCount, setNotificationCount] = useState(3)

  const navItems = [
    { href: '/', icon: Home, label: 'Home' },
    { href: '/auctions', icon: Gavel, label: 'Auctions' },
    { href: '/cars', icon: Search, label: 'Browse' },
    { href: '/watchlist', icon: Heart, label: 'Watchlist' },
    { href: '/dashboard', icon: User, label: 'Profile' }
  ]

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 md:hidden">
      <div className="flex items-center justify-around py-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors ${
              isActive(item.href)
                ? 'text-blue-600 bg-blue-50'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <div className="relative">
              <item.icon className="h-6 w-6" />
              {item.href === '/dashboard' && notificationCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {notificationCount}
                </span>
              )}
            </div>
            <span className="text-xs mt-1 font-medium">{item.label}</span>
          </Link>
        ))}
        
        {/* Quick Action Button */}
        <Link
          href="/sell"
          className="flex flex-col items-center py-2 px-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
        >
          <Plus className="h-6 w-6" />
          <span className="text-xs mt-1 font-medium">Sell</span>
        </Link>
      </div>
    </div>
  )
}
