'use client';

import React from 'react';
import { MessageSquare } from 'lucide-react';
import { COMPANY } from '@/data/company';

export default function WhatsAppFloatingButton() {
  const defaultText = 'Namaste Raja bhai! I was looking at your O2O Digital website and want to discuss digitizing my business.';
  const url = `https://wa.me/918000907924?text=${encodeURIComponent(defaultText)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      <div className="hidden sm:block px-3 py-1.5 rounded-full bg-slate-900/90 text-white text-xs font-semibold border border-slate-700/80 shadow-xl backdrop-blur-md animate-pulse">
        Direct WhatsApp Raja Singh 💬
      </div>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-white shadow-2xl shadow-emerald-500/50 hover:scale-110 active:scale-95 transition-all group"
        aria-label="Contact on WhatsApp"
      >
        <MessageSquare className="w-7 h-7 fill-white" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-[#080c14]"></span>
      </a>
    </div>
  );
}
