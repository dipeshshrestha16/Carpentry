import { CheckCircle } from 'lucide-react'
import useScrollAnimation from '../hooks/useScrollAnimation'

const trustPoints = [
  {
    title: 'Experienced Carpenters',
    description: 'Over 12 years of hands-on woodworking and installation experience across all project types.',
  },
  {
    title: 'Quality Materials',
    description: 'We use durable, sustainably sourced timber and premium fittings that stand the test of time.',
  },
  {
    title: 'Neat & Clean Finish',
    description: "Every job is completed to a high standard — we don't leave until it's right and the space is tidy.",
  },
  {
    title: 'Transparent Pricing',
    description: 'Honest quotes with no hidden costs. You know exactly what you are paying before we start.',
  },
  {
    title: 'Custom Design Support',
    description: 'We work with your ideas, space, and budget to design the right carpentry solution for you.',
  },
  {
    title: 'On-Time Service',
    description: 'We respect your time. Punctual arrival, reliable scheduling, and no-show protection.',
  },
  {
    title: 'Locally Based Team',
    description: 'We serve your area and take pride in our local reputation for quality and honest work.',
  },
]

export default function WhyChooseUs() {
  const [headingRef, headingVisible] = useScrollAnimation()
  const [imgRef, imgVisible] = useScrollAnimation(0.1)
  const [listRef, listVisible] = useScrollAnimation(0.08)

  return (
    <section id="why-us" className="wood-grain-bg relative w-full py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section heading */}
        <div
          ref={headingRef}
          className={`text-center mb-12 fade-up ${headingVisible ? 'visible' : ''}`}
        >
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#2B1D16] mb-3"
            style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
          >
            Why Homeowners Choose CraftWood
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            We bring skill, honesty, and care to every job.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Left — real carpentry photo */}
          <div
            ref={imgRef}
            className={`w-full lg:w-5/12 flex-shrink-0 fade-left ${imgVisible ? 'visible' : ''}`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=560&h=560&q=80"
                alt="A beautifully finished custom wooden cabinet installation with brass hardware in a modern kitchen"
                className="w-full h-auto object-cover block"
                width="560"
                height="560"
                loading="lazy"
              />
              {/* Warm tint to match palette */}
              <div className="absolute inset-0 bg-amber-900/8 pointer-events-none" aria-hidden="true" />
            </div>
          </div>

          {/* Right — trust points */}
          <div
            ref={listRef}
            className={`w-full lg:w-7/12 fade-right ${listVisible ? 'visible' : ''}`}
          >
            <ul className="flex flex-col gap-5" aria-label="Reasons to choose CraftWood Co.">
              {trustPoints.map(({ title, description }, i) => (
                <li
                  key={title}
                  className="flex items-start gap-4 fade-up visible"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-sm mt-0.5">
                    <CheckCircle className="w-5 h-5 text-green-700" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-bold text-[#2B1D16] text-base mb-0.5">{title}</h3>
                    <p className="text-stone-600 text-sm leading-relaxed">{description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}
