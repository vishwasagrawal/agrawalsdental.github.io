import Link from 'next/link'
import { CheckCircle, ChevronRight, Star, Heart, Users } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    "Meet Dr Rimisha Tibdewal & Dr Gaurav Tibdewal at Dr Agrawal's Dental Clinic & Implant Centre, Hinganghat. Learn about our team and our commitment to exceptional dental care.",
}

const doctors = [
  {
    initials: 'RT',
    name: 'Dr. Rimisha Tibdewal',
    degree: 'BDS',
    tagline: 'Cosmetic & Paediatric Dentistry',
    bio: `Dr. Rimisha Tibdewal specialises in cosmetic dentistry, paediatric care, and preventive treatments. She has a natural ability to connect with patients of all ages — particularly children — turning dental visits into positive, confidence-building experiences.`,
    bio2: `Her artistic eye and attention to detail make her the go-to doctor for smile makeovers, veneers, and teeth whitening. She is passionate about helping every patient love their smile.`,
    specs: ['Cosmetic Dentistry', 'Paediatrics', 'Veneers & Crowns', 'Teeth Whitening', 'Bonding & Reshaping'],
    gradient: 'from-teal-400 to-teal-600',
  },
  {
    initials: 'GT',
    name: 'Dr. Gaurav Tibdewal',
    degree: 'BDS, MDS',
    tagline: 'Implantology & Oral Surgery',
    bio: `Dr. Gaurav Tibdewal is a highly skilled dental surgeon with comprehensive expertise in implantology, oral and maxillofacial surgery, and complex restorative treatments. His precise, methodical approach and calm demeanour put patients at ease — even during advanced procedures.`,
    bio2: `He is committed to staying current with the latest advances in implant dentistry and surgical techniques, regularly attending professional development programmes to bring the best outcomes to every patient.`,
    specs: ['Dental Implants', 'Oral Surgery', 'Extractions', 'Bone Grafting', 'Full Mouth Rehabilitation'],
    gradient: 'from-blue-400 to-blue-600',
  },
]

const certifications = [
  { title: 'Indian Dental Association', subtitle: 'Registered Members', icon: '🏅' },
  { title: 'ISO Sterilisation', subtitle: 'Certified Protocols', icon: '✅' },
  { title: 'Implant Specialists', subtitle: 'Advanced Training', icon: '🦷' },
  { title: 'Paediatric Dentistry', subtitle: 'Child-Friendly Care', icon: '👶' },
  { title: 'Cosmetic Dentistry', subtitle: 'Smile Design', icon: '💡' },
  { title: 'Emergency Care', subtitle: 'Same-Day Available', icon: '🏥' },
]

