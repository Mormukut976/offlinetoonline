'use client';

import React from 'react';
import Image from 'next/image';
import { COMPANY } from '@/data/company';
import { MessageSquare, ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Zap, Star, MapPin, Globe, TrendingUp, Layers, Cpu } from 'lucide-react';

export default function AgencyHero() {
  return (
    <section id="hero" className="relative pt-12 pb-20 lg:pt-20 lg:pb-32 overflow-hidden bg-grid-subtle border-b border-white/10">
      
      {/* Ambient Radial Lights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] ambient-glow-purple blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute top-40 right-10 w-[500px] h-[400px] ambient-glow-cyan blur-[100px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Category Pill Tag */}
        <div className="flex justify-center">
          <div className="category-pill shadow-lg shadow-purple-950/40">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-white font-extrabold tracking-wider">OFFLINE TO ONLINE DIGITAL STUDIO</span>
            <span className="text-slate-500">•</span>
            <span className="text-violet-300">₹0 MONTHLY HOSTING GUARANTEE</span>
            <span className="text-slate-500 hidden sm:inline">•</span>
            <span className="text-slate-400 hidden sm:inline">JAIPUR HQ</span>
          </div>
        </div>

        {/* Dual-Tone Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.08] font-heading drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
            Transform your{' '}
            <span className="text-white">offline business</span>{' '}
            into a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-300">
              24/7 digital powerhouse
            </span>
          </h1>

          <p className="text-base sm:text-xl font-medium text-slate-100 leading-relaxed max-w-3xl mx-auto drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
            We build ultra-fast Jamstack web applications, dominate local Google Maps 3-Pack rankings, and deploy direct WhatsApp lead funnels for forward-thinking Indian businesses.{' '}
            <strong className="text-white font-bold">
              Sub-second speed with guaranteed lifetime ₹0 server bills.
            </strong>
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href={`https://wa.me/${COMPANY.rawPhone}?text=${encodeURIComponent('Hello Raja! I would like to consult about launching my business online with O2O Digital.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto btn-whatsapp-glow px-8 py-4 text-sm sm:text-base flex items-center justify-center gap-3 active:scale-95"
            >
              <MessageSquare className="w-5 h-5 fill-white" />
              <span>Discuss on WhatsApp With Raja Singh</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#catalog"
              className="w-full sm:w-auto btn-secondary-dark px-7 py-4 text-sm sm:text-base flex items-center justify-center gap-2"
            >
              <span>Explore Services Catalog</span>
              <ArrowRight className="w-4 h-4 text-violet-400" />
            </a>
          </div>

          {/* Trust Guarantees */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-3 text-xs text-slate-200 font-semibold">
            <span className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0a0e1c]/80 backdrop-blur-md border border-white/15 shadow-md">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 48-Hour Live Turnaround
            </span>
            <span className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0a0e1c]/80 backdrop-blur-md border border-white/15 shadow-md">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> ₹0 Monthly Server Cost
            </span>
            <span className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0a0e1c]/80 backdrop-blur-md border border-white/15 shadow-md">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 100% Code & Domain Ownership
            </span>
            <span className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0a0e1c]/80 backdrop-blur-md border border-white/15 shadow-md">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Acrylic NFC Standee Included
            </span>
          </div>
        </div>

        {/* 3D Dashboard Mockup Presentation (Inspired by AppFlowy Behance Video Frame 1 & 8) */}
        <div className="relative pt-6 max-w-5xl mx-auto">
          
          {/* Glowing backplate */}
          <div className="absolute -inset-1.5 bg-gradient-to-r from-violet-600 to-cyan-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-100 transition duration-1000 -z-10"></div>

          {/* Mockup Frame */}
          <div className="modern-card p-4 sm:p-7 border border-white/15 shadow-2xl bg-[#0c0e18]/90">
            
            {/* Window chrome header */}
            <div className="flex items-center justify-between pb-5 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                <span className="ml-2 text-xs font-mono text-slate-400 hidden sm:inline">
                  https://agency.offlinetoonline.in/live-preview
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  Live Client Engine
                </span>
              </div>
            </div>

            {/* Dashboard Inner Grid */}
            <div className="pt-6 grid grid-cols-1 md:grid-cols-3 gap-5">
              
              {/* Card 1: Google 3-Pack Discovery */}
              <div className="bg-[#121422] p-5 rounded-2xl border border-white/5 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider">Top 3 Rank</span>
                </div>
                <div>
                  <div className="text-2xl font-black text-white">Google 3-Pack</div>
                  <p className="text-xs text-slate-400">Jaipur local search domination with geo-tagged Schema markup.</p>
                </div>
                <div className="pt-2 flex items-center gap-2">
                  <div className="h-1.5 flex-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="w-[94%] h-full bg-gradient-to-r from-violet-500 to-emerald-400 rounded-full"></div>
                  </div>
                  <span className="text-xs font-mono text-slate-300">94% Visibility</span>
                </div>
              </div>

              {/* Card 2: Performance & Zero Server Cost */}
              <div className="bg-[#121422] p-5 rounded-2xl border border-white/5 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-xl bg-cyan-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <Zap className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider">0.6s Speed</span>
                </div>
                <div>
                  <div className="text-2xl font-black text-white">100 / 100</div>
                  <p className="text-xs text-slate-400">Sub-second mobile loading score with ₹0 recurring hosting bills.</p>
                </div>
                <div className="pt-2 flex items-center gap-2">
                  <div className="h-1.5 flex-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="w-full h-full bg-cyan-400 rounded-full"></div>
                  </div>
                  <span className="text-xs font-mono text-slate-300">₹0/mo Hosting</span>
                </div>
              </div>

              {/* Card 3: Direct WhatsApp Inquiries */}
              <div className="bg-[#121422] p-5 rounded-2xl border border-white/5 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider">+340% Growth</span>
                </div>
                <div>
                  <div className="text-2xl font-black text-white">Direct WhatsApp</div>
                  <p className="text-xs text-slate-400">Pre-filled customer inquiries landing straight on business phones.</p>
                </div>
                <div className="pt-2 flex items-center gap-2">
                  <div className="h-1.5 flex-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="w-[88%] h-full bg-emerald-400 rounded-full"></div>
                  </div>
                  <span className="text-xs font-mono text-slate-300">Instant Dispatch</span>
                </div>
              </div>

            </div>

            {/* Bottom Proof Strip */}
            <div className="mt-6 pt-5 border-t border-white/5 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-violet-400"></span>
                <span>Production Stack: <strong>Next.js 16 + Cloudflare Global Edge + Tailwind Engine</strong></span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-slate-300 font-mono">Status: All Systems Operational</span>
              </div>
            </div>

          </div>

          {/* Floating Accents */}
          <div className="hidden lg:block absolute -left-8 top-1/2 -translate-y-1/2 p-3.5 rounded-2xl bg-[#151828]/90 border border-violet-500/30 backdrop-blur-md shadow-xl text-xs font-bold text-white space-y-1">
            <div className="flex items-center gap-2 text-violet-400">
              <Sparkles className="w-4 h-4" />
              <span>Full Code Ownership</span>
            </div>
            <p className="text-[10px] text-slate-400 font-normal">No monthly agency lock-in</p>
          </div>

          <div className="hidden lg:block absolute -right-8 top-1/3 p-3.5 rounded-2xl bg-[#151828]/90 border border-emerald-500/30 backdrop-blur-md shadow-xl text-xs font-bold text-white space-y-1">
            <div className="flex items-center gap-2 text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span>₹0 Monthly Server</span>
            </div>
            <p className="text-[10px] text-slate-400 font-normal">Cloudflare & Netlify Edge</p>
          </div>

        </div>

      </div>
    </section>
  );
}
