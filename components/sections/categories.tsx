import { Card, CardContent } from '@/components/ui/card'
import { Car, Zap, Crown, Truck, Wrench, Star } from 'lucide-react'
import Link from 'next/link'

const categories = [
  {
    name: 'Luxury Cars',
    icon: Crown,
    description: 'High-end luxury vehicles from premium brands',
    count: '150+',
    color: 'from-yellow-400 to-orange-500',
    href: '/cars/luxury'
  },
  {
    name: 'Sports Cars',
    icon: Zap,
    description: 'High-performance sports and supercars',
    count: '200+',
    color: 'from-red-400 to-pink-500',
    href: '/cars/sports'
  },
  {
    name: 'Classic Cars',
    icon: Star,
    description: 'Vintage and classic automobiles',
    count: '80+',
    color: 'from-purple-400 to-indigo-500',
    href: '/cars/classic'
  },
  {
    name: 'SUVs & Trucks',
    icon: Truck,
    description: 'Utility vehicles and off-road machines',
    count: '120+',
    color: 'from-green-400 to-teal-500',
    href: '/cars/suv'
  },
  {
    name: 'Salvage Vehicles',
    icon: Wrench,
    description: 'Damaged vehicles for restoration',
    count: '300+',
    color: 'from-gray-400 to-slate-500',
    href: '/cars/salvage'
  },
  {
    name: 'All Vehicles',
    icon: Car,
    description: 'Browse our complete inventory',
    count: '850+',
    color: 'from-blue-400 to-cyan-500',
    href: '/cars'
  }
]

export function Categories() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Browse by Category
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find exactly what you're looking for in our carefully curated categories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Link key={index} href={category.href}>
              <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer h-full">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {category.description}
                    </p>
                    <div className="text-sm font-medium text-primary">
                      {category.count} vehicles
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
