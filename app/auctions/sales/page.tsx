'use client'

import { useState } from 'react'
import { Search, Calendar, MapPin, Clock, ChevronUp, ChevronDown, Filter } from 'lucide-react'

const auctionData = [
  {
    id: 1,
    saleTime: '02:00 PM CDT',
    saleName: 'CA - Los Angeles',
    region: 'Copart US',
    saleType: '',
    saleHighlights: '',
    currentSale: 'Sep 22, 2025',
    nextSale: 'Sep 29, 2025',
    futureSale: 'Future Sale'
  },
  {
    id: 2,
    saleTime: '09:00 AM CDT',
    saleName: 'VA - Richmond East',
    region: 'Copart US',
    saleType: '',
    saleHighlights: '',
    currentSale: 'Sep 22, 2025',
    nextSale: 'Sep 29, 2025',
    futureSale: 'Future Sale'
  },
  {
    id: 3,
    saleTime: '09:00 AM CDT',
    saleName: 'MD - Baltimore',
    region: 'Copart US',
    saleType: '',
    saleHighlights: '',
    currentSale: 'Sep 22, 2025',
    nextSale: 'Sep 29, 2025',
    futureSale: 'Future Sale'
  },
  {
    id: 4,
    saleTime: '09:00 AM CDT',
    saleName: 'FL - Miami Central',
    region: 'Copart US',
    saleType: '',
    saleHighlights: '',
    currentSale: 'Sep 22, 2025',
    nextSale: 'Sep 29, 2025',
    futureSale: 'Future Sale'
  },
  {
    id: 5,
    saleTime: '09:00 AM CDT',
    saleName: 'GA - Atlanta East',
    region: 'Copart US',
    saleType: '',
    saleHighlights: '',
    currentSale: 'Sep 22, 2025',
    nextSale: 'Oct 8, 2025',
    futureSale: 'Future Sale'
  },
  {
    id: 6,
    saleTime: '05:00 PM CDT',
    saleName: 'HI - Honolulu',
    region: 'Copart US',
    saleType: '',
    saleHighlights: '',
    currentSale: 'Sep 22, 2025',
    nextSale: 'Sep 29, 2025',
    futureSale: 'Future Sale'
  },
  {
    id: 7,
    saleTime: '09:00 AM CDT',
    saleName: 'OH - Cleveland West',
    region: 'Copart US',
    saleType: '',
    saleHighlights: '',
    currentSale: 'Sep 22, 2025',
    nextSale: 'Sep 29, 2025',
    futureSale: 'Future Sale'
  },
  {
    id: 8,
    saleTime: '09:00 AM CDT',
    saleName: 'KY - Lexington East',
    region: 'Copart US',
    saleType: '',
    saleHighlights: '',
    currentSale: 'Sep 22, 2025',
    nextSale: 'Sep 29, 2025',
    futureSale: 'Future Sale'
  }
]

