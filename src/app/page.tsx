import Link from 'next/link'
import {
  Sparkles,
  Activity,
  Shield,
  Smile,
  Star,
  Scan,
  Phone,
  Award,
  Users,
  CheckCircle,
  ChevronRight,
  Quote,
  CalendarCheck,
  Clock,
  Stethoscope,
  Heart,
  Zap,
} from 'lucide-react'
import { services } from '@/data/services'
import { testimonials } from '@/data/testimonials'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Dr Agrawal's Dental Clinic | Expert Dental Care in Pune",
  description:
    'Welcome to Dr Agrawal\'s Dental Clinic — 15+ years of trusted dental care. Book your appointment today for teeth cleaning, implants, braces and more.',
}

const iconMap: Record<string, React.ElementType> = {
  Sparkles,
  Activity,
  Shield,
  Smile,
  Star,
  Scan,
}

const stats = [
  { value: '15+', label: 'Years Experience', icon: Award },
  { value: '8,000+', label: 'Happy Patients', icon: Users },
  { value: '20+', label: 'Treatments Offered', icon: Stethoscope },
  { value: '98%', label: 'Patient Satisfaction', icon: Heart },
]

const highlights = [
  {
    icon: Zap,
    title: 'Advanced Technology',
    description: 'Digital X-rays, 3D scanning, and laser dentistry for precise, comfortable treatments.',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    icon: Award,
    title: 'Experienced Team',
    description: '15+ years of expertise across all dental specialties, backed by continuous education.',
    color: 'text-purple-600',
    bg: 'bg-purple-50',
  },
  {
    icon: Heart,
    title: 'Gentle & Caring',
    description: 'We treat every patient like family — especially nervous or anxious patients.',
    color: 'text-red-500',
    bg: 'bg-red-50',
  },
  {
    icon: CheckCircle,
    title: 'Affordable Care',
    description: 'Transparent pricing, EMI options, and the best quality treatments at fair prices.',
    color: 'text-green-600',
    bg: 'bg-green-50',
  },
]

