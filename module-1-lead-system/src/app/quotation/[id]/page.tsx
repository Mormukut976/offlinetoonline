"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
  FileText,
  Printer,
  Share2,
  CheckCircle2,
  Clock,
  ArrowLeft,
  Phone,
  Building2,
  Calendar,
  Sparkles,
  Kanban,
  Copy,
  Check,
  AlertCircle
} from "lucide-react";
import { formatCurrency, formatDate } from "@/lib/utils";

export default function QuotationDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id as string;

  const [quotation, setQuotation] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [statusUpdating, setStatusUpdating] = useState(false);
  const [copied, setCopied] = useState(false);
  const [converted, setConverted] = useState(false);

  const fetchQuotation = async () => {
    try {
      setLoading(true);
      const res = await fetch(`/api/quotation?id=${id}`);
      const data = await res.json();
      if (data.success && data.data) {
        setQuotation(data.data);
      } else {
        setError(data.error || "Quotation not found");
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchQuotation();
    }
  }, [id]);

  const updateStatus = async (newStatus: string, convert = false) => {
    try {
      setStatusUpdating(true);
      const res = await fetch("/api/quotation", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: quotation.id,
          status: newStatus,
          convertToProject: convert
        })
      });
      const data = await res.json();
      if (data.success) {
        setQuotation(data.data);
        if (convert) {
          setConverted(true);
          setTimeout(() => {
            router.push("/production");
          }, 1200);
        }
      }
    } catch (err) {
      console.error(err);
    } finally {
      setStatusUpdating(false);
    }
  };

  const copyShareLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const getWhatsAppShareUrl = () => {
    if (!quotation) return "#";
    const phone = quotation.clientPhone?.replace(/[^0-9]/g, "") || "";
    const items = typeof quotation.items === "string" ? JSON.parse(quotation.items) : (quotation.items || []);
    const itemsList = items.map((it: any) => `• ${it.service}: ₹${it.price.toLocaleString("en-IN")}`).join("\n");

    const message = `Namaste ${quotation.clientName} ji! 🙏\n\nYeh raha aapke business (${quotation.clientBusiness}) ke liye Official Website & Digital Growth Quotation:\n\n📄 *Quotation No:* ${quotation.quotationNo}\n💰 *Total Investment:* ₹${quotation.total.toLocaleString("en-IN")}\n\n*Scope of Work:*\n${itemsList}\n\n⚡ *Delivery:* 5-7 Days\n🛡️ *Guarantee:* Google Page 1 SEO + Zero Server Maintenance\n\nAap complete quotation yahan dekh sakte hain:\n${typeof window !== "undefined" ? window.location.href : ""}\n\nShuru karne ke liye bataiye!\n- O2O Digital Agency`;

    return `https://wa.me/${phone.startsWith("91") ? phone : "91" + phone}?text=${encodeURIComponent(message)}`;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center space-y-3">
          <div className="w-10 h-10 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-sm text-slate-400">Loading Quotation...</p>
        </div>
      </div>
    );
  }

  if (error || !quotation) {
    return (
      <div className="max-w-xl mx-auto my-12 p-8 bg-[#111625] border border-rose-500/30 rounded-2xl text-center space-y-4">
        <AlertCircle className="w-12 h-12 text-rose-400 mx-auto" />
        <h2 className="text-xl font-bold text-white">Quotation Not Found</h2>
        <p className="text-sm text-slate-400">{error || "The requested quotation does not exist."}</p>
        <Link
          href="/quotation"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded-xl"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Quotations
        </Link>
      </div>
    );
  }

  const items = typeof quotation.items === "string" ? JSON.parse(quotation.items) : (quotation.items || []);

  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-20">
      {/* Top Action Bar (Hidden on print) */}
      <div className="print:hidden flex flex-wrap items-center justify-between gap-4 bg-[#111625]/80 backdrop-blur-md p-4 rounded-2xl border border-[#1E293B]">
        <div className="flex items-center gap-3">
          <Link
            href="/quotation"
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg font-bold text-white">{quotation.quotationNo}</h1>
              <span
                className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${
                  quotation.status === "accepted"
                    ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                    : quotation.status === "sent"
                    ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                    : quotation.status === "rejected"
                    ? "bg-rose-500/20 text-rose-400 border border-rose-500/30"
                    : "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                }`}
              >
                {quotation.status}
              </span>
            </div>
            <p className="text-xs text-slate-400">Created for {quotation.clientBusiness}</p>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          {/* Status Changer */}
          <select
            value={quotation.status}
            disabled={statusUpdating}
            onChange={(e) => updateStatus(e.target.value)}
            className="px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs font-semibold text-slate-200 focus:outline-none focus:border-indigo-500"
          >
            <option value="draft">Mark as Draft</option>
            <option value="sent">Mark as Sent</option>
            <option value="accepted">Mark as Accepted</option>
            <option value="rejected">Mark as Rejected</option>
          </select>

          {/* Copy Link */}
          <button
            onClick={copyShareLink}
            className="flex items-center gap-1.5 px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-semibold transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? "Link Copied!" : "Copy Link"}</span>
          </button>

          {/* WhatsApp Share */}
          <a
            href={getWhatsAppShareUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              if (quotation.status === "draft") updateStatus("sent");
            }}
            className="flex items-center gap-1.5 px-3.5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-semibold shadow-md shadow-emerald-600/20 transition-all hover:scale-102"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Send on WhatsApp</span>
          </a>

          {/* Print Button */}
          <button
            onClick={() => window.print()}
            className="flex items-center gap-1.5 px-3.5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-semibold shadow-md shadow-indigo-600/20 transition-all"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print Invoice</span>
          </button>

          {/* Convert to Production Project */}
          {quotation.status !== "accepted" ? (
            <button
              onClick={() => updateStatus("accepted", true)}
              disabled={statusUpdating}
              className="flex items-center gap-1.5 px-3.5 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white rounded-xl text-xs font-semibold shadow-md shadow-indigo-600/20 transition-all"
            >
              <Kanban className="w-3.5 h-3.5" />
              <span>Accept & Start Project</span>
            </button>
          ) : (
            <Link
              href="/production"
              className="flex items-center gap-1.5 px-3.5 py-2 bg-emerald-600/20 text-emerald-300 border border-emerald-500/30 rounded-xl text-xs font-semibold"
            >
              <Kanban className="w-3.5 h-3.5" />
              <span>View in Production</span>
            </Link>
          )}
        </div>
      </div>

      {converted && (
        <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl flex items-center gap-3 text-emerald-400 text-sm">
          <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
          <span>Quotation accepted! Auto-created project in Production Pipeline. Redirecting...</span>
        </div>
      )}

      {/* Official Printable Quotation Invoice Document */}
      <div className="bg-[#0F1424] text-slate-100 rounded-3xl border border-[#1E293B] shadow-2xl overflow-hidden print:bg-white print:text-black print:border-none print:shadow-none print:rounded-none">
        {/* Header Accent Bar */}
        <div className="h-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-400 print:bg-black" />

        <div className="p-8 sm:p-12 space-y-8">
          {/* Brand & Document Meta */}
          <div className="flex flex-col sm:flex-row justify-between items-start gap-6 border-b border-[#1E293B] print:border-slate-300 pb-8">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-black text-lg">
                  O2O
                </div>
                <div>
                  <h2 className="text-2xl font-black tracking-tight text-white print:text-black">
                    OFFLINE TO ONLINE
                  </h2>
                  <p className="text-xs uppercase tracking-widest text-indigo-400 font-semibold print:text-slate-600">
                    Digital Agency & Growth Studio
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-400 print:text-slate-600 max-w-sm pt-2">
                Jaipur, Rajasthan • kanu9264@gmail.com • +91 80009 07924
                <br />
                Websites • Local SEO • Booking Systems • Digital Branding
              </p>
            </div>

            <div className="sm:text-right space-y-1 bg-slate-900/60 print:bg-slate-100 p-4 rounded-2xl border border-slate-800 print:border-slate-300">
              <span className="text-[11px] font-bold uppercase tracking-widest text-indigo-400 print:text-indigo-600">
                Official Estimate / Proposal
              </span>
              <div className="text-xl font-black text-white print:text-black">{quotation.quotationNo}</div>
              <div className="text-xs text-slate-400 print:text-slate-600">
                Date: <span className="font-semibold text-slate-200 print:text-black">{formatDate(quotation.createdAt)}</span>
              </div>
              <div className="text-xs text-slate-400 print:text-slate-600">
                Valid Until: <span className="font-semibold text-emerald-400 print:text-emerald-700">{formatDate(quotation.validUntil)}</span>
              </div>
            </div>
          </div>

          {/* Client & Billing Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-[#141B2D] print:bg-slate-50 p-6 rounded-2xl border border-[#1E293B] print:border-slate-200">
            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 print:text-slate-500">
                Billed To Client
              </span>
              <h3 className="text-base font-bold text-white print:text-black">{quotation.clientName}</h3>
              <p className="text-sm font-semibold text-indigo-400 print:text-indigo-700 flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5" /> {quotation.clientBusiness}
              </p>
              <p className="text-xs text-slate-400 print:text-slate-600 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5" /> {quotation.clientPhone}
              </p>
              {quotation.clientEmail && (
                <p className="text-xs text-slate-400 print:text-slate-600">{quotation.clientEmail}</p>
              )}
            </div>

            <div className="space-y-1 sm:text-right">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 print:text-slate-500">
                Delivery Commitment
              </span>
              <p className="text-sm font-bold text-white print:text-black">Turnaround: 5-7 Business Days</p>
              <p className="text-xs text-slate-400 print:text-slate-600">
                Includes Complete Setup, Hosting & Google Listing
              </p>
              <div className="pt-2">
                <span className="inline-block text-[11px] font-semibold px-2.5 py-1 bg-indigo-500/10 text-indigo-300 print:bg-slate-200 print:text-black rounded-lg">
                  Guaranteed Google Page 1 Schema Optimization
                </span>
              </div>
            </div>
          </div>

          {/* Itemized Services Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-[#1E293B] print:border-slate-300 text-[11px] font-bold uppercase tracking-wider text-slate-400 print:text-slate-600">
                  <th className="py-3 px-2">#</th>
                  <th className="py-3 px-4">Service & Specifications</th>
                  <th className="py-3 px-4 text-center">Qty</th>
                  <th className="py-3 px-4 text-right">Rate</th>
                  <th className="py-3 px-4 text-right">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1E293B]/60 print:divide-slate-200">
                {items.map((item: any, idx: number) => (
                  <tr key={idx} className="hover:bg-slate-800/20 print:hover:bg-transparent">
                    <td className="py-4 px-2 text-xs font-semibold text-slate-500">{idx + 1}</td>
                    <td className="py-4 px-4">
                      <div className="font-bold text-white print:text-black">{item.service}</div>
                      {item.description && (
                        <div className="text-xs text-slate-400 print:text-slate-600 mt-1 max-w-lg leading-relaxed">
                          {item.description}
                        </div>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center font-medium text-slate-300 print:text-black">
                      {item.qty || 1}
                    </td>
                    <td className="py-4 px-4 text-right font-medium text-slate-300 print:text-black">
                      {formatCurrency(item.price)}
                    </td>
                    <td className="py-4 px-4 text-right font-bold text-white print:text-black">
                      {formatCurrency(item.price * (item.qty || 1))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Financial Calculation Breakdown */}
          <div className="border-t border-[#1E293B] print:border-slate-300 pt-6 flex flex-col sm:flex-row justify-between items-start gap-8">
            {/* Payment Schedule & Instructions */}
            <div className="space-y-4 max-w-md">
              <div className="bg-[#141B2D] print:bg-slate-50 p-5 rounded-2xl border border-[#1E293B] print:border-slate-200 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-white print:text-black flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-indigo-400" />
                  Payment Milestones
                </h4>
                <div className="text-xs space-y-1.5 text-slate-300 print:text-slate-700">
                  <div className="flex justify-between">
                    <span>1. Project Kickoff (50% Advance):</span>
                    <span className="font-bold text-white print:text-black">
                      {formatCurrency(Math.round(quotation.total * 0.5))}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>2. Final Delivery & Live Domain Launch (50%):</span>
                    <span className="font-bold text-white print:text-black">
                      {formatCurrency(Math.round(quotation.total * 0.5))}
                    </span>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800 print:border-slate-200">
                  <p className="text-[11px] text-slate-400 print:text-slate-600">
                    <span className="font-semibold text-slate-200 print:text-black">UPI ID:</span> 80009079241@ybl / 8000907924@paytm
                    <br />
                    <span className="font-semibold text-slate-200 print:text-black">Account:</span> O2O Digital Agency, Jaipur
                  </p>
                </div>
              </div>
            </div>

            {/* Calculations Box */}
            <div className="w-full sm:w-72 space-y-2 bg-[#141B2D] print:bg-slate-50 p-5 rounded-2xl border border-[#1E293B] print:border-slate-200">
              <div className="flex justify-between text-xs text-slate-400 print:text-slate-600">
                <span>Subtotal:</span>
                <span className="font-semibold text-slate-200 print:text-black">{formatCurrency(quotation.subtotal)}</span>
              </div>
              {quotation.discount > 0 && (
                <div className="flex justify-between text-xs text-emerald-400 print:text-emerald-700">
                  <span>Special Discount:</span>
                  <span className="font-semibold">-{formatCurrency(quotation.discount)}</span>
                </div>
              )}
              {quotation.tax > 0 && (
                <div className="flex justify-between text-xs text-slate-400 print:text-slate-600">
                  <span>GST / Tax ({quotation.tax}%):</span>
                  <span className="font-semibold text-slate-200 print:text-black">
                    +{formatCurrency(Math.round((quotation.subtotal - quotation.discount) * (quotation.tax / 100)))}
                  </span>
                </div>
              )}
              <div className="pt-3 border-t border-slate-800 print:border-slate-300 flex justify-between items-baseline">
                <span className="text-sm font-bold text-white print:text-black">Grand Total:</span>
                <span className="text-2xl font-black text-indigo-400 print:text-indigo-800">
                  {formatCurrency(quotation.total)}
                </span>
              </div>
            </div>
          </div>

          {/* Notes & Terms */}
          {quotation.notes && (
            <div className="p-4 bg-slate-900/40 print:bg-slate-100 rounded-xl border border-slate-800 print:border-slate-200 text-xs text-slate-400 print:text-slate-600 leading-relaxed">
              <span className="font-bold text-slate-300 print:text-black">Special Note: </span>
              {quotation.notes}
            </div>
          )}

          {/* Footer Signature Box */}
          <div className="border-t border-[#1E293B] print:border-slate-300 pt-8 flex flex-col sm:flex-row justify-between items-end gap-6 text-xs text-slate-400 print:text-slate-600">
            <div className="space-y-1">
              <p className="font-semibold text-slate-300 print:text-black">Offline to Online (O2O Digital)</p>
              <p>Registered Office: Ekta Nagar, S Block, Gandhi Path West, Jaipur, Rajasthan</p>
              <p>Confidential & Proprietary quotation document.</p>
            </div>
            <div className="text-right space-y-1">
              <div className="w-40 border-b border-slate-600 print:border-slate-400 mb-1" />
              <p className="font-bold text-white print:text-black">Authorized Signatory</p>
              <p className="text-[11px]">Raja Singh Chauhan (Founder & CEO)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
