import React from 'react';
import { PROJECTS } from '@/data/projects';
import ProjectCard from '@/components/portfolio/ProjectCard';
import CaseStudyHero from '@/components/home/CaseStudyHero';
import CTASection from '@/components/home/CTASection';
import { Sparkles } from 'lucide-react';

export default function PortfolioPage() {
  return (
    <div className="py-12 lg:py-20 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <span className="text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            Real Client Results
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Case Studies & Live Work
          </h1>
          <p className="text-slate-400 text-sm sm:text-base">
            Explore our real-world implementations across Tour & Travels, Healthcare Clinics, Cafes, and Real Estate in North India.
          </p>
        </div>

        {/* Featured Case Study Hero */}
        <CaseStudyHero />

        {/* Other Projects Grid */}
        <div className="pt-10 space-y-8">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-indigo-400" />
              <span>More Industry Showcases</span>
            </h2>
            <span className="text-xs text-slate-400 font-medium">
              Showing {PROJECTS.length} Verified Implementations
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS.map((proj) => (
              <ProjectCard key={proj.id} project={proj} />
            ))}
          </div>
        </div>

      </div>

      <CTASection />
    </div>
  );
}
