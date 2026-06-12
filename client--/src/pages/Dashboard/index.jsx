import { useAuth } from '../../context/AuthContext'
import { useNavigate, Link } from 'react-router-dom'

function Dashboard() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <div className="min-h-screen bg-gray-900 pt-20 px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-4xl font-bold text-white">
            Welcome, <span className="text-red-500">{user?.name}!</span>
          </h2>
          <p className="text-gray-400 mt-2 capitalize">Role: {user?.role}</p>
        </div>

        {/* Citizen Dashboard */}
        {user?.role === 'citizen' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link to="/alerts" className="bg-gray-800 hover:bg-gray-700 transition rounded-2xl p-6 border border-gray-700">
              <p className="text-4xl mb-4">🚨</p>
              <h3 className="text-xl font-bold text-white">SOS Alerts</h3>
              <p className="text-gray-400 mt-2">Send emergency alerts and view active disasters in your area</p>
            </Link>
            <Link to="/volunteers" className="bg-gray-800 hover:bg-gray-700 transition rounded-2xl p-6 border border-gray-700">
              <p className="text-4xl mb-4">🤝</p>
              <h3 className="text-xl font-bold text-white">Volunteer</h3>
              <p className="text-gray-400 mt-2">Register as a volunteer and help with disaster relief efforts</p>
            </Link>
            <Link to="/resources" className="bg-gray-800 hover:bg-gray-700 transition rounded-2xl p-6 border border-gray-700">
              <p className="text-4xl mb-4">📦</p>
              <h3 className="text-xl font-bold text-white">Resources</h3>
              <p className="text-gray-400 mt-2">View available resources and supplies in your area</p>
            </Link>
          </div>
        )}

        {/* NGO Dashboard */}
        {user?.role === 'ngo' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link to="/alerts" className="bg-gray-800 hover:bg-gray-700 transition rounded-2xl p-6 border border-gray-700">
              <p className="text-4xl mb-4">🚨</p>
              <h3 className="text-xl font-bold text-white">Manage Alerts</h3>
              <p className="text-gray-400 mt-2">View and respond to active SOS alerts</p>
            </Link>
            <Link to="/resources" className="bg-gray-800 hover:bg-gray-700 transition rounded-2xl p-6 border border-gray-700">
              <p className="text-4xl mb-4">📦</p>
              <h3 className="text-xl font-bold text-white">Manage Resources</h3>
              <p className="text-gray-400 mt-2">Add and track supplies, food, medicine and shelter</p>
            </Link>
            <Link to="/volunteers" className="bg-gray-800 hover:bg-gray-700 transition rounded-2xl p-6 border border-gray-700">
              <p className="text-4xl mb-4">🤝</p>
              <h3 className="text-xl font-bold text-white">Volunteers</h3>
              <p className="text-gray-400 mt-2">Coordinate and manage volunteer efforts</p>
            </Link>
          </div>
        )}

        {/* Government Dashboard */}
        {user?.role === 'government' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link to="/alerts" className="bg-gray-800 hover:bg-gray-700 transition rounded-2xl p-6 border border-gray-700">
              <p className="text-4xl mb-4">🚨</p>
              <h3 className="text-xl font-bold text-white">All Alerts</h3>
              <p className="text-gray-400 mt-2">Full overview of all active emergency alerts</p>
            </Link>
            <Link to="/resources" className="bg-gray-800 hover:bg-gray-700 transition rounded-2xl p-6 border border-gray-700">
              <p className="text-4xl mb-4">📦</p>
              <h3 className="text-xl font-bold text-white">Resource Overview</h3>
              <p className="text-gray-400 mt-2">Monitor and manage all resources nationally</p>
            </Link>
            <Link to="/volunteers" className="bg-gray-800 hover:bg-gray-700 transition rounded-2xl p-6 border border-gray-700">
              <p className="text-4xl mb-4">🤝</p>
              <h3 className="text-xl font-bold text-white">Volunteer Force</h3>
              <p className="text-gray-400 mt-2">Overview of all registered volunteers</p>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Dashboard