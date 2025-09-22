'use client'

import { Search, Shield, CheckCircle, AlertTriangle, FileText, Clock, Star } from 'lucide-react'

const inspectionFeatures = [
  {
    icon: Search,
    title: 'Comprehensive Inspection',
    description: 'Thorough 150-point inspection covering engine, transmission, brakes, and more.'
  },
  {
    icon: Shield,
    title: 'Certified Inspectors',
    description: 'Licensed automotive experts with 10+ years of experience in vehicle inspection.'
  },
  {
    icon: FileText,
    title: 'Detailed Report',
    description: 'Complete inspection report with photos and recommendations for any issues found.'
  },
  {
    icon: Clock,
    title: 'Quick Turnaround',
    description: 'Most inspections completed within 24-48 hours of scheduling.'
  }
]

const inspectionTypes = [
  {
    name: 'Basic Inspection',
    price: 'KSh 5,000',
    duration: '1-2 hours',
    features: [
      'Visual inspection',
      'Engine check',
      'Brake system check',
      'Basic report',
      'Photo documentation'
    ]
  },
  {
    name: 'Standard Inspection',
    price: 'KSh 8,000',
    duration: '2-3 hours',
    features: [
      'Comprehensive inspection',
      'Test drive included',
      'Detailed report',
      'Photo documentation',
      'Recommendations',
      '1-year warranty'
    ],
    popular: true
  },
  {
    name: 'Premium Inspection',
    price: 'KSh 12,000',
    duration: '3-4 hours',
    features: [
      'Full diagnostic scan',
      'Road test',
      'Detailed report',
      'Video documentation',
      'Expert recommendations',
      '2-year warranty',
      'Priority support'
    ]
  }
]

const inspectionProcess = [
  {
    step: 1,
    title: 'Schedule Inspection',
    description: 'Book your inspection online or call us directly'
  },
  {
    step: 2,
    title: 'Vehicle Pickup',
    description: 'We collect your vehicle at your convenience'
  },
  {
    step: 3,
    title: 'Thorough Inspection',
    description: 'Our experts perform comprehensive vehicle assessment'
  },
  {
    step: 4,
    title: 'Detailed Report',
    description: 'Receive complete report with photos and recommendations'
  }
]

export default function InspectionPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional Vehicle
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Inspection Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              Get peace of mind with our comprehensive vehicle inspection service. 
              Know exactly what you're buying before you commit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary px-8 py-4 text-lg font-semibold flex items-center justify-center">
                <Search className="h-5 w-5 mr-2" />
                Book Inspection
              </button>
              <button className="btn-outline px-8 py-4 text-lg font-semibold flex items-center justify-center">
                <FileText className="h-5 w-5 mr-2" />
                View Sample Report
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Our Inspection?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional, thorough, and reliable vehicle inspection services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {inspectionFeatures.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-4 border-2 border-transparent group-hover:border-blue-200">
                  <div className="bg-gradient-to-br from-blue-600 to-green-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inspection Types Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Inspection Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the inspection level that meets your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {inspectionTypes.map((type, index) => (
              <div key={index} className={`relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${type.popular ? 'border-4 border-blue-500' : 'border-2 border-gray-200'}`}>
                {type.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{type.name}</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-2">{type.price}</div>
                  <div className="text-gray-600">Duration: {type.duration}</div>
                </div>
                <ul className="space-y-4 mb-8">
                  {type.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  type.popular 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}>
                  Choose Package
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple steps to get your vehicle professionally inspected
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {inspectionProcess.map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-blue-600">{process.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{process.title}</h3>
                <p className="text-gray-600">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-green-600 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Ready to Inspect Your Vehicle?
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-4xl mx-auto leading-relaxed">
              Book your professional vehicle inspection today and make an informed decision. 
              Our certified inspectors will give you complete peace of mind.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="btn-primary px-10 py-4 text-lg font-bold hover:scale-105 shadow-xl">
                Book Inspection Now
              </button>
              <button className="btn-outline px-10 py-4 text-lg font-bold hover:scale-105 shadow-xl">
                Call +254-700-000-000
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
