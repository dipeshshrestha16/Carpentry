import { useState } from 'react'
import { Hammer, Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#why-us' },
  { label: 'Projects', href: '#projects' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'Service Areas', href: '#service-areas' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className="sticky top-0 z-50 w-full bg-stone-50 border-b border-stone-200"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2 flex-shrink-0"
            aria-label="CraftWood Co. home"
          >
            <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#5C4033]">
              <Hammer className="w-5 h-5 text-amber-200" aria-hidden="true" />
            </span>
            <span className="font-bold text-lg text-[#5C4033] tracking-tight" style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}>
              CraftWood Co.
            </span>
          </a>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2 text-sm font-medium text-stone-600 hover:text-[#5C4033] hover:bg-amber-50 rounded-lg transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop right side */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+15559876543"
              className="flex items-center gap-1.5 text-sm font-semibold text-[#5C4033] hover:text-amber-700 transition-colors"
              aria-label="Call us at (555) 987-6543"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              (555) 987-6543
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="inline-flex items-center px-5 py-2 bg-amber-700 hover:bg-amber-800 text-white text-sm font-semibold rounded-full transition-colors duration-150 min-h-[44px]"
            >
              Get a Free Quote
            </a>
          </div>

          {/* Mobile: phone + hamburger */}
          <div className="flex lg:hidden items-center gap-3">
            <a
              href="tel:+15559876543"
              className="flex items-center gap-1 text-sm font-semibold text-[#5C4033]"
              aria-label="Call us"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span className="hidden sm:inline">(555) 987-6543</span>
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg text-stone-600 hover:text-[#5C4033] hover:bg-amber-50 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="lg:hidden bg-stone-50 border-t border-stone-200 px-4 py-4">
          <div className="flex flex-col gap-1 mb-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-4 py-3 text-sm font-medium text-stone-700 hover:text-[#5C4033] hover:bg-amber-50 rounded-xl transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="flex items-center justify-center w-full px-5 py-3 bg-amber-700 hover:bg-amber-800 text-white font-semibold rounded-full transition-colors min-h-[44px]"
          >
            Get a Free Quote
          </a>
        </div>
      )}
    </nav>
  )
}
