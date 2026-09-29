import React from 'react';
import { COMPANY } from '@/data/company';

export default function StatsCounter() {
  return (
    <section className="border-y border-slate-800/80 bg-[#060a12] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 text-center">
          {COMPANY.stats.map((stat, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/60">
              <div className="text-2xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-indigo-400 tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-white mt-1">{stat.label}</div>
              <div className="text-xs text-slate-400 mt-0.5">{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
