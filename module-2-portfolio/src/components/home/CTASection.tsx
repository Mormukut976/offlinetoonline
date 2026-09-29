import React from 'react';
import Link from 'next/link';
import { COMPANY } from '@/data/company';
import { MessageSquare, Phone, ShieldCheck, ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-[#080c14] to-[#04060a]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
          <ShieldCheck className="w-4 h-4" />
          <span>Risk-Free Guarantee: No Monthly Server Retainers Ever</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
          Ready to Stop Paying Middlemen And Start Getting{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-indigo-400">
            Direct WhatsApp Customers?
          </span>
        </h2>

        <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Talk directly to founder <strong>Raja Singh Chauhan</strong> today. We will review your business, check your local Google competitor rankings, and show you exactly how to dominate your category.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href={`https://wa.me/918000907924?text=${encodeURIComponent('Namaste Raja bhai! I want to start my business website and Google Maps setup with O2O Digital.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-bold text-sm shadow-xl shadow-emerald-500/30 flex items-center justify-center gap-2.5 transition-all active:scale-95"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>Chat With Raja Singh on WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href={`tel:${COMPANY.rawPhone}`}
            className="w-full sm:w-auto px-6 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 flex items-center justify-center gap-2 transition-all"
          >
            <Phone className="w-4 h-4 text-emerald-400" />
            <span>Direct Call: +91 80009 07924</span>
          </a>
        </div>

        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500">
          <span>📍 Headquartered in Jaipur, Rajasthan</span>
          <span>•</span>
          <span>⚡ 48-Hour Live Delivery Guarantee</span>
          <span>•</span>
          <span>💳 Official UPI: 80009079241@ybl</span>
        </div>

      </div>
    </section>
  );
}
