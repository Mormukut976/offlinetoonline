'use client';

import React from 'react';
import Link from 'next/link';
import { COMPANY } from '@/data/company';
import { ArrowRight, MessageSquare, Sparkles, CheckCircle2, ShieldCheck, ExternalLink, Zap, Star, MapPin } from 'lucide-react';

export default function EditionsHero() {
  return (
    <section id="hero" className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 bg-subtle-mesh overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-center lg:text-left">
        
        {/* Top Announcement Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-100/90 border border-slate-200 text-slate-800 text-xs font-semibold shadow-xs">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>North India's High-Converting Digital Studio</span>
          <span className="text-slate-300">|</span>
          <strong className="text-emerald-700">₹0 Monthly Server Hosting</strong>
        </div>

        {/* Main Wix-style Bold Headline */}
        <div className="space-y-6 max-w-4xl mx-auto lg:mx-0">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-slate-950 leading-[1.08]">
            Turn Your Offline Business Into A{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-600">
              24x7 Customer Magnet
            </span>
          </h1>

          <p className="text-lg sm:text-xl font-medium text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            दुकान से डिजिटल ब्रांड तक — 48 घंटे में वेबसाइट, गूगल मैप्स टॉप-3 रैंकिंग और डायरेक्ट व्हाट्सएप ऑर्डर्स।{' '}
            <strong className="text-slate-900 font-bold">बिना किसी मंथली सर्वर या होस्टिंग बिल के!</strong>
          </p>
        </div>

        {/* Big Action Pill Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
          <a
            href={`https://wa.me/918000907924?text=${encodeURIComponent('Namaste Raja bhai! I want to transform my offline business with O2O Digital.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto wix-btn-primary px-8 py-4 text-sm sm:text-base flex items-center justify-center gap-3 shadow-lg shadow-slate-900/10 active:scale-95"
          >
            <MessageSquare className="w-5 h-5 fill-white" />
            <span>Consult With Raja Singh Chauhan</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#pricing"
            className="w-full sm:w-auto wix-btn-secondary px-8 py-4 text-sm sm:text-base flex items-center justify-center gap-2"
          >
            <span>View Packages (From ₹4,999)</span>
          </a>
        </div>

        {/* Live Client Proof Callout */}
        <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-semibold text-slate-600">
          <div className="flex items-center gap-1.5 text-yellow-500">
            <span>★★★★★</span>
            <span className="text-slate-800 font-bold ml-1">5.0 Star Verified Reviews</span>
          </div>
          <span className="text-slate-300">•</span>
          <div>
            Live Client Proof:{' '}
            <a
              href="https://bhumikatourandtravels.world/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-800 underline underline-offset-2 font-bold inline-flex items-center gap-1"
            >
              Bhumika Tour & Travels (Google Page 1 Ranked)
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* 3 Crisp White Hero Cards (Wix Studio Style) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 text-left">
          
          {/* Card 1 */}
          <div className="wix-card p-7 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                PAGE 1 VERIFIED PROOF
              </span>
              <span className="text-xs font-bold text-slate-900">
                RANK #6.7
              </span>
            </div>
            <h3 className="text-xl font-extrabold text-slate-900">
              Bhumika Tour & Travels
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Outstation cab operator in Jaipur ranked on Google Page 1. 140+ monthly customer inquiries generated straight to owner's WhatsApp without paying Justdial commissions.
            </p>
            <div className="pt-3 border-t border-slate-100">
              <a
                href="https://bhumikatourandtravels.world/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-indigo-600 hover:text-indigo-800 inline-flex items-center gap-1.5"
              >
                <span>Visit bhumikatourandtravels.world</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="wix-card p-7 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
                JAMSTACK EDGE CDN
              </span>
              <span className="text-xs font-bold text-emerald-600">
                ₹0 / MONTH
              </span>
            </div>
            <h3 className="text-xl font-extrabold text-slate-900">
              Zero Server Hosting Bills
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Never pay monthly hosting or maintenance fees again. Our code is hosted on global edge networks (Netlify/Vercel) delivering sub-second 0.8s mobile speeds for life.
            </p>
            <div className="pt-3 border-t border-slate-100 text-xs text-emerald-700 font-bold flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5" />
              <span>100/100 Mobile Google PageSpeed Guaranteed</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="wix-card p-7 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-200">
                PHYSICAL HARDWARE
              </span>
              <span className="text-xs font-bold text-slate-900">
                INCLUDED FREE
              </span>
            </div>
            <h3 className="text-xl font-extrabold text-slate-900">
              Acrylic NFC Counter Standee
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Laser-engraved acrylic table standee placed on your shop cash counter. Walk-in customers tap their phone to instantly open your Google 5-star review page.
            </p>
            <div className="pt-3 border-t border-slate-100 text-xs text-slate-700 font-bold flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Delivered physically to your storefront</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
