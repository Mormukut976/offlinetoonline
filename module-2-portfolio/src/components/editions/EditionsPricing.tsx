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
    <section id="pricing" className="py-20 border-t border-slate-800/80 bg-[#070a12]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-indigo-400">
              [ VII // TRANSPARENT PACKAGES & ROI ]
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
            Pay Once. Own Forever. ₹0 Monthly Retainers.
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
            Transparent one-time investments with lifetime zero server costs on Netlify. Full code and domain ownership handed to you on Day 1.
          </p>
        </div>

        {/* 3 Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_TIERS.map((tier) => (
            <div
              key={tier.id}
              className={`rounded-3xl p-7 sm:p-9 flex flex-col justify-between relative transition-all duration-300 ${
                tier.popular
                  ? 'edition-card border-2 border-indigo-500 shadow-2xl shadow-indigo-500/20 scale-100 lg:-translate-y-2'
                  : 'edition-card border border-slate-800'
              }`}
            >
              {tier.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-emerald-400 text-white text-[10px] font-mono font-bold uppercase tracking-wider shadow-lg shadow-indigo-500/30">
                  {tier.badge}
                </div>
              )}

              <div>
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="text-xl font-bold text-white">{tier.name}</h3>
                  <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                    {tier.deliveryTime}
                  </span>
                </div>

                <p className="text-xs text-slate-400 min-h-[36px]">
                  {tier.tagline}
                </p>

                {/* Price Display */}
                <div className="my-6 pb-6 border-b border-slate-800/80">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-black text-white font-mono tracking-tight">
                      ₹{tier.price.toLocaleString('en-IN')}
                    </span>
                    <span className="text-sm text-slate-500 line-through">
                      ₹{tier.originalPrice.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <span className="text-xs text-emerald-400 font-semibold block mt-1">
                    ✓ One-time investment • ₹0/mo hosting forever
                  </span>
                </div>

                {/* Features List */}
                <div className="space-y-3 text-xs sm:text-sm text-slate-300">
                  {tier.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span className="leading-relaxed">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-8 mt-6 border-t border-slate-800/80">
                <a
                  href={`https://wa.me/918000907924?text=${encodeURIComponent(tier.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition-all active:scale-95 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 text-white shadow-emerald-500/30'
                      : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-600/30'
                  }`}
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>{tier.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <p className="text-[11px] text-center text-slate-500 mt-2 font-mono">
                  Direct WhatsApp Raja Singh: +91 80009 07924
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* Aggregator Savings Simulator */}
        <div className="edition-card p-6 sm:p-10 space-y-8 bg-gradient-to-br from-[#0c1222] to-slate-950">
          <div className="text-center max-w-xl mx-auto space-y-1.5">
            <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
              FINANCIAL COMPARISON TOOL
            </span>
            <h3 className="text-2xl font-bold text-white">
              Aggregator Commissions vs O2O Asset
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Calculate how much money you save each year by replacing recurring Justdial / Indiamart fees with your own permanent Jamstack website.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-5 bg-slate-950/70 p-6 rounded-2xl border border-slate-800">
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-300 font-medium">Monthly Spend on Portals / Aggregators:</span>
                  <span className="text-emerald-400 font-mono font-bold text-base">₹{currentAggregatorSpend.toLocaleString('en-IN')}/mo</span>
                </div>
                <input
                  type="range"
                  min={3000}
                  max={50000}
                  step={1000}
                  value={currentAggregatorSpend}
                  onChange={(e) => setCurrentAggregatorSpend(Number(e.target.value))}
                  className="w-full accent-emerald-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
                />
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs pt-2">
                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="text-slate-400 block text-[11px]">Aggregator 1-Year Cost:</span>
                  <span className="text-base font-bold text-red-400 font-mono mt-0.5 block">
                    -₹{annualAggregatorLoss.toLocaleString('en-IN')}
                  </span>
                  <span className="text-[10px] text-slate-500">Drained every 12 months</span>
                </div>
                <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/30">
                  <span className="text-emerald-400 block text-[11px] font-semibold">O2O Digital Growth Suite:</span>
                  <span className="text-base font-bold text-white font-mono mt-0.5 block">
                    ₹{oneTimeO2OCost.toLocaleString('en-IN')}
                  </span>
                  <span className="text-[10px] text-emerald-400">1-time • ₹0/mo hosting</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 rounded-2xl bg-emerald-950/30 border border-emerald-500/40 text-center space-y-4">
              <div>
                <span className="text-[11px] font-mono text-slate-300 uppercase tracking-wider block">
                  Net Money Saved in Your Bank Account
                </span>
                <div className="text-3xl sm:text-4xl font-black text-emerald-400 font-mono mt-1">
                  +₹{firstYearSavings.toLocaleString('en-IN')}
                </div>
              </div>

              <p className="text-xs text-slate-300">
                Plus an estimated <strong>~{estimatedDirectLeads} exclusive monthly leads</strong> going straight to your WhatsApp without competitors getting the same lead.
              </p>

              <a
                href={`https://wa.me/918000907924?text=${encodeURIComponent(roiWhatsAppMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-xs sm:text-sm shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 transition-all"
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
