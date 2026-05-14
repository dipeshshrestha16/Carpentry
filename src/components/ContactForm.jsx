import { useState } from 'react'
import { Phone, Mail, Clock, MapPin, CheckCircle } from 'lucide-react'

const services = [
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

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    projectType: '',
    date: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputClass =
    'w-full border border-stone-200 rounded-xl px-4 py-3 text-sm text-[#2B1D16] bg-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition min-h-[44px]'

  const labelClass = 'block text-sm font-semibold text-[#2B1D16] mb-1.5'

  return (
    <section id="contact" className="w-full bg-stone-50 py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
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

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-start">
          {/* Form */}
          <div className="w-full lg:w-7/12 bg-white rounded-2xl shadow-sm border border-stone-100 p-6 sm:p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <CheckCircle className="w-14 h-14 text-green-600 mb-4" aria-hidden="true" />
                <h3 className="text-xl font-bold text-[#2B1D16] mb-2">
                  Thanks! We&apos;ll be in touch shortly.
                </h3>
                <p className="text-stone-600 text-sm max-w-sm">
                  We&apos;ll review your request and contact you within a few hours to discuss your project and arrange a visit.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate aria-label="Free quote request form">
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
                      className={inputClass}
                      value={form.name}
                      onChange={handleChange}
                    />
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
                      className={inputClass}
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className={labelClass}>Email Address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="your@email.com"
                      className={inputClass}
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <label htmlFor="service" className={labelClass}>Service Needed</label>
                    <select
                      id="service"
                      name="service"
                      className={inputClass}
                      value={form.service}
                      onChange={handleChange}
                    >
                      <option value="">Select a service...</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Project Type */}
                <div className="mb-5">
                  <fieldset>
                    <legend className={labelClass}>Project Type</legend>
                    <div className="flex gap-6">
                      {['Home / Residential', 'Office / Commercial'].map((type) => (
                        <label key={type} className="flex items-center gap-2 cursor-pointer text-sm text-stone-700">
                          <input
                            type="radio"
                            name="projectType"
                            value={type}
                            checked={form.projectType === type}
                            onChange={handleChange}
                            className="w-4 h-4 accent-amber-700"
                          />
                          {type}
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
                    className={inputClass}
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
                    className={`${inputClass} min-h-[unset] resize-none`}
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-6 py-4 bg-amber-700 hover:bg-amber-800 text-white font-semibold text-base rounded-xl transition-colors duration-150 min-h-[52px]"
                >
                  Send My Request
                </button>
              </form>
            )}
          </div>

          {/* Contact details panel */}
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
                      href="tel:+15559876543"
                      className="text-lg font-bold text-[#5C4033] hover:text-amber-700 transition-colors"
                      aria-label="Call us at (555) 987-6543"
                    >
                      (555) 987-6543
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
                      href="mailto:hello@craftwoodco.com"
                      className="text-sm font-semibold text-[#5C4033] hover:text-amber-700 transition-colors"
                    >
                      hello@craftwoodco.com
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

              {/* Map placeholder */}
              <div className="rounded-xl overflow-hidden border border-stone-100">
                <img
                  src="https://placehold.co/400x200/d6b896/5C4033?text=Map+Location"
                  alt="Map showing the location of CraftWood Co. at 12 Timber Lane"
                  className="w-full h-auto object-cover block"
                  width="400"
                  height="200"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
