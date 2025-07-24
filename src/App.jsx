import Navbar from './components/Navbar'
import Activity from './components/Activity'
import './App.css'
import AllRoutes from './routes/AllRoutes'

function App() {

  return (
    <div className="relative header w-full h-screen bg-gray-200">
      <Navbar />
      <AllRoutes />
    </div>
  )
}

export default App
