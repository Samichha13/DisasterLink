import { useState, useEffect } from 'react'
import api from '../../services/api'
import { useAuth } from '../../context/AuthContext'

function Resources() {
  const [resources, setResources] = useState([])
  const [name, setName] = useState('')
  const [type, setType] = useState('food')
  const [quantity, setQuantity] = useState('')
  const [location, setLocation] = useState('')
  const { user } = useAuth()

  useEffect(() => {
    fetchResources()
  }, [])

  const fetchResources = async () => {
    try {
      const res = await api.get('/resources')
      setResources(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await api.post('/resources', { name, type, quantity, location })
      fetchResources()
      setName('')
      setQuantity('')
      setLocation('')
    } catch (err) {
      console.log(err)
    }
  }

  const statusColor = (status) => {
    if (status === 'available') return 'bg-green-500'
    if (status === 'depleted') return 'bg-red-500'
  }

  const typeEmoji = (type) => {
    if (type === 'food') return '🍱'
    if (type === 'water') return '💧'
    if (type === 'medicine') return '💊'
    if (type === 'shelter') return '🏠'
    if (type === 'vehicle') return '🚗'
    return '📦'
  }

  return (
    <div className="min-h-screen bg-gray-900 pt-20 px-8">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-white mb-8">📦 Resources</h2>

        {(user?.role === 'ngo' || user?.role === 'government') && (
          <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 mb-10">
            <h3 className="text-xl font-bold text-white mb-6">Add Resource</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Resource Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:outline-none focus:border-red-500"
              />
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:outline-none focus:border-red-500"
              >
                <option value="food">Food</option>
                <option value="water">Water</option>
                <option value="medicine">Medicine</option>
                <option value="shelter">Shelter</option>
                <option value="vehicle">Vehicle</option>
                <option value="other">Other</option>
              </select>
              <input
                type="number"
                placeholder="Quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:outline-none focus:border-red-500"
              />
              <input
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:outline-none focus:border-red-500"
              />
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition"
              >
                Add Resource
              </button>
            </form>
          </div>
        )}

        <h3 className="text-2xl font-bold text-white mb-6">Available Resources</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {resources.length === 0 && (
            <p className="text-gray-400">No resources found.</p>
          )}
          {resources.map((resource) => (
            <div key={resource._id} className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <span className="text-4xl">{typeEmoji(resource.type)}</span>
                <span className={`${statusColor(resource.status)} text-white text-xs px-3 py-1 rounded-full capitalize`}>
                  {resource.status}
                </span>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">{resource.name}</h4>
              <p className="text-gray-400 text-sm">Type: {resource.type}</p>
              <p className="text-gray-400 text-sm">Quantity: {resource.quantity}</p>
              <p className="text-gray-400 text-sm">📍 {resource.location}</p>
              <p className="text-gray-400 text-sm mt-2">👤 {resource.managedBy?.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Resources