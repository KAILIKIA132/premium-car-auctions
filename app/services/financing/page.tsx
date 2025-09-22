'use client'

import { CreditCard, Shield, Clock, CheckCircle, Percent, DollarSign, Star } from 'lucide-react'

const financingFeatures = [
  {
    icon: CreditCard,
    title: 'Flexible Payment Plans',
    description: 'Choose from various payment terms that fit your budget and financial situation.'
  },
  {
    icon: Shield,
    title: 'Competitive Rates',
    description: 'Get the best interest rates in the market with our partner financial institutions.'
  },
  {
    icon: Clock,
    title: 'Quick Approval',
    description: 'Fast loan processing with approval in as little as 24 hours for qualified buyers.'
  },
  {
    icon: CheckCircle,
    title: 'No Hidden Fees',
    description: 'Transparent pricing with no surprise charges or hidden costs.'
  }
]

const loanTypes = [
  {
    name: 'Personal Loan',
    rate: '12.5%',
    term: '12-60 months',
    features: [
      'Up to KSh 5,000,000',
      'No collateral required',
      'Quick approval',
      'Flexible terms',
      'Competitive rates'
    ]
  },
  {
    name: 'Auto Loan',
    rate: '9.9%',
    term: '12-84 months',
    features: [
      'Up to KSh 15,000,000',
      'Vehicle as collateral',
      'Lower interest rates',
      'Longer terms available',
      'Pre-approval available'
    ],
    popular: true
  },
  {
    name: 'Luxury Vehicle Loan',
    rate: '8.5%',
    term: '12-120 months',
    features: [
      'Up to KSh 50,000,000',
      'Specialized for luxury cars',
      'Best rates available',
      'Extended terms',
      'VIP service'
    ]
  }
]

const applicationProcess = [
  {
    step: 1,
    title: 'Apply Online',
    description: 'Fill out our simple online application form'
  },
  {
    step: 2,
    title: 'Document Review',
    description: 'We review your documents and financial information'
  },
  {
    step: 3,
    title: 'Credit Check',
    description: 'Quick credit assessment and approval decision'
  },
  {
    step: 4,
    title: 'Loan Disbursement',
    description: 'Receive your approved loan amount'
  }
]

const requirements = [
  'Valid Kenyan ID or Passport',
  'Proof of income (3 months payslips)',
  'Bank statements (6 months)',
  'Vehicle registration documents',
  'Insurance certificate'
]

export default function FinancingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Vehicle
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Financing Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              Get the financing you need to purchase your dream car. 
              Competitive rates, flexible terms, and quick approval.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary px-8 py-4 text-lg font-semibold flex items-center justify-center">
                <CreditCard className="h-5 w-5 mr-2" />
                Apply Now
              </button>
              <button className="btn-outline px-8 py-4 text-lg font-semibold flex items-center justify-center">
                <Percent className="h-5 w-5 mr-2" />
                Check Rates
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
              Why Choose Our Financing?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible, affordable, and reliable financing solutions for your vehicle purchase
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {financingFeatures.map((feature, index) => (
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

      {/* Loan Types Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Loan Options
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the financing option that best fits your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {loanTypes.map((loan, index) => (
              <div key={index} className={`relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${loan.popular ? 'border-4 border-blue-500' : 'border-2 border-gray-200'}`}>
                {loan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{loan.name}</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-2">{loan.rate}</div>
                  <div className="text-gray-600">APR • {loan.term}</div>
                </div>
                <ul className="space-y-4 mb-8">
                  {loan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  loan.popular 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}>
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How to Apply
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple steps to get your vehicle financing approved
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {applicationProcess.map((process, index) => (
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

      {/* Requirements Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Required Documents
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Gather these documents to speed up your application process
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <ul className="space-y-4">
                {requirements.map((requirement, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-4 flex-shrink-0" />
                    <span className="text-lg text-gray-700">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-green-600 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Ready to Finance Your Dream Car?
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-4xl mx-auto leading-relaxed">
              Apply for vehicle financing today and get approved in 24 hours. 
              Competitive rates, flexible terms, and no hidden fees.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="btn-primary px-10 py-4 text-lg font-bold hover:scale-105 shadow-xl">
                Apply for Financing
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
