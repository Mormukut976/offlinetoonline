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
  Check
} from "lucide-react";
import { formatCurrency, formatDate } from "@/lib/utils";

const STAGES = [
  { key: "pending", label: "Kickoff / Pending", color: "border-amber-500/40 bg-amber-500/10 text-amber-400" },
  { key: "designing", label: "UI / Designing", color: "border-purple-500/40 bg-purple-500/10 text-purple-400" },
  { key: "development", label: "Development", color: "border-indigo-500/40 bg-indigo-500/10 text-indigo-400" },
  { key: "review", label: "Client Review", color: "border-pink-500/40 bg-pink-500/10 text-pink-400" },
  { key: "delivered", label: "Delivered & Live", color: "border-emerald-500/40 bg-emerald-500/10 text-emerald-400" }
];

export default function ProductionPipelinePage() {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newProject, setNewProject] = useState({
    clientName: "",
    projectType: "Business Website (Standard)",
    price: 9999,
    paidAmount: 5000,
    assignedTo: "Raja Singh Chauhan",
    deadline: "",
    status: "pending"
  });
  const [submitting, setSubmitting] = useState(false);

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

  const handleCreateProject = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setSubmitting(true);
      const res = await fetch("/api/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProject)
      });
      const data = await res.json();
      if (data.success) {
        setShowAddModal(false);
        setNewProject({
          clientName: "",
          projectType: "Business Website (Standard)",
          price: 9999,
          paidAmount: 5000,
          assignedTo: "Raja Singh Chauhan",
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

  const updateProjectStage = async (id: string, newStatus: string) => {
    try {
      // Optimistic update
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

  const markFullPayment = async (id: string, fullPrice: number) => {
    try {
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

  // Financial summary calculations
  const totalPipelineValue = projects.reduce((acc, p) => acc + (p.price || 0), 0);
  const totalCollected = projects.reduce((acc, p) => acc + (p.paidAmount || 0), 0);
  const totalPendingDue = Math.max(0, totalPipelineValue - totalCollected);

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-20">
      {/* Top Banner */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-gradient-to-r from-purple-950/40 via-indigo-950/20 to-slate-900 border border-purple-500/20 p-6 rounded-3xl">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-purple-400 text-xs font-bold uppercase tracking-wider">
            <Kanban className="w-4 h-4" /> Agency Operations & Delivery Engine
          </div>
          <h1 className="text-2xl font-black text-white">Production Pipeline</h1>
          <p className="text-xs text-slate-400 max-w-xl">
            Track active client deliveries from kickoff to live deployment. Monitor milestones, deadlines, and pending balance collections.
          </p>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center gap-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold shadow-lg shadow-indigo-600/20 transition-all hover:scale-102"
        >
          <Plus className="w-4 h-4" />
          <span>New Project</span>
        </button>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="bg-[#111625] p-4 rounded-2xl border border-[#1E293B]">
          <span className="text-[11px] font-bold text-slate-400 uppercase">Active Projects</span>
          <p className="text-2xl font-black text-white mt-1">{projects.length}</p>
          <span className="text-[11px] text-indigo-400">All Stages</span>
        </div>

        <div className="bg-[#111625] p-4 rounded-2xl border border-[#1E293B]">
          <span className="text-[11px] font-bold text-slate-400 uppercase">Total Pipeline</span>
          <p className="text-2xl font-black text-white mt-1">{formatCurrency(totalPipelineValue)}</p>
          <span className="text-[11px] text-slate-400">Contract Value</span>
        </div>

        <div className="bg-[#111625] p-4 rounded-2xl border border-emerald-500/20 bg-emerald-950/10">
          <span className="text-[11px] font-bold text-emerald-400 uppercase">Advance Collected</span>
          <p className="text-2xl font-black text-emerald-400 mt-1">{formatCurrency(totalCollected)}</p>
          <span className="text-[11px] text-emerald-300/80">In Agency Bank/UPI</span>
        </div>

        <div className="bg-[#111625] p-4 rounded-2xl border border-amber-500/20 bg-amber-950/10">
          <span className="text-[11px] font-bold text-amber-400 uppercase">Pending Due Balance</span>
          <p className="text-2xl font-black text-amber-400 mt-1">{formatCurrency(totalPendingDue)}</p>
          <span className="text-[11px] text-amber-300/80">Upon Final Delivery</span>
        </div>
      </div>

      {/* 5-Column Kanban Board */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-start overflow-x-auto pb-4">
        {STAGES.map((stage, stageIdx) => {
          const stageProjects = projects.filter((p) => p.status === stage.key);

          return (
            <div
              key={stage.key}
              className="bg-[#0D121F] border border-[#1E293B] rounded-2xl p-3 min-w-[260px] space-y-3 flex flex-col"
            >
              {/* Column Header */}
              <div className="flex items-center justify-between px-2 py-1">
                <div className="flex items-center gap-2">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-lg border ${stage.color}`}>
                    {stage.label}
                  </span>
                </div>
                <span className="text-xs font-bold text-slate-400 bg-slate-800 px-2 py-0.5 rounded-full">
                  {stageProjects.length}
                </span>
              </div>

              {/* Cards List */}
              <div className="space-y-3">
                {stageProjects.length === 0 ? (
                  <div className="p-6 text-center text-[11px] text-slate-500 border border-dashed border-slate-800 rounded-xl">
                    No projects in this stage
                  </div>
                ) : (
                  stageProjects.map((p) => {
                    const balanceDue = Math.max(0, p.price - p.paidAmount);
                    const isFullyPaid = balanceDue === 0;

                    return (
                      <div
                        key={p.id}
                        className="bg-[#141B2D] border border-[#1E293B] hover:border-indigo-500/40 rounded-xl p-4 space-y-3 transition-all shadow-md group"
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
                        <div className="p-2.5 rounded-lg bg-slate-900/70 border border-slate-800/80 space-y-1.5 text-xs">
                          <div className="flex justify-between items-baseline">
                            <span className="text-[10px] text-slate-400">Total / Paid</span>
                            <span className="font-bold text-white">
                              {formatCurrency(p.paidAmount)} / <span className="text-slate-400">{formatCurrency(p.price)}</span>
                            </span>
                          </div>

                          <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                            <div
                              className={`h-full rounded-full ${
                                isFullyPaid ? "bg-emerald-500" : "bg-indigo-500"
                              }`}
                              style={{ width: `${Math.min(100, Math.round((p.paidAmount / p.price) * 100))}%` }}
                            />
                          </div>

                          <div className="flex justify-between items-center text-[10px]">
                            <span className={isFullyPaid ? "text-emerald-400 font-bold" : "text-amber-400"}>
                              {isFullyPaid ? "Fully Paid" : `Due: ${formatCurrency(balanceDue)}`}
                            </span>
                            {!isFullyPaid && (
                              <button
                                onClick={() => markFullPayment(p.id, p.price)}
                                className="text-[9px] font-semibold text-emerald-400 hover:text-emerald-300 underline"
                              >
                                Mark 100% Paid
                              </button>
                            )}
                          </div>
                        </div>

                        {/* Meta info */}
                        <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                          <div className="flex items-center gap-1">
                            <User className="w-3 h-3 text-slate-500" />
                            <span>{p.assignedTo || "Unassigned"}</span>
                          </div>
                          {p.deadline && (
                            <div className="flex items-center gap-1 text-slate-400">
                              <Calendar className="w-3 h-3 text-slate-500" />
                              <span>{formatDate(p.deadline)}</span>
                            </div>
                          )}
                        </div>

                        {/* Onboarding Actions */}
                        <div className="pt-2 border-t border-slate-800 flex items-center justify-between gap-2">
                          <Link
                            href={`/onboard/${p.id}`}
                            target="_blank"
                            className="flex items-center gap-1 text-[11px] font-semibold text-indigo-400 hover:text-indigo-300"
                          >
                            <ExternalLink className="w-3 h-3" />
                            <span>Client Intake Form</span>
                          </Link>

                          <a
                            href={`https://wa.me/?text=${encodeURIComponent(`Namaste! 🙏 Welcome to O2O Digital Agency. Apne website project (${p.projectType}) ko officially kickoff karne ke liye kripya yeh 2-minute onboarding form fill karein:\n${typeof window !== 'undefined' ? window.location.origin : ''}/onboard/${p.id}\n\n- Raja Singh Chauhan (+91 80009 07924)`)}`}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-lg bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 transition-colors"
                          >
                            <Share2 className="w-3 h-3" />
                            <span>WhatsApp Link</span>
                          </a>
                        </div>

                        {/* Stage Controls */}
                        <div className="flex items-center justify-between gap-1 pt-2 border-t border-slate-800">
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
                            Stage {stageIdx + 1}/5
                          </span>

                          {stageIdx < STAGES.length - 1 ? (
                            <button
                              onClick={() => updateProjectStage(p.id, STAGES[stageIdx + 1].key)}
                              className="flex items-center gap-1 px-2 py-1 bg-indigo-600/30 hover:bg-indigo-600/60 text-indigo-300 rounded text-[10px] font-semibold transition-colors"
                              title="Advance to Next Stage"
                            >
                              <span>Next</span>
                              <ArrowRight className="w-3 h-3" />
                            </button>
                          ) : (
                            <span className="text-[10px] font-bold text-emerald-400 flex items-center gap-0.5">
                              <CheckCircle2 className="w-3 h-3" /> Done
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

      {/* Add Project Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#111625] border border-[#1E293B] rounded-3xl max-w-lg w-full p-6 space-y-6 shadow-2xl relative">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-white">Kickoff New Project</h3>
                <p className="text-xs text-slate-400">Add an active project to the agency delivery pipeline</p>
              </div>
              <button
                onClick={() => setShowAddModal(false)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateProject} className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Client / Business Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Royal Heritage Resort"
                  value={newProject.clientName}
                  onChange={(e) => setNewProject({ ...newProject, clientName: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Project Scope / Package</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 7-Page Jamstack Website + Local SEO"
                  value={newProject.projectType}
                  onChange={(e) => setNewProject({ ...newProject, projectType: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">Total Contract Price (₹)</label>
                  <input
                    type="number"
                    required
                    value={newProject.price}
                    onChange={(e) => setNewProject({ ...newProject, price: parseFloat(e.target.value) || 0 })}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white font-bold focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-emerald-400 block mb-1">Advance Paid (₹)</label>
                  <input
                    type="number"
                    required
                    value={newProject.paidAmount}
                    onChange={(e) => setNewProject({ ...newProject, paidAmount: parseFloat(e.target.value) || 0 })}
                    className="w-full px-3 py-2 bg-slate-900 border border-emerald-500/40 rounded-xl text-xs text-emerald-400 font-bold focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">Assigned Lead</label>
                  <input
                    type="text"
                    value={newProject.assignedTo}
                    onChange={(e) => setNewProject({ ...newProject, assignedTo: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">Target Deadline</label>
                  <input
                    type="date"
                    value={newProject.deadline}
                    onChange={(e) => setNewProject({ ...newProject, deadline: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Initial Stage</label>
                <select
                  value={newProject.status}
                  onChange={(e) => setNewProject({ ...newProject, status: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-indigo-500"
                >
                  <option value="pending">Kickoff / Pending</option>
                  <option value="designing">UI / Designing</option>
                  <option value="development">Development</option>
                  <option value="review">Client Review</option>
                  <option value="delivered">Delivered & Live</option>
                </select>
              </div>

              <div className="pt-4 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-xl transition-all shadow-md shadow-indigo-600/20"
                >
                  {submitting ? "Creating..." : "Start Project"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
