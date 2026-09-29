"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  PhoneCall,
  Flame,
  Calendar,
  Clock,
  CheckCircle2,
  Share2,
  ArrowRight,
  TrendingUp,
  FileText,
  AlertCircle,
  Sparkles,
  HelpCircle,
  MessageSquare,
  Check,
  Send
} from "lucide-react";
import { formatDate } from "@/lib/utils";

// 4-Step Industry Drip Sequences tailored to Indian offline businesses
const DRIP_STAGES: Record<number, { title: string; subtitle: string; getPitch: (lead: any) => string }> = {
  1: {
    title: "Stage 1: Value Hook & Case Study Proof",
    subtitle: "Send Bhumika Tour & Travels Google Page 1 ranking proof and offer a free demo mockup.",
    getPitch: (lead: any) => {
      const city = lead.city || "Jaipur";
      return `Namaste ${lead.ownerName ? lead.ownerName + " ji" : "ji"}! 🙏

Main Raja Singh Chauhan (Founder, O2O Digital Agency, Jaipur) se bol raha hoon.

Maine dekha aapka business *${lead.businessName}* ${lead.address?.split(",")[0] || city} me kafi reputed hai, lekin aapki official modern website nahi hai jisse daily high-ticket customer calls miss ho rahi hain.

Humne *Bhumika Tour & Travels* ko Google Page 1 (Rank 6.7) par rank karwaya hai (Live: https://bhumikatourandtravels.world/).

Kya main aapke business ke liye ek *Free Live Demo Website* WhatsApp par share karu?
- Raja Singh Chauhan (+91 80009 07924)`;
    }
  },
  2: {
    title: "Stage 2: Competitor Fear & Market Share Loss",
    subtitle: "Highlight that local competitors on Google Maps are capturing customer calls.",
    getPitch: (lead: any) => {
      const city = lead.city || "Jaipur";
      return `Namaste! 🙏 Raja Singh Chauhan from O2O Digital again.

Quick market update for *${lead.businessName}*: ${city} me lagbhag 80% log ab services search karke direct Google se call karte hain. Aapke competitor Google Search par top rank kar rahe hain.

Hum aapko 5 se 7 din ke andar Google Page 1 ready website bana kar dete hain jisme ZERO monthly server bills lagte hain.

Aap kab free hain ek 5-minute WhatsApp call ke liye?
- Raja Singh Chauhan (+91 80009 07924)`;
    }
  },
  3: {
    title: "Stage 3: Special Incentive & Bonus Standee",
    subtitle: "Offer free Google Review QR Standee & 15% discount for this week booking.",
    getPitch: (lead: any) => {
      return `Namaste! 🙏

Is hafte humne *${lead.businessName}* ke package par ek Special Launch Offer rakha hai:

✨ Website ke sath:
• 15% Special Discount on Standard Package
• Physical Google Reviews QR Standee for your shop counter (FREE)
• Google Business Profile Verification & Optimization

Offer is valid only till this Saturday. Kya main final quotation send karu?
- Raja Singh Chauhan (O2O Digital Agency)`;
    }
  },
  4: {
    title: "Stage 4: Polite Breakup (Highest Response Rate)",
    subtitle: "Politely declare you are archiving their demo draft. Triggers urgent FOMO.",
    getPitch: (lead: any) => {
      return `Namaste! 🙏

Lagta hai abhi aapke business (*${lead.businessName}*) ke liye website banana priority nahi hai, which is totally fine!

Hum aapka prepared demo website draft abhi archive kar rahe hain taaki humari team next project par focus kar sake.

Agar future me aap apne business ko Google Page 1 par rank karwana chahein, to aap is number par anytime message kar sakte hain.

Wishing you grand business success!
- Raja Singh Chauhan
Founder & CEO, O2O Digital Agency`;
    }
  }
};

