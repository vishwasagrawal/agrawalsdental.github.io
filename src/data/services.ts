export interface Service {
  id: number
  slug: string
  title: string
  description: string
  fullDescription: string
  icon: string
  duration: string
  price: string
  features: string[]
  colorClass: string
  iconBg: string
}

export const services: Service[] = [
  {
    id: 1,
    slug: 'teeth-cleaning',
    title: 'Teeth Cleaning',
    description: 'Professional cleaning to remove plaque, tartar, and surface stains for a brighter, healthier smile.',
    fullDescription:
      'Our professional dental cleaning goes beyond daily brushing. Using state-of-the-art ultrasonic scalers, our hygienists remove built-up tartar and plaque that regular brushing cannot reach. The procedure includes scaling, root planing if needed, and professional polishing.',
    icon: 'Sparkles',
    duration: '45–60 min',
    price: 'From ₹800',
    features: ['Plaque & tartar removal', 'Professional polishing', 'Fluoride treatment', 'Oral health assessment'],
    colorClass: 'text-blue-600',
    iconBg: 'bg-blue-50',
  },
  {
    id: 2,
    slug: 'root-canal',
    title: 'Root Canal Treatment',
    description: 'Pain-free root canal therapy to save damaged teeth and relieve severe tooth pain permanently.',
    fullDescription:
      'Modern root canal treatment is virtually painless using rotary instrumentation and advanced anesthetics. We remove infected pulp, clean and shape the root canals, then seal them. A crown is placed afterward to restore full tooth function.',
    icon: 'Activity',
    duration: '60–90 min',
    price: 'From ₹3,500',
    features: ['Painless procedure', 'Single visit possible', 'Digital X-ray guided', 'Crown protection'],
    colorClass: 'text-red-600',
    iconBg: 'bg-red-50',
  },
  {
    id: 3,
    slug: 'dental-implants',
    title: 'Dental Implants',
    description: 'Permanent tooth replacement that looks, feels, and functions exactly like your natural teeth.',
    fullDescription:
      'Dental implants are the gold standard for tooth replacement. A titanium post is surgically placed in the jawbone, where it fuses over time. A custom ceramic crown is then attached, matching your natural teeth in color and shape perfectly.',
    icon: 'Shield',
    duration: 'Multiple sessions',
    price: 'From ₹25,000',
    features: ['Titanium implant post', 'Custom ceramic crown', 'Bone preservation', 'Lifetime durability'],
    colorClass: 'text-purple-600',
    iconBg: 'bg-purple-50',
  },
  {
    id: 4,
    slug: 'braces-aligners',
    title: 'Braces & Aligners',
    description: 'Straighten your teeth with traditional braces or virtually invisible clear aligners.',
    fullDescription:
      'We offer both traditional metal braces and modern clear aligner systems. Clear aligners are virtually invisible, removable, and comfortable — ideal for adults. Our team creates a customized plan using 3D digital scanning technology.',
    icon: 'Smile',
    duration: '12–24 months',
    price: 'From ₹15,000',
    features: ['Digital 3D scanning', 'Metal & ceramic braces', 'Clear aligner systems', 'Regular monitoring'],
    colorClass: 'text-teal-600',
    iconBg: 'bg-teal-50',
  },
  {
    id: 5,
    slug: 'cosmetic-dentistry',
    title: 'Cosmetic Dentistry',
    description: 'Transform your smile with teeth whitening, veneers, bonding, and complete smile makeovers.',
    fullDescription:
      'Our cosmetic services help you achieve the smile of your dreams — from in-office whitening that brightens teeth up to 8 shades, to porcelain veneers, to composite bonding for chips and gaps. Every treatment is personalised to your face and goals.',
    icon: 'Star',
    duration: '1–3 sessions',
    price: 'From ₹2,000',
    features: ['Teeth whitening', 'Porcelain veneers', 'Composite bonding', 'Smile design consultation'],
    colorClass: 'text-yellow-600',
    iconBg: 'bg-yellow-50',
  },
  {
    id: 6,
    slug: 'dental-xray',
    title: 'Digital X-Rays',
    description: 'Digital X-rays with 90% less radiation for accurate diagnosis and treatment planning.',
    fullDescription:
      'Our clinic uses the latest digital radiography technology, emitting up to 90% less radiation than traditional X-rays. Digital X-rays produce instant, high-resolution images for detecting cavities, bone loss, and planning implant or orthodontic treatment.',
    icon: 'Scan',
    duration: '15–20 min',
    price: 'From ₹500',
    features: ['90% less radiation', 'Instant digital results', 'OPG panoramic views', 'CBCT 3D scans available'],
    colorClass: 'text-green-600',
    iconBg: 'bg-green-50',
  },
]

export const treatmentTypes = services.map((s) => s.title)
