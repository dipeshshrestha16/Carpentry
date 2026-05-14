import { Hammer, Phone, Mail, MapPin, Clock, Share2, Camera } from 'lucide-react'

const serviceLinks = [
  'Custom Furniture',
  'Furniture Repair',
  'Door Repair & Installation',
  'Cabinet Making',
  'Wardrobe Installation',
  'Kitchen Carpentry',
  'Shelving & Storage',
  'Office Carpentry',
]

const areaLinks = [
  'Riverside', 'Northgate', 'Lakeside', 'Westfield',
  'Hillcrest', 'Parkview', 'Cedar Grove', 'Maplewood',
]

const handleScroll = (href) => {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Footer() {
  return (
    <footer className="w-full bg-[#2B1D16] text-stone-300" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Column 1 — Brand */}
          <div>
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); handleScroll('#home') }}
              className="flex items-center gap-2 mb-4"
              aria-label="CraftWood Co. home"
            >
              <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-amber-700">
                <Hammer className="w-5 h-5 text-white" aria-hidden="true" />
              </span>
              <span className="font-bold text-lg text-white" style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}>
                CraftWood Co.
              </span>
            </a>
            <p className="text-stone-400 text-sm leading-relaxed mb-5">
              Skilled local carpenters delivering quality woodwork, custom furniture, and reliable installations to homes and offices across the area.
            </p>
            <a
              href="tel:+15559876543"
              className="flex items-center gap-2 text-white font-bold text-xl hover:text-amber-400 transition-colors mb-2"
              aria-label="Call us at (555) 987-6543"
            >
              <Phone className="w-5 h-5 text-amber-400" aria-hidden="true" />
              (555) 987-6543
            </a>
            <a
              href="mailto:hello@craftwoodco.com"
              className="flex items-center gap-2 text-stone-400 text-sm hover:text-amber-400 transition-colors"
            >
              <Mail className="w-4 h-4" aria-hidden="true" />
              hello@craftwoodco.com
            </a>
          </div>

          {/* Column 2 — Services */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Services</h3>
            <ul className="flex flex-col gap-2.5">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    onClick={(e) => { e.preventDefault(); handleScroll('#services') }}
                    className="text-stone-400 text-sm hover:text-amber-400 transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Service Areas */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Service Areas</h3>
            <ul className="flex flex-col gap-2.5">
              {areaLinks.map((area) => (
                <li key={area}>
                  <a
                    href="#service-areas"
                    onClick={(e) => { e.preventDefault(); handleScroll('#service-areas') }}
                    className="text-stone-400 text-sm hover:text-amber-400 transition-colors"
                  >
                    {area}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Get in Touch */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Get in Touch</h3>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleScroll('#contact') }}
              className="inline-flex items-center justify-center w-full px-5 py-3 bg-amber-700 hover:bg-amber-800 text-white font-semibold rounded-full transition-colors duration-150 text-sm min-h-[44px] mb-5"
            >
              Get a Free Quote
            </a>

            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2.5 text-stone-400 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-amber-600" aria-hidden="true" />
                <span>12 Timber Lane, Your City</span>
              </li>
              <li className="flex items-start gap-2.5 text-stone-400 text-sm">
                <Clock className="w-4 h-4 flex-shrink-0 mt-0.5 text-amber-600" aria-hidden="true" />
                <span>Mon–Sat: 8am–6pm<br />Emergency callouts available</span>
              </li>
            </ul>

            {/* Social links */}
            <div className="flex gap-3 mt-5">
              <a
                href="#"
                aria-label="CraftWood Co. on Facebook"
                className="flex items-center justify-center w-9 h-9 bg-stone-700 hover:bg-amber-700 rounded-full transition-colors"
              >
                <Share2 className="w-4 h-4 text-stone-300" aria-hidden="true" />
              </a>
              <a
                href="#"
                aria-label="CraftWood Co. on Instagram"
                className="flex items-center justify-center w-9 h-9 bg-stone-700 hover:bg-amber-700 rounded-full transition-colors"
              >
                <Camera className="w-4 h-4 text-stone-300" aria-hidden="true" />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-stone-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-stone-500 text-xs">
            &copy; 2025 CraftWood Co. All rights reserved.
          </p>
          <p className="text-stone-500 text-xs">
            Licensed Carpenter &bull; Your City, Your State
          </p>
        </div>
      </div>
    </footer>
  )
}
