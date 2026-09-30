"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Kanban,
  Plus,
  Clock,
  CheckCircle2,
  Calendar,
  IndianRupee,
  User,
  ArrowRight,
  ArrowLeft,
  Share2,
  AlertTriangle,
  X,
  Sparkles,
  ChevronRight,
  ExternalLink,
  Eye,
  Copy,
  Check,
  LayoutList,
  MessageCircle,
  Globe,
  Trash2,
  DollarSign,
  CheckSquare,
  Square,
  RotateCw,
  Phone,
  Layers,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { formatCurrency, formatDate } from "@/lib/utils";

const STAGES = [
  { key: "pending", label: "1. Kickoff / Intake", shortLabel: "Kickoff", color: "border-amber-500/40 bg-amber-500/10 text-amber-400" },
  { key: "designing", label: "2. UI / Designing", shortLabel: "Design", color: "border-purple-500/40 bg-purple-500/10 text-purple-400" },
  { key: "development", label: "3. Development", shortLabel: "Dev", color: "border-indigo-500/40 bg-indigo-500/10 text-indigo-400" },
  { key: "review", label: "4. Client Review", shortLabel: "Review", color: "border-pink-500/40 bg-pink-500/10 text-pink-400" },
  { key: "delivered", label: "5. Delivered & Live", shortLabel: "Delivered", color: "border-emerald-500/40 bg-emerald-500/10 text-emerald-400" }
];

const DEFAULT_CHECKLIST = [
  { id: "intake", label: "Logo, Photos & Business Details Received" },
  { id: "design", label: "UI Layout & Content Approved" },
  { id: "development", label: "Fast Jamstack Website Coded" },
  { id: "whatsapp", label: "1-Tap WhatsApp Booking & Google Map Setup" },
  { id: "payment", label: "Final Balance Collected & Domain Live" }
];

