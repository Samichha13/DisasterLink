import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="relative h-screen w-full">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"   //covers the entire parent div
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1504112022923-7d2514d1b8a5?w=1920')`
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-60" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-6xl font-bold text-white mb-4">
          Disaster<span className="text-red-500">Link</span>
        </h1>
        <p className="text-xl text-gray-300 mb-4 max-w-2xl">
          Connecting citizens, NGOs, and government agencies for faster disaster response
        </p>
        <p className="text-gray-400 mb-8 max-w-xl">
          Real-time SOS alerts, resource coordination, and volunteer management — all in one platform
        </p>
        
        <div className="flex gap-4">
          <Link to="/register" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition">
            Get Started
          </Link>
          <Link to="/login" className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold text-lg transition">
            Login
          </Link>
        </div>

        <div className="flex gap-12 mt-16">
          <div className="text-center">
            <p className="text-3xl font-bold text-red-500">🚨</p>
            <p className="text-white font-semibold mt-2">SOS Alerts</p>
            <p className="text-gray-400 text-sm">Real-time emergency alerts</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-red-500">📦</p>
            <p className="text-white font-semibold mt-2">Resources</p>
            <p className="text-gray-400 text-sm">Track supplies and aid</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-red-500">🤝</p>
            <p className="text-white font-semibold mt-2">Volunteers</p>
            <p className="text-gray-400 text-sm">Coordinate relief efforts</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home