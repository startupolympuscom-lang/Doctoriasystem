import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Snania from './pages/Snania'

function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/snania" element={<Snania />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
