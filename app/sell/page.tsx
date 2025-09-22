'use client'

import { useState } from 'react'
import { Car, Upload, MapPin, Calendar, Gauge, Fuel, Settings, CheckCircle, Star, Shield, Clock } from 'lucide-react'

const carMakes = [
  'Acura', 'Audi', 'BMW', 'Bentley', 'Cadillac', 'Chevrolet', 'Ferrari', 'Ford', 
  'Honda', 'Hyundai', 'Infiniti', 'Jaguar', 'Jeep', 'Kia', 'Lamborghini', 'Land Rover',
  'Lexus', 'Maserati', 'Mazda', 'McLaren', 'Mercedes-Benz', 'Nissan', 'Porsche', 
  'Rolls-Royce', 'Subaru', 'Tesla', 'Toyota', 'Volkswagen', 'Volvo'
]

const carModels = {
  'BMW': ['M3', 'M5', 'M8', 'X5', 'X7', 'i8', 'Z4'],
  'Mercedes-Benz': ['C-Class', 'E-Class', 'S-Class', 'G-Class', 'AMG GT', 'SL-Class'],
  'Audi': ['A4', 'A6', 'A8', 'Q5', 'Q7', 'R8', 'TT'],
  'Porsche': ['911', 'Cayenne', 'Macan', 'Panamera', 'Taycan', 'Boxster'],
  'Ferrari': ['488 GTB', 'F8 Tributo', 'SF90 Stradale', 'Roma', 'Portofino'],
  'Lamborghini': ['Huracán', 'Aventador', 'Urus', 'Gallardo'],
  'McLaren': ['720S', '570S', 'P1', 'Artura', 'GT'],
  'Tesla': ['Model S', 'Model 3', 'Model X', 'Model Y', 'Roadster']
}

const conditions = [
  { value: 'EXCELLENT', label: 'Excellent', description: 'Like new, no issues' },
  { value: 'GOOD', label: 'Good', description: 'Minor wear, well maintained' },
  { value: 'FAIR', label: 'Fair', description: 'Some wear, needs minor work' },
  { value: 'POOR', label: 'Poor', description: 'Significant wear, needs work' },
  { value: 'SALVAGE', label: 'Salvage', description: 'Damaged, for parts/repair' }
]

const fuelTypes = ['Gasoline', 'Diesel', 'Hybrid', 'Electric', 'Plug-in Hybrid']
const transmissions = ['Manual', 'Automatic', 'CVT', 'Semi-Automatic']
const colors = ['Black', 'White', 'Silver', 'Gray', 'Red', 'Blue', 'Green', 'Yellow', 'Orange', 'Brown', 'Gold', 'Other']

