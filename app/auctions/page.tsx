'use client'

import { useState, useEffect } from 'react'
import { Clock, Users, MapPin, Car, Gavel, Filter, Search, Star, Zap, Crown } from 'lucide-react'

// Mock data for live auctions
const liveAuctions = [
  {
    id: '1',
    car: {
      make: 'Ferrari',
      model: '488 GTB',
      year: 2019,
      image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&h=600&fit=crop',
      mileage: 8500,
      location: 'Nairobi',
      condition: 'EXCELLENT',
      color: 'Rosso Corsa',
      fuelType: 'Gasoline',
      transmission: 'Automatic',
      buyItNowPrice: 42000000
    },
    currentBid: 37050000,
    reservePrice: 39000000,
    endTime: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
    bidCount: 23,
    status: 'LIVE',
    timeRemaining: '2d 5h 23m',
    isWatched: true,
    category: 'Luxury'
  },
  {
    id: '2',
    car: {
      make: 'Porsche',
      model: '911 Turbo S',
      year: 2021,
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop',
      mileage: 3200,
      location: 'Mombasa',
      condition: 'EXCELLENT',
      color: 'Jet Black',
      fuelType: 'Gasoline',
      transmission: 'PDK',
      buyItNowPrice: 30000000
    },
    currentBid: 25350000,
    reservePrice: 28600000,
    endTime: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
    bidCount: 15,
    status: 'LIVE',
    timeRemaining: '5d 2h 15m',
    isWatched: false,
    category: 'Sports'
  },
  {
    id: '3',
    car: {
      make: 'Lamborghini',
      model: 'Huracán EVO',
      year: 2020,
      image: 'https://images.unsplash.com/photo-1544829099-b9a0c47f1ad4?w=800&h=600&fit=crop',
      mileage: 12000,
      location: 'Kisumu',
      condition: 'GOOD',
      color: 'Arancio Borealis',
      fuelType: 'Gasoline',
      transmission: 'Automatic'
    },
    currentBid: 31850000,
    reservePrice: 36400000,
    endTime: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
    bidCount: 31,
    status: 'LIVE',
    timeRemaining: '1d 3h 45m',
    isWatched: true,
    category: 'Luxury'
  },
  {
    id: '4',
    car: {
      make: 'McLaren',
      model: '720S',
      year: 2018,
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop',
      mileage: 18000,
      location: 'Nakuru',
      condition: 'EXCELLENT',
      color: 'Volcano Orange',
      fuelType: 'Gasoline',
      transmission: 'Automatic'
    },
    currentBid: 24050000,
    reservePrice: 26000000,
    endTime: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
    bidCount: 19,
    status: 'LIVE',
    timeRemaining: '3d 1h 30m',
    isWatched: false,
    category: 'Sports'
  },
  {
    id: '5',
    car: {
      make: 'BMW',
      model: 'M8 Competition',
      year: 2022,
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop',
      mileage: 2500,
      location: 'Munich',
      condition: 'EXCELLENT',
      color: 'Sapphire Black',
      fuelType: 'Gasoline',
      transmission: 'Automatic'
    },
    currentBid: 125000,
    reservePrice: 140000,
    endTime: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    bidCount: 8,
    status: 'UPCOMING',
    timeRemaining: '7d 2h 10m',
    isWatched: false,
    category: 'Luxury'
  },
  {
    id: '6',
    car: {
      make: 'Audi',
      model: 'R8 V10 Plus',
      year: 2020,
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop',
      mileage: 15000,
      location: 'Ingolstadt',
      condition: 'GOOD',
      color: 'Daytona Gray',
      fuelType: 'Gasoline',
      transmission: 'Automatic'
    },
    currentBid: 165000,
    reservePrice: 180000,
    endTime: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    bidCount: 42,
    status: 'ENDED',
    timeRemaining: 'Auction Ended',
    isWatched: false,
    category: 'Sports'
  }
]

