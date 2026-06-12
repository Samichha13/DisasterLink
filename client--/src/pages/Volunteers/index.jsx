import { useState, useEffect } from 'react'
import api from '../../services/api'
import { useAuth } from '../../context/AuthContext'

function Volunteers() {
  const [volunteers, setVolunteers] = useState([])
  const [skills, setSkills] = useState('')
  const [location, setLocation] = useState('')
  const { user } = useAuth()

  useEffect(() => {
    fetchVolunteers()
  }, [])

  const fetchVolunteers = async () => {
    try {
      const res = await api.get('/volunteers')
      setVolunteers(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await api.post('/volunteers', {
        skills: skills.split(','),
        location
      })
      fetchVolunteers()
      setSkills('')
      setLocation('')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 pt-20 px-8">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-white mb-8">🤝 Volunteers</h2>

        {user?.role === 'citizen' && (
          <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 mb-10">
            <h3 className="text-xl font-bold text-white mb-2">Register as Volunteer</h3>
            <p className="text-gray-400 mb-6">Offer your skills to help during disaster relief efforts</p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Skills (comma separated e.g. medical, rescue, logistics)"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:outline-none focus:border-red-500"
              />
              <input
                type="text"
                placeholder="Your Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:outline-none focus:border-red-500"
              />
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition"
              >
                Register as Volunteer
              </button>
            </form>
          </div>
        )}

        <h3 className="text-2xl font-bold text-white mb-6">All Volunteers</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {volunteers.length === 0 && (
            <p className="text-gray-400">No volunteers registered yet.</p>
          )}
          {volunteers.map((volunteer) => (
            <div key={volunteer._id} className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-red-600 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold">
                  {volunteer.user?.name?.charAt(0).toUpperCase()}
                </div>
                <div>
                  <h4 className="text-white font-bold">{volunteer.user?.name}</h4>
                  <p className="text-gray-400 text-sm">{volunteer.user?.email}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-3">
                {volunteer.skills?.map((skill, index) => (
                  <span key={index} className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full">
                    {skill.trim()}
                  </span>
                ))}
              </div>
              <p className="text-gray-400 text-sm">📍 {volunteer.location}</p>
              <p className={`text-sm mt-2 font-semibold ${volunteer.availability ? 'text-green-400' : 'text-red-400'}`}>
                {volunteer.availability ? '✅ Available' : '❌ Unavailable'}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Volunteers