export default function ProductionPipelinePage() {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState<"list" | "kanban">("list"); // Default to simple list view for ease of use
  const [showAddModal, setShowAddModal] = useState(false);
  const [expandedChecklistId, setExpandedChecklistId] = useState<string | null>(null);
  const [copiedLink, setCopiedLink] = useState<string | null>(null);

  // New Project Form
  const [newProject, setNewProject] = useState({
    clientName: "",
    projectType: "Business Website + Local SEO",
    price: 9999,
    paidAmount: 5000,
    assignedTo: "Raja Singh Chauhan",
    clientPhone: "",
    liveUrl: "",
    deadline: "",
    status: "pending"
  });
  const [submitting, setSubmitting] = useState(false);

  // Edit Live URL Modal / Inline State
  const [editingUrlId, setEditingUrlId] = useState<string | null>(null);
  const [editingUrlValue, setEditingUrlValue] = useState("");

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/projects");
      const data = await res.json();
      if (data.success) {
        setProjects(data.data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // Update Project Stage
  const updateProjectStage = async (id: string, newStatus: string) => {
    try {
      setProjects((prev) =>
        prev.map((p) => (p.id === id ? { ...p, status: newStatus } : p))
      );
      await fetch("/api/projects", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: newStatus })
      });
      fetchProjects();
    } catch (err) {
      console.error(err);
    }
  };

  // Mark 100% Paid
  const handleMarkFullPaid = async (id: string, fullPrice: number) => {
    try {
      setProjects((prev) =>
        prev.map((p) => (p.id === id ? { ...p, paidAmount: fullPrice } : p))
      );
      await fetch("/api/projects", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, paidAmount: fullPrice })
      });
      fetchProjects();
    } catch (err) {
      console.error(err);
    }
  };

  // Delete Project
  const handleDeleteProject = async (id: string, name: string) => {
    if (!confirm(`Are you sure you want to remove project "${name}"?`)) return;
    try {
      await fetch(`/api/projects?id=${id}`, { method: "DELETE" });
      setProjects((prev) => prev.filter((p) => p.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  // Update Project Checklist & Live URL (stored in onboardingData JSON)
  const getParsedMeta = (project: any) => {
    try {
      if (project.onboardingData) {
        const parsed = JSON.parse(project.onboardingData);
        if (typeof parsed === "object") return parsed;
      }
    } catch (e) {
      // not json
    }
    return {
      clientPhone: "",
      liveUrl: "",
      checklist: { intake: false, design: false, development: false, whatsapp: false, payment: false }
    };
  };

  const toggleChecklistItem = async (project: any, itemId: string) => {
    const meta = getParsedMeta(project);
    const currentChecks = meta.checklist || {};
    const updatedChecks = { ...currentChecks, [itemId]: !currentChecks[itemId] };
    const updatedMeta = { ...meta, checklist: updatedChecks };

    // Optimistic update
    setProjects((prev) =>
      prev.map((p) =>
        p.id === project.id ? { ...p, onboardingData: JSON.stringify(updatedMeta) } : p
      )
    );

    try {
      await fetch("/api/projects", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: project.id, onboardingData: updatedMeta })
      });
    } catch (err) {
      console.error(err);
    }
  };

  const saveLiveUrl = async (projectId: string) => {
    const proj = projects.find((p) => p.id === projectId);
    if (!proj) return;
    const meta = getParsedMeta(proj);
    meta.liveUrl = editingUrlValue.trim();

    setProjects((prev) =>
      prev.map((p) =>
        p.id === projectId ? { ...p, onboardingData: JSON.stringify(meta) } : p
      )
    );
    setEditingUrlId(null);

    try {
      await fetch("/api/projects", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: projectId, onboardingData: meta })
      });
    } catch (err) {
      console.error(err);
    }
  };

  // Create Project
  const handleCreateProject = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const meta = {
        clientPhone: newProject.clientPhone,
        liveUrl: newProject.liveUrl,
        checklist: { intake: false, design: false, development: false, whatsapp: false, payment: false }
      };

      const res = await fetch("/api/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          clientName: newProject.clientName,
          projectType: newProject.projectType,
          price: newProject.price,
          paidAmount: newProject.paidAmount,
          assignedTo: newProject.assignedTo,
          deadline: newProject.deadline,
          status: newProject.status,
          onboardingData: meta
        })
      });

      const data = await res.json();
      if (data.success) {
        setShowAddModal(false);
        setNewProject({
          clientName: "",
          projectType: "Business Website + Local SEO",
          price: 9999,
          paidAmount: 5000,
          assignedTo: "Raja Singh Chauhan",
          clientPhone: "",
          liveUrl: "",
          deadline: "",
          status: "pending"
        });
        fetchProjects();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  // Smart WhatsApp Message Generator based on Stage
  const getWhatsAppMessageForStage = (p: any) => {
    const meta = getParsedMeta(p);
    const balanceDue = Math.max(0, p.price - p.paidAmount);
    const intakeUrl = `http://localhost:3000/onboard/${p.id}`;
    const liveSite = meta.liveUrl || "https://bhumikatourandtravels.world/";

    switch (p.status) {
      case "pending":
        return `Namaste ${p.clientName} ji! 🙏

Main Raja Singh Chauhan (Founder, O2O Digital Agency) se baat kar raha hoon.

Aapka website project successfully kickoff ho gaya hai! Website development shuru karne ke liye please is link par apni business details, logo, timings aur photos upload kar dijiye:
🔗 Client Intake Form: ${intakeUrl}

Agar koi sawal ho toh aap mujhe yahan WhatsApp par pooch sakte hain.
Dhanyawad!`;

      case "designing":
        return `Namaste ${p.clientName} ji! 🙏

Aapke business ke liye custom website ka UI design layout aur structure ready kiya ja raha hai.

Hamari team agle 24-48 ghante me aapko pehla interactive demo share karegi! 🚀

Raja Singh Chauhan • O2O Digital Agency`;

      case "development":
        return `Namaste ${p.clientName} ji! 🙏

Aapki website ki core Jamstack coding, ultra-fast mobile loading speed aur 1-tap WhatsApp booking button integrate ho raha hai.

Google Search Console Page 1 architecture lagai ja rahi hai taaki aapko direct client calls aayein! ⚡

Raja Singh Chauhan • O2O Digital Agency`;

      case "review":
        return `Namaste ${p.clientName} ji! 🙏

Aapka *Live Website Demo Preview* ready ho gaya hai! 🎉

🔗 Live Demo Link: ${liveSite}

Please ise apne mobile par open karke check kar lijiye aur agar koi chhota-mota text update ya change karwana ho toh batayein.

Dhanyawad,
Raja Singh Chauhan • +91 80009 07924`;

      case "delivered":
      default:
        return `Congratulations ${p.clientName} ji! 🎉

Aapki official website officially LIVE kar di gayi hai! 🌐
🔗 Live Site: ${liveSite}

📋 Contract Summary:
• Total Amount: ${formatCurrency(p.price)}
• Advance Paid: ${formatCurrency(p.paidAmount)}
• Pending Due Balance: ${formatCurrency(balanceDue)}

Aap bacha hua balance amount is UPI par transfer kar sakte hain:
📱 UPI ID: 80009079241@ybl (Raja Singh Chauhan)

Aapke saath kaam karke bahut accha laga! Kisi bhi technical support ke liye main hamesha available hoon. 🙏`;
    }
  };

  const openWhatsAppForProject = (p: any) => {
    const meta = getParsedMeta(p);
    const phone = meta.clientPhone ? meta.clientPhone.replace(/\D/g, "") : "";
    const text = encodeURIComponent(getWhatsAppMessageForStage(p));
    if (phone) {
      window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
    } else {
      window.open(`https://wa.me/?text=${text}`, "_blank");
    }
  };

  const copyIntakeLink = (id: string) => {
    const link = `http://localhost:3000/onboard/${id}`;
    navigator.clipboard.writeText(link);
    setCopiedLink(id);
    setTimeout(() => setCopiedLink(null), 2000);
  };

  // Financial summary
  const totalPipelineValue = projects.reduce((acc, p) => acc + (p.price || 0), 0);
  const totalCollected = projects.reduce((acc, p) => acc + (p.paidAmount || 0), 0);
  const totalPendingDue = Math.max(0, totalPipelineValue - totalCollected);

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-24">
      {/* Top Banner */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-gradient-to-r from-purple-950/40 via-indigo-950/20 to-slate-900 border border-purple-500/20 p-6 rounded-3xl">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-purple-400 text-xs font-bold uppercase tracking-wider">
            <Kanban className="w-4 h-4" /> Client Delivery & Production Engine
          </div>
          <h1 className="text-2xl font-black text-white">Production Pipeline</h1>
          <p className="text-xs text-slate-400 max-w-xl">
            Track active client deliveries, 1-tap WhatsApp status updates, launch checklists, and pending balance collections.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {/* View Toggle */}
          <div className="flex items-center bg-slate-900 border border-slate-800 p-1 rounded-xl">
            <button
              onClick={() => setViewMode("list")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                viewMode === "list"
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <LayoutList className="w-3.5 h-3.5" />
              Simple List
            </button>
            <button
              onClick={() => setViewMode("kanban")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                viewMode === "kanban"
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Kanban className="w-3.5 h-3.5" />
              Kanban Board
            </button>
          </div>

          <button
            onClick={() => setShowAddModal(true)}
            className="flex items-center gap-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold shadow-lg shadow-indigo-600/20 transition-all"
          >
            <Plus className="w-4 h-4" />
            <span>New Project</span>
          </button>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
        <div className="bg-[#111625] p-4 rounded-2xl border border-[#1E293B]">
          <span className="text-[11px] font-bold text-slate-400 uppercase">Active Projects</span>
          <p className="text-2xl font-black text-white mt-1">{projects.length}</p>
          <span className="text-[11px] text-indigo-400 font-medium">In Production Pipeline</span>
        </div>

        <div className="bg-[#111625] p-4 rounded-2xl border border-[#1E293B]">
          <span className="text-[11px] font-bold text-slate-400 uppercase">Total Contract Value</span>
          <p className="text-2xl font-black text-white mt-1">{formatCurrency(totalPipelineValue)}</p>
          <span className="text-[11px] text-slate-400 font-medium">Total Agreed Price</span>
        </div>

        <div className="bg-[#111625] p-4 rounded-2xl border border-emerald-500/20 bg-emerald-950/10">
          <span className="text-[11px] font-bold text-emerald-400 uppercase">Advance Collected</span>
          <p className="text-2xl font-black text-emerald-400 mt-1">{formatCurrency(totalCollected)}</p>
          <span className="text-[11px] text-emerald-300/80 font-medium">In Agency UPI / Bank</span>
        </div>

        <div className="bg-[#111625] p-4 rounded-2xl border border-amber-500/20 bg-amber-950/10">
          <span className="text-[11px] font-bold text-amber-400 uppercase">Pending Due Balance</span>
          <p className="text-2xl font-black text-amber-400 mt-1">{formatCurrency(totalPendingDue)}</p>
          <span className="text-[11px] text-amber-300/80 font-medium">To Collect on Delivery</span>
        </div>
      </div>

      {/* VIEW MODE 1: SIMPLE LIST VIEW (CLEAN, USER-FRIENDLY & EFFORTLESS) */}
      {viewMode === "list" && (
        <div className="space-y-4">
          {projects.length === 0 ? (
            <div className="glass-card rounded-2xl p-12 text-center border border-slate-800">
              <Kanban className="w-12 h-12 text-slate-600 mx-auto mb-3" />
              <p className="text-sm font-bold text-white">No Active Projects in Production</p>
              <p className="text-xs text-slate-400 mt-1">
                Click &quot;New Project&quot; above to add an onboarding client.
              </p>
            </div>
          ) : (
            projects.map((p) => {
              const meta = getParsedMeta(p);
              const balanceDue = Math.max(0, p.price - p.paidAmount);
              const isFullyPaid = balanceDue === 0;
              const currentStage = STAGES.find((s) => s.key === p.status) || STAGES[0];
              const checklistState = meta.checklist || {};
              const checkedCount = Object.values(checklistState).filter(Boolean).length;
              const isChecklistOpen = expandedChecklistId === p.id;

              return (
                <div
                  key={p.id}
                  className="bg-[#111625] border border-[#1E293B] hover:border-indigo-500/30 rounded-2xl p-5 space-y-4 transition-all shadow-lg"
                >
                  {/* Card Header & Main Details */}
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    {/* Left: Client Name & Package */}
                    <div className="space-y-1">
                      <div className="flex items-center gap-2.5">
                        <h3 className="text-base font-extrabold text-white tracking-tight">
                          {p.clientName}
                        </h3>
                        {isFullyPaid ? (
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                            100% Fully Paid 🎉
                          </span>
                        ) : (
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30">
                            Pending: {formatCurrency(balanceDue)}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-400 flex items-center gap-2">
                        <span>{p.projectType}</span>
                        {meta.clientPhone && (
                          <>
                            <span>•</span>
                            <span className="font-mono text-slate-300">📞 {meta.clientPhone}</span>
                          </>
                        )}
                        <span>•</span>
                        <span>Assigned: {p.assignedTo || "Raja"}</span>
                      </p>
                    </div>

                    {/* Middle: Stage Dropdown Selector */}
                    <div className="flex items-center gap-3">
                      <div className="text-right hidden sm:block">
                        <span className="text-[10px] text-slate-500 uppercase font-bold block">
                          Current Stage
                        </span>
                        <span className="text-xs text-slate-300 font-semibold">
                          {currentStage.label}
                        </span>
                      </div>

                      <select
                        value={p.status}
                        onChange={(e) => updateProjectStage(p.id, e.target.value)}
                        className={`px-3 py-2 rounded-xl text-xs font-bold border focus:outline-none bg-slate-900 ${currentStage.color}`}
                      >
                        {STAGES.map((s) => (
                          <option key={s.key} value={s.key} className="bg-slate-900 text-white">
                            {s.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Right: Payment Overview & Quick Actions */}
                    <div className="flex items-center gap-2">
                      {!isFullyPaid ? (
                        <button
                          onClick={() => handleMarkFullPaid(p.id, p.price)}
                          className="px-3 py-2 rounded-xl text-xs font-bold text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 transition-all flex items-center gap-1.5"
                          title="Click when client pays remaining balance"
                        >
                          <IndianRupee className="w-3.5 h-3.5" />
                          Mark Full Paid
                        </button>
                      ) : null}

                      {/* WhatsApp 1-Click Stage Message */}
                      <button
                        onClick={() => openWhatsAppForProject(p)}
                        className="px-3 py-2 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-md shadow-emerald-600/20 transition-all flex items-center gap-1.5"
                        title="Send Stage Status Update on WhatsApp"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        WhatsApp Client
                      </button>

                      {/* Delete button */}
                      <button
                        onClick={() => handleDeleteProject(p.id, p.clientName)}
                        className="p-2 rounded-xl text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 transition-colors"
                        title="Delete project"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Secondary Details Row (Financials, Live Link, Checklist Toggle) */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-3 border-t border-slate-800/80 text-xs">
                    {/* Financial Progress Bar */}
                    <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1.5">
                      <div className="flex justify-between text-[11px]">
                        <span className="text-slate-400">Payment Collected:</span>
                        <span className="font-bold text-white">
                          {formatCurrency(p.paidAmount)} / {formatCurrency(p.price)}
                        </span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-emerald-500 rounded-full transition-all"
                          style={{ width: `${Math.min(100, (p.paidAmount / p.price) * 100)}%` }}
                        />
                      </div>
                    </div>

                    {/* Live Website Demo Link */}
                    <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between gap-2">
                      <div className="truncate flex-1">
                        <span className="text-[10px] text-slate-500 uppercase font-bold block">
                          Live Demo URL
                        </span>
                        {editingUrlId === p.id ? (
                          <div className="flex items-center gap-1 mt-0.5">
                            <input
                              type="url"
                              value={editingUrlValue}
                              onChange={(e) => setEditingUrlValue(e.target.value)}
                              placeholder="https://client.netlify.app"
                              className="px-2 py-1 bg-slate-950 border border-slate-700 rounded text-xs text-white w-full focus:outline-none focus:border-indigo-500"
                            />
                            <button
                              onClick={() => saveLiveUrl(p.id)}
                              className="px-2 py-1 bg-indigo-600 text-white rounded text-[11px] font-bold"
                            >
                              Save
                            </button>
                          </div>
                        ) : meta.liveUrl ? (
                          <a
                            href={meta.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="text-xs text-indigo-400 hover:text-indigo-300 font-semibold truncate block mt-0.5 flex items-center gap-1"
                          >
                            <Globe className="w-3 h-3 flex-shrink-0" />
                            <span className="truncate">{meta.liveUrl}</span>
                          </a>
                        ) : (
                          <span className="text-[11px] text-slate-500 mt-0.5 block">
                            Not added yet
                          </span>
                        )}
                      </div>

                      {editingUrlId !== p.id && (
                        <button
                          onClick={() => {
                            setEditingUrlId(p.id);
                            setEditingUrlValue(meta.liveUrl || "");
                          }}
                          className="px-2 py-1 text-[11px] rounded bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium"
                        >
                          {meta.liveUrl ? "Edit" : "+ Add Link"}
                        </button>
                      )}
                    </div>

                    {/* Client Intake & Checklist Toggle */}
                    <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between gap-2">
                      <div>
                        <span className="text-[10px] text-slate-500 uppercase font-bold block">
                          Launch Checklist
                        </span>
                        <span className="text-xs font-bold text-white mt-0.5 block">
                          {checkedCount} / 5 Steps Done
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => copyIntakeLink(p.id)}
                          className="px-2 py-1 text-[11px] font-semibold rounded bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors flex items-center gap-1"
                          title="Copy Client Intake Form URL"
                        >
                          {copiedLink === p.id ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                          {copiedLink === p.id ? "Copied" : "Form Link"}
                        </button>

                        <button
                          onClick={() =>
                            setExpandedChecklistId(isChecklistOpen ? null : p.id)
                          }
                          className="p-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300"
                        >
                          {isChecklistOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Expandable 5-Step Delivery Checklist */}
                  {isChecklistOpen && (
                    <div className="pt-3 border-t border-slate-800/60 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-2.5 animate-in fade-in duration-150">
                      {DEFAULT_CHECKLIST.map((c) => {
                        const isChecked = !!checklistState[c.id];
                        return (
                          <div
                            key={c.id}
                            onClick={() => toggleChecklistItem(p, c.id)}
                            className={`p-2.5 rounded-xl border text-xs cursor-pointer select-none transition-all flex items-start gap-2 ${
                              isChecked
                                ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-300"
                                : "bg-slate-900/40 border-slate-800 text-slate-400 hover:border-slate-700"
                            }`}
                          >
                            {isChecked ? (
                              <CheckSquare className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                            ) : (
                              <Square className="w-4 h-4 text-slate-600 flex-shrink-0 mt-0.5" />
                            )}
                            <span className="text-[11px] leading-tight font-medium">
                              {c.label}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      )}

      {/* VIEW MODE 2: KANBAN COLUMNS VIEW (CLEANED UP & SPACIOUS) */}
      {viewMode === "kanban" && (
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-start overflow-x-auto pb-4">
          {STAGES.map((stage, stageIdx) => {
            const stageProjects = projects.filter((p) => p.status === stage.key);

            return (
              <div
                key={stage.key}
                className="bg-[#0D121F] border border-[#1E293B] rounded-2xl p-3.5 min-w-[260px] space-y-3 flex flex-col"
              >
                {/* Column Header */}
                <div className="flex items-center justify-between px-1 py-1">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-lg border ${stage.color}`}>
                    {stage.shortLabel}
                  </span>
                  <span className="text-xs font-bold text-slate-400 bg-slate-800 px-2 py-0.5 rounded-full">
                    {stageProjects.length}
                  </span>
                </div>

                {/* Cards List */}
                <div className="space-y-3">
                  {stageProjects.length === 0 ? (
                    <div className="p-6 text-center text-[11px] text-slate-500 border border-dashed border-slate-800 rounded-xl">
                      No projects here
                    </div>
                  ) : (
                    stageProjects.map((p) => {
                      const balanceDue = Math.max(0, p.price - p.paidAmount);
                      const isFullyPaid = balanceDue === 0;

                      return (
                        <div
                          key={p.id}
                          className="bg-[#141B2D] border border-[#1E293B] hover:border-indigo-500/40 rounded-xl p-3.5 space-y-3 transition-all shadow-md group"
                        >
                          <div className="space-y-1">
                            <h4 className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors">
                              {p.clientName}
                            </h4>
                            <p className="text-[11px] text-slate-400 leading-tight">
                              {p.projectType}
                            </p>
                          </div>

                          {/* Financials & Payment Progress */}
                          <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800/80 space-y-1 text-xs">
                            <div className="flex justify-between items-baseline">
                              <span className="text-[10px] text-slate-400">Paid / Total</span>
                              <span className="font-bold text-white">
                                {formatCurrency(p.paidAmount)} / <span className="text-slate-400">{formatCurrency(p.price)}</span>
                              </span>
                            </div>
                            <div className="flex justify-between items-center text-[10px] pt-1">
                              <span className={isFullyPaid ? "text-emerald-400 font-bold" : "text-amber-400 font-bold"}>
                                {isFullyPaid ? "Fully Paid" : `Due: ${formatCurrency(balanceDue)}`}
                              </span>
                              {!isFullyPaid && (
                                <button
                                  onClick={() => handleMarkFullPaid(p.id, p.price)}
                                  className="text-emerald-400 hover:underline font-semibold"
                                >
                                  Mark Paid
                                </button>
                              )}
                            </div>
                          </div>

                          {/* WhatsApp Client Update */}
                          <button
                            onClick={() => openWhatsAppForProject(p)}
                            className="w-full py-1.5 px-2 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 rounded-lg text-[11px] font-bold flex items-center justify-center gap-1.5 transition-all"
                          >
                            <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                            WhatsApp Update
                          </button>

                          {/* Stage Transition Controls */}
                          <div className="flex items-center justify-between pt-1 border-t border-slate-800">
                            {stageIdx > 0 ? (
                              <button
                                onClick={() => updateProjectStage(p.id, STAGES[stageIdx - 1].key)}
                                className="p-1 text-slate-400 hover:text-white rounded hover:bg-slate-800"
                                title="Move Back"
                              >
                                <ArrowLeft className="w-3.5 h-3.5" />
                              </button>
                            ) : <div />}

                            <span className="text-[10px] font-bold uppercase text-slate-500">
                              {stageIdx + 1}/5
                            </span>

                            {stageIdx < STAGES.length - 1 ? (
                              <button
                                onClick={() => updateProjectStage(p.id, STAGES[stageIdx + 1].key)}
                                className="flex items-center gap-1 px-2.5 py-1 bg-indigo-600/30 hover:bg-indigo-600/60 text-indigo-300 rounded text-[10px] font-semibold transition-colors"
                              >
                                <span>Next</span>
                                <ArrowRight className="w-3 h-3" />
                              </button>
                            ) : (
                              <span className="text-[10px] font-bold text-emerald-400 flex items-center gap-0.5">
                                <CheckCircle2 className="w-3 h-3" /> Live
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Add Project Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#111625] border border-[#1E293B] rounded-3xl max-w-lg w-full p-6 space-y-5 shadow-2xl relative">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div>
                <h3 className="text-base font-bold text-white">Kickoff New Client Project</h3>
                <p className="text-xs text-slate-400 mt-0.5">Add an active project to the delivery pipeline</p>
              </div>
              <button
                onClick={() => setShowAddModal(false)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateProject} className="space-y-4 text-xs">
              <div>
                <label className="text-slate-300 font-bold block mb-1">Client / Business Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Royal Heritage Resort"
                  value={newProject.clientName}
                  onChange={(e) => setNewProject({ ...newProject, clientName: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-slate-300 font-bold block mb-1">Client Phone / WhatsApp</label>
                  <input
                    type="tel"
                    placeholder="e.g. 9829012345"
                    value={newProject.clientPhone}
                    onChange={(e) => setNewProject({ ...newProject, clientPhone: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="text-slate-300 font-bold block mb-1">Package Scope</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 5-Page Jamstack Website"
                    value={newProject.projectType}
                    onChange={(e) => setNewProject({ ...newProject, projectType: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-slate-300 font-bold block mb-1">Total Agreed Price (₹) *</label>
                  <input
                    type="number"
                    required
                    value={newProject.price}
                    onChange={(e) => setNewProject({ ...newProject, price: parseFloat(e.target.value) || 0 })}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-white font-bold focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="text-emerald-400 font-bold block mb-1">Advance Received (₹)</label>
                  <input
                    type="number"
                    required
                    value={newProject.paidAmount}
                    onChange={(e) => setNewProject({ ...newProject, paidAmount: parseFloat(e.target.value) || 0 })}
                    className="w-full px-3 py-2 bg-slate-900 border border-emerald-500/40 rounded-xl text-emerald-400 font-bold focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-slate-300 font-bold block mb-1">Initial Stage</label>
                  <select
                    value={newProject.status}
                    onChange={(e) => setNewProject({ ...newProject, status: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-indigo-500"
                  >
                    <option value="pending">1. Kickoff / Intake</option>
                    <option value="designing">2. UI / Designing</option>
                    <option value="development">3. Development</option>
                    <option value="review">4. Client Review</option>
                    <option value="delivered">5. Delivered & Live</option>
                  </select>
                </div>
                <div>
                  <label className="text-slate-300 font-bold block mb-1">Assigned Lead</label>
                  <input
                    type="text"
                    value={newProject.assignedTo}
                    onChange={(e) => setNewProject({ ...newProject, assignedTo: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <div className="pt-3 flex items-center justify-end gap-3 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 font-semibold text-slate-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all shadow-md shadow-indigo-600/20"
                >
                  {submitting ? "Starting..." : "Start Project"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
