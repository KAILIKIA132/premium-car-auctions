'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { 
  Filter, 
  Search, 
  ChevronDown, 
  ChevronUp, 
  MapPin, 
  Calendar, 
  Clock, 
  Gavel, 
  Eye,
  Star,
  CheckCircle,
  X,
  Save,
  Printer
} from 'lucide-react'

const vehicleData = [
  {
    id: '39141***',
    make: 'Hyundai',
    model: 'Elantra SE',
    year: 2018,
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=300&fit=crop',
    location: 'Wichita, KS',
    saleStatus: 'Pure Sale',
    saleDate: '09/22/2025',
    odometer: 108756,
    odometerStatus: 'Actual',
    actualCashValue: 9859,
    title: 'MA ST R',
    damage: 'Front end',
    keysAvailable: true,
    currentBid: 1450,
    currency: 'USD',
    isLive: true
  },
  {
    id: '39410***',
    make: 'Chevrolet',
    model: 'Sonic LS',
    year: 2013,
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=300&fit=crop',
    location: 'Woodburn, OR',
    saleStatus: 'On Minimum Bid',
    saleDate: '09/22/2025',
    odometer: 97172,
    odometerStatus: 'Actual',
    actualCashValue: 4996,
    title: 'OR LS R',
    damage: 'Front end',
    keysAvailable: false,
    currentBid: 100,
    currency: 'USD',
    isLive: false
  },
  {
    id: '39567***',
    make: 'Toyota',
    model: 'Camry LE',
    year: 2019,
    image: 'https://images.unsplash.com/photo-1544829099-b9a0c47f1ad4?w=400&h=300&fit=crop',
    location: 'Nairobi, Kenya',
    saleStatus: 'Live Auction',
    saleDate: '09/23/2025',
    odometer: 45678,
    odometerStatus: 'Actual',
    actualCashValue: 18500,
    title: 'KE ST R',
    damage: 'Side',
    keysAvailable: true,
    currentBid: 8500,
    currency: 'KES',
    isLive: true
  },
  {
    id: '39678***',
    make: 'Ford',
    model: 'F-150 XLT',
    year: 2020,
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop',
    location: 'Mombasa, Kenya',
    saleStatus: 'Upcoming',
    saleDate: '09/24/2025',
    odometer: 23456,
    odometerStatus: 'Actual',
    actualCashValue: 32000,
    title: 'KE ST R',
    damage: 'Hail',
    keysAvailable: true,
    currentBid: 0,
    currency: 'KES',
    isLive: false
  }
]

const featuredFilters = [
  'Copart Go', 'Copart Select', 'Salvage Cars', 'Salvage SUVs', 'Salvage Motorcycles', 
  'Salvage Trucks', 'Buy Now', 'Cars With No Damage', 'Vehicles for Parts', '4 X 4', 
  'Clean Title', 'Run and Drive', 'Flood Damaged', 'Burn Engine', 'Hail Damage', 
  'Vandalism', 'Classic Cars', 'Selling Today', 'No Bids Yet', 'Lots with Bids', 
  'Muscle Cars', 'Hybrid Vehicles', 'Rental Vehicles', 'Pure Sale', 'New arrivals'
]

