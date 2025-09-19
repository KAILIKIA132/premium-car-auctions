'use client'

import { useState } from 'react'
import { 
  Search, 
  Gavel, 
  Shield, 
  Truck, 
  CheckCircle, 
  Clock, 
  Users, 
  Star,
  CreditCard,
  Globe,
  Phone,
  Mail
} from 'lucide-react'

const steps = [
  {
    number: 1,
    title: 'Browse & Discover',
    description: 'Explore our curated collection of premium vehicles from around the world',
    icon: Search,
    details: [
      'Advanced search and filtering options',
      'Detailed vehicle specifications and history',
      'High-quality photos and 360° views',
      'Professional authentication reports'
    ]
  },
  {
    number: 2,
    title: 'Bid or Buy',
    description: 'Participate in live auctions or purchase immediately',
    icon: Gavel,
    details: [
      'Real-time bidding with instant updates',
      'Buy It Now option for immediate purchase',
      'Automatic bid increments and proxy bidding',
      'Auction countdown timers and notifications'
    ]
  },
  {
    number: 3,
    title: 'Secure Payment',
    description: 'Complete your purchase through our secure escrow system',
    icon: Shield,
    details: [
      'Bank-level encryption and security',
      'Escrow protection until delivery',
      'Multiple payment methods accepted',
      'Transparent fee structure'
    ]
  },
  {
    number: 4,
    title: 'Delivery & Inspection',
    description: 'Receive your vehicle with full inspection period',
    icon: Truck,
    details: [
      'Worldwide shipping and logistics',
      '7-day inspection period',
      'Full refund if not satisfied',
      'Professional delivery and setup'
    ]
  }
]

const features = [
  {
    icon: Users,
    title: 'Expert Authentication',
    description: 'Every vehicle undergoes a comprehensive 150-point inspection by certified automotive experts'
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Buy and sell vehicles from anywhere in the world with our international network'
  },
  {
    icon: Shield,
    title: 'Secure Transactions',
    description: 'Your money is protected in escrow until you receive and approve your vehicle'
  },
  {
    icon: Star,
    title: 'Premium Quality',
    description: 'Only the finest vehicles make it to our platform - quality guaranteed'
  }
]

const faqs = [
  {
    question: 'How do I register for an auction?',
    answer: 'Simply create a free account, verify your identity, and you can start bidding immediately. Registration takes just a few minutes and requires basic information and payment method verification.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, bank transfers, wire transfers, and cryptocurrency. All payments are processed securely through our escrow system to protect both buyers and sellers.'
  },
  {
    question: 'How does the authentication process work?',
    answer: 'Every vehicle undergoes a comprehensive 150-point inspection by certified automotive experts. This includes mechanical inspection, history verification, and condition assessment before being listed on our platform.'
  },
  {
    question: 'What if I win an auction but change my mind?',
    answer: 'We offer a 7-day inspection period after delivery. If you\'re not completely satisfied with your purchase, you can return the vehicle for a full refund, no questions asked.'
  },
  {
    question: 'Do you offer international shipping?',
    answer: 'Yes, we ship vehicles worldwide through our network of trusted logistics partners. Shipping costs are calculated at checkout and include insurance and tracking.'
  },
  {
    question: 'How do I list my car for auction?',
    answer: 'Create a seller account, upload photos and details, set your reserve price, and our team will verify your vehicle before listing. We handle all the technical aspects of the auction.'
  }
]

export default function HowItWorksPage() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              How It Works
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Your complete guide to buying and selling premium vehicles through our secure auction platform
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple 4-Step Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From discovery to delivery, we make car buying and selling effortless
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Steps List */}
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className={`cursor-pointer p-6 rounded-lg transition-all duration-300 ${
                    activeStep === index
                      ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                      : 'bg-white hover:shadow-md'
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  <div className="flex items-start">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                      activeStep === index ? 'bg-white text-blue-600' : 'bg-blue-100 text-blue-600'
                    }`}>
                      <step.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-xl font-semibold mb-2 ${
                        activeStep === index ? 'text-white' : 'text-gray-900'
                      }`}>
                        {step.number}. {step.title}
                      </h3>
                      <p className={`${
                        activeStep === index ? 'text-blue-100' : 'text-gray-600'
                      }`}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Step Details */}
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <steps[activeStep].icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {steps[activeStep].title}
                </h3>
                <p className="text-gray-600">
                  {steps[activeStep].description}
                </p>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900 mb-3">What's included:</h4>
                {steps[activeStep].details.map((detail, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Premium Auctions?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide the most secure and professional car auction experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our platform
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Help Getting Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our support team is here to help you every step of the way
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="flex items-center justify-center">
              <Phone className="h-6 w-6 mr-3" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center justify-center">
              <Mail className="h-6 w-6 mr-3" />
              <span>support@premiumauctions.com</span>
            </div>
            <div className="flex items-center justify-center">
              <Clock className="h-6 w-6 mr-3" />
              <span>24/7 Live Chat</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Contact Support
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Start Bidding
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
