'use client'

import { useState } from 'react'
import { CheckCircle, XCircle, AlertTriangle, Camera, FileText, Shield, Clock, MapPin } from 'lucide-react'

interface VehicleInspectionProps {
  vehicle: {
    id: string
    make: string
    model: string
    year: number
    vin: string
    mileage: number
    condition: string
    location: string
    inspectionDate: string
    inspector: string
    inspectionReport: {
      exterior: {
        paint: string
        body: string
        glass: string
        lights: string
        tires: string
        overall: string
      }
      interior: {
        seats: string
        dashboard: string
        electronics: string
        airConditioning: string
        overall: string
      }
      mechanical: {
        engine: string
        transmission: string
        brakes: string
        suspension: string
        electrical: string
        overall: string
      }
      documentation: {
        title: string
        serviceHistory: string
        accidentHistory: string
        recalls: string
        overall: string
      }
    }
    photos: {
      exterior: string[]
      interior: string[]
      engine: string[]
      undercarriage: string[]
      documents: string[]
    }
    issues: {
      critical: string[]
      major: string[]
      minor: string[]
    }
    recommendations: string[]
  }
}

export function VehicleInspection({ vehicle }: VehicleInspectionProps) {
  const [activeTab, setActiveTab] = useState('overview')
  const [selectedPhoto, setSelectedPhoto] = useState(0)

  const getConditionIcon = (condition: string) => {
    switch (condition.toLowerCase()) {
      case 'excellent':
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case 'good':
        return <CheckCircle className="h-5 w-5 text-blue-500" />
      case 'fair':
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />
      case 'poor':
        return <XCircle className="h-5 w-5 text-red-500" />
      default:
        return <AlertTriangle className="h-5 w-5 text-gray-500" />
    }
  }

  const getConditionColor = (condition: string) => {
    switch (condition.toLowerCase()) {
      case 'excellent':
        return 'text-green-600 bg-green-100'
      case 'good':
        return 'text-blue-600 bg-blue-100'
      case 'fair':
        return 'text-yellow-600 bg-yellow-100'
      case 'poor':
        return 'text-red-600 bg-red-100'
      default:
        return 'text-gray-600 bg-gray-100'
    }
  }

  const tabs = [
    { id: 'overview', label: 'Overview', icon: FileText },
    { id: 'exterior', label: 'Exterior', icon: Camera },
    { id: 'interior', label: 'Interior', icon: Camera },
    { id: 'mechanical', label: 'Mechanical', icon: Shield },
    { id: 'documentation', label: 'Documentation', icon: FileText },
    { id: 'photos', label: 'Photos', icon: Camera }
  ]

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Vehicle Inspection Report
            </h3>
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                {vehicle.location}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {vehicle.inspectionDate}
              </div>
              <div className="flex items-center">
                <Shield className="h-4 w-4 mr-1" />
                Inspector: {vehicle.inspector}
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-500 mb-1">Overall Condition</div>
            <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getConditionColor(vehicle.condition)}`}>
              {getConditionIcon(vehicle.condition)}
              <span className="ml-1">{vehicle.condition}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8 px-6">
          {tabs.map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <Icon className="h-4 w-4 mr-2" />
                {tab.label}
              </button>
            )
          })}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="p-6">
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Vehicle Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Vehicle Details</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">VIN:</span>
                    <span className="font-mono">{vehicle.vin}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Mileage:</span>
                    <span>{vehicle.mileage.toLocaleString()} miles</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Year:</span>
                    <span>{vehicle.year}</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Inspection Summary</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Exterior:</span>
                    <span className={getConditionColor(vehicle.inspectionReport.exterior.overall)}>
                      {vehicle.inspectionReport.exterior.overall}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Interior:</span>
                    <span className={getConditionColor(vehicle.inspectionReport.interior.overall)}>
                      {vehicle.inspectionReport.interior.overall}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Mechanical:</span>
                    <span className={getConditionColor(vehicle.inspectionReport.mechanical.overall)}>
                      {vehicle.inspectionReport.mechanical.overall}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Issues Found</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-red-600">Critical:</span>
                    <span className="font-semibold">{vehicle.issues.critical.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-yellow-600">Major:</span>
                    <span className="font-semibold">{vehicle.issues.major.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-600">Minor:</span>
                    <span className="font-semibold">{vehicle.issues.minor.length}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Critical Issues */}
            {vehicle.issues.critical.length > 0 && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h4 className="font-semibold text-red-900 mb-2 flex items-center">
                  <XCircle className="h-5 w-5 mr-2" />
                  Critical Issues
                </h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-red-800">
                  {vehicle.issues.critical.map((issue, index) => (
                    <li key={index}>{issue}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Recommendations */}
            {vehicle.recommendations.length > 0 && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 mb-2 flex items-center">
                  <Shield className="h-5 w-5 mr-2" />
                  Recommendations
                </h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-blue-800">
                  {vehicle.recommendations.map((recommendation, index) => (
                    <li key={index}>{recommendation}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {activeTab === 'exterior' && (
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-gray-900">Exterior Inspection</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(vehicle.inspectionReport.exterior).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <span className="font-medium text-gray-700 capitalize">{key}</span>
                  <div className="flex items-center">
                    {getConditionIcon(value)}
                    <span className={`ml-2 px-2 py-1 rounded text-sm font-medium ${getConditionColor(value)}`}>
                      {value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'interior' && (
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-gray-900">Interior Inspection</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(vehicle.inspectionReport.interior).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <span className="font-medium text-gray-700 capitalize">{key}</span>
                  <div className="flex items-center">
                    {getConditionIcon(value)}
                    <span className={`ml-2 px-2 py-1 rounded text-sm font-medium ${getConditionColor(value)}`}>
                      {value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'mechanical' && (
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-gray-900">Mechanical Inspection</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(vehicle.inspectionReport.mechanical).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <span className="font-medium text-gray-700 capitalize">{key}</span>
                  <div className="flex items-center">
                    {getConditionIcon(value)}
                    <span className={`ml-2 px-2 py-1 rounded text-sm font-medium ${getConditionColor(value)}`}>
                      {value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'documentation' && (
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-gray-900">Documentation</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(vehicle.inspectionReport.documentation).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <span className="font-medium text-gray-700 capitalize">{key}</span>
                  <div className="flex items-center">
                    {getConditionIcon(value)}
                    <span className={`ml-2 px-2 py-1 rounded text-sm font-medium ${getConditionColor(value)}`}>
                      {value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'photos' && (
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-gray-900">Inspection Photos</h4>
            {Object.entries(vehicle.photos).map(([category, photos]) => (
              <div key={category} className="space-y-4">
                <h5 className="font-medium text-gray-700 capitalize">{category} Photos</h5>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {photos.map((photo, index) => (
                    <div
                      key={index}
                      className="relative aspect-square rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                      onClick={() => setSelectedPhoto(index)}
                    >
                      <img
                        src={photo}
                        alt={`${category} photo ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

