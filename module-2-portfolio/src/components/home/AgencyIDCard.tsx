'use client';

import React from 'react';
import { COMPANY } from '@/data/company';
import { ShieldCheck, MapPin, Phone, Mail, Award, Clock, Zap, ArrowRight, CheckCircle2, MessageSquare, QrCode } from 'lucide-react';

export default function AgencyIDCard() {
  return (
    <section id="founder" className="py-20 lg:py-28 relative overflow-hidden bg-[#0a0c16] border-b border-white/10">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[500px] ambient-glow-purple blur-[140px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="category-pill">
            <Award className="w-3.5 h-3.5 text-violet-400" />
            <span>AGENCY RESUME & FOUNDER CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-heading">
            Engineering digital growth for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-400">
              traditional Indian businesses
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Official digital identity card of Offline to Online Digital Studio. We eliminate middlemen commissions, slow websites, and recurring software bills.
          </p>
        </div>

        {/* The Executive ID Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: The Executive ID Badge (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-1 bg-gradient-to-tr from-violet-600 to-emerald-400 rounded-3xl blur-md opacity-30"></div>
            
            <div className="relative modern-card p-6 sm:p-8 bg-[#0f1222] border-white/15 space-y-6">
              
              {/* Badge Top Header */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-violet-600 to-cyan-400 p-0.5">
                    <div className="w-full h-full bg-[#0d0e18] rounded-[14px] flex items-center justify-center font-black text-lg text-white">
                      RS
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-white">{COMPANY.founder}</h3>
                    <p className="text-xs text-violet-300 font-semibold">{COMPANY.role}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-wider">
                    Verified Lead
                  </span>
                </div>
              </div>

              {/* Coordinates List */}
              <div className="space-y-3.5 text-xs text-slate-300">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                  <MapPin className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">Headquarters & Studio</strong>
                    <span>{COMPANY.address}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <strong className="text-white block font-semibold">Direct Mobile & WhatsApp</strong>
                    <span>{COMPANY.phone}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                  <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                  <div>
                    <strong className="text-white block font-semibold">Official Inquiries Email</strong>
                    <span>{COMPANY.email}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                  <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                  <div>
                    <strong className="text-white block font-semibold">Verified UPI Identity</strong>
                    <span className="font-mono text-slate-200">{COMPANY.upiId}</span>
                  </div>
                </div>
              </div>

              {/* Founder Statement */}
              <div className="p-4 rounded-xl bg-violet-950/30 border border-violet-500/20 text-xs text-slate-300 leading-relaxed italic">
                &ldquo;Every local clinic, cafe, real estate firm, and service provider deserves full sovereignty over their digital pipeline. We transfer complete code ownership and deliver lifetime ₹0 server hosting.&rdquo;
              </div>

              {/* WhatsApp Action Button */}
              <a
                href={`https://wa.me/${COMPANY.rawPhone}?text=${encodeURIComponent('Hello Raja! I want to schedule a 1-on-1 strategy call for my business.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-whatsapp-glow py-3.5 text-xs sm:text-sm flex items-center justify-center gap-2 active:scale-95"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Connect Directly on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>

            </div>
          </div>

          {/* Right: 4 Agency Guarantees & Pillars (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            
            {/* Metric 1 */}
            <div className="modern-card p-6 bg-[#111322] border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-400">
                <Clock className="w-5 h-5" />
              </div>
              <div className="text-3xl font-black text-white font-heading">48 Hours</div>
              <div className="text-sm font-bold text-slate-200">Guaranteed Deployment</div>
              <p className="text-xs text-slate-400 leading-relaxed">
                From initial onboarding to live production deployment with custom domain, SSL certificate, and Google indexing.
              </p>
            </div>

            {/* Metric 2 */}
            <div className="modern-card p-6 bg-[#111322] border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-3xl font-black text-white font-heading">₹0 / Month</div>
              <div className="text-sm font-bold text-slate-200">Lifetime Free Hosting</div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Engineered with modern Jamstack architecture on Cloudflare & Netlify Edge CDNs. Zero recurring monthly server bills forever.
              </p>
            </div>

            {/* Metric 3 */}
            <div className="modern-card p-6 bg-[#111322] border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Zap className="w-5 h-5" />
              </div>
              <div className="text-3xl font-black text-white font-heading">99.8%</div>
              <div className="text-sm font-bold text-slate-200">Mobile PageSpeed</div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Zero bloated themes or slow plugins. Instant 0.6s touch-to-render speed on 4G and 5G mobile networks.
              </p>
            </div>

            {/* Metric 4 */}
            <div className="modern-card p-6 bg-[#111322] border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-600/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Award className="w-5 h-5" />
              </div>
              <div className="text-3xl font-black text-white font-heading">100%</div>
              <div className="text-sm font-bold text-slate-200">Client Code Sovereignty</div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Full GitHub repository and domain registrar credentials transferred to you on launch. Zero vendor lock-in.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
