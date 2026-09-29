"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import {
  Sparkles,
  Building2,
  CheckCircle2,
  Upload,
  Link as LinkIcon,
  ShieldCheck,
  Send,
  ExternalLink,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  Check
} from "lucide-react";
import { formatCurrency } from "@/lib/utils";

export default function ClientOnboardingPage() {
  const params = useParams();
  const id = params?.id as string;

  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Form Fields
  const [businessName, setBusinessName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [mapsLink, setMapsLink] = useState("");
  const [tagline, setTagline] = useState("");
  const [servicesList, setServicesList] = useState("");
  const [driveLink, setDriveLink] = useState("");
  const [advancePaid, setAdvancePaid] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [specialInstructions, setSpecialInstructions] = useState("");

  const fetchProject = async () => {
    try {
      setLoading(true);
      const res = await fetch(`/api/onboard/${id}`);
      const data = await res.json();
      if (data.success && data.data) {
        setProject(data.data);
        setBusinessName(data.data.clientName || "");
        setAdvancePaid(String(data.data.paidAmount || ""));
        if (data.data.onboardingData) {
          const ob = data.data.onboardingData;
          setBusinessName(ob.businessName || data.data.clientName);
          setOwnerName(ob.ownerName || "");
          setPhone(ob.phone || "");
          setEmail(ob.email || "");
          setAddress(ob.address || "");
          setMapsLink(ob.mapsLink || "");
          setTagline(ob.tagline || "");
          setServicesList(ob.servicesList || "");
          setDriveLink(ob.driveLink || "");
          setTransactionId(ob.transactionId || "");
          setSpecialInstructions(ob.specialInstructions || "");
        }
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) fetchProject();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setSubmitting(true);
      const res = await fetch(`/api/onboard/${id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          businessName,
          ownerName,
          phone,
          email,
          address,
          mapsLink,
          tagline,
          servicesList,
          driveLink,
          advancePaid,
          transactionId,
          specialInstructions
        })
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#070A12] flex items-center justify-center text-slate-400">
        Loading Client Onboarding Portal...
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-[#070A12] flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-[#111625] border border-slate-800 p-8 rounded-3xl text-center space-y-4">
          <Building2 className="w-12 h-12 text-rose-400 mx-auto" />
          <h2 className="text-xl font-bold text-white">Project Not Found</h2>
          <p className="text-xs text-slate-400">Please check the onboarding link provided by your agency manager.</p>
        </div>
      </div>
    );
  }

  const getWhatsAppConfirmationUrl = () => {
    const text = `Namaste Raja ji! 🙏

Maine *${businessName || project.clientName}* ke website project ke liye onboarding details submit kar di hain.

Advance Paid: ₹${advancePaid}
Txn ID: ${transactionId || "Submitted in form"}

Kripya review karein aur design start karein!
- ${ownerName || businessName}`;
    return `https://wa.me/918000907924?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="min-h-screen bg-[#070A12] text-slate-100 py-10 px-4 selection:bg-indigo-500 selection:text-white">
      {/* Container */}
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Brand Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Official Project Kickoff Portal
          </div>
          <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Offline to Online <span className="text-indigo-400">(O2O Digital)</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto leading-relaxed">
            Welcome aboard! Kripya apne business ki details aur photos share karein taaki humari team agle 5-7 din ke andar aapki website ready kar sake.
          </p>
        </div>

        {/* Project Snapshot Card */}
        <div className="bg-gradient-to-r from-indigo-950/50 via-[#111625] to-purple-950/50 border border-indigo-500/30 rounded-3xl p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shadow-xl">
          <div className="space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-400">
              Active Project Scope
            </span>
            <h2 className="text-xl font-bold text-white">{project.clientName}</h2>
            <p className="text-xs text-slate-300">{project.projectType}</p>
          </div>
          <div className="sm:text-right bg-slate-900/80 px-4 py-2.5 rounded-2xl border border-slate-800">
            <span className="text-[10px] font-bold uppercase text-slate-400 block">Total Investment</span>
            <span className="text-lg font-black text-emerald-400">{formatCurrency(project.price)}</span>
            <span className="text-[10px] text-slate-400 block">50% Advance Standard</span>
          </div>
        </div>

        {/* Confirmation Screen if already submitted */}
        {submitted ? (
          <div className="bg-[#111625] border border-emerald-500/40 rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-2xl">
            <div className="w-16 h-16 rounded-3xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
              <CheckCircle2 className="w-10 h-10 animate-bounce" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-black text-white">Onboarding Details Received!</h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                Thank you! Aapke business ki sabhi details save ho chuki hain aur humare founder <strong className="text-white">Raja Singh Chauhan</strong> aur design team ne project par kaam shuru kar diya hai.
              </p>
            </div>

            <div className="p-4 bg-slate-900/90 rounded-2xl border border-slate-800 text-xs text-slate-400 max-w-sm mx-auto space-y-1">
              <p className="flex items-center justify-between"><span>Delivery Window:</span> <strong className="text-white">5 - 7 Business Days</strong></p>
              <p className="flex items-center justify-between"><span>Live Demo Review:</span> <strong className="text-indigo-400">On WhatsApp</strong></p>
              <p className="flex items-center justify-between"><span>Support Guarantee:</span> <strong className="text-emerald-400">Lifetime Zero Server Cost</strong></p>
            </div>

            <div className="pt-2">
              <a
                href={getWhatsAppConfirmationUrl()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl text-xs font-bold shadow-lg shadow-emerald-600/30 transition-all hover:scale-105"
              >
                <Send className="w-4 h-4" />
                <span>Notify Raja Singh Chauhan on WhatsApp</span>
              </a>
            </div>
          </div>
        ) : (
          /* Intake Form */
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Step 1: Business Profile */}
            <div className="bg-[#111625] border border-[#1E293B] rounded-3xl p-6 sm:p-8 space-y-5">
              <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-wider">
                <Building2 className="w-4 h-4" /> Step 1: Business Profile & Contact
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">Business Name (As on board)</label>
                  <input
                    type="text"
                    required
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="e.g. Royal Heritage Resort"
                    className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">Owner / Manager Name</label>
                  <input
                    type="text"
                    required
                    value={ownerName}
                    onChange={(e) => setOwnerName(e.target.value)}
                    placeholder="e.g. Vikram Sharma"
                    className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">WhatsApp / Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91-XXXXXXXXXX"
                    className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-indigo-500 font-mono"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">Official Email (Optional)</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="info@yourbusiness.com"
                    className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1.5">Shop / Office Full Address</label>
                <input
                  type="text"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Plot No, Street, Landmark, City, Pincode"
                  className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1.5">Google Maps Link (Optional)</label>
                <input
                  type="url"
                  value={mapsLink}
                  onChange={(e) => setMapsLink(e.target.value)}
                  placeholder="https://maps.app.goo.gl/..."
                  className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-indigo-500"
                />
              </div>
            </div>

            {/* Step 2: Services & Pricing Details */}
            <div className="bg-[#111625] border border-[#1E293B] rounded-3xl p-6 sm:p-8 space-y-5">
              <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4" /> Step 2: Services, Rates & Offerings
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1.5">Business Slogan / Tagline</label>
                <input
                  type="text"
                  value={tagline}
                  onChange={(e) => setTagline(e.target.value)}
                  placeholder="e.g. Best Affordable Outstation Cabs in Jaipur"
                  className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                  Services Offered & Rate Card / Menu Items
                </label>
                <textarea
                  rows={4}
                  required
                  value={servicesList}
                  onChange={(e) => setServicesList(e.target.value)}
                  placeholder="List your main services, vehicle types with per-km rates, doctor treatments, hotel room types, or menu items..."
                  className="w-full p-3.5 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-indigo-500 leading-relaxed"
                />
              </div>
            </div>

            {/* Step 3: Photos & Drive Link */}
            <div className="bg-[#111625] border border-[#1E293B] rounded-3xl p-6 sm:p-8 space-y-5">
              <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-wider">
                <Upload className="w-4 h-4" /> Step 3: Branding Photos & Logo (Google Drive)
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                  Google Drive / Dropbox Folder Link (Logo, Shop & Product Photos)
                </label>
                <input
                  type="url"
                  value={driveLink}
                  onChange={(e) => setDriveLink(e.target.value)}
                  placeholder="https://drive.google.com/drive/folders/..."
                  className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-indigo-500"
                />
                <p className="text-[11px] text-slate-500 mt-1">
                  Tip: Upload your logo and 5-10 business photos to a Drive folder with "Anyone with link can view". You can also WhatsApp them directly to Raja Singh Chauhan.
                </p>
              </div>
            </div>

            {/* Step 4: Advance Payment Confirmation */}
            <div className="bg-[#111625] border border-[#1E293B] rounded-3xl p-6 sm:p-8 space-y-5">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" /> Step 4: Advance Payment Verification
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">Advance Amount Paid (₹)</label>
                  <input
                    type="number"
                    required
                    value={advancePaid}
                    onChange={(e) => setAdvancePaid(e.target.value)}
                    placeholder="e.g. 5000"
                    className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-xs font-bold text-emerald-400 focus:outline-none focus:border-indigo-500 font-mono"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">UPI Ref / UTR No. / Transaction ID</label>
                  <input
                    type="text"
                    value={transactionId}
                    onChange={(e) => setTransactionId(e.target.value)}
                    placeholder="e.g. 426819283719"
                    className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-indigo-500 font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1.5">Special Instructions or Competitor Links</label>
                <textarea
                  rows={2}
                  value={specialInstructions}
                  onChange={(e) => setSpecialInstructions(e.target.value)}
                  placeholder="Any competitor website you like or specific design preferences..."
                  className="w-full p-3.5 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-indigo-500 leading-relaxed"
                />
              </div>
            </div>

            {/* Submit Bar */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-4 px-6 bg-gradient-to-r from-emerald-600 via-indigo-600 to-purple-600 hover:from-emerald-500 hover:to-indigo-500 text-white rounded-2xl text-sm font-bold shadow-xl shadow-indigo-600/30 transition-all hover:scale-102 flex items-center justify-center gap-2"
              >
                <Check className="w-5 h-5" />
                <span>{submitting ? "Submitting Onboarding Details..." : "Submit & Officially Kickoff Project"}</span>
              </button>
            </div>
          </form>
        )}

        {/* Footer */}
        <footer className="text-center text-xs text-slate-500 pt-6">
          <p>Managed by Raja Singh Chauhan • Founder & CEO, O2O Digital Agency</p>
          <p className="mt-1">Headquartered in Jaipur, Rajasthan • Contact: +91 80009 07924</p>
        </footer>
      </div>
    </div>
  );
}
