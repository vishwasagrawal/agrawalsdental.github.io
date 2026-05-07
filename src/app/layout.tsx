import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  title: {
    default: "Dr Agrawal's Dental Clinic & Implant Centre | Hinganghat",
    template: "%s | Dr Agrawal's Dental Clinic & Implant Centre",
  },
  description:
    "Dr Agrawal's Dental Clinic & Implant Centre, Hinganghat — expert dental care by Dr Rimisha Tibdewal & Dr Gaurav Tibdewal. Implants, root canals, cosmetic dentistry, paediatrics & more.",
  keywords: [
    'dentist Hinganghat',
    'dental clinic Hinganghat',
    'dental implants Hinganghat',
    'Dr Rimisha Tibdewal',
    'Dr Gaurav Tibdewal',
    'root canal',
    'teeth whitening',
    'paediatric dentist',
    'Subhash Chawk dental',
  ],
  authors: [{ name: "Dr Agrawal's Dental Clinic" }],
  creator: "Dr Agrawal's Dental Clinic",
  openGraph: {
    title: "Dr Agrawal's Dental Clinic & Implant Centre",
    description: 'Expert dental care in Hinganghat. Book your appointment today.',
    type: 'website',
    locale: 'en_IN',
    siteName: "Dr Agrawal's Dental Clinic",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Dr Agrawal's Dental Clinic",
    description: 'Expert dental care with a gentle touch.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
