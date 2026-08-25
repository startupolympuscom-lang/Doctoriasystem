import Architecture from './components/Architecture'
import CTA from './components/CTA'
import CycleOfCare from './components/CycleOfCare'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Market from './components/Market'
import Mission from './components/Mission'
import Moat from './components/Moat'
import Navbar from './components/Navbar'
import Products from './components/Products'
import Roadmap from './components/Roadmap'

function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <main>
        <Hero />
        <CycleOfCare />
        <Products />
        <Architecture />
        <Market />
        <Moat />
        <Mission />
        <Roadmap />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
