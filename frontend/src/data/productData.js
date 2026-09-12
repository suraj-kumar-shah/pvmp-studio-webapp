export const PRODUCT_CATEGORIES = [
  { id: 'all', label: 'All Products' },
  { id: 'albums', label: 'Heirloom Albums & Books' },
  { id: 'usb-boxes', label: 'Custom Pendrives & Keepsakes' },
  { id: 'frames', label: 'Gallery Wall Frames' },
  { id: 'prints', label: 'Fine Art Prints' }
];

export const PRODUCTS = [
  {
    id: 'prod-heirloom-leather-album',
    name: 'Heirloom Flush-Mount Leather Album',
    category: 'albums',
    categoryLabel: 'Heirloom Albums & Books',
    badge: 'Bestseller in India & Nepal',
    basePrice: 28000,
    rating: 5.0,
    reviewCount: 48,
    leadTime: '2-3 Weeks Handcrafted',
    shortDescription: 'Museum-quality flush mount album bound in genuine Italian leather with thick lay-flat archival pages and gilded gold edges.',
    description: 'Our signature flush mount album is handcrafted by master bookbinders. Every photograph is printed on photographic archival silver halide paper and mounted flush to rigid 1.5mm substrates. The pages open completely flat with seamless panoramas spanning across spreads without gutter loss.',
    images: [
      'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=1200&q=80'
    ],
    features: [
      '100% Lay-flat seamless panoramic spreads',
      'Archival 800gsm thick rigid substrate core',
      'Hand-cut genuine Italian top-grain leather cover',
      'Custom gold / rose gold foil monogram debossing',
      'Delivered in an archival linen presentation clamshell box'
    ],
    optionsConfig: [
      {
        id: 'size',
        label: 'Album Dimensions',
        type: 'select',
        options: [
          { label: '10" x 10" Square (Classic)', value: '10x10', priceDelta: 0 },
          { label: '12" x 12" Grand Square', value: '12x12', priceDelta: 4500 },
          { label: '12" x 15" Master Horizontal', value: '12x15', priceDelta: 8000 },
          { label: '12" x 18" Royal Panorama Edition', value: '12x18', priceDelta: 12000 }
        ],
        defaultValue: '10x10'
      },
      {
        id: 'coverMaterial',
        label: 'Cover Material & Tone',
        type: 'color-swatch',
        options: [
          { label: 'Espresso Italian Leather', value: 'leather-espresso', colorHex: '#3d261a', priceDelta: 0 },
          { label: 'Cognac Tuscan Leather', value: 'leather-cognac', colorHex: '#8b4513', priceDelta: 0 },
          { label: 'Midnight Onyx Leather', value: 'leather-onyx', colorHex: '#1a1a1a', priceDelta: 0 },
          { label: 'Natural Belgian Linen', value: 'linen-oatmeal', colorHex: '#d8cbb8', priceDelta: -1500 },
          { label: 'Royal Emerald Velvet', value: 'velvet-emerald', colorHex: '#1b4d3e', priceDelta: 2500 }
        ],
        defaultValue: 'leather-cognac'
      },
      {
        id: 'pages',
        label: 'Number of Pages (Spreads)',
        type: 'select',
        options: [
          { label: '30 Pages (15 Spreads - 60-80 Photos)', value: '30', priceDelta: 0 },
          { label: '40 Pages (20 Spreads - 90-110 Photos)', value: '40', priceDelta: 3500 },
          { label: '50 Pages (25 Spreads - 120-140 Photos)', value: '50', priceDelta: 6500 },
          { label: '60 Pages (30 Spreads - 150-180 Photos)', value: '60', priceDelta: 9500 }
        ],
        defaultValue: '30'
      },
      {
        id: 'paperFinish',
        label: 'Archival Paper Finish',
        type: 'radio',
        options: [
          { label: 'Fuji Crystal Silk (Fingerprint Resistant & Luminous)', value: 'silk', priceDelta: 0 },
          { label: 'Hahnemühle Fine Art Deep Matte (Velvety Museum Grade)', value: 'fine-matte', priceDelta: 3200 }
        ],
        defaultValue: 'silk'
      },
      {
        id: 'embossing',
        label: 'Cover Personalization',
        type: 'radio',
        options: [
          { label: 'Gold Foil Monogram Debossing (Name + Date)', value: 'gold-foil', priceDelta: 1800 },
          { label: 'Blind Letterpress Debossing (Subtle & Modern)', value: 'blind-deboss', priceDelta: 1500 },
          { label: 'Clean Plain Cover (No Text)', value: 'none', priceDelta: 0 }
        ],
        defaultValue: 'gold-foil'
      }
    ]
  },
  {
    id: 'prod-wooden-usb-keepsake-box',
    name: 'Handcrafted Wooden USB Keepsake Box & Pendrive',
    category: 'usb-boxes',
    categoryLabel: 'Custom Pendrives & Keepsakes',
    badge: 'Popular Keepsake',
    basePrice: 5500,
    rating: 4.9,
    reviewCount: 76,
    leadTime: '3-5 Days Handcrafted',
    shortDescription: 'Solid hardwood storage box filled with dried botanical moss and an ultra-fast high-capacity engraved crystal/wood USB drive.',
    description: 'Keep your digital 4K wedding films and high-resolution master photo archives secure for generations in our custom engraved wooden keepsake box. Features a slide-lid closure with brass magnetic accents, nestling a matching laser-engraved USB pendrive.',
    images: [
      'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1200&q=80'
    ],
    features: [
      'Solid natural American Walnut or Oak hardwood box',
      'Custom laser engraving with couple monogram and wedding date',
      'High-speed USB 3.2 Gen 1 (up to 150MB/s read speeds for 4K video playback)',
      'Cushioned interior with preserved botanical moss & velvet bedding',
      'Compatible with smart TVs, Mac, PC, and digital frame hubs'
    ],
    optionsConfig: [
      {
        id: 'woodFinish',
        label: 'Hardwood Box Material',
        type: 'color-swatch',
        options: [
          { label: 'Dark American Walnut', value: 'walnut', colorHex: '#4a2e18', priceDelta: 0 },
          { label: 'Natural Scandinavian Oak', value: 'oak', colorHex: '#c4a47c', priceDelta: 0 },
          { label: 'Matte Ebony Black', value: 'ebony', colorHex: '#1c1c1c', priceDelta: 800 }
        ],
        defaultValue: 'walnut'
      },
      {
        id: 'capacity',
        label: 'Storage Capacity',
        type: 'select',
        options: [
          { label: '64GB USB 3.2 (Full Photo Collection)', value: '64gb', priceDelta: 0 },
          { label: '128GB USB 3.2 (4K Films + Photos + RAW Archive)', value: '128gb', priceDelta: 1500 },
          { label: '256GB Ultra Speed (Cinema RAW + Multiple 4K Edits)', value: '256gb', priceDelta: 3000 }
        ],
        defaultValue: '128gb'
      },
      {
        id: 'usbStyle',
        label: 'USB Drive Body Style',
        type: 'radio',
        options: [
          { label: 'Matching Solid Wood Swivel Drive', value: 'wood-swivel', priceDelta: 0 },
          { label: 'Rose Gold & Crystal Glass Drive with LED Glow', value: 'crystal-gold', priceDelta: 1200 }
        ],
        defaultValue: 'wood-swivel'
      }
    ]
  },
  {
    id: 'prod-museum-acrylic-frame',
    name: 'Museum Optical Acrylic Gallery Frame',
    category: 'frames',
    categoryLabel: 'Gallery Wall Frames',
    badge: 'Gallery Choice',
    basePrice: 14500,
    rating: 5.0,
    reviewCount: 32,
    leadTime: '1-2 Weeks',
    shortDescription: 'Vibrant frameless fine art print face-mounted to 1/4" anti-reflective acrylic with floating aluminum wall sub-frame.',
    description: 'Transform your favorite wedding or portrait photograph into a luminous gallery centerpiece. The face-mounted acrylic technique amplifies color richness, contrast, and depth, making the photo look as though it is glowing from within.',
    images: [
      'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&q=80'
    ],
    features: [
      'Diamond-polished beveled edges for glass-like crystal refraction',
      '99% UV protective optical grade acrylic to prevent fading',
      'Hidden French cleat aluminum floating mount system (hangs 3/4" off wall)',
      '100% moisture sealed backing'
    ],
    optionsConfig: [
      {
        id: 'size',
        label: 'Frame Dimensions',
        type: 'select',
        options: [
          { label: '16" x 24" (Gallery Statement)', value: '16x24', priceDelta: 0 },
          { label: '20" x 30" (Grand Centerpiece)', value: '20x30', priceDelta: 5000 },
          { label: '24" x 36" (Living Room Masterpiece)', value: '24x36', priceDelta: 9500 },
          { label: '30" x 45" (Museum Exhibition Scale)', value: '30x45', priceDelta: 16000 }
        ],
        defaultValue: '20x30'
      },
      {
        id: 'finish',
        label: 'Acrylic Surface Reflection',
        type: 'radio',
        options: [
          { label: 'Ultra Gloss (Maximum Color Vibrancy & Pop)', value: 'gloss', priceDelta: 0 },
          { label: 'Anti-Glare Tru-Vue (Zero Reflections in Sunlit Rooms)', value: 'matte-antiglare', priceDelta: 2500 }
        ],
        defaultValue: 'gloss'
      }
    ]
  },
  {
    id: 'prod-handcrafted-linen-book',
    name: 'Belgian Linen Parent Keepsake Book',
    category: 'albums',
    categoryLabel: 'Heirloom Albums & Books',
    badge: 'Ideal Gift',
    basePrice: 12000,
    rating: 4.8,
    reviewCount: 29,
    leadTime: '1-2 Weeks',
    shortDescription: 'Minimalist editorial hardcover photo book bound in natural linen with heavyweight matte art paper.',
    description: 'The perfect gift for parents and grandparents. Elegantly bound in woven Belgian linen with subtle debossed lettering on the spine and front, featuring 40 curated pages of wedding memories on textured cotton paper.',
    images: [
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=1200&q=80'
    ],
    features: [
      'Authentic woven linen fabric in serene earth tones',
      '200gsm smooth fine art matte paper',
      'Hardcover section-sewn binding for durability',
      'Matching satin ribbon bookmark'
    ],
    optionsConfig: [
      {
        id: 'size',
        label: 'Book Dimensions',
        type: 'select',
        options: [
          { label: '8" x 8" Compact Square', value: '8x8', priceDelta: 0 },
          { label: '10" x 10" Medium Square', value: '10x10', priceDelta: 3000 },
          { label: '8.5" x 11" Classic Portrait', value: '8.5x11', priceDelta: 2500 }
        ],
        defaultValue: '8x8'
      },
      {
        id: 'linenColor',
        label: 'Linen Colorway',
        type: 'color-swatch',
        options: [
          { label: 'Oatmeal Natural Linen', value: 'oatmeal', colorHex: '#d8cbb8', priceDelta: 0 },
          { label: 'Sage Botanical Green', value: 'sage', colorHex: '#8f9f8a', priceDelta: 0 },
          { label: 'Terracotta Warm Clay', value: 'terracotta', colorHex: '#b86b53', priceDelta: 0 },
          { label: 'Charcoal Slate', value: 'charcoal', colorHex: '#3a3d40', priceDelta: 0 }
        ],
        defaultValue: 'oatmeal'
      }
    ]
  },
  {
    id: 'prod-fine-art-deckled-prints',
    name: 'Fine Art Cotton Prints in Keepsake Clamshell (Set of 25)',
    category: 'prints',
    categoryLabel: 'Fine Art Prints',
    badge: 'Artisan Crafted',
    basePrice: 8500,
    rating: 4.9,
    reviewCount: 41,
    leadTime: '3-5 Days',
    shortDescription: '25 museum-grade prints on 310gsm German etching cotton paper with hand-torn deckled feathered edges.',
    description: 'Tactile and poetic, each print features hand-torn deckled edges on 100% cotton rag paper. Presented inside an archival linen folio box with ribbon pull, ready for displaying on easels or passing around during family gatherings.',
    images: [
      'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80'
    ],
    features: [
      'Hand-feathered deckled edges on every single print',
      'Hahnemühle 310gsm 100% cotton archival paper',
      'UltraChrome 10-color archival pigment inks (100+ year color guarantee)',
      'Includes solid walnut display mini-easel stand'
    ],
    optionsConfig: [
      {
        id: 'size',
        label: 'Print Dimensions',
        type: 'select',
        options: [
          { label: '5" x 7" Box Set (25 Prints)', value: '5x7', priceDelta: 0 },
          { label: '8" x 10" Box Set (25 Prints)', value: '8x10', priceDelta: 4000 }
        ],
        defaultValue: '5x7'
      },
      {
        id: 'boxType',
        label: 'Keepsake Box Casing',
        type: 'radio',
        options: [
          { label: 'Natural Oatmeal Linen Folio Box', value: 'linen-box', priceDelta: 0 },
          { label: 'Handmade Solid Walnut Wood Box', value: 'walnut-box', priceDelta: 2200 }
        ],
        defaultValue: 'linen-box'
      }
    ]
  },
  {
    id: 'prod-custom-wood-gallery-frame',
    name: 'Bespoke Solid Wood Gallery Wall Frame',
    category: 'frames',
    categoryLabel: 'Gallery Wall Frames',
    badge: 'Timeless Elegance',
    basePrice: 9500,
    rating: 4.8,
    reviewCount: 19,
    leadTime: '1 Week',
    shortDescription: 'Custom milled solid hardwood frame with 8-ply museum cotton mat and anti-reflective conservation glass.',
    description: 'Elevate your portraiture with timeless solid wood framing. Every frame is hand-joined with dovetail splines and paired with acid-free museum mat boards that will never yellow with age.',
    images: [
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=80'
    ],
    features: [
      'Solid natural American hardwood (no veneers or synthetic composites)',
      'Heavy 8-ply 100% cotton acid-free matting',
      'Tru-Vue Conservation Clear glass with 99% UV protection',
      'Pre-wired with heavy-duty hanging hardware'
    ],
    optionsConfig: [
      {
        id: 'size',
        label: 'Frame & Mat Size',
        type: 'select',
        options: [
          { label: '11" x 14" Frame (matted for 8x10 Print)', value: '11x14', priceDelta: 0 },
          { label: '16" x 20" Frame (matted for 11x14 Print)', value: '16x20', priceDelta: 3500 },
          { label: '20" x 24" Frame (matted for 16x20 Print)', value: '20x24', priceDelta: 6500 },
          { label: '24" x 36" Frame (matted for 20x30 Print)', value: '24x36', priceDelta: 11000 }
        ],
        defaultValue: '16x20'
      },
      {
        id: 'frameFinish',
        label: 'Hardwood Finish',
        type: 'color-swatch',
        options: [
          { label: 'Matte Charcoal Black', value: 'matte-black', colorHex: '#1e1e1e', priceDelta: 0 },
          { label: 'Natural Solid White Oak', value: 'white-oak', colorHex: '#cbb69d', priceDelta: 1200 },
          { label: 'Vintage Antique Gold Leaf', value: 'antique-gold', colorHex: '#c5a880', priceDelta: 2400 }
        ],
        defaultValue: 'matte-black'
      }
    ]
  }
];
