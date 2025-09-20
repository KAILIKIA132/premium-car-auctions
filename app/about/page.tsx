import { Car, Shield, Globe, Award, Users, Clock, CheckCircle, Star, TrendingUp, Heart } from 'lucide-react'

const stats = [
  { icon: Car, value: '2,500+', label: 'Cars Sold', description: 'Premium vehicles auctioned successfully' },
  { icon: Users, value: '15,000+', label: 'Active Users', description: 'Registered buyers and sellers across Kenya' },
  { icon: Globe, value: '47', label: 'Counties', description: 'Serving all counties across Kenya' },
  { icon: Award, value: '98%', label: 'Satisfaction', description: 'Customer satisfaction rate' }
]

const team = [
  {
    name: 'Aisha Mwangi',
    role: 'CEO & Founder',
    image: '/images/team/aisha-mwangi.jpg',
    bio: 'Former luxury car dealer with 15+ years experience in automotive industry across East Africa.'
  },
  {
    name: 'Kwame Ochieng',
    role: 'CTO',
    image: '/images/team/kwame-ochieng.jpg',
    bio: 'Technology leader specializing in e-commerce and auction platforms with expertise in fintech solutions.'
  },
  {
    name: 'Grace Akinyi',
    role: 'Head of Operations',
    image: '/images/team/grace-akinyi.jpg',
    bio: 'Operations expert ensuring smooth transactions and customer satisfaction across Kenya and beyond.'
  },
  {
    name: 'James Mutua',
    role: 'Head of Authentication',
    image: '/images/team/james-mutua.jpg',
    bio: 'Automotive expert ensuring vehicle authenticity and quality standards with 20+ years in the industry.'
  }
]

const values = [
  {
    icon: Shield,
    title: 'Trust & Security',
    description: 'Every transaction is protected by our secure escrow system and comprehensive authentication process.'
  },
  {
    icon: Globe,
    title: 'Nationwide Reach',
    description: 'Connect with buyers and sellers across Kenya with our nationwide delivery network.'
  },
  {
    icon: Award,
    title: 'Quality Assurance',
    description: 'Every vehicle undergoes rigorous inspection and authentication before being listed on our platform.'
  },
  {
    icon: Heart,
    title: 'Customer First',
    description: 'We prioritize our customers\' success and satisfaction in every interaction and transaction.'
  }
]

const timeline = [
  {
    year: '2018',
    title: 'Company Founded',
    description: 'Premium Auctions was founded with a vision to revolutionize the luxury car auction industry.'
  },
  {
    year: '2019',
    title: 'Platform Launch',
    description: 'Launched our first online auction platform with 100 premium vehicles.'
  },
  {
    year: '2020',
    title: 'Global Expansion',
    description: 'Expanded to 20 countries with international shipping and payment processing.'
  },
  {
    year: '2021',
    title: 'Mobile App Launch',
    description: 'Released mobile applications for iOS and Android with real-time bidding features.'
  },
  {
    year: '2022',
    title: 'AI Integration',
    description: 'Integrated AI-powered vehicle authentication and market analysis tools.'
  },
  {
    year: '2023',
    title: 'Blockchain Security',
    description: 'Implemented blockchain technology for enhanced security and transparency.'
  },
  {
    year: '2024',
    title: 'Future Vision',
    description: 'Continuing to innovate with VR showrooms and advanced auction technologies.'
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About Premium Auctions
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              We're revolutionizing the luxury car auction industry with cutting-edge technology, 
              global reach, and uncompromising quality standards.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Numbers that speak to our success and commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                    <stat.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {stat.value}
                  </h3>
                  <p className="text-lg font-semibold text-gray-700 mb-2">
                    {stat.label}
                  </p>
                  <p className="text-sm text-gray-500">
                    {stat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                To create the world's most trusted and innovative platform for luxury car auctions, 
                connecting passionate collectors and enthusiasts with exceptional vehicles from around the globe.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We believe that every car has a story, and every story deserves to be told. Our platform 
                ensures that these stories continue with new owners who will cherish and preserve these 
                automotive masterpieces.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-700">Authenticated Vehicles</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-700">Secure Transactions</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&h=600&fit=crop"
                alt="Luxury car auction"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-4">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 fill-current mr-2" />
                  <div>
                    <p className="text-sm font-semibold text-gray-900">4.9/5 Rating</p>
                    <p className="text-xs text-gray-500">Customer Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-lg p-3 mr-4">
                    <value.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The passionate professionals behind Premium Auctions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 rounded-full bg-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-gray-600">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Key milestones in our company's growth and innovation
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
            <div className="space-y-12">
              {timeline.map((event, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                      <div className="text-blue-600 font-bold text-lg mb-2">{event.year}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                      <p className="text-gray-600">{event.description}</p>
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center relative z-10">
                    <Clock className="h-4 w-4 text-white" />
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Whether you're looking to buy your dream car or sell a cherished vehicle, 
            we're here to make it happen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Bidding
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              List Your Car
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
