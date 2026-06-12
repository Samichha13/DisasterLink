import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import api from '../../services/api'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await api.post('/auth/login', { email, password })
      login(res.data)
      navigate('/dashboard')
    } catch (err) {
      setError(err.response.data.message)
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="bg-gray-800 rounded-2xl p-8 w-full max-w-md shadow-2xl">
        <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
        <p className="text-gray-400 mb-8">Login to DisasterLink</p>

        {error && (
          <div className="bg-red-500 bg-opacity-20 border border-red-500 text-red-400 px-4 py-3 rounded-lg mb-6">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="text-gray-400 text-sm mb-1 block">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:outline-none focus:border-red-500"
            />
          </div>
          <div>
            <label className="text-gray-400 text-sm mb-1 block">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:outline-none focus:border-red-500"
            />
          </div>
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold text-lg transition mt-2"
          >
            Login
          </button>
        </form>

        <p className="text-gray-400 text-center mt-6">
          Don't have an account?{' '}
          <Link to="/register" className="text-red-400 hover:text-red-300">
            Register here
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login