export default function FollowUpsWarRoom() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"today" | "upcoming">("today");

  const fetchFollowUps = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/follow-ups");
      const json = await res.json();
      if (json.success) {
        setData(json);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFollowUps();
  }, []);

  const handleAction = async (leadId: string, actionType: string, days: number, newStatus?: string) => {
    try {
      setActionLoading(leadId);
      const res = await fetch("/api/follow-ups", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          leadId,
          actionType,
          nextFollowUpDays: days,
          newStatus
        })
      });
      const json = await res.json();
      if (json.success) {
        fetchFollowUps();
      }
    } catch (e) {
      console.error(e);
    } finally {
      setActionLoading(null);
    }
  };

  const leadsToShow = activeTab === "today" ? (data?.dueToday || []) : (data?.upcoming || []);

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-20">
      {/* Top Banner */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-gradient-to-r from-rose-950/40 via-amber-950/20 to-slate-900 border border-rose-500/20 p-6 rounded-3xl">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-rose-400 text-xs font-bold uppercase tracking-wider">
            <Flame className="w-4 h-4" /> Deal Closing War Room
          </div>
          <h1 className="text-2xl font-black text-white">Daily Sales Follow-up Queue</h1>
          <p className="text-xs text-slate-400 max-w-xl">
            80% of digital agency contracts close on the 2nd to 4th follow-up. Execute your 4-step smart WhatsApp drip sequence and never lose a deal to silence.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab("today")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === "today"
                ? "bg-rose-600 text-white shadow-lg shadow-rose-600/30"
                : "bg-slate-800 text-slate-400 hover:text-white"
            }`}
          >
            Today's Due Queue ({data?.dueToday?.length || 0})
          </button>
          <button
            onClick={() => setActiveTab("upcoming")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === "upcoming"
                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                : "bg-slate-800 text-slate-400 hover:text-white"
            }`}
          >
            Scheduled Pipeline ({data?.upcoming?.length || 0})
          </button>
        </div>
      </div>

      {/* KPI Stats Row */}
      {data?.stats && (
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div className="bg-[#111625] p-5 rounded-2xl border border-rose-500/30 bg-rose-950/10">
            <span className="text-[11px] font-bold text-rose-400 uppercase">Due For Action Today</span>
            <p className="text-3xl font-black text-rose-400 mt-1">{data.stats.dueTodayCount}</p>
            <span className="text-[11px] text-rose-300/80">Requires WhatsApp/Call</span>
          </div>

          <div className="bg-[#111625] p-5 rounded-2xl border border-[#1E293B]">
            <span className="text-[11px] font-bold text-slate-400 uppercase">Upcoming Scheduled</span>
            <p className="text-3xl font-black text-white mt-1">{data.stats.upcomingCount}</p>
            <span className="text-[11px] text-slate-400">Next 7 Days</span>
          </div>

          <div className="bg-[#111625] p-5 rounded-2xl border border-indigo-500/30 bg-indigo-950/10">
            <span className="text-[11px] font-bold text-indigo-400 uppercase">Active Conversations</span>
            <p className="text-3xl font-black text-indigo-400 mt-1">{data.stats.contactedCount}</p>
            <span className="text-[11px] text-indigo-300/80">In Pitch Pipeline</span>
          </div>

          <div className="bg-[#111625] p-5 rounded-2xl border border-emerald-500/30 bg-emerald-950/10">
            <span className="text-[11px] font-bold text-emerald-400 uppercase">Deals Won / Closed</span>
            <p className="text-3xl font-black text-emerald-400 mt-1">{data.stats.convertedCount}</p>
            <span className="text-[11px] text-emerald-300/80">{data.stats.conversionRate}% Win Rate</span>
          </div>
        </div>
      )}

      {/* Leads Follow-up Queue */}
      {loading ? (
        <div className="p-12 text-center text-slate-400">Loading Follow-up War Room...</div>
      ) : leadsToShow.length === 0 ? (
        <div className="bg-[#111625] border border-[#1E293B] rounded-3xl p-12 text-center space-y-3">
          <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
          <h3 className="text-lg font-bold text-white">All Clear! No Pending Follow-ups Today</h3>
          <p className="text-xs text-slate-400 max-w-md mx-auto">
            You have executed all due follow-ups. Head over to the Lead Extractor to scan new prospects and keep your pipeline loaded.
          </p>
          <Link
            href="/scripts"
            className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold"
          >
            Extract New Leads <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {leadsToShow.map((lead: any) => {
            const stageNumber = Math.min(4, Math.max(1, lead.followUpStage || 1));
            const currentStageInfo = DRIP_STAGES[stageNumber];
            const pitchMessage = currentStageInfo.getPitch(lead);
            const cleanPhone = lead.phone ? lead.phone.replace(/[^0-9]/g, "") : "";
            const phoneToOpen = cleanPhone.startsWith("91") ? cleanPhone : "91" + cleanPhone;

            return (
              <div
                key={lead.id}
                className="bg-[#111625] border border-[#1E293B] hover:border-rose-500/40 rounded-3xl p-6 transition-all shadow-xl space-y-4"
              >
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-3 border-b border-slate-800">
                  <div className="space-y-1">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="text-lg font-bold text-white">{lead.businessName}</h3>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider bg-slate-800 text-slate-300">
                        {lead.category.replace("_", " ")}
                      </span>
                      <span className="text-xs font-semibold text-indigo-400">
                        📍 {lead.address?.split(",")[0] || lead.city}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400">
                      Owner: <strong className="text-white">{lead.ownerName || "Business Head"}</strong> • Phone: <span className="font-mono text-emerald-400 font-semibold">{lead.phone}</span>
                    </p>
                  </div>

                  {/* Stage Progress Pill */}
                  <div className="flex items-center gap-2 bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-2xl">
                    <span className="text-[11px] font-bold text-rose-400 uppercase tracking-wider">
                      Drip Stage {stageNumber}/4
                    </span>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4].map((step) => (
                        <span
                          key={step}
                          className={`w-2 h-2 rounded-full ${
                            step <= stageNumber ? "bg-rose-500" : "bg-slate-700"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Stage Strategy & Pitch Message */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                  {/* Left: Strategy Info */}
                  <div className="space-y-2 bg-slate-900/60 p-4 rounded-2xl border border-slate-800/80">
                    <span className="text-[11px] font-bold text-amber-400 uppercase flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      {currentStageInfo.title}
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {currentStageInfo.subtitle}
                    </p>
                    <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-500">
                      Last Activity: {lead.activities?.[0]?.content || "Initial contact made."}
                    </div>
                  </div>

                  {/* Right: Message Preview & Send */}
                  <div className="lg:col-span-2 space-y-2">
                    <div className="relative">
                      <textarea
                        readOnly
                        rows={4}
                        value={pitchMessage}
                        className="w-full p-3 bg-slate-900/90 border border-slate-800 rounded-2xl text-xs text-slate-200 font-mono leading-relaxed resize-none focus:outline-none"
                      />
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        {/* Quick Outcome Action Buttons */}
                        <button
                          onClick={() => handleAction(lead.id, "call_tomorrow", 1)}
                          disabled={actionLoading === lead.id}
                          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-[11px] font-semibold transition-all border border-slate-700"
                        >
                          📞 Call Tomorrow (+1d)
                        </button>

                        <button
                          onClick={() => handleAction(lead.id, "said_thinking", 3)}
                          disabled={actionLoading === lead.id}
                          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-[11px] font-semibold transition-all border border-slate-700"
                        >
                          🤔 Reviewing Demo (+3d)
                        </button>

                        <button
                          onClick={() => handleAction(lead.id, "price_objection", 2)}
                          disabled={actionLoading === lead.id}
                          className="px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-xl text-[11px] font-semibold transition-all"
                        >
                          💰 Price Objection (Stage 3 Offer)
                        </button>

                        <Link
                          href={`/quotation?leadId=${lead.id}&clientName=${encodeURIComponent(lead.ownerName || lead.businessName)}&clientBusiness=${encodeURIComponent(lead.businessName)}&clientPhone=${encodeURIComponent(lead.phone)}`}
                          className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-[11px] font-bold transition-all shadow-sm"
                        >
                          🚀 Ready! Send Quotation
                        </Link>
                      </div>

                      {/* WhatsApp Direct Open */}
                      <a
                        href={`https://wa.me/${phoneToOpen}?text=${encodeURIComponent(pitchMessage)}`}
                        target="_blank"
                        rel="noreferrer"
                        onClick={() => handleAction(lead.id, "sent_drip_stage", 2)}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold shadow-md shadow-emerald-600/30 transition-all hover:scale-102"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Stage {stageNumber} Pitch</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
