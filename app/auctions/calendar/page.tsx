'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Calendar, Clock, MapPin, Users, Filter } from 'lucide-react'

const calendarData = {
  '2024-09': {
    '22': [
      { time: '09:00', title: 'Luxury Car Auction', location: 'Nairobi', participants: 45 },
      { time: '14:00', title: 'Sports Car Collection', location: 'Mombasa', participants: 32 },
      { time: '18:00', title: 'Classic Car Auction', location: 'Kisumu', participants: 28 }
    ],
    '23': [
      { time: '10:00', title: 'SUV & Truck Auction', location: 'Nakuru', participants: 19 },
      { time: '15:00', title: 'Electric Vehicle Showcase', location: 'Nairobi', participants: 25 }
    ],
    '24': [
      { time: '11:00', title: 'Motorcycle Auction', location: 'Eldoret', participants: 15 },
      { time: '16:00', title: 'Commercial Vehicles', location: 'Mombasa', participants: 22 }
    ],
    '25': [
      { time: '09:00', title: 'Premium Sedans', location: 'Nairobi', participants: 38 },
      { time: '13:00', title: 'Convertible Cars', location: 'Kisumu', participants: 21 }
    ],
    '26': [
      { time: '10:00', title: 'Vintage Collection', location: 'Nakuru', participants: 18 },
      { time: '14:00', title: 'Luxury SUVs', location: 'Mombasa', participants: 35 }
    ],
    '27': [
      { time: '09:00', title: 'Sports Cars', location: 'Nairobi', participants: 42 },
      { time: '15:00', title: 'Classic Trucks', location: 'Eldoret', participants: 16 }
    ],
    '28': [
      { time: '11:00', title: 'Electric Vehicles', location: 'Kisumu', participants: 29 },
      { time: '17:00', title: 'Luxury Sedans', location: 'Nairobi', participants: 41 }
    ],
    '29': [
      { time: '09:00', title: 'Motorcycle Collection', location: 'Mombasa', participants: 23 },
      { time: '13:00', title: 'Commercial Fleet', location: 'Nakuru', participants: 27 }
    ],
    '30': [
      { time: '10:00', title: 'Premium SUVs', location: 'Nairobi', participants: 44 },
      { time: '16:00', title: 'Classic Cars', location: 'Eldoret', participants: 31 }
    ]
  }
}

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
]

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

