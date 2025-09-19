'use client'

import { useState } from 'react'
import { 
  Search, 
  Filter, 
  X, 
  ChevronDown, 
  MapPin, 
  Calendar, 
  DollarSign,
  Car,
  Settings,
  Star
} from 'lucide-react'

interface SearchFilters {
  query: string
  make: string
  model: string
  yearFrom: string
  yearTo: string
  priceFrom: string
  priceTo: string
  mileageFrom: string
  mileageTo: string
  condition: string
  fuelType: string
  transmission: string
  location: string
  category: string
  features: string[]
  sortBy: string
}

const makes = [
  'All Makes', 'Ferrari', 'Porsche', 'Lamborghini', 'McLaren', 'BMW', 'Mercedes-Benz',
  'Audi', 'Bentley', 'Rolls-Royce', 'Aston Martin', 'Maserati', 'Jaguar', 'Lexus'
]

const conditions = [
  'All Conditions', 'Excellent', 'Good', 'Fair', 'Poor', 'Salvage'
]

const fuelTypes = [
  'All Fuel Types', 'Gasoline', 'Diesel', 'Hybrid', 'Electric', 'Plug-in Hybrid'
]

const transmissions = [
  'All Transmissions', 'Manual', 'Automatic', 'CVT', 'Semi-Automatic'
]

const categories = [
  'All Categories', 'Luxury', 'Sports', 'Classic', 'SUV', 'Truck', 'Convertible'
]

const features = [
  'Leather Seats', 'Navigation System', 'Sunroof', 'Backup Camera', 'Bluetooth',
  'Heated Seats', 'Cooled Seats', 'Premium Audio', 'All-Wheel Drive', 'Cruise Control',
  'Keyless Entry', 'Remote Start', 'Tinted Windows', 'Custom Wheels', 'Performance Package'
]

const sortOptions = [
  'Relevance', 'Price: Low to High', 'Price: High to Low', 'Year: Newest First',
  'Year: Oldest First', 'Mileage: Low to High', 'Mileage: High to Low', 'Ending Soon'
]