const clinicValues = [
  {
    icon: Heart,
    title: 'Patient-First Care',
    description: "Every decision is made with the patient's health, comfort, and budget in mind.",
  },
  {
    icon: Star,
    title: 'Clinical Excellence',
    description: 'We stay current with the latest techniques through continuous professional development.',
  },
  {
    icon: Users,
    title: 'Family-Friendly',
    description: 'We welcome patients of all ages — from toddlers to seniors — with tailored care.',
  },
  {
    icon: CheckCircle,
    title: 'Ethical Practice',
    description: 'Transparent treatment plans, fair pricing, and only necessary treatments — always.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-28 pb-16 bg-gradient-to-br from-blue-900 to-blue-700" aria-labelledby="about-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-300 font-semibold text-sm uppercase tracking-wider mb-4">About Us</p>
          <h1 id="about-heading" className="text-4xl md:text-5xl font-bold text-white mb-6">
            Dedicated to Your Dental Health
          </h1>
          <p className="text-blue-100 text-lg leading-relaxed">
            Dr Agrawal&apos;s Dental Clinic &amp; Implant Centre, Hinganghat — two dedicated doctors, one shared
            mission: bringing world-class dental care to every patient with skill and compassion.
          </p>
        </div>
      </section>

      {/* Doctor Profiles */}
      <section className="py-20 md:py-28 bg-white" aria-labelledby="doctors-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">Our Team</p>
            <h2 id="doctors-heading" className="text-3xl md:text-4xl font-bold text-gray-900">
              Meet Our Doctors
            </h2>
          </div>

          <div className="space-y-16">
            {doctors.map(({ initials, name, degree, tagline, bio, bio2, specs, gradient }, idx) => (
              <div
                key={name}
                className={`grid lg:grid-cols-2 gap-12 items-center ${idx % 2 === 0 ? '' : 'lg:grid-flow-dense'}`}
              >
                {/* Avatar card */}
                <div className={idx % 2 === 0 ? '' : 'lg:col-start-2'}>
                  <div className={`bg-gradient-to-br ${gradient} rounded-3xl p-10 flex flex-col items-center text-center shadow-xl max-w-sm mx-auto`}>
                    <div className="w-28 h-28 bg-white/20 rounded-full flex items-center justify-center shadow-2xl mb-5">
                      <span className="text-white font-bold text-4xl">{initials}</span>
                    </div>
                    <h3 className="text-white font-bold text-xl mb-1">{name}</h3>
                    <p className="text-white/80 text-sm mb-1">{degree}</p>
                    <p className="text-white/70 text-xs mb-5">{tagline}</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {specs.map((s) => (
                        <span key={s} className="bg-white/20 text-white text-xs px-3 py-1 rounded-full">{s}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bio */}
                <div className={idx % 2 === 0 ? '' : 'lg:col-start-1 lg:row-start-1'}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{name}</h3>
                  <p className="text-blue-600 font-semibold text-sm mb-5">{degree} · {tagline}</p>
                  <p className="text-gray-600 leading-relaxed mb-4">{bio}</p>
                  <p className="text-gray-600 leading-relaxed mb-6">{bio2}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {specs.map((spec) => (
                      <div key={spec} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" aria-hidden="true" />
                        {spec}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/appointment"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
            >
              Book a Consultation
              <ChevronRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50" aria-labelledby="values-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">Our Philosophy</p>
            <h2 id="values-heading" className="text-3xl font-bold text-gray-900">What We Stand For</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {clinicValues.map(({ icon: Icon, title, description }) => (
              <div key={title} className="text-center p-8 bg-white rounded-2xl hover:shadow-md transition-shadow border border-gray-100">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-5" aria-hidden="true">
                  <Icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-blue-50" aria-labelledby="certs-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">Credentials</p>
            <h2 id="certs-heading" className="text-3xl font-bold text-gray-900">
              Certifications &amp; Memberships
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {certifications.map(({ title, subtitle, icon }) => (
              <div key={title} className="bg-white rounded-2xl p-5 text-center shadow-sm hover:shadow-md transition-shadow border border-blue-100">
                <div className="text-3xl mb-3" aria-hidden="true">{icon}</div>
                <h3 className="font-semibold text-gray-900 text-xs mb-1">{title}</h3>
                <p className="text-gray-400 text-xs">{subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinic Story */}
      <section className="py-20 md:py-28 bg-white" aria-labelledby="story-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">Our Story</p>
            <h2 id="story-heading" className="text-3xl font-bold text-gray-900">How We Began</h2>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-3xl p-8 md:p-12 border border-blue-100">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Dr Agrawal&apos;s Dental Clinic &amp; Implant Centre was established with a single, clear vision: to bring
              comprehensive, high-quality dental care to the people of Hinganghat and the surrounding region —
              care that is accessible, comfortable, and genuinely compassionate.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Located at Ram Mandir Ward, Main Road, Subhash Chawk, Hinganghat, our clinic is equipped with
              modern dental technology including digital X-rays, an implant surgery suite, and ISO-certified
              sterilisation protocols to ensure the highest standards of safety and precision.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, Dr Rimisha Tibdewal and Dr Gaurav Tibdewal together offer the full spectrum of dental
              services — from routine check-ups and children&apos;s dentistry to complex implant surgeries and smile
              transformations. Our patients are our community, and we are proud to serve them.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
