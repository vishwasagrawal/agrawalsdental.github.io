import Link from 'next/link'
import {
  Star,
  Layers,
  Stethoscope,
  Sparkles,
  Shield,
  LayoutGrid,
  Scissors,
  Droplets,
  Activity,
  Heart,
  Wrench,
  Zap,
  Pencil,
  Gem,
  Scan,
  Phone,
  Award,
  Users,
  CheckCircle,
  ChevronRight,
  Quote,
  CalendarCheck,
  Clock,
  ArrowRight,
  ThumbsUp,
} from 'lucide-react'
import { services } from '@/data/services'
import { testimonials } from '@/data/testimonials'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Dr Agrawal's Dental Clinic & Implant Centre | Hinganghat",
  description:
    "Dr Agrawal's Dental Clinic & Implant Centre, Hinganghat — expert dental care by Dr Rimisha Tibdewal & Dr Gaurav Tibdewal. Implants, root canals, cosmetic dentistry & more.",
}

const iconMap: Record<string, React.ElementType> = {
  Star, Layers, Stethoscope, Sparkles, Shield, LayoutGrid,
  Scissors, Droplets, Activity, Heart, Wrench, Zap, Pencil, Gem, Scan,
}

const stats = [
  { value: '5000+', label: 'Happy Patients', icon: Users },
  { value: '15+', label: 'Years of Excellence', icon: Award },
  { value: '15+', label: 'Dental Treatments', icon: Stethoscope },
  { value: '98%', label: 'Patient Satisfaction', icon: ThumbsUp },
]

const process = [
  {
    step: '01',
    title: 'Book Appointment',
    description: 'Call us or fill the online form — free first consultation for all new patients.',
    icon: CalendarCheck,
    color: 'bg-blue-600',
  },
  {
    step: '02',
    title: 'Diagnosis & Plan',
    description: 'Digital X-rays, thorough examination, and a clear, transparent treatment plan.',
    icon: Scan,
    color: 'bg-teal-600',
  },
  {
    step: '03',
    title: 'Transform & Smile',
    description: 'Receive world-class dental treatment and leave with a confident, healthy smile.',
    icon: Sparkles,
    color: 'bg-purple-600',
  },
]

const highlights = [
  {
    icon: Zap,
    title: 'Advanced Technology',
    description: 'Digital X-rays, implant surgery suite, and modern sterilisation for safe, precise treatments.',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    icon: Award,
    title: 'Expert Doctors',
    description: 'Dr Rimisha & Dr Gaurav Tibdewal bring specialised expertise across all dental disciplines.',
    color: 'text-purple-600',
    bg: 'bg-purple-50',
  },
  {
    icon: Heart,
    title: 'Gentle & Caring',
    description: 'We treat every patient like family — especially those who are nervous about dental visits.',
    color: 'text-rose-500',
    bg: 'bg-rose-50',
  },
  {
    icon: CheckCircle,
    title: 'Affordable Care',
    description: 'Transparent pricing and best quality treatments at fair, accessible prices.',
    color: 'text-green-600',
    bg: 'bg-green-50',
  },
]

const doctors = [
  {
    initials: 'RT',
    name: 'Dr. Rimisha Tibdewal',
    degree: 'BDS',
    specialty: 'Cosmetic & Paediatric Dentistry',
    bio: 'A passionate clinician with an artistic eye, specialising in smile design, cosmetic dentistry, and child-friendly care. She makes every visit a positive experience.',
    specs: ['Cosmetic Dentistry', 'Paediatrics', 'Veneers & Crowns', 'Teeth Whitening'],
    gradient: 'from-teal-400 to-cyan-500',
    bg: 'from-teal-900/40 to-cyan-900/20',
  },
  {
    initials: 'GT',
    name: 'Dr. Gaurav Tibdewal',
    degree: 'BDS, MDS',
    specialty: 'Implantology & Oral Surgery',
    bio: 'A highly skilled dental surgeon with precision expertise in implantology, maxillofacial surgery, and complex restorative treatments. Known for calm, pain-free procedures.',
    specs: ['Dental Implants', 'Oral Surgery', 'Bone Grafting', 'Extractions'],
    gradient: 'from-blue-400 to-indigo-500',
    bg: 'from-blue-900/40 to-indigo-900/20',
  },
]

