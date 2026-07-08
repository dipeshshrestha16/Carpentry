import { useState, useEffect } from 'react'
import { ArrowRight, X } from 'lucide-react'
import logo from '../assets/logo.png'

export default function TopBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Re-show if they haven't dismissed during this browser session
    const dismissed = sessionStorage.getItem('bigroos-banner-dismissed')
    if (!dismissed) setVisible(true)
  }, [])

  const dismiss = () => {
    setVisible(false)
    sessionStorage.setItem('bigroos-banner-dismissed', '1')
  }

  if (!visible) return null

  return (
    <div
      style={{ backgroundColor: '#0C1C2C' }}
      className="relative w-full border-b border-white/10"
      role="banner"
      aria-label="Built by Bigroos Tech Australia"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 gap-3">

          {/* Left — logo + brand name */}
          <a
            href="https://bigroostech.com.au"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 shrink-0 group"
            aria-label="Visit Bigroos Tech Australia"
          >
            <img
              src={logo}
              alt="Bigroos Tech"
              className="w-7 h-7 rounded-md object-cover"
            />
            <span className="text-white/50 text-sm font-medium hidden sm:block leading-none">
              Built by
            </span>
            <span
              className="text-sm font-bold tracking-wide leading-none group-hover:underline"
              style={{ color: '#00BFBF' }}
            >
              Bigroos Tech Australia
            </span>
          </a>

          {/* Centre — tagline (hides on small screens) */}
          <p className="hidden md:block text-white/45 text-sm text-center leading-none">
            We build professional websites for Australian trade &amp; service businesses.
          </p>

          {/* Right — CTA */}
          <div className="flex items-center shrink-0">
            <a
              href="https://bigroostech.com.au"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-full border transition-all duration-200 hover:scale-[1.04] whitespace-nowrap"
              style={{
                color: '#00BFBF',
                borderColor: 'rgba(0,191,191,0.35)',
                backgroundColor: 'rgba(0,191,191,0.08)',
              }}
            >
              <span className="hidden sm:inline">Want a site like this?</span>
              <span className="sm:hidden">Explore more</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>

        </div>
      </div>

      {/* Dismiss — pinned to the far-right edge of the viewport, beside the scrollbar */}
      <button
        onClick={dismiss}
        aria-label="Dismiss banner"
        className="absolute right-1 top-1/2 -translate-y-1/2 flex items-center justify-center w-7 h-7 rounded-full text-white/30 hover:text-white/70 hover:bg-white/10 transition-colors duration-150"
      >
        <X className="w-3.5 h-3.5" aria-hidden="true" />
      </button>
    </div>
  )
}
