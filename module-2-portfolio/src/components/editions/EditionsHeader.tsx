'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { COMPANY } from '@/data/company';
import { MessageSquare, Phone, ExternalLink, Menu, X, Sparkles, ShieldCheck } from 'lucide-react';

export default function EditionsHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 edition-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Brand Identity */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-indigo-500 via-purple-500 to-emerald-400 p-[1.5px] shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-all">
                <div className="w-full h-full bg-[#06080d] rounded-[7px] flex items-center justify-center">
                  <span className="font-black text-xs text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">O2O</span>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-sm sm:text-base text-white tracking-tight group-hover:text-indigo-300 transition-colors">
                    O2O Editions
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Winter '26
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 hidden sm:block">
                  By Founder <strong className="text-slate-200">Raja Singh Chauhan</strong> • Jaipur
                </p>
              </div>
            </Link>
          </div>

          {/* Center Live Ticker (Desktop) */}
          <div className="hidden lg:flex items-center gap-3 px-4 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-[11px] font-mono text-slate-400">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-slate-300">NETLIFY EDGE: <strong className="text-emerald-400">₹0/MO HOSTING</strong></span>
            <span>•</span>
            <span className="text-slate-300">SPEED: <strong className="text-indigo-400">100/100</strong></span>
            <span>•</span>
            <span className="text-slate-300">DELIVERY: <strong className="text-white">48 HRS</strong></span>
          </div>

          {/* Right Action CTAs */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            
            {/* Live Case Study Button */}
            <a
              href="https://bhumikatourandtravels.world/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-indigo-300 hover:text-white bg-indigo-950/40 hover:bg-indigo-900/50 border border-indigo-500/30 transition-all"
            >
              <span>Bhumika Travels Proof</span>
              <ExternalLink className="w-3 h-3 text-indigo-400" />
            </a>

            {/* Direct WhatsApp Pill */}
            <a
              href={`https://wa.me/918000907924?text=${encodeURIComponent('Namaste Raja bhai! I saw your O2O Editions website and want to launch my business in 48 hours.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 sm:py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-bold text-xs sm:text-sm shadow-lg shadow-emerald-500/20 flex items-center gap-2 transition-all active:scale-95"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-white" />
              <span>Start 48-Hr Launch</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-slate-300 hover:text-white rounded-lg bg-slate-900 border border-slate-800"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#090d16] border-b border-slate-800 px-4 py-6 space-y-4">
          <div className="grid grid-cols-1 gap-2 text-sm font-medium">
            <Link href="/" onClick={() => setMobileOpen(false)} className="px-3 py-2 rounded-lg text-white bg-indigo-600/20 border border-indigo-500/30">
              I. The O2O Edition '26
            </Link>
            <Link href="/services" onClick={() => setMobileOpen(false)} className="px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-800">
              II. Agency Services (₹0/mo Hosting)
            </Link>
            <Link href="/portfolio" onClick={() => setMobileOpen(false)} className="px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-800">
              III. Case Studies (Bhumika Travels Rank 6.7)
            </Link>
            <Link href="/calculator" onClick={() => setMobileOpen(false)} className="px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-800">
              IV. Live 200 KM Fare Engine & ROI
            </Link>
            <Link href="/pricing" onClick={() => setMobileOpen(false)} className="px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-800">
              V. Transparent Pricing (From ₹4,999)
            </Link>
            <Link href="/about" onClick={() => setMobileOpen(false)} className="px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-800">
              VI. Founder Raja Singh Chauhan
            </Link>
            <Link href="/contact" onClick={() => setMobileOpen(false)} className="px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-800">
              VII. Contact & Booking
            </Link>
          </div>

          <div className="pt-4 border-t border-slate-800 flex flex-col gap-2">
            <a
              href={`tel:${COMPANY.rawPhone}`}
              className="py-2.5 px-4 rounded-xl bg-slate-800 text-white text-xs font-semibold flex items-center justify-center gap-2 border border-slate-700"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>Call Raja Singh: +91 80009 07924</span>
            </a>
            <a
              href="https://bhumikatourandtravels.world/"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-4 rounded-xl bg-indigo-950/60 text-indigo-300 text-xs font-semibold flex items-center justify-center gap-2 border border-indigo-500/30"
            >
              <span>Visit Bhumika Travels Live Proof</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
