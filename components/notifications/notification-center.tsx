'use client'

import { useState, useEffect } from 'react'
import { 
  Bell, 
  X, 
  CheckCircle, 
  AlertCircle, 
  Clock, 
  Star,
  Gavel,
  Truck,
  CreditCard,
  MessageCircle
} from 'lucide-react'

const mockNotifications = [
  {
    id: '1',
    type: 'bid',
    title: 'You\'ve been outbid',
    message: 'Someone bid higher on 2021 Porsche 911 Turbo S',
    time: '2 hours ago',
    unread: true,
    action: 'Increase Bid'
  },
  {
    id: '2',
    type: 'win',
    title: 'Auction Won!',
    message: 'Congratulations! You won the 2018 McLaren 720S auction',
    time: '1 day ago',
    unread: true,
    action: 'View Details'
  },
  {
    id: '3',
    type: 'reminder',
    title: 'Auction Ending Soon',
    message: '2019 Ferrari 488 GTB auction ends in 2 hours',
    time: '3 hours ago',
    unread: false,
    action: 'Place Bid'
  },
  {
    id: '4',
    type: 'payment',
    title: 'Payment Required',
    message: 'Complete payment for your winning bid on 2020 Audi R8 V10 Plus',
    time: '5 hours ago',
    unread: true,
    action: 'Pay Now'
  },
  {
    id: '5',
    type: 'shipping',
    title: 'Vehicle Shipped',
    message: 'Your 2018 McLaren 720S has been shipped and is on its way',
    time: '2 days ago',
    unread: false,
    action: 'Track Shipment'
  },
  {
    id: '6',
    type: 'message',
    title: 'New Message',
    message: 'You have a new message from Elite Motors Monaco',
    time: '3 days ago',
    unread: false,
    action: 'View Message'
  }
]

export function NotificationCenter() {
  const [notifications, setNotifications] = useState(mockNotifications)
  const [isOpen, setIsOpen] = useState(false)
  const [filter, setFilter] = useState('all')

  const unreadCount = notifications.filter(n => n.unread).length

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'bid':
        return <Gavel className="h-5 w-5 text-red-500" />
      case 'win':
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case 'reminder':
        return <Clock className="h-5 w-5 text-yellow-500" />
      case 'payment':
        return <CreditCard className="h-5 w-5 text-blue-500" />
      case 'shipping':
        return <Truck className="h-5 w-5 text-purple-500" />
      case 'message':
        return <MessageCircle className="h-5 w-5 text-indigo-500" />
      default:
        return <Bell className="h-5 w-5 text-gray-500" />
    }
  }

  const markAsRead = (id: string) => {
    setNotifications(prev => 
      prev.map(notification => 
        notification.id === id 
          ? { ...notification, unread: false }
          : notification
      )
    )
  }

  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(notification => ({ ...notification, unread: false }))
    )
  }

  const filteredNotifications = filter === 'all' 
    ? notifications 
    : notifications.filter(n => n.type === filter)

  return (
    <div className="relative">
      {/* Notification Bell */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 text-gray-400 hover:text-gray-600 transition-colors"
      >
        <Bell className="h-6 w-6" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {unreadCount}
          </span>
        )}
      </button>

      {/* Notification Panel */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-96 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
              <div className="flex items-center space-x-2">
                <button
                  onClick={markAllAsRead}
                  className="text-sm text-blue-600 hover:text-blue-700"
                >
                  Mark all read
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>
            
            {/* Filter Tabs */}
            <div className="mt-3 flex space-x-1">
              {[
                { id: 'all', label: 'All' },
                { id: 'bid', label: 'Bids' },
                { id: 'win', label: 'Wins' },
                { id: 'payment', label: 'Payment' },
                { id: 'shipping', label: 'Shipping' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setFilter(tab.id)}
                  className={`px-3 py-1 text-xs rounded-full transition-colors ${
                    filter === tab.id
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Notifications List */}
          <div className="max-h-96 overflow-y-auto">
            {filteredNotifications.length === 0 ? (
              <div className="p-8 text-center text-gray-500">
                <Bell className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                <p>No notifications</p>
              </div>
            ) : (
              <div className="divide-y divide-gray-200">
                {filteredNotifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-4 hover:bg-gray-50 transition-colors ${
                      notification.unread ? 'bg-blue-50' : ''
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 mt-1">
                        {getNotificationIcon(notification.type)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-medium text-gray-900">
                            {notification.title}
                          </h4>
                          {notification.unread && (
                            <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 mt-1">
                          {notification.message}
                        </p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-xs text-gray-500">
                            {notification.time}
                          </span>
                          <button className="text-xs text-blue-600 hover:text-blue-700 font-medium">
                            {notification.action}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200 bg-gray-50">
            <button className="w-full text-center text-sm text-blue-600 hover:text-blue-700 font-medium">
              View All Notifications
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
