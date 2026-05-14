import Navbar from './components/Navbar'
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
      <Navbar />
      <main>
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
