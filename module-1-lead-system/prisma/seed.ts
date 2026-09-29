import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // 1. Seed Rate Cards
  const rateCards = [
    {
      service: "Business Website",
      category: "Web Development",
      basicPrice: 4999,
      standardPrice: 9999,
      premiumPrice: 19999,
      description: "Ultra-fast Jamstack business website with 100/100 speed and zero monthly server maintenance.",
      features: JSON.stringify({
        basic: ["1-3 Pages", "Mobile Responsive", "WhatsApp Direct Chat", "Free Lifetime Hosting"],
        standard: ["5-7 Pages", "Custom Calculator", "Google Search Console Indexing", "Local SEO Schema"],
        premium: ["Unlimited Pages", "Dynamic Booking Engine", "Priority GSC Crawl", "Review QR Code"]
      })
    },
    {
      service: "E-Commerce Website",
      category: "Web Development",
      basicPrice: 14999,
      standardPrice: 29999,
      premiumPrice: 49999,
      description: "Complete online catalog or multi-product store with payment gateway and automated invoices.",
      features: JSON.stringify({
        basic: ["Up to 50 Products", "WhatsApp Ordering", "Razorpay Payment Gateway"],
        standard: ["Up to 300 Products", "Inventory Management", "Coupon Codes", "Automated Invoices"],
        premium: ["Unlimited Products", "Multi-Vendor / B2B", "Abandoned Cart Recovery", "WhatsApp Bot"]
      })
    },
    {
      service: "Google My Business & Maps Setup",
      category: "Local SEO",
      basicPrice: 1999,
      standardPrice: 3999,
      premiumPrice: 6999,
      description: "Get found in Google Maps Local 3-Pack with verified phone number and storefront photos.",
      features: JSON.stringify({
        basic: ["Profile Verification Assistance", "Category & Pin Setting"],
        standard: ["Local 3-Pack Optimization", "Storefront AI Branding Photos", "Review QR Code"],
        premium: ["Complete Multi-location Setup", "Weekly Google Posts Strategy", "Review Management"]
      })
    },
    {
      service: "Deep Technical & Local SEO",
      category: "Marketing",
      basicPrice: 4999,
      standardPrice: 9999,
      premiumPrice: 19999,
      description: "Schema.org structured data, XML sitemaps, and organic keyword ranking on Google Search.",
      features: JSON.stringify({
        basic: ["Schema.org JSON-LD", "Robots.txt & Sitemap", "Basic Meta Tags"],
        standard: ["FAQ SERP Accordions", "Google Search Console Priority Indexing", "Keyword Tracking"],
        premium: ["Full Monthly On-Page + Off-Page", "Backlink Strategy", "Monthly Ranking Reports"]
      })
    },
    {
      service: "Social Media Management",
      category: "Marketing",
      basicPrice: 4999,
      standardPrice: 9999,
      premiumPrice: 19999,
      description: "Banners, festival wishes, reels, and branding posts for Instagram, Facebook, and Google.",
      features: JSON.stringify({
        basic: ["8 Creative Posts/Month", "Festival Banners"],
        standard: ["16 Posts + 4 Reels/Month", "Story Engagement", "Page Optimization"],
        premium: ["Daily Posts + 8 Reels", "Community Management", "Ad Creatives Included"]
      })
    },
    {
      service: "Google Call-Only & Search Ads",
      category: "Performance Ads",
      basicPrice: 3999,
      standardPrice: 7999,
      premiumPrice: 14999,
      description: "High-intent lead generation campaigns targeting local customers searching on Google right now.",
      features: JSON.stringify({
        basic: ["Campaign Setup", "Keyword Research", "Call Extension"],
        standard: ["Negative Keywords Optimization", "Conversion Tracking", "Weekly Budget Management"],
        premium: ["Multi-Campaign Setup", "Landing Page A/B Testing", "Dedicated Manager"]
      })
    },
    {
      service: "AI WhatsApp Assistant & Automation",
      category: "Automation",
      basicPrice: 9999,
      standardPrice: 19999,
      premiumPrice: 34999,
      description: "24/7 AI-driven customer support bot trained on your business catalog with Google Sheets CRM.",
      features: JSON.stringify({
        basic: ["Auto-Greeting & FAQ Menu", "Google Sheets Sync", "Instant Owner Alerts"],
        standard: ["AI Chatbot trained on Catalog", "Lead Qualification Flow", "Automated PDF Receipts"],
        premium: ["Full Multi-Agent Pipeline", "Payment Link in WhatsApp", "CRM & Webhook Integrations"]
      })
    }
  ];

  for (const rc of rateCards) {
    await prisma.rateCard.create({ data: rc });
  }

  // 2. Seed Verified Leads
  const l1 = await prisma.lead.create({
    data: {
      businessName: "Bhumika Tour & Travels",
      ownerName: "Vicky Chawala",
      phone: "+91-7374831405",
      email: "vickychawla8690@gmail.com",
      website: "https://bhumikatourandtravels.world/",
      category: "tour_travel",
      city: "Jaipur",
      state: "Rajasthan",
      address: "109, Ekta Nagar, S-Block, Keshopura, Jaipur 302021",
      rating: 4.9,
      status: "converted",
      source: "referral",
      notes: "Flagship live client. Toyota Innova outstation taxi. Google Search Console Rank 6.7.",
      followUpDate: new Date(Date.now() + 86400000 * 7),
      activities: {
        create: [
          { type: "call", content: "Initial consultation call with Vicky bhai regarding outstation cab website." },
          { type: "meeting", content: "Delivered full website with 200 KM fare calculator and Google Maps verification." }
        ]
      }
    }
  });

  const l2 = await prisma.lead.create({
    data: {
      businessName: "Find My Tour",
      ownerName: "Manager",
      phone: "+91-9326260377",
      website: null,
      category: "tour_travel",
      city: "Jaipur",
      state: "Rajasthan",
      address: "Gopi Nath Marg, M.I. Road, Jaipur",
      rating: 4.5,
      status: "new",
      source: "google_maps",
      notes: "Scraped via lead hunter. High-opportunity tour agency on M.I. Road with NO website.",
      followUpDate: new Date()
    }
  });

  const l3 = await prisma.lead.create({
    data: {
      businessName: "Shri Balaji Properties",
      ownerName: "Balaji Ji",
      phone: "+91-8107053691",
      website: null,
      category: "real_estate",
      city: "Jaipur",
      state: "Rajasthan",
      address: "Shikarpura, Jaipur",
      rating: 4.8,
      status: "contacted",
      source: "google_maps",
      notes: "Promising real estate dealer in Shikarpura. Pitch message prepared for WhatsApp outreach.",
      followUpDate: new Date()
    }
  });

  const l4 = await prisma.lead.create({
    data: {
      businessName: "Dental Care Centre 2",
      ownerName: "Dr. Sharma",
      phone: "+91-9829012345",
      website: null,
      category: "hospital",
      city: "Jaipur",
      state: "Rajasthan",
      address: "Gopal Bari, Ajmer Road, Jaipur",
      rating: 4.7,
      status: "interested",
      source: "google_maps",
      notes: "Doctor interested in Google Maps 5-star boost and patient appointment scheduler.",
      followUpDate: new Date(Date.now() + 86400000 * 2)
    }
  });

  // 3. Seed Sample Quotation
  await prisma.quotation.create({
    data: {
      quotationNo: "QT-2026-001",
      leadId: l1.id,
      clientName: "Vicky Chawala",
      clientBusiness: "Bhumika Tour & Travels",
      clientPhone: "+91-7374831405",
      clientEmail: "vickychawla8690@gmail.com",
      items: JSON.stringify([
        { service: "Business Website", description: "Ultra-fast Jamstack site with 200 KM fare calculator", price: 14999, qty: 1 },
        { service: "Google My Business Setup", description: "Local 3-Pack Optimization & AI Storefront photos", price: 3999, qty: 1 },
        { service: "Deep Technical & Local SEO", description: "Schema.org TaxiService, FAQ rich snippets, GSC submission", price: 4999, qty: 1 }
      ]),
      subtotal: 23997,
      discount: 4000,
      tax: 0,
      total: 19997,
      validUntil: new Date(Date.now() + 86400000 * 30),
      status: "accepted",
      notes: "1-time turnkey digital setup. Zero recurring server hosting fees."
    }
  });

  // 4. Seed Sample Projects in Production Kanban
  await prisma.project.create({
    data: {
      clientName: "Bhumika Tour & Travels",
      projectType: "Full Web Presence + Calculator + SEO",
      status: "delivered",
      price: 19997,
      paidAmount: 19997,
      assignedTo: "Vicky Chawala"
    }
  });

  await prisma.project.create({
    data: {
      clientName: "Find My Tour (M.I. Road)",
      projectType: "Standard Tour Operator Website",
      status: "designing",
      price: 9999,
      paidAmount: 5000,
      assignedTo: "Lead Designer"
    }
  });

  await prisma.project.create({
    data: {
      clientName: "Dental Care Centre 2",
      projectType: "Clinic Portal & Google Maps SEO",
      status: "pending",
      price: 12999,
      paidAmount: 0,
      assignedTo: "Developer"
    }
  });

  console.log("✅ Database successfully seeded!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
