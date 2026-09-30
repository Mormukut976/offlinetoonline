"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Users,
  Search,
  Filter,
  Plus,
  MessageSquare,
  ExternalLink,
  ChevronRight,
  Phone,
  MapPin,
  Sparkles,
  Download,
  Upload,
  SearchCode
} from "lucide-react";
import { STATES, ALL_CITIES } from "@/data/cities";
import { CATEGORIES } from "@/data/categories";
import { WHATSAPP_TEMPLATES } from "@/data/templates/whatsapp";

interface Lead {
  id: string;
  businessName: string;
  ownerName: string | null;
  phone: string;
  email: string | null;
  website: string | null;
  category: string;
  city: string;
  state: string;
  address: string | null;
  rating: number | null;
  status: string;
  notes: string | null;
  createdAt: string;
}

export default function LeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedCity, setSelectedCity] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");

  // Add Lead Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newLead, setNewLead] = useState({
    businessName: "",
    ownerName: "",
    phone: "",
    email: "",
    website: "",
    category: "tour_travel",
    city: "Jaipur",
    address: "",
    notes: ""
  });

  const fetchLeads = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (search) params.append("search", search);
      if (selectedCity !== "all") params.append("city", selectedCity);
      if (selectedCategory !== "all") params.append("category", selectedCategory);
      if (selectedStatus !== "all") params.append("status", selectedStatus);

      const res = await fetch(`/api/leads?${params.toString()}`);
      const data = await res.json();
      if (data.success) {
        setLeads(data.data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, [search, selectedCity, selectedCategory, selectedStatus]);

  const handleCreateLead = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newLead)
      });
      const data = await res.json();
      if (data.success) {
        setIsModalOpen(false);
        setNewLead({
          businessName: "",
          ownerName: "",
          phone: "",
          email: "",
          website: "",
          category: "tour_travel",
          city: "Jaipur",
          address: "",
          notes: ""
        });
        fetchLeads();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "converted":
        return <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">Converted 🎉</span>;
      case "interested":
        return <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30">Interested 🔥</span>;
      case "contacted":
        return <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-blue-500/10 text-blue-400 border border-blue-500/30">Contacted</span>;
      case "rejected":
        return <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-rose-500/10 text-rose-400 border border-rose-500/30">Lost</span>;
      default:
        return <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-indigo-500/10 text-indigo-400 border border-indigo-500/30">New Lead</span>;
    }
  };

  const exportCSV = () => {
    const headers = ["Business Name,Owner,Phone,Email,Website,Category,City,Status,Address"];
    const rows = leads.map(l => 
      `"${l.businessName}","${l.ownerName || ""}","${l.phone}","${l.email || ""}","${l.website || ""}","${l.category}","${l.city}","${l.status}","${l.address || ""}"`
    );
    const blob = new Blob([headers.concat(rows).join("\n")], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `leads_export_${new Date().toISOString().slice(0,10)}.csv`;
    a.click();
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-12">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight flex items-center gap-2.5">
            <Users className="w-6 h-6 text-indigo-400" />
            Leads Database & CRM
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Tracking {leads.length} local business prospects across 28 Indian States & 100+ Commercial Hubs
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <Link
            href="/scripts"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all"
          >
            <SearchCode className="w-4 h-4 text-indigo-400" />
            Scan / Import
          </Link>

          <button
            onClick={exportCSV}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all"
          >
            <Download className="w-4 h-4 text-emerald-400" />
            Export CSV
          </button>

          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-600/25 transition-all"
          >
            <Plus className="w-4 h-4" />
            Add New Lead
          </button>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="glass-card rounded-2xl p-4 border border-slate-800 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-3 text-slate-500" />
          <input
            type="text"
            placeholder="Search business, owner, phone..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-slate-900 border border-slate-700/80 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
          />
        </div>

        <select
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          className="w-full px-3 py-2 bg-slate-900 border border-slate-700/80 rounded-xl text-xs text-white focus:outline-none focus:border-indigo-500"
        >
          <option value="all">All Cities (Pan-India)</option>
          {Object.entries(STATES).map(([stKey, stData]) => (
            <optgroup key={stKey} label={stData.name}>
              {stData.cities.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </optgroup>
          ))}
        </select>

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full px-3 py-2 bg-slate-900 border border-slate-700/80 rounded-xl text-xs text-white focus:outline-none focus:border-indigo-500"
        >
          <option value="all">All Business Categories</option>
          {CATEGORIES.map((c) => (
            <option key={c.id} value={c.id}>
              {c.icon} {c.name}
            </option>
          ))}
        </select>

        <select
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
          className="w-full px-3 py-2 bg-slate-900 border border-slate-700/80 rounded-xl text-xs text-white focus:outline-none focus:border-indigo-500"
        >
          <option value="all">All Statuses</option>
          <option value="new">New Lead</option>
          <option value="contacted">Contacted</option>
          <option value="interested">Interested</option>
          <option value="converted">Converted (Client)</option>
          <option value="rejected">Lost</option>
        </select>
      </div>

      {/* Table Card */}
      <div className="glass-card rounded-2xl border border-slate-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#0B0F19]/90 text-slate-400 font-semibold border-b border-slate-800">
              <tr>
                <th className="py-3 px-4">Business & Owner</th>
                <th className="py-3 px-4">Category</th>
                <th className="py-3 px-4">Contact Details</th>
                <th className="py-3 px-4">Location</th>
                <th className="py-3 px-4">Website</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {loading ? (
                <tr>
                  <td colSpan={7} className="py-12 text-center text-slate-500">
                    Loading CRM database records...
                  </td>
                </tr>
              ) : leads.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-12 text-center text-slate-500">
                    No leads found matching current filters. Use &quot;Scan / Import&quot; to discover fresh prospects.
                  </td>
                </tr>
              ) : (
                leads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-slate-900/30 transition-colors">
                    <td className="py-3.5 px-4">
                      <Link
                        href={`/leads/${lead.id}`}
                        className="font-bold text-white hover:text-indigo-400 transition-colors block text-[13px]"
                      >
                        {lead.businessName}
                      </Link>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        {lead.ownerName || "Owner unassigned"}
                      </p>
                    </td>
                    <td className="py-3.5 px-4">
                      <span className="capitalize text-slate-300 font-medium">
                        {lead.category.replace("_", " ")}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 font-mono text-slate-300">
                      <div>{lead.phone}</div>
                      {lead.email && <div className="text-[10px] text-slate-500 font-sans">{lead.email}</div>}
                    </td>
                    <td className="py-3.5 px-4">
                      <span className="inline-flex items-center gap-1 text-slate-300">
                        <MapPin className="w-3 h-3 text-slate-500" />
                        {lead.city}, {lead.state}
                      </span>
                      <p className="text-[11px] text-slate-500 truncate max-w-[180px]">
                        {lead.address || "Local Commercial Area"}
                      </p>
                    </td>
                    <td className="py-3.5 px-4">
                      {lead.website ? (
                        <a
                          href={lead.website}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-medium"
                        >
                          <ExternalLink className="w-3 h-3" /> Live Site
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-rose-500/10 text-rose-400 border border-rose-500/20">
                          ❌ No Website (HOT)
                        </span>
                      )}
                    </td>
                    <td className="py-3.5 px-4">
                      {getStatusBadge(lead.status)}
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <a
                          href={`https://wa.me/${lead.phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                            WHATSAPP_TEMPLATES[0].template({
                              ownerName: lead.ownerName || undefined,
                              businessName: lead.businessName,
                              city: lead.city,
                              category: lead.category
                            })
                          )}`}
                          target="_blank"
                          rel="noreferrer"
                          title="Open WhatsApp Pitch"
                          className="p-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 transition-colors"
                        >
                          <MessageSquare className="w-4 h-4" />
                        </a>
                        <Link
                          href={`/leads/${lead.id}`}
                          className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Lead Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0B0F19] border border-slate-800 rounded-2xl w-full max-w-lg p-6 space-y-5 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <h3 className="font-bold text-white text-base">Add New Business Lead</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-white text-sm">
                ✕
              </button>
            </div>

            <form onSubmit={handleCreateLead} className="space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-slate-400 font-medium block mb-1">Business Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Bandra Travel Hub"
                    value={newLead.businessName}
                    onChange={(e) => setNewLead({ ...newLead, businessName: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="text-slate-400 font-medium block mb-1">Owner Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Ramesh Kumar"
                    value={newLead.ownerName}
                    onChange={(e) => setNewLead({ ...newLead, ownerName: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-slate-400 font-medium block mb-1">Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98201 12345"
                    value={newLead.phone}
                    onChange={(e) => setNewLead({ ...newLead, phone: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="text-slate-400 font-medium block mb-1">Existing Website (If any)</label>
                  <input
                    type="url"
                    placeholder="https://..."
                    value={newLead.website}
                    onChange={(e) => setNewLead({ ...newLead, website: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-slate-400 font-medium block mb-1">Category</label>
                  <select
                    value={newLead.category}
                    onChange={(e) => setNewLead({ ...newLead, category: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-indigo-500"
                  >
                    {CATEGORIES.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.icon} {c.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-slate-400 font-medium block mb-1">City</label>
                  <select
                    value={newLead.city}
                    onChange={(e) => setNewLead({ ...newLead, city: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-indigo-500"
                  >
                    {ALL_CITIES.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="text-slate-400 font-medium block mb-1">Address / Commercial Locality</label>
                <input
                  type="text"
                  placeholder="e.g. BKC Commercial Hub, Bandra West"
                  value={newLead.address}
                  onChange={(e) => setNewLead({ ...newLead, address: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold shadow-lg shadow-indigo-600/30"
                >
                  Save Lead
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
