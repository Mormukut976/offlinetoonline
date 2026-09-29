import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import StatsCounter from '@/components/home/StatsCounter';
import CaseStudyHero from '@/components/home/CaseStudyHero';
import ServicesGrid from '@/components/home/ServicesGrid';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import ProcessTimeline from '@/components/home/ProcessTimeline';
import InteractiveROICalculator from '@/components/pricing/InteractiveROICalculator';
import PricingTable from '@/components/pricing/PricingTable';
import CTASection from '@/components/home/CTASection';
import { TESTIMONIALS } from '@/data/testimonials';
import { Star, MessageSquare } from 'lucide-react';

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <StatsCounter />
      <CaseStudyHero />
      <ServicesGrid />

      {/* Live Interactive Calculator Section */}
      <section className="py-20 bg-[#060a12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              Live Interactive Tools
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Test Our Custom Business Engines
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              We build specialized high-conversion calculators that give customers instant prices and send verified booking inquiries straight to your phone.
            </p>
          </div>
          <InteractiveROICalculator />
        </div>
      </section>

      <WhyChooseUs />
      <ProcessTimeline />
      <PricingTable />

      {/* Testimonials Section */}
      <section className="py-20 bg-[#080c14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              Client Proof
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              What North India's Business Owners Say
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Real feedback from local entrepreneurs who moved their businesses from offline to Google Page 1 with Raja Singh Chauhan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="glass-card p-7 rounded-2xl flex flex-col justify-between space-y-5">
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-yellow-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 space-y-2">
                  <div className="p-2.5 rounded-lg bg-emerald-950/20 border border-emerald-500/20 text-[11px] text-emerald-300 font-semibold">
                    🎯 {t.result}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{t.name}</h4>
                    <p className="text-xs text-slate-400">{t.role}, {t.business} ({t.city})</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
