'use client'

import { useState } from 'react'
import { 
  Heart, 
  Share2, 
  Mail, 
  Printer, 
  ChevronLeft, 
  ChevronRight, 
  MapPin, 
  Calendar, 
  Clock, 
  Shield, 
  CheckCircle,
  AlertTriangle,
  Eye,
  Star,
  Gavel,
  Calculator,
  Truck,
  Wrench,
  CreditCard
} from 'lucide-react'

const vehicleData = {
  id: '49667704',
  title: '2023 Jeep Compass Trailhawk 2.0L 4 for Sale in Nisku, AB',
  make: 'Jeep',
  model: 'Compass Trailhawk',
  year: 2023,
  engine: '2.0L 4',
  location: 'Nisku, AB',
  auctionLocation: 'AB - Nisku',
  saleDate: '09/25/2025',
  saleTime: '12:00 PM MDT',
  vin: '3C4NJDDNXP*******',
  lotNumber: '49667704',
  actualCashValue: 49725,
  titleState: 'AB - BOS - SALVAGE',
  odometer: 46147,
  odometerStatus: 'Not Actual',
  primaryDamage: 'Front end',
  secondaryDamage: 'Side',
  color: 'Red',
  images: [
    'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1544829099-b9a0c47f1ad4?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop'
  ],
  features: [
    '4WD/AWD',
    'Automatic Transmission',
    'Air Conditioning',
    'Power Steering',
    'Power Windows',
    'Power Locks',
    'Cruise Control',
    'Bluetooth',
    'Backup Camera',
    'Heated Seats'
  ],
  currentBid: 0,
  reservePrice: 45000,
  bidCount: 0,
  timeRemaining: '2d 5h 23m',
  isWatched: false
}

