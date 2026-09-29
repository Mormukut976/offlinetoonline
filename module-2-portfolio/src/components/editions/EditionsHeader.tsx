'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { COMPANY } from '@/data/company';
import { MessageSquare, Phone, ExternalLink, Menu, X, Sparkles, ArrowRight } from 'lucide-react';

export default function EditionsHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-150 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Identity */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-slate-950 flex items-center justify-center text-white font-black text-sm shadow-md group-hover:bg-indigo-600 transition-colors">
                O2O
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-base sm:text-lg text-slate-900 tracking-tight">
                    Offline to Online
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Jaipur Studio
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 font-medium hidden sm:block">
                  Founder: <strong className="text-slate-800">Raja Singh Chauhan</strong> • +91 80009 07924
                </p>
              </div>
            </Link>
          </div>

          {/* Navigation Links (Desktop - Wix style) */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-600">
            <a href="#case-study" className="hover:text-black transition-colors">Bhumika Proof</a>
            <a href="#fare-engine" className="hover:text-black transition-colors">200 KM Fare Engine</a>
            <a href="#google-maps" className="hover:text-black transition-colors">Google 3-Pack</a>
            <a href="#nfc-standees" className="hover:text-black transition-colors">NFC Standees</a>
            <a href="#features" className="hover:text-black transition-colors">16 Features</a>
            <a href="#pricing" className="hover:text-black transition-colors">Packages & ROI</a>
          </nav>

          {/* Right Action CTAs */}
          <div className="flex items-center gap-3">
            
            {/* Live Case Study Button */}
            <a
              href="https://bhumikatourandtravels.world/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold text-slate-700 hover:text-black bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-all"
            >
              <span>Live Bhumika Travels</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
            </a>

            {/* Black Pill WhatsApp Button (Wix style) */}
            <a
              href={`https://wa.me/918000907924?text=${encodeURIComponent('Namaste Raja bhai! I saw your O2O Digital website and want to launch my business in 48 hours.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="wix-btn-primary px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm shadow-md flex items-center gap-2 active:scale-95"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-white" />
              <span>Start 48-Hr Launch</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-black rounded-lg bg-slate-100 border border-slate-200"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-6 space-y-4 shadow-xl">
          <div className="grid grid-cols-1 gap-2 text-sm font-semibold text-slate-800">
            <a href="#hero" onClick={() => setMobileOpen(false)} className="px-3 py-2 rounded-lg hover:bg-slate-100">
              Overview (₹0/mo Hosting)
            </a>
            <a href="#case-study" onClick={() => setMobileOpen(false)} className="px-3 py-2 rounded-lg hover:bg-slate-100">
              Bhumika Travels (Rank 6.7 Case Study)
            </a>
            <a href="#fare-engine" onClick={() => setMobileOpen(false)} className="px-3 py-2 rounded-lg hover:bg-slate-100">
              Live 200 KM Fare Engine
            </a>
            <a href="#google-maps" onClick={() => setMobileOpen(false)} className="px-3 py-2 rounded-lg hover:bg-slate-100">
              Google Maps 3-Pack Domination
            </a>
            <a href="#nfc-standees" onClick={() => setMobileOpen(false)} className="px-3 py-2 rounded-lg hover:bg-slate-100">
              Physical Acrylic NFC Standees
            </a>
            <a href="#features" onClick={() => setMobileOpen(false)} className="px-3 py-2 rounded-lg hover:bg-slate-100">
              16 Built-in Advantages
            </a>
            <a href="#pricing" onClick={() => setMobileOpen(false)} className="px-3 py-2 rounded-lg hover:bg-slate-100">
              Transparent Packages (From ₹4,999)
            </a>
            <a href="#contact" onClick={() => setMobileOpen(false)} className="px-3 py-2 rounded-lg hover:bg-slate-100">
              Meet Raja Singh Chauhan (Jaipur)
            </a>
          </div>

          <div className="pt-4 border-t border-slate-200 flex flex-col gap-2">
            <a
              href={`tel:${COMPANY.rawPhone}`}
              className="py-3 px-4 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>Call Raja Singh: +91 80009 07924</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
