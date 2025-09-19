'use client'

import { useState, useEffect } from 'react'
import { 
  Clock, 
  Users, 
  MapPin, 
  Car, 
  Star, 
  Heart, 
  Share2, 
  Shield, 
  CheckCircle,
  Calendar,
  Fuel,
  Gauge,
  Settings,
  Camera,
  Play,
  Pause,
  ArrowLeft,
  ArrowRight
} from 'lucide-react'
import Link from 'next/link'

// Mock car data
const mockCar = {
  id: '1',
  make: 'Ferrari',
  model: '488 GTB',
  year: 2019,
  images: [
    'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1544829099-b9a0c47f1ad4?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1200&h=800&fit=crop'
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
  price: 37050000,
  features: [
    'Carbon Fiber Package',
    'Racing Seats',
    'Navigation System',
    'Premium Audio',
    'Heated Seats',
    'Backup Camera',
    'Bluetooth',
    'Keyless Entry',
    'Cruise Control',
    'Leather Interior',
    'Sunroof',
    'All-Wheel Drive'
  ],
  description: 'This stunning 2019 Ferrari 488 GTB is a true masterpiece of Italian engineering. Finished in the iconic Rosso Corsa red with a black leather interior, this vehicle represents the perfect balance of performance and luxury. The 3.9L V8 twin-turbo engine delivers an exhilarating 661 horsepower and 561 lb-ft of torque, propelling this supercar from 0-60 mph in just 3.0 seconds. With only 8,500 miles on the odometer, this vehicle has been meticulously maintained and is ready for its next owner to experience the thrill of driving a Ferrari.',
  serviceHistory: 'Complete service history available. Last serviced at Ferrari of Nairobi in December 2023. All maintenance performed by authorized Ferrari technicians.',
  accidents: false,
  previousOwners: 1,
  titleStatus: 'Clean',
  vin: 'ZFF80AHA0K0223456',
  seller: {
    name: 'Elite Motors Nairobi',
    rating: 4.9,
    totalSales: 156,
    memberSince: '2018',
    phone: '+377 93 50 12 34',
    email: 'sales@elitemotors.mc'
  },
  isWatched: false,
  category: 'Luxury',
  specifications: {
    acceleration: '3.0s 0-60 mph',
    topSpeed: '205 mph',
    fuelEconomy: '15/20 mpg',
    seating: '2',
    doors: '2',
    drivetrain: 'RWD',
    weight: '3255 lbs',
    length: '179.8 in',
    width: '76.9 in',
    height: '47.8 in'
  },
  auctionEnd: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000)
}

export default function CarDetailPage({ params }: { params: { id: string } }) {
  const [car, setCar] = useState(mockCar)
  const [selectedImage, setSelectedImage] = useState(0)
  const [isWatching, setIsWatching] = useState(car.isWatched)
  const [timeRemaining, setTimeRemaining] = useState('')

  // Update countdown timer
  useEffect(() => {
    const updateTimer = () => {
      const now = new Date()
      const endTime = car.auctionEnd
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
  }, [car.auctionEnd])

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount)
  }

  const toggleWatch = () => {
    setIsWatching(!isWatching)
  }

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % car.images.length)
  }

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + car.images.length) % car.images.length)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span>/</span>
            <Link href="/cars" className="hover:text-blue-600">Cars</Link>
            <span>/</span>
            <span className="text-gray-900">{car.year} {car.make} {car.model}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Gallery */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="relative group">
                <img
                  src={car.images[selectedImage]}
                  alt={`${car.year} ${car.make} ${car.model}`}
                  className="w-full h-96 object-cover"
                />
                
                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ArrowLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ArrowRight className="h-5 w-5" />
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-sm">
                  {selectedImage + 1} / {car.images.length}
                </div>

                {/* Action Buttons */}
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
                  {car.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden ${
                        selectedImage === index ? 'ring-2 ring-blue-500' : ''
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${car.year} ${car.make} ${car.model} ${index + 1}`}
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
                {car.year} {car.make} {car.model}
              </h1>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-3">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-5 w-5 mr-2" />
                    {car.location}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Car className="h-5 w-5 mr-2" />
                    {car.mileage.toLocaleString()} miles
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-5 w-5 mr-2" />
                    {car.year}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Fuel className="h-5 w-5 mr-2" />
                    {car.fuelType}
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-600">
                    <Gauge className="h-5 w-5 mr-2" />
                    {car.transmission}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Settings className="h-5 w-5 mr-2" />
                    {car.engine}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <span className="w-5 h-5 mr-2 bg-red-500 rounded-full"></span>
                    {car.color}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Shield className="h-5 w-5 mr-2" />
                    {car.condition}
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {car.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Specifications */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Specifications</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {Object.entries(car.specifications).map(([key, value]) => (
                    <div key={key} className="bg-gray-50 rounded-lg p-3">
                      <div className="text-sm text-gray-600 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                      <div className="font-semibold text-gray-900">{value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
                <p className="text-gray-600 leading-relaxed">{car.description}</p>
              </div>

              {/* Service History */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Service History</h3>
                <p className="text-gray-600">{car.serviceHistory}</p>
              </div>

              {/* Vehicle History */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Vehicle History</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-sm text-gray-600">No accidents reported</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-sm text-gray-600">Clean title</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-sm text-gray-600">{car.previousOwners} previous owner(s)</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-sm text-gray-600">VIN: {car.vin}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Price & Actions */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {formatCurrency(car.price)}
                </div>
                <div className="text-sm text-gray-500">Current Price</div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Auction Ends</span>
                  <span className="font-semibold text-red-600">{timeRemaining}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Watching</span>
                  <span className="font-semibold">23 people</span>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Place Bid
                </button>
                <button className="w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                  Buy It Now
                </button>
                <button className="w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                  Make Offer
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
                      {car.seller.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{car.seller.name}</div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                      {car.seller.rating} ({car.seller.totalSales} sales)
                    </div>
                  </div>
                </div>
                <div className="text-sm text-gray-600">
                  Member since {car.seller.memberSince}
                </div>
                <div className="space-y-2">
                  <button className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                    Contact Seller
                  </button>
                  <div className="text-xs text-gray-500 text-center">
                    {car.seller.phone} • {car.seller.email}
                  </div>
                </div>
              </div>
            </div>

            {/* Safety & Security */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Safety & Security</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-sm text-gray-600">Vehicle Authenticated</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-sm text-gray-600">Secure Escrow</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-sm text-gray-600">7-Day Inspection</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-sm text-gray-600">Worldwide Shipping</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
