'use client';

import React from 'react';
import Link from 'next/link';
import { COMPANY } from '@/data/company';
import { ArrowRight, CheckCircle2, MessageSquare, Sparkles, Zap, Shield, TrendingUp, Star, ExternalLink } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/15 rounded-full blur-[130px] pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/70 border border-indigo-500/30 text-indigo-300 text-xs font-semibold shadow-inner shadow-indigo-500/10">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
              <span>North India's Jamstack Digital Growth Studio</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span className="text-emerald-400 font-bold">₹0 Monthly Hosting</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]">
              Turn Your Offline Business Into A{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-300 to-emerald-400">
                24x7 Client Magnet
              </span>
            </h1>

            {/* Hindi Tagline */}
            <p className="text-base sm:text-xl font-medium text-slate-300 leading-relaxed">
              दुकान से डिजिटल ब्रांड तक — 48 घंटे में वेबसाइट, गूगल मैप्स टॉप-3 रैंकिंग और डायरेक्ट व्हाट्सएप लीड्स।{' '}
              <strong className="text-emerald-400 font-semibold">बिना किसी मंथली सर्वर या होस्टिंग बिल के!</strong>
            </p>

            {/* Guarantees Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100/100 Mobile PageSpeed Speed</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>48 Hours Guaranteed Live Launch</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero Aggregator Cuts (Justdial/Indiamart free)</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Free Acrylic NFC/QR Counter Standee</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 justify-center lg:justify-start">
              <a
                href={`https://wa.me/918000907924?text=${encodeURIComponent('Namaste Raja bhai! I want to transform my offline business with O2O Digital.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 hover:to-teal-400 text-white font-bold text-sm shadow-xl shadow-emerald-500/25 flex items-center justify-center gap-2.5 transition-all active:scale-95"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Discuss on WhatsApp With Raja Singh</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <Link
                href="/pricing"
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 font-semibold text-sm border border-slate-700/80 flex items-center justify-center gap-2 transition-all"
              >
                <span>View Packages (From ₹4,999)</span>
              </Link>
            </div>

            {/* Live Case Study Callout */}
            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-center lg:justify-start gap-3 text-xs text-slate-400">
              <div className="flex -space-x-1.5">
                <span className="w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center text-white text-[10px] font-bold">G</span>
                <span className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-white text-[10px] font-bold">★</span>
              </div>
              <p>
                Live Proof:{' '}
                <a
                  href="https://bhumikatourandtravels.world/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-400 hover:text-indigo-300 font-semibold underline underline-offset-2 inline-flex items-center gap-1"
                >
                  Bhumika Tour & Travels (Google Page 1 Ranked)
                  <ExternalLink className="w-3 h-3" />
                </a>
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Cyber Live Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md rounded-2xl glass-panel p-6 shadow-2xl border border-indigo-500/30 overflow-hidden">
              
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  <span className="text-xs font-mono text-slate-400 ml-1">o2o-live-speed.engine</span>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                  100% LIVE
                </span>
              </div>

              {/* Showcase Metric Badges */}
              <div className="mt-5 space-y-4">
                
                {/* Metric 1: Google 3-Pack */}
                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-sm">
                      #1
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">Google Maps 3-Pack Ranking</p>
                      <p className="text-[11px] text-slate-400">High-Intent Organic Walk-ins</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-extrabold text-emerald-400">+140 Leads</span>
                    <p className="text-[10px] text-slate-500">Per Month</p>
                  </div>
                </div>

                {/* Metric 2: Hosting Cost */}
                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold text-sm">
                      ₹0
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">Monthly Server Hosting Cost</p>
                      <p className="text-[11px] text-slate-400">Jamstack Edge Architecture</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-extrabold text-indigo-400">100% Free</span>
                    <p className="text-[10px] text-slate-500">Forever</p>
                  </div>
                </div>

                {/* Metric 3: WhatsApp Dispatch */}
                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400">
                      <MessageSquare className="w-4 h-4 fill-teal-400" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">1-Tap WhatsApp Lead Funnel</p>
                      <p className="text-[11px] text-slate-400">Car, Date, Price pre-filled</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-extrabold text-teal-400">0.8 Sec</span>
                    <p className="text-[10px] text-slate-500">Mobile Load</p>
                  </div>
                </div>

                {/* Live Client Proof Widget */}
                <div className="p-4 rounded-xl bg-gradient-to-br from-indigo-950/40 via-slate-900 to-slate-950 border border-indigo-500/30 text-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300 font-semibold">Featured Live Client:</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-mono">
                      bhumikatourandtravels.world
                    </span>
                  </div>
                  <p className="text-slate-400 leading-normal">
                    "Website launch ke baad se direct outstation calls aane lage hain. Koi commission Justdial ko nahi dena padta!"
                  </p>
                  <p className="text-[11px] text-emerald-400 font-medium">
                    — Kan Singh Ji, Managing Director, Jaipur
                  </p>
                </div>

              </div>

              {/* Bottom Live Pulse */}
              <div className="mt-5 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span>Founder: <strong>Raja Singh Chauhan</strong></span>
                </div>
                <span>Jaipur, Rajasthan</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
