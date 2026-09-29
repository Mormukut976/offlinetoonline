"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  SearchCode,
  MapPin,
  Building,
  Play,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Phone,
  Database,
  Globe,
  Share2,
  Terminal,
  Sparkles,
  ArrowRight,
  Download,
  Filter,
  Flame,
  Check,
  RotateCw,
  Layers,
  ChevronRight
} from "lucide-react";

const CITIES = [
  "Jaipur",
  "Jodhpur",
  "Udaipur",
  "Kota",
  "Delhi",
  "Noida",
  "Gurgaon",
  "Ahmedabad"
];

const CATEGORIES = [
  { key: "hospital", label: "Hospitals, Clinics & Dentists" },
  { key: "tour_travel", label: "Tour & Travels / Cab Agencies" },
  { key: "real_estate", label: "Real Estate & Property Agents" },
  { key: "restaurant", label: "Restaurants, Cafes & Food" },
  { key: "hotel", label: "Hotels, Resorts & Guest Houses" },
  { key: "salon", label: "Salons, Spas & Beauty Parlors" }
];

export default function LeadExtractorPage() {
  const [city, setCity] = useState("Jaipur");
  const [category, setCategory] = useState("hospital");
  const [zone, setZone] = useState("all");
  const [batch, setBatch] = useState(1);
  const [availableZones, setAvailableZones] = useState<string[]>([]);
  const [autoSave, setAutoSave] = useState(false);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<any[]>([]);
  const [scrapedMeta, setScrapedMeta] = useState<any | null>(null);
  const [logs, setLogs] = useState<string[]>([
    "Lead Intelligence Engine initialized.",
    "Ready to scan fresh, non-duplicate offline clients."
  ]);
  const [savingLead, setSavingLead] = useState<string | null>(null);
  const [batchImporting, setBatchImporting] = useState(false);
  const [importedAll, setImportedAll] = useState(false);

  const addLog = (msg: string) => {
    setLogs((prev) => [...prev.slice(-15), `[${new Date().toLocaleTimeString()}] ${msg}`]);
  };

  const runScraper = async (batchToRun = batch) => {
    setLoading(true);
    setImportedAll(false);
    addLog(`Scanning Batch #${batchToRun} for ${category} in ${city} (Zone: ${zone})...`);

    try {
      const res = await fetch("/api/scraper", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          city,
          category,
          zone,
          batch: batchToRun,
          autoSave
        })
      });
      const data = await res.json();

      if (data.success && data.data) {
        setResults(data.data);
        if (data.availableZones) {
          setAvailableZones(data.availableZones);
        }
        setScrapedMeta({
          city: data.city,
          category: data.category,
          batch: data.batch,
          total: data.totalScraped,
          saved: data.savedCount,
          crmCount: data.existingInCrmCount
        });
        const noWebCount = (data.data || []).filter((d: any) => !d.hasWebsite).length;
        addLog(`Found ${data.totalScraped} BRAND NEW clients in Batch #${data.batch}.`);
        addLog(`${noWebCount} businesses have NO WEBSITE (Prime Pitch Targets).`);
        if (data.savedCount > 0) {
          addLog(`Auto-saved ${data.savedCount} new leads into CRM database.`);
        }
      } else {
        addLog(`Error: ${data.error || "Scraping failed"}`);
      }
    } catch (err: any) {
      addLog(`Fetch failed: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleNextBatch = () => {
    const nextBatch = batch + 1;
    setBatch(nextBatch);
    runScraper(nextBatch);
  };

  const saveSingleLead = async (lead: any) => {
    setSavingLead(lead.businessName);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          businessName: lead.businessName,
          category: lead.category,
          city: lead.city,
          state: lead.state || "Rajasthan",
          address: lead.address,
          phone: lead.phone || "+91-XXXXXXXXXX",
          website: lead.website || null,
          rating: lead.rating || 4.5,
          status: "new",
          source: `scanner_batch_${batch}`,
          notes: `Discovered in ${lead.zone}. Missing website: ${!lead.hasWebsite}.`
        })
      });
      const data = await res.json();
      if (data.success) {
        addLog(`Saved "${lead.businessName}" to CRM database.`);
        setResults((prev) =>
          prev.map((item) =>
            item.businessName === lead.businessName ? { ...item, isSaved: true } : item
          )
        );
      }
    } catch (err: any) {
      addLog(`Save error: ${err.message}`);
    } finally {
      setSavingLead(null);
    }
  };

  const importAllLeads = async () => {
    setBatchImporting(true);
    addLog(`Importing all ${results.length} fresh leads from Batch #${batch} to CRM database...`);
    let count = 0;
    for (const lead of results) {
      if (lead.isSaved) continue;
      try {
        await fetch("/api/leads", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            businessName: lead.businessName,
            category: lead.category,
            city: lead.city,
            state: lead.state || "Rajasthan",
            address: lead.address,
            phone: lead.phone || "+91-XXXXXXXXXX",
            website: lead.website || null,
            rating: lead.rating || 4.5,
            status: "new",
            source: `scanner_batch_${batch}`,
            notes: `Batch #${batch} imported from Lead Extractor for ${city}.`
          })
        });
        count++;
      } catch (e) {
        // skip duplicate
      }
    }
    setResults((prev) => prev.map((item) => ({ ...item, isSaved: true })));
    setBatchImporting(false);
    setImportedAll(true);
    addLog(`Successfully imported ${count} fresh leads into Leads CRM.`);
  };

  const noWebsiteLeads = results.filter((r) => !r.hasWebsite);

  const getWhatsAppPitch = (lead: any) => {
    const phone = lead.phone?.replace(/[^0-9]/g, "") || "";
    const cleanPhone = phone.startsWith("91") ? phone : "91" + phone;
    const message = `Namaste! 🙏 Kya meri baat ${lead.businessName} ke owner se ho rahi hai?

Main Raja Singh Chauhan (Founder, O2O Digital Agency) se bol raha hoon.

Maine dekha aapka business ${lead.zone || lead.city} me kafi reputed hai, lekin aapki official modern website nahi hai jisse daily high-value customer inquiries miss ho rahi hain.

Humne Bhumika Tour & Travels ko Google Page 1 (Rank 6.7) par rank karwaya hai. Kya main aapke business ke liye ek sample live demo website share kar sakta hu?
- Raja Singh Chauhan
O2O Digital Agency, Jaipur
https://bhumikatourandtravels.world/`;
    return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-20">
      {/* Top Banner */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-gradient-to-r from-cyan-950/40 via-indigo-950/20 to-slate-900 border border-cyan-500/20 p-6 rounded-3xl">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider">
            <SearchCode className="w-4 h-4" /> Live Market Intelligence
          </div>
          <h1 className="text-2xl font-black text-white">Lead Extractor & Scanner</h1>
          <p className="text-xs text-slate-400 max-w-xl">
            Infinite fresh client discovery engine. Rotates through commercial sub-zones and batches, automatically filtering out leads you have already saved.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/leads"
            className="flex items-center gap-2 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-bold transition-all"
          >
            <Database className="w-4 h-4 text-indigo-400" />
            <span>View Leads CRM</span>
          </Link>
        </div>
      </div>

      {/* Control Panel Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Scraper Config */}
        <div className="lg:col-span-2 bg-[#111625] border border-[#1E293B] rounded-3xl p-6 space-y-5">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <MapPin className="w-4 h-4 text-indigo-400" />
              Target Location & Locality
            </h3>
            <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
              Batch #{batch}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1.5">Select City</label>
              <select
                value={city}
                onChange={(e) => {
                  setCity(e.target.value);
                  setZone("all");
                  setBatch(1);
                }}
                className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs font-semibold text-white focus:outline-none focus:border-indigo-500"
              >
                {CITIES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1.5">Commercial Zone</label>
              <select
                value={zone}
                onChange={(e) => setZone(e.target.value)}
                className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs font-semibold text-white focus:outline-none focus:border-indigo-500"
              >
                <option value="all">All Commercial Zones (Rotating)</option>
                {availableZones.map((z) => (
                  <option key={z} value={z}>
                    {z}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1.5">Business Category</label>
              <select
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                  setBatch(1);
                }}
                className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs font-semibold text-white focus:outline-none focus:border-indigo-500"
              >
                {CATEGORIES.map((cat) => (
                  <option key={cat.key} value={cat.key}>
                    {cat.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2 border-t border-slate-800">
            <label className="flex items-center gap-2.5 cursor-pointer text-xs text-slate-300">
              <input
                type="checkbox"
                checked={autoSave}
                onChange={(e) => setAutoSave(e.target.checked)}
                className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 bg-slate-900 border-slate-700"
              />
              <span>Automatically import scraped leads into CRM database</span>
            </label>

            <button
              onClick={() => runScraper(batch)}
              disabled={loading}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2.5 bg-gradient-to-r from-cyan-600 via-indigo-600 to-purple-600 hover:from-cyan-500 hover:to-indigo-500 text-white rounded-xl text-xs font-bold shadow-lg shadow-cyan-600/20 transition-all hover:scale-102"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>{loading ? "Scanning Fresh Leads..." : `Run Scan (Batch #${batch})`}</span>
            </button>
          </div>
        </div>

        {/* Live Terminal & Logs */}
        <div className="bg-[#0A0E1A] border border-[#1E293B] rounded-3xl p-5 space-y-3 font-mono">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>Crawler Status Console</span>
            </div>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          </div>

          <div className="h-44 overflow-y-auto space-y-1.5 text-[11px] text-slate-300 pr-1 leading-relaxed">
            {logs.map((log, i) => (
              <div key={i} className="text-slate-400">
                {log}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Results Metrics Banner */}
      {scrapedMeta && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            <div className="bg-[#111625] p-5 rounded-2xl border border-[#1E293B]">
              <span className="text-[11px] font-bold text-slate-400 uppercase">Fresh Leads Found</span>
              <p className="text-3xl font-black text-white mt-1">{scrapedMeta.total}</p>
              <span className="text-[11px] text-indigo-400 font-medium">Batch #{scrapedMeta.batch} ({scrapedMeta.city})</span>
            </div>

            <div className="bg-[#111625] p-5 rounded-2xl border border-rose-500/30 bg-rose-950/10 relative overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-rose-400 uppercase flex items-center gap-1.5">
                  <Flame className="w-4 h-4" /> No Website (Hot Leads)
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300">
                  Target Now
                </span>
              </div>
              <p className="text-3xl font-black text-rose-400 mt-1">{noWebsiteLeads.length}</p>
              <span className="text-[11px] text-rose-300/80">
                {Math.round((noWebsiteLeads.length / (scrapedMeta.total || 1)) * 100)}% Opportunity Rate
              </span>
            </div>

            <div className="bg-[#111625] p-5 rounded-2xl border border-emerald-500/30 bg-emerald-950/10">
              <span className="text-[11px] font-bold text-emerald-400 uppercase">Has Existing Website</span>
              <p className="text-3xl font-black text-emerald-400 mt-1">
                {scrapedMeta.total - noWebsiteLeads.length}
              </p>
              <span className="text-[11px] text-emerald-300/80">Redesign & SEO Pitch</span>
            </div>

            <div className="bg-[#111625] p-5 rounded-2xl border border-purple-500/30 bg-purple-950/10">
              <span className="text-[11px] font-bold text-purple-400 uppercase">Already In CRM</span>
              <p className="text-3xl font-black text-purple-400 mt-1">
                {scrapedMeta.crmCount || 0}
              </p>
              <span className="text-[11px] text-purple-300/80">Excluded from scan</span>
            </div>
          </div>

          {/* Batch Actions Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 bg-[#111625] p-4 rounded-2xl border border-[#1E293B]">
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>
                Showing <strong>{results.length}</strong> uncontacted businesses in <strong>Batch #{batch}</strong>.
              </span>
            </div>

            <div className="flex items-center gap-3">
              {importedAll ? (
                <div className="flex items-center gap-1.5 px-4 py-2 bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 rounded-xl text-xs font-bold">
                  <Check className="w-4 h-4" />
                  <span>Batch #{batch} Leads Saved to CRM!</span>
                </div>
              ) : (
                <button
                  onClick={importAllLeads}
                  disabled={batchImporting || results.length === 0}
                  className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold shadow-md shadow-indigo-600/20 transition-all hover:scale-102"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{batchImporting ? "Saving..." : `Import All ${results.length} Leads to CRM`}</span>
                </button>
              )}

              {/* Next Batch Button */}
              <button
                onClick={handleNextBatch}
                disabled={loading}
                className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 rounded-xl text-xs font-bold transition-all hover:scale-102"
              >
                <RotateCw className="w-3.5 h-3.5 text-cyan-400" />
                <span>Scan Next Batch #{batch + 1} (+15 Leads)</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Scraped Results Table */}
      {results.length > 0 && (
        <div className="bg-[#111625] border border-[#1E293B] rounded-3xl overflow-hidden shadow-xl space-y-4 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <span>Leads Discovery (Batch #{batch})</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  100% Fresh
                </span>
              </h3>
              <p className="text-xs text-slate-400">
                1-Click WhatsApp Pitch from Raja Singh Chauhan with Bhumika Tour & Travels proof link
              </p>
            </div>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-800 text-slate-300">
              {results.length} Prospects
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-[#1E293B] text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  <th className="py-3 px-3">Business Name</th>
                  <th className="py-3 px-3">Locality / Area</th>
                  <th className="py-3 px-3">Contact Number</th>
                  <th className="py-3 px-3">Website Status</th>
                  <th className="py-3 px-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1E293B]/60">
                {results.map((lead, idx) => (
                  <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
                    <td className="py-3.5 px-3">
                      <div className="font-bold text-white text-sm">{lead.businessName}</div>
                      <div className="text-[11px] text-slate-500 capitalize">{lead.category.replace("_", " ")}</div>
                    </td>
                    <td className="py-3.5 px-3 text-slate-300 max-w-xs truncate font-medium">
                      <span className="text-indigo-400 font-semibold">{lead.zone || lead.address.split(",")[0]}</span>
                      <span className="text-slate-500 text-[11px] block">{lead.city}</span>
                    </td>
                    <td className="py-3.5 px-3 font-mono text-slate-300 font-semibold">
                      {lead.phone}
                    </td>
                    <td className="py-3.5 px-3">
                      {lead.hasWebsite ? (
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                          <Globe className="w-3 h-3" /> Has Website
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2.5 py-1 rounded-full bg-rose-500/20 text-rose-400 border border-rose-500/30 animate-pulse">
                          <Flame className="w-3 h-3" /> No Website (Hot Pitch)
                        </span>
                      )}
                    </td>
                    <td className="py-3.5 px-3 text-right">
                      <div className="flex items-center justify-end gap-2">
                        {/* WhatsApp Pitch */}
                        <a
                          href={getWhatsAppPitch(lead)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-[11px] font-semibold transition-all shadow-sm shadow-emerald-600/30 hover:scale-102"
                          title="Send WhatsApp Pitch"
                        >
                          <Share2 className="w-3.5 h-3.5" />
                          <span>Pitch</span>
                        </a>

                        {/* Save to CRM */}
                        {lead.isSaved ? (
                          <span className="text-[10px] font-bold text-emerald-400 px-2 py-1.5 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                            Saved ✓
                          </span>
                        ) : (
                          <button
                            onClick={() => saveSingleLead(lead)}
                            disabled={savingLead === lead.businessName}
                            className="px-2.5 py-1.5 bg-indigo-600/20 hover:bg-indigo-600/40 text-indigo-300 border border-indigo-500/30 rounded-lg text-[10px] font-semibold transition-colors"
                          >
                            {savingLead === lead.businessName ? "Saving..." : "Save to CRM"}
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Bottom Next Batch Callout */}
          <div className="p-4 bg-slate-900/60 rounded-2xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-xs text-slate-400">
              Want more clients in {city}? Click next batch to generate uncontacted businesses in other commercial zones.
            </span>
            <button
              onClick={handleNextBatch}
              disabled={loading}
              className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white rounded-xl text-xs font-bold transition-all shadow-md"
            >
              <RotateCw className="w-3.5 h-3.5" />
              <span>Scan Batch #{batch + 1} (+15 Leads)</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
