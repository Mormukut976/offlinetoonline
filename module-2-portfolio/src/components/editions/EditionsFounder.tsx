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
    const msg = `Namaste Raja bhai! I am submitting an inquiry via O2O Digital website:
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
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-800 text-xs font-bold border border-slate-200">
            DIRECT FOUNDER DISPATCH
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            Meet Raja Singh Chauhan & Launch In 48 Hours
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Headquartered in Jaipur, Rajasthan. Every website is engineered personally with zero middlemen and delivered live in 48 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Founder Identity & HQ Card on Crisp White */}
          <div className="lg:col-span-5 wix-card p-8 space-y-6 bg-white border border-slate-200 shadow-lg">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-black flex items-center justify-center text-white font-black text-2xl shadow-md">
                RSC
              </div>
              <div>
                <h3 className="text-2xl font-black text-slate-950">Raja Singh Chauhan</h3>
                <p className="text-xs font-bold text-emerald-700 uppercase tracking-wider mt-0.5">
                  Founder & Managing Director
                </p>
                <p className="text-xs text-slate-500">O2O Digital Agency, Jaipur</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic bg-slate-50 p-4 rounded-xl border border-slate-100">
              "Jaipur aur North India ke har vyapari aur dukandar ka haq hai ki unka business Google ke pehle page par aaye, aur bina kisi monthly hosting bill ke unke paas direct customer calls aayin."
            </p>

            <div className="space-y-3 pt-2 text-xs sm:text-sm text-slate-700">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{COMPANY.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-indigo-600 shrink-0" />
                <a href={`tel:${COMPANY.rawPhone}`} className="font-bold text-slate-900 hover:text-indigo-600">
                  {COMPANY.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-indigo-600 shrink-0" />
                <span>{COMPANY.email}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <QrCode className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Official UPI: <strong className="font-bold text-slate-900">{COMPANY.upiId}</strong></span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 flex items-center gap-2 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Full source code and domain ownership handed over on Day 1.</span>
            </div>
          </div>

          {/* Quick Consultation Form on Crisp White */}
          <div className="lg:col-span-7 wix-card p-8 space-y-6 bg-white border border-slate-200 shadow-lg">
            <div>
              <h3 className="text-2xl font-black text-slate-950">Direct WhatsApp Consultation Intake</h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Fill the details below to dispatch your business inquiry directly to Raja Singh Chauhan's phone.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 text-center space-y-3 bg-emerald-50 border border-emerald-200 rounded-2xl">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-black text-slate-950">Dispatched to WhatsApp!</h4>
                <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto">
                  Your details were formatted and sent to Raja Singh. If the window did not open, click the button below.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2.5 rounded-full bg-slate-900 text-white text-xs font-bold"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-700 font-bold mb-1">Business Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajputana Travels"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      className="w-full p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 outline-none focus:border-black focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 font-bold mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikram Singh"
                      value={formData.ownerName}
                      onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                      className="w-full p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 outline-none focus:border-black focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-700 font-bold mb-1">WhatsApp Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 outline-none focus:border-black focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 font-bold mb-1">City / Location *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Jaipur, Rajasthan"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 outline-none focus:border-black focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 font-bold mb-1">Business Category</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 outline-none focus:border-black focus:bg-white transition-all"
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
                  <label className="block text-slate-700 font-bold mb-1">Specific Requirement</label>
                  <textarea
                    rows={2}
                    placeholder="Tell Raja Singh what kind of calculator or Google ranking you need..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 outline-none focus:border-black focus:bg-white transition-all"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-black hover:bg-slate-800 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 transition-all active:scale-95"
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
