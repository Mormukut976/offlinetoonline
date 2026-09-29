"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Layers,
  ExternalLink,
  Share2,
  CheckCircle2,
  Sparkles,
  MapPin,
  ArrowRight,
  Eye,
  X,
  FileText
} from "lucide-react";
import { DEMO_DESIGNS, DemoDesign } from "@/data/demo-designs";

export default function DemoGalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [previewItem, setPreviewItem] = useState<DemoDesign | null>(null);

  const categories = ["all", ...Array.from(new Set(DEMO_DESIGNS.map((d) => d.category)))];

  const filteredDemos = DEMO_DESIGNS.filter(
    (d) => selectedCategory === "all" || d.category === selectedCategory
  );

  const getWhatsAppPitch = (demo: DemoDesign) => {
    const text = `Namaste! 🙏\n\nHumne aapki industry (${demo.categoryName}) ke liye ek high-converting website system design kiya hai.\n\nLive Demo Dekhiye:\n${demo.liveUrl || "https://o2odigital.agency/demos/" + demo.id}\n\n✨ Key Features:\n${demo.features.map(f => "• " + f).join("\n")}\n\nKya main aapke business ke branding ke sath aisa live demo bana kar dikhau?\n- O2O Digital Agency`;
    return `https://wa.me/?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-20">
      {/* Top Banner */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-gradient-to-r from-amber-950/40 via-orange-950/20 to-slate-900 border border-amber-500/20 p-6 rounded-3xl">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Layers className="w-4 h-4" /> Proof Of Work & Templates
          </div>
          <h1 className="text-2xl font-black text-white">Live Demos & Portfolio</h1>
          <p className="text-xs text-slate-400 max-w-xl">
            Real live case studies and ready-to-deploy niche templates to demo during client pitches for instant conversion.
          </p>
        </div>

        <Link
          href="/quotation"
          className="flex items-center gap-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold shadow-lg shadow-indigo-600/20 transition-all hover:scale-102"
        >
          <FileText className="w-4 h-4" />
          <span>Create Proposal</span>
        </Link>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold capitalize whitespace-nowrap transition-all ${
              selectedCategory === cat
                ? "bg-amber-500 text-black font-bold shadow-md shadow-amber-500/20"
                : "bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
            }`}
          >
            {cat === "all" ? "All Niches" : cat.replace("_", " ")}
          </button>
        ))}
      </div>

      {/* Demo Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDemos.map((demo) => (
          <div
            key={demo.id}
            className="bg-[#111625] border border-[#1E293B] hover:border-amber-500/40 rounded-3xl overflow-hidden shadow-xl flex flex-col justify-between transition-all group"
          >
            {/* Gradient Top Banner with Badge */}
            <div className={`h-36 bg-gradient-to-tr ${demo.gradient} p-5 flex flex-col justify-between relative overflow-hidden`}>
              <div className="flex items-center justify-between z-10">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-black/40 text-white backdrop-blur-sm border border-white/20">
                  {demo.categoryName}
                </span>
                {demo.badge && (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-400 text-black shadow">
                    {demo.badge}
                  </span>
                )}
              </div>

              <div className="z-10">
                <h3 className="text-xl font-black text-white leading-tight drop-shadow-md">
                  {demo.title}
                </h3>
                <p className="text-xs text-white/80 flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3 h-3" /> {demo.city}
                </p>
              </div>

              {/* Decorative circle glow */}
              <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/10 rounded-full blur-xl pointer-events-none" />
            </div>

            {/* Body */}
            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  Built-in Conversion Arsenal:
                </span>
                <ul className="space-y-1.5">
                  {demo.features.map((feat, i) => (
                    <li key={i} className="text-xs text-slate-300 flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-800 space-y-2">
                <div className="flex items-center gap-2">
                  {demo.liveUrl ? (
                    <a
                      href={demo.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 px-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Visit Live Website</span>
                    </a>
                  ) : (
                    <button
                      onClick={() => setPreviewItem(demo)}
                      className="flex-1 py-2 px-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Preview Architecture</span>
                    </button>
                  )}

                  <a
                    href={getWhatsAppPitch(demo)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-emerald-600/20 hover:bg-emerald-600/40 text-emerald-400 rounded-xl transition-colors"
                    title="Send WhatsApp Pitch with this Demo"
                  >
                    <Share2 className="w-4 h-4" />
                  </a>
                </div>

                <Link
                  href={`/quotation?clientBusiness=${encodeURIComponent(demo.title)}`}
                  className="w-full py-2 bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white rounded-xl text-[11px] font-semibold flex items-center justify-center gap-1 border border-slate-800 transition-all"
                >
                  <span>Build Quote for This Category</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Architecture Preview Modal */}
      {previewItem && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#111625] border border-[#1E293B] rounded-3xl max-w-xl w-full p-6 space-y-6 shadow-2xl relative">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
                  {previewItem.categoryName}
                </span>
                <h3 className="text-xl font-bold text-white">{previewItem.title}</h3>
                <p className="text-xs text-slate-400">{previewItem.city}</p>
              </div>
              <button
                onClick={() => setPreviewItem(null)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
              <h4 className="text-xs font-bold uppercase text-slate-300">Technical Architecture</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Pre-built responsive template built with Next.js, Tailwind CSS, Schema.org local business structured data, and direct WhatsApp lead conversion flow.
              </p>
              <div className="space-y-1.5 pt-2 border-t border-slate-800">
                {previewItem.features.map((f, i) => (
                  <div key={i} className="text-xs text-slate-200 flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => setPreviewItem(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white"
              >
                Close
              </button>
              <Link
                href={`/quotation?clientBusiness=${encodeURIComponent(previewItem.title)}`}
                className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-xl transition-all shadow-md shadow-indigo-600/20"
              >
                Create Quotation for Client
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
