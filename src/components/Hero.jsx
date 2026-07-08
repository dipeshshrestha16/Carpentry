import { ArrowRight, Hammer, TreePine, Home, Zap, CheckCircle, Phone } from 'lucide-react'

const trustBadges = [
  { icon: Hammer,      label: 'Skilled Carpenters', sub: 'Expert craftsmen' },
  { icon: TreePine,    label: 'Custom Woodwork',     sub: 'Built to spec' },
  { icon: Home,        label: 'Home & Office',       sub: 'Any space' },
  { icon: Zap,         label: 'Fast Response',       sub: 'Quick turnaround' },
  { icon: CheckCircle, label: 'Quality Finish',      sub: 'Guaranteed' },
]

const scrollTo = (href) => {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  return (
    <section
      id="home"
      className="hero-wood-section w-full py-16 lg:py-0 lg:min-h-screen flex flex-col justify-center"
      aria-label="Hero section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 py-16">

          {/* Left — text content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="hero-enter-1 inline-flex items-center gap-2 bg-amber-100 border border-amber-200 text-amber-800 text-sm font-medium px-4 py-1.5 rounded-full mb-6 badge-pulse">
              <span aria-hidden="true"></span>
              Skilled Local Carpenters — Quality You Can See
            </div>

            <h1
              className="hero-enter-2 text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2B1D16] leading-tight mb-5"
              style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
            >
              Custom Carpentry{' '}
              <span className="text-[#B45309]">Crafted For</span>{' '}
              Your Home
            </h1>

            <p className="hero-enter-3 text-base sm:text-lg text-stone-600 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              From bespoke furniture to full kitchen cabinets, CraftWood Co. delivers precision,
              quality, and craftsmanship to homes and offices across the area.
            </p>

            <div className="hero-enter-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-6">
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); scrollTo('#contact') }}
                className="inline-flex items-center justify-center px-7 py-3.5 bg-amber-700 hover:bg-amber-800 text-white font-semibold rounded-full transition-colors duration-150 min-h-[44px] text-base w-full sm:w-auto shadow-md hover:shadow-lg"
              >
                Get a Free Quote
              </a>
              <a
                href="#services"
                onClick={(e) => { e.preventDefault(); scrollTo('#services') }}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-amber-700 text-amber-700 hover:bg-amber-50 font-semibold rounded-full transition-colors duration-150 min-h-[44px] text-base w-full sm:w-auto"
              >
                View Our Services
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>

            <a
              href="tel:"
              className="hero-enter-4 inline-flex items-center gap-2 text-[#5C4033] font-semibold hover:text-amber-700 transition-colors mb-10"
              aria-label="Call us"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              Telephone Number — Call us today
            </a>

            {/* Trust badges */}
            <div className="hero-enter-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mt-2">
              {trustBadges.map(({ icon: Icon, label, sub }) => (
                <div
                  key={label}
                  className="flex flex-col items-center text-center bg-white/90 border border-stone-200 rounded-xl px-3 py-3 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                >
                  <span className="flex items-center justify-center w-9 h-9 bg-amber-100 rounded-full mb-2">
                    <Icon className="w-4 h-4 text-amber-700" aria-hidden="true" />
                  </span>
                  <span className="text-xs font-semibold text-[#2B1D16] leading-tight">{label}</span>
                  <span className="text-xs text-stone-500 leading-tight mt-0.5">{sub}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — premium finished carpentry photo */}
          <div className="hero-enter-img flex-1 w-full max-w-lg lg:max-w-none">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?auto=format&fit=crop&w=600&h=500&q=85"
                alt="A beautifully finished custom hardwood cabinet with dovetail joinery and rich walnut stain"
                className="w-full h-auto object-cover block"
                width="600"
                height="500"
                loading="eager"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-amber-900/10 pointer-events-none" aria-hidden="true" />

              {/* Floating badge */}
              <div className="absolute bottom-5 left-5 bg-white rounded-xl shadow-lg px-4 py-3 flex items-center gap-3">
                <span className="flex items-center justify-center w-10 h-10 bg-amber-100 rounded-full">
                  <Hammer className="w-5 h-5 text-amber-700" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs text-stone-500 leading-none">Experience</p>
                  <p className="text-sm font-bold text-[#2B1D16] leading-tight">12+ Years</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
