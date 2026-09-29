import React from 'react';
import { ShieldCheck, Check, Sparkles } from 'lucide-react';

export default function EditionsGrid() {
  const capabilities = [
    {
      title: 'Zero Monthly Server Hosting',
      desc: 'Hosted entirely on Netlify & Cloudflare global edge CDNs. Pure static Jamstack files with lifetime ₹0 server bills.',
      category: 'INFRASTRUCTURE'
    },
    {
      title: '0.8s Sub-Second Mobile PageSpeed',
      desc: 'Tested and guaranteed 98-100 score on Google PageSpeed Insights on 4G networks. Zero bloated WordPress plugins.',
      category: 'PERFORMANCE'
    },
    {
      title: 'Pre-Filled WhatsApp Routing',
      desc: 'Customer vehicle choice, date, or appointment details auto-fill into WhatsApp. Direct to business owner mobile phone.',
      category: 'CONVERSION'
    },
    {
      title: 'Physical Acrylic NFC Counter Standee',
      desc: 'Custom laser-engraved table standee with embedded NFC chip for cash counter. Customers tap phone to review on Google.',
      category: 'HARDWARE'
    },
    {
      title: 'Rajasthan 250 KM Fare Engine',
      desc: 'Custom calculation logic applying the 250 KM minimum per calendar day rule, driver bhatta, and vehicle rates.',
      category: 'CUSTOM LOGIC'
    },
    {
      title: 'Google Maps 3-Pack Ranking Engine',
      desc: 'Local category audit, citation alignment across 25+ Indian directories, and geo-fenced business profile setup.',
      category: 'LOCAL SEO'
    },
    {
      title: '100% Full Code & Domain Ownership',
      desc: 'Complete source code repository and domain registrar access transferred to client on launch day. No agency hostage.',
      category: 'TRANSPARENCY'
    },
    {
      title: '48-Hour Live Delivery Guarantee',
      desc: 'From initial 15-minute WhatsApp onboarding to live public domain in 48 hours flat.',
      category: 'TURNAROUND'
    },
    {
      title: 'Auto-Renewing Lifetime SSL (HTTPS)',
      desc: 'Bank-grade 256-bit encryption certificate included free with zero annual renewal fees.',
      category: 'SECURITY'
    },
    {
      title: 'Google Search Console Priority Indexing',
      desc: 'Sitemaps submitted immediately to Google and Bing with TaxiService or MedicalClinic JSON-LD schema markup.',
      category: 'INDEXING'
    },
    {
      title: 'Doctor Appointment & Slot Picker',
      desc: 'Interactive schedule picker for dental, orthopedic, and general medical clinics with reception WhatsApp sync.',
      category: 'HEALTHCARE'
    },
    {
      title: 'Digital QR Scannable Food Menus',
      desc: 'Instant contactless digital menus for cafes and restaurants that load in 0.3 seconds on customer phones.',
      category: 'HOSPITALITY'
    },
    {
      title: 'Direct PhonePe UPI Integration',
      desc: 'Client booking confirmation displays your official UPI QR code (80009079241@ybl) for instant advance deposits.',
      category: 'PAYMENTS'
    },
    {
      title: 'Zero Aggregator Commissions',
      desc: 'Keep 100% of your customer revenue. Stop paying 20-30% cuts to Justdial, Indiamart, Zomato, or MakeMyTrip.',
      category: 'PROFIT'
    },
    {
      title: 'Geotagged Storefront Media Pack',
      desc: 'EXIF GPS coordinates embedded into storefront photos so Google algorithm verifies your physical presence in Jaipur.',
      category: 'GEO-AUDIT'
    },
    {
      title: 'Direct Founder VIP Access',
      desc: 'Direct WhatsApp and personal phone consultation with Raja Singh Chauhan throughout the project lifecycle.',
      category: 'DEDICATION'
    }
  ];

  return (
    <section id="features" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-800 text-xs font-bold border border-slate-200">
            16 BUILT-IN CAPABILITIES
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            Everything You Need To Win. Zero Retainer Fees.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Detailed breakdown of our proprietary technology architecture and delivery standards. Every capability is included upfront.
          </p>
        </div>

        {/* 2-Column Grid on Crisp White (Wix style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 pt-4 border-t border-slate-200">
          {capabilities.map((item, idx) => (
            <div key={idx} className="space-y-2 border-b border-slate-100 pb-6 group">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-wider px-2 py-0.5 rounded-full bg-indigo-50 border border-indigo-100">
                  {item.category}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  0{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
