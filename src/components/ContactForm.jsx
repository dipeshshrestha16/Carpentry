import { useState } from 'react'
import { Phone, Mail, Clock, MapPin, CheckCircle } from 'lucide-react'
import useScrollAnimation from '../hooks/useScrollAnimation'

const serviceOptions = [
  'Custom Furniture',
  'Furniture Repair',
  'Door Repair & Installation',
  'Cabinet Making',
  'Wardrobe Installation',
  'Kitchen Carpentry',
  'Shelving & Storage',
  'Office Carpentry',
  'Other / Not Sure',
]

const radioOptions = [
  { id: 'project-home',   label: 'Home / Residential',  value: 'Home / Residential' },
  { id: 'project-office', label: 'Office / Commercial',  value: 'Office / Commercial' },
]

function validate(form) {
  const errors = {}
  if (!form.name.trim())  errors.name  = 'Full name is required.'
  if (!form.phone.trim()) errors.phone = 'Phone number is required.'
  if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email address.'
  }
  return errors
}

export default function ContactForm() {
  const [headingRef, headingVisible] = useScrollAnimation()
  const [formRef,    formVisible]    = useScrollAnimation(0.05)

  const [form, setForm] = useState({
    name: '', phone: '', email: '', service: '',
    projectType: '', date: '', message: '',
  })
  const [errors,    setErrors]    = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    // Clear field error as user corrects it
    if (errors[name]) setErrors((prev) => { const n = { ...prev }; delete n[name]; return n })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate(form)
    if (Object.keys(errs).length) {
      setErrors(errs)
      // Move focus to the first invalid field so screen readers announce it
      const firstKey = Object.keys(errs)[0]
      document.getElementById(firstKey)?.focus()
      return
    }
    setErrors({})
    setSubmitted(true)
  }

  const inputBase =
    'w-full border-[1.5px] border-amber-200 rounded-xl px-4 py-3 text-sm text-[#2B1D16] bg-white placeholder-stone-400 focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-600/25 transition min-h-[44px]'

  const inputError = 'border-red-500 focus:border-red-500 focus:ring-red-400/25'

  const labelClass = 'block text-sm font-semibold text-[#2B1D16] mb-1.5'

  return (
    <section id="contact" className="w-full bg-stone-50 py-20 lg:py-24">
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
            Get Your Free Quote
          </h2>
          <p className="text-stone-500 text-base sm:text-lg max-w-xl mx-auto">
            Fill out the form and we&apos;ll get back to you within a few hours to discuss your project.
          </p>
        </div>

        <div
          ref={formRef}
          className={`flex flex-col lg:flex-row gap-10 lg:gap-12 items-start fade-up ${formVisible ? 'visible' : ''}`}
        >
          {/* ── Form panel ────────────────────────────── */}
          <div className="w-full lg:w-7/12 bg-white rounded-2xl shadow-sm border border-stone-100 p-6 sm:p-8">

            {/* ARIA live region — announces success / error count to screen readers */}
            <div
              id="form-status"
              role="status"
              aria-live="polite"
              aria-atomic="true"
              className="sr-only"
            >
              {submitted && 'Your request has been sent. We will be in touch shortly.'}
              {!submitted && Object.keys(errors).length > 0 &&
                `${Object.keys(errors).length} error${Object.keys(errors).length > 1 ? 's' : ''} found. Please correct the highlighted fields.`}
            </div>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <CheckCircle className="w-14 h-14 text-green-600 mb-4" aria-hidden="true" />
                <h3 className="text-xl font-bold text-[#2B1D16] mb-2">
                  Thanks! We&apos;ll be in touch shortly.
                </h3>
                <p className="text-stone-600 text-sm max-w-sm">
                  We&apos;ll review your request and contact you within a few hours to discuss your
                  project and arrange a visit.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                method="post"
                noValidate
                aria-label="Free quote request form"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">

                  {/* Full Name */}
                  <div>
                    <label htmlFor="name" className={labelClass}>
                      Full Name <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Your full name"
                      className={`${inputBase} ${errors.name ? inputError : ''}`}
                      value={form.name}
                      onChange={handleChange}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && (
                      <span id="name-error" role="alert" className="text-red-600 text-xs mt-1 block">
                        {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className={labelClass}>
                      Phone Number <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      placeholder="Your phone number"
                      className={`${inputBase} ${errors.phone ? inputError : ''}`}
                      value={form.phone}
                      onChange={handleChange}
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? 'phone-error' : undefined}
                    />
                    {errors.phone && (
                      <span id="phone-error" role="alert" className="text-red-600 text-xs mt-1 block">
                        {errors.phone}
                      </span>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className={labelClass}>
                      Email Address <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="your@email.com"
                      className={`${inputBase} ${errors.email ? inputError : ''}`}
                      value={form.email}
                      onChange={handleChange}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && (
                      <span id="email-error" role="alert" className="text-red-600 text-xs mt-1 block">
                        {errors.email}
                      </span>
                    )}
                  </div>

                  {/* Service */}
                  <div>
                    <label htmlFor="service" className={labelClass}>Service Needed</label>
                    <select
                      id="service"
                      name="service"
                      className={inputBase}
                      value={form.service}
                      onChange={handleChange}
                    >
                      <option value="">Select a service...</option>
                      {serviceOptions.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Project Type — radio with correct unique IDs */}
                <div className="mb-5">
                  <fieldset>
                    <legend className={labelClass}>Project Type</legend>
                    <div className="flex gap-6">
                      {radioOptions.map(({ id, label, value }) => (
                        <label
                          key={id}
                          htmlFor={id}
                          className="flex items-center gap-2 cursor-pointer text-sm text-stone-700"
                        >
                          <input
                            type="radio"
                            id={id}
                            name="projectType"
                            value={value}
                            checked={form.projectType === value}
                            onChange={handleChange}
                            className="w-4 h-4 accent-amber-700"
                          />
                          {label}
                        </label>
                      ))}
                    </div>
                  </fieldset>
                </div>

                {/* Preferred Date */}
                <div className="mb-5">
                  <label htmlFor="date" className={labelClass}>Preferred Date</label>
                  <input
                    id="date"
                    name="date"
                    type="date"
                    className={inputBase}
                    value={form.date}
                    onChange={handleChange}
                  />
                </div>

                {/* Message */}
                <div className="mb-6">
                  <label htmlFor="message" className={labelClass}>Message / Project Description</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Describe your project — dimensions, materials, any specific requirements..."
                    className={`${inputBase} min-h-[unset] resize-none`}
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>

                {/* Submit — rounded-full to match global CTA style */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-6 py-4 bg-amber-700 hover:bg-amber-800 text-white font-semibold text-base rounded-full transition-colors duration-150 min-h-[52px] shadow-md hover:shadow-lg"
                >
                  Send My Request
                </button>
              </form>
            )}
          </div>

          {/* ── Contact details panel ─────────────────── */}
          <div className="w-full lg:w-5/12">
            <div className="bg-white rounded-2xl shadow-sm border-l-4 border-l-[#5C4033] border border-stone-100 p-6 sm:p-8">
              <h3
                className="text-xl font-bold text-[#2B1D16] mb-6"
                style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
              >
                Contact Details
              </h3>

              <ul className="flex flex-col gap-5 mb-6">
                <li className="flex items-start gap-4">
                  <span className="flex items-center justify-center w-10 h-10 bg-amber-100 rounded-full flex-shrink-0">
                    <Phone className="w-5 h-5 text-amber-700" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs text-stone-500 font-medium mb-0.5">Phone</p>
                    <a
                      href="tel:"
                      className="text-lg font-bold text-[#5C4033] hover:text-amber-700 transition-colors"
                      aria-label="Call us"
                    >
                      Telephone Number
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <span className="flex items-center justify-center w-10 h-10 bg-amber-100 rounded-full flex-shrink-0">
                    <Mail className="w-5 h-5 text-amber-700" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs text-stone-500 font-medium mb-0.5">Email</p>
                    <a
                      href="mailto:reachout@bigroostech.com"
                      className="text-sm font-semibold text-[#5C4033] hover:text-amber-700 transition-colors"
                    >
                      reachout@bigroostech.com
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <span className="flex items-center justify-center w-10 h-10 bg-amber-100 rounded-full flex-shrink-0">
                    <Clock className="w-5 h-5 text-amber-700" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs text-stone-500 font-medium mb-0.5">Hours</p>
                    <p className="text-sm font-semibold text-[#2B1D16]">Mon–Sat: 8am–6pm</p>
                    <p className="text-xs text-stone-500">Emergency callouts available</p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <span className="flex items-center justify-center w-10 h-10 bg-amber-100 rounded-full flex-shrink-0">
                    <MapPin className="w-5 h-5 text-amber-700" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs text-stone-500 font-medium mb-0.5">Address</p>
                    <p className="text-sm font-semibold text-[#2B1D16]">12 Timber Lane</p>
                    <p className="text-xs text-stone-500">Your City, Your State</p>
                  </div>
                </li>
              </ul>

              {/* Real OpenStreetMap embed — replaces the placehold.co prototype signal */}
              <div className="rounded-xl overflow-hidden border border-stone-200">
                <iframe
                  title="CraftWood Co. service area map"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-122.4390%2C37.7440%2C-122.3950%2C37.7640&layer=mapnik"
                  width="400"
                  height="200"
                  style={{ border: 0, width: '100%', display: 'block' }}
                  loading="lazy"
                  aria-label="Map showing the CraftWood Co. service area"
                />
              </div>
              <p className="text-xs text-stone-400 mt-1.5 text-right">
                <a
                  href="https://www.openstreetmap.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  © OpenStreetMap contributors
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
