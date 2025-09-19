'use client'

import { useState } from 'react'
import { 
  Car, 
  Gavel, 
  Heart, 
  Settings, 
  Bell, 
  TrendingUp, 
  DollarSign, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  Star,
  Eye,
  Plus,
  Filter,
  Search
} from 'lucide-react'

const mockData = {
  user: {
    name: 'John Smith',
    email: 'john@example.com',
    memberSince: '2022',
    totalBids: 45,
    wonAuctions: 12,
    totalSpent: 162500000,
    rating: 4.9
  },
  activeBids: [
    {
      id: '1',
      car: '2019 Ferrari 488 GTB',
      currentBid: 37050000,
      myBid: 37700000,
      timeLeft: '2d 5h 23m',
      status: 'leading',
      image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=300&h=200&fit=crop'
    },
    {
      id: '2',
      car: '2021 Porsche 911 Turbo S',
      currentBid: 25350000,
      myBid: 26000000,
      timeLeft: '5d 2h 15m',
      status: 'outbid',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=300&h=200&fit=crop'
    },
    {
      id: '3',
      car: '2020 Lamborghini Huracán EVO',
      currentBid: 31850000,
      myBid: 32500000,
      timeLeft: '1d 3h 45m',
      status: 'leading',
      image: 'https://images.unsplash.com/photo-1544829099-b9a0c47f1ad4?w=300&h=200&fit=crop'
    }
  ],
  wonAuctions: [
    {
      id: '1',
      car: '2018 McLaren 720S',
      winningBid: 24050000,
      wonDate: '2024-01-15',
      status: 'delivered',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=300&h=200&fit=crop'
    },
    {
      id: '2',
      car: '2022 BMW M8 Competition',
      winningBid: 16250000,
      wonDate: '2024-01-10',
      status: 'shipping',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=300&h=200&fit=crop'
    }
  ],
  watchlist: [
    {
      id: '1',
      car: '2020 Audi R8 V10 Plus',
      currentBid: 21450000,
      timeLeft: '3d 12h 30m',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=300&h=200&fit=crop'
    },
    {
      id: '2',
      car: '2019 Bentley Continental GT',
      currentBid: 25350000,
      timeLeft: '6d 8h 15m',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=300&h=200&fit=crop'
    }
  ],
  notifications: [
    {
      id: '1',
      type: 'bid',
      title: 'You\'ve been outbid',
      message: 'Someone bid higher on 2021 Porsche 911 Turbo S',
      time: '2 hours ago',
      unread: true
    },
    {
      id: '2',
      type: 'win',
      title: 'Auction Won!',
      message: 'Congratulations! You won the 2018 McLaren 720S auction',
      time: '1 day ago',
      unread: true
    },
    {
      id: '3',
      type: 'reminder',
      title: 'Auction Ending Soon',
      message: '2019 Ferrari 488 GTB auction ends in 2 hours',
      time: '3 hours ago',
      unread: false
    }
  ]
}

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('overview')
  const [searchQuery, setSearchQuery] = useState('')

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'leading':
        return 'text-green-600 bg-green-100'
      case 'outbid':
        return 'text-red-600 bg-red-100'
      case 'delivered':
        return 'text-blue-600 bg-blue-100'
      case 'shipping':
        return 'text-yellow-600 bg-yellow-100'
      default:
        return 'text-gray-600 bg-gray-100'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'leading':
        return 'You\'re Leading'
      case 'outbid':
        return 'Outbid'
      case 'delivered':
        return 'Delivered'
      case 'shipping':
        return 'Shipping'
      default:
        return status
    }
  }

  const tabs = [
    { id: 'overview', label: 'Overview', icon: TrendingUp },
    { id: 'bids', label: 'My Bids', icon: Gavel },
    { id: 'won', label: 'Won Auctions', icon: CheckCircle },
    { id: 'watchlist', label: 'Watchlist', icon: Heart },
    { id: 'notifications', label: 'Notifications', icon: Bell }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-gray-600">Welcome back, {mockData.user.name}</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search auctions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button className="p-2 text-gray-400 hover:text-gray-600 relative">
                <Bell className="h-6 w-6" />
                {mockData.notifications.filter(n => n.unread).length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {mockData.notifications.filter(n => n.unread).length}
                  </span>
                )}
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <Settings className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Car className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{mockData.user.name}</h3>
                <p className="text-gray-600">{mockData.user.email}</p>
                <div className="flex items-center justify-center mt-2">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm text-gray-600">{mockData.user.rating}/5</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">{mockData.user.totalBids}</div>
                  <div className="text-sm text-gray-600">Total Bids</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">{mockData.user.wonAuctions}</div>
                  <div className="text-sm text-gray-600">Won Auctions</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">{formatCurrency(mockData.user.totalSpent)}</div>
                  <div className="text-sm text-gray-600">Total Spent</div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="space-y-2">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        activeTab === tab.id
                          ? 'bg-blue-100 text-blue-700'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <tab.icon className="h-4 w-4 mr-3" />
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <div className="flex items-center">
                      <div className="bg-green-100 rounded-lg p-3 mr-4">
                        <Gavel className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900">{mockData.activeBids.length}</div>
                        <div className="text-sm text-gray-600">Active Bids</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <div className="flex items-center">
                      <div className="bg-blue-100 rounded-lg p-3 mr-4">
                        <CheckCircle className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900">{mockData.wonAuctions.length}</div>
                        <div className="text-sm text-gray-600">Won This Month</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <div className="flex items-center">
                      <div className="bg-purple-100 rounded-lg p-3 mr-4">
                        <Heart className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900">{mockData.watchlist.length}</div>
                        <div className="text-sm text-gray-600">Watchlist Items</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Active Bids */}
                <div className="bg-white rounded-lg shadow-sm">
                  <div className="p-6 border-b border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900">Active Bids</h3>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      {mockData.activeBids.map((bid) => (
                        <div key={bid.id} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                          <img
                            src={bid.image}
                            alt={bid.car}
                            className="w-16 h-16 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-900">{bid.car}</h4>
                            <div className="flex items-center space-x-4 text-sm text-gray-600">
                              <span>Current: {formatCurrency(bid.currentBid)}</span>
                              <span>Your Bid: {formatCurrency(bid.myBid)}</span>
                              <span className="flex items-center">
                                <Clock className="h-4 w-4 mr-1" />
                                {bid.timeLeft}
                              </span>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(bid.status)}`}>
                              {getStatusText(bid.status)}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'bids' && (
              <div className="bg-white rounded-lg shadow-sm">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900">My Bids</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {mockData.activeBids.map((bid) => (
                      <div key={bid.id} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
                        <img
                          src={bid.image}
                          alt={bid.car}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900">{bid.car}</h4>
                          <div className="grid grid-cols-2 gap-4 mt-2 text-sm text-gray-600">
                            <div>Current Bid: {formatCurrency(bid.currentBid)}</div>
                            <div>Your Bid: {formatCurrency(bid.myBid)}</div>
                            <div>Time Left: {bid.timeLeft}</div>
                            <div className="flex items-center">
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(bid.status)}`}>
                                {getStatusText(bid.status)}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                            Increase Bid
                          </button>
                          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                            View Details
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'won' && (
              <div className="bg-white rounded-lg shadow-sm">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900">Won Auctions</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {mockData.wonAuctions.map((auction) => (
                      <div key={auction.id} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
                        <img
                          src={auction.image}
                          alt={auction.car}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900">{auction.car}</h4>
                          <div className="grid grid-cols-2 gap-4 mt-2 text-sm text-gray-600">
                            <div>Winning Bid: {formatCurrency(auction.winningBid)}</div>
                            <div>Won Date: {auction.wonDate}</div>
                            <div className="flex items-center">
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(auction.status)}`}>
                                {getStatusText(auction.status)}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                            View Details
                          </button>
                          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                            Track Shipment
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'watchlist' && (
              <div className="bg-white rounded-lg shadow-sm">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900">Watchlist</h3>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {mockData.watchlist.map((item) => (
                      <div key={item.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <img
                          src={item.image}
                          alt={item.car}
                          className="w-full h-32 object-cover rounded-lg mb-4"
                        />
                        <h4 className="font-medium text-gray-900 mb-2">{item.car}</h4>
                        <div className="flex justify-between items-center text-sm text-gray-600 mb-3">
                          <span>Current: {formatCurrency(item.currentBid)}</span>
                          <span className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {item.timeLeft}
                          </span>
                        </div>
                        <div className="flex space-x-2">
                          <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                            Place Bid
                          </button>
                          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                            <Heart className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'notifications' && (
              <div className="bg-white rounded-lg shadow-sm">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {mockData.notifications.map((notification) => (
                      <div key={notification.id} className={`flex items-start space-x-4 p-4 rounded-lg ${
                        notification.unread ? 'bg-blue-50 border-l-4 border-blue-500' : 'bg-gray-50'
                      }`}>
                        <div className="flex-shrink-0">
                          {notification.type === 'bid' && <AlertCircle className="h-5 w-5 text-red-500" />}
                          {notification.type === 'win' && <CheckCircle className="h-5 w-5 text-green-500" />}
                          {notification.type === 'reminder' && <Clock className="h-5 w-5 text-yellow-500" />}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900">{notification.title}</h4>
                          <p className="text-gray-600">{notification.message}</p>
                          <p className="text-sm text-gray-500 mt-1">{notification.time}</p>
                        </div>
                        {notification.unread && (
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
