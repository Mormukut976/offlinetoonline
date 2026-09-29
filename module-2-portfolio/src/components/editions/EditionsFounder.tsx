'use client';

import React, { useState } from 'react';
import { COMPANY } from '@/data/company';
import { MessageSquare, Phone, MapPin, Mail, ShieldCheck, CheckCircle2, QrCode } from 'lucide-react';

export default function EditionsFounder() {
  const [formData, setFormData] = useState({
    businessName: '',
    ownerName: '',
    phone: '',
    category: 'tour_travel',
    city: 'Jaipur',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Namaste Raja bhai! I am submitting an inquiry via O2O Editions website:
• Business: ${formData.businessName}
• Owner: ${formData.ownerName}
• Phone: ${formData.phone}
• Category: ${formData.category}
• City: ${formData.city}
• Requirement: ${formData.notes || 'Looking to start 48-hr website & Google 3-Pack setup'}
Please connect!`;

    setSubmitted(true);
    const url = `https://wa.me/918000907924?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="py-20 border-t border-slate-800/80 bg-[#05070c]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-emerald-400">
              [ VIII // DIRECT FOUNDER DISPATCH ]
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
            Meet Raja Singh Chauhan & Start Your Launch
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
            Headquartered in Jaipur, Rajasthan. Every website is engineered personally with zero middlemen and delivered live in 48 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Founder Identity & HQ Card */}
          <div className="lg:col-span-5 edition-card p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-indigo-500 to-emerald-400 p-[2px]">
                <div className="w-full h-full bg-[#06080d] rounded-[14px] flex items-center justify-center font-black text-xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">
                  RSC
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Raja Singh Chauhan</h3>
                <p className="text-xs font-mono text-emerald-400 uppercase tracking-wider mt-0.5">
                  Founder & Managing Director
                </p>
                <p className="text-[11px] text-slate-400">O2O Digital Agency, Jaipur</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
              "Jaipur aur North India ke har vyapari aur dukandar ka haq hai ki unka business Google ke pehle page par aaye, aur bina kisi monthly hosting bill ke unke paas direct customer calls aayin."
            </p>

            <div className="space-y-3 pt-3 border-t border-slate-800 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-slate-300">{COMPANY.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-indigo-400 shrink-0" />
                <a href={`tel:${COMPANY.rawPhone}`} className="text-slate-300 hover:text-white font-mono">
                  {COMPANY.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
                <span className="text-slate-300">{COMPANY.email}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <QrCode className="w-4 h-4 text-teal-400 shrink-0" />
                <span className="text-slate-300">Official UPI: <strong className="text-white font-mono">{COMPANY.upiId}</strong></span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-[11px] text-slate-400 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Full source code and domain ownership handed over on Day 1.</span>
            </div>
          </div>

          {/* Quick Consultation Form */}
          <div className="lg:col-span-7 edition-card p-6 sm:p-8 space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white">Direct WhatsApp Consultation Intake</h3>
              <p className="text-xs text-slate-400 mt-1">
                Fill the details below to dispatch your business inquiry directly to Raja Singh Chauhan's phone.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 text-center space-y-3 bg-emerald-950/20 border border-emerald-500/30 rounded-2xl">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white">Dispatched to WhatsApp!</h4>
                <p className="text-xs text-slate-300 max-w-sm mx-auto">
                  Your details were formatted and sent to Raja Singh. If the window did not open, click the button below.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 rounded-xl bg-slate-800 text-slate-200 text-xs font-semibold"
                >
                  Submit Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 mb-1 font-medium">Business Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajputana Travels"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-white outline-none focus:border-indigo-500"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 mb-1 font-medium">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikram Singh"
                      value={formData.ownerName}
                      onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                      className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-white outline-none focus:border-indigo-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 mb-1 font-medium">WhatsApp Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-white outline-none focus:border-indigo-500"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 mb-1 font-medium">City / Location *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Jaipur, Rajasthan"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-white outline-none focus:border-indigo-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 mb-1 font-medium">Business Category</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-white outline-none focus:border-indigo-500"
                  >
                    <option value="tour_travel">Tour & Travels / Outstation Cabs</option>
                    <option value="clinic_hospital">Doctor Clinic, Dental & Hospital</option>
                    <option value="hotel_cafe">Hotel, Resort, Rooftop Cafe & Restaurant</option>
                    <option value="real_estate">Real Estate & Construction</option>
                    <option value="coaching">Coaching & Educational Academy</option>
                    <option value="retail">Local Retail Store & Showroom</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 mb-1 font-medium">Specific Requirement</label>
                  <textarea
                    rows={2}
                    placeholder="Tell Raja Singh what kind of calculator or Google ranking you need..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-white outline-none focus:border-indigo-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 text-white font-bold text-xs sm:text-sm shadow-xl shadow-emerald-500/25 flex items-center justify-center gap-2 transition-all active:scale-95"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>Send Directly to Raja Singh on WhatsApp</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
