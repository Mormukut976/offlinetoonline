'use client';

import React from 'react';
import Link from 'next/link';
import { COMPANY } from '@/data/company';
import { ArrowRight, MessageSquare, Sparkles, CheckCircle2, ShieldCheck, ExternalLink, Zap, Star, MapPin } from 'lucide-react';

export default function EditionsHero() {
  return (
    <section id="hero" className="relative pt-12 pb-24 lg:pt-16 lg:pb-32 overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>
      <div className="absolute top-1/2 right-10 w-[450px] h-[450px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Edition Release Tag */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-indigo-400">
            [ EDITION 2026 // RAJASTHAN ]
          </span>
          <span className="text-xs font-mono text-slate-400">
            SYS.STATUS: <strong className="text-emerald-400">NETLIFY EDGE ACTIVE</strong>
          </span>
          <span className="text-xs font-mono text-slate-500 hidden sm:inline">
            // FOUNDER: RAJA SINGH CHAUHAN
          </span>
        </div>

        {/* Hero Title with Editorial Classical Serif Accent */}
        <div className="space-y-6 max-w-4xl">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]">
            A New Era for Local Commerce.{' '}
            <span className="font-serif-editorial italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-emerald-300 to-indigo-300">
              Transform offline storefronts
            </span>{' '}
            into 24x7 customer engines.
          </h1>

          <p className="text-lg sm:text-xl font-medium text-slate-300 leading-relaxed max-w-2xl">
            दुकान से डिजिटल ब्रांड तक — 48 घंटे में वेबसाइट, गूगल मैप्स टॉप-3 रैंकिंग और डायरेक्ट व्हाट्सएप लीड्स।{' '}
            <strong className="text-emerald-400 font-semibold">बिना किसी मंथली सर्वर या होस्टिंग बिल के!</strong>
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
          <a
            href={`https://wa.me/918000907924?text=${encodeURIComponent('Namaste Raja bhai! I want to launch my business with O2O Digital.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 hover:to-teal-400 text-white font-bold text-sm shadow-xl shadow-emerald-500/25 flex items-center justify-center gap-2.5 transition-all active:scale-95"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>Consult Directly With Raja Singh</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#pricing"
            className="px-7 py-4 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 font-semibold text-sm border border-slate-700/80 flex items-center justify-center gap-2 transition-all"
          >
            <span>View Packages (From ₹4,999)</span>
          </a>
        </div>

        {/* 3 Interactive Highlight Panels (Inspired by Shopify Editions) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
          
          {/* Panel 1: Live Case Study Proof */}
          <div className="edition-card p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono font-bold text-emerald-400 uppercase tracking-wider">
                PAGE 1 VERIFIED PROOF
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold">
                RANK #6.7
              </span>
            </div>
            <h3 className="text-lg font-bold text-white">
              Bhumika Tour & Travels
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Achieved Google Page 1 ranking for competitive cab hire terms in Jaipur. 140+ monthly leads straight to owner's WhatsApp.
            </p>
            <div className="pt-2 border-t border-slate-800/80">
              <a
                href="https://bhumikatourandtravels.world/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-1.5"
              >
                <span>bhumikatourandtravels.world</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Panel 2: Zero Monthly Server Cost */}
          <div className="edition-card p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono font-bold text-indigo-400 uppercase tracking-wider">
                JAMSTACK ARCHITECTURE
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 font-bold">
                ₹0 / MONTH
              </span>
            </div>
            <h3 className="text-lg font-bold text-white">
              Lifetime Free Edge Hosting
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              No shared cPanel hosting, no database crashes, no WordPress plugin vulnerabilities. Pure edge CDN distribution.
            </p>
            <div className="pt-2 border-t border-slate-800/80 text-xs text-emerald-400 font-semibold flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5" />
              <span>100/100 Mobile PageSpeed Guaranteed</span>
            </div>
          </div>

          {/* Panel 3: Physical NFC Counter Standee */}
          <div className="edition-card p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono font-bold text-teal-400 uppercase tracking-wider">
                OFFLINE TO ONLINE BRIDGE
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-teal-500/10 text-teal-300 border border-teal-500/20 font-bold">
                PHYSICAL NFC
              </span>
            </div>
            <h3 className="text-lg font-bold text-white">
              Acrylic Counter Review Standee
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Walk-in customers tap their phone on your cash counter to leave an instant 5-star Google review, boosting local 3-pack rankings.
            </p>
            <div className="pt-2 border-t border-slate-800/80 text-xs text-slate-300 font-semibold flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Delivered physically to your shop/clinic</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
