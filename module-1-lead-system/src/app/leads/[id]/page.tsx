"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
  Users,
  ChevronLeft,
  Phone,
  MessageSquare,
  Globe,
  MapPin,
  Calendar,
  FilePlus,
  Send,
  Plus,
  ExternalLink,
  Sparkles,
  CheckCircle2,
  Mail,
  Copy,
  Check,
  Cpu,
  Flame,
  SearchCode
} from "lucide-react";
import { WHATSAPP_TEMPLATES } from "@/data/templates/whatsapp";
import { formatDate } from "@/lib/utils";

export default function LeadDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id as string;

  const [lead, setLead] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [selectedTemplateIndex, setSelectedTemplateIndex] = useState(0);
  const [customPitch, setCustomPitch] = useState("");
  const [newActivityContent, setNewActivityContent] = useState("");
  const [activityType, setActivityType] = useState("note");

  // AI Pitch State
  const [aiGenerating, setAiGenerating] = useState(false);
  const [aiType, setAiType] = useState<"whatsapp" | "email" | "audit">("whatsapp");
  const [aiTone, setAiTone] = useState<"urgent_pain" | "friendly_founder" | "social_proof">("urgent_pain");
  const [emailSubject, setEmailSubject] = useState("");
  const [copied, setCopied] = useState(false);

  // SMTP Email sending state
  const [sendingEmail, setSendingEmail] = useState(false);
  const [emailSentSuccess, setEmailSentSuccess] = useState(false);

  const fetchLead = async () => {
    try {
      const res = await fetch(`/api/leads/${id}`);
      const data = await res.json();
      if (data.success) {
        setLead(data.data);
        // Preload default pitch
        const tpl = WHATSAPP_TEMPLATES[0].template({
          ownerName: data.data.ownerName || undefined,
          businessName: data.data.businessName,
          city: data.data.city,
          category: data.data.category
        });
        setCustomPitch(tpl);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) fetchLead();
  }, [id]);

  const handleStatusChange = async (newStatus: string) => {
    try {
      const res = await fetch(`/api/leads/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus })
      });
      const data = await res.json();
      if (data.success) {
        setLead(data.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleTemplateSelect = (index: number) => {
    setSelectedTemplateIndex(index);
    if (!lead) return;
    const tpl = WHATSAPP_TEMPLATES[index].template({
      ownerName: lead.ownerName || undefined,
      businessName: lead.businessName,
      city: lead.city,
      category: lead.category
    });
    setCustomPitch(tpl);
  };

  const handleGenerateAiPitch = async (typeOverride?: "whatsapp" | "email" | "audit") => {
    if (!lead) return;
    const targetType = typeOverride || aiType;
    try {
      setAiGenerating(true);
      const res = await fetch("/api/ai/pitch", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          businessName: lead.businessName,
          category: lead.category,
          city: lead.city,
          zone: lead.address?.split(",")[0] || "",
          hasWebsite: Boolean(lead.website),
          type: targetType,
          tone: aiTone
        })
      });
      const data = await res.json();
      if (data.success) {
        if (targetType === "email" && data.emailData) {
          setEmailSubject(data.emailData.subject);
          setCustomPitch(data.emailData.body);
        } else {
          setCustomPitch(data.result);
        }
      }
    } catch (err) {
      console.error(err);
    } finally {
      setAiGenerating(false);
    }
  };

  const handleSendSmtpEmail = async () => {
    if (!lead) return;
    const recipient = lead.email || prompt("Enter client email address to send proposal:");
    if (!recipient) return;

    try {
      setSendingEmail(true);
      const res = await fetch("/api/mail/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: recipient,
          subject: emailSubject || `Website & Digital Growth Proposal for ${lead.businessName}`,
          bodyText: customPitch,
          leadId: lead.id
        })
      });
      const data = await res.json();
      if (data.success) {
        setEmailSentSuccess(true);
        setTimeout(() => setEmailSentSuccess(false), 3500);
        fetchLead();
      } else {
        alert(data.error || "Failed to send email. Check SMTP settings.");
      }
    } catch (err: any) {
      alert(`Error: ${err.message}`);
    } finally {
      setSendingEmail(false);
    }
  };

  const handleAddActivity = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newActivityContent.trim()) return;

    try {
      const res = await fetch(`/api/leads/${id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: activityType,
          content: newActivityContent
        })
      });
      const data = await res.json();
      if (data.success) {
        setNewActivityContent("");
        fetchLead();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const copyPitch = () => {
    navigator.clipboard.writeText(customPitch);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (loading) {
    return <div className="p-8 text-center text-slate-400">Loading Lead Profile...</div>;
  }

  if (!lead) {
    return (
      <div className="p-8 text-center text-slate-400">
        Lead not found. <Link href="/leads" className="text-indigo-400">Back to Leads</Link>
      </div>
    );
  }

  const cleanPhone = lead.phone ? lead.phone.replace(/[^0-9]/g, "") : "";

  return (
    <div className="space-y-6 max-w-6xl mx-auto pb-20">
      {/* Top Breadcrumb & Actions */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <Link
          href="/leads"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to Leads CRM
        </Link>

        <div className="flex items-center gap-3">
          <Link
            href={`/quotation?leadId=${lead.id}&clientName=${encodeURIComponent(lead.ownerName || lead.businessName)}&clientBusiness=${encodeURIComponent(lead.businessName)}&clientPhone=${encodeURIComponent(lead.phone)}&clientEmail=${encodeURIComponent(lead.email || "")}`}
            className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold shadow-md shadow-indigo-600/20 transition-all hover:scale-102"
          >
            <FilePlus className="w-3.5 h-3.5" />
            <span>Generate Official Quotation</span>
          </Link>
        </div>
      </div>

      {/* Profile Overview Card */}
      <div className="bg-[#111625] rounded-3xl p-6 sm:p-8 border border-[#1E293B] shadow-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-3 flex-wrap">
            <h1 className="text-2xl font-black text-white">{lead.businessName}</h1>
            <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider bg-slate-800 text-slate-300 border border-slate-700">
              {lead.category.replace("_", " ")}
            </span>
            {lead.rating && (
              <span className="text-xs font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-lg border border-amber-500/20">
                ★ {lead.rating}
              </span>
            )}
          </div>

          <p className="text-xs text-slate-400 flex items-center gap-2 flex-wrap">
            <span className="text-white font-medium">Owner: {lead.ownerName || "Business Owner"}</span>
            <span>•</span>
            <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5 text-emerald-400" /> {lead.phone}</span>
            <span>•</span>
            <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-indigo-400" /> {lead.address || `${lead.city}, ${lead.state}`}</span>
          </p>

          <div className="pt-1">
            {lead.website ? (
              <a
                href={lead.website}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs text-emerald-400 hover:underline"
              >
                <Globe className="w-3.5 h-3.5" /> {lead.website}
              </a>
            ) : (
              <span className="inline-flex items-center gap-1 text-xs text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded-md border border-rose-500/20 font-semibold">
                <Flame className="w-3 h-3" /> No Website (Hot Lead)
              </span>
            )}
          </div>
        </div>

        {/* Status Dropdown */}
        <div className="flex flex-col sm:items-end gap-2">
          <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
            Pipeline Status
          </label>
          <select
            value={lead.status}
            onChange={(e) => handleStatusChange(e.target.value)}
            className="px-4 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs font-bold text-white focus:outline-none focus:border-indigo-500"
          >
            <option value="new">🔴 New Lead</option>
            <option value="contacted">🟡 Contacted / Pitch Sent</option>
            <option value="interested">🔵 Interested / In Discussion</option>
            <option value="converted">🟢 Converted / Deal Closed</option>
            <option value="rejected">⚪ Rejected / Not Interested</option>
          </select>
        </div>
      </div>

      {/* Two Column Grid: AI Outreach Engine & Activity Timeline */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: AI Outreach Engine (Groq Llama 3.3 + SMTP) */}
        <div className="bg-[#111625] rounded-3xl p-6 border border-[#1E293B] shadow-xl space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <h3 className="font-bold text-white text-base flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-indigo-400 animate-pulse" />
              AI Outreach Engine (Groq Llama 3.3)
            </h3>
            <span className="text-[10px] font-bold text-indigo-300 bg-indigo-500/10 px-2.5 py-0.5 rounded-full border border-indigo-500/20">
              Personalized
            </span>
          </div>

          {/* AI Controls */}
          <div className="space-y-3">
            <div className="flex gap-2 text-xs">
              <button
                type="button"
                onClick={() => {
                  setAiType("whatsapp");
                  handleGenerateAiPitch("whatsapp");
                }}
                className={`flex-1 py-2 px-3 rounded-xl font-bold flex items-center justify-center gap-1.5 transition-all ${
                  aiType === "whatsapp"
                    ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20"
                    : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
                }`}
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Pitch</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setAiType("email");
                  handleGenerateAiPitch("email");
                }}
                className={`flex-1 py-2 px-3 rounded-xl font-bold flex items-center justify-center gap-1.5 transition-all ${
                  aiType === "email"
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/20"
                    : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
                }`}
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Cold Email</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setAiType("audit");
                  handleGenerateAiPitch("audit");
                }}
                className={`flex-1 py-2 px-3 rounded-xl font-bold flex items-center justify-center gap-1.5 transition-all ${
                  aiType === "audit"
                    ? "bg-purple-600 text-white shadow-md shadow-purple-600/20"
                    : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
                }`}
              >
                <SearchCode className="w-3.5 h-3.5" />
                <span>Digital Audit</span>
              </button>
            </div>

            {/* Tone selector & Generate Button */}
            <div className="flex items-center gap-2">
              <select
                value={aiTone}
                onChange={(e) => setAiTone(e.target.value as any)}
                className="px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-300 focus:outline-none"
              >
                <option value="urgent_pain">Tone: 🎯 Urgent Pain Points</option>
                <option value="friendly_founder">Tone: 🤝 Friendly Founder (Raja)</option>
                <option value="social_proof">Tone: 🏆 Social Proof (Bhumika Rank #6.7)</option>
              </select>

              <button
                type="button"
                onClick={() => handleGenerateAiPitch()}
                disabled={aiGenerating}
                className="flex-1 flex items-center justify-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white rounded-xl text-xs font-bold transition-all shadow-sm"
              >
                <Cpu className="w-3.5 h-3.5" />
                <span>{aiGenerating ? "Generating..." : "Generate Fresh Pitch"}</span>
              </button>
            </div>
          </div>

          {/* Email Subject if Email mode */}
          {aiType === "email" && emailSubject && (
            <div>
              <label className="text-[11px] font-semibold text-slate-400 block mb-1">Subject Line:</label>
              <input
                type="text"
                value={emailSubject}
                onChange={(e) => setEmailSubject(e.target.value)}
                className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs font-semibold text-white focus:outline-none focus:border-indigo-500"
              />
            </div>
          )}

          {/* Pitch Editor */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-[11px] font-semibold text-slate-400">Pitch Content (Editable):</label>
              <button
                onClick={copyPitch}
                className="text-[11px] text-slate-400 hover:text-white flex items-center gap-1"
              >
                {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copied ? "Copied!" : "Copy"}</span>
              </button>
            </div>
            <textarea
              rows={8}
              value={customPitch}
              onChange={(e) => setCustomPitch(e.target.value)}
              className="w-full p-3 bg-slate-900/90 border border-slate-800 rounded-xl text-xs text-slate-200 font-mono focus:outline-none focus:border-indigo-500 leading-relaxed"
            />
          </div>

          {/* Action Dispatch Buttons */}
          <div className="flex items-center justify-between gap-3 pt-2">
            <span className="text-[11px] text-slate-500 truncate">{lead.phone}</span>

            <div className="flex items-center gap-2">
              {aiType === "email" ? (
                <button
                  onClick={handleSendSmtpEmail}
                  disabled={sendingEmail}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-600/30 transition-all"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{sendingEmail ? "Sending..." : "Send via SMTP Email"}</span>
                </button>
              ) : (
                <a
                  href={`https://wa.me/${cleanPhone.startsWith("91") ? cleanPhone : "91" + cleanPhone}?text=${encodeURIComponent(customPitch)}`}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => {
                    if (lead.status === "new") handleStatusChange("contacted");
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-600/30 transition-all hover:scale-102"
                >
                  <Send className="w-4 h-4" />
                  <span>Send on WhatsApp</span>
                </a>
              )}
            </div>
          </div>

          {emailSentSuccess && (
            <p className="text-xs text-emerald-400 bg-emerald-500/10 p-2.5 rounded-xl border border-emerald-500/20 text-center font-bold">
              ✓ Proposal successfully dispatched via SMTP! Activity logged.
            </p>
          )}
        </div>

        {/* Right: Activity Log & Notes */}
        <div className="bg-[#111625] rounded-3xl p-6 border border-[#1E293B] shadow-xl space-y-5 flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-white text-base pb-3 border-b border-slate-800 mb-4 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-indigo-400" />
              Activity Log & Client History
            </h3>

            {/* Existing Activities */}
            <div className="space-y-3 max-h-[300px] overflow-y-auto pr-1">
              {lead.activities?.length === 0 ? (
                <p className="text-xs text-slate-500 py-6 text-center">No logged activities yet.</p>
              ) : (
                lead.activities?.map((act: any) => (
                  <div key={act.id} className="p-3 bg-slate-900/80 rounded-xl border border-slate-800/80 text-xs space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-indigo-300 uppercase tracking-wider text-[10px]">
                        [{act.type}]
                      </span>
                      <span className="text-[10px] text-slate-500">{formatDate(act.createdAt)}</span>
                    </div>
                    <p className="text-slate-300">{act.content}</p>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Add Activity Form */}
          <form onSubmit={handleAddActivity} className="pt-4 border-t border-slate-800 space-y-3">
            <div className="flex gap-2">
              <select
                value={activityType}
                onChange={(e) => setActivityType(e.target.value)}
                className="px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white focus:outline-none"
              >
                <option value="call">📞 Phone Call</option>
                <option value="whatsapp">💬 WhatsApp</option>
                <option value="meeting">🤝 Meeting</option>
                <option value="note">📝 Note</option>
              </select>

              <input
                type="text"
                placeholder="Log activity details (e.g. Call attended, sent quote)..."
                value={newActivityContent}
                onChange={(e) => setNewActivityContent(e.target.value)}
                className="flex-1 px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-indigo-500"
              />

              <button
                type="submit"
                className="px-3.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold rounded-xl border border-slate-700 transition-colors"
              >
                Log
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
