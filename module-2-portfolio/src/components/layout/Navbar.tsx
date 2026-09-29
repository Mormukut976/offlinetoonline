'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { COMPANY } from '@/data/company';
import { MessageSquare, Phone, Menu, X, ArrowRight, ShieldCheck, Sparkles, MapPin } from 'lucide-react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { name: 'Capabilities', href: '#catalog' },
    { name: 'Architecture', href: '#architecture' },
    { name: 'Case Studies', href: '#portfolio' },
    { name: 'ROI Calculator', href: '#calculator' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Founder', href: '#founder' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#090a12]/85 backdrop-blur-xl border-b border-white/10 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo & Founder Identity */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-violet-600 via-purple-600 to-cyan-400 p-[1.5px] shadow-lg shadow-violet-500/20 group-hover:scale-105 transition-all">
                <div className="w-full h-full bg-[#0d0e18] rounded-[14px] flex items-center justify-center">
                  <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-300 text-sm tracking-wider">
                    O2O
                  </span>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-black text-lg text-white tracking-tight group-hover:text-violet-300 transition-colors">
                    O2O DIGITAL
                  </span>
                  <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/25">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    JAIPUR HQ
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 font-medium hidden sm:block">
                  Founder: <strong className="text-slate-200">Raja Singh Chauhan</strong> • +91 80009 07924
                </p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-bold uppercase tracking-wider text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-violet-400 transition-colors py-1 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            
            {/* Phone call pill */}
            <a
              href={`tel:${COMPANY.rawPhone}`}
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>+91 80009 07924</span>
            </a>

            {/* Glowing WhatsApp CTA Button */}
            <a
              href={`https://wa.me/${COMPANY.rawPhone}?text=${encodeURIComponent('Hello Raja! I want to discuss launching my business online with O2O Digital.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp-glow px-4 sm:px-5 py-2.5 text-xs sm:text-sm flex items-center gap-2 active:scale-95"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-white" />
              <span>Start 48-Hr Launch</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-slate-300 hover:text-white rounded-xl bg-white/5 border border-white/10"
              aria-label="Toggle Navigation"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0e101a] border-b border-white/10 px-6 py-6 space-y-4 shadow-2xl">
          <div className="grid grid-cols-1 gap-2 text-sm font-semibold text-slate-200">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2.5 rounded-xl hover:bg-white/5 hover:text-violet-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
            <a
              href={`tel:${COMPANY.rawPhone}`}
              className="py-3 px-4 rounded-xl bg-white/5 text-white text-xs font-bold flex items-center justify-center gap-2 border border-white/10"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Call Raja Singh: +91 80009 07924</span>
            </a>
            <a
              href={`https://wa.me/${COMPANY.rawPhone}?text=${encodeURIComponent('Hello Raja! I want to launch my business online.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>Chat on WhatsApp Directly</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