export default function HomePage() {
  const featuredServices = services.slice(0, 6)
  const featuredTestimonials = testimonials.slice(0, 3)

  return (
    <>
      {/* ── Hero Section ────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700 overflow-hidden"
        aria-labelledby="hero-heading"
      >
        {/* Decorative blobs */}
        <div
          className="absolute top-0 right-0 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-0 w-80 h-80 bg-teal-600/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-grid-white/[0.03]" aria-hidden="true" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-0">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text content */}
            <div className="text-white">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" aria-hidden="true" />
                <span className="text-sm font-medium">Rated #1 Dental Clinic in Pune</span>
              </div>

              <h1 id="hero-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Your Smile,
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-blue-200">
                  Our Passion.
                </span>
              </h1>
              <p className="text-lg md:text-xl text-blue-100 mb-10 leading-relaxed max-w-lg">
                Experience world-class dental care at Dr Agrawal&apos;s Clinic — where advanced technology meets
                compassionate care. Over 8,000 happy smiles and counting.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  href="/appointment"
                  className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-full font-bold text-base hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
                >
                  <CalendarCheck className="w-5 h-5" aria-hidden="true" />
                  Book Appointment
                </Link>
                <a
                  href="tel:+919876543210"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-white/10 transition-all backdrop-blur-sm"
                >
                  <Phone className="w-5 h-5" aria-hidden="true" />
                  Call Now
                </a>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-4">
                {['BDS, MDS Certified', 'ISO Sterilization', 'EMI Available', 'Same-day Emergency'].map((badge) => (
                  <div key={badge} className="flex items-center gap-2 text-sm text-blue-100">
                    <CheckCircle className="w-4 h-4 text-teal-300" aria-hidden="true" />
                    <span>{badge}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Hero card */}
            <div className="hidden lg:flex justify-center items-center">
              <div className="relative">
                {/* Main card */}
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 w-80">
                  <div className="text-center mb-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-200 to-teal-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-3xl font-bold text-blue-800">DA</span>
                    </div>
                    <h2 className="text-white font-bold text-xl">Dr. Priya Agrawal</h2>
                    <p className="text-blue-200 text-sm">BDS, MDS (Prosthodontics)</p>
                    <p className="text-blue-300 text-xs mt-1">15+ Years Experience</p>
                  </div>
                  <div className="space-y-3">
                    {['Root Canal Specialist', 'Implantology Expert', 'Cosmetic Dentist', 'Pediatric Care'].map(
                      (spec) => (
                        <div key={spec} className="flex items-center gap-2 bg-white/10 rounded-xl px-3 py-2">
                          <CheckCircle className="w-4 h-4 text-teal-300 flex-shrink-0" aria-hidden="true" />
                          <span className="text-white text-sm">{spec}</span>
                        </div>
                      )
                    )}
                  </div>
                </div>
                {/* Floating stats */}
                <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4 text-center">
                  <p className="text-2xl font-bold text-blue-600">8K+</p>
                  <p className="text-xs text-gray-500">Happy Patients</p>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 text-center">
                  <p className="text-2xl font-bold text-teal-600">98%</p>
                  <p className="text-xs text-gray-500">Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave bottom */}
        <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-white">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" />
          </svg>
        </div>
      </section>

      {/* ── Stats Bar ────────────────────────────────────────────── */}
      <section className="py-12 bg-white" aria-label="Clinic statistics">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(({ value, label, icon: Icon }) => (
              <div key={label} className="text-center group">
                <div
                  className="w-12 h-12 bg-blue-50 rounded-xl mx-auto mb-3 flex items-center justify-center group-hover:bg-blue-100 transition-colors"
                  aria-hidden="true"
                >
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <p className="text-3xl font-bold text-gray-900">{value}</p>
                <p className="text-sm text-gray-500 mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services Preview ─────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-gray-50" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">What We Offer</p>
            <h2 id="services-heading" className="text-3xl md:text-4xl font-bold text-gray-900">
              Comprehensive Dental Services
            </h2>
            <p className="text-gray-500 text-lg mt-4 max-w-2xl mx-auto">
              From routine cleanings to full smile makeovers — we provide every dental service your family needs under
              one roof.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service) => {
              const Icon = iconMap[service.icon] || Sparkles
              return (
                <div
                  key={service.id}
                  className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border border-gray-100 group"
                >
                  <div
                    className={`w-12 h-12 ${service.iconBg} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
                    aria-hidden="true"
                  >
                    <Icon className={`w-6 h-6 ${service.colorClass}`} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">{service.description}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-blue-600 font-semibold text-sm">{service.price}</span>
                    <span className="text-gray-400 text-xs flex items-center gap-1">
                      <Clock className="w-3 h-3" aria-hidden="true" />
                      {service.duration}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
            >
              View All Services
              <ChevronRight className="w-5 h-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white" aria-labelledby="why-us-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text */}
            <div>
              <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">Why Choose Us</p>
              <h2 id="why-us-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Dentistry That Puts
                <span className="text-blue-600"> You First</span>
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                We believe great dental care is about more than just teeth — it&apos;s about building a relationship of
                trust, comfort, and genuine care with every patient we see.
              </p>
              <div className="space-y-5">
                {[
                  'Painless injections using latest anesthetics',
                  'Flexible appointment hours including Sundays',
                  'Children-friendly environment',
                  'Comprehensive treatment planning with transparent costs',
                  'Strict sterilisation protocols (ISO certified)',
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-3.5 h-3.5 text-blue-600" aria-hidden="true" />
                    </div>
                    <span className="text-gray-700 text-sm">{point}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                >
                  Learn more about us
                  <ChevronRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Right: Highlight cards */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map(({ icon: Icon, title, description, color, bg }) => (
                <div
                  key={title}
                  className="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition-shadow border border-gray-100"
                >
                  <div className={`w-10 h-10 ${bg} rounded-xl flex items-center justify-center mb-4`} aria-hidden="true">
                    <Icon className={`w-5 h-5 ${color}`} />
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm mb-2">{title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Doctor Introduction ───────────────────────────────────── */}
      <section
        className="py-20 md:py-28 bg-gradient-to-br from-blue-900 to-teal-800"
        aria-labelledby="doctor-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Doctor card */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-sm">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 text-center">
                  <div className="w-36 h-36 bg-gradient-to-br from-blue-200 to-teal-300 rounded-full mx-auto mb-6 flex items-center justify-center shadow-2xl">
                    <span className="text-5xl font-bold text-blue-800">PA</span>
                  </div>
                  <h3 className="text-white font-bold text-2xl mb-1">Dr. Priya Agrawal</h3>
                  <p className="text-blue-200 text-sm mb-4">BDS (Pune) · MDS Prosthodontics (Mumbai)</p>
                  <div className="flex justify-center gap-3 flex-wrap">
                    {['Implants', 'Root Canal', 'Cosmetic', 'Orthodontics'].map((spec) => (
                      <span key={spec} className="bg-white/20 text-white text-xs px-3 py-1 rounded-full">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bio text */}
            <div className="text-white">
              <p className="text-teal-300 font-semibold text-sm uppercase tracking-wider mb-3">Meet the Doctor</p>
              <h2 id="doctor-heading" className="text-3xl md:text-4xl font-bold mb-6">
                15+ Years of
                <span className="text-teal-300"> Dental Excellence</span>
              </h2>
              <p className="text-blue-100 text-lg leading-relaxed mb-6">
                Dr. Priya Agrawal is a highly qualified prosthodontist with specialisations in dental implants,
                cosmetic dentistry, and advanced restorative treatments. She completed her MDS from Mumbai and has
                trained internationally in implantology and smile design.
              </p>
              <p className="text-blue-200 text-base leading-relaxed mb-8">
                Her patient-first philosophy and gentle approach have earned her a reputation as one of Pune&apos;s
                most trusted dentists. She regularly attends international conferences to bring the latest techniques
                to her practice.
              </p>
              <div className="grid grid-cols-3 gap-6 mb-8">
                {[
                  { value: '15+', label: 'Years Practice' },
                  { value: '8K+', label: 'Patients' },
                  { value: '12+', label: 'Awards' },
                ].map(({ value, label }) => (
                  <div key={label} className="text-center">
                    <p className="text-3xl font-bold text-teal-300">{value}</p>
                    <p className="text-blue-200 text-sm">{label}</p>
                  </div>
                ))}
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-white text-blue-800 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
              >
                Full Profile
                <ChevronRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-gray-50" aria-labelledby="testimonials-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">Patient Stories</p>
            <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-bold text-gray-900">
              What Our Patients Say
            </h2>
            <p className="text-gray-500 text-lg mt-4">Real experiences from real patients — unfiltered and heartfelt.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredTestimonials.map((t) => (
              <div
                key={t.id}
                className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <Quote className="w-8 h-8 text-blue-200 mb-4" aria-hidden="true" />
                <p className="text-gray-600 text-sm leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                  <div
                    className={`w-10 h-10 ${t.avatarColor} rounded-full flex items-center justify-center`}
                    aria-hidden="true"
                  >
                    <span className="text-white text-xs font-bold">{t.initials}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                    <p className="text-blue-600 text-xs">{t.treatment}</p>
                  </div>
                  <div className="flex" aria-label={`${t.rating} out of 5 stars`}>
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" aria-hidden="true" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────────── */}
      <section className="py-20 bg-blue-600" aria-labelledby="cta-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <CalendarCheck className="w-12 h-12 text-blue-200 mx-auto mb-6" aria-hidden="true" />
          <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for a Healthier Smile?
          </h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
            Book your appointment today — consultations are available 7 days a week. First consultation is free for new
            patients!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/appointment"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-all shadow-xl"
            >
              <CalendarCheck className="w-5 h-5" aria-hidden="true" />
              Book Free Consultation
            </Link>
            <a
              href="tel:+919876543210"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/60 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              +91 98765 43210
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
