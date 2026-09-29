export interface PricingPackage {
  id: string;
  name: string;
  badge?: string;
  tagline: string;
  price: number;
  setupDays: number;
  highlight?: boolean;
  popular?: boolean;
  features: string[];
  notIncluded?: string[];
  idealFor: string;
  whatsappMessage: string;
}

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: "starter",
    name: "Starter Digital Presence",
    badge: "48-Hour Turnaround",
    tagline: "Essential online presence for local retail shops and service providers to get discovered.",
    price: 4999,
    setupDays: 2,
    idealFor: "Retail stores, neighborhood boutiques, single-location consultants",
    features: [
      "Custom Jamstack Mobile-First Website (Up to 4 sections)",
      "Guaranteed Lifetime ₹0 Monthly Server Hosting on Netlify Edge",
      "Free 1-Year .com or .in Custom Domain Registration",
      "Free Auto-Renewing SSL Security Certificate",
      "Direct 1-Tap WhatsApp Inbound Customer Inquiries",
      "Google Business Profile Setup & Geographic Verification",
      "100% Full Code & Domain Ownership Handover on Day 1"
    ],
    notIncluded: [
      "Interactive Cost / Fare Calculators",
      "Physical Acrylic NFC Counter Standee",
      "Local Google 3-Pack Schema Syndication"
    ],
    whatsappMessage: "Hello Raja! I want to get started with the Starter Digital Presence package (₹4,999 one-time) for my business."
  },
  {
    id: "growth",
    name: "Growth Engine + WhatsApp CRM",
    badge: "Most Popular",
    tagline: "Our complete system for high-intent customer acquisition and Google Maps domination.",
    price: 9999,
    setupDays: 3,
    highlight: true,
    popular: true,
    idealFor: "Clinics, taxi fleets, restaurants, coaching academies, real estate brokers",
    features: [
      "Everything in Starter Package Included",
      "Google Maps 3-Pack Local Domination Engine",
      "Custom Interactive Calculator / Booking System",
      "1 Physical Acrylic NFC & QR Counter Review Standee Delivered",
      "Local Schema.org JSON-LD Structured Data",
      "Automated WhatsApp Lead Intake & Logging Pipeline",
      "Guaranteed 48-Hour Live Production Turnaround",
      "Google PageSpeed Score 98-100 Guaranteed"
    ],
    notIncluded: [
      "Multi-location profile syndication",
      "Metal NFC VIP business cards"
    ],
    whatsappMessage: "Hello Raja! I want the Growth Engine + WhatsApp CRM package (₹9,999 one-time) with the Interactive Tool and Acrylic NFC Standee."
  },
  {
    id: "enterprise",
    name: "Omnichannel Domination Suite",
    badge: "Complete Enterprise",
    tagline: "For established businesses and luxury brands requiring complete market dominance.",
    price: 18999,
    setupDays: 5,
    idealFor: "Multi-branch clinics, large travel agencies, luxury realty, hospitality chains",
    features: [
      "Everything in Growth Package Included",
      "Multi-Location Google Business Profile Optimization",
      "Full Custom Web Application with Client Admin Controls",
      "2 Laser-Engraved Acrylic NFC Counter Standees Delivered",
      "5 Smart NFC Executive Metal / Matte Business Cards",
      "Citation Syndication across 25+ Indian Business Portals",
      "1-on-1 Strategy & Conversion Advisory with Raja Singh",
      "Lifetime Priority WhatsApp VIP Technical Support"
    ],
    whatsappMessage: "Hello Raja! I want the complete Omnichannel Domination Suite (₹18,999 one-time) for my business. Please schedule a strategy consultation."
  }
];
