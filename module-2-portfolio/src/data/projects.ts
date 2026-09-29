export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  category: 'tour_travel' | 'medical' | 'food' | 'real_estate' | 'education';
  categoryLabel: string;
  city: string;
  tagline: string;
  image: string;
  liveUrl?: string;
  featured: boolean;
  metrics: {
    label: string;
    value: string;
  }[];
  challenge: string;
  solution: string;
  keyFeatures: string[];
  techStack: string[];
}

export const PROJECTS: ProjectItem[] = [
  {
    id: 'bhumika-tour-and-travels',
    title: 'Shree Bhumika Tour & Travels',
    client: 'Kan Singh (Founder)',
    category: 'tour_travel',
    categoryLabel: 'Tour & Travels',
    city: 'Jaipur, Rajasthan',
    tagline: 'Outstation cab rental portal with 250 KM fare engine, Google Page 1 ranking & WhatsApp dispatch',
    image: '/images/bhumika_office_front_1790197259954.jpg',
    liveUrl: 'https://bhumikatourandtravels.world/',
    featured: true,
    metrics: [
      { label: 'Google Rank', value: '#6.7 on Page 1' },
      { label: 'Mobile Speed', value: '100/100 PageSpeed' },
      { label: 'Server Cost', value: '₹0 / Month' },
      { label: 'Inbound Leads', value: '140+ Monthly' }
    ],
    challenge: 'Paying high monthly commissions to third-party travel directories while losing direct customers to slow WordPress sites that failed to load on mobile networks.',
    solution: 'Built a sub-second Jamstack web application featuring an interactive 250 KM outstation fare calculator, geo-targeted Schema.org markup, and direct 1-tap WhatsApp booking dispatch.',
    keyFeatures: [
      'Interactive 250 KM minimum per calendar day round-trip calculation engine',
      'Instant WhatsApp booking with pre-filled route, vehicle, and date options',
      'Google Maps 3-Pack optimization for Jaipur tourist searches',
      'Lifetime ₹0 server hosting on Netlify Edge CDN'
    ],
    techStack: ['Next.js App Engine', 'Tailwind CSS', 'Schema.org JSON-LD', 'WhatsApp Direct API', 'Netlify Edge']
  },
  {
    id: 'apex-health-dental',
    title: 'Apex Multi-Specialty Dental Clinic',
    client: 'Dr. Vivek Sharma (BDS, MDS)',
    category: 'medical',
    categoryLabel: 'Healthcare & Clinic',
    city: 'Vaishali Nagar, Jaipur',
    tagline: 'Doctor appointment scheduler, smile restoration showcase & local Google 3-Pack patient funnel',
    image: '/images/clinic_case_study.jpg',
    featured: true,
    metrics: [
      { label: 'Google 3-Pack', value: 'Top 3 Ranking' },
      { label: 'Patient Walk-ins', value: '+68% Growth' },
      { label: 'Server Cost', value: '₹0 / Month' },
      { label: 'Patient Reviews', value: '4.9 ★ (120+)' }
    ],
    challenge: 'Patients looking for specialized dental treatments in Vaishali Nagar were booking competing practices because the clinic lacked an online appointment portal and mobile discovery.',
    solution: 'Designed an elegant, dark-mode healthcare portal with procedure pricing, procedure before/after galleries, and real-time appointment booking routed straight to reception WhatsApp.',
    keyFeatures: [
      'Interactive treatment explorer and consultation cost estimator',
      'Direct WhatsApp slot booking with instant calendar confirmation',
      'Acrylic NFC review standee deployed at reception cash counter',
      'Physician & MedicalProcedure Schema for Google local health search'
    ],
    techStack: ['Jamstack Next.js', 'Tailwind CSS', 'WhatsApp Business API', 'Google Cloud CDN']
  },
  {
    id: 'the-royal-haveli-cafe',
    title: 'The Royal Haveli Cafe & Rooftop Lounge',
    client: 'Royal Haveli Hospitality Group',
    category: 'food',
    categoryLabel: 'Hospitality & Dining',
    city: 'MI Road, Jaipur',
    tagline: 'Contactless QR scannable digital menu & rooftop candle-light table reservation engine',
    image: '/images/cafe_case_study.jpg',
    featured: true,
    metrics: [
      { label: 'Table Bookings', value: '45+ Per Weekend' },
      { label: 'Menu Load Time', value: '0.4 Seconds' },
      { label: 'Server Cost', value: '₹0 / Month' },
      { label: 'Aggregator Savings', value: '-35% Commissions' }
    ],
    challenge: 'Excessive reliance on food aggregators taking 25-30% commissions on dine-in discovery and costly paper menu reprints during seasonal price updates.',
    solution: 'Engineered an ultra-fast digital QR menu web app with table reservation capabilities, chef specials spotlight, and automated review collection standees.',
    keyFeatures: [
      'Sub-second QR digital menu with high-resolution imagery and allergen filters',
      'Rooftop private celebration and candle-light table reservation engine',
      'Physical acrylic QR table standees linking directly to Google 5-star review page',
      '₹0 monthly hosting on Cloudflare Edge with 99.99% uptime'
    ],
    techStack: ['Jamstack Next.js', 'Tailwind CSS', 'QR Code Engine', 'Cloudflare Edge CDN']
  },
  {
    id: 'marudhar-realty-infra',
    title: 'Marudhar Heritage Realty & Developers',
    client: 'Marudhar Estates Pvt Ltd',
    category: 'real_estate',
    categoryLabel: 'Real Estate',
    city: 'Mansarovar, Jaipur',
    tagline: 'JDA-approved residential plots catalog, interactive EMI mortgage calculator & buyer pipeline',
    image: '/images/realty_case_study.jpg',
    featured: true,
    metrics: [
      { label: 'High-Ticket Inquiries', value: '38+ Monthly' },
      { label: 'Lead Response Time', value: '< 2 Minutes' },
      { label: 'Acquisition Cost', value: '₹0 Direct Leads' },
      { label: 'Pipeline Generated', value: '₹4.2 Cr' }
    ],
    challenge: 'Paying thousands monthly on real estate portals where the same buyer inquiries were shared with dozens of competitor brokers simultaneously.',
    solution: 'Built an exclusive direct developer showcase with virtual plot master plans, JDA documentation downloads, and an interactive mortgage EMI calculator.',
    keyFeatures: [
      'Interactive Plot Area converter (Gaj to Sq Ft) and loan EMI estimator',
      'Instant brochure PDF download via automated WhatsApp trigger',
      'Google Local Maps geo-targeting for premium residential inquiries',
      'Dedicated broker lead capture system syncing to local CRM'
    ],
    techStack: ['Next.js Engine', 'Tailwind CSS', 'Mortgage Math API', 'Netlify Edge']
  },
  {
    id: 'gyan-gurukul-academy',
    title: 'Gyan Gurukul Academic Coaching Institute',
    client: 'Gurukul Educational Foundation',
    category: 'education',
    categoryLabel: 'Education & Coaching',
    city: 'Gopalpura Bypass, Jaipur',
    tagline: 'Competitive exam course catalog, faculty credentials & student admission enrollment pipeline',
    image: '/images/jaipur_hawa_mahal_1790124825188.jpg',
    featured: false,
    metrics: [
      { label: 'Student Inquiries', value: '450+ Per Season' },
      { label: 'Admission Growth', value: '+54% Year-over-Year' },
      { label: 'Server Cost', value: '₹0 / Month' },
      { label: 'Scholarship Tests', value: '280+ Registrations' }
    ],
    challenge: 'Relying solely on paper pamphlets and street hoardings on Gopalpura Bypass with zero trackable digital admission inquiries.',
    solution: 'Constructed an authoritative academic web portal showcasing faculty profiles, past topper results, online syllabus explorer, and direct scholarship test registration.',
    keyFeatures: [
      'Digital prospectus explorer with instant course syllabus preview',
      'Direct parent inquiry dispatch to admissions desk WhatsApp',
      'Toppers wall of fame with verified results and testimonials',
      'Local EducationalOrganization Schema for Google ranking'
    ],
    techStack: ['Jamstack Next.js', 'Tailwind CSS', 'WhatsApp Intake API', 'Edge CDN']
  }
];
