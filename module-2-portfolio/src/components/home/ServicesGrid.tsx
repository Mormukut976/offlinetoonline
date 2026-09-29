import React from 'react';
import Link from 'next/link';
import { SERVICES } from '@/data/services';
import { Globe, MapPin, Calculator, QrCode, MessageSquare, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

const iconMap: Record<string, any> = {
  Globe,
  MapPin,
  Calculator,
  QrCode,
  MessageSquare,
  Sparkles
};

export default function ServicesGrid() {
  return (
    <section className="py-20 bg-[#080c14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            Full-Spectrum Digital Weaponry
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineered For Local Offline Dominance
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Everything your business needs to win on Google, convert walk-in foot traffic, and automate WhatsApp bookings at ₹0 monthly server cost.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((s) => {
            const Icon = iconMap[s.icon] || Globe;
            const waMsg = `Namaste Raja bhai! I am interested in your *${s.title}* service for my business.`;

            return (
              <div
                key={s.id}
                className={`glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between relative group ${
                  s.highlight ? 'border-indigo-500/50 shadow-xl shadow-indigo-500/10' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-indigo-600/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                      {s.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {s.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                    {s.description}
                  </p>

                  <div className="space-y-2 mt-5 pt-4 border-t border-slate-800/80">
                    {s.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase tracking-wider block">Starting at</span>
                    <span className="text-base font-black text-white font-mono">₹{s.startingPrice.toLocaleString('en-IN')}</span>
                  </div>

                  <a
                    href={`https://wa.me/918000907924?text=${encodeURIComponent(waMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 rounded-lg bg-indigo-600/20 hover:bg-indigo-600 text-indigo-300 hover:text-white text-xs font-semibold border border-indigo-500/30 flex items-center gap-1.5 transition-all"
                  >
                    <span>Inquire</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
