import { Car, Users, Award, Globe } from 'lucide-react'

export function Stats() {
  const stats = [
    {
      icon: Car,
      value: '2,500+',
      label: 'Cars Auctioned',
      description: 'Premium vehicles sold through our platform'
    },
    {
      icon: Users,
      value: '15,000+',
      label: 'Active Bidders',
      description: 'Registered users from around the world'
    },
    {
      icon: Award,
      value: '98%',
      label: 'Satisfaction Rate',
      description: 'Customer satisfaction and successful transactions'
    },
    {
      icon: Globe,
      value: '50+',
      label: 'Countries',
      description: 'Global reach with international shipping'
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Thousands Worldwide
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our platform has facilitated millions in transactions with buyers and sellers from around the globe
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
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
  )
}