export default function SalesCalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<string | null>(null)
  const [filterLocation, setFilterLocation] = useState('all')

  const year = currentDate.getFullYear()
  const month = currentDate.getMonth()
  const monthKey = `${year}-${String(month + 1).padStart(2, '0')}`

  const firstDayOfMonth = new Date(year, month, 1)
  const lastDayOfMonth = new Date(year, month + 1, 0)
  const firstDayOfWeek = firstDayOfMonth.getDay()
  const daysInMonth = lastDayOfMonth.getDate()

  const goToPreviousMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1))
  }

  const goToNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1))
  }

  const getDaysInCalendar = () => {
    const days = []
    
    // Previous month's trailing days
    const prevMonth = new Date(year, month - 1, 0)
    const daysInPrevMonth = prevMonth.getDate()
    for (let i = firstDayOfWeek - 1; i >= 0; i--) {
      days.push({
        day: daysInPrevMonth - i,
        isCurrentMonth: false,
        date: new Date(year, month - 1, daysInPrevMonth - i)
      })
    }
    
    // Current month's days
    for (let day = 1; day <= daysInMonth; day++) {
      days.push({
        day,
        isCurrentMonth: true,
        date: new Date(year, month, day)
      })
    }
    
    // Next month's leading days
    const remainingDays = 42 - days.length
    for (let day = 1; day <= remainingDays; day++) {
      days.push({
        day,
        isCurrentMonth: false,
        date: new Date(year, month + 1, day)
      })
    }
    
    return days
  }

  const getAuctionsForDate = (day: number) => {
    const dateKey = String(day).padStart(2, '0')
    return calendarData[monthKey as keyof typeof calendarData]?.[dateKey as keyof typeof calendarData[typeof monthKey]] || []
  }

  const filteredAuctions = selectedDate ? 
    getAuctionsForDate(parseInt(selectedDate)).filter(auction => 
      filterLocation === 'all' || auction.location.toLowerCase().includes(filterLocation.toLowerCase())
    ) : []

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Sales Calendar</h1>
              <p className="text-gray-600 max-w-3xl">
                View all upcoming auctions in our interactive calendar. Click on any date 
                to see detailed auction information.
              </p>
            </div>
            <div className="mt-6 lg:mt-0 lg:ml-8">
              <div className="flex items-center space-x-4">
                <select
                  value={filterLocation}
                  onChange={(e) => setFilterLocation(e.target.value)}
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  aria-label="Filter by location"
                >
                  <option value="all">All Locations</option>
                  <option value="nairobi">Nairobi</option>
                  <option value="mombasa">Mombasa</option>
                  <option value="kisumu">Kisumu</option>
                  <option value="nakuru">Nakuru</option>
                  <option value="eldoret">Eldoret</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calendar */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6">
              {/* Calendar Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">
                  {months[month]} {year}
                </h2>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={goToPreviousMonth}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    aria-label="Previous month"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={goToNextMonth}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    aria-label="Next month"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Days of Week Header */}
              <div className="grid grid-cols-7 gap-1 mb-2">
                {daysOfWeek.map((day) => (
                  <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-1">
                {getDaysInCalendar().map((dayObj, index) => {
                  const auctions = getAuctionsForDate(dayObj.day)
                  const isToday = dayObj.date.toDateString() === new Date().toDateString()
                  const isSelected = selectedDate === String(dayObj.day).padStart(2, '0')
                  
                  return (
                    <button
                      key={index}
                      onClick={() => {
                        if (dayObj.isCurrentMonth) {
                          setSelectedDate(String(dayObj.day).padStart(2, '0'))
                        }
                      }}
                      className={`relative p-2 h-20 text-left rounded-lg transition-colors ${
                        !dayObj.isCurrentMonth
                          ? 'text-gray-300 hover:bg-gray-50'
                          : isSelected
                          ? 'bg-blue-600 text-white'
                          : isToday
                          ? 'bg-blue-100 text-blue-900 hover:bg-blue-200'
                          : 'text-gray-900 hover:bg-gray-100'
                      }`}
                    >
                      <div className="text-sm font-medium">{dayObj.day}</div>
                      {auctions.length > 0 && (
                        <div className="mt-1">
                          <div className={`w-2 h-2 rounded-full ${
                            isSelected ? 'bg-white' : 'bg-blue-500'
                          }`} />
                          {auctions.length > 1 && (
                            <div className="text-xs mt-1">
                              +{auctions.length - 1} more
                            </div>
                          )}
                        </div>
                      )}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Selected Date Auctions */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {selectedDate ? `Auctions for ${selectedDate}/${String(month + 1).padStart(2, '0')}/${year}` : 'Select a Date'}
              </h3>
              
              {selectedDate ? (
                <div className="space-y-4">
                  {filteredAuctions.length > 0 ? (
                    filteredAuctions.map((auction, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium text-gray-900">{auction.title}</h4>
                          <span className="text-sm text-blue-600 font-medium">{auction.time}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600 mb-2">
                          <MapPin className="h-4 w-4 mr-1" />
                          {auction.location}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Users className="h-4 w-4 mr-1" />
                          {auction.participants} participants
                        </div>
                        <button className="w-full mt-3 bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                          Join Auction
                        </button>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-8">
                      <Calendar className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                      <p className="text-gray-500">No auctions scheduled for this date</p>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center py-8">
                  <Calendar className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500">Click on a date to view auctions</p>
                </div>
              )}
            </div>

            {/* Quick Stats */}
            <div className="mt-6 bg-gray-50 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-4">This Month's Summary</h4>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Total Auctions</span>
                  <span className="font-medium">24</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Active Locations</span>
                  <span className="font-medium">5</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Total Participants</span>
                  <span className="font-medium">1,247</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