export default function VehicleDetailPage({ params }: { params: { id: string } }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isWatched, setIsWatched] = useState(vehicleData.isWatched)
  const [bidAmount, setBidAmount] = useState('')

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-CA', {
      style: 'currency',
      currency: 'CAD',
    }).format(amount)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % vehicleData.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + vehicleData.images.length) % vehicleData.images.length)
  }

  const handleBid = () => {
    // Handle bid submission
    console.log('Bid amount:', bidAmount)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <a href="/" className="text-blue-600 hover:text-blue-800">HOME</a>
            <span className="text-gray-400">&gt;</span>
            <a href="/cars" className="text-blue-600 hover:text-blue-800">BUY SALVAGE CARS</a>
            <span className="text-gray-400">&gt;</span>
            <a href="/cars?make=jeep" className="text-blue-600 hover:text-blue-800">JEEP</a>
            <span className="text-gray-400">&gt;</span>
            <a href="/cars?make=jeep&model=compass" className="text-blue-600 hover:text-blue-800">COMPASS</a>
            <span className="text-gray-400">&gt;</span>
            <span className="text-gray-600">LOT DETAILS</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Vehicle Images */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              {/* Main Image */}
              <div className="relative">
                <img
                  src={vehicleData.images[currentImageIndex]}
                  alt={vehicleData.title}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-black/70 text-white px-3 py-1 rounded text-sm">
                    Click image to zoom
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="flex space-x-2">
                    <button className="bg-white/90 hover:bg-white p-2 rounded-full transition-colors">
                      <Heart className={`h-5 w-5 ${isWatched ? 'text-red-500 fill-current' : 'text-gray-600'}`} />
                    </button>
                    <button className="bg-white/90 hover:bg-white p-2 rounded-full transition-colors">
                      <Share2 className="h-5 w-5 text-gray-600" />
                    </button>
                  </div>
                </div>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full transition-colors"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full transition-colors"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
              
              {/* Thumbnail Images */}
              <div className="p-4">
                <div className="flex space-x-2 overflow-x-auto">
                  {vehicleData.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-20 h-16 rounded border-2 ${
                        index === currentImageIndex ? 'border-blue-500' : 'border-gray-200'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${vehicleData.title} ${index + 1}`}
                        className="w-full h-full object-cover rounded"
                      />
                    </button>
                  ))}
                </div>
                <button className="mt-4 text-blue-600 hover:text-blue-800 font-medium">
                  View Large Images
                </button>
              </div>
            </div>

            {/* Vehicle Title */}
            <div className="mt-6">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">{vehicleData.title}</h1>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>Auction Location: {vehicleData.auctionLocation}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>Sale Date: {vehicleData.saleDate} - {vehicleData.saleTime}</span>
                </div>
              </div>
                </div>
              </div>

          {/* Right Column - Details and Bidding */}
          <div className="space-y-6">
            {/* Action Buttons */}
            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="flex flex-wrap gap-2">
                <button 
                  onClick={() => setIsWatched(!isWatched)}
                  className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isWatched 
                      ? 'bg-red-100 text-red-700 hover:bg-red-200' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Heart className="h-4 w-4 mr-2" />
                  Add to Watchlist
                </button>
                <button className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
                  <Share2 className="h-4 w-4 mr-2" />
                  Compare
                </button>
                <button className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
                  <Mail className="h-4 w-4 mr-2" />
                  Send to Email
                </button>
                <button className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
                  <Printer className="h-4 w-4 mr-2" />
                  Print
                </button>
              </div>
              <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
                <a href="/cars" className="text-blue-600 hover:text-blue-800">Back to results</a>
                <a href="#" className="text-blue-600 hover:text-blue-800">Next &gt;</a>
              </div>
              </div>

            {/* Lot Details */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">LOT DETAILS</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">VIN:</span>
                  <div className="flex items-center">
                    <span className="text-sm font-medium">{vehicleData.vin}</span>
                    <button className="ml-2 text-blue-600 hover:text-blue-800 text-sm font-medium">
                      Buy VIN Report
                    </button>
                    <CheckCircle className="ml-2 h-4 w-4 text-green-500" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Lot Number:</span>
                  <span className="text-sm font-medium">{vehicleData.lotNumber}</span>
                  </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Actual Cash Value:</span>
                  <span className="text-sm font-medium">{formatCurrency(vehicleData.actualCashValue)}</span>
                  </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Title State/Type:</span>
                  <div className="flex items-center">
                    <span className="text-sm font-medium">{vehicleData.titleState}</span>
                    <button className="ml-1 text-gray-400 hover:text-gray-600">
                      <AlertTriangle className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Odometer:</span>
                  <span className="text-sm font-medium">{vehicleData.odometer.toLocaleString()} mi ({vehicleData.odometerStatus})</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Primary Damage:</span>
                  <span className="text-sm font-medium">{vehicleData.primaryDamage}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Secondary Damage:</span>
                  <span className="text-sm font-medium">{vehicleData.secondaryDamage}</span>
              </div>
            </div>
          </div>

            {/* Features */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">FEATURES</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Color:</span>
                  <span className="text-sm font-medium">{vehicleData.color}</span>
                </div>
                {vehicleData.features.slice(0, 5).map((feature, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">{feature}:</span>
                    <CheckCircle className="h-4 w-4 text-green-500" />
              </div>
                ))}
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  View All Features
                </button>
              </div>
            </div>

            {/* Bid Information */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">BID INFORMATION</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Current Bid:</span>
                  <span className="text-lg font-bold text-blue-600">{formatCurrency(vehicleData.currentBid)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Reserve Price:</span>
                  <span className="text-sm font-medium">{formatCurrency(vehicleData.reservePrice)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Time Remaining:</span>
                  <span className="text-sm font-medium flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {vehicleData.timeRemaining}
                    </span>
                  </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Bids:</span>
                  <span className="text-sm font-medium">{vehicleData.bidCount}</span>
                </div>
                
                <div className="pt-4 border-t border-gray-200">
                  <div className="space-y-3">
                  <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Enter Your Bid Amount
                      </label>
                      <div className="flex">
                        <span className="inline-flex items-center px-3 border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                          CAD
                        </span>
                        <input
                          type="number"
                          value={bidAmount}
                          onChange={(e) => setBidAmount(e.target.value)}
                          placeholder="0.00"
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                    <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center">
                      <Gavel className="h-4 w-4 mr-2" />
                      Place Bid
                    </button>
                    <button className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center">
                      <Calculator className="h-4 w-4 mr-2" />
                      Fee Calculator
                    </button>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <p className="text-xs text-gray-600 mb-3">
                    This vehicle is being sold "as is - where is". All bids are binding and all sales are final. 
                    <a href="#" className="text-blue-600 hover:text-blue-800"> What this Means</a>
                  </p>
                <div className="space-y-2">
                    <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                      Login
                    </button>
                    <button className="w-full border border-blue-600 text-blue-600 py-2 px-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                      Register Free
                  </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Partner Services */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">PARTNER SERVICES</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-center">
                    <Truck className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-sm font-medium">Transportation</span>
                </div>
                  <ChevronRight className="h-4 w-4 text-gray-400" />
                </button>
                <button className="w-full flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-center">
                    <Wrench className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-sm font-medium">Inspection Services</span>
                </div>
                  <ChevronRight className="h-4 w-4 text-gray-400" />
                </button>
                <button className="w-full flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-center">
                    <CreditCard className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-sm font-medium">Financing</span>
                </div>
                  <ChevronRight className="h-4 w-4 text-gray-400" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}