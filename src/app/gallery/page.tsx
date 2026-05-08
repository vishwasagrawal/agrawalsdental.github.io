'use client'

import { useState } from 'react'
import Link from 'next/link'
import { CalendarCheck } from 'lucide-react'

type FilterType = 'all' | 'before-after' | 'clinic'

interface GalleryItem {
  id: number
  title: string
  category: FilterType
  description: string
  badge?: string
  image?: string
  beforeLabel?: string
  afterLabel?: string
  gradient?: string
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: 'Smile Makeover',
    category: 'before-after',
    description: 'Complete smile transformation with porcelain veneers',
    badge: 'Veneers',
    image: 'https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?w=700&h=400&fit=crop&auto=format',
    beforeLabel: 'Chipped & Stained',
    afterLabel: 'Porcelain Veneers',
  },
  {
    id: 2,
    title: 'Teeth Whitening',
    category: 'before-after',
    description: '6 shades brighter in a single in-clinic session',
    badge: 'Whitening',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=700&h=400&fit=crop&auto=format',
    beforeLabel: 'Yellow & Stained',
    afterLabel: '6 Shades Brighter',
  },
  {
    id: 3,
    title: 'Clear Aligner Treatment',
    category: 'before-after',
    description: 'Perfectly aligned smile after clear aligner therapy',
    badge: 'Aligners',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=700&h=400&fit=crop&auto=format',
    beforeLabel: 'Crowded & Misaligned',
    afterLabel: 'Aligned & Even',
  },
  {
    id: 4,
    title: 'Dental Implant',
    category: 'before-after',
    description: 'Single tooth implant — natural-looking and permanent',
    badge: 'Implants',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=700&h=400&fit=crop&auto=format',
    beforeLabel: 'Missing Tooth & Gap',
    afterLabel: 'Natural Implant Crown',
  },
  {
    id: 5,
    title: 'Full Mouth Rehabilitation',
    category: 'before-after',
    description: 'Complete oral rehabilitation with crowns & implants',
    badge: 'Rehab',
    image: 'https://images.unsplash.com/photo-1445543949571-ffc3e0e2f55e?w=700&h=400&fit=crop&auto=format',
    beforeLabel: 'Worn & Damaged',
    afterLabel: 'Full Restoration',
  },
  {
    id: 6,
    title: 'Crown Placement',
    category: 'before-after',
    description: 'Ceramic crown matching natural teeth perfectly',
    badge: 'Crown',
    image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=700&h=400&fit=crop&auto=format',
    beforeLabel: 'Fractured Tooth',
    afterLabel: 'Ceramic Crown',
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
    description: 'Fully equipped with digital X-ray & modern dental unit',
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

// Per-treatment CSS filters to simulate the "before" condition
const beforeFilters: Record<string, string> = {
  Veneers:   'grayscale(30%) sepia(40%) contrast(0.9) brightness(0.78)',
  Whitening: 'sepia(70%) contrast(0.85) brightness(0.82) saturate(1.2)',
  Aligners:  'grayscale(50%) contrast(1.05) brightness(0.75)',
  Implants:  'grayscale(60%) contrast(1.1) brightness(0.72)',
  Rehab:     'sepia(50%) grayscale(40%) brightness(0.7) contrast(1.1)',
  Crown:     'sepia(30%) grayscale(30%) contrast(1.05) brightness(0.76)',
}

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
            Real results from our treatments and a peek inside our modern clinic.
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

          <h2 id="gallery-grid-heading" className="sr-only">Gallery images</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100"
              >
                {item.category === 'before-after' && item.image ? (
                  /* Real before/after split */
                  <div className="relative h-56 flex overflow-hidden">
                    {/* Before */}
                    <div className="flex-1 relative overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={item.image}
                        alt={`Before ${item.title}`}
                        className="w-full h-full object-cover"
                        style={{ filter: beforeFilters[item.badge ?? ''] ?? 'grayscale(40%) brightness(0.8)' }}
                      />
                      <div className="absolute bottom-0 left-0 right-0 px-3 py-2 bg-gradient-to-t from-black/70 to-transparent">
                        <span className="text-white text-xs font-bold block">Before</span>
                        {item.beforeLabel && (
                          <span className="text-white/75 text-xs">{item.beforeLabel}</span>
                        )}
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="w-0.5 bg-white z-10 relative flex items-center justify-center" aria-hidden="true">
                      <div className="w-7 h-7 bg-white rounded-full shadow-lg flex items-center justify-center absolute z-20">
                        <span className="text-gray-400 text-xs font-bold">↔</span>
                      </div>
                    </div>

                    {/* After */}
                    <div className="flex-1 relative overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={item.image}
                        alt={`After ${item.title}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 px-3 py-2 bg-gradient-to-t from-black/70 to-transparent">
                        <span className="text-white text-xs font-bold block">After</span>
                        {item.afterLabel && (
                          <span className="text-white/75 text-xs">{item.afterLabel}</span>
                        )}
                      </div>
                    </div>

                    {item.badge && (
                      <span className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full z-10">
                        {item.badge}
                      </span>
                    )}
                  </div>
                ) : (
                  /* Clinic placeholder */
                  <div className={`h-56 bg-gradient-to-br ${item.gradient} relative`}>
                    <div className="absolute inset-0 flex items-center justify-center opacity-20" aria-hidden="true">
                      <svg viewBox="0 0 80 80" className="w-24 h-24 fill-white">
                        <rect x="10" y="10" width="60" height="45" rx="4" />
                        <path d="M25 55 L40 70 L55 55" />
                        <circle cx="40" cy="33" r="12" fill="none" stroke="white" strokeWidth="3" />
                      </svg>
                    </div>
                    <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded-full" aria-hidden="true">
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

      {/* Disclaimer */}
      <div className="bg-gray-50 border-t border-gray-200 py-4">
        <p className="text-center text-gray-400 text-xs max-w-2xl mx-auto px-4">
          Images shown are representative examples. Actual patient results may vary. All treatments are performed by qualified dental professionals.
        </p>
      </div>

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
