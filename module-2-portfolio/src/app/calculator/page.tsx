import React from 'react';
import InteractiveROICalculator from '@/components/pricing/InteractiveROICalculator';
import CTASection from '@/components/home/CTASection';
import { Calculator, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

export default function CalculatorPage() {
  return (
    <div className="py-12 lg:py-20 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <span className="text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            Live Interactive Engines
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Test Dynamic Business Calculators
          </h1>
          <p className="text-slate-400 text-sm sm:text-base">
            Experience the exact tools we code into our client websites. They answer customer questions instantly and turn random visitors into paid WhatsApp bookings.
          </p>
        </div>

        <InteractiveROICalculator />

        {/* Benefits of interactive calculators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
          <div className="glass-card p-6 rounded-2xl space-y-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Instant Trust & Price Transparency</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Customers hate calling 5 different agencies just to ask per-KM rates. Giving them an instant breakdown makes you the #1 preferred choice immediately.
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Pre-Filled WhatsApp Inquiries</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              The calculator formats the customer's pickup date, car preference, and expected price into a ready message so you close sales in 60 seconds on WhatsApp.
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl space-y-3">
            <div className="w-10 h-10 rounded-xl bg-teal-600/20 border border-teal-500/30 flex items-center justify-center text-teal-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Custom Business Logic</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Whether you need Rajasthan's 250 KM rule, clinic appointment advance slot deposits, or property EMI calculations, we code the custom rules specifically for you.
            </p>
          </div>
        </div>

      </div>

      <CTASection />
    </div>
  );
}
