'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { PROJECTS, ProjectItem } from '@/data/projects';
import { COMPANY } from '@/data/company';
import { ExternalLink, Star, MapPin, CheckCircle2, ArrowRight, ShieldCheck, Zap, Sparkles, MessageSquare } from 'lucide-react';

export default function PortfolioShowcase() {
  const [activeTab, setActiveTab] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Industries' },
    { id: 'tour_travel', label: 'Tour & Travels' },
    { id: 'medical', label: 'Healthcare & Clinics' },
    { id: 'food', label: 'Hospitality & Cafes' },
    { id: 'real_estate', label: 'Real Estate' },
    { id: 'education', label: 'Education' }
  ];

  const filteredProjects = activeTab === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeTab);

  return (
    <section id="portfolio" className="py-20 lg:py-28 relative overflow-hidden bg-[#090a12] border-b border-white/10">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[700px] h-[500px] ambient-glow-purple blur-[160px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="category-pill">
            <Sparkles className="w-3.5 h-3.5 text-violet-400" />
            <span>CLIENT PORTFOLIO & CASE STUDIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-heading">
            Proven results across{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-300">
              multiple offline industries
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Every business has unique operational needs. Explore how we engineer customized digital engines with zero recurring server bills.
          </p>
        </div>

        {/* Industry Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                activeTab === cat.id
                  ? 'bg-violet-600 text-white shadow-lg shadow-violet-600/30'
                  : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="modern-card overflow-hidden flex flex-col justify-between bg-[#0e101c] border-white/10 group hover:border-violet-500/40"
            >
              <div>
                {/* Visual Thumbnail */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e101c] via-transparent to-black/30"></div>
                  
                  {/* Top Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold">
                      {project.categoryLabel}
                    </span>
                  </div>

                  {/* Location badge */}
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-slate-300 text-[10px] font-medium flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-violet-400" />
                      {project.city}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-black text-white group-hover:text-violet-300 transition-colors font-heading">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Metrics Pill Grid */}
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    {project.metrics.map((m, idx) => (
                      <div key={idx} className="p-2 rounded-xl bg-white/5 border border-white/5 space-y-0.5">
                        <span className="text-[10px] text-slate-400 block font-medium">{m.label}</span>
                        <span className="text-xs font-bold text-emerald-400 font-mono">{m.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Solution bullet */}
                  <div className="pt-2 text-xs text-slate-300 leading-relaxed">
                    <strong className="text-slate-200 block mb-1">Delivered Engine:</strong>
                    {project.solution}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 mt-4 border-t border-white/5 flex items-center justify-between">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full btn-secondary-dark py-2.5 px-4 text-xs flex items-center justify-center gap-2 group-hover:border-violet-500/50"
                  >
                    <span>View Live Production Site</span>
                    <ExternalLink className="w-3.5 h-3.5 text-violet-400" />
                  </a>
                ) : (
                  <a
                    href={`https://wa.me/${COMPANY.rawPhone}?text=${encodeURIComponent(`Hello Raja! I want to review the case study architecture for: ${project.title}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full btn-secondary-dark py-2.5 px-4 text-xs flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Inquire About Similar Architecture</span>
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
