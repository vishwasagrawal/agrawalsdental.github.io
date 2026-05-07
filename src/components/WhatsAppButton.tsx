'use client'

import { useState } from 'react'
import { MessageCircle, X, Phone } from 'lucide-react'

export default function WhatsAppButton() {
  const [isExpanded, setIsExpanded] = useState(false)
  const phoneNumber = '919130084891'
  const message = encodeURIComponent("Hello! I'd like to book an appointment at Dr Agrawal's Dental Clinic & Implant Centre.")
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <section className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3" aria-label="Quick contact">
      {/* Expanded options */}
      {isExpanded && (
        <div className="flex flex-col gap-2 items-end animate-in slide-in-from-bottom-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white text-gray-800 px-4 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all text-sm font-medium border border-gray-100"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle className="w-4 h-4 text-green-500" aria-hidden="true" />
            Chat on WhatsApp
          </a>
          <a
            href="tel:+919130084891"
            className="flex items-center gap-3 bg-white text-gray-800 px-4 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all text-sm font-medium border border-gray-100"
            aria-label="Call us now"
          >
            <Phone className="w-4 h-4 text-blue-500" aria-hidden="true" />
            Call Us Now
          </a>
        </div>
      )}

      {/* Main toggle button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`relative w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 ${
          isExpanded ? 'bg-gray-700 hover:bg-gray-800' : 'bg-green-500 hover:bg-green-600'
        }`}
        aria-label={isExpanded ? 'Close contact options' : 'Open contact options'}
        aria-expanded={isExpanded}
      >
        {/* Pulse ring — only when closed */}
        {!isExpanded && (
          <span
            className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-40"
            aria-hidden="true"
          />
        )}
        {isExpanded ? (
          <X className="w-6 h-6 text-white" aria-hidden="true" />
        ) : (
          <svg viewBox="0 0 24 24" fill="white" className="w-7 h-7" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.137.562 4.14 1.541 5.879L0 24l6.305-1.516A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.805 9.805 0 01-5.027-1.381l-.36-.214-3.733.897.933-3.636-.235-.373A9.818 9.818 0 1112 21.818z" />
          </svg>
        )}
      </button>
    </section>
  )
}
