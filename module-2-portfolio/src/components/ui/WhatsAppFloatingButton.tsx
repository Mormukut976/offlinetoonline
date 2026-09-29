'use client';

import React from 'react';
import { MessageSquare } from 'lucide-react';
import { COMPANY } from '@/data/company';

export default function WhatsAppFloatingButton() {
  const defaultText = 'Hello Raja! I was reviewing your O2O Digital Agency website and would like to discuss launching my business online.';
  const url = `https://wa.me/${COMPANY.rawPhone}?text=${encodeURIComponent(defaultText)}`;

  return (
    <aside aria-label="Direct WhatsApp Hotline" className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      <div className="hidden sm:block px-3.5 py-1.5 rounded-full bg-[#121422]/90 text-slate-200 text-xs font-semibold border border-white/10 shadow-2xl backdrop-blur-md">
        <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 mr-2 animate-pulse"></span>
        Chat With Raja Singh
      </div>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-white shadow-2xl shadow-emerald-500/50 hover:scale-110 active:scale-95 transition-all relative group"
        aria-label="Direct WhatsApp Hotline to Raja Singh Chauhan"
      >
        <MessageSquare className="w-7 h-7 fill-white" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-[#090a12] animate-ping"></span>
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-[#090a12]"></span>
      </a>
    </aside>
  );
}