export default function CarsPage() {
  const searchParams = useSearchParams()
  const [vehicles, setVehicles] = useState(vehicleData)
  const [filteredVehicles, setFilteredVehicles] = useState(vehicleData)
  const [showFilters, setShowFilters] = useState(true)
  const [sortBy, setSortBy] = useState('saleDate')
  const [entriesPerPage, setEntriesPerPage] = useState(25)
  const [currentPage, setCurrentPage] = useState(1)
  const [activeFilters, setActiveFilters] = useState<string[]>([])

  const vehicleType = searchParams.get('type') || 'all'
  const filterType = searchParams.get('filter') || 'all'

  useEffect(() => {
    let filtered = [...vehicles]

    // Filter by vehicle type
    if (vehicleType !== 'all') {
      switch (vehicleType) {
        case 'sedans':
          filtered = filtered.filter(v => ['Elantra', 'Sonic', 'Camry'].includes(v.model.split(' ')[0]))
          break
        case 'trucks':
          filtered = filtered.filter(v => v.model.includes('F-150'))
          break
        case 'motorcycles':
          filtered = [] // No motorcycles in current data
          break
        case 'boats':
          filtered = [] // No boats in current data
          break
        case 'rvs':
          filtered = [] // No RVs in current data
          break
        case 'luxury':
          filtered = filtered.filter(v => v.actualCashValue > 20000)
          break
        case 'sports':
          filtered = filtered.filter(v => v.actualCashValue > 15000)
          break
        case 'classic':
          filtered = filtered.filter(v => v.year < 2015)
          break
        case 'suvs':
          filtered = filtered.filter(v => v.model.includes('SUV'))
          break
      }
    }

    // Filter by additional filters
    if (filterType !== 'all') {
      switch (filterType) {
        case 'buy-now':
          filtered = filtered.filter(v => v.saleStatus === 'Buy Now')
          break
        case 'no-damage':
          filtered = filtered.filter(v => v.damage === 'No Damage')
          break
        case 'parts-only':
          filtered = filtered.filter(v => v.saleStatus === 'Parts Only')
          break
        case '4x4':
          filtered = filtered.filter(v => v.model.includes('4X4') || v.model.includes('4WD'))
          break
        case 'clean-title':
          filtered = filtered.filter(v => v.title.includes('Clean'))
          break
        case 'run-drive':
          filtered = filtered.filter(v => v.saleStatus === 'Run and Drive')
          break
        case 'flood':
          filtered = filtered.filter(v => v.damage === 'Flood')
          break
        case 'hail':
          filtered = filtered.filter(v => v.damage === 'Hail')
          break
        case 'vandalism':
          filtered = filtered.filter(v => v.damage === 'Vandalism')
          break
        case 'muscle':
          filtered = filtered.filter(v => v.make === 'Ford' && v.model.includes('Mustang'))
          break
        case 'hybrid':
          filtered = filtered.filter(v => v.model.includes('Hybrid'))
          break
        case 'rental':
          filtered = filtered.filter(v => v.saleStatus === 'Rental')
          break
        case 'pure-sale':
          filtered = filtered.filter(v => v.saleStatus === 'Pure Sale')
          break
        case 'new-arrivals':
          filtered = filtered.filter(v => v.year >= 2020)
          break
        case 'selling-today':
          filtered = filtered.filter(v => v.saleDate === '09/22/2025')
          break
        case 'no-bids':
          filtered = filtered.filter(v => v.currentBid === 0)
          break
        case 'with-bids':
          filtered = filtered.filter(v => v.currentBid > 0)
          break
      }
    }

    setFilteredVehicles(filtered)
  }, [vehicleType, filterType])

  const formatCurrency = (amount: number, currency: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
    }).format(amount)
  }

  const getPageTitle = () => {
    if (vehicleType === 'sedans') return 'Used Salvage Sedans for Sale'
    if (vehicleType === 'trucks') return 'Used Salvage Trucks for Sale'
    if (vehicleType === 'motorcycles') return 'Used Salvage Motorcycles for Sale'
    if (vehicleType === 'boats') return 'Used Salvage Boats for Sale'
    if (vehicleType === 'rvs') return 'Used Salvage RVs for Sale'
    if (vehicleType === 'luxury') return 'Used Luxury Cars for Sale'
    if (vehicleType === 'sports') return 'Used Sports Cars for Sale'
    if (vehicleType === 'classic') return 'Used Classic Cars for Sale'
    if (vehicleType === 'suvs') return 'Used SUVs for Sale'
    return 'Used Salvage Cars for Sale'
  }

  const getBreadcrumbs = () => {
    const base = ['HOME', 'BUY SALVAGE CARS']
    if (vehicleType === 'sedans') return [...base, 'SEDANS']
    if (vehicleType === 'trucks') return [...base, 'TRUCKS']
    if (vehicleType === 'motorcycles') return [...base, 'MOTORCYCLES']
    if (vehicleType === 'boats') return [...base, 'BOATS']
    if (vehicleType === 'rvs') return [...base, 'RVS']
    return base
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            {getBreadcrumbs().map((crumb, index) => (
              <div key={index} className="flex items-center">
                {index > 0 && <span className="text-gray-400 mx-2">&gt;</span>}
                <span className={index === getBreadcrumbs().length - 1 ? 'text-gray-600' : 'text-blue-600 hover:text-blue-800'}>
                  {crumb}
                </span>
              </div>
            ))}
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar - Filters */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">FILTERS</h3>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  {showFilters ? '- Hide Filters' : '+ Show Filters'}
                </button>
              </div>

              {showFilters && (
                <div className="space-y-6">
                  {/* Active Filters */}
                  {activeFilters.length > 0 && (
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">Active Filters</span>
                        <button
                          onClick={() => setActiveFilters([])}
                          className="text-blue-600 hover:text-blue-800 text-sm"
                        >
                          Clear All
                        </button>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {activeFilters.map((filter, index) => (
                          <span
                            key={index}
                            className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs flex items-center"
                          >
                            {filter}
                            <button
                              onClick={() => setActiveFilters(prev => prev.filter(f => f !== filter))}
                              className="ml-1 hover:text-blue-600"
                              aria-label={`Remove ${filter} filter`}
                            >
                              <X className="h-3 w-3" />
                            </button>
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Vehicle Filters */}
                  <div className="border-t border-gray-200 pt-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-4 flex items-center">
                      <Filter className="h-4 w-4 mr-2 text-blue-600" />
                      VEHICLE FILTERS
                    </h4>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Newly Added Lots
                        </label>
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" aria-label="Newly added lots filter">
                          <option>All</option>
                          <option>Last 24 Hours</option>
                          <option>Last 7 Days</option>
                          <option>Last 30 Days</option>
                        </select>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">Search by Zip Code</span>
                        <input type="checkbox" className="h-4 w-4 text-blue-600" aria-label="Search by zip code" />
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">Buy It Now</span>
                        <input type="checkbox" className="h-4 w-4 text-blue-600" aria-label="Buy it now filter" />
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">Exclude Upcoming Lots</span>
                        <input type="checkbox" className="h-4 w-4 text-blue-600" aria-label="Exclude upcoming lots" />
                      </div>

                      <div>
                        <button className="w-full flex items-center justify-between text-sm text-gray-700 hover:text-gray-900">
                          Vehicle Type
                          <ChevronUp className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Page Title */}
            <h1 className="text-3xl font-bold text-gray-900 mb-6">{getPageTitle()}</h1>

            {/* Featured Filters */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-700 mb-3">Featured Filters:</h3>
              <div className="flex flex-wrap gap-2">
                {featuredFilters.map((filter, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      if (!activeFilters.includes(filter)) {
                        setActiveFilters(prev => [...prev, filter])
                      }
                    }}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm hover:bg-gray-200 transition-colors"
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            {/* Results Header */}
            <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div className="mb-4 lg:mb-0">
                  <p className="text-sm text-gray-600">
                    Showing 1 to {Math.min(entriesPerPage, filteredVehicles.length)} of {filteredVehicles.length} entries
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">Sort By</span>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="px-3 py-1 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      aria-label="Sort by"
                    >
                      <option value="saleDate">Sale Date</option>
                      <option value="currentBid">Current Bid</option>
                      <option value="make">Make</option>
                      <option value="year">Year</option>
                    </select>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">Show</span>
                    <select
                      value={entriesPerPage}
                      onChange={(e) => setEntriesPerPage(Number(e.target.value))}
                      className="px-3 py-1 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      aria-label="Entries per page"
                    >
                      <option value={25}>25 entries</option>
                      <option value={50}>50 entries</option>
                      <option value={100}>100 entries</option>
                    </select>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-gray-600 hover:text-gray-900" aria-label="Filter">
                      <Filter className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-gray-600 hover:text-gray-900" aria-label="Save">
                      <Save className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-gray-600 hover:text-gray-900" aria-label="Print">
                      <Printer className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Vehicle Listings */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              {/* Table Header */}
              <div className="bg-gray-50 px-6 py-3 border-b border-gray-200">
                <div className="grid grid-cols-6 gap-4 text-sm font-medium text-gray-700">
                  <div>IMAGE</div>
                  <div>LOT INFO</div>
                  <div>VEHICLE INFO</div>
                  <div>CONDITION</div>
                  <div>SALE INFO</div>
                  <div>BIDS</div>
                </div>
              </div>

              {/* Vehicle Rows */}
              <div className="divide-y divide-gray-200">
                {filteredVehicles.map((vehicle, index) => (
                  <div key={index} className="p-6 hover:bg-gray-50 transition-colors">
                    <div className="grid grid-cols-6 gap-4 items-center">
                      {/* Image */}
                      <div className="relative">
                        <img
                          src={vehicle.image}
                          alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
                          className="w-full h-20 object-cover rounded"
                        />
                        {vehicle.isLive && (
                          <div className="absolute top-1 left-1">
                            <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold">
                              Live
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Lot Info */}
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {vehicle.year} {vehicle.make} {vehicle.model}
                        </h3>
                        <p className="text-sm text-gray-600 mb-1">Lot Number: {vehicle.id}</p>
                        <p className="text-sm text-gray-600 mb-1">Title: {vehicle.title}</p>
                        <p className="text-sm text-gray-600">Sale Date: {vehicle.saleDate}</p>
                        <div className="flex items-center space-x-2 mt-2">
                          <button className="text-gray-400 hover:text-gray-600" aria-label="Compare">
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                          </button>
                          <button className="text-gray-400 hover:text-gray-600" aria-label="Email">
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          </button>
                        </div>
                      </div>

                      {/* Vehicle Info */}
                      <div>
                        <div className="flex items-center text-sm text-gray-600 mb-1">
                          <MapPin className="h-4 w-4 mr-1" />
                          {vehicle.location}
                        </div>
                        <p className="text-sm text-gray-600 mb-1">Sale Status: {vehicle.saleStatus}</p>
                        {vehicle.isLive && (
                          <button className="bg-green-600 text-white px-2 py-1 rounded text-xs font-semibold">
                            Live Auctions
                          </button>
                        )}
                      </div>

                      {/* Condition */}
                      <div>
                        <p className="text-sm text-gray-600 mb-1">
                          Odometer: {vehicle.odometer.toLocaleString()} mi ({vehicle.odometerStatus})
                        </p>
                        <p className="text-sm text-gray-600 mb-1">
                          Actual Cash Value: {formatCurrency(vehicle.actualCashValue, vehicle.currency)}
                        </p>
                      </div>

                      {/* Sale Info */}
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Salvage Title</p>
                        <p className="text-sm text-gray-600 mb-1">Damage: {vehicle.damage}</p>
                        <p className="text-sm text-gray-600">
                          Keys Available: {vehicle.keysAvailable ? 'Yes' : 'No'}
                        </p>
                      </div>

                      {/* Bids */}
                      <div>
                        <p className="text-sm text-gray-600 mb-1">
                          Current Bid {formatCurrency(vehicle.currentBid, vehicle.currency)}
                        </p>
                        <div className="flex space-x-2 mt-2">
                          <button className="bg-blue-600 text-white px-3 py-1 rounded text-xs font-semibold hover:bg-blue-700 transition-colors">
                            Bid Now
                          </button>
                          <button className="bg-yellow-500 text-white px-3 py-1 rounded text-xs font-semibold hover:bg-yellow-600 transition-colors">
                            Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination */}
            <div className="mt-6 flex items-center justify-between">
              <div className="text-sm text-gray-600">
                Showing 1 to {Math.min(entriesPerPage, filteredVehicles.length)} of {filteredVehicles.length} entries
              </div>
              <div className="flex items-center space-x-2">
                <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">
                  Previous
                </button>
                <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm">
                  1
                </button>
                <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">
                  2
                </button>
                <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">
                  3
                </button>
                <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}