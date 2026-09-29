'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { COMPANY } from '@/data/company';
import { ArrowRight, MessageSquare, Sparkles, CheckCircle2, ShieldCheck, ExternalLink, Zap, Star, MapPin, Globe, Award, TrendingUp } from 'lucide-react';

export default function EditionsHero() {
  return (
    <section id="hero" className="relative pt-12 pb-20 lg:pt-16 lg:pb-28 bg-mesh-light overflow-hidden border-b border-slate-200">
      
      {/* Decorative ambient gradient blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-b from-indigo-100/40 via-purple-50/30 to-transparent blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Header Badge */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-800 text-xs font-bold shadow-xs">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-extrabold text-slate-900">O2O DIGITAL STUDIO</span>
            <span className="text-slate-300">•</span>
            <span className="text-emerald-700">₹0 MONTHLY HOSTING GUARANTEE</span>
            <span className="text-slate-300 hidden sm:inline">•</span>
            <span className="text-slate-600 hidden sm:inline">JAIPUR, RAJASTHAN</span>
          </div>
        </div>

        {/* Big Bold Headline (Wix Studio Standard) */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-slate-950 leading-[1.08]">
            Turn Your Offline Storefront Into A{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-600">
              24x7 Customer Magnet
            </span>
          </h1>

          <p className="text-lg sm:text-2xl font-semibold text-slate-700 leading-relaxed max-w-3xl mx-auto">
            दुकान से डिजिटल ब्रांड तक — 48 घंटे में वेबसाइट, गूगल मैप्स टॉप-3 रैंकिंग और डायरेक्ट व्हाट्सएप ऑर्डर्स।{' '}
            <strong className="text-slate-950 font-black underline decoration-emerald-500 decoration-wavy underline-offset-4">
              बिना किसी मंथली सर्वर या होस्टिंग बिल के!
            </strong>
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href={`https://wa.me/918000907924?text=${encodeURIComponent('Namaste Raja bhai! I want to transform my offline business with O2O Digital.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto wix-btn-green px-8 py-4 text-sm sm:text-base flex items-center justify-center gap-3 active:scale-95"
            >
              <MessageSquare className="w-5 h-5 fill-white" />
              <span>Discuss on WhatsApp With Raja Singh</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#case-study"
              className="w-full sm:w-auto wix-btn-secondary px-8 py-4 text-sm sm:text-base flex items-center justify-center gap-2"
            >
              <span>See Bhumika Travels Live Proof</span>
              <ExternalLink className="w-4 h-4 text-slate-500" />
            </a>
          </div>

          {/* Client Trust Metrics Bar */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-6 text-xs font-bold text-slate-600">
            <div className="flex items-center gap-1.5 text-yellow-500">
              <span>★★★★★</span>
              <span className="text-slate-900 font-extrabold ml-1">5.0 Star Client Rating</span>
            </div>
            <span className="text-slate-300">•</span>
            <div className="flex items-center gap-1 text-slate-800">
              <Zap className="w-4 h-4 text-amber-500" />
              <span>48 Hours Guaranteed Delivery</span>
            </div>
            <span className="text-slate-300">•</span>
            <div className="flex items-center gap-1 text-emerald-700">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>100% Full Code & Domain Ownership</span>
            </div>
          </div>
        </div>

        {/* REAL VISUAL SHOWCASE: Browser Mockup With Live Case Study (Bhumika Travels) */}
        <div className="pt-6 max-w-5xl mx-auto relative">
          
          {/* Floating Metric Badges around mockup */}
          <div className="hidden lg:flex absolute -top-5 -left-6 z-20 px-4 py-2.5 rounded-2xl bg-white border border-slate-200 shadow-xl items-center gap-3 animate-bounce duration-1000">
            <div className="w-9 h-9 rounded-xl bg-emerald-500 flex items-center justify-center text-white font-black text-sm">
              #1
            </div>
            <div>
              <p className="text-[11px] font-bold text-slate-500 uppercase">Google Maps 3-Pack</p>
              <p className="text-xs font-black text-slate-900">Ranked #6.7 on Page 1</p>
            </div>
          </div>

          <div className="hidden lg:flex absolute -bottom-5 -right-6 z-20 px-5 py-3 rounded-2xl bg-white border border-slate-200 shadow-xl items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white">
              <Zap className="w-5 h-5 fill-white" />
            </div>
            <div>
              <p className="text-[11px] font-bold text-slate-500 uppercase">Netlify Global Edge</p>
              <p className="text-xs font-black text-emerald-700">₹0 / Month Hosting Forever</p>
            </div>
          </div>

          {/* Browser Window Frame */}
          <div className="browser-mockup">
            
            {/* macOS Chrome Header Bar */}
            <div className="bg-slate-100 px-4 py-3 border-b border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-400"></span>
                <span className="w-3 h-3 rounded-full bg-amber-400"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-400"></span>
              </div>

              {/* URL bar */}
              <div className="flex items-center gap-2 px-4 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-mono text-slate-600 shadow-xs max-w-md w-full mx-4">
                <span className="text-emerald-600 font-bold">🔒 https://</span>
                <span className="font-bold text-slate-900">bhumikatourandtravels.world</span>
                <span className="text-slate-400 ml-auto text-[10px]">100/100 SPEED</span>
              </div>

              <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
                <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-mono">LIVE PRODUCTION</span>
              </div>
            </div>

            {/* Inner Content Grid with REAL photos */}
            <div className="p-6 sm:p-8 bg-white space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Storefront Real Photo */}
                <div className="lg:col-span-6 space-y-3">
                  <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md group">
                    <img
                      src="/images/bhumika_office_front_1790197259954.jpg"
                      alt="Shree Bhumika Tour and Travels Office Front in Jaipur"
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex flex-col justify-end p-4 text-white">
                      <span className="text-[10px] font-mono bg-emerald-500 text-white font-bold px-2 py-0.5 rounded w-fit mb-1">
                        VERIFIED JAIPUR STOREFRONT
                      </span>
                      <p className="text-sm font-black">Shree Bhumika Tour & Travels</p>
                      <p className="text-xs text-slate-300">Managed by Kan Singh Ji • Jaipur, Rajasthan</p>
                    </div>
                  </div>
                </div>

                {/* Live Real App Snapshot & Metrics */}
                <div className="lg:col-span-6 space-y-4 text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold">
                    <Award className="w-3.5 h-3.5" />
                    <span>Real Case Study Results</span>
                  </div>

                  <h3 className="text-2xl font-black text-slate-950">
                    From Paying Aggregators to 140+ Direct Monthly Bookings
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Prior to O2O Digital, Bhumika Travels paid thousands monthly to Justdial with poor results. We launched their custom Jamstack portal with a 200 KM fare calculator and Google Business Profile optimization.
                  </p>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                      <p className="text-[10px] font-bold text-slate-500 uppercase">Google Ranking</p>
                      <p className="text-lg font-black text-slate-900 mt-0.5">Rank #6.7 (Page 1)</p>
                      <p className="text-[10px] text-emerald-600 font-bold">↑ Outranking aggregators</p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                      <p className="text-[10px] font-bold text-slate-500 uppercase">Monthly Hosting</p>
                      <p className="text-lg font-black text-emerald-700 mt-0.5">₹0 / Month</p>
                      <p className="text-[10px] text-slate-500">Zero server bills for life</p>
                    </div>
                  </div>

                  <div className="pt-2">
                    <a
                      href="https://bhumikatourandtravels.world/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="wix-btn-primary px-5 py-2.5 text-xs inline-flex items-center gap-2"
                    >
                      <span>Open Live Website In New Tab</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
