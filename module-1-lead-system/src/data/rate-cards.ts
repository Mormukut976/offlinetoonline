export interface ServiceRate {
  id: string;
  service: string;
  category: string;
  basicPrice: number;
  standardPrice: number;
  premiumPrice: number;
  description: string;
  features: {
    basic: string[];
    standard: string[];
    premium: string[];
  };
}

export const DEFAULT_RATE_CARDS: ServiceRate[] = [
  {
    id: "business-website",
    service: "Business Website",
    category: "Web Development",
    basicPrice: 4999,
    standardPrice: 9999,
    premiumPrice: 19999,
    description: "Ultra-fast Jamstack business website with 100/100 speed and zero monthly server maintenance.",
    features: {
      basic: ["1-3 Pages", "Mobile Responsive", "WhatsApp Direct Chat", "Free Lifetime Edge Hosting", "SSL Security"],
      standard: ["5-7 Pages", "Custom Interactive Calculator", "Google Search Console Indexing", "Local SEO Schema", "Contact Form"],
      premium: ["Unlimited Pages", "Custom Dynamic Booking Engine", "Priority GSC Crawl", "Review QR Code", "6 Months Support"]
    }
  },
  {
    id: "ecommerce-website",
    service: "E-Commerce Website",
    category: "Web Development",
    basicPrice: 14999,
    standardPrice: 29999,
    premiumPrice: 49999,
    description: "Complete online catalog or multi-product online store with payment gateway and automated invoice dispatch.",
    features: {
      basic: ["Up to 50 Products", "WhatsApp Ordering", "Razorpay Payment Gateway", "Admin Panel"],
      standard: ["Up to 300 Products", "Inventory Management", "Coupon Codes", "Customer Login", "Automated Invoices"],
      premium: ["Unlimited Products", "Multi-Vendor / B2B Portal", "Abandoned Cart Recovery", "Priority WhatsApp API Bot"]
    }
  },
  {
    id: "gmb-setup",
    service: "Google Business Profile & Maps Setup",
    category: "Local SEO",
    basicPrice: 1999,
    standardPrice: 3999,
    premiumPrice: 6999,
    description: "Get found in Google Maps Local 3-Pack with verified phone number, storefront photos, and keyword optimization.",
    features: {
      basic: ["Profile Verification Assistance", "Category & Pin Setting", "Business Hours"],
      standard: ["Local 3-Pack Keyword Optimization", "Storefront AI Branding Photos", "Review Generation Link & QR"],
      premium: ["Complete Multi-location Setup", "Weekly Google Posts Strategy", "Review Management Playbook"]
    }
  },
  {
    id: "seo-package",
    service: "Deep Technical & Local SEO",
    category: "Marketing",
    basicPrice: 4999,
    standardPrice: 9999,
    premiumPrice: 19999,
    description: "Schema.org structured data, XML sitemaps, PageSpeed 100 optimization, and local organic keyword ranking.",
    features: {
      basic: ["Schema.org JSON-LD (LocalBusiness)", "Robots.txt & Sitemap", "Basic Meta Tags"],
      standard: ["FAQ SERP Accordions", "Google Search Console Priority Indexing", "Competitor Keyword Tracking"],
      premium: ["Full Monthly On-Page + Off-Page SEO", "Backlink Strategy", "Monthly Ranking Reports"]
    }
  },
  {
    id: "social-media",
    service: "Social Media Management",
    category: "Marketing",
    basicPrice: 4999,
    standardPrice: 9999,
    premiumPrice: 19999,
    description: "Creative banners, festival wishes, reels, and branding posts for Instagram, Facebook, and Google Business.",
    features: {
      basic: ["8 Creative Posts/Month", "Festival Banners", "Hashtag Research"],
      standard: ["16 Posts + 4 Reels/Month", "Story Engagement", "Page Optimization"],
      premium: ["Daily Posts + 8 Reels", "Community Management", "Ad Creatives Included"]
    }
  },
  {
    id: "google-ads",
    service: "Google Call-Only & Search Ads",
    category: "Performance Ads",
    basicPrice: 3999,
    standardPrice: 7999,
    premiumPrice: 14999,
    description: "High-intent lead generation campaigns targeting local customers searching on Google right now.",
    features: {
      basic: ["Campaign Setup", "Keyword Research", "Call Extension Setup"],
      standard: ["Negative Keywords Optimization", "Conversion Tracking", "Weekly Budget Management"],
      premium: ["Multi-Campaign Setup (Search + Display + Call)", "Landing Page A/B Testing", "Dedicated Manager"]
    }
  },
  {
    id: "ai-whatsapp-bot",
    service: "AI WhatsApp Assistant & Automation",
    category: "Automation",
    basicPrice: 9999,
    standardPrice: 19999,
    premiumPrice: 34999,
    description: "24/7 AI-driven customer support bot trained on your business catalog with zero-cost Google Sheets CRM syncing.",
    features: {
      basic: ["Auto-Greeting & Interactive FAQ Menu", "Form-to-Google Sheets Sync", "Instant Owner Alerts"],
      standard: ["AI Chatbot trained on Catalog", "Lead Qualification Flow", "Automated PDF Receipt Dispatch"],
      premium: ["Full Multi-Agent Pipeline", "Payment Link in WhatsApp", "CRM & Webhook Integrations"]
    }
  }
];
