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
  Plus,
  ChevronDown,
  Phone
} from 'lucide-react'
import { NotificationCenter } from '@/components/notifications/notification-center'
import { useAuth } from '@/contexts/auth-context'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { user, logout, isAuthenticated } = useAuth()

  return (
    <>
              {/* Top Blue Header Bar - Salvage Reseller Style */}
              <div className="sr-header-blue text-white py-2 sm:py-3">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 sm:space-x-6">
                      <div className="flex items-center">
                        <div className="w-8 h-8 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center mr-2 sm:mr-4">
                          <span className="text-blue-600 font-bold text-sm sm:text-lg">PA</span>
                        </div>
                        <div>
                          <div className="font-bold text-sm sm:text-xl">PREMIUM AUCTIONS</div>
                          <div className="text-xs sm:text-sm text-blue-100">AN INNOVATIVE PLATFORM</div>
                        </div>
                      </div>
                      <div className="hidden lg:block border-l border-blue-400 pl-6">
                        <div className="bg-yellow-400 text-black px-3 py-1 rounded text-sm font-bold">
                          5th YEAR ANNIVERSARY
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 sm:space-x-6">
                      <div className="bg-yellow-400 text-black px-2 py-1 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-bold">
                        5th YEAR ANNIVERSARY
                      </div>
                      <div className="hidden sm:block text-right">
                        <div className="text-lg font-semibold flex items-center">
                          <Phone className="h-4 w-4 mr-2" />
                          +254-700-000-000
                        </div>
                        <div className="text-xs text-blue-100">(We Speak Swahili)</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

      {/* Green Navigation Bar - Enhanced Dropdown Style */}
      <nav className="sr-nav-green text-white relative sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3 sm:py-4">
            <nav className="hidden md:flex items-center space-x-8">
              <div className="relative group">
                <a href="/cars" className="hover:text-green-200 transition-colors flex items-center">
                  Vehicle Search
                  <ChevronDown className="ml-1 h-4 w-4" />
                </a>
                <div className="dropdown-menu">
                  <div className="py-2">
                    <Link href="/cars?type=luxury" className="block px-4 py-2 text-gray-700 hover:bg-green-50">Luxury Cars</Link>
                    <Link href="/cars?type=sports" className="block px-4 py-2 text-gray-700 hover:bg-green-50">Sports Cars</Link>
                    <Link href="/cars?type=classic" className="block px-4 py-2 text-gray-700 hover:bg-green-50">Classic Cars</Link>
                    <Link href="/cars?type=suv" className="block px-4 py-2 text-gray-700 hover:bg-green-50">SUVs</Link>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <a href="/auctions" className="hover:text-green-200 transition-colors flex items-center">
                  Live Auctions
                  <ChevronDown className="ml-1 h-4 w-4" />
                </a>
                <div className="dropdown-menu">
                  <div className="py-2">
                    <Link href="/auctions?filter=today" className="block px-4 py-2 text-gray-700 hover:bg-green-50">Today's Auctions</Link>
                    <Link href="/auctions?filter=this-week" className="block px-4 py-2 text-gray-700 hover:bg-green-50">This Week</Link>
                    <Link href="/auctions?filter=upcoming" className="block px-4 py-2 text-gray-700 hover:bg-green-50">Upcoming Auctions</Link>
                    <Link href="/auctions?filter=live" className="block px-4 py-2 text-gray-700 hover:bg-green-50">Live Now</Link>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <a href="/contact" className="hover:text-green-200 transition-colors flex items-center">
                  Support
                  <ChevronDown className="ml-1 h-4 w-4" />
                </a>
                <div className="dropdown-menu">
                  <div className="py-2">
                    <Link href="/faq" className="block px-4 py-2 text-gray-700 hover:bg-green-50">Help Center</Link>
                    <Link href="/contact" className="block px-4 py-2 text-gray-700 hover:bg-green-50">Contact Us</Link>
                    <Link href="/how-it-works" className="block px-4 py-2 text-gray-700 hover:bg-green-50">How It Works</Link>
                    <Link href="/about" className="block px-4 py-2 text-gray-700 hover:bg-green-50">About Us</Link>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <a href="/sell" className="hover:text-green-200 transition-colors flex items-center">
                  Services
                  <ChevronDown className="ml-1 h-4 w-4" />
                </a>
                <div className="dropdown-menu">
                  <div className="py-2">
                    <Link href="/sell" className="block px-4 py-2 text-gray-700 hover:bg-green-50">Sell Your Car</Link>
                    <Link href="/services/shipping" className="block px-4 py-2 text-gray-700 hover:bg-green-50">Shipping Services</Link>
                    <Link href="/services/inspection" className="block px-4 py-2 text-gray-700 hover:bg-green-50">Inspection Services</Link>
                    <Link href="/services/financing" className="block px-4 py-2 text-gray-700 hover:bg-green-50">Financing</Link>
                  </div>
                </div>
              </div>
            </nav>
                    <div className="flex items-center space-x-2 sm:space-x-4">
                      {isAuthenticated ? (
                        <div className="flex items-center space-x-2 sm:space-x-4">
                          <NotificationCenter />
                          <div className="relative group">
                            <button className="flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 py-2 text-white hover:text-green-200 transition-colors">
                              <User className="h-4 w-4 sm:h-5 sm:w-5" />
                              <span className="hidden sm:inline">{user?.name}</span>
                            </button>
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-1 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                              <Link href="/dashboard" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-green-50">
                                <Settings className="h-4 w-4 mr-2" />
                                Dashboard
                              </Link>
                              <Link href="/my-bids" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-green-50">
                                <Car className="h-4 w-4 mr-2" />
                                My Bids
                              </Link>
                              <button
                                onClick={logout}
                                className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-green-50"
                              >
                                <LogOut className="h-4 w-4 mr-2" />
                                Sign Out
                              </button>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <>
                          <Link 
                            href="/auth/signin"
                            className="bg-white text-green-600 px-3 py-2 sm:px-6 sm:py-2 rounded-lg font-semibold hover:bg-green-50 transition-colors text-sm sm:text-base"
                          >
                            Sign In
                          </Link>
                          <Link 
                            href="/auth/signup"
                            className="bg-red-600 text-white px-3 py-2 sm:px-6 sm:py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors text-sm sm:text-base"
                          >
                            Register Free
                          </Link>
                        </>
                      )}
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                      <button
                        className="p-2 text-white hover:text-green-200 touch-manipulation"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle mobile menu"
                      >
                        {isOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
                      </button>
                    </div>
        </div>

                  {/* Mobile Navigation */}
                  {isOpen && (
                    <div className="md:hidden">
                      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-green-700 border-t border-green-500">
                        <Link
                          href="/auctions"
                          className="block px-3 py-3 text-base font-medium text-white hover:text-green-200 touch-manipulation"
                          onClick={() => setIsOpen(false)}
                        >
                          Live Auctions
                        </Link>
                        <Link
                          href="/cars"
                          className="block px-3 py-3 text-base font-medium text-white hover:text-green-200 touch-manipulation"
                          onClick={() => setIsOpen(false)}
                        >
                          Browse Cars
                        </Link>
                        <Link
                          href="/sell"
                          className="block px-3 py-3 text-base font-medium text-white hover:text-green-200 touch-manipulation"
                          onClick={() => setIsOpen(false)}
                        >
                          Sell Your Car
                        </Link>
                        <Link
                          href="/about"
                          className="block px-3 py-3 text-base font-medium text-white hover:text-green-200 touch-manipulation"
                          onClick={() => setIsOpen(false)}
                        >
                          About
                        </Link>
                        {isAuthenticated ? (
                          <div className="pt-4 border-t border-green-500">
                            <p className="px-3 py-2 text-sm text-green-100">Signed in as {user?.name}</p>
                            <Link
                              href="/dashboard"
                              className="block px-3 py-3 text-base font-medium text-white hover:text-green-200 touch-manipulation"
                              onClick={() => setIsOpen(false)}
                            >
                              Dashboard
                            </Link>
                            <button
                              onClick={() => {
                                logout()
                                setIsOpen(false)
                              }}
                              className="block w-full text-left px-3 py-3 text-base font-medium text-white hover:text-green-200 touch-manipulation"
                            >
                              Sign Out
                            </button>
                          </div>
                        ) : (
                          <div className="pt-4 border-t border-green-500 space-y-2">
                            <Link 
                              href="/auth/signin" 
                              onClick={() => setIsOpen(false)}
                              className="w-full px-3 py-3 text-left text-white hover:text-green-200 rounded-lg transition-colors block touch-manipulation"
                            >
                              Sign In
                            </Link>
                            <Link 
                              href="/auth/signup" 
                              onClick={() => setIsOpen(false)}
                              className="w-full bg-red-600 hover:bg-red-700 text-white px-3 py-3 rounded-lg transition-colors block touch-manipulation"
                            >
                              Register Free
                            </Link>
                          </div>
                        )}
            </div>
          </div>
        )}
      </div>
    </nav>
    </>
  )
}
