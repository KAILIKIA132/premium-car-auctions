'use client'

import { useState } from 'react'
import { 
  Gavel, 
  Clock, 
  MapPin, 
  Car, 
  Star, 
  Eye,
  Filter,
  Search,
  CheckCircle,
  XCircle,
  AlertCircle,
  TrendingUp,
  TrendingDown
} from 'lucide-react'

const mockBids = [
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
      myBid: 37700000,
      reservePrice: 39000000,
      endTime: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
      bidCount: 23,
      status: 'LIVE',
      isWinning: true
    },
    bidDate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000)
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
      myBid: 26000000,
      reservePrice: 28600000,
      endTime: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
      bidCount: 15,
      status: 'LIVE',
      isWinning: false
    },
    bidDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000)
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
      myBid: 31200000,
      reservePrice: 36400000,
      endTime: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
      bidCount: 31,
      status: 'ENDED',
      isWinning: false,
      won: false
    },
    bidDate: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000)
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
      myBid: 24700000,
      reservePrice: 26000000,
      endTime: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
      bidCount: 12,
      status: 'ENDED',
      isWinning: true,
      won: true
    },
    bidDate: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000)
  }
]

export default function MyBidsPage() {
  const [bids, setBids] = useState(mockBids)
  const [filter, setFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

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

  const getStatusIcon = (status: string, isWinning: boolean, won?: boolean) => {
    if (status === 'ENDED') {
      if (won) {
        return <CheckCircle className="h-5 w-5 text-green-500" />
      }
      return <XCircle className="h-5 w-5 text-red-500" />
    }
    if (isWinning) {
      return <TrendingUp className="h-5 w-5 text-green-500" />
    }
    return <AlertCircle className="h-5 w-5 text-yellow-500" />
  }

  const getStatusText = (status: string, isWinning: boolean, won?: boolean) => {
    if (status === 'ENDED') {
      if (won) {
        return 'Won'
      }
      return 'Lost'
    }
    if (isWinning) {
      return 'Winning'
    }
    return 'Outbid'
  }

  const getStatusColor = (status: string, isWinning: boolean, won?: boolean) => {
    if (status === 'ENDED') {
      if (won) {
        return 'text-green-600 bg-green-100'
      }
      return 'text-red-600 bg-red-100'
    }
    if (isWinning) {
      return 'text-green-600 bg-green-100'
    }
    return 'text-yellow-600 bg-yellow-100'
  }

  const filteredBids = bids.filter(bid => {
    const matchesSearch = 
      bid.car.make.toLowerCase().includes(searchQuery.toLowerCase()) ||
      bid.car.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
      bid.car.year.toString().includes(searchQuery)
    
    if (filter === 'all') return matchesSearch
    if (filter === 'active') return matchesSearch && bid.auction.status === 'LIVE'
    if (filter === 'won') return matchesSearch && bid.auction.won === true
    if (filter === 'lost') return matchesSearch && bid.auction.status === 'ENDED' && bid.auction.won === false
    
    return matchesSearch
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">My Bids</h1>
              <p className="text-gray-600 mt-2">
                Track your bidding activity and auction results
              </p>
            </div>
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search bids..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              {/* Filter */}
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Bids</option>
                <option value="active">Active Bids</option>
                <option value="won">Won Auctions</option>
                <option value="lost">Lost Auctions</option>
              </select>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center">
              <div className="bg-blue-100 rounded-lg p-3 mr-4">
                <Gavel className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">{bids.length}</div>
                <div className="text-sm text-gray-600">Total Bids</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center">
              <div className="bg-green-100 rounded-lg p-3 mr-4">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">
                  {bids.filter(bid => bid.auction.won).length}
                </div>
                <div className="text-sm text-gray-600">Won Auctions</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center">
              <div className="bg-yellow-100 rounded-lg p-3 mr-4">
                <Clock className="h-6 w-6 text-yellow-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">
                  {bids.filter(bid => bid.auction.status === 'LIVE').length}
                </div>
                <div className="text-sm text-gray-600">Active Bids</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center">
              <div className="bg-purple-100 rounded-lg p-3 mr-4">
                <Star className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">
                  {formatCurrency(bids.reduce((sum, bid) => sum + bid.auction.myBid, 0))}
                </div>
                <div className="text-sm text-gray-600">Total Bid Value</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bids List */}
        {filteredBids.length === 0 ? (
          <div className="text-center py-12">
            <Gavel className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No bids found</h3>
            <p className="text-gray-600 mb-6">
              {filter === 'all' 
                ? 'You haven\'t placed any bids yet'
                : `No ${filter} bids found`
              }
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Browse Auctions
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredBids.map((bid) => (
              <div key={bid.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="flex">
                  {/* Image */}
                  <div className="w-64 h-48 relative">
                    <img
                      src={bid.car.image}
                      alt={`${bid.car.year} ${bid.car.make} ${bid.car.model}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        bid.auction.status === 'LIVE' 
                          ? 'bg-red-500 text-white animate-pulse'
                          : 'bg-gray-500 text-white'
                      }`}>
                        {bid.auction.status}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">
                          {bid.car.year} {bid.car.make} {bid.car.model}
                        </h3>
                        <div className="flex items-center text-sm text-gray-500 mt-1">
                          <MapPin className="h-4 w-4 mr-1" />
                          {bid.car.location}
                          <span className="mx-2">•</span>
                          <Car className="h-4 w-4 mr-1" />
                          {bid.car.mileage.toLocaleString()} miles
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(bid.auction.status, bid.auction.isWinning, bid.auction.won)}
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(bid.auction.status, bid.auction.isWinning, bid.auction.won)}`}>
                          {getStatusText(bid.auction.status, bid.auction.isWinning, bid.auction.won)}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div>
                        <div className="text-sm text-gray-500">My Bid</div>
                        <div className="text-lg font-semibold text-blue-600">
                          {formatCurrency(bid.auction.myBid)}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Current Bid</div>
                        <div className="text-lg font-semibold">
                          {formatCurrency(bid.auction.currentBid)}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Reserve Price</div>
                        <div className="text-lg font-semibold">
                          {formatCurrency(bid.auction.reservePrice)}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Time Remaining</div>
                        <div className="text-lg font-semibold text-red-600">
                          {formatTimeRemaining(bid.auction.endTime)}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">
                        Bid placed on {bid.bidDate.toLocaleDateString()}
                      </div>
                      <div className="flex space-x-2">
                        <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                          <Eye className="h-4 w-4 mr-2 inline" />
                          View Auction
                        </button>
                        {bid.auction.status === 'LIVE' && (
                          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                            Increase Bid
                          </button>
                        )}
                      </div>
                    </div>
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
