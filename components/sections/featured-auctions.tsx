'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Clock, Users, MapPin, Car, Gavel } from 'lucide-react'
import { formatCurrency, formatTimeRemaining } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

// Mock data for featured auctions
const featuredAuctions = [
  {
    id: '1',
    car: {
      make: 'Ferrari',
      model: '488 GTB',
      year: 2019,
      image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&h=600&fit=crop',
      mileage: 8500,
      location: 'Nairobi'
    },
    currentBid: 37050000,
    reservePrice: 39000000,
    endTime: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), // 2 days from now
    bidCount: 23,
    status: 'LIVE' as const
  },
  {
    id: '2',
    car: {
      make: 'Porsche',
      model: '911 Turbo S',
      year: 2021,
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop',
      mileage: 3200,
      location: 'Mombasa'
    },
    currentBid: 25350000,
    reservePrice: 28600000,
    endTime: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000), // 5 days from now
    bidCount: 15,
    status: 'LIVE' as const
  },
  {
    id: '3',
    car: {
      make: 'Lamborghini',
      model: 'Huracán EVO',
      year: 2020,
      image: 'https://images.unsplash.com/photo-1544829099-b9a0c47f1ad4?w=800&h=600&fit=crop',
      mileage: 12000,
      location: 'Kisumu'
    },
    currentBid: 31850000,
    reservePrice: 36400000,
    endTime: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000), // 1 day from now
    bidCount: 31,
    status: 'LIVE' as const
  },
  {
    id: '4',
    car: {
      make: 'McLaren',
      model: '720S',
      year: 2018,
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop',
      mileage: 18000,
      location: 'Nakuru'
    },
    currentBid: 24050000,
    reservePrice: 26000000,
    endTime: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days from now
    bidCount: 19,
    status: 'LIVE' as const
  }
]

export function FeaturedAuctions() {
  const [timeRemaining, setTimeRemaining] = useState<{[key: string]: string}>({})

  // Update time remaining every minute
  useState(() => {
    const updateTimes = () => {
      const times: {[key: string]: string} = {}
      featuredAuctions.forEach(auction => {
        times[auction.id] = formatTimeRemaining(auction.endTime)
      })
      setTimeRemaining(times)
    }
    
    updateTimes()
    const interval = setInterval(updateTimes, 60000) // Update every minute
    
    return () => clearInterval(interval)
  })

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Live Auctions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Bid on these exclusive vehicles from our premium collection
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredAuctions.map((auction) => (
            <Card key={auction.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative">
                <Image
                  src={auction.car.image}
                  alt={`${auction.car.year} ${auction.car.make} ${auction.car.model}`}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className={`${auction.status === 'LIVE' ? 'bg-red-500 hover:bg-red-600' : 'bg-gray-500'} text-white live-pulse`}>
                    {auction.status}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-white/90 text-gray-900">
                    <Clock className="h-3 w-3 mr-1" />
                    {timeRemaining[auction.id] || formatTimeRemaining(auction.endTime)}
                  </Badge>
                </div>
              </div>

              <CardHeader className="pb-2">
                <CardTitle className="text-lg">
                  {auction.car.year} {auction.car.make} {auction.car.model}
                </CardTitle>
                <div className="flex items-center text-sm text-gray-500">
                  <MapPin className="h-4 w-4 mr-1" />
                  {auction.car.location}
                  <span className="mx-2">•</span>
                  <Car className="h-4 w-4 mr-1" />
                  {auction.car.mileage.toLocaleString()} miles
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Current Bid</span>
                    <span className="text-lg font-bold text-primary">
                      {formatCurrency(auction.currentBid)}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Reserve Price</span>
                    <span className="text-sm text-gray-700">
                      {formatCurrency(auction.reservePrice)}
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Bids</span>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1 text-gray-500" />
                      <span className="text-sm text-gray-700">{auction.bidCount}</span>
                    </div>
                  </div>

                  <Button className="w-full mt-4 group-hover:bg-primary/90 transition-colors">
                    <Gavel className="h-4 w-4 mr-2" />
                    Place Bid
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/auctions">
            <Button size="lg" variant="outline" className="px-8">
              View All Auctions
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
