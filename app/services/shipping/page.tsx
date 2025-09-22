'use client'

import { Truck, Shield, Clock, MapPin, Phone, CheckCircle, Star } from 'lucide-react'

const shippingFeatures = [
  {
    icon: Truck,
    title: 'Nationwide Delivery',
    description: 'We deliver to all 47 counties across Kenya with our professional logistics network.'
  },
  {
    icon: Shield,
    title: 'Fully Insured',
    description: 'All vehicles are fully insured during transit with comprehensive coverage.'
  },
  {
    icon: Clock,
    title: 'Fast Delivery',
    description: 'Most deliveries completed within 3-7 business days depending on location.'
  },
  {
    icon: MapPin,
    title: 'Real-time Tracking',
    description: 'Track your vehicle from pickup to delivery with our live tracking system.'
  }
]

const pricingTiers = [
  {
    name: 'Standard Delivery',
    price: 'KSh 15,000',
    duration: '5-7 days',
    features: [
      'Nationwide coverage',
      'Basic insurance',
      'Email updates',
      'Standard handling'
    ]
  },
  {
    name: 'Express Delivery',
    price: 'KSh 25,000',
    duration: '3-5 days',
    features: [
      'Priority handling',
      'Full insurance',
      'SMS & email updates',
      'Real-time tracking',
      'Dedicated support'
    ],
    popular: true
  },
  {
    name: 'Premium Delivery',
    price: 'KSh 40,000',
    duration: '1-3 days',
    features: [
      'White-glove service',
      'Maximum insurance',
      'Live tracking',
      'Personal coordinator',
      'Same-day updates',
      'Guaranteed delivery'
    ]
  }
]

const testimonials = [
  {
    name: 'Michael Kiprop',
    location: 'Nairobi',
    rating: 5,
    text: 'Excellent service! My BMW was delivered safely and on time. The tracking system kept me informed throughout the journey.'
  },
  {
    name: 'Grace Wanjiku',
    location: 'Mombasa',
    rating: 5,
    text: 'Professional team and great communication. My car arrived in perfect condition. Highly recommended!'
  },
  {
    name: 'David Otieno',
    location: 'Kisumu',
    rating: 5,
    text: 'Fast and reliable delivery service. The driver was very careful with my vehicle. Will use again!'
  }
]

export default function ShippingPage() {
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
                Shipping Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              Safe, secure, and reliable vehicle transportation across Kenya. 
              Your dream car delivered right to your doorstep.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary px-8 py-4 text-lg font-semibold flex items-center justify-center">
                <Truck className="h-5 w-5 mr-2" />
                Get Quote Now
              </button>
              <button className="btn-outline px-8 py-4 text-lg font-semibold flex items-center justify-center">
                <Phone className="h-5 w-5 mr-2" />
                Call +254-700-000-000
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
              Why Choose Our Shipping?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide the most reliable and professional vehicle shipping services in Kenya
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {shippingFeatures.map((feature, index) => (
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

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Shipping Options
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the shipping option that best fits your needs and budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${tier.popular ? 'border-4 border-blue-500' : 'border-2 border-gray-200'}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{tier.name}</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-2">{tier.price}</div>
                  <div className="text-gray-600">Delivery in {tier.duration}</div>
                </div>
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  tier.popular 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}>
                  Choose Plan
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
              Simple steps to get your vehicle shipped safely and securely
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Get Quote</h3>
              <p className="text-gray-600">
                Provide vehicle details and delivery location for an instant quote.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Schedule Pickup</h3>
              <p className="text-gray-600">
                Choose your preferred pickup date and time that works for you.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Track Delivery</h3>
              <p className="text-gray-600">
                Monitor your vehicle's journey with real-time tracking updates.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Safe Delivery</h3>
              <p className="text-gray-600">
                Receive your vehicle in perfect condition at your chosen location.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by thousands of car owners across Kenya
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-500">{testimonial.location}</p>
                </div>
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
              Ready to Ship Your Vehicle?
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-4xl mx-auto leading-relaxed">
              Get an instant quote and schedule your vehicle pickup today. 
              Professional, reliable, and fully insured shipping across Kenya.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="btn-primary px-10 py-4 text-lg font-bold hover:scale-105 shadow-xl">
                Get Instant Quote
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
