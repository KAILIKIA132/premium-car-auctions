'use client'

import { useState, useEffect } from 'react'
import { 
  Clock, 
  Users, 
  MapPin, 
  Car, 
  Gavel, 
  Star, 
  Heart, 
  Share2, 
  Shield, 
  CheckCircle,
  AlertCircle,
  Calendar,
  Fuel,
  Gauge,
  Settings,
  Camera,
  Play,
  Pause
} from 'lucide-react'

// Mock auction data
const mockAuction = {
  id: '1',
  car: {
    make: 'Ferrari',
    model: '488 GTB',
    year: 2019,
    images: [
      'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1544829099-b9a0c47f1ad4?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&h=800&fit=crop'
    ],
    mileage: 8500,
    location: 'Nairobi',
    condition: 'EXCELLENT',
    color: 'Rosso Corsa',
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    engine: '3.9L V8 Twin-Turbo',
    horsepower: 661,
    torque: 561,
    features: [
      'Carbon Fiber Package',
      'Racing Seats',
      'Navigation System',
      'Premium Audio',
      'Heated Seats',
      'Backup Camera',
      'Bluetooth',
      'Keyless Entry'
    ],
    description: 'This stunning 2019 Ferrari 488 GTB is a true masterpiece of Italian engineering. Finished in the iconic Rosso Corsa red with a black leather interior, this vehicle represents the perfect balance of performance and luxury. The 3.9L V8 twin-turbo engine delivers an exhilarating 661 horsepower and 561 lb-ft of torque, propelling this supercar from 0-60 mph in just 3.0 seconds. With only 8,500 miles on the odometer, this vehicle has been meticulously maintained and is ready for its next owner to experience the thrill of driving a Ferrari.',
    serviceHistory: 'Complete service history available. Last serviced at Ferrari of Nairobi in December 2023. All maintenance performed by authorized Ferrari technicians.',
    accidents: false,
    previousOwners: 1,
    titleStatus: 'Clean',
    vin: 'ZFF80AHA0K0223456'
  },
  currentBid: 37050000,
  reservePrice: 39000000,
  startingPrice: 32500000,
  endTime: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
  bidCount: 23,
  status: 'LIVE',
  seller: {
    name: 'Elite Motors Nairobi',
    rating: 4.9,
    totalSales: 156,
    memberSince: '2018'
  },
  isWatched: false,
  category: 'Luxury',
  authentication: {
    verified: true,
    inspectionDate: '2024-01-15',
    inspector: 'Marco Ferrari',
    report: 'Complete 150-point inspection passed. Vehicle in excellent condition with no issues found.'
  }
}

