'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { MapPin, Car, Calendar, Fuel, Gauge, Users, Search, Filter } from 'lucide-react'
import { formatCurrency } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

// Mock data for cars
const mockCars = [
  {
    id: '1',
    make: 'Ferrari',
    model: '488 GTB',
    year: 2019,
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&h=600&fit=crop',
    mileage: 8500,
    location: 'Nairobi',
    condition: 'EXCELLENT',
    price: 37050000,
    features: ['V8 Engine', 'Carbon Fiber', 'Racing Seats', 'Navigation'],
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    color: 'Rosso Corsa',
    auctionEnd: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000)
  },
  {
    id: '2',
    make: 'Porsche',
    model: '911 Turbo S',
    year: 2021,
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop',
    mileage: 3200,
    location: 'Mombasa',
    condition: 'EXCELLENT',
    price: 25350000,
    features: ['AWD', 'Sport Chrono', 'BOSE Audio', 'Heated Seats'],
    fuelType: 'Gasoline',
    transmission: 'PDK',
    color: 'Jet Black',
    auctionEnd: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000)
  },
  {
    id: '3',
    make: 'Lamborghini',
    model: 'Huracán EVO',
    year: 2020,
    image: 'https://images.unsplash.com/photo-1544829099-b9a0c47f1ad4?w=800&h=600&fit=crop',
    mileage: 12000,
    location: 'Kisumu',
    condition: 'GOOD',
    price: 31850000,
    features: ['V10 Engine', 'Carbon Ceramic Brakes', 'Alcantara Interior', 'Lift System'],
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    color: 'Arancio Borealis',
    auctionEnd: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000)
  },
  {
    id: '4',
    make: 'McLaren',
    model: '720S',
    year: 2018,
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop',
    mileage: 18000,
    location: 'Nakuru',
    condition: 'EXCELLENT',
    price: 24050000,
    features: ['Carbon Fiber Monocage', 'Active Aero', 'Racing Seats', 'Track Mode'],
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    color: 'Volcano Orange',
    auctionEnd: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000)
  },
  {
    id: '5',
    make: 'BMW',
    model: 'M8 Competition',
    year: 2022,
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop',
    mileage: 2500,
    location: 'Eldoret',
    condition: 'EXCELLENT',
    price: 16250000,
    features: ['xDrive AWD', 'M Sport Package', 'Harman Kardon', 'Heated Seats'],
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    color: 'Sapphire Black',
    auctionEnd: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
  },
  {
    id: '6',
    make: 'Audi',
    model: 'R8 V10 Plus',
    year: 2020,
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop',
    mileage: 15000,
    location: 'Ingolstadt',
    condition: 'GOOD',
    price: 165000,
    features: ['V10 Engine', 'Quattro AWD', 'Carbon Fiber', 'Bang & Olufsen'],
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    color: 'Daytona Gray',
    auctionEnd: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000)
  }
]

