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
  ChevronRight,
  Upload,
  FileSpreadsheet,
  Copy,
  MessageCircle,
  X,
  Compass,
  Zap,
  Globe2,
  FileUp
} from "lucide-react";
import { STATES, CITY_ZONES } from "@/data/cities";
import { CATEGORIES } from "@/data/categories";

export default function LeadExtractorPage() {
  const [activeTab, setActiveTab] = useState<"scanner" | "csv_import" | "directory_links">("scanner");

  // Filter States
  const [selectedStateKey, setSelectedStateKey] = useState("rajasthan");
  const [city, setCity] = useState("Jaipur");
  const [category, setCategory] = useState("tour_travel");
  const [zone, setZone] = useState("all");
  const [batch, setBatch] = useState(1);
  const [scanMode, setScanMode] = useState<"instant_batch" | "osm_live">("instant_batch");
  const [autoSave, setAutoSave] = useState(false);
  
  // Results & Operations
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<any[]>([]);
  const [availableZones, setAvailableZones] = useState<string[]>([]);
  const [scrapedMeta, setScrapedMeta] = useState<any | null>(null);
  const [logs, setLogs] = useState<string[]>([
    "Pan-India Lead Intelligence Engine initialized.",
    "Ready to scan fresh offline clients across 28 Indian States & 100+ Commercial Cities."
  ]);
  const [savingLead, setSavingLead] = useState<string | null>(null);
  const [batchImporting, setBatchImporting] = useState(false);
  const [importedAll, setImportedAll] = useState(false);

  // AI Pitch Modal State
  const [pitchModalLead, setPitchModalLead] = useState<any | null>(null);
  const [pitchType, setPitchType] = useState<"whatsapp" | "email" | "audit">("whatsapp");
  const [pitchTone, setPitchTone] = useState<"urgent_pain" | "friendly_founder" | "social_proof">("urgent_pain");
  const [aiPitchLoading, setAiPitchLoading] = useState(false);
  const [generatedPitch, setGeneratedPitch] = useState<string>("");
  const [pitchCopied, setPitchCopied] = useState(false);

  // Bulk CSV Upload State
  const [csvFile, setCsvFile] = useState<File | null>(null);
  const [csvParsedLeads, setCsvParsedLeads] = useState<any[]>([]);
  const [csvImportLoading, setCsvImportLoading] = useState(false);
  const [csvImportResult, setCsvImportResult] = useState<any | null>(null);

  // When state changes, update city and zones
  const handleStateChange = (stateKey: string) => {
    setSelectedStateKey(stateKey);
    const stateObj = STATES[stateKey];
    if (stateObj && stateObj.cities.length > 0) {
      const firstCity = stateObj.cities[0];
      setCity(firstCity);
      updateZonesForCity(firstCity);
    }
  };

  // When city changes, update zones
  const handleCityChange = (newCity: string) => {
    setCity(newCity);
    updateZonesForCity(newCity);
  };

  const updateZonesForCity = (cityName: string) => {
    const zoneData = CITY_ZONES[cityName];
    if (zoneData && zoneData.zones) {
      setAvailableZones(zoneData.zones);
    } else {
      setAvailableZones([
        `${cityName} Main Market`,
        `${cityName} Station Road`,
        `${cityName} Commercial Belt`,
        `${cityName} Civil Lines`,
        `${cityName} Bypass Road`
      ]);
    }
    setZone("all");
  };

  useEffect(() => {
    updateZonesForCity("Jaipur");
  }, []);

  const addLog = (msg: string) => {
    setLogs((prev) => [...prev.slice(-15), `[${new Date().toLocaleTimeString()}] ${msg}`]);
  };

  const runScraper = async (batchToRun = batch) => {
    setLoading(true);
    setImportedAll(false);
    const modeLabel = scanMode === "osm_live" ? "OpenStreetMap Live Directory" : "High-Volume Engine";
    addLog(`Running ${modeLabel} for ${category} in ${city} (Batch #${batchToRun})...`);

    try {
      const res = await fetch("/api/scraper", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          city,
          category,
          zone,
          batch: batchToRun,
          mode: scanMode,
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
          state: data.state,
          category: data.category,
          batch: data.batch,
          total: data.totalScraped,
          saved: data.savedCount,
          crmCount: data.existingInCrmCount,
          mode: data.mode
        });
        const noWebCount = (data.data || []).filter((d: any) => !d.hasWebsite).length;
        addLog(`Discovered ${data.totalScraped} leads in ${city} via ${modeLabel}.`);
        addLog(`🔥 ${noWebCount} businesses have NO WEBSITE (Priority Pitch Candidates).`);
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

  const saveSingleLead = async (item: any) => {
    setSavingLead(item.businessName);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          businessName: item.businessName,
          category: item.category,
          city: item.city,
          state: item.state,
          address: item.address,
          phone: item.phone,
          website: item.website,
          rating: item.rating,
          status: "new",
          notes: `Manually added from ${scanMode === "osm_live" ? "OpenStreetMap" : "Scanner"} in ${item.zone}. Missing website: ${!item.hasWebsite}.`
        })
      });
      const data = await res.json();
      if (data.success) {
        addLog(`Saved "${item.businessName}" to CRM database.`);
        setResults((prev) =>
          prev.map((l) => (l.businessName === item.businessName ? { ...l, isSaved: true } : l))
        );
      }
    } catch (err: any) {
      addLog(`Failed to save: ${err.message}`);
    } finally {
      setSavingLead(null);
    }
  };

  const importAllLeads = async () => {
    if (results.length === 0) return;
    setBatchImporting(true);
    addLog(`Importing ${results.length} leads into CRM database...`);

    try {
      const res = await fetch("/api/leads/import", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ leads: results })
      });
      const data = await res.json();

      if (data.success) {
        setImportedAll(true);
        addLog(`Batch Import complete! Imported ${data.importedCount} new leads (${data.skippedCount} duplicates skipped).`);
        setResults((prev) => prev.map((l) => ({ ...l, isSaved: true })));
      } else {
        addLog(`Import failed: ${data.error}`);
      }
    } catch (err: any) {
      addLog(`Batch import error: ${err.message}`);
    } finally {
      setBatchImporting(false);
    }
  };

  const exportCurrentBatch = () => {
    if (results.length === 0) return;
    const headers = ["Business Name,Category,City,State,Zone,Phone,Website,Has Website,Rating,Address"];
    const rows = results.map(
      (r) =>
        `"${r.businessName}","${r.category}","${r.city}","${r.state}","${r.zone}","${r.phone}","${r.website || ""}","${r.hasWebsite ? "YES" : "NO"}","${r.rating}","${r.address}"`
    );
    const blob = new Blob([headers.concat(rows).join("\n")], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `leads_${city}_${category}_batch${batch}.csv`;
    a.click();
  };

  // Generate AI Pitch Modal
  const openPitchModal = async (lead: any) => {
    setPitchModalLead(lead);
    setPitchCopied(false);
    setGeneratedPitch("");
    setAiPitchLoading(true);

    try {
      const res = await fetch("/api/ai/pitch", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          businessName: lead.businessName,
          category: lead.category,
          city: lead.city,
          state: lead.state,
          zone: lead.zone,
          hasWebsite: lead.hasWebsite,
          type: pitchType,
          tone: pitchTone
        })
      });
      const data = await res.json();
      if (data.success && data.result) {
        setGeneratedPitch(data.result);
      } else {
        setGeneratedPitch("Failed to generate AI pitch. Please check Settings for Groq API key.");
      }
    } catch (err: any) {
      setGeneratedPitch(`Error: ${err.message}`);
    } finally {
      setAiPitchLoading(false);
    }
  };

  const regeneratePitch = async (type = pitchType, tone = pitchTone) => {
    if (!pitchModalLead) return;
    setAiPitchLoading(true);
    setPitchCopied(false);

    try {
      const res = await fetch("/api/ai/pitch", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          businessName: pitchModalLead.businessName,
          category: pitchModalLead.category,
          city: pitchModalLead.city,
          state: pitchModalLead.state,
          zone: pitchModalLead.zone,
          hasWebsite: pitchModalLead.hasWebsite,
          type,
          tone
        })
      });
      const data = await res.json();
      if (data.success && data.result) {
        setGeneratedPitch(data.result);
      }
    } catch (err: any) {
      setGeneratedPitch(`Error: ${err.message}`);
    } finally {
      setAiPitchLoading(false);
    }
  };

  const copyPitch = () => {
    if (!generatedPitch) return;
    navigator.clipboard.writeText(generatedPitch);
    setPitchCopied(true);
    setTimeout(() => setPitchCopied(false), 2000);
  };

  const sendWhatsAppWithPitch = () => {
    if (!pitchModalLead) return;
    const cleanPhone = pitchModalLead.phone.replace(/\D/g, "");
    const encoded = encodeURIComponent(generatedPitch);
    window.open(`https://wa.me/${cleanPhone}?text=${encoded}`, "_blank");
  };

  // CSV File Upload Parser
  const handleCsvFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setCsvFile(file);
    setCsvImportResult(null);

    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target?.result as string;
      if (!text) return;

      const lines = text.split(/\r\n|\n/).filter(line => line.trim() !== "");
      if (lines.length < 2) return;

      const headers = lines[0].split(",").map(h => h.trim().toLowerCase().replace(/['"]/g, ""));
      const parsed: any[] = [];

      for (let i = 1; i < lines.length; i++) {
        // Simple CSV parser supporting quotes
        const line = lines[i];
        const values: string[] = [];
        let inQuotes = false;
        let currentValue = "";

        for (let charIndex = 0; charIndex < line.length; charIndex++) {
          const char = line[charIndex];
          if (char === '"') {
            inQuotes = !inQuotes;
          } else if (char === ',' && !inQuotes) {
            values.push(currentValue.trim());
            currentValue = "";
          } else {
            currentValue += char;
          }
        }
        values.push(currentValue.trim());

        const leadObj: any = {};
        headers.forEach((h, index) => {
          const val = values[index] ? values[index].replace(/^"|"$/g, "").trim() : "";
          if (h.includes("name") || h.includes("business") || h.includes("title") || h.includes("company")) {
            leadObj.businessName = val;
          } else if (h.includes("phone") || h.includes("mobile") || h.includes("contact")) {
            leadObj.phone = val;
          } else if (h.includes("city") || h.includes("location")) {
            leadObj.city = val;
          } else if (h.includes("state")) {
            leadObj.state = val;
          } else if (h.includes("category") || h.includes("industry")) {
            leadObj.category = val;
          } else if (h.includes("website") || h.includes("url")) {
            leadObj.website = val;
          } else if (h.includes("address") || h.includes("street")) {
            leadObj.address = val;
          } else if (h.includes("owner") || h.includes("person")) {
            leadObj.ownerName = val;
          } else if (h.includes("note")) {
            leadObj.notes = val;
          }
        });

        if (leadObj.businessName) {
          parsed.push(leadObj);
        }
      }

      setCsvParsedLeads(parsed);
      addLog(`Loaded CSV with ${parsed.length} business rows ready to import.`);
    };
    reader.readAsText(file);
  };

  const handleBulkCsvImport = async () => {
    if (csvParsedLeads.length === 0) return;
    setCsvImportLoading(true);

    try {
      const res = await fetch("/api/leads/import", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ leads: csvParsedLeads })
      });
      const data = await res.json();

      if (data.success) {
        setCsvImportResult(data);
        addLog(`Imported ${data.importedCount} new leads from CSV! (${data.skippedCount} duplicates skipped).`);
      } else {
        addLog(`CSV import error: ${data.error}`);
      }
    } catch (err: any) {
      addLog(`CSV upload failed: ${err.message}`);
    } finally {
      setCsvImportLoading(false);
    }
  };

  const downloadSampleCsv = () => {
    const sample = `Business Name,Phone,City,Category,Website,Address,Owner
Royal Marwar Tours,9829012345,Jaipur,tour_travel,,MI Road Panch Batti,Vikram Singh
Arogyam Multispeciality Clinic,9810123456,New Delhi,hospital,https://www.arogyam.in,Karol Bagh Pusa Road,Dr. Sanjay Gupta
Bandra Prime Realty,9820012345,Mumbai,real_estate,,BKC Commercial Hub,Rajesh Patil
Koramangala Fitness Hub,9845012345,Bengaluru,gym,,5th Block 80ft Road,Anand Kumar`;
    const blob = new Blob([sample], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `o2o_leads_sample_template.csv`;
    a.click();
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-16">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            Pan-India Engine Active • 28 States & 100+ Commercial Cities
          </div>
          <h1 className="text-2xl font-black text-white tracking-tight flex items-center gap-3">
            <SearchCode className="w-7 h-7 text-indigo-400" />
            Lead Intelligence & Scanner Engine
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Discover uncontacted offline businesses across India, verify digital presence, and pitch via AI & WhatsApp.
          </p>
        </div>

        {/* Global Tab Switcher */}
        <div className="flex items-center bg-slate-900 border border-slate-800 p-1 rounded-xl">
          <button
            onClick={() => setActiveTab("scanner")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
              activeTab === "scanner"
                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            Lead Scanner
          </button>
          <button
            onClick={() => setActiveTab("csv_import")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
              activeTab === "csv_import"
                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-400" />
            Bulk CSV / Excel
          </button>
          <button
            onClick={() => setActiveTab("directory_links")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
              activeTab === "directory_links"
                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
            Live Search Links
          </button>
        </div>
      </div>

      {/* TAB 1: SCANNER ENGINE */}
      {activeTab === "scanner" && (
        <>
          {/* Scanner Control Deck */}
          <div className="glass-card rounded-2xl p-5 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-indigo-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  Target Geographic & Industry Filter
                </span>
              </div>

              {/* Mode Toggle */}
              <div className="flex items-center gap-2 bg-slate-950 p-1 rounded-xl border border-slate-800">
                <button
                  onClick={() => setScanMode("instant_batch")}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-bold flex items-center gap-1.5 transition-all ${
                    scanMode === "instant_batch"
                      ? "bg-indigo-500/20 text-indigo-300 border border-indigo-500/30"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <Zap className="w-3 h-3 text-indigo-400" />
                  Instant Batch (Fast)
                </button>
                <button
                  onClick={() => setScanMode("osm_live")}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-bold flex items-center gap-1.5 transition-all ${
                    scanMode === "osm_live"
                      ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <Globe2 className="w-3 h-3 text-emerald-400" />
                  OpenStreetMap Live (Free)
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
              {/* 1. Indian State */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                  1. Indian State
                </label>
                <select
                  value={selectedStateKey}
                  onChange={(e) => handleStateChange(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-700/80 rounded-xl text-xs text-white focus:outline-none focus:border-indigo-500 font-medium"
                >
                  {Object.entries(STATES).map(([key, st]) => (
                    <option key={key} value={key}>
                      {st.name} ({st.cities.length} Cities)
                    </option>
                  ))}
                </select>
              </div>

              {/* 2. Commercial City */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5 text-indigo-400" />
                  2. Target City
                </label>
                <select
                  value={city}
                  onChange={(e) => handleCityChange(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-700/80 rounded-xl text-xs text-white focus:outline-none focus:border-indigo-500 font-medium"
                >
                  {STATES[selectedStateKey]?.cities.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              {/* 3. Sub-Zone / Locality */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-indigo-400" />
                  3. Commercial Hub
                </label>
                <select
                  value={zone}
                  onChange={(e) => setZone(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-700/80 rounded-xl text-xs text-white focus:outline-none focus:border-indigo-500 font-medium"
                >
                  <option value="all">All Prime Localities</option>
                  {availableZones.map((z) => (
                    <option key={z} value={z}>
                      {z}
                    </option>
                  ))}
                </select>
              </div>

              {/* 4. Business Category */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-indigo-400" />
                  4. Business Niche
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-700/80 rounded-xl text-xs text-white focus:outline-none focus:border-indigo-500 font-medium"
                >
                  {CATEGORIES.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.icon} {cat.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* 5. Action Button */}
              <div className="space-y-1.5 flex flex-col justify-end">
                <button
                  onClick={() => runScraper(1)}
                  disabled={loading}
                  className="w-full py-2.5 px-4 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30 transition-all"
                >
                  {loading ? (
                    <>
                      <RotateCw className="w-3.5 h-3.5 animate-spin" />
                      Scanning...
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 fill-current" />
                      Scan Leads
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Quick Helper Banner */}
            <div className="pt-2 flex flex-wrap items-center justify-between text-xs text-slate-400 gap-2">
              <div className="flex items-center gap-3">
                <label className="flex items-center gap-2 cursor-pointer select-none text-slate-300">
                  <input
                    type="checkbox"
                    checked={autoSave}
                    onChange={(e) => setAutoSave(e.target.checked)}
                    className="rounded bg-slate-950 border-slate-700 text-indigo-600 focus:ring-0"
                  />
                  <span>Auto-save fresh leads directly into CRM DB</span>
                </label>
              </div>

              <div className="text-[11px] text-slate-500">
                Current Batch: <span className="text-white font-bold">#{batch}</span> • Showing uncontacted leads only
              </div>
            </div>
          </div>

          {/* Scrape Stats Bar */}
          {scrapedMeta && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="glass-card p-3 rounded-xl border border-slate-800">
                <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Scanned City</span>
                <p className="text-base font-extrabold text-white mt-0.5">
                  {scrapedMeta.city}, {scrapedMeta.state}
                </p>
              </div>
              <div className="glass-card p-3 rounded-xl border border-slate-800">
                <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Fresh Uncontacted</span>
                <p className="text-base font-extrabold text-emerald-400 mt-0.5">
                  {scrapedMeta.total} Leads
                </p>
              </div>
              <div className="glass-card p-3 rounded-xl border border-slate-800">
                <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Already in CRM</span>
                <p className="text-base font-extrabold text-indigo-400 mt-0.5">
                  {scrapedMeta.crmCount} Saved
                </p>
              </div>
              <div className="glass-card p-3 rounded-xl border border-slate-800">
                <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Scanning Engine</span>
                <p className="text-base font-extrabold text-amber-400 mt-0.5 capitalize">
                  {scrapedMeta.mode === "osm_live" ? "OpenStreetMap Live" : "High-Volume Batch"}
                </p>
              </div>
            </div>
          )}

          {/* Results Table & Pitch Deck */}
          <div className="glass-card rounded-2xl border border-slate-800 overflow-hidden">
            <div className="p-4 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <Database className="w-4 h-4 text-indigo-400" />
                  Target Prospects ({results.length} Extracted)
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Click WhatsApp or AI Pitch to initiate instant outreach with customized Bhumika case study proof.
                </p>
              </div>

              {results.length > 0 && (
                <div className="flex items-center gap-2">
                  <button
                    onClick={exportCurrentBatch}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 transition-all"
                  >
                    <Download className="w-3.5 h-3.5 text-emerald-400" />
                    Download CSV
                  </button>
                  <button
                    onClick={importAllLeads}
                    disabled={batchImporting || importedAll}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 transition-all shadow-md shadow-emerald-600/20"
                  >
                    {batchImporting ? (
                      <RotateCw className="w-3.5 h-3.5 animate-spin" />
                    ) : importedAll ? (
                      <Check className="w-3.5 h-3.5" />
                    ) : (
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    )}
                    {importedAll ? "All Leads Saved!" : "Save All to CRM"}
                  </button>
                  <button
                    onClick={handleNextBatch}
                    disabled={loading}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 transition-all"
                  >
                    Next Batch
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>

            {results.length === 0 ? (
              <div className="py-16 text-center">
                <SearchCode className="w-12 h-12 text-slate-600 mx-auto mb-3" />
                <p className="text-sm font-semibold text-white">No active scan results</p>
                <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
                  Select your target Indian state, city, and business niche above, then click &quot;Scan Leads&quot;.
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-900/80 text-slate-400 font-semibold border-b border-slate-800">
                    <tr>
                      <th className="py-3 px-4">Business Name & Hub</th>
                      <th className="py-3 px-3">Contact Phone</th>
                      <th className="py-3 px-3">Digital Audit</th>
                      <th className="py-3 px-3">Rating</th>
                      <th className="py-3 px-4 text-right">Instant Outreach</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60">
                    {results.map((item, idx) => (
                      <tr key={idx} className="hover:bg-slate-900/40 transition-colors">
                        <td className="py-3.5 px-4">
                          <div className="font-bold text-white text-[13px] flex items-center gap-1.5">
                            {item.businessName}
                            {item.isLiveOsm && (
                              <span className="text-[9px] px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
                                OSM Verified
                              </span>
                            )}
                          </div>
                          <div className="text-[11px] text-slate-400 mt-0.5 flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-slate-500" />
                            {item.zone}, {item.city}
                          </div>
                        </td>

                        <td className="py-3.5 px-3">
                          <span className="font-mono text-slate-200 text-xs font-semibold">
                            {item.phone}
                          </span>
                        </td>

                        <td className="py-3.5 px-3">
                          {!item.hasWebsite ? (
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-rose-500/10 text-rose-400 border border-rose-500/30">
                              <Flame className="w-3 h-3 text-rose-400 animate-pulse" />
                              NO WEBSITE (HOT TARGET)
                            </span>
                          ) : (
                            <a
                              href={item.website}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1 text-[11px] text-slate-400 hover:text-indigo-400"
                            >
                              <Globe className="w-3 h-3" />
                              Has Old Website
                            </a>
                          )}
                        </td>

                        <td className="py-3.5 px-3 font-semibold text-amber-400">
                          ★ {item.rating}
                        </td>

                        <td className="py-3.5 px-4 text-right">
                          <div className="flex items-center justify-end gap-1.5">
                            {/* 1-Tap AI Pitch Generator */}
                            <button
                              onClick={() => openPitchModal(item)}
                              title="Generate AI Pitch with Groq"
                              className="px-2.5 py-1.5 rounded-lg text-[11px] font-bold text-indigo-300 bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/30 transition-all flex items-center gap-1"
                            >
                              <Sparkles className="w-3 h-3 text-indigo-400" />
                              AI Pitch
                            </button>

                            {/* WhatsApp Direct Pitch */}
                            <a
                              href={`https://wa.me/${item.phone.replace(/\D/g, "")}?text=${encodeURIComponent(
                                `Namaste! 🙏 Kya meri baat *${item.businessName}* ke owner se ho rahi hai?\n\nMain Raja Singh Chauhan (Founder, O2O Digital Agency) se baat kar raha hoon.\n\nMaine dekha aapka business *${item.zone || item.city}* me kafi accha kaam kar raha hai, lekin Google Search par official website na hone ki wajah se daily prospective customers online competitors ke paas ja rahe hain.\n\nHumne *Bhumika Tour & Travels* ke liye Google Page 1 ranking website banayi hai jisse unka business 3x grow hua hai (Live Proof: https://bhumikatourandtravels.world/).\n\nKya main aapke business ke liye ek *Free Live Demo Website* bana kar WhatsApp par share kar sakta hu?\n\nDhanyawad,\n*Raja Singh Chauhan*\nFounder & CEO, O2O Digital Agency\n+91 80009 07924`
                              )}`}
                              target="_blank"
                              rel="noreferrer"
                              className="px-2.5 py-1.5 rounded-lg text-[11px] font-bold text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 transition-all flex items-center gap-1"
                            >
                              <MessageCircle className="w-3 h-3 text-emerald-400" />
                              WhatsApp
                            </a>

                            {/* Save to CRM button */}
                            <button
                              onClick={() => saveSingleLead(item)}
                              disabled={item.isSaved || savingLead === item.businessName}
                              className={`px-2 py-1.5 rounded-lg text-[11px] font-medium transition-all ${
                                item.isSaved
                                  ? "bg-slate-800 text-slate-400 cursor-default"
                                  : "bg-slate-800 hover:bg-slate-700 text-white"
                              }`}
                            >
                              {savingLead === item.businessName ? (
                                <RotateCw className="w-3 h-3 animate-spin" />
                              ) : item.isSaved ? (
                                <Check className="w-3 h-3 text-emerald-400" />
                              ) : (
                                "Save"
                              )}
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Real-time Operation Logs Terminal */}
          <div className="glass-card rounded-2xl p-4 border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
              <Terminal className="w-4 h-4 text-emerald-400" />
              <span>Engine Status & Network Discovery Logs</span>
            </div>
            <div className="bg-slate-950 p-3 rounded-xl font-mono text-[11px] text-slate-300 max-h-36 overflow-y-auto space-y-1">
              {logs.map((log, i) => (
                <div key={i} className="leading-relaxed">
                  {log.includes("Discovered") || log.includes("Found") ? (
                    <span className="text-emerald-400 font-semibold">{log}</span>
                  ) : log.includes("Error") ? (
                    <span className="text-rose-400">{log}</span>
                  ) : (
                    log
                  )}
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {/* TAB 2: BULK CSV / EXCEL UPLOADER */}
      {activeTab === "csv_import" && (
        <div className="space-y-6">
          <div className="glass-card rounded-2xl p-6 border border-slate-800 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
              <div>
                <h2 className="text-base font-bold text-white flex items-center gap-2">
                  <FileSpreadsheet className="w-5 h-5 text-emerald-400" />
                  Bulk Lead CSV & Excel Uploader
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  Import lead lists downloaded from Justdial, IndiaMART, TradeIndia, or Google Maps scrapers directly into CRM.
                </p>
              </div>

              <button
                onClick={downloadSampleCsv}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-700 transition-all"
              >
                <Download className="w-3.5 h-3.5 text-indigo-400" />
                Download Sample CSV
              </button>
            </div>

            {/* Drag and Drop Zone */}
            <div className="border-2 border-dashed border-slate-700/80 hover:border-indigo-500/80 rounded-2xl p-8 text-center transition-all bg-slate-950/40">
              <FileUp className="w-10 h-10 text-indigo-400 mx-auto mb-3" />
              <p className="text-sm font-bold text-white">Select or drop your Leads CSV file</p>
              <p className="text-xs text-slate-400 mt-1">
                Auto-detects: Business Name, Phone, City, Category, Website, and Address columns.
              </p>

              <label className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-xs cursor-pointer shadow-lg shadow-indigo-600/30 transition-all">
                <Upload className="w-4 h-4" />
                Choose CSV File
                <input
                  type="file"
                  accept=".csv"
                  onChange={handleCsvFileUpload}
                  className="hidden"
                />
              </label>

              {csvFile && (
                <div className="mt-3 text-xs text-emerald-400 font-semibold flex items-center justify-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  Selected: {csvFile.name} ({(csvFile.size / 1024).toFixed(1)} KB)
                </div>
              )}
            </div>

            {/* Parsed Leads Preview Table */}
            {csvParsedLeads.length > 0 && (
              <div className="space-y-4 pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white">
                    Preview: {csvParsedLeads.length} leads extracted from file
                  </span>

                  <button
                    onClick={handleBulkCsvImport}
                    disabled={csvImportLoading}
                    className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white font-bold rounded-xl text-xs flex items-center gap-2 shadow-lg shadow-emerald-600/30 transition-all"
                  >
                    {csvImportLoading ? (
                      <>
                        <RotateCw className="w-3.5 h-3.5 animate-spin" />
                        Importing to CRM...
                      </>
                    ) : (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Import All {csvParsedLeads.length} Leads to CRM
                      </>
                    )}
                  </button>
                </div>

                {/* Import Result Notification */}
                {csvImportResult && (
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-300 flex items-center justify-between">
                    <div>
                      🎉 <strong>Import Completed!</strong> {csvImportResult.importedCount} new leads inserted. ({csvImportResult.skippedCount} duplicates filtered out).
                    </div>
                    <Link
                      href="/leads"
                      className="px-3 py-1 rounded-lg bg-emerald-600 text-white font-bold hover:bg-emerald-500"
                    >
                      View CRM Leads &rarr;
                    </Link>
                  </div>
                )}

                <div className="max-h-72 overflow-y-auto rounded-xl border border-slate-800">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-900 text-slate-400 font-semibold sticky top-0">
                      <tr>
                        <th className="py-2.5 px-3">Business Name</th>
                        <th className="py-2.5 px-3">Phone</th>
                        <th className="py-2.5 px-3">City</th>
                        <th className="py-2.5 px-3">Category</th>
                        <th className="py-2.5 px-3">Website</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800">
                      {csvParsedLeads.slice(0, 50).map((l, idx) => (
                        <tr key={idx} className="hover:bg-slate-900/50">
                          <td className="py-2 px-3 font-semibold text-white">{l.businessName}</td>
                          <td className="py-2 px-3 font-mono text-slate-300">{l.phone || "—"}</td>
                          <td className="py-2 px-3 text-slate-300">{l.city || "—"}</td>
                          <td className="py-2 px-3 text-slate-400">{l.category || "—"}</td>
                          <td className="py-2 px-3 text-slate-400 truncate max-w-[150px]">{l.website || "No Website"}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* TAB 3: DIRECTORY SEARCH LINKS & 1-CLICK SCRAPING GUIDES */}
      {activeTab === "directory_links" && (
        <div className="space-y-6">
          <div className="glass-card rounded-2xl p-6 border border-slate-800 space-y-4">
            <div>
              <h2 className="text-base font-bold text-white flex items-center gap-2">
                <ExternalLink className="w-5 h-5 text-amber-400" />
                Live Public Directory & Google Maps Search Links
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Open live business directory searches for {city} in 1 click, copy leads, and import them seamlessly.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {/* Google Maps Search Card */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 font-bold text-xs">
                    Maps
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Google Local Maps Search</h3>
                    <p className="text-[11px] text-slate-400">Search offline businesses directly in {city}</p>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  Query: <code className="text-indigo-400">{category.replace("_", " ")} in {city}</code>
                </p>

                <a
                  href={`https://www.google.com/maps/search/${encodeURIComponent(
                    `${category.replace("_", " ")} in ${city}`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2 px-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Open in Google Maps
                </a>
              </div>

              {/* Justdial Search Card */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 font-bold text-xs">
                    JD
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Justdial Public Directory</h3>
                    <p className="text-[11px] text-slate-400">Direct directory listings with contact numbers</p>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  Location: <code className="text-amber-400">{city} - {category}</code>
                </p>

                <a
                  href={`https://www.justdial.com/${city}/${category.replace("_", "-")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2 px-3 rounded-lg bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Open in Justdial
                </a>
              </div>
            </div>

            {/* Free Scraper Extension Guide */}
            <div className="p-4 rounded-xl bg-indigo-950/20 border border-indigo-500/20 space-y-2 mt-4">
              <h4 className="text-xs font-bold text-indigo-300 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-indigo-400" />
                Pro-Tip: 1-Click Free Scraping Workflow
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                1. Install free Chrome extension <strong>&quot;Instant Data Scraper&quot;</strong> from the Chrome Web Store.<br />
                2. Open the Google Maps or Justdial link above.<br />
                3. Click Instant Data Scraper to extract 100+ business rows into a CSV file in 15 seconds.<br />
                4. Drag and drop that CSV into our <strong>&quot;Bulk CSV / Excel&quot;</strong> tab above — our system will auto-clean, deduplicate against existing leads, and save them into your CRM!
              </p>
            </div>
          </div>
        </div>
      )}

      {/* AI PITCH GENERATOR MODAL */}
      {pitchModalLead && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 w-full max-w-2xl rounded-2xl p-6 shadow-2xl space-y-5 animate-in fade-in duration-200">
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-indigo-400" />
                  <h3 className="text-base font-bold text-white">
                    AI Cold Outreach Pitch Generator
                  </h3>
                </div>
                <p className="text-xs text-slate-400 mt-0.5">
                  Target: <span className="text-white font-bold">{pitchModalLead.businessName}</span> ({pitchModalLead.city}) • Missing Website: {!pitchModalLead.hasWebsite ? "Yes 🔥" : "No"}
                </p>
              </div>

              <button
                onClick={() => setPitchModalLead(null)}
                className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Pitch Type & Tone Selector */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  Outreach Format
                </label>
                <select
                  value={pitchType}
                  onChange={(e) => {
                    const t = e.target.value as any;
                    setPitchType(t);
                    regeneratePitch(t, pitchTone);
                  }}
                  className="w-full px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-indigo-500"
                >
                  <option value="whatsapp">💬 WhatsApp Pitch (Hinglish)</option>
                  <option value="email">✉️ Cold Email Proposal</option>
                  <option value="audit">🔍 3-Point Digital Growth Audit</option>
                </select>
              </div>

              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  Persuasive Tone
                </label>
                <select
                  value={pitchTone}
                  onChange={(e) => {
                    const tone = e.target.value as any;
                    setPitchTone(tone);
                    regeneratePitch(pitchType, tone);
                  }}
                  className="w-full px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-indigo-500"
                >
                  <option value="urgent_pain">Urgent Pain (Losing Google leads)</option>
                  <option value="friendly_founder">Friendly Founder Intro</option>
                  <option value="social_proof">Bhumika Case Study Heavy</option>
                </select>
              </div>
            </div>

            {/* Pitch Content Box */}
            <div className="relative">
              {aiPitchLoading ? (
                <div className="h-56 rounded-xl bg-slate-950 p-4 flex flex-col items-center justify-center gap-2 border border-slate-800">
                  <RotateCw className="w-6 h-6 animate-spin text-indigo-400" />
                  <span className="text-xs text-slate-400">Crafting tailored pitch via Groq AI...</span>
                </div>
              ) : (
                <textarea
                  value={generatedPitch}
                  onChange={(e) => setGeneratedPitch(e.target.value)}
                  rows={9}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3.5 text-xs text-slate-200 font-sans leading-relaxed focus:outline-none focus:border-indigo-500"
                />
              )}
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-between pt-2">
              <button
                onClick={() => regeneratePitch()}
                disabled={aiPitchLoading}
                className="px-3 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 transition-all flex items-center gap-1.5"
              >
                <RotateCw className="w-3.5 h-3.5" />
                Regenerate
              </button>

              <div className="flex items-center gap-2">
                <button
                  onClick={copyPitch}
                  className="px-3.5 py-2 rounded-xl text-xs font-bold text-slate-200 bg-slate-800 hover:bg-slate-700 transition-all flex items-center gap-1.5"
                >
                  {pitchCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  {pitchCopied ? "Copied!" : "Copy Text"}
                </button>

                <button
                  onClick={sendWhatsAppWithPitch}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-600/30 transition-all flex items-center gap-1.5"
                >
                  <MessageCircle className="w-4 h-4" />
                  Open in WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
