import Hero from './components/Hero'
import Overview from './components/Overview'
import Brands from './components/Brands'
import Features1 from './components/Features1'
import Features2 from './components/Features2'
import Features3 from './components/Features3'
import Product from './components/product'
import Pricing from './components/Pricing'
import Testimonial from './components/Testimonial'
import Cta from './components/Cta'
import Footer from './components/Footer'
export default function Home() {
  return (
      <main className="min-h-screen">
      <Hero/>
      <Overview/>
      <Brands/>
      <Features1/>
      <Features2/>
      <Features3/>
      <Product/>
      <Pricing/>
      <Testimonial/>
      <Cta/>
      <Footer/>
   </main>
  )
}
