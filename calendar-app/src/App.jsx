import { useState } from 'react'
import Sidebar from './components/Sidebar'
import CalendarView from './components/CalendarView'
import './App.css'

function App() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedView, setSelectedView] = useState('month')

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <CalendarView 
          currentDate={currentDate}
          setCurrentDate={setCurrentDate}
          selectedView={selectedView}
          setSelectedView={setSelectedView}
        />
      </div>
    </div>
  )
}

export default App
