import React from 'react';
import { PRICING_TIERS } from '@/data/pricing';
import { Check, MessageSquare, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export default function PricingTable() {
  return (
    <section className="py-20 bg-[#070b13]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            Transparent 1-Time Investment
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            No Monthly Retainers. No Hidden Server Bills.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Pay once, own forever. 100% full source code, domain, and Google Business Profile ownership transferred to you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_TIERS.map((tier) => (
            <div
              key={tier.id}
              className={`rounded-3xl p-7 sm:p-9 flex flex-col justify-between relative transition-all duration-300 ${
                tier.popular
                  ? 'glass-panel border-2 border-indigo-500 shadow-2xl shadow-indigo-500/20 scale-100 lg:-translate-y-2'
                  : 'glass-card border border-slate-800'
              }`}
            >
              {tier.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-emerald-400 text-white text-[11px] font-extrabold uppercase tracking-wider shadow-lg shadow-indigo-500/30">
                  {tier.badge}
                </div>
              )}

              <div>
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="text-xl font-bold text-white">{tier.name}</h3>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-slate-800 text-slate-300">
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
                    ✓ One-time setup • ₹0 monthly hosting forever
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

                <p className="text-[11px] text-center text-slate-500 mt-2">
                  Direct WhatsApp discussion with Raja Singh Chauhan
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* Custom Corporate Note */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-900/60 border border-slate-800 text-center max-w-2xl mx-auto space-y-2">
          <p className="text-xs sm:text-sm text-slate-300">
            Need a custom multi-location franchise portal or advanced ERP integration?
          </p>
          <a
            href="https://wa.me/918000907924?text=Namaste%20Raja%20bhai!%20I%20need%20a%20custom%20agency%20quote."
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-1"
          >
            <span>Talk to Raja Singh Chauhan for custom pricing</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
