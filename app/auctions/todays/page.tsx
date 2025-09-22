'use client'

import { useState } from 'react'
import { Clock, MapPin, Users, Eye, Star, Filter, Search } from 'lucide-react'

const todaysAuctions = [
  {
    id: 1,
    title: 'Luxury Car Auction - Nairobi',
    time: '2:00 PM EAT',
    location: 'Nairobi, Kenya',
    status: 'Live',
    participants: 45,
    vehicles: 23,
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=300&fit=crop',
    description: 'Premium luxury vehicles including BMW, Mercedes, and Audi models'
  },
  {
    id: 2,
    title: 'Sports Car Collection - Mombasa',
    time: '4:30 PM EAT',
    location: 'Mombasa, Kenya',
    status: 'Starting Soon',
    participants: 32,
    vehicles: 18,
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=300&fit=crop',
    description: 'High-performance sports cars and supercars'
  },
  {
    id: 3,
    title: 'Classic Car Auction - Kisumu',
    time: '6:00 PM EAT',
    location: 'Kisumu, Kenya',
    status: 'Upcoming',
    participants: 28,
    vehicles: 15,
    image: 'https://images.unsplash.com/photo-1544829099-b9a0c47f1ad4?w=400&h=300&fit=crop',
    description: 'Vintage and classic automobiles from various eras'
  },
  {
    id: 4,
    title: 'SUV & Truck Auction - Nakuru',
    time: '8:00 PM EAT',
    location: 'Nakuru, Kenya',
    status: 'Upcoming',
    participants: 19,
    vehicles: 12,
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop',
    description: 'Utility vehicles, SUVs, and commercial trucks'
  }
]

export default function TodaysAuctionsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')

  const filteredAuctions = todaysAuctions.filter(auction => {
    const matchesSearch = auction.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         auction.location.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterStatus === 'all' || auction.status.toLowerCase().includes(filterStatus.toLowerCase())
    return matchesSearch && matchesFilter
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live':
        return 'bg-red-500 text-white animate-pulse'
      case 'Starting Soon':
        return 'bg-yellow-500 text-white'
      case 'Upcoming':
        return 'bg-blue-500 text-white'
      default:
        return 'bg-gray-500 text-white'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Today's Auctions</h1>
              <p className="text-gray-600 max-w-3xl">
                Join live auctions happening today. Bid on premium vehicles in real-time 
                and find your next dream car.
              </p>
            </div>
            <div className="mt-6 lg:mt-0 lg:ml-8">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <input
                    type="text"
                    placeholder="Search auctions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  aria-label="Filter by status"
                >
                  <option value="all">All Status</option>
                  <option value="live">Live</option>
                  <option value="starting">Starting Soon</option>
                  <option value="upcoming">Upcoming</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Live Auctions Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAuctions.map((auction) => (
            <div key={auction.id} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative">
                <img
                  src={auction.image}
                  alt={auction.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(auction.status)}`}>
                    {auction.status}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                    <div className="flex items-center text-sm font-semibold text-gray-900">
                      <Clock className="h-4 w-4 mr-1" />
                      {auction.time}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {auction.title}
                </h3>
                <div className="flex items-center text-gray-600 mb-3">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span className="text-sm">{auction.location}</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">{auction.description}</p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="h-4 w-4 mr-1" />
                    <span>{auction.participants} participants</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Eye className="h-4 w-4 mr-1" />
                    <span>{auction.vehicles} vehicles</span>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Join Auction
                  </button>
                  <button className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                    Watch
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredAuctions.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Clock className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No auctions found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
          </div>
        )}

        {/* Quick Stats */}
        <div className="mt-12 bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Today's Auction Summary</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{todaysAuctions.length}</div>
              <div className="text-sm text-gray-600">Total Auctions</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">
                {todaysAuctions.filter(a => a.status === 'Live').length}
              </div>
              <div className="text-sm text-gray-600">Live Now</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-600">
                {todaysAuctions.filter(a => a.status === 'Starting Soon').length}
              </div>
              <div className="text-sm text-gray-600">Starting Soon</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-600">
                {todaysAuctions.reduce((sum, a) => sum + a.vehicles, 0)}
              </div>
              <div className="text-sm text-gray-600">Total Vehicles</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
