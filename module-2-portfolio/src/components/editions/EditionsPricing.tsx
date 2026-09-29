'use client';

import React, { useState } from 'react';
import { PRICING_TIERS } from '@/data/pricing';
import { Check, MessageSquare, ArrowRight, Sparkles, DollarSign, ShieldCheck } from 'lucide-react';

export default function EditionsPricing() {
  // ROI Slider State
  const [currentAggregatorSpend, setCurrentAggregatorSpend] = useState<number>(12000);
  const annualAggregatorLoss = currentAggregatorSpend * 12;
  const oneTimeO2OCost = 9999;
  const firstYearSavings = annualAggregatorLoss - oneTimeO2OCost;
  const estimatedDirectLeads = Math.round(currentAggregatorSpend / 200) + 15;

  const roiWhatsAppMsg = `Namaste Raja bhai! I calculated my aggregator savings on your website: I currently spend ₹${currentAggregatorSpend}/month on Justdial/Indiamart. I want the Growth Business Suite (₹9,999) to save ₹${firstYearSavings} this year!`;

  return (
    <section id="pricing" className="py-20 bg-slate-50/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
            TRANSPARENT 1-TIME INVESTMENT
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            Pay Once. Own Forever. Zero Monthly Retainers.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Transparent one-time investments with lifetime zero server costs on Netlify. Full code and domain ownership handed to you on Day 1.
          </p>
        </div>

        {/* 3 Packages Grid (Wix Pricing Style) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_TIERS.map((tier) => (
            <div
              key={tier.id}
              className={`rounded-3xl p-8 sm:p-9 flex flex-col justify-between relative transition-all duration-300 bg-white ${
                tier.popular
                  ? 'border-2 border-black shadow-2xl scale-100 lg:-translate-y-2'
                  : 'border border-slate-200 shadow-md hover:shadow-xl'
              }`}
            >
              {tier.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-black text-white text-[11px] font-extrabold uppercase tracking-wider shadow-md">
                  {tier.badge}
                </div>
              )}

              <div>
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="text-2xl font-black text-slate-900">{tier.name}</h3>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                    {tier.deliveryTime}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 min-h-[40px] mt-1">
                  {tier.tagline}
                </p>

                {/* Price Display */}
                <div className="my-6 pb-6 border-b border-slate-100">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight">
                      ₹{tier.price.toLocaleString('en-IN')}
                    </span>
                    <span className="text-sm text-slate-400 line-through">
                      ₹{tier.originalPrice.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <span className="text-xs text-emerald-700 font-bold block mt-1">
                    ✓ One-time setup • ₹0/mo hosting forever
                  </span>
                </div>

                {/* Features List */}
                <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                  {tier.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span className="leading-relaxed">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-8 mt-6 border-t border-slate-100">
                <a
                  href={`https://wa.me/918000907924?text=${encodeURIComponent(tier.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-4 rounded-full font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all active:scale-95 ${
                    tier.popular
                      ? 'bg-black hover:bg-slate-800 text-white'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-200'
                  }`}
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>{tier.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <p className="text-[11px] text-center text-slate-500 mt-2 font-medium">
                  Direct WhatsApp Raja Singh: +91 80009 07924
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* Aggregator Savings Simulator on Crisp White Card */}
        <div className="wix-card p-6 sm:p-10 space-y-8 bg-white border border-slate-200 shadow-xl">
          <div className="text-center max-w-xl mx-auto space-y-1.5">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200">
              FINANCIAL COMPARISON TOOL
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-950 mt-2">
              Aggregator Commissions vs O2O Jamstack Asset
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Calculate how much money you save each year by replacing recurring Justdial / Indiamart fees with your own permanent Jamstack website.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-5 bg-slate-50 p-6 sm:p-7 rounded-2xl border border-slate-200">
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-800 font-bold">Monthly Spend on Portals / Aggregators:</span>
                  <span className="text-emerald-700 font-bold text-base">₹{currentAggregatorSpend.toLocaleString('en-IN')}/mo</span>
                </div>
                <input
                  type="range"
                  min={3000}
                  max={50000}
                  step={1000}
                  value={currentAggregatorSpend}
                  onChange={(e) => setCurrentAggregatorSpend(Number(e.target.value))}
                  className="w-full accent-black h-2.5 bg-slate-200 rounded-lg cursor-pointer"
                />
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs pt-2">
                <div className="p-4 rounded-xl bg-white border border-slate-200">
                  <span className="text-slate-500 block text-xs">Aggregator 1-Year Cost:</span>
                  <span className="text-lg font-black text-red-600 mt-1 block">
                    -₹{annualAggregatorLoss.toLocaleString('en-IN')}
                  </span>
                  <span className="text-[11px] text-slate-400">Drained every 12 months</span>
                </div>
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
                  <span className="text-emerald-800 block text-xs font-bold">O2O Growth Suite:</span>
                  <span className="text-lg font-black text-slate-900 mt-1 block">
                    ₹{oneTimeO2OCost.toLocaleString('en-IN')}
                  </span>
                  <span className="text-[11px] text-emerald-700 font-semibold">1-time • ₹0/mo hosting</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 p-7 rounded-2xl bg-white border-2 border-slate-900 text-center space-y-4 shadow-xl">
              <div>
                <span className="text-xs font-bold text-slate-600 uppercase tracking-wider block">
                  Net Money Saved in Your Bank Account
                </span>
                <div className="text-4xl sm:text-5xl font-black text-slate-950 mt-1">
                  +₹{firstYearSavings.toLocaleString('en-IN')}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Plus an estimated <strong>~{estimatedDirectLeads} exclusive monthly leads</strong> going straight to your WhatsApp without competitors getting the same lead.
              </p>

              <a
                href={`https://wa.me/918000907924?text=${encodeURIComponent(roiWhatsAppMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-emerald-600/25 flex items-center justify-center gap-2 transition-all active:scale-95"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Save ₹{firstYearSavings.toLocaleString('en-IN')} With Raja Singh</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
