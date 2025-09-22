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
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              We're revolutionizing the luxury car auction industry with cutting-edge technology, 
              global reach, and uncompromising quality standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors">
                Start Bidding Now
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by thousands of car enthusiasts across Kenya and beyond
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-4 border-2 border-transparent group-hover:border-blue-200">
                  <div className="bg-gradient-to-br from-blue-600 to-green-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {stat.value}
                  </h3>
                  <p className="text-xl font-bold text-gray-800 mb-3">
                    {stat.label}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                OUR MISSION
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                Revolutionizing Luxury Car Auctions
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                To create the world's most trusted and innovative platform for luxury car auctions, 
                connecting passionate collectors and enthusiasts with exceptional vehicles from around the globe.
              </p>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                We believe that every car has a story, and every story deserves to be told. Our platform 
                ensures that these stories continue with new owners who will cherish and preserve these 
                automotive masterpieces.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-center bg-white rounded-lg p-4 shadow-sm">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">Authenticated Vehicles</span>
                </div>
                <div className="flex items-center bg-white rounded-lg p-4 shadow-sm">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">Secure Transactions</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&h=600&fit=crop"
                  alt="Luxury car auction"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-2xl p-6 border-4 border-green-200">
                <div className="flex items-center">
                  <div className="bg-yellow-100 rounded-full p-3 mr-4">
                    <Star className="h-6 w-6 text-yellow-500 fill-current" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">4.9/5</p>
                    <p className="text-sm text-gray-600 font-medium">Customer Rating</p>
                    <p className="text-xs text-gray-500">Based on 2,500+ reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              OUR VALUES
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Drives Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The core principles that guide every decision and action we take
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-transparent group-hover:border-blue-200 group-hover:-translate-y-2">
                  <div className="flex items-start">
                    <div className="bg-gradient-to-br from-blue-600 to-green-600 rounded-2xl p-4 mr-6 group-hover:scale-110 transition-transform duration-300">
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              OUR TEAM
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet the Experts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate professionals driving innovation in luxury car auctions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-4 border-2 border-transparent group-hover:border-green-200">
                  <div className="relative mb-6">
                    <div className="w-32 h-32 rounded-full mx-auto overflow-hidden border-4 border-green-200 group-hover:border-green-400 transition-colors">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-green-600 font-semibold mb-4 text-lg">
                    {member.role}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              OUR JOURNEY
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Milestones & Growth
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key moments that shaped our company's evolution and success
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-full bg-gradient-to-b from-blue-200 to-green-200 rounded-full"></div>
            <div className="space-y-16">
              {timeline.map((event, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                    <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-blue-200 group">
                      <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white font-bold text-xl mb-4 inline-block px-4 py-2 rounded-full">
                        {event.year}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">{event.title}</h3>
                      <p className="text-gray-600 text-lg leading-relaxed">{event.description}</p>
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center relative z-10 shadow-lg">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
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
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-4xl mx-auto leading-relaxed">
              Join thousands of car enthusiasts who trust Premium Auctions for their luxury vehicle needs. 
              Whether you're buying your dream car or selling a cherished vehicle, we're here to make it happen.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-white text-blue-600 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl">
                Start Bidding Now
              </button>
              <button className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105 shadow-xl">
                List Your Vehicle
              </button>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">2,500+</div>
                <div className="text-blue-100">Cars Sold</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">15,000+</div>
                <div className="text-blue-100">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">98%</div>
                <div className="text-blue-100">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
