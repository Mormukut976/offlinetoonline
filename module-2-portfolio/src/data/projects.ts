export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  category: 'tour_travel' | 'medical' | 'food' | 'real_estate' | 'education';
  categoryLabel: string;
  city: string;
  tagline: string;
  heroUrl?: string;
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
    title: 'Bhumika Tour & Travels — Outstation Cab & Sightseeing Portal',
    client: 'Shree Bhumika Tour & Travels (Owner: Kan Singh)',
    category: 'tour_travel',
    categoryLabel: 'Tour & Travels',
    city: 'Jaipur, Rajasthan',
    tagline: 'Google Page 1 Ranking with 200 KM Interactive Fare Calculator & Direct WhatsApp Dispatch',
    liveUrl: 'https://bhumikatourandtravels.world/',
    featured: true,
    metrics: [
      { label: 'Google Rank', value: '#6.7 on Page 1' },
      { label: 'Mobile Speed', value: '100/100 PageSpeed' },
      { label: 'Hosting Cost', value: '₹0 / Month' },
      { label: 'Direct Bookings', value: '140+ Monthly Leads' }
    ],
    challenge: 'The client was paying high monthly fees to aggregator portals (Justdial / Indiamart) with poor lead quality and wasted marketing budgets on slow WordPress websites that took 6+ seconds to load on 4G phones.',
    solution: 'Engineered a hyper-fast Jamstack web app on Netlify edge CDN with a specialized interactive Rajasthan fare calculation engine (200 KM minimum outstation round-trip logic, driver allowance, toll/tax estimator), backed by geo-targeted Schema.org markup and Google Business Profile optimization.',
    keyFeatures: [
      'Interactive 200 KM Outstation Fare Calculator for Dzire, Ertiga, Innova Crysta, Tempo Traveller',
      '1-Tap WhatsApp Booking Dispatcher with pre-filled pickup date, car choice, and distance',
      'Google Search Console indexing with TaxiService JSON-LD Schema',
      'Zero monthly hosting bill using Netlify edge infrastructure',
      'Storefront Google Business Profile branding in Jaipur'
    ],
    techStack: ['Vanilla HTML5/CSS3', 'Dynamic JS Engine', 'Netlify Edge CDN', 'Schema.org', 'WhatsApp Direct API']
  },
  {
    id: 'apex-health-dental',
    title: 'Apex Multi-Specialty Dental & Oral Surgery Clinic',
    client: 'Dr. Vivek Sharma (BDS, MDS)',
    category: 'medical',
    categoryLabel: 'Healthcare & Clinic',
    city: 'Vaishali Nagar, Jaipur',
    tagline: 'Online Doctor Appointment Scheduler & Google 3-Pack Local Patient Funnel',
    featured: true,
    metrics: [
      { label: 'Google 3-Pack', value: 'Top 3 Ranking' },
      { label: 'Patient Walk-ins', value: '+68% Growth' },
      { label: 'Server Cost', value: '₹0 / Month' },
      { label: 'Patient Reviews', value: '4.9 ★ (120+)' }
    ],
    challenge: 'Patients looking for emergency root canals or dental implants in Vaishali Nagar were booking competing clinics because Dr. Vivek had no mobile website or instant consultation booking portal.',
    solution: 'Created an elegant, ultra-clean clinic portal featuring procedure costs, before/after smile transformations, and an instant time-slot appointment booking form that sends patient details straight to the clinic reception WhatsApp.',
    keyFeatures: [
      'Interactive Smile Assessment & Treatment Cost Estimator',
      'Direct WhatsApp Appointment Scheduler with doctor slot confirmation',
      'NFC Counter Review Standee for front reception counter',
      'MedicalProcedure & Physician Schema for local Google search'
    ],
    techStack: ['Jamstack Next.js', 'Tailwind CSS', 'WhatsApp Business API', 'Google Cloud CDN']
  },
  {
    id: 'the-royal-haveli-cafe',
    title: 'The Royal Haveli Cafe & Rooftop Lounge',
    client: 'Royal Haveli Hospitality Group',
    category: 'food',
    categoryLabel: 'Restaurant & Cafe',
    city: 'MI Road, Jaipur',
    tagline: 'Digital QR Food Menu & Rooftop Table Reservation System',
    featured: false,
    metrics: [
      { label: 'Table Bookings', value: '45+ Per Weekend' },
      { label: 'Menu Load Time', value: '0.4 Seconds' },
      { label: 'Monthly Hosting', value: '₹0 / Month' },
      { label: 'Zomato Dependency', value: '-40% Commision' }
    ],
    challenge: 'Heavy reliance on food delivery aggregators taking 25-30% commissions on dine-in inquiries and slow paper menu reprint costs.',
    solution: 'Designed a high-vibe rooftop cafe web presence with instant QR-scannable digital menu, private celebration booking engine, and direct table reservations.',
    keyFeatures: [
      'Interactive visual digital menu with Chef Special badges',
      'Rooftop Candlelight & Birthday Table Reservation form',
      'Instagram live reel feed integration',
      'Acrylic QR table standees with Google 5-Star review trigger'
    ],
    techStack: ['Jamstack', 'Tailwind CSS', 'QR Code Engine', 'Vercel Edge']
  },
  {
    id: 'marudhar-realty-infra',
    title: 'Marudhar Realty & Property Developers',
    client: 'Marudhar Estates Pvt Ltd',
    category: 'real_estate',
    categoryLabel: 'Real Estate',
    city: 'Mansarovar, Jaipur',
    tagline: 'Verified JDA-Approved Plots Showcase & EMI Home Loan Estimator',
    featured: false,
    metrics: [
      { label: 'High-Ticket Inquiries', value: '35+ Monthly' },
      { label: 'Lead Response Time', value: '< 2 Minutes' },
      { label: 'Cost Per Lead', value: '₹0 Direct Leads' },
      { label: 'Client Trust', value: '100% JDA Verified' }
    ],
    challenge: 'High cost of 99acres and Magicbricks listings where competitor brokers were getting the same buyer leads.',
    solution: 'Built an exclusive direct builder showcase featuring HD virtual plot layouts, JDA approval document downloads, and an instant EMI calculator.',
    keyFeatures: [
      'Interactive Plot Area (Gaj to Sq Ft) & EMI Calculator',
      'Instant WhatsApp Brochure Download via automated trigger',
      'Google Maps 360-degree street view neighborhood tour',
      'Direct broker video call booking link'
    ],
    techStack: ['Next.js', 'Tailwind CSS', 'PDF Engine', 'Netlify Edge']
  }
];
