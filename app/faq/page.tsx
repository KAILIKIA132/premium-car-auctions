'use client'

import { useState } from 'react'
import { 
  ChevronDown, 
  ChevronUp, 
  Search, 
  HelpCircle, 
  Shield, 
  CreditCard, 
  Truck, 
  Users,
  Phone,
  Mail,
  MessageCircle
} from 'lucide-react'

const faqCategories = [
  { id: 'general', name: 'General', icon: HelpCircle },
  { id: 'bidding', name: 'Bidding', icon: Users },
  { id: 'payment', name: 'Payment', icon: CreditCard },
  { id: 'shipping', name: 'Shipping', icon: Truck },
  { id: 'selling', name: 'Selling', icon: Shield }
]

const faqs = {
  general: [
    {
      question: 'What is Premium Auctions?',
      answer: 'Premium Auctions is a world-class online platform for buying and selling luxury and premium vehicles. We provide a secure, transparent marketplace with professional authentication and global reach.'
    },
    {
      question: 'How do I create an account?',
      answer: 'Creating an account is free and takes just a few minutes. Click "Sign Up" in the top right corner, fill in your details, verify your email, and you\'re ready to start bidding or selling.'
    },
    {
      question: 'Is it free to use the platform?',
      answer: 'Yes, creating an account and browsing auctions is completely free. We only charge fees when you successfully buy or sell a vehicle through our platform.'
    },
    {
      question: 'How do I contact customer support?',
      answer: 'You can reach our support team 24/7 through live chat, email at support@premiumauctions.com, or phone at +254 700 123 456. We also have a comprehensive help center with detailed guides.'
    },
    {
      question: 'What makes you different from other auction sites?',
      answer: 'We focus exclusively on premium and luxury vehicles, provide comprehensive authentication, offer nationwide delivery across Kenya, and maintain the highest security standards. Our platform is designed specifically for serious car enthusiasts and collectors in Kenya.'
    }
  ],
  bidding: [
    {
      question: 'How do I place a bid?',
      answer: 'Simply find the vehicle you want, click "Place Bid", enter your maximum bid amount, and confirm. Our system will automatically bid for you up to your maximum, ensuring you get the best possible price.'
    },
    {
      question: 'What is proxy bidding?',
      answer: 'Proxy bidding allows you to set your maximum bid amount, and our system will automatically bid on your behalf up to that amount. This ensures you don\'t miss out on auctions while you\'re away.'
    },
    {
      question: 'Can I retract a bid?',
      answer: 'Bids are generally final, but you can retract a bid within 1 hour of placing it if you made an error. Contact our support team immediately if you need to retract a bid.'
    },
    {
      question: 'What happens if I win an auction?',
      answer: 'Congratulations! You\'ll receive an email notification and have 24 hours to complete payment. Once payment is confirmed, we\'ll arrange shipping and delivery of your new vehicle.'
    },
    {
      question: 'How do I know if I\'m winning?',
      answer: 'You\'ll receive real-time notifications when you\'re outbid, and you can check your bid status anytime in your dashboard. We also send email updates for important auction events.'
    }
  ],
  payment: [
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, MasterCard, American Express), bank transfers, wire transfers, and cryptocurrency. All payments are processed securely through our escrow system.'
    },
    {
      question: 'Is my payment information secure?',
      answer: 'Absolutely. We use bank-level encryption and never store your payment information. All transactions are processed through secure, PCI-compliant payment processors.'
    },
    {
      question: 'When do I pay for my purchase?',
      answer: 'Payment is due within 24 hours of winning an auction. We hold your payment in escrow until you receive and approve your vehicle, ensuring complete protection for both parties.'
    },
    {
      question: 'What fees do you charge?',
      answer: 'Buyers pay a 5% buyer\'s premium on the final bid price. Sellers pay a 3% commission on the final sale price. All fees are clearly displayed before you bid or list a vehicle.'
    },
    {
      question: 'Do you offer payment plans?',
      answer: 'We don\'t offer payment plans directly, but many buyers use third-party financing. We can provide documentation to help you secure financing from your preferred lender.'
    }
  ],
  shipping: [
    {
      question: 'Do you deliver nationwide?',
      answer: 'Yes, we deliver vehicles nationwide across Kenya through our network of trusted logistics partners. Delivery costs are calculated at checkout and include insurance and tracking.'
    },
    {
      question: 'How long does delivery take?',
      answer: 'Delivery within Nairobi typically takes 1-2 business days, while delivery to other counties takes 3-7 business days depending on the destination. You\'ll receive tracking information once your vehicle ships.'
    },
    {
      question: 'How much does delivery cost?',
      answer: 'Delivery costs vary based on distance, vehicle size, and destination. Costs are calculated at checkout and typically range from KSh 5,000-KSh 20,000 for delivery within Nairobi and KSh 10,000-KSh 50,000 for delivery to other counties.'
    },
    {
      question: 'What if my vehicle is damaged during delivery?',
      answer: 'All vehicles are fully insured during delivery. If damage occurs, we\'ll work with you and the delivery company to resolve the issue, including repairs or replacement if necessary.'
    },
    {
      question: 'Can I arrange my own delivery?',
      answer: 'Yes, you can arrange your own delivery if you prefer. However, we recommend using our trusted partners as they\'re experienced with luxury vehicles and provide full insurance coverage.'
    }
  ],
  selling: [
    {
      question: 'How do I list my car for auction?',
      answer: 'Create a seller account, upload high-quality photos and detailed information about your vehicle, set your reserve price, and our team will verify your vehicle before listing it for auction.'
    },
    {
      question: 'What is a reserve price?',
      answer: 'A reserve price is the minimum amount you\'re willing to accept for your vehicle. If bidding doesn\'t reach your reserve, the vehicle won\'t sell. You can set a reserve or choose to sell with no reserve.'
    },
    {
      question: 'How do you authenticate vehicles?',
      answer: 'Every vehicle undergoes a comprehensive 150-point inspection by certified automotive experts. This includes mechanical inspection, history verification, and condition assessment.'
    },
    {
      question: 'When do I get paid?',
      answer: 'You\'ll receive payment within 3-5 business days after the buyer completes their inspection period and confirms they\'re satisfied with the vehicle.'
    },
    {
      question: 'What if my car doesn\'t sell?',
      answer: 'If your vehicle doesn\'t meet the reserve price, you can relist it with a lower reserve, try a different auction time, or work with our team to adjust your listing strategy.'
    }
  ]
}

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('general')
  const [searchQuery, setSearchQuery] = useState('')
  const [expandedItems, setExpandedItems] = useState<number[]>([])

  const toggleExpanded = (index: number) => {
    setExpandedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  const filteredFaqs = faqs[activeCategory as keyof typeof faqs].filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Find answers to common questions about our platform, bidding process, and services
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Categories Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
              <div className="space-y-2">
                {faqCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`w-full flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      activeCategory === category.id
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <category.icon className="h-4 w-4 mr-3" />
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* FAQ Content */}
          <div className="lg:col-span-3">
            {/* Search */}
            <div className="mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search FAQs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {filteredFaqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm">
                  <button
                    onClick={() => toggleExpanded(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    {expandedItems.includes(index) ? (
                      <ChevronUp className="h-5 w-5 text-gray-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                    )}
                  </button>
                  {expandedItems.includes(index) && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* No Results */}
            {filteredFaqs.length === 0 && (
              <div className="text-center py-12">
                <HelpCircle className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your search terms or browse different categories</p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Clear Search
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Contact Support */}
        <section className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Our support team is here to help you 24/7. Get in touch with us through any of these channels.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center justify-center">
              <Phone className="h-6 w-6 mr-3" />
              <div>
                <div className="font-semibold">Phone</div>
                <div className="text-sm text-blue-100">+1 (555) 123-4567</div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Mail className="h-6 w-6 mr-3" />
              <div>
                <div className="font-semibold">Email</div>
                <div className="text-sm text-blue-100">support@premiumauctions.com</div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <MessageCircle className="h-6 w-6 mr-3" />
              <div>
                <div className="font-semibold">Live Chat</div>
                <div className="text-sm text-blue-100">Available 24/7</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Contact Support
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Browse Auctions
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}
