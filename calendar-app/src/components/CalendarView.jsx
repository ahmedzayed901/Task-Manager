import { useState, useMemo } from 'react'
import CalendarGrid from './CalendarGrid'

const CalendarView = ({ currentDate, setCurrentDate, selectedView, setSelectedView }) => {
  const [searchTerm, setSearchTerm] = useState('')

  // Sample events data
  const events = [
    {
      id: 1,
      title: 'Morning standup',
      date: '2025-01-06',
      time: '9:00 AM',
      color: 'bg-blue-100 text-blue-800',
      type: 'meeting'
    },
    {
      id: 2,
      title: 'One-on-one w/ Jon',
      date: '2025-01-06',
      time: '10:00 AM',
      color: 'bg-purple-100 text-purple-800',
      type: 'meeting'
    },
    {
      id: 3,
      title: 'Friday standup',
      date: '2025-01-10',
      time: '9:00 AM',
      color: 'bg-green-100 text-green-800',
      type: 'standup'
    },
    {
      id: 4,
      title: 'House listings',
      date: '2025-01-10',
      time: '7:00 PM',
      color: 'bg-orange-100 text-orange-800',
      type: 'personal'
    },
    {
      id: 5,
      title: 'Marketing call',
      date: '2025-01-13',
      time: '4:30 PM',
      color: 'bg-blue-100 text-blue-800',
      type: 'meeting'
    },
    {
      id: 6,
      title: 'Lunch with Zaire',
      date: '2025-01-13',
      time: '1:00 PM',
      color: 'bg-green-100 text-green-800',
      type: 'social'
    },
    {
      id: 7,
      title: 'Design review',
      date: '2025-01-14',
      time: '3:00 PM',
      color: 'bg-purple-100 text-purple-800',
      type: 'review'
    },
    {
      id: 8,
      title: 'All-hands event',
      date: '2025-01-14',
      time: '4:00 PM',
      color: 'bg-red-100 text-red-800',
      type: 'company'
    },
    {
      id: 9,
      title: 'Content planning',
      date: '2025-01-15',
      time: '10:00 AM',
      color: 'bg-blue-100 text-blue-800',
      type: 'planning'
    },
    {
      id: 10,
      title: 'Product planning',
      date: '2025-01-15',
      time: '2:00 PM',
      color: 'bg-indigo-100 text-indigo-800',
      type: 'planning'
    },
    {
      id: 11,
      title: 'Marketing call',
      date: '2025-01-17',
      time: '4:00 PM',
      color: 'bg-blue-100 text-blue-800',
      type: 'meeting'
    },
    {
      id: 12,
      title: 'Lunch and learn',
      date: '2025-01-20',
      time: '12:00 PM',
      color: 'bg-yellow-100 text-yellow-800',
      type: 'learning'
    },
    {
      id: 13,
      title: 'Client check-in',
      date: '2025-01-21',
      time: '2:00 PM',
      color: 'bg-green-100 text-green-800',
      type: 'client'
    },
    {
      id: 14,
      title: 'Friday standup',
      date: '2025-01-24',
      time: '9:00 AM',
      color: 'bg-green-100 text-green-800',
      type: 'standup'
    },
    {
      id: 15,
      title: 'Work planning',
      date: '2025-01-27',
      time: '10:00 AM',
      color: 'bg-blue-100 text-blue-800',
      type: 'planning'
    }
  ]

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]

  const currentMonth = monthNames[currentDate.getMonth()]
  const currentYear = currentDate.getFullYear()

  const goToPreviousMonth = () => {
    const newDate = new Date(currentDate)
    newDate.setMonth(newDate.getMonth() - 1)
    setCurrentDate(newDate)
  }

  const goToNextMonth = () => {
    const newDate = new Date(currentDate)
    newDate.setMonth(newDate.getMonth() + 1)
    setCurrentDate(newDate)
  }

  const goToToday = () => {
    setCurrentDate(new Date())
  }

  return (
    <div className="flex-1 flex flex-col bg-white">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-gray-200">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-semibold text-gray-900">Calendar</h1>
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <button className="px-2 py-1 text-blue-600 border-b-2 border-blue-600">All events</button>
            <button className="px-2 py-1 hover:text-gray-700">Personal</button>
            <button className="px-2 py-1 hover:text-gray-700">Public</button>
            <button className="px-2 py-1 hover:text-gray-700">Archived</button>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Calendar Navigation */}
      <div className="flex items-center justify-between p-6 border-b border-gray-200">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <button
              onClick={goToPreviousMonth}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <h2 className="text-lg font-semibold text-gray-900 min-w-0">
              {currentMonth} {currentYear}
            </h2>
            <button
              onClick={goToNextMonth}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          <button
            onClick={goToToday}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            Today
          </button>
        </div>

        <div className="flex items-center space-x-2">
          <select
            value={selectedView}
            onChange={(e) => setSelectedView(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            <option value="month">Month view</option>
            <option value="week">Week view</option>
            <option value="day">Day view</option>
          </select>
          
          <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700">
            Add event
          </button>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="flex-1 p-6">
        <CalendarGrid 
          currentDate={currentDate}
          events={events}
          searchTerm={searchTerm}
        />
      </div>
    </div>
  )
}

export default CalendarView