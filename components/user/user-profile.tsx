'use client'

import { useState } from 'react'
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Star, 
  Edit, 
  Camera,
  Shield,
  Award,
  TrendingUp,
  Heart,
  Gavel,
  Car,
  Settings,
  Bell,
  CreditCard,
  Truck
} from 'lucide-react'

interface UserProfileProps {
  user: {
    id: string
    name: string
    email: string
    phone: string
    location: string
    avatar: string
    memberSince: string
    rating: number
    totalBids: number
    wonAuctions: number
    totalSpent: number
    sellerRating: number
    totalSales: number
    isVerified: boolean
    isPremium: boolean
  }
}

export function UserProfile({ user }: UserProfileProps) {
  const [activeTab, setActiveTab] = useState('overview')
  const [isEditing, setIsEditing] = useState(false)
  const [editData, setEditData] = useState({
    name: user.name,
    email: user.email,
    phone: user.phone,
    location: user.location
  })

  const tabs = [
    { id: 'overview', label: 'Overview', icon: User },
    { id: 'activity', label: 'Activity', icon: TrendingUp },
    { id: 'bids', label: 'My Bids', icon: Gavel },
    { id: 'watchlist', label: 'Watchlist', icon: Heart },
    { id: 'settings', label: 'Settings', icon: Settings }
  ]

  const stats = [
    { label: 'Total Bids', value: user.totalBids, icon: Gavel, color: 'blue' },
    { label: 'Won Auctions', value: user.wonAuctions, icon: Award, color: 'green' },
    { label: 'Total Spent', value: `$${user.totalSpent.toLocaleString()}`, icon: CreditCard, color: 'purple' },
    { label: 'Seller Rating', value: user.sellerRating, icon: Star, color: 'yellow' }
  ]

  const recentActivity = [
    {
      id: '1',
      type: 'bid',
      title: 'Placed bid on 2019 Ferrari 488 GTB',
      time: '2 hours ago',
      amount: 'KSh 37,050,000',
      status: 'active'
    },
    {
      id: '2',
      type: 'win',
      title: 'Won auction for 2018 McLaren 720S',
      time: '1 day ago',
      amount: 'KSh 24,050,000',
      status: 'completed'
    },
    {
      id: '3',
      type: 'watch',
      title: 'Added 2020 Lamborghini Huracán to watchlist',
      time: '2 days ago',
      amount: '',
      status: 'watching'
    },
    {
      id: '4',
      type: 'sell',
      title: 'Listed 2017 Porsche 911 for auction',
      time: '3 days ago',
      amount: '',
      status: 'live'
    }
  ]

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'bid':
        return <Gavel className="h-4 w-4 text-blue-500" />
      case 'win':
        return <Award className="h-4 w-4 text-green-500" />
      case 'watch':
        return <Heart className="h-4 w-4 text-red-500" />
      case 'sell':
        return <Car className="h-4 w-4 text-purple-500" />
      default:
        return <TrendingUp className="h-4 w-4 text-gray-500" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'text-blue-600 bg-blue-100'
      case 'completed':
        return 'text-green-600 bg-green-100'
      case 'watching':
        return 'text-red-600 bg-red-100'
      case 'live':
        return 'text-purple-600 bg-purple-100'
      default:
        return 'text-gray-600 bg-gray-100'
    }
  }

  const handleSave = () => {
    // Handle save logic
    setIsEditing(false)
  }

  const handleCancel = () => {
    setEditData({
      name: user.name,
      email: user.email,
      phone: user.phone,
      location: user.location
    })
    setIsEditing(false)
  }

  return (
    <div className="bg-white rounded-lg shadow-sm">
      {/* Profile Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-t-lg">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-20 h-20 rounded-full border-4 border-white"
              />
              <button className="absolute bottom-0 right-0 bg-white text-gray-600 p-1 rounded-full hover:bg-gray-100 transition-colors">
                <Camera className="h-4 w-4" />
              </button>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-2xl font-bold">{user.name}</h1>
                {user.isVerified && (
                  <Shield className="h-5 w-5 text-blue-300" />
                )}
                {user.isPremium && (
                  <Award className="h-5 w-5 text-yellow-300" />
                )}
              </div>
              <p className="text-blue-100">{user.email}</p>
              <div className="flex items-center space-x-4 mt-2 text-sm">
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                  <span>{user.rating}/5</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>Member since {user.memberSince}</span>
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="bg-white/20 text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-colors flex items-center space-x-2"
          >
            <Edit className="h-4 w-4" />
            <span>Edit Profile</span>
          </button>
        </div>
      </div>

      {/* Profile Content */}
      <div className="p-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center">
                <div className={`bg-${stat.color}-100 rounded-lg p-3 mr-4`}>
                  <stat.icon className={`h-6 w-6 text-${stat.color}-600`} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <tab.icon className="h-4 w-4 mr-2" />
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Personal Information */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editData.name}
                      onChange={(e) => setEditData(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  ) : (
                    <p className="text-gray-900">{user.name}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  {isEditing ? (
                    <input
                      type="email"
                      value={editData.email}
                      onChange={(e) => setEditData(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  ) : (
                    <p className="text-gray-900">{user.email}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  {isEditing ? (
                    <input
                      type="tel"
                      value={editData.phone}
                      onChange={(e) => setEditData(prev => ({ ...prev, phone: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  ) : (
                    <p className="text-gray-900">{user.phone}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editData.location}
                      onChange={(e) => setEditData(prev => ({ ...prev, location: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  ) : (
                    <p className="text-gray-900">{user.location}</p>
                  )}
                </div>
              </div>
              {isEditing && (
                <div className="flex justify-end space-x-2 mt-4">
                  <button
                    onClick={handleCancel}
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSave}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Save Changes
                  </button>
                </div>
              )}
            </div>

            {/* Account Status */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Status</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center p-4 bg-green-50 rounded-lg">
                  <Shield className="h-8 w-8 text-green-500 mr-3" />
                  <div>
                    <div className="font-semibold text-green-900">Verified Account</div>
                    <div className="text-sm text-green-700">Identity verified</div>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                  <Award className="h-8 w-8 text-blue-500 mr-3" />
                  <div>
                    <div className="font-semibold text-blue-900">Premium Member</div>
                    <div className="text-sm text-blue-700">Enhanced features</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'activity' && (
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                  <div className="flex-shrink-0">
                    {getActivityIcon(activity.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-medium text-gray-900">{activity.title}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(activity.status)}`}>
                        {activity.status}
                      </span>
                    </div>
                    <div className="flex items-center justify-between mt-1">
                      <p className="text-sm text-gray-600">{activity.time}</p>
                      {activity.amount && (
                        <p className="text-sm font-semibold text-gray-900">{activity.amount}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'bids' && (
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">My Bids</h3>
            <div className="text-center py-8 text-gray-500">
              <Gavel className="h-12 w-12 mx-auto mb-4 text-gray-300" />
              <p>No bids found</p>
            </div>
          </div>
        )}

        {activeTab === 'watchlist' && (
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Watchlist</h3>
            <div className="text-center py-8 text-gray-500">
              <Heart className="h-12 w-12 mx-auto mb-4 text-gray-300" />
              <p>No items in watchlist</p>
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Notification Settings</h3>
              <div className="space-y-3">
                <label className="flex items-center">
                  <input type="checkbox" defaultChecked className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                  <span className="ml-2 text-sm text-gray-700">Email notifications</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" defaultChecked className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                  <span className="ml-2 text-sm text-gray-700">SMS notifications</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                  <span className="ml-2 text-sm text-gray-700">Push notifications</span>
                </label>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Privacy Settings</h3>
              <div className="space-y-3">
                <label className="flex items-center">
                  <input type="checkbox" defaultChecked className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                  <span className="ml-2 text-sm text-gray-700">Show profile to other users</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                  <span className="ml-2 text-sm text-gray-700">Show bidding history</span>
                </label>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
