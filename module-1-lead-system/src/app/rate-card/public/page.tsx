"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  CheckCircle2,
  PhoneCall,
  ExternalLink,
  ShieldCheck,
  Zap,
  Clock,
  ArrowRight,
  Star,
  Check,
  HelpCircle,
  TrendingUp
} from "lucide-react";
import { DEFAULT_RATE_CARDS } from "@/data/rate-cards";
import { formatCurrency } from "@/lib/utils";

export default function PublicRateCardPage() {
  const [selectedCategory, setSelectedCategory] = useState("Web Development");
  const [billingPeriod, setBillingPeriod] = useState<"standard" | "premium">("standard");

  const categories = Array.from(new Set(DEFAULT_RATE_CARDS.map((r) => r.category)));

  const currentServices = DEFAULT_RATE_CARDS.filter(
    (r) => r.category === selectedCategory
  );

  const getWhatsAppOrderUrl = (service: string, tier: string, price: number) => {
    const text = `Namaste Raja ji! 🙏\n\nMaine O2O Digital ka Rate Card dekha aur mujhe *"${service}"* ka *${tier.toUpperCase()} Package* (₹${price.toLocaleString("en-IN")}) chahiye.\n\nMera Business:\nCity:\n\nKripya project timeline aur next steps batayein.`;
    return `https://wa.me/918000907924?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="min-h-screen bg-[#070A12] text-slate-100 selection:bg-indigo-500 selection:text-white">
      {/* Top Navbar */}
      <nav className="border-b border-slate-800/80 bg-[#0B0F19]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-emerald-400 flex items-center justify-center font-black text-white text-base shadow-lg shadow-indigo-500/20">
              O2O
            </div>
            <div>
              <span className="font-extrabold text-white tracking-wide text-base">
                Offline to Online
              </span>
              <span className="text-[11px] block text-indigo-400 font-semibold">
                Digital Agency
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/918000907924?text=Namaste!%20Mujhe%20apne%20business%20ke%20liye%20website%20aur%20digital%20marketing%20karani%20hai."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full text-xs font-bold shadow-lg shadow-emerald-600/20 transition-all hover:scale-105"
            >
              <span>Talk to Founder</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Header */}
      <section className="relative overflow-hidden pt-16 pb-12 px-4 text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-indigo-600/15 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-3xl mx-auto space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> 100% Transparent Pricing • No Hidden Costs
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Apne Offline Business Ko Banao{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-emerald-400">
              Digital Powerhouse
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
            High-converting modern websites, Google Page 1 Local SEO, and 24/7 WhatsApp automation. Zero monthly server maintenance bills.
          </p>

          {/* Social Proof Badge */}
          <div className="pt-2">
            <a
              href="https://bhumikatourandtravels.world/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900/90 border border-amber-500/30 hover:border-amber-500/60 rounded-2xl text-xs text-slate-300 transition-all group"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>
                <strong className="text-white">Live Proof:</strong> Bhumika Tour & Travels ranked{" "}
                <span className="text-amber-400 font-bold">Google Page 1 (Pos 6.7)</span>
              </span>
              <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-amber-400" />
            </a>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="max-w-6xl mx-auto px-4 pb-6">
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-2xl text-xs font-bold tracking-wide transition-all ${
                selectedCategory === cat
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 scale-105"
                  : "bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Service Packages */}
      <section className="max-w-6xl mx-auto px-4 pb-20 space-y-12">
        {currentServices.map((service) => (
          <div key={service.id} className="space-y-6">
            <div className="border-b border-slate-800 pb-4">
              <h2 className="text-xl sm:text-2xl font-black text-white">{service.service}</h2>
              <p className="text-xs text-slate-400 mt-1 max-w-2xl">{service.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Basic Tier */}
              <div className="bg-[#101423] border border-slate-800 hover:border-slate-700 rounded-3xl p-6 flex flex-col justify-between transition-all">
                <div className="space-y-4">
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Starter Package
                    </span>
                    <h3 className="text-lg font-bold text-white">Basic</h3>
                  </div>

                  <div className="pt-2">
                    <span className="text-3xl font-black text-white">
                      {formatCurrency(service.basicPrice)}
                    </span>
                    <span className="text-xs text-slate-500 block mt-0.5">One-time Investment</span>
                  </div>

                  <div className="pt-4 border-t border-slate-800/80 space-y-2.5">
                    <p className="text-xs font-semibold text-slate-300">Included Features:</p>
                    {service.features.basic.map((f, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8">
                  <a
                    href={getWhatsAppOrderUrl(service.service, "Basic", service.basicPrice)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 bg-slate-800 hover:bg-slate-700 text-white rounded-2xl text-xs font-bold text-center block transition-all hover:scale-102"
                  >
                    Order Basic Package
                  </a>
                </div>
              </div>

              {/* Standard Tier (Most Popular) */}
              <div className="bg-gradient-to-b from-indigo-950/40 via-[#101423] to-[#101423] border-2 border-indigo-500/60 rounded-3xl p-6 flex flex-col justify-between relative shadow-2xl shadow-indigo-900/20 transform md:-translate-y-2">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                  Most Popular Choice
                </div>

                <div className="space-y-4">
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-400">
                      Growth Package
                    </span>
                    <h3 className="text-lg font-bold text-white">Standard</h3>
                  </div>

                  <div className="pt-2">
                    <span className="text-3xl font-black text-indigo-400">
                      {formatCurrency(service.standardPrice)}
                    </span>
                    <span className="text-xs text-indigo-300/70 block mt-0.5">One-time Investment</span>
                  </div>

                  <div className="pt-4 border-t border-indigo-500/20 space-y-2.5">
                    <p className="text-xs font-semibold text-white">Everything in Basic, plus:</p>
                    {service.features.standard.map((f, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-indigo-100">
                        <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8">
                  <a
                    href={getWhatsAppOrderUrl(service.service, "Standard", service.standardPrice)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl text-xs font-bold text-center block shadow-lg shadow-indigo-600/30 transition-all hover:scale-102"
                  >
                    Order Standard Package
                  </a>
                </div>
              </div>

              {/* Premium Tier */}
              <div className="bg-[#101423] border border-slate-800 hover:border-purple-500/50 rounded-3xl p-6 flex flex-col justify-between transition-all">
                <div className="space-y-4">
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-purple-400">
                      Enterprise Suite
                    </span>
                    <h3 className="text-lg font-bold text-white">Premium</h3>
                  </div>

                  <div className="pt-2">
                    <span className="text-3xl font-black text-purple-400">
                      {formatCurrency(service.premiumPrice)}
                    </span>
                    <span className="text-xs text-slate-500 block mt-0.5">One-time Investment</span>
                  </div>

                  <div className="pt-4 border-t border-slate-800/80 space-y-2.5">
                    <p className="text-xs font-semibold text-slate-300">Complete Enterprise Arsenal:</p>
                    {service.features.premium.map((f, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8">
                  <a
                    href={getWhatsAppOrderUrl(service.service, "Premium", service.premiumPrice)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 bg-purple-600 hover:bg-purple-500 text-white rounded-2xl text-xs font-bold text-center block transition-all hover:scale-102"
                  >
                    Order Premium Package
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Trust & Guarantee Section */}
      <section className="bg-[#0B0F19] border-y border-slate-800 py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 flex-shrink-0">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">Zero Server Maintenance</h4>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Hosting ke liye har mahine ya saal koi hosting charge nahi. Pure Jamstack global edge CDN network.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">5 to 7 Days Delivery</h4>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Koi mahino ka intezaar nahi. 1 hafte ke andar aapki website design, review aur live ho jati hai.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 flex-shrink-0">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">Google Search Console Indexing</h4>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Sitemap submission aur Schema.org rich snippets ke saath aapka business Google pe instant verify hota hai.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 py-16 space-y-6">
        <div className="text-center space-y-2">
          <h3 className="text-2xl font-black text-white">Aksar Puche Jaane Wale Sawal (FAQ)</h3>
          <p className="text-xs text-slate-400">Sabhi clear sharto ke sath 100% transparent agency process</p>
        </div>

        <div className="space-y-4 pt-4">
          <div className="bg-[#101423] border border-slate-800 rounded-2xl p-5 space-y-2">
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-indigo-400" />
              Website banane ke baad kya mujhe koi monthly charge dena hoga?
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed pl-6">
              Nahi! Hum modern Edge Jamstack technology use karte hain jisme hosting bilkul free hoti hai aur servers down nahi hote. Sirf aapka domain name (e.g. yourbusiness.com) saal me ek baar renew hota hai.
            </p>
          </div>

          <div className="bg-[#101423] border border-slate-800 rounded-2xl p-5 space-y-2">
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-indigo-400" />
              Payment process kaise kaam karta hai?
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed pl-6">
              50% advance project kickoff ke time aur bacha hua 50% tab jab aap website ka final demo review karke approve kar denge aur domain live ho jayega.
            </p>
          </div>

          <div className="bg-[#101423] border border-slate-800 rounded-2xl p-5 space-y-2">
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-indigo-400" />
              Agar mujhe website me baad me kuch change karana ho to?
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed pl-6">
              Aapko 3 mahine ka free phone & WhatsApp support milta hai minor updates ke liye. Saath hi hum simple guidance bhi dete hain.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 py-8 px-4 text-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} Offline to Online (O2O Digital). All rights reserved.</p>
        <p className="mt-1">Headquartered in Jaipur, Rajasthan • Serving Businesses Pan-India</p>
      </footer>
    </div>
  );
}
