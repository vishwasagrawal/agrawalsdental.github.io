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
  MapPin,
  ThumbsUp,
} from 'lucide-react'
import { services } from '@/data/services'
import { testimonials } from '@/data/testimonials'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Dr Agrawal's Dental Clinic & Implant Centre | Hinganghat",
  description:
    "Dr Agrawal's Dental Clinic & Implant Centre, Hinganghat — expert dental care by Dr Rimisha G. Tibdewal & Dr Gaurav S. Tibdewal. Implants, root canals, cosmetic dentistry & more.",
}

const iconMap: Record<string, React.ElementType> = {
  Star, Layers, Stethoscope, Sparkles, Shield, LayoutGrid,
  Scissors, Droplets, Activity, Heart, Wrench, Zap, Pencil, Gem, Scan,
}

const stats = [
  { value: '5000+', label: 'Patients Treated', icon: Users },
  { value: '15+', label: 'Years of Practice', icon: Award },
  { value: '15+', label: 'Treatments Available', icon: Stethoscope },
  { value: '98%', label: 'Patient Satisfaction', icon: ThumbsUp },
]

const whyUs = [
  'Painless procedures using advanced local anaesthetics',
  'Open 7 days a week including Sundays',
  'Dedicated paediatric care for children of all ages',
  'Transparent pricing — no hidden charges, ever',
  'ISO-certified sterilisation and infection control',
  'Digital X-rays with up to 90% less radiation',
]

