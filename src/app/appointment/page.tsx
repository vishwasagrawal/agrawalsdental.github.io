'use client'

import { useState, FormEvent } from 'react'
import { CalendarCheck, Phone, Mail, Clock, CheckCircle, MapPin } from 'lucide-react'
import { treatmentTypes } from '@/data/services'

interface FormData {
  name: string
  phone: string
  email: string
  date: string
  treatment: string
  message: string
}

const initialForm: FormData = {
  name: '',
  phone: '',
  email: '',
  date: '',
  treatment: '',
  message: '',
}

const clinicInfo: {
  icon: React.ElementType
  title: string
  lines: string[]
  href: string | null
  iconBg: string
  iconColor: string
}[] = [
  {
    icon: Phone,
    title: 'Call Us',
    lines: ['+91 9130084891'],
    href: 'tel:+919130084891',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
  },
  {
    icon: Mail,
    title: 'Email Us',
    lines: ['hello@agrawalsdental.com', 'appointments@agrawalsdental.com'],
    href: 'mailto:hello@agrawalsdental.com',
    iconBg: 'bg-teal-100',
    iconColor: 'text-teal-600',
  },
  {
    icon: MapPin,
    title: 'Find Us',
    lines: ['Ram Mandir Ward, Main Road', 'Subhash Chawk, Hinganghat – 442301'],
    href: 'https://maps.app.goo.gl/h7N5fr6zULoJ76GA9',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
  },
  {
    icon: Clock,
    title: 'Opening Hours',
    lines: ['Mon–Sat: 9:00 AM – 8:00 PM', 'Sunday: 10:00 AM – 2:00 PM'],
    href: null,
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
  },
]

// Extracted validators reduce cognitive complexity of the validate() function
const isValidPhone = (phone: string) => /^[6-9]\d{9}$/.test(phone.replaceAll(' ', ''))
const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

