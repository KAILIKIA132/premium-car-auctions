import { Card, CardContent } from '@/components/ui/card'
import { Star, Quote } from 'lucide-react'
import Image from 'next/image'

const testimonials = [
  {
    name: 'Sarah Johnson',
    location: 'New York, NY',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    text: 'I found my dream Ferrari 488 GTB through this platform. The entire process was seamless, and the car exceeded my expectations. The authentication process gave me complete confidence in my purchase.',
    car: '2019 Ferrari 488 GTB'
  },
  {
    name: 'Michael Chen',
    location: 'Los Angeles, CA',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    text: 'As a classic car collector, I appreciate the quality of vehicles on this platform. The detailed descriptions and professional photography helped me make an informed decision on my 1967 Mustang.',
    car: '1967 Ford Mustang GT'
  },
  {
    name: 'Emma Rodriguez',
    location: 'Miami, FL',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    text: 'The real-time bidding system is fantastic! I was able to participate in auctions from anywhere in the world. The customer support team was incredibly helpful throughout the entire process.',
    car: '2021 Porsche 911 Turbo S'
  },
  {
    name: 'David Thompson',
    location: 'Toronto, ON',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    text: 'I\'ve bought and sold multiple vehicles through this platform. The authentication and escrow services give me complete peace of mind. Highly recommended for serious car enthusiasts.',
    car: '2020 Lamborghini Huracán'
  },
  {
    name: 'Lisa Wang',
    location: 'Vancouver, BC',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    text: 'The platform\'s global reach allowed me to find a rare McLaren 720S that wasn\'t available locally. The shipping and import process was handled professionally.',
    car: '2018 McLaren 720S'
  },
  {
    name: 'James Wilson',
    location: 'London, UK',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    text: 'Outstanding platform for luxury car auctions. The detailed vehicle histories and professional inspections give buyers complete confidence. I\'ve been a customer for over 3 years.',
    car: '2019 Bentley Continental GT'
  }
]

export function Testimonials() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about their experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 h-full">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                    <p className="text-xs text-primary font-medium mt-1">{testimonial.car}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Join Our Community of Satisfied Customers
            </h3>
            <p className="text-gray-600 mb-6">
              Over 15,000 customers trust us with their automotive dreams. 
              Experience the difference of a world-class auction platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Start Bidding Today
              </button>
              <button className="border border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors">
                Read More Reviews
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