export default function SellPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Basic Info
    make: '',
    model: '',
    year: '',
    mileage: '',
    vin: '',
    color: '',
    condition: '',
    
    // Technical Details
    fuelType: '',
    transmission: '',
    engine: '',
    horsepower: '',
    torque: '',
    
    // Location & Contact
    location: '',
    city: '',
    state: '',
    zipCode: '',
    phone: '',
    email: '',
    
    // Listing Details
    title: '',
    description: '',
    price: '',
    reservePrice: '',
    auctionDuration: '7',
    
    // Images
    images: [] as File[],
    
    // Features
    features: [] as string[],
    
    // Service History
    serviceHistory: '',
    accidents: false,
    accidentDetails: '',
    
    // Auction Preferences
    startDate: '',
    endDate: '',
    minimumBid: '',
    buyItNowPrice: ''
  })

  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([])
  const [uploadedImages, setUploadedImages] = useState<string[]>([])

  const features = [
    'Leather Seats', 'Navigation System', 'Sunroof', 'Backup Camera', 'Bluetooth',
    'Heated Seats', 'Cooled Seats', 'Premium Audio', 'All-Wheel Drive', 'Cruise Control',
    'Keyless Entry', 'Remote Start', 'Tinted Windows', 'Custom Wheels', 'Performance Package',
    'Sport Package', 'Luxury Package', 'Technology Package', 'Safety Package', 'Winter Package'
  ]

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleFeatureToggle = (feature: string) => {
    setSelectedFeatures(prev => 
      prev.includes(feature) 
        ? prev.filter(f => f !== feature)
        : [...prev, feature]
    )
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    const newImages = files.map(file => URL.createObjectURL(file))
    setUploadedImages(prev => [...prev, ...newImages])
    setFormData(prev => ({ ...prev, images: [...prev.images, ...files] }))
  }

  const removeImage = (index: number) => {
    setUploadedImages(prev => prev.filter((_, i) => i !== index))
    setFormData(prev => ({ ...prev, images: prev.images.filter((_, i) => i !== index) }))
  }

  const nextStep = () => {
    if (currentStep < 5) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const submitListing = () => {
    console.log('Submitting listing:', { ...formData, features: selectedFeatures })
    // Handle form submission
  }

  const steps = [
    { number: 1, title: 'Basic Info', icon: Car },
    { number: 2, title: 'Details', icon: Settings },
    { number: 3, title: 'Images', icon: Upload },
    { number: 4, title: 'Auction', icon: Clock },
    { number: 5, title: 'Review', icon: CheckCircle }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Sell Your Car
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              List your vehicle on our premium auction platform and reach thousands of qualified buyers worldwide.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        {/* Progress Steps */}
        <div className="mb-6 sm:mb-8">
          <div className="flex items-center justify-between overflow-x-auto pb-4">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center flex-shrink-0">
                <div className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 ${
                  currentStep >= step.number 
                    ? 'bg-blue-600 border-blue-600 text-white' 
                    : 'border-gray-300 text-gray-400'
                }`}>
                  <step.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div className="ml-2 sm:ml-3">
                  <p className={`text-xs sm:text-sm font-medium ${
                    currentStep >= step.number ? 'text-blue-600' : 'text-gray-400'
                  }`}>
                    {step.title}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-8 sm:w-16 h-0.5 mx-2 sm:mx-4 ${
                    currentStep > step.number ? 'bg-blue-600' : 'bg-gray-300'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 lg:p-8">
          {currentStep === 1 && (
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Basic Vehicle Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Make *</label>
                  <select
                    value={formData.make}
                    onChange={(e) => handleInputChange('make', e.target.value)}
                    className="w-full px-3 py-3 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
                    aria-label="Select car make"
                  >
                    <option value="">Select Make</option>
                    {carMakes.map(make => (
                      <option key={make} value={make}>{make}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Model *</label>
                  <select
                    value={formData.model}
                    onChange={(e) => handleInputChange('model', e.target.value)}
                    className="w-full px-3 py-3 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
                    disabled={!formData.make}
                    aria-label="Select car model"
                  >
                    <option value="">Select Model</option>
                    {formData.make && carModels[formData.make as keyof typeof carModels]?.map(model => (
                      <option key={model} value={model}>{model}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Year *</label>
                  <select
                    value={formData.year}
                    onChange={(e) => handleInputChange('year', e.target.value)}
                    className="w-full px-3 py-3 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
                    aria-label="Select car year"
                  >
                    <option value="">Select Year</option>
                    {Array.from({ length: 30 }, (_, i) => new Date().getFullYear() - i).map(year => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mileage *</label>
                  <input
                    type="number"
                    value={formData.mileage}
                    onChange={(e) => handleInputChange('mileage', e.target.value)}
                    placeholder="Enter mileage"
                    className="w-full px-3 py-3 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
                    aria-label="Enter vehicle mileage"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">VIN</label>
                  <input
                    type="text"
                    value={formData.vin}
                    onChange={(e) => handleInputChange('vin', e.target.value)}
                    placeholder="Vehicle Identification Number"
                    className="w-full px-3 py-3 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
                    aria-label="Enter VIN number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Color *</label>
                  <select
                    value={formData.color}
                    onChange={(e) => handleInputChange('color', e.target.value)}
                    className="w-full px-3 py-3 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
                    aria-label="Select car color"
                  >
                    <option value="">Select Color</option>
                    {colors.map(color => (
                      <option key={color} value={color}>{color}</option>
                    ))}
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Condition *</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                    {conditions.map(condition => (
                      <label key={condition.value} className="flex items-center p-3 sm:p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 touch-manipulation">
                        <input
                          type="radio"
                          name="condition"
                          value={condition.value}
                          checked={formData.condition === condition.value}
                          onChange={(e) => handleInputChange('condition', e.target.value)}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                          aria-label={`Select ${condition.label} condition`}
                        />
                        <div className="ml-3">
                          <div className="text-sm font-medium text-gray-900">{condition.label}</div>
                          <div className="text-xs sm:text-sm text-gray-500">{condition.description}</div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Technical Details</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Fuel Type *</label>
                  <select
                    value={formData.fuelType}
                    onChange={(e) => handleInputChange('fuelType', e.target.value)}
                    className="w-full px-3 py-3 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
                    aria-label="Select fuel type"
                  >
                    <option value="">Select Fuel Type</option>
                    {fuelTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Transmission *</label>
                  <select
                    value={formData.transmission}
                    onChange={(e) => handleInputChange('transmission', e.target.value)}
                    className="w-full px-3 py-3 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
                    aria-label="Select transmission type"
                  >
                    <option value="">Select Transmission</option>
                    {transmissions.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Engine</label>
                  <input
                    type="text"
                    value={formData.engine}
                    onChange={(e) => handleInputChange('engine', e.target.value)}
                    placeholder="e.g., 3.0L V6 Twin-Turbo"
                    className="w-full px-3 py-3 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
                    aria-label="Enter engine details"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Horsepower</label>
                  <input
                    type="number"
                    value={formData.horsepower}
                    onChange={(e) => handleInputChange('horsepower', e.target.value)}
                    placeholder="e.g., 450"
                    className="w-full px-3 py-3 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
                    aria-label="Enter horsepower"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Key Features</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                    {features.map(feature => (
                      <label key={feature} className="flex items-center p-2 sm:p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 touch-manipulation">
                        <input
                          type="checkbox"
                          checked={selectedFeatures.includes(feature)}
                          onChange={() => handleFeatureToggle(feature)}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                          aria-label={`Select ${feature} feature`}
                        />
                        <span className="ml-2 text-xs sm:text-sm text-gray-700">{feature}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service History</label>
                  <textarea
                    value={formData.serviceHistory}
                    onChange={(e) => handleInputChange('serviceHistory', e.target.value)}
                    rows={4}
                    placeholder="Describe the vehicle's service history, maintenance records, and any recent work performed..."
                    className="w-full px-3 py-3 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
                    aria-label="Enter service history"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="flex items-center touch-manipulation">
                    <input
                      type="checkbox"
                      checked={formData.accidents}
                      onChange={(e) => handleInputChange('accidents', e.target.checked)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      aria-label="Check if vehicle has been in an accident"
                    />
                    <span className="ml-2 text-sm text-gray-700">Vehicle has been in an accident</span>
                  </label>
                  {formData.accidents && (
                    <textarea
                      value={formData.accidentDetails}
                      onChange={(e) => handleInputChange('accidentDetails', e.target.value)}
                      rows={3}
                      placeholder="Please provide details about the accident and any repairs made..."
                      className="w-full mt-2 px-3 py-3 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
                      aria-label="Enter accident details"
                    />
                  )}
                </div>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Vehicle Images</h2>
              
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 sm:p-6 lg:p-8 text-center">
                <Upload className="h-8 w-8 sm:h-12 sm:w-12 text-gray-400 mx-auto mb-3 sm:mb-4" />
                <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-2">Upload Vehicle Photos</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4">Upload high-quality photos of your vehicle. First photo will be the main image.</p>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="image-upload"
                />
                <label
                  htmlFor="image-upload"
                  className="bg-blue-600 text-white px-4 py-3 sm:px-6 sm:py-2 rounded-lg font-semibold hover:bg-blue-700 cursor-pointer transition-colors touch-manipulation inline-block"
                >
                  Choose Photos
                </label>
              </div>

              {uploadedImages.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
                  {uploadedImages.map((image, index) => (
                    <div key={index} className="relative">
                      <img
                        src={image}
                        alt={`Vehicle ${index + 1}`}
                        className="w-full h-24 sm:h-32 object-cover rounded-lg"
                      />
                      <button
                        onClick={() => removeImage(index)}
                        className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-red-500 text-white rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-xs sm:text-sm hover:bg-red-600 touch-manipulation"
                        aria-label={`Remove image ${index + 1}`}
                      >
                        ×
                      </button>
                      {index === 0 && (
                        <div className="absolute bottom-1 left-1 sm:bottom-2 sm:left-2 bg-blue-600 text-white text-xs px-1 py-0.5 sm:px-2 sm:py-1 rounded">
                          Main Photo
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {currentStep === 4 && (
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Auction Settings</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Starting Price *</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                    <input
                      type="number"
                      value={formData.price}
                      onChange={(e) => handleInputChange('price', e.target.value)}
                      placeholder="0"
                      className="w-full pl-8 pr-3 py-3 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
                      aria-label="Enter starting price"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Reserve Price</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                    <input
                      type="number"
                      value={formData.reservePrice}
                      onChange={(e) => handleInputChange('reservePrice', e.target.value)}
                      placeholder="0"
                      className="w-full pl-8 pr-3 py-3 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
                      aria-label="Enter reserve price"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Minimum price you'll accept (optional)</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Auction Duration *</label>
                  <select
                    value={formData.auctionDuration}
                    onChange={(e) => handleInputChange('auctionDuration', e.target.value)}
                    className="w-full px-3 py-3 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
                    aria-label="Select auction duration"
                  >
                    <option value="3">3 Days</option>
                    <option value="5">5 Days</option>
                    <option value="7">7 Days</option>
                    <option value="10">10 Days</option>
                    <option value="14">14 Days</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Buy It Now Price</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                    <input
                      type="number"
                      value={formData.buyItNowPrice}
                      onChange={(e) => handleInputChange('buyItNowPrice', e.target.value)}
                      placeholder="0"
                      className="w-full pl-8 pr-3 py-3 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
                      aria-label="Enter buy it now price"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Allow immediate purchase (optional)</p>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Listing Title *</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    placeholder="e.g., 2019 Ferrari 488 GTB - Excellent Condition - Low Miles"
                    className="w-full px-3 py-3 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
                    aria-label="Enter listing title"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Description *</label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    rows={6}
                    placeholder="Provide a detailed description of your vehicle, including its history, condition, and any special features..."
                    className="w-full px-3 py-3 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
                    aria-label="Enter vehicle description"
                  />
                </div>
              </div>
            </div>
          )}

          {currentStep === 5 && (
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Review Your Listing</h2>
              
              <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Listing Summary</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-700">Vehicle:</span>
                    <span className="ml-2 text-gray-600">{formData.year} {formData.make} {formData.model}</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Mileage:</span>
                    <span className="ml-2 text-gray-600">{formData.mileage} miles</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Condition:</span>
                    <span className="ml-2 text-gray-600">{formData.condition}</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Starting Price:</span>
                    <span className="ml-2 text-gray-600">KSh {formData.price}</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Auction Duration:</span>
                    <span className="ml-2 text-gray-600">{formData.auctionDuration} days</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Images:</span>
                    <span className="ml-2 text-gray-600">{uploadedImages.length} photos</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start">
                  <Shield className="h-5 w-5 text-blue-600 mt-0.5 mr-3" />
                  <div>
                    <h4 className="text-sm font-medium text-blue-900">Secure Transaction</h4>
                    <p className="text-sm text-blue-700 mt-1">
                      Your vehicle will be protected by our secure escrow system. Payment is held safely until the transaction is completed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-0 pt-6 sm:pt-8 border-t border-gray-200">
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className="w-full sm:w-auto px-4 py-3 sm:px-6 sm:py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors touch-manipulation"
            >
              Previous
            </button>
            
            {currentStep < 5 ? (
              <button
                onClick={nextStep}
                className="w-full sm:w-auto px-4 py-3 sm:px-6 sm:py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors touch-manipulation"
              >
                Next Step
              </button>
            ) : (
              <button
                onClick={submitListing}
                className="w-full sm:w-auto px-4 py-3 sm:px-8 sm:py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center touch-manipulation"
              >
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                Submit Listing
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