export default function AppointmentPage() {
  const [form, setForm] = useState<FormData>(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<Partial<FormData>>({})

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {}
    if (!form.name.trim()) newErrors.name = 'Name is required'
    if (!form.phone.trim() || !isValidPhone(form.phone))
      newErrors.phone = 'Enter a valid 10-digit mobile number'
    if (!form.email.trim() || !isValidEmail(form.email))
      newErrors.email = 'Enter a valid email address'
    if (!form.date) newErrors.date = 'Please select a date'
    if (!form.treatment) newErrors.treatment = 'Please select a treatment'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setLoading(true)
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: `New Appointment Request – ${form.treatment}`,
          from_name: form.name,
          reply_to: form.email,
          'Patient Name': form.name,
          'Phone': form.phone,
          'Email': form.email,
          'Preferred Date': form.date,
          'Treatment': form.treatment,
          'Notes': form.message || 'None',
        }),
      })
      const data = await res.json()
      if (!data.success) throw new Error(data.message)
      setSubmitted(true)
    } catch {
      setErrors({ message: 'Something went wrong. Please call us directly.' })
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  // Min date = today
  const today = new Date().toISOString().split('T')[0]

  return (
    <>
      {/* Page Header */}
      <section className="pt-28 pb-16 bg-gradient-to-br from-blue-900 to-blue-700" aria-labelledby="appt-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-300 font-semibold text-sm uppercase tracking-wider mb-4">Book Now</p>
          <h1 id="appt-heading" className="text-4xl md:text-5xl font-bold text-white mb-6">
            Schedule Your Appointment
          </h1>
          <p className="text-blue-100 text-lg leading-relaxed">
            Fill in the form below and we&apos;ll confirm your appointment within 2 hours. Free first consultation!
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20 bg-gray-50" aria-labelledby="booking-form-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Sidebar info */}
            <div className="space-y-5">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h2>
              {clinicInfo.map(({ icon: Icon, title, lines, href, iconBg, iconColor }) => {
                const inner = (
                  <>
                    <div
                      className={`w-11 h-11 ${iconBg} rounded-xl flex items-center justify-center flex-shrink-0`}
                      aria-hidden="true"
                    >
                      <Icon className={`w-5 h-5 ${iconColor}`} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm mb-1">{title}</p>
                      {lines.map((line) => (
                        <p key={line} className="text-gray-500 text-sm">{line}</p>
                      ))}
                    </div>
                  </>
                )
                const sharedClass =
                  'flex items-start gap-4 bg-white rounded-2xl p-5 shadow-sm border border-gray-100'
                return href ? (
                  <a
                    key={title}
                    href={href}
                    className={`${sharedClass} hover:shadow-md transition-shadow`}
                  >
                    {inner}
                  </a>
                ) : (
                  <div key={title} className={sharedClass}>
                    {inner}
                  </div>
                )
              })}
            </div>

            {/* Booking Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                /* Success state */
                <div
                  className="bg-white rounded-3xl p-12 shadow-sm border border-gray-100 text-center flex flex-col items-center"
                  role="status"
                  aria-live="polite"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10 text-green-500" aria-hidden="true" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">Appointment Request Received!</h2>
                  <p className="text-gray-500 mb-2">
                    Thank you, <strong>{form.name}</strong>! We&apos;ve received your appointment request for{' '}
                    <strong>{form.treatment}</strong> on <strong>{form.date}</strong>.
                  </p>
                  <p className="text-gray-500 mb-8">
                    Our team will call you on <strong>{form.phone}</strong> within the next 2 hours to confirm.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <button
                      onClick={() => { setSubmitted(false); setForm(initialForm) }}
                      className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
                    >
                      Book Another Appointment
                    </button>
                    <a
                      href="tel:+919130084891"
                      className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors"
                    >
                      <Phone className="w-4 h-4" aria-hidden="true" />
                      Call Us
                    </a>
                  </div>
                </div>
              ) : (
                /* Form */
                <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100">
                  <h2 id="booking-form-heading" className="text-2xl font-bold text-gray-900 mb-8">
                    Book Your Appointment
                  </h2>
                  <form onSubmit={handleSubmit} noValidate className="space-y-6">
                    {/* Name + Phone */}
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name <span className="text-red-500" aria-hidden="true">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          value={form.name}
                          onChange={handleChange}
                          autoComplete="name"
                          placeholder="e.g. Rahul Sharma"
                          className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                            errors.name ? 'border-red-400 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                          }`}
                          aria-describedby={errors.name ? 'name-error' : undefined}
                          aria-required="true"
                        />
                        {errors.name && (
                          <p id="name-error" className="mt-1.5 text-xs text-red-500" role="alert">{errors.name}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number <span className="text-red-500" aria-hidden="true">*</span>
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={form.phone}
                          onChange={handleChange}
                          autoComplete="tel"
                          placeholder="10-digit mobile number"
                          className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                            errors.phone ? 'border-red-400 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                          }`}
                          aria-describedby={errors.phone ? 'phone-error' : undefined}
                          aria-required="true"
                        />
                        {errors.phone && (
                          <p id="phone-error" className="mt-1.5 text-xs text-red-500" role="alert">{errors.phone}</p>
                        )}
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address <span className="text-red-500" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        autoComplete="email"
                        placeholder="you@example.com"
                        className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                          errors.email ? 'border-red-400 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                        }`}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                        aria-required="true"
                      />
                      {errors.email && (
                        <p id="email-error" className="mt-1.5 text-xs text-red-500" role="alert">{errors.email}</p>
                      )}
                    </div>

                    {/* Date + Treatment */}
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                          Preferred Date <span className="text-red-500" aria-hidden="true">*</span>
                        </label>
                        <input
                          id="date"
                          name="date"
                          type="date"
                          value={form.date}
                          onChange={handleChange}
                          min={today}
                          className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                            errors.date ? 'border-red-400 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                          }`}
                          aria-describedby={errors.date ? 'date-error' : undefined}
                          aria-required="true"
                        />
                        {errors.date && (
                          <p id="date-error" className="mt-1.5 text-xs text-red-500" role="alert">{errors.date}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="treatment" className="block text-sm font-medium text-gray-700 mb-2">
                          Treatment Type <span className="text-red-500" aria-hidden="true">*</span>
                        </label>
                        <select
                          id="treatment"
                          name="treatment"
                          value={form.treatment}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white ${
                            errors.treatment ? 'border-red-400 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                          }`}
                          aria-describedby={errors.treatment ? 'treatment-error' : undefined}
                          aria-required="true"
                        >
                          <option value="">Select a treatment</option>
                          <option value="General Consultation">General Consultation (Free)</option>
                          {treatmentTypes.map((t) => (
                            <option key={t} value={t}>
                              {t}
                            </option>
                          ))}
                          <option value="Emergency Care">Emergency Care</option>
                          <option value="Other">Other</option>
                        </select>
                        {errors.treatment && (
                          <p id="treatment-error" className="mt-1.5 text-xs text-red-500" role="alert">{errors.treatment}</p>
                        )}
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Additional Notes <span className="text-gray-400 text-xs font-normal">(optional)</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Describe your symptoms or any questions you have..."
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 hover:border-gray-300 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                      />
                    </div>

                    {errors.message && (
                      <p className="text-sm text-red-500 text-center" role="alert">{errors.message}</p>
                    )}

                    <p className="text-xs text-gray-400">
                      {'By submitting, you agree to our '}
                      <button type="button" className="text-blue-500 underline hover:text-blue-600">
                        Privacy Policy
                      </button>
                      {'. Your information is kept strictly confidential.'}
                    </p>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-blue-700 transition-colors disabled:opacity-70 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
                    >
                      {loading ? (
                        <>
                          <svg
                            className="animate-spin w-5 h-5"
                            viewBox="0 0 24 24"
                            fill="none"
                            aria-hidden="true"
                          >
                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25" />
                            <path
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                              fill="currentColor"
                              className="opacity-75"
                            />
                          </svg>
                          Submitting...
                        </>
                      ) : (
                        <>
                          <CalendarCheck className="w-5 h-5" aria-hidden="true" />
                          Confirm Appointment
                        </>
                      )}
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
