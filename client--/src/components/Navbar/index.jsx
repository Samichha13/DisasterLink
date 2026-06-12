import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

function Navbar() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <nav className="bg-gray-900 border-b border-gray-700 px-8 py-4 flex items-center justify-between fixed top-0 w-full z-50">
      <Link to="/" className="text-red-500 font-bold text-2xl tracking-wide">
         DisasterLink
      </Link>

      <div className="flex items-center gap-6">
        {user ? (
          <>
            <Link to="/dashboard" className="text-gray-300 hover:text-white transition">Dashboard</Link>
            <Link to="/alerts" className="text-gray-300 hover:text-white transition">Alerts</Link>
            <Link to="/resources" className="text-gray-300 hover:text-white transition">Resources</Link>
            <Link to="/volunteers" className="text-gray-300 hover:text-white transition">Volunteers</Link>
            <span className="text-gray-400 text-sm">👤 {user.name}</span>
            <button onClick={handleLogout} className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm transition">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="text-gray-300 hover:text-white transition">Login</Link>
            <Link to="/register" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm transition">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar