'use client'

import { useState } from 'react'
import { MapPin, Clock, Phone, Mail, Car, Users, Star, Search, Filter } from 'lucide-react'

const locations = [
  {
    id: 1,
    name: 'Nairobi Auction Center',
    address: 'Westlands, Nairobi',
    county: 'Nairobi',
    phone: '+254-700-000-001',
    email: 'nairobi@premiumauctions.co.ke',
    hours: 'Mon-Fri: 8:00 AM - 6:00 PM',
    capacity: 500,
    facilities: ['Inspection Bay', 'Parking', 'Cafeteria', 'WiFi', 'Security'],
    rating: 4.8,
    reviews: 1247,
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop',
    upcomingAuctions: 8,
    distance: '2.5 km'
  },
  {
    id: 2,
    name: 'Mombasa Coastal Center',
    address: 'Nyali, Mombasa',
    county: 'Mombasa',
    phone: '+254-700-000-002',
    email: 'mombasa@premiumauctions.co.ke',
    hours: 'Mon-Fri: 8:00 AM - 6:00 PM',
    capacity: 300,
    facilities: ['Inspection Bay', 'Parking', 'Cafeteria', 'WiFi'],
    rating: 4.6,
    reviews: 892,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
    upcomingAuctions: 5,
    distance: '15.2 km'
  },
  {
    id: 3,
    name: 'Kisumu Lakeside Center',
    address: 'Kisumu Central, Kisumu',
    county: 'Kisumu',
    phone: '+254-700-000-003',
    email: 'kisumu@premiumauctions.co.ke',
    hours: 'Mon-Fri: 8:00 AM - 6:00 PM',
    capacity: 250,
    facilities: ['Inspection Bay', 'Parking', 'WiFi', 'Security'],
    rating: 4.7,
    reviews: 634,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
    upcomingAuctions: 4,
    distance: '8.7 km'
  },
  {
    id: 4,
    name: 'Nakuru Rift Valley Center',
    address: 'Nakuru Town, Nakuru',
    county: 'Nakuru',
    phone: '+254-700-000-004',
    email: 'nakuru@premiumauctions.co.ke',
    hours: 'Mon-Fri: 8:00 AM - 6:00 PM',
    capacity: 200,
    facilities: ['Inspection Bay', 'Parking', 'WiFi'],
    rating: 4.5,
    reviews: 456,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
    upcomingAuctions: 3,
    distance: '12.1 km'
  },
  {
    id: 5,
    name: 'Eldoret Highland Center',
    address: 'Eldoret Town, Eldoret',
    county: 'Uasin Gishu',
    phone: '+254-700-000-005',
    email: 'eldoret@premiumauctions.co.ke',
    hours: 'Mon-Fri: 8:00 AM - 6:00 PM',
    capacity: 180,
    facilities: ['Inspection Bay', 'Parking', 'WiFi', 'Security'],
    rating: 4.4,
    reviews: 378,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
    upcomingAuctions: 2,
    distance: '5.3 km'
  }
]

export default function AuctionLocationsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterCounty, setFilterCounty] = useState('all')
  const [sortBy, setSortBy] = useState('distance')

  const filteredLocations = locations
    .filter(location => {
      const matchesSearch = location.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           location.address.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCounty = filterCounty === 'all' || location.county.toLowerCase() === filterCounty.toLowerCase()
      return matchesSearch && matchesCounty
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'distance':
          return parseFloat(a.distance) - parseFloat(b.distance)
        case 'rating':
          return b.rating - a.rating
        case 'capacity':
          return b.capacity - a.capacity
        case 'auctions':
          return b.upcomingAuctions - a.upcomingAuctions
        default:
          return 0
      }
    })

  const counties = Array.from(new Set(locations.map(loc => loc.county)))

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Auction Locations</h1>
              <p className="text-gray-600 max-w-3xl">
                Find our auction centers across Kenya. Each location offers state-of-the-art 
                facilities and professional services for your vehicle auction needs.
              </p>
            </div>
            <div className="mt-6 lg:mt-0 lg:ml-8">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <input
                    type="text"
                    placeholder="Search locations..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <select
                  value={filterCounty}
                  onChange={(e) => setFilterCounty(e.target.value)}
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  aria-label="Filter by county"
                >
                  <option value="all">All Counties</option>
                  {counties.map(county => (
                    <option key={county} value={county.toLowerCase()}>{county}</option>
                  ))}
                </select>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  aria-label="Sort by"
                >
                  <option value="distance">Sort by Distance</option>
                  <option value="rating">Sort by Rating</option>
                  <option value="capacity">Sort by Capacity</option>
                  <option value="auctions">Sort by Upcoming Auctions</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Locations Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredLocations.map((location) => (
            <div key={location.id} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative">
                <img
                  src={location.image}
                  alt={location.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                    <div className="flex items-center text-sm font-semibold text-gray-900">
                      <MapPin className="h-4 w-4 mr-1" />
                      {location.distance}
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {location.upcomingAuctions} Auctions
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                      {location.name}
                    </h3>
                    <div className="flex items-center text-gray-600 mb-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{location.address}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center mb-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm font-semibold text-gray-900">{location.rating}</span>
                    </div>
                    <div className="text-xs text-gray-500">{location.reviews} reviews</div>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{location.hours}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Phone className="h-4 w-4 mr-2" />
                    <span>{location.phone}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Mail className="h-4 w-4 mr-2" />
                    <span>{location.email}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-2" />
                    <span>Capacity: {location.capacity} people</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Facilities</h4>
                  <div className="flex flex-wrap gap-2">
                    {location.facilities.map((facility, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                      >
                        {facility}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-3">
                  <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    View Details
                  </button>
                  <button className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                    Get Directions
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredLocations.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <MapPin className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No locations found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
          </div>
        )}

        {/* Quick Stats */}
        <div className="mt-12 bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Our Network</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{locations.length}</div>
              <div className="text-sm text-gray-600">Auction Centers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">
                {locations.reduce((sum, loc) => sum + loc.capacity, 0)}
              </div>
              <div className="text-sm text-gray-600">Total Capacity</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-600">
                {locations.reduce((sum, loc) => sum + loc.upcomingAuctions, 0)}
              </div>
              <div className="text-sm text-gray-600">Upcoming Auctions</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">
                {locations.reduce((sum, loc) => sum + loc.reviews, 0)}
              </div>
              <div className="text-sm text-gray-600">Total Reviews</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
