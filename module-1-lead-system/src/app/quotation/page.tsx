"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
  FileText,
  Plus,
  Trash2,
  Send,
  Eye,
  CheckCircle2,
  Sparkles,
  Receipt,
  Layers,
  ArrowRight
} from "lucide-react";
import { DEFAULT_RATE_CARDS } from "@/data/rate-cards";
import { formatCurrency, formatDate } from "@/lib/utils";

function QuotationBuilder() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [leadId, setLeadId] = useState(searchParams.get("leadId") || "");
  const [clientName, setClientName] = useState(searchParams.get("clientName") || "");
  const [clientBusiness, setClientBusiness] = useState(searchParams.get("clientBusiness") || "");
  const [clientPhone, setClientPhone] = useState(searchParams.get("clientPhone") || "");
  const [clientEmail, setClientEmail] = useState("");

  const [items, setItems] = useState<any[]>([
    {
      service: "Business Website (Standard)",
      description: "5-7 Pages, Mobile Fluid, Interactive Calculator, Local SEO Schema, SSL & Free Hosting",
      price: 9999,
      qty: 1
    }
  ]);

  const [discount, setDiscount] = useState<number>(0);
  const [tax, setTax] = useState<number>(0);
  const [notes, setNotes] = useState("Includes 1-time complete turnkey setup, Google Maps verification, and lifetime zero-server-maintenance guarantee.");
  const [quotations, setQuotations] = useState<any[]>([]);
  const [submitting, setSubmitting] = useState(false);

  const fetchQuotations = async () => {
    try {
      const res = await fetch("/api/quotation");
      const data = await res.json();
      if (data.success) {
        setQuotations(data.data);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchQuotations();
  }, []);

  const addLineItem = () => {
    setItems([
      ...items,
      { service: "Custom Digital Service", description: "Standard deliverables & configuration", price: 4999, qty: 1 }
    ]);
  };

  const removeLineItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const updateLineItem = (index: number, field: string, val: any) => {
    const updated = [...items];
    updated[index][field] = val;
    setItems(updated);
  };

  const addFromRateCard = (serviceName: string, tier: "basic" | "standard" | "premium", price: number) => {
    setItems([
      ...items,
      {
        service: `${serviceName} (${tier.toUpperCase()})`,
        description: `Official tier package with dedicated deliverables`,
        price,
        qty: 1
      }
    ]);
  };

  const subtotal = items.reduce((acc, item) => acc + (Number(item.price) || 0) * (Number(item.qty) || 1), 0);
  const afterDiscount = Math.max(0, subtotal - discount);
  const total = Math.round(afterDiscount + (afterDiscount * (tax / 100)));

  const handleCreateQuotation = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("/api/quotation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          leadId: leadId || null,
          clientName,
          clientBusiness: clientBusiness || clientName,
          clientPhone,
          clientEmail,
          items,
          discount,
          tax,
          notes
        })
      });
      const data = await res.json();
      if (data.success) {
        router.push(`/quotation/${data.data.id}`);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-16">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-black text-white flex items-center gap-2.5">
          <FileText className="w-6 h-6 text-amber-400" />
          Quotation Generator & Invoice Engine
        </h1>
        <p className="text-xs text-slate-400 mt-1">
          Generate branded, high-converting PDF proposals in 30 seconds with 1-click WhatsApp delivery
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left 2 Cols: Form */}
        <div className="lg:col-span-2 space-y-6">
          <form onSubmit={handleCreateQuotation} className="glass-card rounded-2xl p-6 border border-slate-800 space-y-6">
            <h3 className="font-bold text-white text-base pb-3 border-b border-slate-800 flex items-center gap-2">
              <Receipt className="w-4 h-4 text-indigo-400" /> Client & Business Details
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="text-slate-400 font-medium block mb-1">Client / Owner Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Raja Singh Chauhan"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full px-3.5 py-2 bg-slate-900 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="text-slate-400 font-medium block mb-1">Business Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Bhumika Tour & Travels"
                  value={clientBusiness}
                  onChange={(e) => setClientBusiness(e.target.value)}
                  className="w-full px-3.5 py-2 bg-slate-900 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="text-slate-400 font-medium block mb-1">WhatsApp / Phone *</label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +91 73748 31405"
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  className="w-full px-3.5 py-2 bg-slate-900 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="text-slate-400 font-medium block mb-1">Client Email (Optional)</label>
                <input
                  type="email"
                  placeholder="raja@o2odigital.agency"
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  className="w-full px-3.5 py-2 bg-slate-900 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-indigo-500"
                />
              </div>
            </div>

            {/* Quick Add From Rate Card */}
            <div className="pt-2">
              <label className="text-xs font-bold text-slate-300 block mb-2">
                ⚡ Quick Add from Rate Card:
              </label>
              <div className="flex flex-wrap gap-2 text-[11px]">
                {DEFAULT_RATE_CARDS.slice(0, 5).map((rc) => (
                  <button
                    key={rc.id}
                    type="button"
                    onClick={() => addFromRateCard(rc.service, "standard", rc.standardPrice)}
                    className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-indigo-600/30 text-slate-300 hover:text-white border border-slate-700 transition-colors"
                  >
                    + {rc.service} (₹{rc.standardPrice.toLocaleString("en-IN")})
                  </button>
                ))}
              </div>
            </div>

            {/* Line Items Table */}
            <div className="space-y-3 pt-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-white uppercase tracking-wider">Line Items / Deliverables</label>
                <button
                  type="button"
                  onClick={addLineItem}
                  className="text-xs text-indigo-400 hover:text-indigo-300 font-semibold flex items-center gap-1"
                >
                  <Plus className="w-3.5 h-3.5" /> Add Item
                </button>
              </div>

              <div className="space-y-3">
                {items.map((item, idx) => (
                  <div key={idx} className="p-3 bg-slate-900/90 rounded-xl border border-slate-800/80 space-y-2 text-xs">
                    <div className="flex items-center gap-3">
                      <input
                        type="text"
                        placeholder="Service Title"
                        value={item.service}
                        onChange={(e) => updateLineItem(idx, "service", e.target.value)}
                        className="flex-1 px-3 py-1.5 bg-slate-800/90 border border-slate-700 rounded-lg text-white font-semibold"
                      />
                      <div className="w-24">
                        <input
                          type="number"
                          placeholder="Price (₹)"
                          value={item.price}
                          onChange={(e) => updateLineItem(idx, "price", Number(e.target.value))}
                          className="w-full px-3 py-1.5 bg-slate-800/90 border border-slate-700 rounded-lg text-white font-bold text-right"
                        />
                      </div>
                      {items.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeLineItem(idx)}
                          className="p-1.5 text-slate-500 hover:text-rose-400"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                    <input
                      type="text"
                      placeholder="Detailed feature breakdown for client..."
                      value={item.description}
                      onChange={(e) => updateLineItem(idx, "description", e.target.value)}
                      className="w-full px-3 py-1.5 bg-slate-800/50 border border-slate-700/60 rounded-lg text-slate-300 text-[11px]"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Calculations & Notes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-slate-800 text-xs">
              <div>
                <label className="text-slate-400 font-medium block mb-1">Proposal Terms & Notes</label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full p-2.5 bg-slate-900 border border-slate-800 rounded-xl text-slate-300"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-slate-400">
                  <span>Subtotal:</span>
                  <span className="font-bold text-white">{formatCurrency(subtotal)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Special Discount (₹):</span>
                  <input
                    type="number"
                    value={discount}
                    onChange={(e) => setDiscount(Number(e.target.value))}
                    className="w-24 px-2 py-1 bg-slate-900 border border-slate-800 rounded text-right text-emerald-400 font-bold"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">GST (%):</span>
                  <input
                    type="number"
                    value={tax}
                    onChange={(e) => setTax(Number(e.target.value))}
                    className="w-24 px-2 py-1 bg-slate-900 border border-slate-800 rounded text-right text-slate-300"
                  />
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-base font-black text-amber-400">
                  <span>Total Payable:</span>
                  <span>{formatCurrency(total)}</span>
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-sm shadow-xl shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4" />
              {submitting ? "Generating Proposal..." : "Generate Professional Quotation"}
            </button>
          </form>
        </div>

        {/* Right Col: Recent Quotations */}
        <div className="space-y-4">
          <div className="glass-card rounded-2xl p-6 border border-slate-800">
            <h3 className="font-bold text-white text-base pb-3 border-b border-slate-800 mb-4">
              Generated Quotations ({quotations.length})
            </h3>

            <div className="space-y-3">
              {quotations.length === 0 ? (
                <p className="text-xs text-slate-500 py-6 text-center">No quotations generated yet.</p>
              ) : (
                quotations.map((q) => (
                  <div key={q.id} className="p-3 bg-slate-900/80 rounded-xl border border-slate-800/80 text-xs space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-amber-400 font-mono">{q.quotationNo}</span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-300 uppercase">
                        {q.status}
                      </span>
                    </div>
                    <p className="font-semibold text-white truncate">{q.clientBusiness}</p>
                    <div className="flex items-center justify-between pt-1">
                      <span className="font-bold text-emerald-400">{formatCurrency(q.total)}</span>
                      <Link
                        href={`/quotation/${q.id}`}
                        className="text-indigo-400 hover:text-indigo-300 font-semibold flex items-center gap-1"
                      >
                        <Eye className="w-3.5 h-3.5" /> View Proposal
                      </Link>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function QuotationPage() {
  return (
    <Suspense fallback={<div className="py-20 text-center text-slate-500">Loading Quotation Builder...</div>}>
      <QuotationBuilder />
    </Suspense>
  );
}
