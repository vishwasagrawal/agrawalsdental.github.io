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
    slug: 'teeth-whitening',
    title: 'Teeth Whitening',
    description: 'Professional in-clinic whitening to brighten your smile by several shades in a single visit.',
    fullDescription:
      'Our professional teeth whitening treatments use clinically approved bleaching agents to remove deep stains caused by tea, coffee, tobacco, and ageing. Results are visible immediately and can lighten teeth by up to 6–8 shades, giving you a radiant, confident smile.',
    icon: 'Star',
    duration: '45–60 min',
    price: 'Enquire for pricing',
    features: ['Up to 8 shades brighter', 'Clinically safe agents', 'Long-lasting results', 'Single visit treatment'],
    colorClass: 'text-yellow-600',
    iconBg: 'bg-yellow-50',
  },
  {
    id: 2,
    slug: 'bonding',
    title: 'Bonding',
    description: 'Repair chips, cracks, and gaps with tooth-coloured composite resin for a seamless natural look.',
    fullDescription:
      'Dental bonding is a quick and cost-effective cosmetic procedure where tooth-coloured composite resin is applied and sculpted onto the tooth surface. It is ideal for fixing chipped or cracked teeth, closing gaps, and improving the shape or colour of a tooth — usually completed in a single appointment.',
    icon: 'Layers',
    duration: '30–60 min',
    price: 'Enquire for pricing',
    features: ['Same-day results', 'Tooth-coloured resin', 'No anaesthesia needed', 'Reversible procedure'],
    colorClass: 'text-blue-600',
    iconBg: 'bg-blue-50',
  },
  {
    id: 3,
    slug: 'check-ups',
    title: 'Check-ups',
    description: 'Comprehensive routine dental examinations to keep your teeth and gums healthy year-round.',
    fullDescription:
      'Regular check-ups are the foundation of good oral health. Our thorough examination includes assessment of teeth, gums, bite, and soft tissues. We use digital X-rays where needed to detect issues invisible to the naked eye — catching problems early before they become costly.',
    icon: 'Stethoscope',
    duration: '20–30 min',
    price: 'Enquire for pricing',
    features: ['Full mouth examination', 'Gum health assessment', 'Early problem detection', 'Personalised advice'],
    colorClass: 'text-teal-600',
    iconBg: 'bg-teal-50',
  },
  {
    id: 4,
    slug: 'cosmetic-procedures',
    title: 'Cosmetic Procedures',
    description: 'Complete smile makeovers combining whitening, bonding, veneers, and reshaping for your ideal smile.',
    fullDescription:
      'Our cosmetic dentistry service covers everything from a single enhancement to a full smile makeover. Dr Rimisha and Dr Gaurav will design a personalised treatment plan that considers your face shape, skin tone, and preferences to create the most natural-looking, beautiful result.',
    icon: 'Sparkles',
    duration: '1–3 sessions',
    price: 'Enquire for pricing',
    features: ['Personalised smile design', 'Digital preview available', 'Minimal tooth reduction', 'Natural-looking results'],
    colorClass: 'text-purple-600',
    iconBg: 'bg-purple-50',
  },
  {
    id: 5,
    slug: 'dental-implants',
    title: 'Dental Implants',
    description: 'Permanent, natural-looking tooth replacement anchored directly into the jawbone.',
    fullDescription:
      'Dental implants are the gold standard for replacing missing teeth. A titanium post is placed into the jawbone and topped with a custom ceramic crown that matches your natural teeth. As the Implant Centre of the region, we have extensive experience delivering precise, long-lasting implant outcomes.',
    icon: 'Shield',
    duration: 'Multiple sessions',
    price: 'Enquire for pricing',
    features: ['Titanium implant post', 'Custom ceramic crown', 'Preserves jawbone', 'Lifetime durability'],
    colorClass: 'text-indigo-600',
    iconBg: 'bg-indigo-50',
  },
  {
    id: 6,
    slug: 'dentures-bridges',
    title: 'Dentures & Bridges',
    description: 'Removable and fixed options to restore multiple missing teeth and your natural bite.',
    fullDescription:
      'We offer both full and partial dentures as well as fixed dental bridges. Modern dentures are more comfortable and natural-looking than ever. Bridges anchor to adjacent teeth to fill a gap permanently. Our team will recommend the best option based on your bone health, lifestyle, and budget.',
    icon: 'LayoutGrid',
    duration: '2–4 sessions',
    price: 'Enquire for pricing',
    features: ['Full & partial dentures', 'Fixed dental bridges', 'Natural appearance', 'Comfortable fit'],
    colorClass: 'text-orange-600',
    iconBg: 'bg-orange-50',
  },
  {
    id: 7,
    slug: 'extractions',
    title: 'Extractions',
    description: 'Painless removal of damaged, decayed, or impacted teeth under local anaesthesia.',
    fullDescription:
      'Whether it is a severely decayed tooth, an impacted wisdom tooth, or a tooth extracted to make room for orthodontic treatment, our team performs extractions with minimal discomfort. We use advanced local anaesthetics and gentle techniques to ensure you feel at ease throughout.',
    icon: 'Scissors',
    duration: '20–45 min',
    price: 'Enquire for pricing',
    features: ['Local anaesthesia', 'Wisdom tooth removal', 'Surgical extractions', 'Aftercare guidance'],
    colorClass: 'text-red-600',
    iconBg: 'bg-red-50',
  },
  {
    id: 8,
    slug: 'fillings-sealants',
    title: 'Fillings & Sealants',
    description: 'Tooth-coloured fillings to restore cavities and protective sealants to prevent decay.',
    fullDescription:
      'We use composite tooth-coloured fillings that blend seamlessly with your natural teeth — no unsightly metal. Dental sealants are protective coatings applied to the chewing surfaces of back teeth, particularly for children, to prevent decay from developing in the grooves and pits.',
    icon: 'Droplets',
    duration: '30–60 min',
    price: 'Enquire for pricing',
    features: ['Tooth-coloured composite', 'Mercury-free fillings', 'Protective sealants', 'Durable results'],
    colorClass: 'text-cyan-600',
    iconBg: 'bg-cyan-50',
  },
  {
    id: 9,
    slug: 'oral-surgery',
    title: 'Oral Surgery',
    description: 'Minor oral surgical procedures including cyst removal, gum surgery, and bone grafting.',
    fullDescription:
      'Our clinic handles a range of minor oral surgical procedures: impacted tooth removal, cyst and abscess drainage, gum (periodontal) surgery, frenectomy, and pre-implant bone grafting. All procedures are performed under local anaesthesia with post-operative care instructions provided.',
    icon: 'Activity',
    duration: '45–90 min',
    price: 'Enquire for pricing',
    features: ['Cyst & abscess removal', 'Gum surgery', 'Bone grafting', 'Frenectomy'],
    colorClass: 'text-pink-600',
    iconBg: 'bg-pink-50',
  },
  {
    id: 10,
    slug: 'paediatrics',
    title: 'Paediatrics',
    description: 'Child-friendly dental care from milk teeth to teenagers in a calm, welcoming environment.',
    fullDescription:
      'We believe good dental habits start early. Our paediatric dental service covers check-ups, fluoride treatments, sealants, fillings, and extractions for children. We take extra time to make young patients feel comfortable and safe — turning a dental visit into a positive experience that builds lifelong oral health habits.',
    icon: 'Heart',
    duration: '20–45 min',
    price: 'Enquire for pricing',
    features: ['Child-friendly approach', 'Fluoride treatments', 'Preventive sealants', 'Parent education'],
    colorClass: 'text-rose-600',
    iconBg: 'bg-rose-50',
  },
  {
    id: 11,
    slug: 'root-canals',
    title: 'Root Canals',
    description: 'Pain-free root canal therapy to save infected or severely damaged teeth.',
    fullDescription:
      'Modern root canal treatment is virtually painless thanks to advanced anaesthetics and rotary instrumentation. We remove the infected pulp, clean and shape the canals, and seal the tooth — saving it from extraction. A crown is placed afterward to restore full strength and function.',
    icon: 'Wrench',
    duration: '60–90 min',
    price: 'Enquire for pricing',
    features: ['Virtually painless', 'Single visit possible', 'Saves natural tooth', 'Crown restoration'],
    colorClass: 'text-amber-600',
    iconBg: 'bg-amber-50',
  },
  {
    id: 12,
    slug: 'teeth-cleaning',
    title: 'Teeth Cleaning',
    description: 'Professional scaling and polishing to remove plaque, tartar, and surface stains.',
    fullDescription:
      'Professional teeth cleaning (scaling and polishing) removes the build-up of plaque and tartar that regular brushing cannot reach. Our ultrasonic scaler clears deposits above and below the gum line, followed by polishing to remove surface stains. We also check for early signs of gum disease.',
    icon: 'Zap',
    duration: '30–45 min',
    price: 'Enquire for pricing',
    features: ['Ultrasonic scaling', 'Polishing & stain removal', 'Gum health check', 'Fluoride application'],
    colorClass: 'text-green-600',
    iconBg: 'bg-green-50',
  },
  {
    id: 13,
    slug: 'teeth-reshaping',
    title: 'Teeth Reshaping',
    description: 'Subtle contouring to correct uneven, overlapping, or pointed teeth for a balanced smile.',
    fullDescription:
      'Teeth reshaping (enameloplasty) is a quick, painless cosmetic procedure where small amounts of enamel are removed to change the shape or length of teeth. It is ideal for smoothing slightly chipped teeth, reducing overlapping, and improving overall smile symmetry — often in a single visit.',
    icon: 'Pencil',
    duration: '30–60 min',
    price: 'Enquire for pricing',
    features: ['Painless procedure', 'Immediate results', 'No anaesthesia needed', 'Improves symmetry'],
    colorClass: 'text-violet-600',
    iconBg: 'bg-violet-50',
  },
  {
    id: 14,
    slug: 'veneers-crowns',
    title: 'Veneers & Crowns',
    description: 'Porcelain veneers and ceramic crowns to restore or transform the appearance of your teeth.',
    fullDescription:
      'Porcelain veneers are ultra-thin shells bonded to the front surface of teeth to correct colour, shape, or spacing. Dental crowns cap a damaged tooth to restore its full form and function. Both are custom-fabricated to match your natural teeth precisely in shade, shape, and translucency.',
    icon: 'Gem',
    duration: '2–3 sessions',
    price: 'Enquire for pricing',
    features: ['Porcelain veneers', 'Ceramic crowns', 'Shade-matched', 'Durable & natural-looking'],
    colorClass: 'text-sky-600',
    iconBg: 'bg-sky-50',
  },
  {
    id: 15,
    slug: 'x-ray',
    title: 'X-Ray',
    description: 'Digital dental X-rays with minimal radiation for accurate diagnosis and treatment planning.',
    fullDescription:
      'Our clinic uses digital radiography, which exposes patients to up to 90% less radiation than traditional film X-rays. Digital images are available instantly on-screen and can be enhanced for better diagnosis. We offer periapical, bitewing, and OPG panoramic X-rays as required.',
    icon: 'Scan',
    duration: '10–20 min',
    price: 'Enquire for pricing',
    features: ['90% less radiation', 'Instant digital images', 'OPG panoramic X-rays', 'Periapical & bitewing'],
    colorClass: 'text-slate-600',
    iconBg: 'bg-slate-50',
  },
]

export const treatmentTypes = services.map((s) => s.title)
