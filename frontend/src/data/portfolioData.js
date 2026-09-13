export const PORTFOLIO_CATEGORIES = [
  { id: 'all', label: 'All Works' },
  { id: 'weddings', label: 'Wedding Shoots' },
  { id: 'pre-wedding', label: 'Pre-Wedding Shoots' },
  { id: 'cinematography', label: 'Cinematic Films' }
];

export const PORTFOLIO_PROJECTS = [
  {
    id: 'ananya-kabir-udaipur',
    title: 'Ananya & Kabir | The Grand Udaipur Palace Celebration',
    slug: 'ananya-kabir-udaipur',
    category: 'weddings',
    categoryLabel: 'Royal & Destination Weddings',
    date: 'February 2025',
    location: 'Taj Lake Palace, Udaipur, India',
    coverImage: '/other-image/image1.webp',
    featured: true,
    tagline: 'A breathtaking 3-day royal destination wedding illuminated by palace lanterns and royal grandeur.',
    clientQuote: 'PVMP Studio did not just capture photos—they immortalized the emotion and grandeur of every ritual. Looking at our album brings tears of joy every single time.',
    summary: 'Set against the shimmering waters of Lake Pichola, this three-day affair combined royal Rajasthani heritage with modern haute couture elegance. Every twilight ritual was framed with fine-art precision.',
    gear: ['Sony A1 & A7R V', 'G-Master 35mm f/1.4, 85mm f/1.4', 'DJI Ronin 4D Cinema', 'Godox AD600 Pro Strobe System'],
    stats: {
      photosDelivered: 1450,
      filmLength: '28 min 4K Feature',
      teamSize: '8 Artists (4 Photographers, 3 Cinematographers, 1 Drone Pilot)',
      turnaroundTime: '4 Weeks'
    },
    gallery: [
      {
        url: '/other-image/image1.webp',
        title: 'The Royal Varmala under the Starlit Palace Sky',
        caption: 'Golden hour twilight over Lake Pichola with fireworks illuminating the couple.'
      },
      {
        url: '/other-image/image2.webp',
        title: 'Bride Bridal Portrait in Heritage Sabyasachi Lehenga',
        caption: 'Natural window lighting in the Maharaja suite capturing hand-embroidered zardozi details.'
      },
      {
        url: '/other-image/image3.webp',
        title: 'Intimate Palace Courtyard Moment',
        caption: 'Quiet tenderness amid the vibrant celebration in the marbled courtyard.'
      },
      {
        url: '/other-image/image4.webp',
        title: 'Sunset Boat Arrival on Lake Pichola',
        caption: 'Traditional royal flotilla procession at dusk.'
      },
      {
        url: '/other-image/image5.webp',
        title: 'Sacred Pheras & The Agni Kund',
        caption: 'Intricate spiritual ritual framed in amber and warm gold tones.'
      }
    ]
  },
  {
    id: 'prerana-rohan-kathmandu',
    title: 'Prerana & Rohan | Heritage Royal Courtyard Wedding',
    slug: 'prerana-rohan-kathmandu',
    category: 'weddings',
    categoryLabel: 'Royal & Destination Weddings',
    date: 'December 2024',
    location: 'Dwarika’s Heritage Courtyard, Kathmandu, Nepal',
    coverImage: '/other-image/image2.webp',
    featured: true,
    tagline: 'Centuries-old Newari woodcarvings, sacred Vedic rituals, and timeless Himalayan mountain air.',
    clientQuote: 'PVMP Studio captured the sacred soul of our traditional Nepali wedding and modern reception. The craftsmanship of the team is unmatched across India and Nepal.',
    summary: 'A grand celebration surrounded by 14th-century architectural heritage, brick courtyards, marigold garlands, and evening brass oil lamps in Kathmandu.',
    gear: ['Sony FX6 Full Frame Cinema', 'Leica SL2', 'Sony GM 50mm f/1.2 & 85mm f/1.4'],
    stats: {
      photosDelivered: 1100,
      filmLength: '24 min 4K Feature Film',
      teamSize: '6 Master Artists',
      turnaroundTime: '3 Weeks'
    },
    gallery: [
      {
        url: '/other-image/image2.webp',
        title: 'The Red Silk & Gold Zari Bridal Portrait',
        caption: 'Traditional heritage attire framed against handcrafted terracotta Newari windows.'
      },
      {
        url: '/other-image/image1.webp',
        title: 'Courtyard Swayamvar & Varmala Exchange',
        caption: 'Petals cascading over the mandap under starlit Himalayan sky.'
      },
      {
        url: '/other-image/image4.webp',
        title: 'Sacred Mantras & Sindoor Ritual',
        caption: 'Intimate close-up framing authentic spiritual emotion.'
      }
    ]
  },
  {
    id: 'subani-abhay-jaipur',
    title: 'Subani & Abhay | Royal Amber Fort Extravaganza',
    slug: 'subani-abhay-jaipur',
    category: 'weddings',
    categoryLabel: 'Royal & Destination Weddings',
    date: 'November 2024',
    location: 'Udaivilas • Udaipur',
    coverImage: '/other-image/image3.webp',
    featured: true,
    tagline: 'A royal heritage saga under grand sandstone arches and candlelit pavilions.',
    clientQuote: 'Every photograph looks like a painting.',
    summary: 'A grand regal celebration crafted with bespoke luxury details.',
    gear: ['Sony A1', 'Canon R5'],
    stats: { photosDelivered: 950, filmLength: '20 min Feature', teamSize: '5 Artists', turnaroundTime: '3 Weeks' },
    gallery: [{ url: '/other-image/image3.webp', title: 'Starlight Romance', caption: 'Magical night sky.' }]
  },
  {
    id: 'maneet-prabhjyot-delhi',
    title: 'Maneet & Prabhjyot | Royal Heritage & Courtyard Nuptials',
    slug: 'maneet-prabhjyot-delhi',
    category: 'weddings',
    categoryLabel: 'Royal & Destination Weddings',
    date: 'October 2024',
    location: 'Dwarika’s Courtyard • Kathmandu',
    coverImage: '/other-image/image4.webp',
    featured: true,
    tagline: 'Golden heirlooms, emotional blessings, and royal celebrations.',
    clientQuote: 'Outstanding craftsmanship and attention to detail.',
    summary: 'A celebration of love and heirloom memories.',
    gear: ['Sony FX6', 'Sony A7R V'],
    stats: { photosDelivered: 880, filmLength: '18 min Feature', teamSize: '4 Artists', turnaroundTime: '2 Weeks' },
    gallery: [{ url: '/other-image/image4.webp', title: 'Eternal Rings', caption: 'Golden wedding rings and heirloom crafts.' }]
  },
  {
    id: 'kriti-sanchit-agra',
    title: 'Kriti & Sanchit | The Palace of Illumination',
    slug: 'kriti-sanchit-agra',
    category: 'weddings',
    categoryLabel: 'Royal & Destination Weddings',
    date: 'September 2024',
    location: 'The Leela Palace • Jaipur',
    coverImage: '/other-image/image5.webp',
    featured: true,
    tagline: 'Timeless luxury and pure joy.',
    clientQuote: 'The best investment we made for our wedding.',
    summary: 'Pure luxury destination celebrations.',
    gear: ['Sony A1', 'Leica Q2'],
    stats: { photosDelivered: 750, filmLength: '15 min Film', teamSize: '4 Artists', turnaroundTime: '2 Weeks' },
    gallery: [{ url: '/other-image/image5.webp', title: 'Palace Glow', caption: 'Grand palace steps.' }]
  },
  {
    id: 'riya-aditya-pokhara',
    title: 'Riya & Aditya | Annapurna Sunrise & Phewa Lake Love Story',
    slug: 'riya-aditya-pokhara',
    category: 'pre-wedding',
    categoryLabel: 'Pre-Wedding & Love Stories',
    date: 'November 2024',
    location: 'Phewa Lake & Sarangkot, Pokhara, Nepal',
    coverImage: '/other-image/image6.webp',
    featured: true,
    tagline: 'Snowcapped Himalayan peaks reflected in tranquil waters at first morning dawn.',
    clientQuote: 'Waking up before dawn for the Sarangkot mountain ridge shots gave us memories we will cherish forever.',
    summary: 'An editorial pre-wedding escape across serene lake wooden boats and mist-covered mountain terraces.',
    gear: ['Sony Alpha 1', 'Sigma 24-70mm f/2.8 Art', 'DJI Mavic 3 Pro Cine'],
    stats: { photosDelivered: 380, filmLength: '4 min 4K Cinematic Teaser', teamSize: '3 Crew Members', turnaroundTime: '10 Days' },
    gallery: [{ url: '/other-image/image6.webp', title: 'Sunrise Glow', caption: 'First light over the peaks.' }]
  },
  {
    id: 'aman-kamakshi-jodhpur',
    title: 'Aman & Kamakshi | Sun City Royal Romance',
    slug: 'aman-kamakshi-jodhpur',
    category: 'weddings',
    categoryLabel: 'Royal & Destination Weddings',
    date: 'August 2024',
    location: 'Umaid Bhawan • Jodhpur',
    coverImage: '/other-image/image7.webp',
    featured: true,
    tagline: 'Regal sandstone architecture and high-couture bridal storytelling.',
    clientQuote: 'Incredible experience from start to finish.',
    summary: 'A grand royal extravaganza.',
    gear: ['Sony A7R V', 'Broncolor Lighting'],
    stats: { photosDelivered: 820, filmLength: '20 min Film', teamSize: '4 Artists', turnaroundTime: '3 Weeks' },
    gallery: [{ url: '/other-image/image7.webp', title: 'Royal Courtyard', caption: 'Sandstone majesty.' }]
  },
  {
    id: 'devika-siddharth-nepal',
    title: 'Devika & Siddharth | Patan Durbar Royal Nuptials',
    slug: 'devika-siddharth-nepal',
    category: 'weddings',
    categoryLabel: 'Royal & Destination Weddings',
    date: 'July 2024',
    location: 'Patan Durbar • Kathmandu',
    coverImage: '/other-image/image8.webp',
    featured: true,
    tagline: 'Ancient temples, sacred bells, and heirloom wedding traditions.',
    clientQuote: 'PVMP Studio honored every tradition with divine elegance.',
    summary: 'A sacred union steeped in centuries-old cultural heritage.',
    gear: ['Leica SL2', 'Sony FX3'],
    stats: { photosDelivered: 900, filmLength: '22 min Film', teamSize: '5 Artists', turnaroundTime: '3 Weeks' },
    gallery: [{ url: '/other-image/image8.webp', title: 'Heritage Durbar', caption: 'Ancient temple carvings.' }]
  }
];
