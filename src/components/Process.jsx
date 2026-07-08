import { Phone, ClipboardList, Ruler, Hammer } from 'lucide-react'
import useScrollAnimation from '../hooks/useScrollAnimation'

const steps = [
  {
    number: '01',
    icon: Phone,
    title: 'Contact Us',
    description:
      'Call, message, or fill out our form. Tell us what you need and where you are — we respond quickly.',
  },
  {
    number: '02',
    icon: ClipboardList,
    title: 'Share Your Requirement',
    description:
      "Describe the project — we'll ask a few questions to fully understand your vision, space, and budget.",
  },
  {
    number: '03',
    icon: Ruler,
    title: 'Measurement & Quote',
    description:
      'We visit, measure the space, and give you a clear written quote. No surprises — just honest pricing.',
  },
  {
    number: '04',
    icon: Hammer,
    title: 'We Build, Repair, or Install',
    description:
      'Our carpenters complete the job cleanly, on time, and to your full satisfaction. Every time.',
  },
]

export default function Process() {
  const [headingRef, headingVisible] = useScrollAnimation()
  const [stepsRef, stepsVisible] = useScrollAnimation(0.08)

  return (
    <section id="process" className="w-full bg-stone-50 py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div
          ref={headingRef}
          className={`text-center mb-14 fade-up ${headingVisible ? 'visible' : ''}`}
        >
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#2B1D16] mb-3"
            style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
          >
            <span className="text-[#B45309]">How</span> It Works
          </h2>
          <p className="text-stone-500 text-base sm:text-lg max-w-xl mx-auto">
            Getting great carpentry work done is easy with CraftWood.
          </p>
        </div>

        {/* Steps */}
        <div ref={stepsRef} className="relative">
          {/* Dashed connector line — desktop only */}
          <div
            className="hidden lg:block absolute top-10 left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] h-px border-t-2 border-dashed border-stone-300 z-0"
            aria-hidden="true"
          />

          <ol className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map(({ number, icon: Icon, title, description }, i) => (
              <li
                key={number}
                className={`flex flex-col items-center text-center fade-up ${stepsVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                {/* Step circle */}
                <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-[#5C4033] shadow-md mb-5 flex-shrink-0 hover:scale-105 transition-transform duration-200">
                  <Icon className="w-8 h-8 text-amber-200" aria-hidden="true" />
                  <span className="absolute -top-2 -right-2 flex items-center justify-center w-7 h-7 bg-amber-600 text-white text-xs font-bold rounded-full border-2 border-white">
                    {number}
                  </span>
                </div>
                <h3 className="font-bold text-[#2B1D16] text-base mb-2">{title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed max-w-xs">{description}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
