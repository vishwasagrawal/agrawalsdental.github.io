import Link from 'next/link'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

// Inline SVGs avoid lucide-react's deprecated brand-icon exports
const socialIcons = [
  {
    label: 'Facebook',
    href: '#',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: '#',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'X (Twitter)',
    href: '#',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: '#',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
      </svg>
    ),
  },
]

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Our Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/appointment', label: 'Book Appointment' },
  { href: '/contact', label: 'Contact Us' },
]

const serviceLinks = [
  { href: '/services', label: 'Teeth Cleaning' },
  { href: '/services', label: 'Dental Implants' },
  { href: '/services', label: 'Root Canals' },
  { href: '/services', label: 'Veneers & Crowns' },
  { href: '/services', label: 'Cosmetic Procedures' },
  { href: '/services', label: 'Paediatrics' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300" role="contentinfo">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-5">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6" aria-hidden="true">
                  <path d="M12 2C8.5 2 6 4.5 6 7c0 1.5.5 2.8 1.3 3.8C8.1 12 8 13.1 8 14c0 3 1 6 2 7 .5.5 1 .5 1.5 0 .3-.5.5-1.5.5-2.5s.3-1.5 0-2c-.3-.5 0-1 .5-1h.5c.5 0 .8.5.5 1-.3.5 0 1 0 2s.2 2 .5 2.5c.5.5 1 .5 1.5 0 1-1 2-4 2-7 0-.9-.1-2 .7-3.2C18.5 9.8 19 8.5 19 7c0-2.5-2.5-5-7-5z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-white text-sm">Dr Agrawal&apos;s</p>
                <p className="text-blue-400 text-xs font-semibold">Dental &amp; Implant Centre</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Providing comprehensive dental and implant care to the people of Hinganghat and surrounding areas.
              Led by Dr Rimisha Tibdewal &amp; Dr Gaurav Tibdewal.
            </p>
            {/* Social Links */}
            <div className="flex space-x-3">
              {socialIcons.map(({ label, href, svg }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                >
                  {svg}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-blue-500 inline-block" aria-hidden="true" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Our Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-blue-500 inline-block" aria-hidden="true" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span className="text-sm text-gray-400 leading-relaxed">
                  Ram Mandir Ward, Main Road,
                  <br />
                  Subhash Chawk, Hinganghat,
                  <br />
                  Maharashtra 442301
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" aria-hidden="true" />
                <a href="tel:+919130084891" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
                  +91 9130084891
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" aria-hidden="true" />
                <a
                  href="mailto:hello@agrawalsdental.com"
                  className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                >
                  hello@agrawalsdental.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <div className="text-sm text-gray-400 leading-relaxed">
                  <p>Mon–Sat: 9:00 AM – 8:00 PM</p>
                  <p>Sunday: 10:00 AM – 2:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500 text-center sm:text-left">
            © {new Date().getFullYear()} Dr Agrawal&apos;s Dental Clinic. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <Link href="#" className="hover:text-gray-400 transition-colors">
              Privacy Policy
            </Link>
            <span aria-hidden="true">·</span>
            <Link href="#" className="hover:text-gray-400 transition-colors">
              Terms of Service
            </Link>
            <span aria-hidden="true">·</span>
            <Link href="/sitemap.xml" className="hover:text-gray-400 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
