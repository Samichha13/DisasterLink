import { useState, useEffect } from 'react'
import api from '../../services/api'
import { useAuth } from '../../context/AuthContext'

function Alerts() {
  const [alerts, setAlerts] = useState([])
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [location, setLocation] = useState('')
  const [type, setType] = useState('flood')
  const { user } = useAuth()

  useEffect(() => {
    fetchAlerts()
  }, [])

  const fetchAlerts = async () => {
    try {
      const res = await api.get('/alerts')
      setAlerts(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await api.post('/alerts', { title, description, location, type })
      fetchAlerts()
      setTitle('')
      setDescription('')
      setLocation('')
    } catch (err) {
      console.log(err)
    }
  }

  const statusColor = (status) => {
    if (status === 'active') return 'bg-red-500'
    if (status === 'inProgress') return 'bg-yellow-500'
    if (status === 'resolved') return 'bg-green-500'
  }

  return (
    <div className="min-h-screen bg-gray-900 pt-20 px-8">
      <div className="max-w-6xl mx-auto">
        
        <h2 className="text-4xl font-bold text-white mb-8">🚨 SOS Alerts</h2>

        {user?.role === 'citizen' && (
          <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 mb-10">
            <h3 className="text-xl font-bold text-white mb-6">Send SOS Alert</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Alert Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:outline-none focus:border-red-500"
              />
              <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:outline-none focus:border-red-500"
              />
              <input
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:outline-none focus:border-red-500"
              />
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:outline-none focus:border-red-500"
              >
                <option value="flood">Flood</option>
                <option value="earthquake">Earthquake</option>
                <option value="fire">Fire</option>
                <option value="cyclone">Cyclone</option>
                <option value="other">Other</option>
              </select>
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition"
              >
                🚨 Send SOS Alert
              </button>
            </form>
          </div>
        )}

        <h3 className="text-2xl font-bold text-white mb-6">Active Alerts</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {alerts.length === 0 && (
            <p className="text-gray-400">No alerts found.</p>
          )}
          {alerts.map((alert) => (
            <div key={alert._id} className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xl font-bold text-white">{alert.title}</h4>
                <span className={`${statusColor(alert.status)} text-white text-xs px-3 py-1 rounded-full capitalize`}>
                  {alert.status}
                </span>
              </div>
              <p className="text-gray-400 mb-3">{alert.description}</p>
              <p className="text-gray-500 text-sm">📍 {alert.location}</p>
              <p className="text-gray-500 text-sm">⚠️ {alert.type}</p>
              <p className="text-gray-500 text-sm mt-2">👤 {alert.createdBy?.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Alerts