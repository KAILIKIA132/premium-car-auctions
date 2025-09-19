'use client'

import Link from 'next/link'
import { Car, Home, Search, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* 404 Illustration */}
        <div className="mb-8">
          <div className="relative">
            <Car className="h-32 w-32 text-gray-300 mx-auto mb-4" />
            <div className="absolute -top-2 -right-2 bg-red-500 text-white text-2xl font-bold rounded-full h-12 w-12 flex items-center justify-center">
              4
            </div>
            <div className="absolute -top-2 -left-2 bg-red-500 text-white text-2xl font-bold rounded-full h-12 w-12 flex items-center justify-center">
              4
            </div>
          </div>
        </div>

        {/* Error Message */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Page Not Found
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Sorry, we couldn't find the page you're looking for. The car might have been sold or the page might have moved.
        </p>

        {/* Action Buttons */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              <Home className="h-5 w-5 mr-2" />
              Go Home
            </Link>
            <Link
              href="/cars"
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              <Search className="h-5 w-5 mr-2" />
              Browse Cars
            </Link>
          </div>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center text-gray-600 hover:text-gray-800 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Go Back
          </button>
        </div>

        {/* Helpful Links */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Popular Pages
          </h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <Link href="/auctions" className="text-blue-600 hover:text-blue-700">
              Live Auctions
            </Link>
            <Link href="/cars" className="text-blue-600 hover:text-blue-700">
              Browse Cars
            </Link>
            <Link href="/sell" className="text-blue-600 hover:text-blue-700">
              Sell Your Car
            </Link>
            <Link href="/about" className="text-blue-600 hover:text-blue-700">
              About Us
            </Link>
            <Link href="/how-it-works" className="text-blue-600 hover:text-blue-700">
              How It Works
            </Link>
            <Link href="/contact" className="text-blue-600 hover:text-blue-700">
              Contact Us
            </Link>
          </div>
        </div>

        {/* Search Suggestion */}
        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
          <h4 className="font-semibold text-blue-900 mb-2">
            Looking for something specific?
          </h4>
          <p className="text-sm text-blue-700 mb-3">
            Try searching for the car you're looking for or browse our categories.
          </p>
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="Search cars, make, model..."
              className="flex-1 px-3 py-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
