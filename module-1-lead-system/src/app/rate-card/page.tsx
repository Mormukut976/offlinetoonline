"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  BadgePercent,
  Search,
  Plus,
  Edit2,
  Check,
  ExternalLink,
  Sparkles,
  Layers,
  ArrowRight,
  ShieldCheck,
  Zap,
  Tag,
  CheckCircle2,
  X
} from "lucide-react";
import { formatCurrency } from "@/lib/utils";

export default function RateCardManager() {
  const [rates, setRates] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [editingItem, setEditingItem] = useState<any | null>(null);
  const [saving, setSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const fetchRates = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/rate-card");
      const data = await res.json();
      if (data.success) {
        setRates(data.data);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRates();
  }, []);

  const categories = ["all", ...Array.from(new Set(rates.map(r => r.category)))];

  const filteredRates = rates.filter(r => {
    const matchesCategory = selectedCategory === "all" || r.category === selectedCategory;
    const matchesSearch = r.service.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          r.description?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleSaveEdit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingItem) return;
    try {
      setSaving(true);
      const res = await fetch("/api/rate-card", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: editingItem.id,
          basicPrice: editingItem.basicPrice,
          standardPrice: editingItem.standardPrice,
          premiumPrice: editingItem.premiumPrice,
          description: editingItem.description,
          features: editingItem.features
        })
      });
      const data = await res.json();
      if (data.success) {
        setSaveSuccess(true);
        setTimeout(() => {
          setSaveSuccess(false);
          setEditingItem(null);
          fetchRates();
        }, 800);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-20">
      {/* Top Header Banner */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-gradient-to-r from-indigo-950/40 via-purple-950/20 to-slate-900 border border-indigo-500/20 p-6 rounded-3xl">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-wider">
            <BadgePercent className="w-4 h-4" /> Pricing & Services Architecture
          </div>
          <h1 className="text-2xl font-black text-white">Agency Rate Card</h1>
          <p className="text-xs text-slate-400 max-w-xl">
            Standardized 3-tier pricing (Basic, Standard, Premium) for consistent proposals, maximum profit margins, and zero quotation guesswork.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/rate-card/public"
            target="_blank"
            className="flex items-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold shadow-lg shadow-emerald-600/20 transition-all hover:scale-102"
          >
            <span>Client View</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
          <Link
            href="/quotation"
            className="flex items-center gap-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold shadow-lg shadow-indigo-600/20 transition-all hover:scale-102"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Create Quotation</span>
          </Link>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#111625] p-4 rounded-2xl border border-[#1E293B]">
        <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold capitalize whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? "bg-indigo-600 text-white shadow-sm shadow-indigo-600/30"
                  : "bg-slate-800/60 text-slate-400 hover:text-white hover:bg-slate-800"
              }`}
            >
              {cat === "all" ? "All Services" : cat}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search service..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
          />
        </div>
      </div>

      {/* Rates Cards Grid */}
      {loading ? (
        <div className="p-12 text-center text-sm text-slate-400">Loading services rate card...</div>
      ) : filteredRates.length === 0 ? (
        <div className="p-12 text-center text-sm text-slate-400 bg-[#111625] rounded-2xl border border-[#1E293B]">
          No services match your filters.
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredRates.map((rc) => {
            const features = typeof rc.features === "string" ? JSON.parse(rc.features) : rc.features;

            return (
              <div
                key={rc.id}
                className="bg-[#111625] border border-[#1E293B] hover:border-indigo-500/40 rounded-3xl p-6 space-y-6 transition-all shadow-xl group"
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                      {rc.category}
                    </span>
                    <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {rc.service}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed max-w-md">
                      {rc.description}
                    </p>
                  </div>
                  <button
                    onClick={() => setEditingItem(JSON.parse(JSON.stringify(rc)))}
                    className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors"
                    title="Edit Pricing"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                </div>

                {/* 3-Tier Pricing Comparison */}
                <div className="grid grid-cols-3 gap-3">
                  {/* Basic Tier */}
                  <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-slate-400 uppercase">Basic</span>
                    </div>
                    <div className="text-base font-black text-white">
                      {formatCurrency(rc.basicPrice)}
                    </div>
                    <ul className="text-[11px] text-slate-400 space-y-1 pt-1 border-t border-slate-800">
                      {(features?.basic || []).slice(0, 3).map((f: string, i: number) => (
                        <li key={i} className="truncate">• {f}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Standard Tier (Hero) */}
                  <div className="p-3.5 rounded-2xl bg-indigo-950/30 border border-indigo-500/40 space-y-2 relative">
                    <div className="absolute -top-2.5 right-2 bg-indigo-500 text-[9px] font-bold text-white px-2 py-0.5 rounded-full uppercase tracking-wider">
                      Popular
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-indigo-300 uppercase">Standard</span>
                    </div>
                    <div className="text-base font-black text-indigo-400">
                      {formatCurrency(rc.standardPrice)}
                    </div>
                    <ul className="text-[11px] text-indigo-200/70 space-y-1 pt-1 border-t border-indigo-500/20">
                      {(features?.standard || []).slice(0, 3).map((f: string, i: number) => (
                        <li key={i} className="truncate">• {f}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Premium Tier */}
                  <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-purple-400 uppercase">Premium</span>
                    </div>
                    <div className="text-base font-black text-purple-300">
                      {formatCurrency(rc.premiumPrice)}
                    </div>
                    <ul className="text-[11px] text-slate-400 space-y-1 pt-1 border-t border-slate-800">
                      {(features?.premium || []).slice(0, 3).map((f: string, i: number) => (
                        <li key={i} className="truncate">• {f}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Quick Action */}
                <div className="pt-2 flex items-center justify-between text-xs border-t border-slate-800/80">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    Standard 5-7 Days Turnaround
                  </span>
                  <Link
                    href={`/quotation?clientBusiness=${encodeURIComponent(rc.service)}`}
                    className="inline-flex items-center gap-1 text-indigo-400 hover:text-indigo-300 font-semibold"
                  >
                    <span>Use in Quote</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Edit Rate Card Modal */}
      {editingItem && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#111625] border border-[#1E293B] rounded-3xl max-w-lg w-full p-6 space-y-6 shadow-2xl relative">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-white">Edit Service Pricing</h3>
                <p className="text-xs text-slate-400">{editingItem.service}</p>
              </div>
              <button
                onClick={() => setEditingItem(null)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveEdit} className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Description</label>
                <textarea
                  rows={2}
                  value={editingItem.description || ""}
                  onChange={(e) => setEditingItem({ ...editingItem, description: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="text-[11px] font-semibold text-slate-400 block mb-1">Basic Price (₹)</label>
                  <input
                    type="number"
                    value={editingItem.basicPrice}
                    onChange={(e) => setEditingItem({ ...editingItem, basicPrice: parseFloat(e.target.value) || 0 })}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs font-bold text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-semibold text-indigo-400 block mb-1">Standard Price (₹)</label>
                  <input
                    type="number"
                    value={editingItem.standardPrice}
                    onChange={(e) => setEditingItem({ ...editingItem, standardPrice: parseFloat(e.target.value) || 0 })}
                    className="w-full px-3 py-2 bg-slate-900 border border-indigo-500/50 rounded-xl text-xs font-bold text-indigo-400 focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-semibold text-purple-400 block mb-1">Premium Price (₹)</label>
                  <input
                    type="number"
                    value={editingItem.premiumPrice}
                    onChange={(e) => setEditingItem({ ...editingItem, premiumPrice: parseFloat(e.target.value) || 0 })}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs font-bold text-purple-400 focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              {saveSuccess && (
                <div className="p-3 bg-emerald-500/20 border border-emerald-500/30 rounded-xl text-emerald-400 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Pricing updated successfully!</span>
                </div>
              )}

              <div className="pt-4 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setEditingItem(null)}
                  className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-xl transition-all shadow-md shadow-indigo-600/20"
                >
                  {saving ? "Saving..." : "Save Changes"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
