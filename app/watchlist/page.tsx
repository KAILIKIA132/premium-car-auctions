'use client'

import { useState } from 'react'
import { 
  Heart, 
  Clock, 
  MapPin, 
  Car, 
  Gavel, 
  Star, 
  Eye,
  Filter,
  Search,
  Grid,
  List,
  X
} from 'lucide-react'

const mockWatchlist = [
  {
    id: '1',
    car: {
      make: 'Ferrari',
      model: '488 GTB',
      year: 2019,
      image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&h=600&fit=crop',
      mileage: 8500,
      location: 'Nairobi',
      condition: 'EXCELLENT'
    },
    auction: {
      currentBid: 37050000,
      reservePrice: 39000000,
      endTime: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
      bidCount: 23,
      status: 'LIVE'
    },
    addedDate: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000)
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
      condition: 'EXCELLENT'
    },
    auction: {
      currentBid: 25350000,
      reservePrice: 28600000,
      endTime: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
      bidCount: 15,
      status: 'LIVE'
    },
    addedDate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000)
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
      condition: 'EXCELLENT'
    },
    auction: {
      currentBid: 31850000,
      reservePrice: 36400000,
      endTime: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
      bidCount: 31,
      status: 'LIVE'
    },
    addedDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000)
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
      condition: 'GOOD'
    },
    auction: {
      currentBid: 24050000,
      reservePrice: 26000000,
      endTime: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      bidCount: 0,
      status: 'UPCOMING'
    },
    addedDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000)
  }
]

export default function WatchlistPage() {
  const [watchlist, setWatchlist] = useState(mockWatchlist)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('recent')

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'KES',
    }).format(amount)
  }

  const formatTimeRemaining = (endTime: Date) => {
    const now = new Date()
    const timeLeft = endTime.getTime() - now.getTime()
    
    if (timeLeft <= 0) return 'Auction Ended'
    
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
    
    if (days > 0) return `${days}d ${hours}h ${minutes}m`
    if (hours > 0) return `${hours}h ${minutes}m`
    return `${minutes}m`
  }

  const removeFromWatchlist = (id: string) => {
    setWatchlist(prev => prev.filter(item => item.id !== id))
  }

  const filteredWatchlist = watchlist.filter(item => 
    item.car.make.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.car.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.car.year.toString().includes(searchQuery)
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">My Watchlist</h1>
              <p className="text-gray-600 mt-2">
                {watchlist.length} vehicle{watchlist.length !== 1 ? 's' : ''} being watched
              </p>
            </div>
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search watchlist..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="recent">Recently Added</option>
                <option value="ending">Ending Soon</option>
                <option value="price-high">Price: High to Low</option>
                <option value="price-low">Price: Low to High</option>
              </select>

              {/* View Mode */}
              <div className="flex border border-gray-300 rounded-lg">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'text-gray-600'}`}
                >
                  <Grid className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'text-gray-600'}`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Watchlist Items */}
        {filteredWatchlist.length === 0 ? (
          <div className="text-center py-12">
            <Heart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No items in watchlist</h3>
            <p className="text-gray-600 mb-6">Start adding vehicles to your watchlist to track their auctions</p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Browse Auctions
            </button>
          </div>
        ) : (
          <div className={viewMode === 'grid' 
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' 
            : 'space-y-4'
          }>
            {filteredWatchlist.map((item) => (
              <div
                key={item.id}
                className={`bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden ${
                  viewMode === 'list' ? 'flex' : ''
                }`}
              >
                {/* Image */}
                <div className={`relative ${viewMode === 'list' ? 'w-64 h-48' : 'h-48'}`}>
                  <img
                    src={item.car.image}
                    alt={`${item.car.year} ${item.car.make} ${item.car.model}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      item.auction.status === 'LIVE' 
                        ? 'bg-red-500 text-white animate-pulse'
                        : 'bg-blue-500 text-white'
                    }`}>
                      {item.auction.status}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <button
                      onClick={() => removeFromWatchlist(item.id)}
                      className="p-2 bg-white/90 text-gray-600 rounded-full hover:bg-white hover:text-red-600 transition-colors"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {item.car.year} {item.car.make} {item.car.model}
                      </h3>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
                        <MapPin className="h-4 w-4 mr-1" />
                        {item.car.location}
                        <span className="mx-2">•</span>
                        <Car className="h-4 w-4 mr-1" />
                        {item.car.mileage.toLocaleString()} miles
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600">
                        {formatCurrency(item.auction.currentBid)}
                      </div>
                      <div className="text-sm text-gray-500">Current Bid</div>
                    </div>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Reserve Price</span>
                      <span className="text-sm font-semibold">
                        {formatCurrency(item.auction.reservePrice)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Time Remaining</span>
                      <span className="text-sm font-semibold text-red-600">
                        {formatTimeRemaining(item.auction.endTime)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Bids</span>
                      <span className="text-sm font-semibold">
                        {item.auction.bidCount}
                      </span>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                      Place Bid
                    </button>
                    <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                      <Eye className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
