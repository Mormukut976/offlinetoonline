'use client';

import React from 'react';
import BusinessROICalculator from '@/components/home/BusinessROICalculator';
import AgencyContact from '@/components/home/AgencyContact';
import { Calculator, CheckCircle2, ShieldCheck, Sparkles, Zap } from 'lucide-react';

export default function CalculatorPage() {
  return (
    <div className="py-12 lg:py-20 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <span className="category-pill">
            <Calculator className="w-3.5 h-3.5 text-emerald-400" />
            <span>INTERACTIVE BUSINESS CALCULATORS</span>
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight font-heading">
            Live Dynamic Business Engines
          </h1>
          <p className="text-slate-300 text-sm sm:text-base">
            Test the interactive mathematical engines we engineer for our client web apps. They answer customer questions instantly and turn search traffic into paid bookings.
          </p>
        </div>

        <BusinessROICalculator />

        {/* Benefits of interactive calculators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
          <div className="modern-card p-6 bg-[#0e101c] border-white/10 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white font-heading">Price Transparency & Instant Trust</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Customers avoid calling 5 different competitors just to ask rates. Giving them an instant quotation builds instant credibility.
            </p>
          </div>

          <div className="modern-card p-6 bg-[#0e101c] border-white/10 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white font-heading">Pre-Filled WhatsApp Routing</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Customer selections format directly into a structured WhatsApp message, allowing your team to close inquiries within 60 seconds.
            </p>
          </div>

          <div className="modern-card p-6 bg-[#0e101c] border-white/10 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white font-heading">Custom Industry Algorithms</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Whether you need Rajasthan 250 KM taxi rules, clinic slot scheduling deposits, or mortgage EMI logic, we code tailored rules for your firm.
            </p>
          </div>
        </div>

      </div>

      <AgencyContact />
    </div>
  );
}
