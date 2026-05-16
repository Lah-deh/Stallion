import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Products from './components/Products'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'


export default function App() {
  return (
    <div className="bg-[#080707] text-white overflow-hidden animate-fadeUp">
      <Navbar
        logo="STALLION"
        links={['Home', 'Products', 'About', 'Reviews']}
        buttonText="Shop Now"
      />
      <Hero
        subtitle="PREMIUM PERFUME"
        title={
          <>
            Luxury
            <br />
            Fragrance
            <br />
            Collection
          </>
        }
        description="Discover bold and timeless fragrances crafted for elegance, confidence and unforgettable moments."
        primaryButton="Explore Now"
        secondaryButton="View Collection"
        image="/image/Stallion.jpg"
      />
      <Features
        subtitle="FEATURES"
        heading="Why Choose Us"
     />
      <Products
        subtitle="COLLECTION"
        heading="Featured Perfumes"
        buttonText="Buy"
      />
      <Testimonials
        subtitle="TESTIMONIALS"
        heading="What Clients Say"
      />
      <Footer />
    </div> 
  )
}