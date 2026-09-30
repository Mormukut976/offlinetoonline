'use client';

import React from 'react';
import { SERVICES } from '@/data/services';
import { COMPANY } from '@/data/company';
import { Globe, MapPin, Calculator, QrCode, MessageSquare, Sparkles, Check, ArrowRight, ShieldCheck } from 'lucide-react';
import { formatINR } from '@/lib/utils';

export default function ServicesCatalog() {
  const iconMap: Record<string, React.ElementType> = {
    Globe,
    MapPin,
    Calculator,
    QrCode,
    MessageSquare,
    Sparkles
  };

  return (
    <section id="catalog" className="py-20 lg:py-28 relative overflow-hidden bg-section-services border-b border-white/10">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[800px] h-[600px] ambient-glow-cyan blur-[160px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="category-pill">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>FULL DIGITAL CAPABILITIES CATALOG</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-heading">
            Everything your business needs to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-300">
              capture high-intent customers
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            A complete catalog of tailored digital solutions engineered to boost conversion, eliminate commissions, and operate forever with ₹0 server bills.
          </p>
        </div>

        {/* Catalog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon] || Globe;
            
            return (
              <div
                key={service.id}
                className={`modern-card p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  service.highlight
                    ? 'border-violet-500/50 shadow-xl shadow-violet-950/30'
                    : 'border-white/10'
                }`}
              >
                <div className="space-y-6">
                  
                  {/* Card Header & Badge */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-violet-400">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-[11px] font-bold uppercase tracking-wider">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-black text-white font-heading">{service.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{service.description}</p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2.5 pt-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Footer with Price & Inquire Button */}
                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 block font-semibold">Starting From</span>
                    <div className="text-xl font-black text-white font-mono">
                      {formatINR(service.startingPrice)}
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/${COMPANY.rawPhone}?text=${encodeURIComponent(`Hello Raja! I would like to inquire about: ${service.title}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white/5 hover:bg-violet-600 border border-white/10 text-white hover:text-white transition-all group"
                    aria-label={`Inquire about ${service.title}`}
                  >
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
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
