import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Products from './components/Products'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'


export default function App() {
  return (
    <div className="bg-[#080707] text-white overflow-hidden animate-fadeUp">
      <Navbar />
      <Hero />
      <Features />
      <Products />
      <Testimonials />
      <Footer />
    </div>
  )
}