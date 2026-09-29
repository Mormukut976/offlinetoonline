export interface PricingTier {
  id: string;
  name: string;
  badge?: string;
  popular?: boolean;
  price: number;
  originalPrice: number;
  deliveryTime: string;
  tagline: string;
  description: string;
  features: string[];
  ctaText: string;
  whatsappMessage: string;
}

export const PRICING_TIERS: PricingTier[] = [
  {
    id: "starter",
    name: "Starter Offline-to-Online",
    price: 4999,
    originalPrice: 8999,
    deliveryTime: "48 Hours Delivery",
    tagline: "Perfect for small local shops, doctors, tutors, and solo service providers.",
    description: "Get your business live on Google with zero monthly hosting fees and direct WhatsApp customer inquiries.",
    features: [
      "3-Page High Speed Jamstack Website (Home, Services, Contact)",
      "100% Lifetime ₹0 Monthly Server / Hosting Cost",
      "Google Business Profile (GBP) Verification & Map Pin Setup",
      "Pre-filled WhatsApp Direct Lead Button",
      "Mobile-first responsive design (Sub-second load speed)",
      "Free Domain Setup (.com / .in / .world) & Lifetime SSL",
      "Standard Google Search Console Sitemap Indexing"
    ],
    ctaText: "Start with ₹4,999",
    whatsappMessage: "Namaste Raja bhai! I want to start with the *Starter Offline-to-Online Package (₹4,999)* for my business. Please share onboarding details."
  },
  {
    id: "growth",
    name: "Growth Business Suite",
    badge: "MOST POPULAR — BEST VALUE",
    popular: true,
    price: 9999,
    originalPrice: 17999,
    deliveryTime: "72 Hours Delivery",
    tagline: "Best for Tour & Travels, Clinics, Cafes, Showrooms & Contractors.",
    description: "A complete customer-acquisition machine featuring custom interactive tools, Google 3-pack SEO, and physical NFC counter standee.",
    features: [
      "Everything in Starter + Up to 7 Custom Interactive Pages",
      "Custom Interactive Calculator (e.g. Outstation Cab Fare, EMI, Quote Estimator)",
      "Local Google 3-Pack SEO Domination & Local Schema.org Markup",
      "1 Physical Laser-Cut Acrylic NFC/QR Counter Review Standee delivered to your shop",
      "Direct WhatsApp Instant Booking Dispatcher with pre-filled client selections",
      "100/100 Google Mobile PageSpeed Guaranteed",
      "Professional Business Email Setup (Google / Zoho)",
      "1 Month Dedicated Ranking & Support Guarantee"
    ],
    ctaText: "Get Growth Suite (₹9,999)",
    whatsappMessage: "Namaste Raja bhai! I want the *Growth Business Suite (₹9,999)* with the Interactive Calculator and Acrylic NFC Review Standee. Let us discuss my business."
  },
  {
    id: "enterprise",
    name: "Enterprise Domination",
    badge: "FULL AUTOMATION",
    price: 18999,
    originalPrice: 34999,
    deliveryTime: "5-7 Days Delivery",
    tagline: "For established brands, multi-branch businesses & aggressive market leaders.",
    description: "Multi-city SEO architecture, complete lead CRM synchronization, 2 physical NFC standees, and VIP founder priority support.",
    features: [
      "Everything in Growth + Unlimited Pages & Multi-City Landing Architecture",
      "Multi-City Local SEO targeting 8+ North India cities (Jaipur, Delhi, Gurgaon, Udaipur, etc.)",
      "Direct Lead Auto-Sync with Private Agency CRM & Google Sheets",
      "2 Physical Acrylic NFC/QR Smart Counter Standees for multiple locations",
      "Advanced Lead Scoring & Automated WhatsApp Follow-up System",
      "Custom Payment Gateway / PhonePe UPI Integration for advance deposits",
      "Priority 24/7 VIP Phone Support directly with Raja Singh Chauhan"
    ],
    ctaText: "Dominate My Market (₹18,999)",
    whatsappMessage: "Namaste Raja bhai! I want the complete *Enterprise Domination Suite (₹18,999)* for multi-city coverage and full automation. Please schedule a strategy call."
  }
];