export default function AuctionsPage() {
  const [auctions, setAuctions] = useState(liveAuctions)
  const [filteredAuctions, setFilteredAuctions] = useState(liveAuctions)
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState('ALL')
  const [categoryFilter, setCategoryFilter] = useState('ALL')
  const [sortBy, setSortBy] = useState('endTime')
  const [viewMode, setViewMode] = useState('grid') // grid or list
  const [priceRange, setPriceRange] = useState({ min: '', max: '' })
  const [yearRange, setYearRange] = useState({ min: '', max: '' })
  const [mileageRange, setMileageRange] = useState({ min: '', max: '' })
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false)

  // Filter and search
  useEffect(() => {
    let filtered = auctions

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(auction =>
        auction.car.make.toLowerCase().includes(searchQuery.toLowerCase()) ||
        auction.car.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
        auction.car.location.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    // Status filter
    if (statusFilter !== 'ALL') {
      filtered = filtered.filter(auction => auction.status === statusFilter)
    }

    // Category filter
    if (categoryFilter !== 'ALL') {
      filtered = filtered.filter(auction => auction.category === categoryFilter)
    }

    // Price range filter
    if (priceRange.min) {
      filtered = filtered.filter(auction => auction.currentBid >= parseFloat(priceRange.min))
    }
    if (priceRange.max) {
      filtered = filtered.filter(auction => auction.currentBid <= parseFloat(priceRange.max))
    }

    // Year range filter
    if (yearRange.min) {
      filtered = filtered.filter(auction => auction.car.year >= parseInt(yearRange.min))
    }
    if (yearRange.max) {
      filtered = filtered.filter(auction => auction.car.year <= parseInt(yearRange.max))
    }

    // Mileage range filter
    if (mileageRange.min) {
      filtered = filtered.filter(auction => auction.car.mileage >= parseInt(mileageRange.min))
    }
    if (mileageRange.max) {
      filtered = filtered.filter(auction => auction.car.mileage <= parseInt(mileageRange.max))
    }

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'endTime':
          return a.endTime.getTime() - b.endTime.getTime()
        case 'currentBid':
          return b.currentBid - a.currentBid
        case 'bidCount':
          return b.bidCount - a.bidCount
        case 'make':
          return a.car.make.localeCompare(b.car.make)
        default:
          return 0
      }
    })

    setFilteredAuctions(filtered)
  }, [auctions, searchQuery, statusFilter, categoryFilter, sortBy, priceRange, yearRange, mileageRange])

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-KE', {
      style: 'currency',
      currency: 'KES',
    }).format(amount)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'LIVE':
        return 'bg-red-500 text-white animate-pulse'
      case 'UPCOMING':
        return 'bg-blue-500 text-white'
      case 'ENDED':
        return 'bg-gray-500 text-white'
      default:
        return 'bg-gray-500 text-white'
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Luxury':
        return <Crown className="h-4 w-4" />
      case 'Sports':
        return <Zap className="h-4 w-4" />
      default:
        return <Car className="h-4 w-4" />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Live Auctions
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Bid on premium vehicles from around the world. Real-time auctions with secure bidding.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters and Search */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Search & Filters</h3>
            <button
              onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
              className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
            >
              <Filter className="h-4 w-4 mr-1" />
              {showAdvancedFilters ? 'Hide' : 'Show'} Advanced Filters
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search by make, model, VIN, or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="ALL">All Status</option>
              <option value="LIVE">Live</option>
              <option value="UPCOMING">Upcoming</option>
              <option value="ENDED">Ended</option>
            </select>

            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="ALL">All Categories</option>
              <option value="Luxury">Luxury</option>
              <option value="Sports">Sports</option>
              <option value="Classic">Classic</option>
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="endTime">End Time</option>
              <option value="currentBid">Current Bid</option>
              <option value="bidCount">Bid Count</option>
              <option value="make">Make</option>
            </select>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Advanced Filters */}
          {showAdvancedFilters && (
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Price Range */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="number"
                      placeholder="Min Price"
                      value={priceRange.min}
                      onChange={(e) => setPriceRange(prev => ({ ...prev, min: e.target.value }))}
                      className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <input
                      type="number"
                      placeholder="Max Price"
                      value={priceRange.max}
                      onChange={(e) => setPriceRange(prev => ({ ...prev, max: e.target.value }))}
                      className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Year Range */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Year Range</label>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="number"
                      placeholder="Min Year"
                      value={yearRange.min}
                      onChange={(e) => setYearRange(prev => ({ ...prev, min: e.target.value }))}
                      className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <input
                      type="number"
                      placeholder="Max Year"
                      value={yearRange.max}
                      onChange={(e) => setYearRange(prev => ({ ...prev, max: e.target.value }))}
                      className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Mileage Range */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mileage Range</label>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="number"
                      placeholder="Min Mileage"
                      value={mileageRange.min}
                      onChange={(e) => setMileageRange(prev => ({ ...prev, min: e.target.value }))}
                      className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <input
                      type="number"
                      placeholder="Max Mileage"
                      value={mileageRange.max}
                      onChange={(e) => setMileageRange(prev => ({ ...prev, max: e.target.value }))}
                      className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Clear Filters Button */}
              <div className="mt-4 flex justify-end">
                <button
                  onClick={() => {
                    setSearchQuery('')
                    setStatusFilter('ALL')
                    setCategoryFilter('ALL')
                    setPriceRange({ min: '', max: '' })
                    setYearRange({ min: '', max: '' })
                    setMileageRange({ min: '', max: '' })
                  }}
                  className="text-gray-600 hover:text-gray-800 font-medium"
                >
                  Clear All Filters
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">
            Showing {filteredAuctions.length} of {auctions.length} auctions
          </p>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">Live Updates:</span>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-green-600 font-medium">Active</span>
          </div>
        </div>

        {/* Auctions Grid/List */}
        <div className={viewMode === 'grid' 
          ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" 
          : "space-y-4"
        }>
          {filteredAuctions.map((auction) => (
            <div key={auction.id} className={`group hover:shadow-xl transition-all duration-300 overflow-hidden bg-white rounded-lg border border-gray-200 ${
              viewMode === 'list' ? 'flex' : ''
            }`}>
              <div className={`relative ${viewMode === 'list' ? 'w-1/3' : 'w-full'}`}>
                <img
                  src={auction.car.image}
                  alt={`${auction.car.year} ${auction.car.make} ${auction.car.model}`}
                  className={`${viewMode === 'list' ? 'h-48' : 'h-48'} w-full object-cover group-hover:scale-105 transition-transform duration-300`}
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(auction.status)}`}>
                    {auction.status}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 text-gray-900 px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {auction.timeRemaining}
                  </span>
                </div>
                {auction.isWatched && (
                  <div className="absolute bottom-4 right-4">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  </div>
                )}
              </div>

              <div className={`p-6 ${viewMode === 'list' ? 'w-2/3' : 'w-full'}`}>
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {auction.car.year} {auction.car.make} {auction.car.model}
                  </h3>
                  <div className="flex items-center text-blue-600">
                    {getCategoryIcon(auction.category)}
                    <span className="ml-1 text-sm font-medium">{auction.category}</span>
                  </div>
                </div>
                
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  {auction.car.location}
                  <span className="mx-2">•</span>
                  <Car className="h-4 w-4 mr-1" />
                  {auction.car.mileage.toLocaleString()} miles
                  <span className="mx-2">•</span>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">{auction.car.condition}</span>
                  <span className="mx-2">•</span>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">{auction.car.fuelType}</span>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Current Bid</span>
                    <span className="text-lg font-bold text-blue-600">
                      {formatCurrency(auction.currentBid)}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Reserve Price</span>
                    <span className="text-sm text-gray-700">
                      {formatCurrency(auction.reservePrice)}
                    </span>
                  </div>

                  {auction.car.buyItNowPrice && (
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Buy It Now</span>
                      <span className="text-sm font-semibold text-green-600">
                        {formatCurrency(auction.car.buyItNowPrice)}
                      </span>
                    </div>
                  )}

                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Bids</span>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1 text-gray-500" />
                      <span className="text-sm text-gray-700">{auction.bidCount}</span>
                    </div>
                  </div>

                  <div className="flex gap-2 mt-4">
                    <button className={`flex-1 py-2 px-4 rounded-lg font-semibold transition-colors ${
                      auction.status === 'ENDED' 
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`} disabled={auction.status === 'ENDED'}>
                      <Gavel className="h-4 w-4 mr-2 inline" />
                      {auction.status === 'ENDED' ? 'Auction Ended' : 'Place Bid'}
                    </button>
                    {auction.car.buyItNowPrice && auction.status !== 'ENDED' && (
                      <button className="flex-1 py-2 px-4 rounded-lg font-semibold bg-green-600 text-white hover:bg-green-700 transition-colors">
                        <Zap className="h-4 w-4 mr-2 inline" />
                        Buy It Now
                      </button>
                    )}
                    <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                      <Star className={`h-4 w-4 ${auction.isWatched ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        {filteredAuctions.length > 0 && (
          <div className="text-center mt-12">
            <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
              Load More Auctions
            </button>
          </div>
        )}

        {/* No Results */}
        {filteredAuctions.length === 0 && (
          <div className="text-center py-12">
            <Car className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No auctions found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search criteria</p>
            <button 
              onClick={() => {
                setSearchQuery('')
                setStatusFilter('ALL')
                setCategoryFilter('ALL')
              }}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  )
}