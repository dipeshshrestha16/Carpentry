import { MapPin, Phone } from 'lucide-react'
import useScrollAnimation from '../hooks/useScrollAnimation'

const areas = [
  'Riverside',
  'Northgate',
  'Lakeside',
  'Westfield',
  'Hillcrest',
  'Parkview',
  'Cedar Grove',
  'Maplewood',
  'Sunnydale',
  'Brookhaven',
  'Elmwood',
  'Fairview',
  'Greenhill',
  'Harbor Point',
  'Meadowbrook',
  'Stonebridge',
]

export default function ServiceAreas() {
  const [headingRef, headingVisible] = useScrollAnimation()
  const [pillsRef, pillsVisible] = useScrollAnimation(0.05)
  const [noteRef, noteVisible] = useScrollAnimation()

  return (
    /* Service area section improves local SEO for carpentry searches in these suburbs */
    <section id="service-areas" className="wood-grain-bg relative w-full py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div ref={headingRef} className={`text-center mb-10 fade-up ${headingVisible ? 'visible' : ''}`}>
          <div className="inline-flex items-center gap-2 bg-amber-100 border border-amber-200 text-amber-800 text-sm font-medium px-4 py-1.5 rounded-full mb-4">
            <MapPin className="w-4 h-4" aria-hidden="true" />
            Serving Your Local Area
          </div>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#2B1D16] mb-3"
            style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
          >
            We Work Across Your <span className="text-[#B45309]">Local Area</span>
          </h2>
          <p className="text-stone-600 text-base sm:text-lg max-w-xl mx-auto">
            CraftWood Co. provides carpentry services throughout the city and surrounding suburbs.
          </p>
        </div>

        {/* Area pills */}
        <div ref={pillsRef} className="flex flex-wrap justify-center gap-3 mb-10" role="list" aria-label="Service areas">
          {areas.map((area, i) => (
            <span
              key={area}
              role="listitem"
              className={`bg-amber-100 text-amber-900 border border-amber-200 rounded-full px-4 py-1.5 text-sm font-medium fade-up ${pillsVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {area}
            </span>
          ))}
        </div>

        {/* Bottom note */}
        <div ref={noteRef} className={`text-center bg-white border border-amber-200 rounded-2xl px-6 py-6 max-w-xl mx-auto shadow-sm fade-up ${noteVisible ? 'visible' : ''}`}>
          <p className="text-stone-600 text-sm mb-3">
            Not sure if we cover your area? Give us a call — we will let you know.
          </p>
          <a
            href="tel:"
            className="inline-flex items-center gap-2 font-semibold text-amber-700 hover:text-amber-800 transition-colors"
            aria-label="Call us"
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            Call Now — Telephone Number
          </a>
        </div>
      </div>
    </section>
  )
}
