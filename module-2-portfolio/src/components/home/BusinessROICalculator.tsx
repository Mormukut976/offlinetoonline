'use client';

import React, { useState } from 'react';
import { Calculator, ArrowRight, TrendingUp, ShieldCheck, DollarSign, MessageSquare, Sparkles } from 'lucide-react';
import { COMPANY } from '@/data/company';
import { formatINR } from '@/lib/utils';

export default function BusinessROICalculator() {
  const [industry, setIndustry] = useState<string>('tour');
  const [dailyFootfall, setDailyFootfall] = useState<number>(30);
  const [avgTicket, setAvgTicket] = useState<number>(3500);

  // Industry multipliers
  const industries: Record<string, { name: string; avgTicketDefault: number; captureRate: number }> = {
    tour: { name: 'Tour & Travel / Taxi Fleet', avgTicketDefault: 4500, captureRate: 0.18 },
    clinic: { name: 'Dental & Healthcare Clinic', avgTicketDefault: 2000, captureRate: 0.22 },
    cafe: { name: 'Restaurant, Cafe & Rooftop', avgTicketDefault: 1200, captureRate: 0.25 },
    real_estate: { name: 'Real Estate & Property', avgTicketDefault: 25000, captureRate: 0.08 },
    retail: { name: 'Retail Storefront & Services', avgTicketDefault: 3000, captureRate: 0.15 },
  };

  const currentInd = industries[industry] || industries.tour;

  // Monthly estimations
  const monthlyFootfall = dailyFootfall * 30;
  const newOnlineLeads = Math.round(monthlyFootfall * currentInd.captureRate);
  const projectedRevenue = Math.round(newOnlineLeads * avgTicket * 0.4); // 40% conversion of captured leads
  const serverSavingsPerYear = 14400; // WordPress/Vultr hosting saved per year

  return (
    <section id="calculator" className="py-20 lg:py-28 relative overflow-hidden bg-[#0c0e1a] border-b border-white/10">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[700px] h-[500px] ambient-glow-emerald blur-[160px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="category-pill">
            <Calculator className="w-3.5 h-3.5 text-emerald-400" />
            <span>INTERACTIVE ROI SIMULATOR</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-heading">
            Calculate your projected{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300">
              monthly revenue increase
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Simulate the financial impact of deploying an ultra-fast Jamstack web portal with Google 3-Pack and WhatsApp automation.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="max-w-5xl mx-auto modern-card p-6 sm:p-10 bg-[#0e1120] border-white/10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Controls (7 cols) */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Industry Selector */}
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block">
                  Select Your Business Industry
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {Object.entries(industries).map(([key, item]) => (
                    <button
                      key={key}
                      onClick={() => {
                        setIndustry(key);
                        setAvgTicket(item.avgTicketDefault);
                      }}
                      className={`p-3 rounded-xl text-xs font-bold text-left transition-all cursor-pointer ${
                        industry === key
                          ? 'bg-violet-600 text-white shadow-md border-violet-500'
                          : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/5'
                      }`}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Slider 1: Daily Walk-ins / Inquiries */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-slate-300 uppercase tracking-wider">
                    Current Daily Footfall / Inquiries
                  </span>
                  <span className="font-mono font-bold text-lg text-emerald-400">
                    {dailyFootfall} / day
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="150"
                  step="5"
                  value={dailyFootfall}
                  onChange={(e) => setDailyFootfall(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                />
                <div className="flex justify-between text-[11px] text-slate-500">
                  <span>5 per day</span>
                  <span>75 per day</span>
                  <span>150+ per day</span>
                </div>
              </div>

              {/* Slider 2: Average Ticket Size */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-slate-300 uppercase tracking-wider">
                    Average Transaction / Order Value
                  </span>
                  <span className="font-mono font-bold text-lg text-cyan-400">
                    {formatINR(avgTicket)}
                  </span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="50000"
                  step="500"
                  value={avgTicket}
                  onChange={(e) => setAvgTicket(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
                <div className="flex justify-between text-[11px] text-slate-500">
                  <span>₹500</span>
                  <span>₹25,000</span>
                  <span>₹50,000+</span>
                </div>
              </div>

            </div>

            {/* Right Output Box (5 cols) */}
            <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#161a30] to-[#0c0e18] border border-emerald-500/30 space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Projected Monthly Output</span>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-bold">
                  Verified Math
                </span>
              </div>

              {/* Metric 1 */}
              <div className="space-y-1">
                <span className="text-xs text-slate-400">New High-Intent Online Inquiries</span>
                <div className="text-3xl font-black text-white font-mono flex items-baseline gap-2">
                  <span>+{newOnlineLeads}</span>
                  <span className="text-xs text-emerald-400 font-semibold font-sans">Leads / month</span>
                </div>
              </div>

              {/* Metric 2 */}
              <div className="space-y-1">
                <span className="text-xs text-slate-400">Estimated Additional Monthly Revenue</span>
                <div className="text-3xl sm:text-4xl font-black text-emerald-400 font-mono">
                  +{formatINR(projectedRevenue)}
                </div>
                <p className="text-[11px] text-slate-400">Based on a conservative 40% lead-to-paid conversion rate.</p>
              </div>

              {/* Metric 3: Hosting Savings */}
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Annual Server Bill Saved:</span>
                </div>
                <strong className="text-white font-mono">{formatINR(serverSavingsPerYear)} / year</strong>
              </div>

              {/* WhatsApp Action */}
              <a
                href={`https://wa.me/${COMPANY.rawPhone}?text=${encodeURIComponent(
                  `Hello Raja! I ran the ROI calculator for my ${currentInd.name}. My projected extra revenue is ${formatINR(
                    projectedRevenue
                  )}/mo with +${newOnlineLeads} leads. I want to deploy this system!`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-whatsapp-glow py-3.5 text-xs sm:text-sm flex items-center justify-center gap-2 active:scale-95"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Claim This Growth Engine</span>
                <ArrowRight className="w-4 h-4" />
              </a>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
