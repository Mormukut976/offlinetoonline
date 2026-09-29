'use client';

import React from 'react';
import AgencyPricing from '@/components/home/AgencyPricing';
import BusinessROICalculator from '@/components/home/BusinessROICalculator';
import { HelpCircle, ShieldCheck, Zap, Award, ArrowRight, MessageSquare } from 'lucide-react';
import { COMPANY } from '@/data/company';

export default function PricingPage() {
  const faqs = [
    {
      q: 'Will there truly be zero recurring monthly hosting bills?',
      a: 'Yes, 100% guaranteed. We utilize modern Jamstack architecture running on Netlify and Cloudflare global edge networks. Unlike WordPress or legacy PHP sites, our architecture has no database or shared cPanel server dependencies, ensuring lifetime ₹0 server maintenance bills.'
    },
    {
      q: 'How fast will my web application and Google 3-Pack be live?',
      a: 'Our Starter Digital Presence package deploys live within 48 hours. The Growth Engine package launches within 72 hours, including custom interactive calculators and verified Google Business Profile optimization.'
    },
    {
      q: 'How does payment and onboarding work?',
      a: 'We accept payments via official UPI (80009079241@ybl) and direct bank transfer. Onboarding starts with a 50% token deposit, with the remaining 50% payable upon final testing and approval of your live production website.'
    },
    {
      q: 'How is the physical Acrylic NFC Standee delivered to my location?',
      a: 'Our Growth and Enterprise packages include a custom laser-engraved acrylic NFC standee. Within 4 to 5 business days after your website goes live, the physical hardware is securely dispatched via courier directly to your business address.'
    }
  ];

  return (
    <div className="py-12 lg:py-20 space-y-20">
      <AgencyPricing />

      {/* ROI Calculator Section */}
      <BusinessROICalculator />

      {/* FAQs */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="category-pill">
            <HelpCircle className="w-3.5 h-3.5 text-violet-400" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-heading">
            Common questions answered upfront
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="modern-card p-6 bg-[#0e101c] border-white/10 space-y-2">
              <h3 className="text-base font-bold text-white flex items-center gap-2.5">
                <HelpCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{faq.q}</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pl-6">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Direct CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#161a32] to-[#0c0e18] border border-violet-500/30 space-y-6">
          <h3 className="text-2xl sm:text-3xl font-black text-white font-heading">
            Need a custom enterprise architecture?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            Contact Raja Singh Chauhan directly on WhatsApp to design a tailored multi-city digital pipeline for your firm.
          </p>
          <a
            href={`https://wa.me/${COMPANY.rawPhone}?text=${encodeURIComponent('Hello Raja! I need a custom agency quote for my business.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-whatsapp-glow px-6 py-3.5 text-xs sm:text-sm"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>Chat Directly on WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