export function AdvancedSearch() {
  const [isOpen, setIsOpen] = useState(false)
  const [filters, setFilters] = useState<SearchFilters>({
    query: '',
    make: 'All Makes',
    model: '',
    yearFrom: '',
    yearTo: '',
    priceFrom: '',
    priceTo: '',
    mileageFrom: '',
    mileageTo: '',
    condition: 'All Conditions',
    fuelType: 'All Fuel Types',
    transmission: 'All Transmissions',
    location: '',
    category: 'All Categories',
    features: [],
    sortBy: 'Relevance'
  })

  const [activeTab, setActiveTab] = useState('basic')

  const handleFilterChange = (key: keyof SearchFilters, value: any) => {
    setFilters(prev => ({ ...prev, [key]: value }))
  }

  const handleFeatureToggle = (feature: string) => {
    setFilters(prev => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature]
    }))
  }

  const clearFilters = () => {
    setFilters({
      query: '',
      make: 'All Makes',
      model: '',
      yearFrom: '',
      yearTo: '',
      priceFrom: '',
      priceTo: '',
      mileageFrom: '',
      mileageTo: '',
      condition: 'All Conditions',
      fuelType: 'All Fuel Types',
      transmission: 'All Transmissions',
      location: '',
      category: 'All Categories',
      features: [],
      sortBy: 'Relevance'
    })
  }

  const getActiveFilterCount = () => {
    let count = 0
    if (filters.make !== 'All Makes') count++
    if (filters.model) count++
    if (filters.yearFrom || filters.yearTo) count++
    if (filters.priceFrom || filters.priceTo) count++
    if (filters.mileageFrom || filters.mileageTo) count++
    if (filters.condition !== 'All Conditions') count++
    if (filters.fuelType !== 'All Fuel Types') count++
    if (filters.transmission !== 'All Transmissions') count++
    if (filters.location) count++
    if (filters.category !== 'All Categories') count++
    if (filters.features.length > 0) count++
    return count
  }

  const activeFilterCount = getActiveFilterCount()

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      {/* Search Bar */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex space-x-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search for your dream car..."
              value={filters.query}
              onChange={(e) => handleFilterChange('query', e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-2"
          >
            <Filter className="h-5 w-5" />
            <span>Filters</span>
            {activeFilterCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {activeFilterCount}
              </span>
            )}
          </button>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Search
          </button>
        </div>
      </div>

      {/* Advanced Filters */}
      {isOpen && (
        <div className="p-4">
          {/* Filter Tabs */}
          <div className="flex space-x-1 mb-6">
            {[
              { id: 'basic', label: 'Basic', icon: Car },
              { id: 'advanced', label: 'Advanced', icon: Settings },
              { id: 'location', label: 'Location', icon: MapPin },
              { id: 'features', label: 'Features', icon: Star }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <tab.icon className="h-4 w-4 mr-2" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Basic Filters */}
          {activeTab === 'basic' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Make</label>
                <select
                  value={filters.make}
                  onChange={(e) => handleFilterChange('make', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {makes.map(make => (
                    <option key={make} value={make}>{make}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Model</label>
                <input
                  type="text"
                  value={filters.model}
                  onChange={(e) => handleFilterChange('model', e.target.value)}
                  placeholder="Enter model"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Condition</label>
                <select
                  value={filters.condition}
                  onChange={(e) => handleFilterChange('condition', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {conditions.map(condition => (
                    <option key={condition} value={condition}>{condition}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Year Range</label>
                <div className="flex space-x-2">
                  <input
                    type="number"
                    value={filters.yearFrom}
                    onChange={(e) => handleFilterChange('yearFrom', e.target.value)}
                    placeholder="From"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input
                    type="number"
                    value={filters.yearTo}
                    onChange={(e) => handleFilterChange('yearTo', e.target.value)}
                    placeholder="To"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                <div className="flex space-x-2">
                  <input
                    type="number"
                    value={filters.priceFrom}
                    onChange={(e) => handleFilterChange('priceFrom', e.target.value)}
                    placeholder="Min"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input
                    type="number"
                    value={filters.priceTo}
                    onChange={(e) => handleFilterChange('priceTo', e.target.value)}
                    placeholder="Max"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mileage Range</label>
                <div className="flex space-x-2">
                  <input
                    type="number"
                    value={filters.mileageFrom}
                    onChange={(e) => handleFilterChange('mileageFrom', e.target.value)}
                    placeholder="Min"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input
                    type="number"
                    value={filters.mileageTo}
                    onChange={(e) => handleFilterChange('mileageTo', e.target.value)}
                    placeholder="Max"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Advanced Filters */}
          {activeTab === 'advanced' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Fuel Type</label>
                <select
                  value={filters.fuelType}
                  onChange={(e) => handleFilterChange('fuelType', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {fuelTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Transmission</label>
                <select
                  value={filters.transmission}
                  onChange={(e) => handleFilterChange('transmission', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {transmissions.map(trans => (
                    <option key={trans} value={trans}>{trans}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select
                  value={filters.category}
                  onChange={(e) => handleFilterChange('category', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              <div className="md:col-span-2 lg:col-span-3">
                <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
                <select
                  value={filters.sortBy}
                  onChange={(e) => handleFilterChange('sortBy', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {sortOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {/* Location Filters */}
          {activeTab === 'location' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <input
                  type="text"
                  value={filters.location}
                  onChange={(e) => handleFilterChange('location', e.target.value)}
                  placeholder="Enter city, state, or country"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          )}

          {/* Features Filters */}
          {activeTab === 'features' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Select Features</label>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                {features.map(feature => (
                  <label key={feature} className="flex items-center p-2 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="checkbox"
                      checked={filters.features.includes(feature)}
                      onChange={() => handleFeatureToggle(feature)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-sm text-gray-700">{feature}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Filter Actions */}
          <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-200">
            <button
              onClick={clearFilters}
              className="text-sm text-gray-600 hover:text-gray-800 flex items-center"
            >
              <X className="h-4 w-4 mr-1" />
              Clear All Filters
            </button>
            <div className="flex space-x-2">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
