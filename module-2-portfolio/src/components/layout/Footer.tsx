'use client';

import React from 'react';
import Link from 'next/link';
import { COMPANY } from '@/data/company';
import { MessageSquare, Phone, Mail, MapPin, ShieldCheck, Heart, ArrowUp, ArrowRight } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#07080e] border-t border-white/10 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Col (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-600 to-cyan-400 p-[1.5px]">
                <div className="w-full h-full bg-[#0a0c16] rounded-[10px] flex items-center justify-center font-black text-white text-xs">
                  O2O
                </div>
              </div>
              <div>
                <span className="font-black text-base text-white tracking-tight">O2O DIGITAL STUDIO</span>
                <span className="block text-[11px] text-violet-400 font-semibold">Offline to Online Digital Growth</span>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed max-w-sm">
              We empower offline storefronts, clinics, restaurants, and service providers to dominate their local market with sub-second Jamstack web apps and zero monthly server bills.
            </p>

            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-violet-400 shrink-0" />
                <span>{COMPANY.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Hotline: {COMPANY.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Email: {COMPANY.email}</span>
              </div>
            </div>
          </div>

          {/* Capabilities Col (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Capabilities</h4>
            <ul className="space-y-2.5">
              <li><a href="#catalog" className="hover:text-white transition-colors">High-Speed Jamstack Apps</a></li>
              <li><a href="#catalog" className="hover:text-white transition-colors">Google 3-Pack Local SEO</a></li>
              <li><a href="#catalog" className="hover:text-white transition-colors">WhatsApp CRM Lead Funnels</a></li>
              <li><a href="#catalog" className="hover:text-white transition-colors">Physical NFC Counter Standees</a></li>
              <li><a href="#catalog" className="hover:text-white transition-colors">Dynamic Fare & ROI Calculators</a></li>
              <li><a href="#catalog" className="hover:text-white transition-colors">Turnkey Brand Identity Handover</a></li>
            </ul>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Navigation</h4>
            <ul className="space-y-2.5">
              <li><a href="#hero" className="hover:text-white transition-colors">Overview</a></li>
              <li><a href="#founder" className="hover:text-white transition-colors">Agency Resume</a></li>
              <li><a href="#architecture" className="hover:text-white transition-colors">System Architecture</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Client Portfolio</a></li>
              <li><a href="#calculator" className="hover:text-white transition-colors">ROI Calculator</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Transparent Pricing</a></li>
            </ul>
          </div>

          {/* Founder Identity Col (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Founder Identity</h4>
            <p className="text-slate-300">
              <strong className="text-white block font-bold">{COMPANY.founder}</strong>
              {COMPANY.role}
            </p>
            <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1">
              <span className="text-[10px] uppercase font-bold text-emerald-400 block">Verified UPI</span>
              <span className="font-mono text-white text-xs">{COMPANY.upiId}</span>
            </div>
            <a
              href={`https://wa.me/${COMPANY.rawPhone}?text=${encodeURIComponent('Hello Raja! I want to discuss a project.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-bold text-xs"
            >
              <span>WhatsApp Direct</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <div>
            © 2026 Offline to Online Digital Studio (O2O Digital). All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Guaranteed ₹0 Monthly Hosting</span>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="hover:text-white transition-colors flex items-center gap-1 text-slate-400"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
