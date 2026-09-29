'use client';

import React, { useState } from 'react';
import { COMPANY } from '@/data/company';
import { MessageSquare, Phone, Mail, MapPin, CheckCircle2, Clock, ShieldCheck, ArrowRight } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    businessName: '',
    ownerName: '',
    phone: '',
    city: 'Jaipur',
    category: 'tour_travel',
    currentPresence: 'offline_only',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const waText = `Hello Raja! I am submitting an inquiry via the O2O Digital website:
• Business: ${formData.businessName}
• Owner: ${formData.ownerName}
• Phone: ${formData.phone}
• City: ${formData.city}
• Category: ${formData.category}
• Current Status: ${formData.currentPresence}
• Message: ${formData.message || 'I want to launch my website and Google 3-Pack.'}
Looking forward to connecting!`;

    setSubmitted(true);
    const url = `https://wa.me/${COMPANY.rawPhone}?text=${encodeURIComponent(waText)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="max-w-6xl mx-auto modern-card p-6 sm:p-10 bg-[#0d0f1c] border-white/10 shadow-2xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Info Side */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <span className="category-pill mb-2">
              <ShieldCheck className="w-3.5 h-3.5 text-violet-400" />
              <span>DIRECT INQUIRY</span>
            </span>
            <h3 className="text-2xl font-black text-white font-heading">
              Launch in 48 Hours
            </h3>
            <p className="text-xs text-slate-300 mt-2 leading-relaxed">
              Every client communicates directly with Raja Singh Chauhan. No call centers, no delay, and zero agency markups.
            </p>
          </div>

          <div className="space-y-3.5 text-xs text-slate-300">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
              <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
              <div>
                <p className="font-bold text-white">Direct Mobile</p>
                <p className="text-slate-400">{COMPANY.phone}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
              <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
              <div>
                <p className="font-bold text-white">Direct Email</p>
                <p className="text-slate-400">{COMPANY.email}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
              <MapPin className="w-4 h-4 text-violet-400 shrink-0" />
              <div>
                <p className="font-bold text-white">Jaipur Headquarters</p>
                <p className="text-slate-400">{COMPANY.address}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Inquiry Form Side */}
        <div className="lg:col-span-7 bg-[#121528] p-6 sm:p-8 rounded-2xl border border-white/5">
          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-white">Inquiry Dispatched!</h4>
              <p className="text-xs text-slate-300 max-w-sm mx-auto">
                Your details were sent to Raja Singh Chauhan on WhatsApp. If the tab did not open, click the button below.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="btn-secondary-dark px-5 py-2.5 text-xs font-semibold"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Your Business Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Royal Haveli"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs sm:text-sm focus:border-violet-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Vikram Singh"
                    value={formData.ownerName}
                    onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs sm:text-sm focus:border-violet-500 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    WhatsApp Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9876543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs sm:text-sm focus:border-violet-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    City / Location *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Jaipur, Rajasthan"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs sm:text-sm focus:border-violet-500 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Specific Project Requirements
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your business goals and what you want to achieve..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs sm:text-sm focus:border-violet-500 outline-none resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full btn-whatsapp-glow py-3.5 text-xs sm:text-sm font-bold flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Send Directly to Raja Singh on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
