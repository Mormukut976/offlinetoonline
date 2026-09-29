import React from 'react';
import Link from 'next/link';
import { PROJECTS } from '@/data/projects';
import { ExternalLink, CheckCircle, Calculator, TrendingUp, Star, ShieldCheck, ArrowRight } from 'lucide-react';

export default function CaseStudyHero() {
  const caseStudy = PROJECTS[0]; // Bhumika Tour & Travels

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-[#080c14] via-[#091020] to-[#080c14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            Verified Case Study #1
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How We Put A Jaipur Travels Agency on{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">
              Google Page 1 (Rank 6.7)
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Real results delivered for <strong>Shree Bhumika Tour & Travels</strong>. Zero monthly server bills, custom 200 KM fare calculator, and instant customer WhatsApp bookings.
          </p>
        </div>

        {/* Case Study Card */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-indigo-500/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Proof & Story */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-3 py-1 rounded-lg text-xs font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                  Live Domain Verified
                </span>
                <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-slate-800 text-slate-300">
                  Jaipur, Rajasthan
                </span>
                <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                  Tour & Travels Cab Rental
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Bhumika Tour & Travels (bhumikatourandtravels.world)
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {caseStudy.solution}
              </p>

              {/* 4 Core Features */}
              <div className="space-y-2.5 pt-2">
                {caseStudy.keyFeatures.slice(0, 4).map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href={caseStudy.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs sm:text-sm inline-flex items-center gap-2 shadow-lg shadow-indigo-600/30 transition-all"
                >
                  <span>Visit Live Bhumika Travels Website</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <Link
                  href="/calculator"
                  className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs sm:text-sm inline-flex items-center gap-2 border border-slate-700 transition-all"
                >
                  <Calculator className="w-4 h-4 text-emerald-400" />
                  <span>Test 200 KM Fare Calculator</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Performance Stats Box */}
            <div className="lg:col-span-5">
              <div className="p-6 sm:p-8 rounded-2xl bg-[#0b1222] border border-slate-800 space-y-6 shadow-xl">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 pb-2 border-b border-slate-800">
                  Verified Business Impact
                </h4>

                <div className="grid grid-cols-2 gap-4">
                  {caseStudy.metrics.map((m, i) => (
                    <div key={i} className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/80">
                      <div className="text-xs text-slate-400">{m.label}</div>
                      <div className="text-lg sm:text-xl font-black text-emerald-400 mt-1">{m.value}</div>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-xl bg-indigo-950/30 border border-indigo-500/20 text-xs text-slate-300 space-y-2">
                  <div className="flex items-center gap-1.5 text-yellow-400 font-bold">
                    <span>★★★★★</span>
                    <span className="text-slate-300 ml-1">Client Feedback</span>
                  </div>
                  <p className="italic text-slate-300 leading-normal">
                    "Raja bhai ki website se hamari Justdial ki dependency bilkul khatam ho gayi. Ab direct WhatsApp par booking aati hai."
                  </p>
                  <p className="font-semibold text-white">— Kan Singh Ji, Owner</p>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
