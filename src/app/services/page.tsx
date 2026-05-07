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
  Clock,
  ChevronRight,
  CheckCircle,
  Phone,
  CalendarCheck,
} from 'lucide-react'
import { services } from '@/data/services'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Comprehensive dental services including teeth cleaning, root canal, dental implants, braces, cosmetic dentistry, and digital X-rays.',
}

const iconMap: Record<string, React.ElementType> = {
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
}

const faqs = [
  {
    question: 'How often should I visit the dentist?',
    answer:
      'We recommend a check-up and cleaning every 6 months for most patients. If you have ongoing issues like gum disease or cavities, more frequent visits may be advised.',
  },
  {
    question: 'Is root canal treatment painful?',
    answer:
      'Modern root canal treatment is virtually pain-free. We use advanced local anaesthetics so you feel no pain during the procedure. Post-treatment discomfort is minimal and manageable.',
  },
  {
    question: 'How long do dental implants last?',
    answer:
      'With proper care, dental implants can last a lifetime. The crown on top may need replacement after 15-20 years, but the implant post itself is designed to be permanent.',
  },
  {
    question: 'Are clear aligners suitable for everyone?',
    answer:
      'Clear aligners are excellent for mild to moderate misalignment. During your consultation, we assess your case and recommend the best option — aligners or traditional braces.',
  },
  {
    question: 'Do you offer payment plans or EMI?',
    answer:
      'Yes! We offer no-cost EMI options for treatments above ₹5,000 through partner banks and digital payment platforms. Ask our team about options during your visit.',
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-28 pb-16 bg-gradient-to-br from-blue-900 to-teal-700" aria-labelledby="services-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-300 font-semibold text-sm uppercase tracking-wider mb-4">What We Offer</p>
          <h1 id="services-heading" className="text-4xl md:text-5xl font-bold text-white mb-6">
            Comprehensive Dental Care
          </h1>
          <p className="text-blue-100 text-lg leading-relaxed max-w-2xl mx-auto">
            From routine preventive care to complex smile transformations — everything your family needs in one
            modern, welcoming clinic.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28 bg-white" aria-labelledby="treatments-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="treatments-heading" className="text-3xl font-bold text-gray-900">
              Our Treatments
            </h2>
            <p className="text-gray-500 text-lg mt-4 max-w-2xl mx-auto">
              Each treatment is tailored to your individual needs with transparent pricing and no surprise charges.
            </p>
          </div>

          <div className="space-y-6">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon] || Sparkles
              const isEven = index % 2 === 0
              return (
                <div
                  key={service.id}
                  className="bg-gray-50 rounded-3xl p-8 md:p-10 border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all"
                >
                  <div className={`grid md:grid-cols-2 gap-8 items-center ${isEven ? '' : 'md:direction-rtl'}`}>
                    {/* Icon + title block */}
                    <div className={isEven ? '' : 'md:order-2'}>
                      <div className="flex items-start gap-5">
                        <div
                          className={`w-14 h-14 ${service.iconBg} rounded-2xl flex items-center justify-center flex-shrink-0`}
                          aria-hidden="true"
                        >
                          <Icon className={`w-7 h-7 ${service.colorClass}`} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                          <div className="flex flex-wrap gap-3">
                            <span className="inline-flex items-center gap-1 text-xs text-gray-500 bg-white rounded-full px-3 py-1 border">
                              <Clock className="w-3 h-3" aria-hidden="true" />
                              {service.duration}
                            </span>
                            <span className="inline-flex items-center gap-1 text-xs text-blue-600 font-semibold bg-blue-50 rounded-full px-3 py-1">
                              {service.price}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Details */}
                    <div className={isEven ? '' : 'md:order-1'}>
                      <p className="text-gray-600 text-sm leading-relaxed mb-5">{service.fullDescription}</p>
                      <div className="grid grid-cols-2 gap-2">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-2 text-xs text-gray-700">
                            <CheckCircle className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" aria-hidden="true" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">FAQ</p>
            <h2 id="faq-heading" className="text-3xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-start gap-3">
                  <span
                    className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5"
                    aria-hidden="true"
                  >
                    Q
                  </span>
                  {faq.question}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed pl-9">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600" aria-labelledby="services-cta-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="services-cta-heading" className="text-3xl font-bold text-white mb-4">
            Not Sure Which Treatment You Need?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Book a free 15-minute consultation and we&apos;ll recommend the best treatment plan for your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/appointment"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-all shadow-xl"
            >
              <CalendarCheck className="w-5 h-5" aria-hidden="true" />
              Book Free Consult
            </Link>
            <a
              href="tel:+919130084891"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/60 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              Call Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
