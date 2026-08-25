import Architecture from '../components/Architecture'
import CTA from '../components/CTA'
import CycleOfCare from '../components/CycleOfCare'
import Hero from '../components/Hero'
import Market from '../components/Market'
import Mission from '../components/Mission'
import Moat from '../components/Moat'
import Products from '../components/Products'
import Roadmap from '../components/Roadmap'

export default function Home() {
  return (
    <>
      <Hero />
      <CycleOfCare />
      <Products />
      <Architecture />
      <Market />
      <Moat />
      <Mission />
      <Roadmap />
      <CTA />
    </>
  )
}
