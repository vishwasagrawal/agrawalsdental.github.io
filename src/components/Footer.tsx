import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Youtube } from 'lucide-react'

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
  { href: '/services', label: 'Root Canal Treatment' },
  { href: '/services', label: 'Dental Implants' },
  { href: '/services', label: 'Braces & Aligners' },
  { href: '/services', label: 'Cosmetic Dentistry' },
  { href: '/services', label: 'Digital X-Rays' },
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
                <p className="text-blue-400 text-xs font-semibold">Dental Clinic</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Providing exceptional dental care with a gentle touch for over 15 years. Your smile is our passion and your
              health is our priority.
            </p>
            {/* Social Links */}
            <div className="flex space-x-3">
              {[
                { Icon: Facebook, href: '#', label: 'Facebook' },
                { Icon: Instagram, href: '#', label: 'Instagram' },
                { Icon: Twitter, href: '#', label: 'Twitter' },
                { Icon: Youtube, href: '#', label: 'YouTube' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Icon className="w-4 h-4" aria-hidden="true" />
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
                  123, Dental Square, MG Road,
                  <br />
                  Pune, Maharashtra 411001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" aria-hidden="true" />
                <a href="tel:+919876543210" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
                  +91 98765 43210
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
