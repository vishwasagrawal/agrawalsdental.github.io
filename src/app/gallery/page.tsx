'use client'

import { useState } from 'react'
import Link from 'next/link'
import { CalendarCheck } from 'lucide-react'

type FilterType = 'all' | 'before-after' | 'clinic'

interface GalleryItem {
  id: number
  title: string
  category: FilterType | 'before-after' | 'clinic'
  description: string
  gradient: string
  badge?: string
}

const galleryItems: GalleryItem[] = [
  // Before/After items
  {
    id: 1,
    title: 'Smile Makeover',
    category: 'before-after',
    description: 'Complete smile transformation with veneers & whitening',
    gradient: 'from-blue-400 to-teal-500',
    badge: 'Veneers',
  },
  {
    id: 2,
    title: 'Teeth Whitening',
    category: 'before-after',
    description: '6 shades brighter in a single in-office session',
    gradient: 'from-purple-400 to-pink-500',
    badge: 'Whitening',
  },
  {
    id: 3,
    title: 'Aligner Treatment',
    category: 'before-after',
    description: 'Perfectly aligned smile after 14 months of clear aligners',
    gradient: 'from-teal-400 to-blue-500',
    badge: 'Aligners',
  },
  {
    id: 4,
    title: 'Implant Restoration',
    category: 'before-after',
    description: 'Single tooth implant — natural-looking and permanent',
    gradient: 'from-orange-400 to-red-400',
    badge: 'Implants',
  },
  {
    id: 5,
    title: 'Full Mouth Rehab',
    category: 'before-after',
    description: 'Complete oral rehabilitation over 6 months',
    gradient: 'from-green-400 to-teal-600',
    badge: 'Rehab',
  },
  {
    id: 6,
    title: 'Crown Placement',
    category: 'before-after',
    description: 'Ceramic crown perfectly matching natural teeth',
    gradient: 'from-blue-500 to-indigo-600',
    badge: 'Crown',
  },
  // Clinic items
  {
    id: 7,
    title: 'Reception Area',
    category: 'clinic',
    description: 'Modern, welcoming reception with comfortable seating',
    gradient: 'from-slate-400 to-blue-500',
  },
  {
    id: 8,
    title: 'Treatment Room',
    category: 'clinic',
    description: 'Fully equipped with digital X-ray & 3D scanner',
    gradient: 'from-blue-400 to-cyan-500',
  },
  {
    id: 9,
    title: 'Sterilisation Suite',
    category: 'clinic',
    description: 'ISO-certified sterilisation protocols for your safety',
    gradient: 'from-teal-400 to-green-500',
  },
  {
    id: 10,
    title: 'Digital X-Ray Room',
    category: 'clinic',
    description: 'State-of-the-art digital radiography with low radiation',
    gradient: 'from-violet-400 to-purple-600',
  },
  {
    id: 11,
    title: 'Consultation Room',
    category: 'clinic',
    description: 'Private consultation space with treatment planning screens',
    gradient: 'from-amber-400 to-orange-500',
  },
  {
    id: 12,
    title: 'Kids Corner',
    category: 'clinic',
    description: 'Fun, child-friendly waiting area to ease dental anxiety',
    gradient: 'from-pink-400 to-rose-500',
  },
]

const filters: { label: string; value: FilterType | 'all' }[] = [
  { label: 'All', value: 'all' },
  { label: 'Before & After', value: 'before-after' },
  { label: 'Our Clinic', value: 'clinic' },
]

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType | 'all'>('all')

  const filtered =
    activeFilter === 'all' ? galleryItems : galleryItems.filter((item) => item.category === activeFilter)

  return (
    <>
      {/* Page Header */}
      <section className="pt-28 pb-16 bg-gradient-to-br from-blue-900 to-teal-700" aria-labelledby="gallery-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-300 font-semibold text-sm uppercase tracking-wider mb-4">Visual Stories</p>
          <h1 id="gallery-heading" className="text-4xl md:text-5xl font-bold text-white mb-6">
            Gallery
          </h1>
          <p className="text-blue-100 text-lg leading-relaxed">
            Real results from our patients and a peek inside our modern, welcoming clinic.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white" aria-labelledby="gallery-grid-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Tabs */}
          <div className="flex justify-center mb-12" role="tablist" aria-label="Gallery filter">
            <div className="bg-gray-100 rounded-full p-1 flex gap-1">
              {filters.map(({ label, value }) => (
                <button
                  key={value}
                  onClick={() => setActiveFilter(value)}
                  role="tab"
                  aria-selected={activeFilter === value}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                    activeFilter === value
                      ? 'bg-white text-blue-600 shadow-md'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <h2 id="gallery-grid-heading" className="sr-only">
            Gallery images
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100"
              >
                {item.category === 'before-after' ? (
                  /* Before/After split card */
                  <div className="relative h-56 flex">
                    <div className={`flex-1 bg-gradient-to-br ${item.gradient} opacity-60 flex items-end p-3`}>
                      <span className="text-white text-xs font-bold bg-black/30 rounded px-2 py-0.5">Before</span>
                    </div>
                    <div className="w-0.5 bg-white z-10" aria-hidden="true" />
                    <div className={`flex-1 bg-gradient-to-br ${item.gradient} flex items-end p-3`}>
                      <span className="text-white text-xs font-bold bg-black/30 rounded px-2 py-0.5">After</span>
                    </div>
                    {/* Center label */}
                    <div
                      className="absolute inset-0 flex items-center justify-center pointer-events-none"
                      aria-hidden="true"
                    >
                      <div className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                        <span className="text-gray-400 text-xs font-bold">↔</span>
                      </div>
                    </div>
                    {item.badge && (
                      <span className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </div>
                ) : (
                  /* Clinic image */
                  <div className={`h-56 bg-gradient-to-br ${item.gradient} relative`}>
                    <div className="absolute inset-0 flex items-center justify-center opacity-20" aria-hidden="true">
                      <svg viewBox="0 0 80 80" className="w-24 h-24 fill-white">
                        <rect x="10" y="10" width="60" height="45" rx="4" />
                        <path d="M25 55 L40 70 L55 55" />
                        <circle cx="40" cy="33" r="12" fill="none" stroke="white" strokeWidth="3" />
                      </svg>
                    </div>
                    <div
                      className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded-full"
                      aria-hidden="true"
                    >
                      Clinic
                    </div>
                  </div>
                )}
                {/* Card info */}
                <div className="p-5 bg-white">
                  <h3 className="font-bold text-gray-900 text-sm mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-xs">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-400 text-lg">No images in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-50" aria-labelledby="gallery-cta-heading">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="gallery-cta-heading" className="text-2xl font-bold text-gray-900 mb-4">
            Your Transformation Story Starts Here
          </h2>
          <p className="text-gray-500 mb-8">Book a consultation and let us design your smile.</p>
          <Link
            href="/appointment"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-colors shadow-md"
          >
            <CalendarCheck className="w-5 h-5" aria-hidden="true" />
            Book Your Appointment
          </Link>
        </div>
      </section>
    </>
  )
}
