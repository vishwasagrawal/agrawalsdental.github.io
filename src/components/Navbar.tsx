'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group" aria-label="Dr Agrawal's Dental Clinic - Home">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-md group-hover:bg-blue-700 transition-colors">
              <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6" aria-hidden="true">
                <path d="M12 2C8.5 2 6 4.5 6 7c0 1.5.5 2.8 1.3 3.8C8.1 12 8 13.1 8 14c0 3 1 6 2 7 .5.5 1 .5 1.5 0 .3-.5.5-1.5.5-2.5s.3-1.5 0-2c-.3-.5 0-1 .5-1h.5c.5 0 .8.5.5 1-.3.5 0 1 0 2s.2 2 .5 2.5c.5.5 1 .5 1.5 0 1-1 2-4 2-7 0-.9-.1-2 .7-3.2C18.5 9.8 19 8.5 19 7c0-2.5-2.5-5-7-5z" />
              </svg>
            </div>
            <div className="leading-tight">
              <p className="font-bold text-gray-900 text-sm">Dr Agrawal&apos;s</p>
              <p className="text-blue-600 text-xs font-semibold tracking-wide">Dental Clinic</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium"
              aria-label="Call us"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span>+91 98765 43210</span>
            </a>
            <Link
              href="/appointment"
              className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile: Phone + Hamburger */}
          <div className="flex md:hidden items-center gap-3">
            <a
              href="tel:+919876543210"
              className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              aria-label="Call us"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white border-t border-gray-100 shadow-lg transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!isOpen}
      >
        <div className="px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                pathname === link.href
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 pb-1">
            <Link
              href="/appointment"
              className="block bg-blue-600 text-white px-5 py-3 rounded-full text-center text-sm font-semibold hover:bg-blue-700 transition-colors"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