export default function AuctionSalesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [sortField, setSortField] = useState('saleTime')
  const [sortDirection, setSortDirection] = useState('asc')

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setSortField(field)
      setSortDirection('asc')
    }
  }

  const filteredData = auctionData.filter(auction =>
    auction.saleName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    auction.region.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Sales List</h1>
              <p className="text-gray-600 max-w-3xl">
                Here we provide a comprehensive list of upcoming car auctions. Once you have found an auction 
                that interests you, click on the date to view the vehicles available for bidding.
              </p>
            </div>
            <div className="mt-6 lg:mt-0 lg:ml-8">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <input
                    type="text"
                    placeholder="Search sales..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm">
          {/* Table Header */}
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">Upcoming Auctions</h2>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-500">Showing {filteredData.length} results</span>
                <select className="border border-gray-300 rounded-lg px-3 py-1 text-sm" aria-label="Results per page">
                  <option>25 per page</option>
                  <option>50 per page</option>
                  <option>100 per page</option>
                </select>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th 
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                    onClick={() => handleSort('saleTime')}
                  >
                    <div className="flex items-center">
                      Sale Time
                      {sortField === 'saleTime' ? (
                        sortDirection === 'asc' ? <ChevronUp className="ml-1 h-4 w-4" /> : <ChevronDown className="ml-1 h-4 w-4" />
                      ) : (
                        <div className="ml-1 h-4 w-4" />
                      )}
                    </div>
                  </th>
                  <th 
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                    onClick={() => handleSort('saleName')}
                  >
                    <div className="flex items-center">
                      Sale Name
                      {sortField === 'saleName' ? (
                        sortDirection === 'asc' ? <ChevronUp className="ml-1 h-4 w-4" /> : <ChevronDown className="ml-1 h-4 w-4" />
                      ) : (
                        <div className="ml-1 h-4 w-4" />
                      )}
                    </div>
                  </th>
                  <th 
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                    onClick={() => handleSort('region')}
                  >
                    <div className="flex items-center">
                      Region
                      {sortField === 'region' ? (
                        sortDirection === 'asc' ? <ChevronUp className="ml-1 h-4 w-4" /> : <ChevronDown className="ml-1 h-4 w-4" />
                      ) : (
                        <div className="ml-1 h-4 w-4" />
                      )}
                    </div>
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Sale Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Sale Highlights
                  </th>
                  <th 
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                    onClick={() => handleSort('currentSale')}
                  >
                    <div className="flex items-center">
                      Current Sale
                      {sortField === 'currentSale' ? (
                        sortDirection === 'asc' ? <ChevronUp className="ml-1 h-4 w-4" /> : <ChevronDown className="ml-1 h-4 w-4" />
                      ) : (
                        <div className="ml-1 h-4 w-4" />
                      )}
                    </div>
                  </th>
                  <th 
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                    onClick={() => handleSort('nextSale')}
                  >
                    <div className="flex items-center">
                      Next Sale
                      {sortField === 'nextSale' ? (
                        sortDirection === 'asc' ? <ChevronUp className="ml-1 h-4 w-4" /> : <ChevronDown className="ml-1 h-4 w-4" />
                      ) : (
                        <div className="ml-1 h-4 w-4" />
                      )}
                    </div>
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Future Sale
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredData.map((auction) => (
                  <tr key={auction.id} className="hover:bg-gray-50 cursor-pointer">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-gray-400 mr-2" />
                        {auction.saleTime}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600 hover:text-blue-800">
                      {auction.saleName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {auction.region}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {auction.saleType || '-'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {auction.saleHighlights || '-'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
                        {auction.currentSale}
                      </a>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
                        {auction.nextSale}
                      </a>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {auction.futureSale}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="px-6 py-4 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">
                Showing 1 to {filteredData.length} of {filteredData.length} results
              </div>
              <div className="flex items-center space-x-2">
                <button className="px-3 py-1 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
                  Previous
                </button>
                <button className="px-3 py-1 bg-blue-600 text-white rounded-lg text-sm">
                  1
                </button>
                <button className="px-3 py-1 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
                  2
                </button>
                <button className="px-3 py-1 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
                  3
                </button>
                <button className="px-3 py-1 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Information Section */}
        <div className="mt-8 bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">How to Participate in Auctions</h3>
          <p className="text-gray-700 mb-4">
            Look through the sales listed on this page to find out when car auctions are set to end. 
            Sales are listed by time (including time zone), facility and date. You can click on a 
            column heading to sort the list by date. Click on a specific date to view relevant 
            vehicle listings and find out more about the salvage cars for sale that are up for auction.
          </p>
          <p className="text-gray-700">
            To participate in these auctions, <a href="/auth/signup" className="text-blue-600 hover:text-blue-800 font-medium">register</a> to gain access to our platform 
            and bid on salvage cars without needing a dealer license.
          </p>
        </div>
      </div>
    </div>
  )
}
