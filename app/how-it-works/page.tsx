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
  Award,
  ArrowRight,
  Play
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
    icon: Shield,
    title: '100% Authentic',
    description: 'Every vehicle is professionally authenticated and verified'
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock customer service and technical support'
  },
  {
    icon: Users,
    title: 'Expert Community',
    description: 'Connect with car enthusiasts and industry professionals'
  },
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'Only the finest vehicles from trusted sellers worldwide'
  }
]

const faqs = [
  {
    question: 'How do I participate in an auction?',
    answer: 'Simply create an account, browse our live auctions, and place your bid. You can also set up automatic bidding to stay competitive without constant monitoring.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, bank transfers, and cryptocurrency. All transactions are processed through our secure escrow system for maximum protection.'
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
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Your journey to owning the perfect car in four simple steps
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center">
                <Play className="h-5 w-5 mr-2" />
                Watch Demo
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Start Bidding
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Premium Auction Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From discovery to delivery, we make car buying simple and secure
            </p>
          </div>

          {/* Step Navigation */}
          <div className="flex flex-wrap justify-center mb-12">
            {steps.map((step, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`flex items-center px-6 py-3 m-2 rounded-lg font-semibold transition-all ${
                  activeStep === index
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-blue-50'
                }`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                  activeStep === index ? 'bg-white text-blue-600' : 'bg-blue-100 text-blue-600'
                }`}>
                  {step.number}
                </div>
                {step.title}
              </button>
            ))}
          </div>

          {/* Active Step Content */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <step.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{steps[activeStep].title}</h3>
                    <p className="text-gray-600">{steps[activeStep].description}</p>
                  </div>
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
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors">
                  <feature.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
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
              Everything you need to know about our auction process
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of satisfied customers who found their dream car through Premium Auctions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center">
              Browse Auctions
              <ArrowRight className="h-5 w-5 ml-2" />
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