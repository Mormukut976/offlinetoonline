'use client';

import React from 'react';
import Link from 'next/link';
import { COMPANY } from '@/data/company';
import { ShieldCheck, MessageSquare, ExternalLink } from 'lucide-react';

export default function EditionsSidebar() {
  const sections = [
    { num: 'I', label: 'The Awakening', href: '#hero', sub: 'Zero Server Cost' },
    { num: 'II', label: 'Bhumika Travels', href: '#case-study', sub: 'Google Page 1 Rank 6.7' },
    { num: 'III', label: 'Live Fare Engine', href: '#fare-engine', sub: '200 KM Roundtrip Logic' },
    { num: 'IV', label: 'Google 3-Pack', href: '#google-maps', sub: 'Local Maps Domination' },
    { num: 'V', label: 'NFC Standees', href: '#nfc-standees', sub: 'Walk-in Counter Reviews' },
    { num: 'VI', label: 'Feature Matrix', href: '#features', sub: '16 Agency Capabilities' },
    { num: 'VII', label: 'Transparent Pricing', href: '#pricing', sub: 'Starter to Enterprise' },
    { num: 'VIII', label: 'Direct Dispatch', href: '#contact', sub: 'WhatsApp Raja Singh' }
  ];

  return (
    <aside className="hidden xl:block w-72 shrink-0 sticky top-20 h-[calc(100vh-5rem)] p-6 overflow-y-auto border-r border-slate-800/80 bg-[#06080d]/80 text-xs">
      <div className="space-y-8">
        
        {/* Editions Header */}
        <div className="space-y-1">
          <span className="text-[10px] font-mono tracking-widest uppercase text-indigo-400 block font-bold">
            [ EDITION 2026 // JAIPUR ]
          </span>
          <h3 className="font-bold text-base text-white tracking-tight">
            The O2O Edition
          </h3>
          <p className="text-[11px] text-slate-400 leading-normal">
            A new standard for Indian offline business digitalization.
          </p>
        </div>

        {/* Roman Numeral Navigation Index */}
        <nav className="space-y-1.5 font-medium">
          {sections.map((item) => (
            <a
              key={item.num}
              href={item.href}
              className="flex items-center justify-between p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/50 transition-all group"
            >
              <div className="flex items-center gap-2.5">
                <span className="font-mono text-indigo-400 font-bold text-[11px] w-6">
                  {item.num}
                </span>
                <span className="text-slate-300 group-hover:text-white">
                  {item.label}
                </span>
              </div>
              <span className="text-[10px] font-mono text-slate-500 group-hover:text-emerald-400 transition-colors">
                ↗
              </span>
            </a>
          ))}
        </nav>

        {/* Live Case Study Badge */}
        <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wider">
              VERIFIED CLIENT
            </span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          </div>
          <p className="text-[11px] font-bold text-white">
            Bhumika Tour & Travels
          </p>
          <p className="text-[10px] text-slate-400 leading-relaxed">
            Ranked on Google Page 1. 140+ monthly cab inquiries via 200 KM fare calculator.
          </p>
          <a
            href="https://bhumikatourandtravels.world/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-semibold text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-1 mt-1"
          >
            <span>Live Portal Proof</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Founder Info */}
        <div className="pt-4 border-t border-slate-800/80 space-y-1.5 text-[11px] text-slate-400">
          <p className="font-bold text-slate-200">Raja Singh Chauhan</p>
          <p className="text-[10px] text-slate-400">Founder & Managing Director</p>
          <p className="text-[10px] text-slate-500">Ekta Nagar, Gandhi Path West, Jaipur</p>
          <div className="pt-2">
            <a
              href={`https://wa.me/918000907924?text=${encodeURIComponent('Namaste Raja bhai! Need to discuss my business.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-emerald-400 hover:text-emerald-300 font-bold inline-flex items-center gap-1"
            >
              <MessageSquare className="w-3 h-3" />
              <span>+91 80009 07924</span>
            </a>
          </div>
        </div>

      </div>
    </aside>
  );
}