export default function HomePage() {
  const featuredServices = services.slice(0, 6)
  const featuredTestimonials = testimonials.slice(0, 3)

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-950 via-blue-900 to-teal-800 overflow-hidden"
        aria-labelledby="hero-heading"
      >
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-teal-500/10 rounded-full blur-3xl" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl" aria-hidden="true" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left: Content */}
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" aria-hidden="true" />
                <span className="text-sm font-medium text-white/90">Dr Agrawal&apos;s Dental Clinic &amp; Implant Centre</span>
              </div>

              <h1 id="hero-heading" className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
                Smile with
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-cyan-200 to-blue-200">
                  Confidence
                </span>
                <span className="block text-3xl md:text-4xl font-medium text-white/70 mt-2">
                  Every Single Day.
                </span>
              </h1>

              <p className="text-lg text-blue-100/90 mb-8 leading-relaxed max-w-lg">
                Hinganghat&apos;s trusted dental &amp; implant centre — delivering painless, precise, and
                compassionate care for every member of your family.
              </p>

              <div className="flex items-center gap-3 mb-10">
                <div className="flex" aria-label="5 star rating">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" aria-hidden="true" />
                  ))}
                </div>
                <span className="text-white/80 text-sm font-medium">5.0 on Google · Trusted by thousands</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  href="/appointment"
                  className="inline-flex items-center justify-center gap-2 bg-white text-blue-800 px-8 py-4 rounded-full font-bold text-base hover:bg-blue-50 transition-all shadow-2xl hover:-translate-y-0.5"
                >
                  <CalendarCheck className="w-5 h-5" aria-hidden="true" />
                  Book Free Consultation
                </Link>
                <a
                  href="tel:+919130084891"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-white/10 hover:border-white/60 transition-all"
                >
                  <Phone className="w-5 h-5" aria-hidden="true" />
                  +91 9130084891
                </a>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: '🦷', text: 'Pain-Free Treatments' },
                  { icon: '🏅', text: 'BDS / MDS Qualified' },
                  { icon: '✅', text: 'ISO Sterilisation' },
                  { icon: '🚨', text: 'Same-day Emergency' },
                ].map(({ icon, text }) => (
                  <div key={text} className="flex items-center gap-2 text-sm text-blue-100">
                    <span aria-hidden="true">{icon}</span>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Tooth illustration with floating cards */}
            <div className="hidden lg:flex justify-center items-center relative h-[420px]">
              {/* Glow ring */}
              <div className="absolute w-72 h-72 bg-teal-400/10 rounded-full blur-2xl" aria-hidden="true" />

              {/* Tooth SVG */}
              <svg viewBox="0 0 200 220" className="w-56 h-56 drop-shadow-2xl relative z-10" aria-hidden="true">
                <defs>
                  <radialGradient id="toothGlow" cx="50%" cy="38%" r="55%">
                    <stop offset="0%" stopColor="white" stopOpacity="0.95" />
                    <stop offset="100%" stopColor="#bae6fd" stopOpacity="0.75" />
                  </radialGradient>
                  <radialGradient id="rootGrad" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#e0f2fe" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#7dd3fc" stopOpacity="0.6" />
                  </radialGradient>
                </defs>
                <path
                  d="M35 35 Q15 20 18 50 Q20 80 28 105 Q38 130 50 155 Q62 178 72 192 Q82 205 100 210 Q118 205 128 192 Q138 178 150 155 Q162 130 172 105 Q180 80 182 50 Q185 20 165 35 Q148 48 130 42 Q116 36 100 35 Q84 36 70 42 Q52 48 35 35Z"
                  fill="url(#toothGlow)"
                  stroke="rgba(255,255,255,0.25)"
                  strokeWidth="1.5"
                />
                <path d="M55 52 Q50 72 52 97 Q54 117 58 132" stroke="rgba(255,255,255,0.45)" strokeWidth="5" strokeLinecap="round" fill="none" />
                <path d="M70 44 Q65 57 67 77" stroke="rgba(255,255,255,0.25)" strokeWidth="3" strokeLinecap="round" fill="none" />
                <path d="M72 198 Q68 212 65 228" stroke="url(#rootGrad)" strokeWidth="9" strokeLinecap="round" fill="none" />
                <path d="M100 210 Q100 220 100 230" stroke="url(#rootGrad)" strokeWidth="9" strokeLinecap="round" fill="none" />
                <path d="M128 198 Q132 212 135 228" stroke="url(#rootGrad)" strokeWidth="9" strokeLinecap="round" fill="none" />
                <path d="M58 92 Q100 84 142 92" stroke="rgba(100,180,255,0.2)" strokeWidth="1.5" fill="none" />
                <path d="M54 112 Q100 104 146 112" stroke="rgba(100,180,255,0.15)" strokeWidth="1.5" fill="none" />
              </svg>

              {/* Floating cards */}
              <div className="absolute top-4 right-4 bg-white rounded-2xl px-4 py-3 shadow-2xl flex items-center gap-3 z-20">
                <div className="w-9 h-9 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-blue-600" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900">Dental Implants</p>
                  <p className="text-xs text-gray-400">Lifetime durability</p>
                </div>
              </div>

              <div className="absolute top-1/3 -left-4 bg-white rounded-2xl px-4 py-3 shadow-2xl flex items-center gap-3 z-20">
                <div className="w-9 h-9 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-5 h-5 text-teal-600" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900">Smile Makeover</p>
                  <p className="text-xs text-gray-400">1–3 sessions</p>
                </div>
              </div>

              <div className="absolute bottom-12 left-0 bg-white rounded-2xl px-4 py-3 shadow-2xl flex items-center gap-3 z-20">
                <div className="w-9 h-9 bg-yellow-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900">Teeth Whitening</p>
                  <p className="text-xs text-gray-400">Up to 8 shades</p>
                </div>
              </div>

              <div className="absolute bottom-4 right-0 bg-white rounded-2xl px-4 py-3 shadow-2xl flex items-center gap-3 z-20">
                <div className="w-9 h-9 bg-rose-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Heart className="w-5 h-5 text-rose-500 fill-rose-500" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900">Pain-Free Care</p>
                  <p className="text-xs text-gray-400">Modern anaesthesia</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-white">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" />
          </svg>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────────────── */}
      <section className="py-14 bg-white" aria-label="Clinic statistics">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            {stats.map(({ value, label, icon: Icon }) => (
              <div key={label} className="text-center group">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm" aria-hidden="true">
                  <Icon className="w-7 h-7 text-blue-600" />
                </div>
                <p className="text-4xl font-extrabold text-gray-900">{value}</p>
                <p className="text-sm text-gray-500 mt-1 font-medium">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services Preview ─────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">What We Offer</p>
            <h2 id="services-heading" className="text-3xl md:text-4xl font-bold text-gray-900">
              Comprehensive Dental Services
            </h2>
            <p className="text-gray-500 text-lg mt-4 max-w-2xl mx-auto">
              From routine check-ups to full smile makeovers — everything your family needs under one roof.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service) => {
              const Icon = iconMap[service.icon] || Sparkles
              return (
                <div
                  key={service.id}
                  className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group cursor-default"
                >
                  <div className={`w-14 h-14 ${service.iconBg} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`} aria-hidden="true">
                    <Icon className={`w-7 h-7 ${service.colorClass}`} />
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
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              View All 15 Services
              <ChevronRight className="w-5 h-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── How It Works ─────────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-800 relative overflow-hidden" aria-labelledby="process-heading">
        {/* Subtle tooth pattern */}
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            viewBox="0 0 100 120"
            className="absolute fill-white pointer-events-none"
            style={{ width: 80, height: 96, top: `${[10, 60, 20, 70, 40][i]}%`, left: `${[5, 15, 55, 75, 90][i]}%`, opacity: 0.04 }}
            aria-hidden="true"
          >
            <path d="M20 18 Q10 12 10 28 Q10 50 15 65 Q22 80 28 95 Q34 108 40 115 Q46 122 50 122 Q54 122 60 115 Q66 108 72 95 Q78 80 85 65 Q90 50 90 28 Q90 12 80 18 Q68 26 58 22 Q54 18 50 18 Q46 18 42 22 Q32 26 20 18Z" />
          </svg>
        ))}

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-teal-300 font-semibold text-sm uppercase tracking-widest mb-3">Simple Process</p>
            <h2 id="process-heading" className="text-3xl md:text-4xl font-bold text-white">
              Your Journey to a Perfect Smile
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-10 left-[22%] right-[22%] h-px bg-white/15" aria-hidden="true" />
            {process.map(({ step, title, description, icon: Icon, color }) => (
              <div key={step} className="text-center relative">
                <div className="relative inline-block mb-6">
                  <div className={`w-20 h-20 ${color} rounded-2xl flex items-center justify-center shadow-2xl rotate-3 hover:rotate-0 transition-transform mx-auto`} aria-hidden="true">
                    <Icon className="w-9 h-9 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-md">
                    <span className="text-blue-700 text-xs font-extrabold">{step}</span>
                  </div>
                </div>
                <h3 className="text-white font-bold text-xl mb-3">{title}</h3>
                <p className="text-blue-200 text-sm leading-relaxed max-w-xs mx-auto">{description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link
              href="/appointment"
              className="inline-flex items-center gap-2 bg-white text-blue-800 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-all shadow-xl hover:-translate-y-0.5"
            >
              <CalendarCheck className="w-5 h-5" aria-hidden="true" />
              Start Your Journey
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white" aria-labelledby="why-us-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Why Choose Us</p>
              <h2 id="why-us-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Dentistry That
                <span className="text-blue-600"> Puts You First</span>
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                We believe great dental care is about more than just teeth — it&apos;s about building trust,
                ensuring comfort, and genuinely caring for every patient we see.
              </p>
              <div className="space-y-3">
                {[
                  { icon: '💉', text: 'Painless injections using the latest local anaesthetics' },
                  { icon: '📅', text: 'Flexible hours including Sundays — open 7 days a week' },
                  { icon: '👶', text: 'Children-friendly environment with paediatric specialists' },
                  { icon: '💰', text: 'Transparent pricing with no surprise charges — ever' },
                  { icon: '🛡️', text: 'ISO-certified sterilisation protocols for your safety' },
                ].map(({ icon, text }) => (
                  <div key={text} className="flex items-start gap-4 p-4 rounded-xl hover:bg-blue-50 transition-colors group">
                    <span className="text-xl flex-shrink-0" aria-hidden="true">{icon}</span>
                    <span className="text-gray-700 text-sm font-medium group-hover:text-blue-700 transition-colors">{text}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/about" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all">
                  Learn more about us
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map(({ icon: Icon, title, description, color, bg }) => (
                <div key={title} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-100 group">
                  <div className={`w-12 h-12 ${bg} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`} aria-hidden="true">
                    <Icon className={`w-6 h-6 ${color}`} />
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm mb-2">{title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Meet the Doctors ─────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-slate-900 via-blue-950 to-teal-900 relative overflow-hidden" aria-labelledby="doctors-heading">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-3xl" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-3xl" aria-hidden="true" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-teal-300 font-semibold text-sm uppercase tracking-widest mb-3">Expert Care</p>
            <h2 id="doctors-heading" className="text-3xl md:text-4xl font-bold text-white">
              Meet Your Doctors
            </h2>
            <p className="text-blue-200 mt-4 max-w-xl mx-auto">
              Dr Rimisha Tibdewal (BDS) &amp; Dr Gaurav Tibdewal (BDS, MDS) — bringing specialist-level dental care right here in Hinganghat.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {doctors.map(({ initials, name, degree, specialty, bio, specs, gradient, bg }) => (
              <div key={name} className={`bg-gradient-to-br ${bg} backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-white/25 transition-all group`}>
                <div className="flex items-center gap-5 mb-5">
                  <div className={`w-16 h-16 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-2xl group-hover:scale-105 transition-transform`} aria-hidden="true">
                    <span className="text-white font-bold text-xl">{initials}</span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg leading-tight">{name}</h3>
                    <p className="text-blue-200 text-xs mt-0.5">{degree}</p>
                    <span className={`inline-block mt-1.5 text-xs font-semibold px-3 py-0.5 rounded-full bg-gradient-to-r ${gradient} text-white`}>
                      {specialty}
                    </span>
                  </div>
                </div>
                <p className="text-blue-100 text-sm leading-relaxed mb-5">{bio}</p>
                <div className="flex flex-wrap gap-2">
                  {specs.map((s) => (
                    <span key={s} className="bg-white/10 hover:bg-white/20 text-white text-xs px-3 py-1 rounded-full transition-colors">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/about" className="inline-flex items-center gap-2 border border-white/30 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-all">
              Full Team Profiles
              <ChevronRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-gray-50" aria-labelledby="testimonials-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Patient Stories</p>
            <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-bold text-gray-900">
              What Our Patients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredTestimonials.map((t) => (
              <div key={t.id} className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-100 relative">
                <div className="flex mb-4" aria-label={`${t.rating} out of 5 stars`}>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" aria-hidden="true" />
                  ))}
                </div>
                <Quote className="w-7 h-7 text-blue-100 absolute top-7 right-7" aria-hidden="true" />
                <p className="text-gray-700 text-sm leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className={`w-10 h-10 ${t.avatarColor} rounded-full flex items-center justify-center flex-shrink-0`} aria-hidden="true">
                    <span className="text-white text-xs font-bold">{t.initials}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                    <p className="text-blue-600 text-xs">{t.treatment}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-teal-600" aria-labelledby="cta-heading">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-400/10 rounded-full blur-3xl" aria-hidden="true" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-white/15 rounded-2xl flex items-center justify-center mx-auto mb-6" aria-hidden="true">
            <svg viewBox="0 0 40 48" className="w-8 h-8 fill-white">
              <path d="M8 8 Q4 4 4 10 Q4 18 6 24 Q9 31 12 37 Q15 42 17 45 Q18.5 47.5 20 47.5 Q21.5 47.5 23 45 Q25 42 28 37 Q31 31 34 24 Q36 18 36 10 Q36 4 32 8 Q27 12 23 10 Q21.5 8.5 20 8.5 Q18.5 8.5 17 10 Q13 12 8 8Z" />
            </svg>
          </div>
          <h2 id="cta-heading" className="text-3xl md:text-5xl font-bold text-white mb-4">
            Ready for Your
            <span className="block text-teal-200">Best Smile?</span>
          </h2>
          <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Book your free consultation today. Open 7 days a week — because your smile shouldn&apos;t wait.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/appointment"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-2xl hover:-translate-y-0.5"
            >
              <CalendarCheck className="w-5 h-5" aria-hidden="true" />
              Book Free Consultation
            </Link>
            <a
              href="tel:+919130084891"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 hover:border-white/70 transition-all"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              +91 9130084891
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-blue-100 text-sm">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-teal-300" aria-hidden="true" />
              No waiting time
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-teal-300" aria-hidden="true" />
              Free first consultation
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-teal-300" aria-hidden="true" />
              Open Sundays
            </span>
          </div>
        </div>
      </section>
    </>
  )
}