export default function AuctionDetailPage({ params }: { params: { id: string } }) {
  const [auction, setAuction] = useState(mockAuction)
  const [selectedImage, setSelectedImage] = useState(0)
  const [bidAmount, setBidAmount] = useState('')
  const [timeRemaining, setTimeRemaining] = useState('')
  const [isWatching, setIsWatching] = useState(auction.isWatched)

  // Update countdown timer
  useEffect(() => {
    const updateTimer = () => {
      const now = new Date()
      const endTime = auction.endTime
      const timeLeft = endTime.getTime() - now.getTime()
      
      if (timeLeft <= 0) {
        setTimeRemaining('Auction Ended')
        return
      }
      
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
      
      setTimeRemaining(`${days}d ${hours}h ${minutes}m`)
    }

    updateTimer()
    const interval = setInterval(updateTimer, 60000) // Update every minute

    return () => clearInterval(interval)
  }, [auction.endTime])

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount)
  }

  const handleBid = () => {
    const bid = parseFloat(bidAmount)
    if (bid > auction.currentBid) {
      setAuction(prev => ({
        ...prev,
        currentBid: bid,
        bidCount: prev.bidCount + 1
      }))
      setBidAmount('')
    }
  }

  const toggleWatch = () => {
    setIsWatching(!isWatching)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Gallery */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="relative">
                <img
                  src={auction.car.images[selectedImage]}
                  alt={`${auction.car.year} ${auction.car.make} ${auction.car.model}`}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                    LIVE
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="flex space-x-2">
                    <button
                      onClick={toggleWatch}
                      className={`p-2 rounded-full ${
                        isWatching ? 'bg-red-500 text-white' : 'bg-white/90 text-gray-600'
                      }`}
                    >
                      <Heart className={`h-5 w-5 ${isWatching ? 'fill-current' : ''}`} />
                    </button>
                    <button className="p-2 bg-white/90 text-gray-600 rounded-full">
                      <Share2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Thumbnail Images */}
              <div className="p-4">
                <div className="flex space-x-2 overflow-x-auto">
                  {auction.car.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden ${
                        selectedImage === index ? 'ring-2 ring-blue-500' : ''
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${auction.car.year} ${auction.car.make} ${auction.car.model} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Vehicle Details */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {auction.car.year} {auction.car.make} {auction.car.model}
              </h1>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-3">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-5 w-5 mr-2" />
                    {auction.car.location}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Car className="h-5 w-5 mr-2" />
                    {auction.car.mileage.toLocaleString()} miles
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-5 w-5 mr-2" />
                    {auction.car.year}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Fuel className="h-5 w-5 mr-2" />
                    {auction.car.fuelType}
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-600">
                    <Gauge className="h-5 w-5 mr-2" />
                    {auction.car.transmission}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Settings className="h-5 w-5 mr-2" />
                    {auction.car.engine}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <span className="w-5 h-5 mr-2 bg-red-500 rounded-full"></span>
                    {auction.car.color}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Shield className="h-5 w-5 mr-2" />
                    {auction.car.condition}
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {auction.car.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
                <p className="text-gray-600 leading-relaxed">{auction.car.description}</p>
              </div>

              {/* Service History */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Service History</h3>
                <p className="text-gray-600">{auction.car.serviceHistory}</p>
              </div>

              {/* Authentication Report */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-medium text-green-900">Vehicle Authenticated</h4>
                    <p className="text-sm text-green-700 mt-1">{auction.authentication.report}</p>
                    <p className="text-xs text-green-600 mt-2">
                      Inspected by {auction.authentication.inspector} on {auction.authentication.inspectionDate}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Auction Sidebar */}
          <div className="space-y-6">
            {/* Auction Info */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {formatCurrency(auction.currentBid)}
                </div>
                <div className="text-sm text-gray-500">Current Bid</div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Starting Price</span>
                  <span className="font-semibold">{formatCurrency(auction.startingPrice)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Reserve Price</span>
                  <span className="font-semibold">{formatCurrency(auction.reservePrice)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Bids</span>
                  <span className="font-semibold">{auction.bidCount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Time Remaining</span>
                  <span className="font-semibold text-red-600">{timeRemaining}</span>
                </div>
              </div>

              {/* Bid Form */}
              <div className="mt-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Bid Amount
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                    <input
                      type="number"
                      value={bidAmount}
                      onChange={(e) => setBidAmount(e.target.value)}
                      placeholder="Enter bid amount"
                      className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <button
                  onClick={handleBid}
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Place Bid
                </button>
                <button className="w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                  Buy It Now
                </button>
              </div>
            </div>

            {/* Seller Info */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Seller Information</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-600 font-semibold">
                      {auction.seller.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{auction.seller.name}</div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                      {auction.seller.rating} ({auction.seller.totalSales} sales)
                    </div>
                  </div>
                </div>
                <div className="text-sm text-gray-600">
                  Member since {auction.seller.memberSince}
                </div>
                <button className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                  Contact Seller
                </button>
              </div>
            </div>

            {/* Auction Rules */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Auction Rules</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                  <span>All bids are final and binding</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                  <span>Payment due within 24 hours</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                  <span>7-day inspection period</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                  <span>Worldwide shipping available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
