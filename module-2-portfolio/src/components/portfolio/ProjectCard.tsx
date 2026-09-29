import React from 'react';
import { ProjectItem } from '@/data/projects';
import { ExternalLink, CheckCircle, ArrowRight } from 'lucide-react';

export default function ProjectCard({ project }: { project: ProjectItem }) {
  const waInquiry = `Namaste Raja bhai! I saw your portfolio case study for ${project.title} and want something similar for my business.`;

  return (
    <div className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6">
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs font-bold px-2.5 py-1 rounded bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
            {project.categoryLabel}
          </span>
          <span className="text-xs text-slate-400">
            📍 {project.city}
          </span>
        </div>

        <h3 className="text-xl font-bold text-white hover:text-indigo-300 transition-colors">
          {project.title}
        </h3>

        <p className="text-xs text-slate-400 font-medium">
          Client: <span className="text-slate-300">{project.client}</span>
        </p>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          {project.solution}
        </p>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 gap-2.5 pt-2">
          {project.metrics.map((m, idx) => (
            <div key={idx} className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800">
              <div className="text-[10px] text-slate-400">{m.label}</div>
              <div className="text-xs sm:text-sm font-bold text-emerald-400 font-mono mt-0.5">{m.value}</div>
            </div>
          ))}
        </div>

        {/* Key Features */}
        <div className="space-y-1.5 pt-2 border-t border-slate-800">
          {project.keyFeatures.slice(0, 3).map((f, i) => (
            <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
              <span className="line-clamp-1">{f}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-1.5"
          >
            <span>Visit Live Website</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        ) : (
          <span className="text-xs text-slate-500 italic">Client Private Portal</span>
        )}

        <a
          href={`https://wa.me/918000907924?text=${encodeURIComponent(waInquiry)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 inline-flex items-center gap-1 transition-all"
        >
          <span>Get Similar</span>
          <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
        </a>
      </div>
    </div>
  );
}
