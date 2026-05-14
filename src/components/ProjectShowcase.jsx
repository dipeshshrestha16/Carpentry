import useScrollAnimation from '../hooks/useScrollAnimation'

const projects = [
  {
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=500&h=350&q=80',
    alt: 'Custom built-in wardrobe with sliding mirror doors and internal organiser in a master bedroom',
    badge: 'Wardrobe Installation',
    description: 'Master bedroom fitted wardrobe with sliding doors and internal organiser.',
  },
  {
    image: 'https://images.unsplash.com/photo-1556909142-f5a03fca2e9e?auto=format&fit=crop&w=500&h=350&q=80',
    alt: 'Full kitchen cabinet installation with soft-close hinges and clean white shaker doors',
    badge: 'Kitchen Cabinets',
    description: 'Full kitchen cabinet installation with soft-close hinges and flush finish.',
  },
  {
    image: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?auto=format&fit=crop&w=500&h=350&q=80',
    alt: 'Custom floating wooden desk with overhead shelving storage in a bright home office',
    badge: 'Home Office',
    description: 'Custom floating desk and storage unit for a productive home office space.',
  },
  {
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=500&h=350&q=80',
    alt: 'Open-plan office space elegantly divided by a warm wooden slat partition wall',
    badge: 'Office Partition',
    description: 'Open-plan office divider with warm wooden slat framing and clean lines.',
  },
  {
    image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=500&h=350&q=80',
    alt: 'Floor-to-ceiling custom wooden floating shelves fitted and styled in a bright living room',
    badge: 'Shelving & Storage',
    description: 'Floor-to-ceiling floating shelves — painted, fitted, and styled to perfection.',
  },
  {
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=500&h=350&q=80',
    alt: 'Antique wooden dining table with rich grain fully restored and refinished to original beauty',
    badge: 'Furniture Repair',
    description: 'Antique dining table fully restored and refinished to its original beauty.',
  },
]

const scrollTo = () => {
  const el = document.querySelector('#contact')
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function ProjectShowcase() {
  const [headingRef, headingVisible] = useScrollAnimation()
  const [gridRef, gridVisible] = useScrollAnimation(0.06)
  const [ctaRef, ctaVisible] = useScrollAnimation()

  return (
    <section id="projects" className="w-full bg-white py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div
          ref={headingRef}
          className={`text-center mb-12 fade-up ${headingVisible ? 'visible' : ''}`}
        >
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#2B1D16] mb-3"
            style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
          >
            Our Recent Work
          </h2>
          <p className="text-stone-500 text-base sm:text-lg max-w-xl mx-auto">
            A sample of the craftsmanship we bring to every project.
          </p>
        </div>

        {/* Project grid */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(({ image, alt, badge, description }, i) => (
            <article
              key={badge}
              className={`group bg-white rounded-2xl border border-stone-100 shadow-sm hover:shadow-xl overflow-hidden transition-all duration-300 fade-up ${gridVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <div className="relative overflow-hidden aspect-[10/7]">
                <img
                  src={image}
                  alt={alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  width="500"
                  height="350"
                  loading="lazy"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#2B1D16]/55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-sm font-semibold border border-white/80 rounded-full px-5 py-2 backdrop-blur-sm">
                    View Details
                  </span>
                </div>
                {/* Badge */}
                <span className="absolute top-3 left-3 bg-amber-700 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                  {badge}
                </span>
              </div>
              <div className="p-4">
                <p className="text-sm text-stone-600">{description}</p>
              </div>
            </article>
          ))}
        </div>

        {/* CTA below grid */}
        <div
          ref={ctaRef}
          className={`text-center mt-10 fade-up ${ctaVisible ? 'visible' : ''}`}
        >
          <p className="text-stone-600 mb-4">Want to see more of our work?</p>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); scrollTo() }}
            className="inline-flex items-center justify-center px-8 py-3 border-2 border-amber-700 text-amber-700 hover:bg-amber-50 font-semibold rounded-xl transition-colors duration-150 min-h-[44px]"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  )
}
