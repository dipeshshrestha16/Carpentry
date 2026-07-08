import Navbar from './components/Navbar'
import TopBanner from './components/TopBanner'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import ProjectShowcase from './components/ProjectShowcase'
import Process from './components/Process'
import ServiceAreas from './components/ServiceAreas'
import Testimonials from './components/Testimonials'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="w-full">
      {/* Skip-to-content for keyboard / screen-reader users (WCAG 2.1 AA) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-5 focus:py-2.5 focus:bg-amber-700 focus:text-white focus:rounded-full focus:font-semibold focus:shadow-lg"
      >
        Skip to main content
      </a>

      {/* Sticky header: top banner + main nav together */}
      <div className="sticky top-0 z-50">
        <TopBanner />
        <Navbar />
      </div>

      <main id="main-content">
        <Hero />
        <Services />
        <WhyChooseUs />
        <ProjectShowcase />
        <Process />
        <ServiceAreas />
        <Testimonials />
        <ContactForm />
      </main>

      <Footer />
    </div>
  )
}
