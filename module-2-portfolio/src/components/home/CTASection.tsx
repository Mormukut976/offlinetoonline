'use client';

import React from 'react';
import Link from 'next/link';
import { COMPANY } from '@/data/company';
import { MessageSquare, Phone, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden bg-[#0a0c16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative modern-card p-8 sm:p-14 bg-gradient-to-br from-[#161a32] to-[#0c0e18] border-violet-500/30 text-center space-y-8 overflow-hidden">
          
          <div className="category-pill mx-auto">
            <Sparkles className="w-3.5 h-3.5 text-violet-400" />
            <span>48-HOUR PRODUCTION LAUNCH</span>
          </div>

          <div className="space-y-4 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-heading">
              Ready to take your business online?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Join local clinics, travel fleets, cafes, and property developers dominating their local Google 3-Pack with zero recurring monthly server fees.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/${COMPANY.rawPhone}?text=${encodeURIComponent('Hello Raja! I want to start my business website and Google Maps setup with O2O Digital.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto btn-whatsapp-glow px-8 py-4 text-sm sm:text-base flex items-center justify-center gap-3"
            >
              <MessageSquare className="w-5 h-5 fill-white" />
              <span>Discuss on WhatsApp With Raja Singh</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={`tel:${COMPANY.rawPhone}`}
              className="w-full sm:w-auto btn-secondary-dark px-7 py-4 text-sm sm:text-base flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Call +91 80009 07924</span>
            </a>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5 text-slate-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" /> 100% Code & Domain Ownership
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" /> Guaranteed ₹0/mo Server Hosting
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