export default function HomePage() {
  const featuredServices = services.slice(0, 6)
  const featuredTestimonials = testimonials.slice(0, 3)

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section
        className="relative bg-[#0b2545] pt-32 pb-24"
        aria-labelledby="hero-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left */}
            <div>
              <h1 id="hero-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Dr Agrawal&apos;s<br />
                <span className="text-blue-400">Dental Clinic</span><br />
                &amp; Implant Centre
              </h1>
              <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-lg">
                Comprehensive dental and implant care delivered with clinical precision
                and genuine compassion — for every member of your family.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link
                  href="/appointment"
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-7 py-3.5 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  <CalendarCheck className="w-5 h-5" aria-hidden="true" />
                  Book Appointment
                </Link>
                <a
                  href="tel:+919130084891"
                  className="inline-flex items-center justify-center gap-2 border border-slate-500 text-slate-200 px-7 py-3.5 rounded-lg font-semibold hover:border-slate-300 hover:text-white transition-colors"
                >
                  <Phone className="w-5 h-5" aria-hidden="true" />
                  +91 9130084891
                </a>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-3 text-slate-400 text-sm">
                {['Free First Consultation', 'Open 7 Days a Week', 'Same-day Emergency Care'].map((item) => (
                  <span key={item} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" aria-hidden="true" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — Clinic info card */}
            <div className="hidden lg:block">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-6">
                <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest">Our Doctors</p>
                {[
                  {
                    initials: 'RT',
                    name: 'Dr. Rimisha G. Tibdewal',
                    degree: 'BDS',
                    specialty: 'Cosmetic & Paediatric Dentistry',
                    color: 'bg-teal-600',
                  },
                  {
                    initials: 'GT',
                    name: 'Dr. Gaurav S. Tibdewal',
                    degree: 'BDS, MDS',
                    specialty: 'Implantology, Root Canal & Oral Surgery',
                    color: 'bg-blue-600',
                  },
                ].map(({ initials, name, degree, specialty, color }) => (
                  <div key={name} className="flex items-center gap-4">
                    <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <span className="text-white font-bold text-sm">{initials}</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">{name}</p>
                      <p className="text-slate-400 text-xs">{degree} · {specialty}</p>
                    </div>
                  </div>
                ))}
                <hr className="border-white/10" />
                <div className="flex items-start gap-3 text-slate-400 text-sm">
                  <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Ram Mandir Ward, Main Road, Subhash Chawk, Hinganghat – 442301</span>
                </div>
                <div className="flex items-center gap-3 text-slate-400 text-sm">
                  <Clock className="w-4 h-4 text-blue-400 flex-shrink-0" aria-hidden="true" />
                  <span>Mon–Sat: 9 AM–8 PM &nbsp;|&nbsp; Sun: 10 AM–2 PM</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────────────── */}
      <section className="bg-blue-600" aria-label="Clinic statistics">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-blue-500">
            {stats.map(({ value, label, icon: Icon }) => (
              <div key={label} className="py-8 px-6 text-center">
                <Icon className="w-5 h-5 text-blue-200 mx-auto mb-2" aria-hidden="true" />
                <p className="text-3xl font-bold text-white">{value}</p>
                <p className="text-blue-200 text-sm mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────────── */}
      <section className="py-20 md:py-24 bg-white" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-2">Treatments</p>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <h2 id="services-heading" className="text-3xl md:text-4xl font-bold text-gray-900">
                Our Dental Services
              </h2>
              <Link href="/services" className="inline-flex items-center gap-1 text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors whitespace-nowrap">
                View all 15 services <ChevronRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredServices.map((service) => {
              const Icon = iconMap[service.icon] || Sparkles
              return (
                <div
                  key={service.id}
                  className="border border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-md transition-all group"
                >
                  <div className={`w-11 h-11 ${service.iconBg} rounded-lg flex items-center justify-center mb-4`} aria-hidden="true">
                    <Icon className={`w-5 h-5 ${service.colorClass}`} />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-1.5">{service.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.description}</p>
                  <div className="flex items-center justify-between text-xs text-gray-400 pt-4 border-t border-gray-100">
                    <span className="font-medium text-blue-600">{service.price}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" aria-hidden="true" />
                      {service.duration}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ────────────────────────────────────────── */}
      <section className="py-20 md:py-24 bg-gray-50" aria-labelledby="why-us-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>
              <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-2">Why Choose Us</p>
              <h2 id="why-us-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
                Dentistry Held to the Highest Standards
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                We combine clinical expertise with a patient-centred approach to deliver outcomes
                that are safe, effective, and lasting — for patients of every age.
              </p>
              <ul className="space-y-3">
                {whyUs.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link href="/about" className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors">
                  About our clinic <ChevronRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Feature tiles */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Zap, title: 'Digital X-Rays', desc: 'Up to 90% less radiation with instant high-resolution imaging.', color: 'text-blue-600', bg: 'bg-blue-50' },
                { icon: Shield, title: 'ISO Sterilisation', desc: 'Certified protocols ensuring the highest infection control standards.', color: 'text-green-700', bg: 'bg-green-50' },
                { icon: Heart, title: 'Patient Comfort', desc: 'Calm environment, painless techniques, and attentive clinical care.', color: 'text-rose-600', bg: 'bg-rose-50' },
                { icon: Award, title: 'Qualified Team', desc: 'BDS & MDS credentialled doctors with continuous professional training.', color: 'text-purple-600', bg: 'bg-purple-50' },
              ].map(({ icon: Icon, title, desc, color, bg }) => (
                <div key={title} className="bg-white border border-gray-200 rounded-xl p-5">
                  <div className={`w-10 h-10 ${bg} rounded-lg flex items-center justify-center mb-3`} aria-hidden="true">
                    <Icon className={`w-5 h-5 ${color}`} />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">{title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── Doctors ──────────────────────────────────────────────── */}
      <section className="py-20 md:py-24 bg-white" aria-labelledby="doctors-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-2">Our Team</p>
            <h2 id="doctors-heading" className="text-3xl md:text-4xl font-bold text-gray-900">
              Meet Your Doctors
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
            {[
              {
                initials: 'RT',
                name: 'Dr. Rimisha G. Tibdewal',
                degree: 'BDS',
                specialty: 'Cosmetic & Paediatric Dentistry',
                bio: 'Specialising in smile design, cosmetic dentistry, and child-friendly care. She brings an artistic eye and a calm, reassuring approach that patients of all ages appreciate.',
                specs: ['Cosmetic Dentistry', 'Paediatrics', 'Veneers & Crowns', 'Teeth Whitening'],
                accent: 'border-teal-500',
                badge: 'bg-teal-50 text-teal-700',
              },
              {
                initials: 'GT',
                name: 'Dr. Gaurav S. Tibdewal',
                degree: 'BDS, MDS',
                specialty: 'Implantology, Root Canal & Oral Surgery',
                bio: 'An experienced dental surgeon with precision expertise in implantology, root canal treatments, oral surgery, and full-mouth rehabilitation. Known for meticulous technique and minimal post-operative discomfort.',
                specs: ['Dental Implants', 'Root Canal Treatment', 'Oral Surgery', 'Bone Grafting', 'Extractions'],
                accent: 'border-blue-500',
                badge: 'bg-blue-50 text-blue-700',
              },
            ].map(({ initials, name, degree, specialty, bio, specs, accent, badge }) => (
              <div key={name} className={`border-t-4 ${accent} border border-gray-200 rounded-xl p-7`}>
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-gray-700 font-bold text-lg">{initials}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg leading-tight">{name}</h3>
                    <p className="text-gray-500 text-sm">{degree}</p>
                    <span className={`inline-block mt-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-full ${badge}`}>
                      {specialty}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{bio}</p>
                <div className="flex flex-wrap gap-2">
                  {specs.map((s) => (
                    <span key={s} className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link href="/about" className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors">
              Full team profiles <ChevronRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────────── */}
      <section className="py-20 md:py-24 bg-gray-50" aria-labelledby="testimonials-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-2">Patient Feedback</p>
            <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-bold text-gray-900">
              What Our Patients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {featuredTestimonials.map((t) => (
              <div key={t.id} className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="flex mb-4" aria-label={`${t.rating} out of 5 stars`}>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" aria-hidden="true" />
                  ))}
                </div>
                <Quote className="w-6 h-6 text-gray-200 mb-3 float-right" aria-hidden="true" />
                <p className="text-gray-600 text-sm leading-relaxed mb-5 clear-right">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className={`w-9 h-9 ${t.avatarColor} rounded-full flex items-center justify-center flex-shrink-0`} aria-hidden="true">
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
      <section className="py-16 bg-[#0b2545]" aria-labelledby="cta-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <h2 id="cta-heading" className="text-2xl md:text-3xl font-bold text-white mb-2">
                Ready to Book Your Appointment?
              </h2>
              <p className="text-slate-400">
                Free first consultation · Open 7 days · Hinganghat&apos;s trusted dental centre
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <Link
                href="/appointment"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-7 py-3.5 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                <CalendarCheck className="w-5 h-5" aria-hidden="true" />
                Book Appointment
              </Link>
              <a
                href="tel:+919130084891"
                className="inline-flex items-center justify-center gap-2 border border-slate-500 text-slate-200 px-7 py-3.5 rounded-lg font-semibold hover:border-slate-300 hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                +91 9130084891
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
