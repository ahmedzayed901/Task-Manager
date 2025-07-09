import { useMemo } from 'react'

const CalendarGrid = ({ currentDate, events, searchTerm }) => {
  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

  const calendarData = useMemo(() => {
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()
    
    // Get first day of the month
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    
    // Get the day of week (0=Sunday, 1=Monday, etc.)
    // Convert to our format (0=Monday, 1=Tuesday, etc.)
    let startDay = firstDay.getDay()
    startDay = startDay === 0 ? 6 : startDay - 1
    
    const daysInMonth = lastDay.getDate()
    const days = []
    
    // Add empty cells for previous month
    for (let i = 0; i < startDay; i++) {
      const prevDay = new Date(year, month, -startDay + i + 1)
      days.push({
        date: prevDay.getDate(),
        isCurrentMonth: false,
        fullDate: prevDay
      })
    }
    
    // Add days of current month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day)
      days.push({
        date: day,
        isCurrentMonth: true,
        fullDate: date
      })
    }
    
    // Add days from next month to fill the grid
    const totalCells = Math.ceil(days.length / 7) * 7
    for (let day = 1; days.length < totalCells; day++) {
      const nextDay = new Date(year, month + 1, day)
      days.push({
        date: day,
        isCurrentMonth: false,
        fullDate: nextDay
      })
    }
    
    return days
  }, [currentDate])

  const getEventsForDay = (date) => {
    const dateString = date.toISOString().split('T')[0]
    return events.filter(event => {
      const matchesDate = event.date === dateString
      const matchesSearch = searchTerm === '' || event.title.toLowerCase().includes(searchTerm.toLowerCase())
      return matchesDate && matchesSearch
    })
  }

  const isToday = (date) => {
    const today = new Date()
    return date.getDate() === today.getDate() &&
           date.getMonth() === today.getMonth() &&
           date.getFullYear() === today.getFullYear()
  }

  return (
    <div className="bg-white">
      {/* Week headers */}
      <div className="grid grid-cols-7 gap-px bg-gray-200 rounded-lg overflow-hidden">
        {weekDays.map((day) => (
          <div key={day} className="bg-gray-50 p-4 text-center">
            <span className="text-sm font-medium text-gray-900">{day}</span>
          </div>
        ))}
        
        {/* Calendar days */}
        {calendarData.map((day, index) => {
          const dayEvents = getEventsForDay(day.fullDate)
          const isCurrentDay = isToday(day.fullDate)
          
          return (
            <div
              key={index}
              className={`bg-white min-h-[120px] p-2 ${
                day.isCurrentMonth ? 'text-gray-900' : 'text-gray-400'
              }`}
            >
              <div className="flex justify-between items-start mb-2">
                <span
                  className={`text-sm font-medium ${
                    isCurrentDay
                      ? 'bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center'
                      : ''
                  }`}
                >
                  {day.date}
                </span>
              </div>
              
              {/* Events for this day */}
              <div className="space-y-1">
                {dayEvents.slice(0, 3).map((event) => (
                  <div
                    key={event.id}
                    className={`px-2 py-1 rounded text-xs font-medium truncate cursor-pointer hover:opacity-80 ${event.color}`}
                    title={`${event.title} - ${event.time}`}
                  >
                    {event.title}
                  </div>
                ))}
                
                {/* Show "more" indicator if there are more than 3 events */}
                {dayEvents.length > 3 && (
                  <div className="text-xs text-gray-500 font-medium">
                    +{dayEvents.length - 3} more
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CalendarGrid