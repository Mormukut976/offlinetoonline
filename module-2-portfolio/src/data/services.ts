export interface ServiceItem {
  id: string;
  title: string;
  badge: string;
  description: string;
  features: string[];
  icon: string;
  startingPrice: number;
  highlight?: boolean;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'jamstack-website',
    title: 'High-Speed Jamstack Business Website',
    badge: '₹0 Monthly Hosting',
    description: 'Custom-coded, ultra-lightweight website that scores 98-100 on Google Mobile PageSpeed. Hosted on global edge CDNs with zero monthly server bills forever.',
    features: [
      'Sub-second 0.8s mobile load time',
      'Zero monthly hosting or database maintenance cost',
      'Custom domain & free auto-renewing SSL certificate',
      'Pre-filled WhatsApp booking & inquiry triggers',
      'Interactive pricing or fare calculation tools built-in'
    ],
    icon: 'Globe',
    startingPrice: 4999,
    highlight: true
  },
  {
    id: 'google-maps-seo',
    title: 'Google Business Profile & 3-Pack Local Domination',
    badge: 'Rank on Google Page 1',
    description: 'Transform your storefront into a local Google search magnet. We optimize your GBP, geotag photos, align citation schemas, and push you into the top 3 results.',
    features: [
      'Google Maps verification & complete category audit',
      'Local citation building across high-authority Indian portals',
      'Geotagged image metadata & service area geo-fencing',
      'Automated review acquisition funnel',
      'Rank tracking on mobile search in your target city'
    ],
    icon: 'MapPin',
    startingPrice: 3999
  },
  {
    id: 'interactive-tools',
    title: 'Interactive Calculators & Lead Estimators',
    badge: '2.8x Higher Conversion',
    description: 'Give your visitors instant answers. Dynamic outstation cab fare calculators, EMI calculators, appointment pickers, or quotation generators that convert traffic into paid customers.',
    features: [
      'Custom logic (e.g. 200 KM round-trip Rajasthan cab rules)',
      'Instant quote breakdown with advance deposit calculation',
      '1-Tap direct WhatsApp dispatch with client selected details',
      'Zero reliance on complex backend servers',
      'Mobile-optimized touch interface'
    ],
    icon: 'Calculator',
    startingPrice: 3499
  },
  {
    id: 'nfc-standees',
    title: 'Physical NFC & QR Smart Counter Standees',
    badge: 'Offline Trust Booster',
    description: 'Premium acrylic table standees with built-in NFC tap chip and high-resolution QR code placed directly at your cash counter to collect 5-star Google reviews from walk-in customers.',
    features: [
      '1-Tap NFC phone tap opens your Google review box directly',
      'Laser-engraved acrylic counter stand with agency branding',
      'Pre-printed QR code for older smartphones',
      'Prevents negative feedback by catching complaints privately',
      'Delivered physically to your shop/office in North India'
    ],
    icon: 'QrCode',
    startingPrice: 1499
  },
  {
    id: 'whatsapp-funnels',
    title: 'Automated WhatsApp Client Intake & CRM',
    badge: 'Zero App Installs',
    description: 'No complicated portals or login passwords for your customers. Inquiries land instantly on your WhatsApp with car type, dates, budget, or medical problem pre-filled.',
    features: [
      'Click-to-chat triggers tailored per service page',
      'Lead auto-logging to Google Sheets / Module 1 CRM',
      'Custom QR badges for business cards and car rear glass',
      'Instant notification to business owner mobile',
      'Zero monthly chatbot software subscription fees'
    ],
    icon: 'MessageSquare',
    startingPrice: 2499
  },
  {
    id: 'business-branding',
    title: 'Complete Digital Brand Identity & Domain Setup',
    badge: 'Turnkey Launch',
    description: 'Everything an offline businessman needs to look like a premium corporate brand. Professional domain, business emails, digital business card, and social presence.',
    features: [
      'Premium .com / .in / .world domain registration',
      'Google Workspace / Zoho professional business email setup',
      'High-resolution vector logo & social media banner pack',
      'Google Search Console & Bing Webmaster instant indexing',
      '1-on-1 Founder video training session with Raja Singh Chauhan'
    ],
    icon: 'Sparkles',
    startingPrice: 2999
  }
];
