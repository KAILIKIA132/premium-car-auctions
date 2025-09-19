import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Search, Gavel, CreditCard, Car } from 'lucide-react'

const steps = [
  {
    step: '01',
    title: 'Browse & Search',
    description: 'Explore our extensive collection of premium vehicles. Use our advanced filters to find exactly what you\'re looking for.',
    icon: Search,
    color: 'from-blue-500 to-blue-600'
  },
  {
    step: '02',
    title: 'Place Your Bid',
    description: 'Register for free and start bidding on your favorite vehicles. Set your maximum bid and let our system bid for you.',
    icon: Gavel,
    color: 'from-green-500 to-green-600'
  },
  {
    step: '03',
    title: 'Secure Payment',
    description: 'Win the auction? Complete your purchase with our secure payment system. We accept all major credit cards and bank transfers.',
    icon: CreditCard,
    color: 'from-purple-500 to-purple-600'
  },
  {
    step: '04',
    title: 'Get Your Car',
    description: 'We handle all the paperwork and logistics. Your new vehicle will be delivered to your doorstep or picked up at our facility.',
    icon: Car,
    color: 'from-orange-500 to-orange-600'
  }
]

export function HowItWorks() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Getting started with our premium car auction platform is simple and secure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-gray-300 to-gray-200 transform translate-x-8 -translate-y-8 z-0"></div>
              )}
              
              <Card className="relative z-10 group hover:shadow-xl transition-all duration-300 h-full">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-2">
                    {step.step}
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 text-center">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Bidding?
            </h3>
            <p className="text-gray-600 mb-6">
              Join thousands of satisfied customers who have found their dream cars through our platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Get Started Free
              </button>
              <button className="border border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
