'use client';

import React from 'react';
import { Layers, ArrowRight, Search, Code2, Rocket, CheckCircle2, Cpu, Globe, MessageSquare, Zap, BarChart3, TrendingUp } from 'lucide-react';

export default function ArchitectureFlow() {
  const steps = [
    {
      number: '01',
      title: 'Local Audit & Strategy',
      subtitle: 'Keyword gap and competitor analysis',
      desc: 'We analyze your local competitors, uncover underserved high-intent local search queries, and structure your conversion funnel.',
      icon: Search,
      tag: 'Discovery',
      highlight: true
    },
    {
      number: '02',
      title: 'High-Performance Engineering',
      subtitle: 'Sub-second Jamstack architecture',
      desc: 'We engineer a lightweight Next.js web application with pre-rendered pages, instant mobile navigation, and zero server database costs.',
      icon: Code2,
      tag: 'Development',
      metrics: [
        { label: 'Speed Score', val: '100/100' },
        { label: 'Hosting Bill', val: '₹0 / mo' },
        { label: 'Time to Interactive', val: '0.6s' }
      ]
    },
    {
      number: '03',
      title: 'Omnichannel Launch & Growth',
      subtitle: 'Google 3-Pack & WhatsApp dispatch',
      desc: 'We publish to global edge networks, index on Google Maps with geo-tagged Schema markup, and route inquiries straight to your phone.',
      icon: Rocket,
      tag: 'Deployment',
      growth: '+340% Inbound Inquiries'
    }
  ];

  return (
    <section id="architecture" className="py-20 lg:py-28 relative overflow-hidden bg-[#090a12] border-b border-white/10">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-[700px] h-[500px] ambient-glow-purple blur-[150px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="category-pill">
            <Layers className="w-3.5 h-3.5 text-violet-400" />
            <span>SYSTEM ARCHITECTURE & USER FLOW</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-heading">
            How we convert local searches into{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-300">
              guaranteed customer revenue
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            A frictionless digital pipeline engineered specifically for high local conversion and zero ongoing technical maintenance.
          </p>
        </div>

        {/* Interconnected Node Flow Diagram (Inspired by Behance Video Frame 8) */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#0e101c] border border-white/10 shadow-2xl space-y-6">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center justify-between">
            <span>Omnichannel Customer Journey</span>
            <span className="text-emerald-400 font-mono">100% Automated Pipeline</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            
            {/* Node 1 */}
            <div className="p-4 rounded-2xl bg-[#14172a] border border-white/5 space-y-2">
              <span className="text-[10px] font-mono font-bold text-slate-400">STAGE 01</span>
              <div className="font-bold text-white text-sm">Offline Storefront</div>
              <p className="text-[11px] text-slate-400">Physical shop, clinic, restaurant or fleet in your city.</p>
            </div>

            {/* Node 2 */}
            <div className="p-4 rounded-2xl bg-[#14172a] border border-white/5 space-y-2">
              <span className="text-[10px] font-mono font-bold text-cyan-400">STAGE 02</span>
              <div className="font-bold text-white text-sm">Google 3-Pack SEO</div>
              <p className="text-[11px] text-slate-400">Nearby high-intent searches discover you first on Maps.</p>
            </div>

            {/* Node 3 */}
            <div className="p-4 rounded-2xl bg-[#14172a] border border-violet-500/30 space-y-2">
              <span className="text-[10px] font-mono font-bold text-violet-400">STAGE 03</span>
              <div className="font-bold text-white text-sm">Jamstack Web App</div>
              <p className="text-[11px] text-slate-400">Sub-second loading with interactive pricing calculators.</p>
            </div>

            {/* Node 4 */}
            <div className="p-4 rounded-2xl bg-[#14172a] border border-emerald-500/30 space-y-2">
              <span className="text-[10px] font-mono font-bold text-emerald-400">STAGE 04</span>
              <div className="font-bold text-white text-sm">WhatsApp Funnel</div>
              <p className="text-[11px] text-slate-400">Customer requirements auto-fill into WhatsApp chat.</p>
            </div>

            {/* Node 5 */}
            <div className="p-4 rounded-2xl bg-gradient-to-br from-violet-600/30 to-emerald-600/20 border border-emerald-500/40 space-y-2">
              <span className="text-[10px] font-mono font-bold text-amber-300">STAGE 05</span>
              <div className="font-bold text-white text-sm">Direct Bank / UPI</div>
              <p className="text-[11px] text-slate-300">Confirmed booking deposit with 0% aggregator cut.</p>
            </div>

          </div>
        </div>

        {/* 3 Step Process Cards (Inspired by Behance Video Frame 15: Research, Design, Final) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Research (Rich Violet Accent Card) */}
          <div className="modern-card-featured p-7 sm:p-8 space-y-6">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider">
                Phase 01
              </span>
              <div className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center text-white">
                <Search className="w-5 h-5" />
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-black text-white font-heading">Research & Local Audit</h3>
              <p className="text-xs text-purple-100 leading-relaxed">
                We conduct an in-depth analysis of competitors in your geographic radius, identifying high-intent keywords and positioning gaps to ensure immediate ranking advantage.
              </p>
            </div>

            <div className="pt-4 border-t border-white/20 space-y-2.5 text-xs text-purple-100">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                <span>Geographic keyword gap identification</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                <span>Google Maps category audit</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                <span>Customer conversion trigger roadmap</span>
              </div>
            </div>
          </div>

          {/* Card 2: Engineering (Dark Glass Card with Metrics) */}
          <div className="modern-card p-7 sm:p-8 bg-[#0f1222] border-white/10 space-y-6">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider">
                Phase 02
              </span>
              <div className="w-10 h-10 rounded-2xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                <Code2 className="w-5 h-5" />
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-black text-white font-heading">Engineering & UI/UX</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                We engineer your application for release, ensuring sub-second touch response, flawless mobile usability, and zero backend maintenance overhead.
              </p>
            </div>

            {/* Performance Bar Chart Stats */}
            <div className="p-4 rounded-2xl bg-[#15182a] border border-white/5 space-y-3">
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400 font-medium">Google PageSpeed</span>
                  <span className="text-emerald-400 font-bold font-mono">100 / 100</span>
                </div>
                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="w-full h-full bg-emerald-400 rounded-full"></div>
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400 font-medium">Mobile 4G Load Time</span>
                  <span className="text-cyan-400 font-bold font-mono">0.6 Seconds</span>
                </div>
                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="w-[96%] h-full bg-cyan-400 rounded-full"></div>
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400 font-medium">Monthly Hosting Bill</span>
                  <span className="text-violet-400 font-bold font-mono">₹0.00 / month</span>
                </div>
                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="w-full h-full bg-violet-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Omnichannel Launch (Dark Glass Card with Trajectory) */}
          <div className="modern-card p-7 sm:p-8 bg-[#0f1222] border-white/10 space-y-6">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                Phase 03
              </span>
              <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <Rocket className="w-5 h-5" />
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-black text-white font-heading">Deployment & Growth</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                We push your verified code to global edge networks, activate local Google 3-Pack Schema, and configure instant WhatsApp customer intake.
              </p>
            </div>

            {/* Growth Indicator Widget */}
            <div className="p-4 rounded-2xl bg-[#15182a] border border-white/5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-slate-400">Average Client Surge</span>
                <span className="text-emerald-400 text-xs font-bold font-mono">+340% Inquiries</span>
              </div>
              <div className="h-16 flex items-end gap-1.5 pt-4">
                <div className="w-1/6 bg-white/10 h-[25%] rounded-t-md"></div>
                <div className="w-1/6 bg-white/15 h-[35%] rounded-t-md"></div>
                <div className="w-1/6 bg-violet-500/40 h-[50%] rounded-t-md"></div>
                <div className="w-1/6 bg-violet-500/70 h-[68%] rounded-t-md"></div>
                <div className="w-1/6 bg-violet-500 h-[85%] rounded-t-md"></div>
                <div className="w-1/6 bg-emerald-400 h-full rounded-t-md"></div>
              </div>
              <p className="text-[11px] text-slate-400">Continuous compounding organic local inbound leads.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
