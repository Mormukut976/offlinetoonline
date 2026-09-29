'use client';

import React from 'react';
import { COMPANY } from '@/data/company';
import { Check, ShieldCheck, Zap, ArrowRight, MessageSquare, Sparkles, Star } from 'lucide-react';
import { formatINR } from '@/lib/utils';

export default function AgencyPricing() {
  const packages = [
    {
      id: 'starter',
      name: 'Starter Presence',
      tagline: 'Ideal for local retail shops & single-location service businesses looking to get discovered.',
      price: 4999,
      badge: '48-Hour Setup',
      popular: false,
      features: [
        'High-Speed Jamstack Mobile-First Website',
        'Lifetime ₹0 Monthly Server Hosting Guarantee',
        'Free 1-Year .com or .in Custom Domain Registration',
        'Free Auto-Renewing SSL Security Certificate',
        'Direct 1-Tap WhatsApp Inbound Customer Routing',
        'Google Business Profile Setup & Geo-tagging',
        '100% Full Code & Domain Sovereignty Handover'
      ]
    },
    {
      id: 'growth',
      name: 'Growth + WhatsApp CRM',
      tagline: 'Our flagship package for clinics, travel operators, cafes, and high-ticket service firms.',
      price: 9999,
      badge: 'Most Popular',
      popular: true,
      features: [
        'Everything in Starter Package Included',
        'Google Maps 3-Pack Local Domination Engine',
        'Custom Interactive Calculator / Booking System',
        '1 Physical Acrylic NFC & QR Counter Review Standee',
        'Local Schema.org JSON-LD (Doctor, Taxi, Food, Realty)',
        'Automated WhatsApp Lead Capture & Logging Pipeline',
        'Guaranteed 48-Hour Live Production Turnaround',
        'Google PageSpeed Score 98-100 Guaranteed'
      ]
    },
    {
      id: 'enterprise',
      name: 'Omnichannel Suite',
      tagline: 'For established brands, real estate firms, and multi-location businesses needing maximum market share.',
      price: 18999,
      badge: 'Complete Solution',
      popular: false,
      features: [
        'Everything in Growth Package Included',
        'Multi-Location Google Business Profile Optimization',
        'Full Custom Web Application with Client Admin Controls',
        '2 Laser-Engraved Acrylic NFC Counter Standees',
        '5 Smart NFC Executive Metal / Matte Business Cards',
        'Citation Syndication across 25+ Indian Business Portals',
        '1-on-1 Strategy & Conversion Advisory with Raja Singh',
        'Lifetime Priority WhatsApp VIP Technical Support'
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 lg:py-28 relative overflow-hidden bg-[#090a12] border-b border-white/10">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[700px] h-[500px] ambient-glow-purple blur-[160px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="category-pill">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>TRANSPARENT ONE-TIME PACKAGES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-heading">
            Simple one-time pricing.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-300">
              Zero monthly software bills.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            No recurring monthly agency retainer. No hidden server costs. You own 100% of your code and digital assets from day one.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`modern-card p-8 flex flex-col justify-between relative transition-all duration-300 ${
                pkg.popular
                  ? 'border-violet-500/50 bg-gradient-to-b from-[#181a32] to-[#0f1122] shadow-2xl shadow-violet-950/40 lg:-translate-y-2'
                  : 'bg-[#0e101c] border-white/10'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full bg-gradient-to-r from-violet-600 to-emerald-500 text-white text-[11px] font-black uppercase tracking-wider shadow-lg flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    Recommended Growth Engine
                  </span>
                </div>
              )}

              <div className="space-y-6">
                
                {/* Header */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-black text-white font-heading">{pkg.name}</h3>
                    <span className="text-[11px] font-bold text-violet-300 uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10">
                      {pkg.badge}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed min-h-[36px]">{pkg.tagline}</p>
                </div>

                {/* Price */}
                <div className="pt-2 pb-4 border-b border-white/10">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-black text-white font-mono">
                      {formatINR(pkg.price)}
                    </span>
                    <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">One-Time Fee</span>
                  </div>
                  <span className="text-xs text-emerald-400 font-bold block mt-1">
                    + Guaranteed Lifetime ₹0 Monthly Server Cost
                  </span>
                </div>

                {/* Features List */}
                <div className="space-y-3 pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-300 block">
                    What&apos;s Included:
                  </span>
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Action Button */}
              <div className="pt-8 mt-6 border-t border-white/10">
                <a
                  href={`https://wa.me/${COMPANY.rawPhone}?text=${encodeURIComponent(
                    `Hello Raja! I want to book the ${pkg.name} (${formatINR(pkg.price)} one-time) for my business.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-4 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 rounded-full transition-all active:scale-95 ${
                    pkg.popular
                      ? 'btn-whatsapp-glow text-white'
                      : 'btn-secondary-dark text-slate-200'
                  }`}
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Choose {pkg.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Money-Back & Ownership Strip */}
        <div className="p-6 rounded-2xl bg-[#101222] border border-white/5 flex flex-wrap items-center justify-center gap-y-3 gap-x-8 text-xs text-slate-300 font-semibold">
          <span className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            100% Code Ownership Transfer
          </span>
          <span className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-cyan-400" />
            Guaranteed Sub-Second PageSpeed
          </span>
          <span className="flex items-center gap-2">
            <Star className="w-4 h-4 text-amber-400" />
            Free Laser-Engraved NFC Acrylic Standee
          </span>
        </div>

      </div>
    </section>
  );
}
