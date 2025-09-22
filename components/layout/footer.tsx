import Link from 'next/link'
import { Car, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Car className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">Premium Auctions</span>
            </div>
            <p className="text-gray-400 text-sm">
              World-class car auction platform featuring premium vehicles from around the globe. 
              Your trusted partner in luxury automotive transactions.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/auctions" className="block text-gray-400 hover:text-white transition-colors">
                Live Auctions
              </Link>
              <Link href="/cars" className="block text-gray-400 hover:text-white transition-colors">
                Browse Cars
              </Link>
              <Link href="/sell" className="block text-gray-400 hover:text-white transition-colors">
                Sell Your Car
              </Link>
              <Link href="/how-it-works" className="block text-gray-400 hover:text-white transition-colors">
                How It Works
              </Link>
              <Link href="/faq" className="block text-gray-400 hover:text-white transition-colors">
                FAQ
              </Link>
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Categories</h3>
            <div className="space-y-2">
              <Link href="/cars/luxury" className="block text-gray-400 hover:text-white transition-colors">
                Luxury Cars
              </Link>
              <Link href="/cars/classic" className="block text-gray-400 hover:text-white transition-colors">
                Classic Cars
              </Link>
              <Link href="/cars/sports" className="block text-gray-400 hover:text-white transition-colors">
                Sports Cars
              </Link>
              <Link href="/cars/suv" className="block text-gray-400 hover:text-white transition-colors">
                SUVs
              </Link>
              <Link href="/cars/salvage" className="block text-gray-400 hover:text-white transition-colors">
                Salvage Vehicles
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-gray-400" />
                <span className="text-gray-400 text-sm">
                  123 Westlands Auction Street<br />
                  Nairobi, ON M5V 3A8
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-400" />
                <span className="text-gray-400 text-sm">+254 (706) 668-927</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-400" />
                <span className="text-gray-400 text-sm">info@premiumauctions.co.ke</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Premium Auctions. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
