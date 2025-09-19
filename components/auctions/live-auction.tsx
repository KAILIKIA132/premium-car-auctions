'use client'

import { useState, useEffect } from 'react'
import { 
  Clock, 
  Users, 
  Gavel, 
  Heart, 
  Share2, 
  Play, 
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  Settings
} from 'lucide-react'

interface LiveAuctionProps {
  auction: {
    id: string
    car: {
      make: string
      model: string
      year: number
      image: string
      mileage: number
      location: string
    }
    currentBid: number
    reservePrice: number
    endTime: Date
    bidCount: number
    isWatched: boolean
  }
}

export function LiveAuction({ auction }: LiveAuctionProps) {
  const [timeRemaining, setTimeRemaining] = useState('')
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [bidAmount, setBidAmount] = useState('')
  const [isWatching, setIsWatching] = useState(auction.isWatched)
  const [recentBids, setRecentBids] = useState([
    { id: '1', bidder: 'Auto***123', amount: 37050000, time: '2 min ago' },
    { id: '2', bidder: 'Car***456', amount: 36985000, time: '3 min ago' },
    { id: '3', bidder: 'Lux***789', amount: 36920000, time: '5 min ago' },
    { id: '4', bidder: 'Elite***321', amount: 36855000, time: '7 min ago' },
    { id: '5', bidder: 'Prem***654', amount: 36790000, time: '10 min ago' }
  ])

  // Update countdown timer
  useEffect(() => {
    const updateTimer = () => {
      const now = new Date()
      const endTime = auction.endTime
      const timeLeft = endTime.getTime() - now.getTime()
      
      if (timeLeft <= 0) {
        setTimeRemaining('Auction Ended')
        return
      }
      
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000)
      
      setTimeRemaining(`${days}d ${hours}h ${minutes}m ${seconds}s`)
    }

    updateTimer()
    const interval = setInterval(updateTimer, 1000) // Update every second

    return () => clearInterval(interval)
  }, [auction.endTime])

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-KE', {
      style: 'currency',
      currency: 'KES',
    }).format(amount)
  }

  const handleBid = () => {
    const bid = parseFloat(bidAmount)
    if (bid > auction.currentBid) {
      // Add new bid to recent bids
      const newBid = {
        id: Date.now().toString(),
        bidder: 'You',
        amount: bid,
        time: 'Just now'
      }
      setRecentBids(prev => [newBid, ...prev.slice(0, 4)])
      setBidAmount('')
    }
  }

  const toggleWatch = () => {
    setIsWatching(!isWatching)
  }

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Video/Audio Controls */}
      <div className="relative bg-black">
        <img
          src={auction.car.image}
          alt={`${auction.car.year} ${auction.car.make} ${auction.car.model}`}
          className="w-full h-64 object-cover"
        />
        
        {/* Overlay Controls */}
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="bg-white/90 text-gray-900 rounded-full p-3 hover:bg-white transition-colors"
          >
            {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
          </button>
        </div>

        {/* Top Controls */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
          <div className="flex space-x-2">
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
              LIVE
            </span>
            <span className="bg-white/90 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
              {timeRemaining}
            </span>
          </div>
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
            <button className="p-2 bg-white/90 text-gray-600 rounded-full">
              <Maximize2 className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Bottom Controls */}
        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
          <div className="flex items-center space-x-4 text-white">
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-1" />
              <span className="text-sm">{auction.bidCount} bidders</span>
            </div>
            <div className="flex items-center">
              <Gavel className="h-4 w-4 mr-1" />
              <span className="text-sm">Live Auction</span>
            </div>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="p-2 bg-white/90 text-gray-600 rounded-full"
            >
              {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
            </button>
            <button className="p-2 bg-white/90 text-gray-600 rounded-full">
              <Settings className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Auction Info */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              {auction.car.year} {auction.car.make} {auction.car.model}
            </h3>
            <div className="flex items-center text-sm text-gray-500 mt-1">
              <span>{auction.car.location}</span>
              <span className="mx-2">•</span>
              <span>{auction.car.mileage.toLocaleString()} km</span>
            </div>
          </div>
        </div>

        {/* Current Bid */}
        <div className="bg-gray-50 rounded-lg p-4 mb-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-1">
              {formatCurrency(auction.currentBid)}
            </div>
            <div className="text-sm text-gray-500">Current Bid</div>
            <div className="text-xs text-gray-400 mt-1">
              Reserve: {formatCurrency(auction.reservePrice)}
            </div>
          </div>
        </div>

        {/* Bid Form */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Your Bid Amount
            </label>
            <div className="flex space-x-2">
              <div className="relative flex-1">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">KSh</span>
                <input
                  type="number"
                  value={bidAmount}
                  onChange={(e) => setBidAmount(e.target.value)}
                  placeholder="Enter bid amount"
                  className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button
                onClick={handleBid}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Bid Now
              </button>
            </div>
          </div>

          {/* Quick Bid Buttons */}
          <div className="flex space-x-2">
            {[130000, 650000, 1300000].map(amount => (
              <button
                key={amount}
                onClick={() => setBidAmount((auction.currentBid + amount).toString())}
                className="flex-1 bg-gray-100 text-gray-700 py-2 px-3 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
              >
                +KSh {amount.toLocaleString()}
              </button>
            ))}
          </div>
        </div>

        {/* Recent Bids */}
        <div className="mt-6">
          <h4 className="text-sm font-semibold text-gray-900 mb-3">Recent Bids</h4>
          <div className="space-y-2 max-h-32 overflow-y-auto">
            {recentBids.map((bid) => (
              <div key={bid.id} className="flex items-center justify-between text-sm">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                    <span className="text-xs font-semibold text-blue-600">
                      {bid.bidder.charAt(0)}
                    </span>
                  </div>
                  <span className="text-gray-600">{bid.bidder}</span>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-gray-900">{formatCurrency(bid.amount)}</div>
                  <div className="text-xs text-gray-500">{bid.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
