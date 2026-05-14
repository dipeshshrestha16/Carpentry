import { LayoutGrid, Wrench, DoorOpen, Layers, Archive, ChefHat, BookOpen, Briefcase, ArrowRight } from 'lucide-react'
import useScrollAnimation from '../hooks/useScrollAnimation'

const services = [
  {
    icon: LayoutGrid,
    title: 'Custom Furniture',
    description:
      'Handcrafted tables, chairs, beds, and shelving units built to your exact specifications and space. Every piece is made to last.',
  },
  {
    icon: Wrench,
    title: 'Furniture Repair',
    description:
      'Restore worn, broken, or damaged furniture back to its original condition. We work on all wood types and finishes.',
  },
  {
    icon: DoorOpen,
    title: 'Door Repair & Installation',
    description:
      'Interior and exterior door fitting, alignment, lock repairs, and full door replacements done neatly and correctly.',
  },
  {
    icon: Layers,
    title: 'Cabinet Making',
    description:
      'Custom-built cabinets for kitchens, bathrooms, and storage — designed and fitted perfectly to your space.',
  },
  {
    icon: Archive,
    title: 'Wardrobe Installation',
    description:
      'Built-in and freestanding wardrobes designed and installed cleanly, maximising your storage space and room layout.',
  },
  {
    icon: ChefHat,
    title: 'Kitchen Carpentry',
    description:
      'Kitchen units, countertop framing, island construction, and full kitchen carpentry fitouts done to a high standard.',
  },
  {
    icon: BookOpen,
    title: 'Shelving & Storage',
    description:
      'Wall shelving, floating shelves, utility shelving, and custom storage solutions tailored to any room in your home.',
  },
  {
    icon: Briefcase,
    title: 'Office Carpentry',
    description:
      'Desks, partitions, reception counters, and fitted office furniture for small commercial and professional spaces.',
  },
]

const scrollTo = () => {
  const el = document.querySelector('#contact')
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Services() {
  const [headingRef, headingVisible] = useScrollAnimation()
  const [gridRef, gridVisible] = useScrollAnimation(0.04)

  return (
    <section id="services" className="w-full bg-white py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div
          ref={headingRef}
          className={`text-center mb-12 fade-up ${headingVisible ? 'visible' : ''}`}
        >
          {/* Location keyword in H2 improves local SEO */}
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#2B1D16] mb-3"
            style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
          >
            Carpentry Services in [City] &amp; Surrounding Areas
          </h2>
          <p className="text-stone-500 text-base sm:text-lg max-w-xl mx-auto">
            Skilled craftsmanship for every wood project — big or small.
          </p>
        </div>

        {/*
          auto-fill grid: cards never overflow at any viewport width.
          Each card is min 260px wide; extras wrap to new rows naturally.
        */}
        <div
          ref={gridRef}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.5rem' }}
        >
          {services.map(({ icon: Icon, title, description }, i) => (
            <article
              key={title}
              className={`bg-white border border-stone-100 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col fade-up ${gridVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 75}ms` }}
            >
              <span className="flex items-center justify-center w-12 h-12 bg-amber-100 rounded-full mb-4 flex-shrink-0">
                <Icon className="w-6 h-6 text-amber-700" aria-hidden="true" />
              </span>
              <h3 className="text-base font-bold text-[#2B1D16] mb-2">{title}</h3>
              <p className="text-sm text-stone-600 leading-relaxed flex-1">{description}</p>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); scrollTo() }}
                className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-amber-700 hover:text-amber-800 transition-colors"
                aria-label={`Book ${title} service`}
              >
                Book Service
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
