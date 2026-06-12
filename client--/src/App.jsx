
import {Route} from 'react-router-dom';
import {Routes} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Alerts from './pages/Alerts'
import Resources from './pages/Resources';
import Volunteers from './pages/Volunteers';
import Navbar from './components/Navbar';
import ProtectedRoutes from './components/ProtectedRoutes';
function App() {
  return (
    <div>
      <h1>DisasterLink</h1>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<ProtectedRoutes><Dashboard /></ProtectedRoutes>} />
        <Route path="/alerts" element={<ProtectedRoutes><Alerts /></ProtectedRoutes>} />
        <Route path="/resources" element={<ProtectedRoutes><Resources /></ProtectedRoutes>} />
        <Route path="/volunteers" element={<ProtectedRoutes><Volunteers /></ProtectedRoutes>} />
      </Routes>
    </div>
  )
}

export default App;