'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { 
  Car, 
  Search, 
  User, 
  Menu, 
  X, 
  Bell,
  Settings,
  LogOut,
  Plus
} from 'lucide-react'
import { NotificationCenter } from '@/components/notifications/notification-center'
import { useAuth } from '@/contexts/auth-context'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { user, logout, isAuthenticated } = useAuth()

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Car className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold gradient-text">Premium Auctions</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/auctions" className="text-gray-700 hover:text-primary transition-colors">
              Live Auctions
            </Link>
            <Link href="/cars" className="text-gray-700 hover:text-primary transition-colors">
              Browse Cars
            </Link>
            <Link href="/sell" className="text-gray-700 hover:text-primary transition-colors">
              Sell Your Car
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary transition-colors">
              About
            </Link>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search cars, make, model..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>

          {/* User Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <NotificationCenter />
                <div className="relative group">
                  <button className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-lg transition-colors">
                    <User className="h-5 w-5" />
                    <span>{user?.name}</span>
                  </button>
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <Link href="/dashboard" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <Settings className="h-4 w-4 mr-2" />
                      Dashboard
                    </Link>
                    <Link href="/my-bids" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <Car className="h-4 w-4 mr-2" />
                      My Bids
                    </Link>
                    <button
                      onClick={logout}
                      className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Sign Out
                    </button>
                  </div>
                </div>
                <Link 
                  href="/sell"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
                >
                  <Plus className="h-4 w-4" />
                  <span>List Car</span>
                </Link>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link 
                  href="/auth/signin"
                  className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  Sign In
                </Link>
                <Link 
                  href="/auth/signup"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  Get Started
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              className="p-2 text-gray-400 hover:text-gray-600"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link
                href="/auctions"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Live Auctions
              </Link>
              <Link
                href="/cars"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Browse Cars
              </Link>
              <Link
                href="/sell"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Sell Your Car
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              {isAuthenticated ? (
                <div className="pt-4 border-t">
                  <p className="px-3 py-2 text-sm text-gray-500">Signed in as {user?.name}</p>
                  <Link
                    href="/dashboard"
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={() => {
                      logout()
                      setIsOpen(false)
                    }}
                    className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-primary"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <div className="pt-4 border-t space-y-2">
                  <Link 
                    href="/auth/signin" 
                    onClick={() => setIsOpen(false)}
                    className="w-full px-3 py-2 text-left text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-lg transition-colors block"
                  >
                    Sign In
                  </Link>
                  <Link 
                    href="/auth/signup" 
                    onClick={() => setIsOpen(false)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg transition-colors block"
                  >
                    Get Started
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
