"use client";

import Link from "next/link";
import { Plus, SearchCode, FilePlus, Sparkles, Upload } from "lucide-react";

export function Header() {
  return (
    <header className="h-16 bg-[#0B0F19]/80 backdrop-blur-md border-b border-[#1E293B] sticky top-0 z-30 flex items-center justify-between px-8">
      {/* Title & Status */}
      <div className="flex items-center gap-3">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Pan-India Engine Active
        </span>
        <span className="text-xs text-slate-500 hidden sm:inline">•</span>
        <span className="text-xs text-slate-400 hidden sm:inline">
          Coverage: All 28 Indian States & 100+ Commercial Cities
        </span>
      </div>

      {/* Quick Actions */}
      <div className="flex items-center gap-3">
        <Link
          href="/scripts"
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-colors"
        >
          <SearchCode className="w-3.5 h-3.5 text-indigo-400" />
          <span>Lead Engine</span>
        </Link>

        <Link
          href="/quotation"
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-colors"
        >
          <FilePlus className="w-3.5 h-3.5 text-amber-400" />
          <span>New Quotation</span>
        </Link>

        <Link
          href="/leads"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 shadow-md shadow-indigo-600/25 transition-all"
        >
          <Plus className="w-4 h-4" />
          <span>Add Lead</span>
        </Link>
      </div>
    </header>
  );
}
