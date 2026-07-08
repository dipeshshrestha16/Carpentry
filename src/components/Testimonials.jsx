import { Star } from 'lucide-react'
import useScrollAnimation from '../hooks/useScrollAnimation'

const testimonials = [
  {
    text: "Had a built-in wardrobe fitted in our bedroom and the result is incredible. Exactly what we described, clean finish, and he even cleaned up after himself. Genuinely brilliant work.",
    name: 'Rachel T.',
    location: 'Hillcrest',
    date: 'March 2025',
  },
  {
    text: "Our kitchen cabinets were starting to fall apart after 15 years. CraftWood repaired and refinished them and they look brand new. Saved us a fortune compared to replacing them.",
    name: 'David M.',
    location: 'Northgate',
    date: 'January 2025',
  },
  {
    text: "Needed a custom desk and shelving unit for my home office. The carpenter listened to exactly what I wanted and delivered something even better than I imagined. Highly recommend.",
    name: 'Sophie R.',
    location: 'Lakeside',
    date: 'February 2025',
  },
  {
    text: "Very professional from first contact to finish. The quote was fair and the work was done on time. I'll be using them again for the kitchen renovation next year.",
    name: 'James K.',
    location: 'Westfield',
    date: 'December 2024',
  },
  {
    text: "Had a couple of doors that wouldn't close properly. He fixed them in under an hour, was polite and tidy. Refreshing to have a tradesman who actually turns up when they say they will.",
    name: 'Linda O.',
    location: 'Parkview',
    date: 'April 2025',
  },
  {
    text: "The wooden partition they installed in our small office looks fantastic. Transformed the space completely. Clients keep asking about it. Worth every penny.",
    name: 'Marcus B.',
    location: 'Cedar Grove',
    date: 'March 2025',
  },
]

// Duplicate so the CSS -50% translate creates a seamless loop
const doubled = [...testimonials, ...testimonials]

function StarRating() {
  return (
    <div className="flex gap-0.5 mb-3" aria-label="5 out of 5 stars">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" aria-hidden="true" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [headingRef, headingVisible] = useScrollAnimation()

  return (
    <section id="testimonials" className="w-full bg-white py-20 lg:py-24">

      {/* Heading — inside max-width container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={headingRef}
          className={`text-center mb-12 fade-up ${headingVisible ? 'visible' : ''}`}
        >
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#2B1D16] mb-3"
            style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
          >
            What <span className="text-[#B45309]">Our Customers</span> Say
          </h2>
          <p className="text-stone-500 text-base sm:text-lg max-w-xl mx-auto">
            Real feedback from real homeowners and businesses.
          </p>
        </div>
      </div>

      {/* Edge-to-edge carousel */}
      <div className="relative overflow-hidden">

        {/* Left fade overlay */}
        <div
          className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #ffffff, transparent)' }}
          aria-hidden="true"
        />
        {/* Right fade overlay */}
        <div
          className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #ffffff, transparent)' }}
          aria-hidden="true"
        />

        {/*
          Track: each card has a fixed width + right margin.
          With 12 cards total (6 × 2), translateX(-50%) = exactly 6 card-widths,
          creating a perfectly seamless infinite loop.
        */}
        <div
          className="carousel-track flex py-3 pl-6"
          aria-label="Customer testimonials carousel"
        >
          {doubled.map(({ text, name, location, date }, i) => (
            <article
              key={i}
              aria-hidden={i >= testimonials.length}
              className="bg-white border border-stone-100 rounded-2xl p-6 shadow-sm flex flex-col flex-shrink-0"
              style={{ width: '340px', marginRight: '24px' }}
            >
              <StarRating />
              <blockquote className="text-stone-700 text-sm leading-relaxed flex-1 mb-4">
                &ldquo;{text}&rdquo;
              </blockquote>
              <footer className="flex items-center justify-between">
                <div>
                  <cite className="font-bold text-[#2B1D16] text-sm not-italic">{name}</cite>
                  <p className="text-xs text-stone-500">{location}</p>
                </div>
                <span className="text-xs text-stone-400">{date}</span>
              </footer>
            </article>
          ))}
        </div>
      </div>

    </section>
  )
}