export default function CarsPage() {
  const [cars, setCars] = useState(mockCars)
  const [filteredCars, setFilteredCars] = useState(mockCars)
  const [searchQuery, setSearchQuery] = useState('')
  const [makeFilter, setMakeFilter] = useState('ALL')
  const [conditionFilter, setConditionFilter] = useState('ALL')
  const [priceRange, setPriceRange] = useState('ALL')
  const [sortBy, setSortBy] = useState('price')

  // Get unique makes for filter
  const makes = ['ALL', ...Array.from(new Set(cars.map(car => car.make)))]

  // Filter and search
  useEffect(() => {
    let filtered = cars

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(car =>
        car.make.toLowerCase().includes(searchQuery.toLowerCase()) ||
        car.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
        car.location.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    // Make filter
    if (makeFilter !== 'ALL') {
      filtered = filtered.filter(car => car.make === makeFilter)
    }

    // Condition filter
    if (conditionFilter !== 'ALL') {
      filtered = filtered.filter(car => car.condition === conditionFilter)
    }

    // Price range filter
    if (priceRange !== 'ALL') {
      const [min, max] = priceRange.split('-').map(Number)
      if (max) {
        filtered = filtered.filter(car => car.price >= min && car.price <= max)
      } else {
        filtered = filtered.filter(car => car.price >= min)
      }
    }

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return a.price - b.price
        case 'year':
          return b.year - a.year
        case 'mileage':
          return a.mileage - b.mileage
        case 'make':
          return a.make.localeCompare(b.make)
        default:
          return 0
      }
    })

    setFilteredCars(filtered)
  }, [cars, searchQuery, makeFilter, conditionFilter, priceRange, sortBy])

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Browse Cars
          </h1>
          <p className="text-xl text-gray-600">
            Discover premium vehicles from around the world
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search cars..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={makeFilter} onValueChange={setMakeFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Make" />
              </SelectTrigger>
              <SelectContent>
                {makes.map(make => (
                  <SelectItem key={make} value={make}>{make}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={conditionFilter} onValueChange={setConditionFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Condition" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ALL">All Conditions</SelectItem>
                <SelectItem value="EXCELLENT">Excellent</SelectItem>
                <SelectItem value="GOOD">Good</SelectItem>
                <SelectItem value="FAIR">Fair</SelectItem>
                <SelectItem value="POOR">Poor</SelectItem>
                <SelectItem value="SALVAGE">Salvage</SelectItem>
              </SelectContent>
            </Select>

            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger>
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ALL">All Prices</SelectItem>
                <SelectItem value="0-6500000">Under KSh 6.5M</SelectItem>
                <SelectItem value="6500000-13000000">KSh 6.5M - KSh 13M</SelectItem>
                <SelectItem value="13000000-26000000">KSh 13M - KSh 26M</SelectItem>
                <SelectItem value="26000000-65000000">KSh 26M - KSh 65M</SelectItem>
                <SelectItem value="65000000">KSh 65M+</SelectItem>
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="price">Price</SelectItem>
                <SelectItem value="year">Year</SelectItem>
                <SelectItem value="mileage">Mileage</SelectItem>
                <SelectItem value="make">Make</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredCars.length} of {cars.length} cars
          </p>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCars.map((car) => (
            <Card key={car.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative">
                <Image
                  src={car.image}
                  alt={`${car.year} ${car.make} ${car.model}`}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-white">
                    {car.condition}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-white/90 text-gray-900">
                    {car.year}
                  </Badge>
                </div>
              </div>

              <CardHeader className="pb-2">
                <CardTitle className="text-lg">
                  {car.year} {car.make} {car.model}
                </CardTitle>
                <div className="flex items-center text-sm text-gray-500">
                  <MapPin className="h-4 w-4 mr-1" />
                  {car.location}
                  <span className="mx-2">•</span>
                  <Car className="h-4 w-4 mr-1" />
                  {car.mileage.toLocaleString()} miles
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Current Price</span>
                    <span className="text-lg font-bold text-primary">
                      {formatCurrency(car.price)}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Fuel className="h-4 w-4 mr-1" />
                      {car.fuelType}
                    </div>
                    <div className="flex items-center">
                      <Gauge className="h-4 w-4 mr-1" />
                      {car.transmission}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {car.year}
                    </div>
                    <div className="flex items-center">
                      <Car className="h-4 w-4 mr-1" />
                      {car.color}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <p className="text-sm text-gray-500">Key Features:</p>
                    <div className="flex flex-wrap gap-1">
                      {car.features.slice(0, 3).map((feature, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                      {car.features.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{car.features.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-2 mt-4">
                    <Button className="flex-1">
                      View Details
                    </Button>
                    <Button variant="outline" size="icon">
                      <Users className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        {filteredCars.length > 0 && (
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Cars
            </Button>
          </div>
        )}

        {/* No Results */}
        {filteredCars.length === 0 && (
          <div className="text-center py-12">
            <Car className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No cars found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search criteria</p>
            <Button onClick={() => {
              setSearchQuery('')
              setMakeFilter('ALL')
              setConditionFilter('ALL')
              setPriceRange('ALL')
            }}>
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
