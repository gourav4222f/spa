import { MotionConfig } from 'framer-motion'
import About from './components/About'
import Contact from './components/Contact'
import ExperienceBanner from './components/ExperienceBanner'
import Features from './components/Features'
import FinalCTA from './components/FinalCTA'
import FloatingContact from './components/FloatingContact'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Services from './components/Services'
import Team from './components/Team'
import Testimonials from './components/Testimonials'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-gold focus:px-5 focus:py-3 focus:text-olive-900"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Team />
        <About />
        <Services />
        <Features />
        <ExperienceBanner />
        <Gallery />
        <Testimonials />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
      <FloatingContact />
    </MotionConfig>
  )
}
