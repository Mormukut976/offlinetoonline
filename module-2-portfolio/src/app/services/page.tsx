import React from 'react';
import Link from 'next/link';
import { SERVICES } from '@/data/services';
import { ArrowRight, CheckCircle2, MessageSquare, Zap, Shield, Sparkles } from 'lucide-react';
import CTASection from '@/components/home/CTASection';

export default function ServicesPage() {
  return (
    <div className="py-12 lg:py-20 space-y-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            Agency Capabilities
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Full-Stack Services For{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">
              Offline Businesses
            </span>
          </h1>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            We do not sell generic cookie-cutter templates. Every website and tool is custom-engineered to solve the real bottleneck of offline Indian businesses: getting verified customers without recurring server bills.
          </p>
        </div>

        {/* Detailed Service Deep Dives */}
        <div className="space-y-12">
          {SERVICES.map((s, idx) => {
            const waMsg = `Namaste Raja bhai! I want to consult regarding *${s.title}* for my business.`;

            return (
              <div
                key={s.id}
                id={s.id}
                className="glass-panel rounded-3xl p-6 sm:p-10 border border-indigo-500/20 hover:border-indigo-500/40 transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  <div className="lg:col-span-8 space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono font-bold px-3 py-1 rounded bg-indigo-500/20 text-indigo-300">
                        SERVICE 0{idx + 1}
                      </span>
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                        {s.badge}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-bold text-white">
                      {s.title}
                    </h2>

                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                      {s.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                      {s.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-4 p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-5 text-center sm:text-left">
                    <div>
                      <span className="text-xs uppercase tracking-wider text-slate-400 block">Starting Investment</span>
                      <span className="text-3xl font-black text-white font-mono">₹{s.startingPrice.toLocaleString('en-IN')}</span>
                      <p className="text-[11px] text-emerald-400 font-medium mt-1">
                        ✓ ₹0 monthly hosting forever
                      </p>
                    </div>

                    <a
                      href={`https://wa.me/918000907924?text=${encodeURIComponent(waMsg)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 text-white font-bold text-xs sm:text-sm shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 transition-all"
                    >
                      <MessageSquare className="w-4 h-4 fill-white" />
                      <span>Book Strategy Call</span>
                    </a>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>

      <CTASection />
    </div>
  );
}
