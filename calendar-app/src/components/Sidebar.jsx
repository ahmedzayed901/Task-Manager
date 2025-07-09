import { useState } from 'react'

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('Calendar')

  const menuItems = [
    { name: 'Dashboard', icon: '📊' },
    { name: 'Projects', icon: '📁' },
    { name: 'Documents', icon: '📄' },
    { name: 'Calendar', icon: '📅' },
  ]

  const workTeams = [
    { name: 'Catalog', icon: '📚', count: 7 },
    { name: 'Sales', icon: '💰', count: 3 },
    { name: 'Research', icon: '🔬', count: 2 },
    { name: 'Blueprint', icon: '📐', count: 5 },
  ]

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">U</span>
          </div>
          <span className="font-semibold text-gray-900">Untitled UI</span>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="p-4">
        <div className="space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => setActiveItem(item.name)}
              className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                activeItem === item.name
                  ? 'bg-gray-100 text-gray-900'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="font-medium">{item.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Work Teams Section */}
      <div className="p-4 flex-1">
        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
          Work Teams
        </div>
        <div className="space-y-1">
          {workTeams.map((team) => (
            <div
              key={team.name}
              className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-gray-50 cursor-pointer"
            >
              <div className="flex items-center space-x-3">
                <span className="text-lg">{team.icon}</span>
                <span className="text-gray-700 font-medium">{team.name}</span>
              </div>
              <span className="text-xs bg-gray-200 text-gray-600 rounded-full px-2 py-1">
                {team.count}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* User Profile */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
            <span className="text-gray-600 text-sm font-medium">SH</span>
          </div>
          <div className="flex-1">
            <div className="font-medium text-gray-900 text-sm">Sienna Hewitt</div>
            <div className="text-xs text-gray-500">sienna@untitled.com</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar