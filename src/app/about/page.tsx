import Link from 'next/link'
import {
  CheckCircle,
  Award,
  GraduationCap,
  Calendar,
  ChevronRight,
  Star,
  Heart,
  Users,
  Stethoscope,
} from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    "Learn about Dr Agrawal's Dental Clinic — our story, our team, and our commitment to exceptional dental care in Pune.",
}

const qualifications = [
  { year: '2005', title: 'BDS', institution: 'Bharati Vidyapeeth Dental College, Pune' },
  { year: '2009', title: 'MDS – Prosthodontics', institution: 'Nair Hospital Dental College, Mumbai' },
  { year: '2011', title: 'Fellowship in Implantology', institution: 'Indian Prosthodontic Society' },
  { year: '2015', title: 'Advanced Smile Design Course', institution: 'LVIF, Las Vegas (USA)' },
  { year: '2019', title: 'Digital Dentistry Certification', institution: 'Sirona Academy, Germany' },
]

const certifications = [
  { title: 'Indian Dental Association', subtitle: 'Member since 2005', icon: '🏅' },
  { title: 'ISO 9001:2015 Certified', subtitle: 'Sterilisation & Quality', icon: '✅' },
  { title: 'Indian Prosthodontic Society', subtitle: 'Life Member', icon: '🦷' },
  { title: 'Academy of Osseointegration', subtitle: 'Member', icon: '🌟' },
  { title: 'Digital Smile Design', subtitle: 'Certified Practitioner', icon: '💡' },
  { title: 'NABH Accredited', subtitle: 'National Standards', icon: '🏥' },
]

const clinicValues = [
  {
    icon: Heart,
    title: 'Patient-First Care',
    description: 'Every decision is made with the patient\'s health, comfort, and budget in mind.',
  },
  {
    icon: Star,
    title: 'Clinical Excellence',
    description: 'We stay current with the latest techniques and technologies through continuous education.',
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
            For over 15 years, Dr Agrawal&apos;s Dental Clinic has been transforming smiles and improving oral health
            with expert care, modern technology, and genuine compassion.
          </p>
        </div>
      </section>

      {/* Doctor Profile */}
      <section className="py-20 md:py-28 bg-white" aria-labelledby="doctor-profile-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Photo placeholder + stats */}
            <div>
              <div className="bg-gradient-to-br from-blue-100 to-teal-100 rounded-3xl aspect-[4/5] max-w-sm mx-auto lg:mx-0 flex flex-col items-center justify-center p-8 shadow-xl">
                <div className="w-40 h-40 bg-gradient-to-br from-blue-400 to-teal-500 rounded-full flex items-center justify-center shadow-2xl mb-6">
                  <span className="text-5xl font-bold text-white">PA</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 text-center">Dr. Priya Agrawal</h2>
                <p className="text-blue-600 text-sm text-center mt-2 mb-6">BDS, MDS (Prosthodontics)</p>
                <div className="grid grid-cols-3 gap-4 w-full">
                  {[
                    { value: '15+', label: 'Years' },
                    { value: '8K+', label: 'Patients' },
                    { value: '12', label: 'Awards' },
                  ].map(({ value, label }) => (
                    <div key={label} className="bg-white rounded-xl p-3 text-center shadow-sm">
                      <p className="text-xl font-bold text-blue-600">{value}</p>
                      <p className="text-xs text-gray-500">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bio */}
            <div>
              <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">Meet the Doctor</p>
              <h2 id="doctor-profile-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Dr. Priya Agrawal
              </h2>
              <div className="prose prose-gray max-w-none space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  Dr. Priya Agrawal is a highly accomplished prosthodontist and cosmetic dentist with over 15 years
                  of clinical experience. After completing her BDS from Bharati Vidyapeeth Dental College, Pune, she
                  pursued her MDS specialisation in Prosthodontics from Nair Hospital Dental College, Mumbai.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Her passion for staying at the forefront of dentistry led her to train internationally — including
                  an Advanced Smile Design course at the Las Vegas Institute for Advanced Dental Studies and Digital
                  Dentistry certification from Sirona Academy in Germany.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Dr. Agrawal has a particular expertise in full-mouth rehabilitation, dental implants, and cosmetic
                  smile transformations. She is known for her gentle touch, thorough explanations, and ability to put
                  even the most anxious patients at ease.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-3">
                {[
                  'Painless treatment approach',
                  'Speaks Hindi, Marathi & English',
                  'Regular international training',
                  'Child-friendly technique',
                ].map((point) => (
                  <div key={point} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    {point}
                  </div>
                ))}
              </div>
              <Link
                href="/appointment"
                className="mt-8 inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
              >
                Book a Consultation
                <ChevronRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications Timeline */}
      <section className="py-20 bg-gray-50" aria-labelledby="qualifications-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">Education & Training</p>
            <h2 id="qualifications-heading" className="text-3xl font-bold text-gray-900">
              Qualifications
            </h2>
          </div>
          <div className="relative">
            {/* Timeline line */}
            <div
              className="absolute left-5 top-0 bottom-0 w-0.5 bg-blue-200"
              aria-hidden="true"
            />
            <div className="space-y-8">
              {qualifications.map((q, i) => (
                <div key={i} className="relative flex gap-6">
                  <div
                    className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-md z-10"
                    aria-hidden="true"
                  >
                    <GraduationCap className="w-5 h-5 text-white" />
                  </div>
                  <div className="bg-white rounded-xl p-5 flex-1 shadow-sm border border-gray-100">
                    <div className="flex items-start justify-between gap-4 mb-1">
                      <h3 className="font-bold text-gray-900">{q.title}</h3>
                      <span className="text-blue-600 text-sm font-semibold whitespace-nowrap">{q.year}</span>
                    </div>
                    <p className="text-gray-500 text-sm">{q.institution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 md:py-28 bg-white" aria-labelledby="values-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">Our Philosophy</p>
            <h2 id="values-heading" className="text-3xl font-bold text-gray-900">
              What We Stand For
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {clinicValues.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="text-center p-8 bg-gray-50 rounded-2xl hover:shadow-md transition-shadow border border-gray-100"
              >
                <div
                  className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-5"
                  aria-hidden="true"
                >
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
      <section className="py-20 bg-blue-50" aria-labelledby="certifications-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">Credentials</p>
            <h2 id="certifications-heading" className="text-3xl font-bold text-gray-900">
              Certifications & Memberships
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {certifications.map(({ title, subtitle, icon }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-5 text-center shadow-sm hover:shadow-md transition-shadow border border-blue-100"
              >
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
            <h2 id="story-heading" className="text-3xl font-bold text-gray-900">
              How We Began
            </h2>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-3xl p-8 md:p-12 border border-blue-100">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Dr Agrawal&apos;s Dental Clinic was founded in 2009 with a simple vision: to provide world-class dental
              care that is accessible, comfortable, and genuinely caring — without the clinical coldness that often
              characterises dental visits.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Starting as a small single-chair practice in Koregaon Park, we have grown into a multi-specialty
              dental centre with the latest digital technologies. Through the years, our commitment has never
              wavered — every patient deserves the best care, delivered with respect and compassion.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, we serve over 8,000 patients from across Pune and beyond, with a team of specialists offering
              comprehensive dental care under one roof. We are proud to be a clinic where families return generation
              after generation — the highest compliment any doctor can receive.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
