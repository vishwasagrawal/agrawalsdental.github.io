'use client'

import { useState, FormEvent } from 'react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'

interface ContactForm {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

const initialForm: ContactForm = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
}

const contactCards = [
  {
    icon: Phone,
    title: 'Call Us',
    primary: '+91 98765 43210',
    secondary: '+91 20 4567 8901',
    href: 'tel:+919876543210',
    bg: 'bg-blue-600',
    description: 'Mon–Sat 9AM–8PM · Sun 10AM–2PM',
  },
  {
    icon: Mail,
    title: 'Email Us',
    primary: 'hello@agrawalsdental.com',
    secondary: 'appointments@agrawalsdental.com',
    href: 'mailto:hello@agrawalsdental.com',
    bg: 'bg-teal-600',
    description: 'We reply within 2–4 hours',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    primary: '123, Dental Square',
    secondary: 'MG Road, Pune – 411001',
    href: 'https://maps.google.com/?q=MG+Road+Pune',
    bg: 'bg-purple-600',
    description: 'Parking available',
  },
]

export default function ContactPage() {
  const [form, setForm] = useState<ContactForm>(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return
    setLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <>
      {/* Page Header */}
      <section className="pt-28 pb-16 bg-gradient-to-br from-blue-900 to-blue-700" aria-labelledby="contact-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-300 font-semibold text-sm uppercase tracking-wider mb-4">Get in Touch</p>
          <h1 id="contact-heading" className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-blue-100 text-lg leading-relaxed">
            Questions? We&apos;re always happy to help. Reach us by phone, email, or just come by — we&apos;re open 7 days a
            week.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 bg-white" aria-labelledby="contact-cards-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="contact-cards-heading" className="sr-only">Contact methods</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {contactCards.map(({ icon: Icon, title, primary, secondary, href, bg, description }) => (
              <a
                key={title}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all overflow-hidden"
              >
                <div className={`${bg} p-6 flex items-center gap-4`}>
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center" aria-hidden="true">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-bold text-lg">{title}</h3>
                </div>
                <div className="p-6">
                  <p className="font-semibold text-gray-900 text-sm">{primary}</p>
                  <p className="text-gray-500 text-sm mt-1">{secondary}</p>
                  <p className="text-gray-400 text-xs mt-3">{description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Map + Form */}
      <section className="py-16 bg-gray-50" aria-labelledby="map-form-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="map-form-heading" className="sr-only">Map and contact form</h2>
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Google Maps embed */}
            <div className="rounded-3xl overflow-hidden shadow-sm border border-gray-100 h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.196022578695!2d73.8434588!3d18.5196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c07f4e8c6f0f%3A0x4a5e0c6d3a6b5c6e!2sMG%20Road%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dr Agrawal's Dental Clinic location on Google Maps"
              />
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-8" role="status" aria-live="polite">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-5">
                    <CheckCircle className="w-8 h-8 text-green-500" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-500 text-sm mb-6">
                    Thank you for reaching out. We&apos;ll get back to you within a few hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm(initialForm) }}
                    className="text-blue-600 font-semibold text-sm hover:text-blue-700"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-gray-900 mb-8">Send a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-2">
                          Your Name <span className="text-red-500" aria-hidden="true">*</span>
                        </label>
                        <input
                          id="contact-name"
                          name="name"
                          type="text"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="Full name"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 hover:border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone
                        </label>
                        <input
                          id="contact-phone"
                          name="phone"
                          type="tel"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="Mobile number"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 hover:border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email <span className="text-red-500" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 hover:border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject
                      </label>
                      <input
                        id="contact-subject"
                        name="subject"
                        type="text"
                        value={form.subject}
                        onChange={handleChange}
                        placeholder="e.g. Appointment inquiry"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 hover:border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message <span className="text-red-500" aria-hidden="true">*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        required
                        placeholder="How can we help you?"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 hover:border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-colors disabled:opacity-70 disabled:cursor-not-allowed shadow-md"
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25" />
                            <path d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" fill="currentColor" className="opacity-75" />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" aria-hidden="true" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Opening Hours */}
      <section className="py-16 bg-white" aria-labelledby="hours-heading">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 id="hours-heading" className="text-2xl font-bold text-gray-900">Opening Hours</h2>
          </div>
          <div className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100">
            {[
              { day: 'Monday', hours: '9:00 AM – 8:00 PM', open: true },
              { day: 'Tuesday', hours: '9:00 AM – 8:00 PM', open: true },
              { day: 'Wednesday', hours: '9:00 AM – 8:00 PM', open: true },
              { day: 'Thursday', hours: '9:00 AM – 8:00 PM', open: true },
              { day: 'Friday', hours: '9:00 AM – 8:00 PM', open: true },
              { day: 'Saturday', hours: '9:00 AM – 8:00 PM', open: true },
              { day: 'Sunday', hours: '10:00 AM – 2:00 PM', open: true },
            ].map(({ day, hours, open }, i) => (
              <div
                key={day}
                className={`flex items-center justify-between px-6 py-4 ${
                  i !== 6 ? 'border-b border-gray-100' : ''
                }`}
              >
                <span className="font-medium text-gray-900 text-sm">{day}</span>
                <div className="flex items-center gap-3">
                  <span className="text-gray-600 text-sm">{hours}</span>
                  <span
                    className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                      open ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'
                    }`}
                  >
                    {open ? 'Open' : 'Closed'}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-sm mt-4">
            * Emergency appointments available outside hours. Call{' '}
            <a href="tel:+919876543210" className="text-blue-500">
              +91 98765 43210
            </a>
          </p>
        </div>
      </section>
    </>
  )
}
