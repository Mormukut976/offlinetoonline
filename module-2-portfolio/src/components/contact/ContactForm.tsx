'use client';

import React, { useState } from 'react';
import { COMPANY } from '@/data/company';
import { MessageSquare, Phone, Send, CheckCircle2, MapPin, Mail, Clock } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    businessName: '',
    ownerName: '',
    phone: '',
    category: 'tour_travel',
    city: 'Jaipur',
    currentPresence: 'offline_only',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Prepare direct WhatsApp message
    const waText = `Namaste Raja bhai! I submitted an inquiry on O2O Digital website:
• Business: ${formData.businessName}
• Owner: ${formData.ownerName}
• Phone: ${formData.phone}
• Category: ${formData.category}
• City: ${formData.city}
• Current Status: ${formData.currentPresence}
• Note: ${formData.message || 'Looking to get website & Google Maps setup done'}
Please connect!`;

    setSubmitted(true);

    // Open WhatsApp in new tab
    const url = `https://wa.me/918000907924?text=${encodeURIComponent(waText)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-indigo-500/30 shadow-2xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Contact Info Side */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
              Direct Founder Access
            </span>
            <h3 className="text-2xl font-bold text-white mt-1">
              Let's Scale Your Offline Storefront
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
              Reach out directly to <strong>Raja Singh Chauhan</strong>. No sales reps, no ticket numbers. We respond within 15 minutes during business hours.
            </p>
          </div>

          <div className="space-y-4 text-xs sm:text-sm">
            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
              <MapPin className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-white">Agency Headquarters</p>
                <p className="text-slate-400 mt-0.5">{COMPANY.address}</p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
              <Phone className="w-5 h-5 text-indigo-400 shrink-0" />
              <div>
                <p className="font-bold text-white">Direct Call & WhatsApp</p>
                <a href={`tel:${COMPANY.rawPhone}`} className="text-indigo-400 hover:underline font-mono mt-0.5 block">
                  {COMPANY.phone}
                </a>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
              <Mail className="w-5 h-5 text-indigo-400 shrink-0" />
              <div>
                <p className="font-bold text-white">Official Email</p>
                <a href={`mailto:${COMPANY.email}`} className="text-slate-400 hover:text-white mt-0.5 block">
                  {COMPANY.email}
                </a>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
              <Clock className="w-5 h-5 text-teal-400 shrink-0" />
              <div>
                <p className="font-bold text-white">Turnaround Guarantee</p>
                <p className="text-slate-400 mt-0.5">48 Hours from payment to live website</p>
              </div>
            </div>
          </div>
        </div>

        {/* Inquiry Form Side */}
        <div className="lg:col-span-7 bg-slate-900/60 p-6 sm:p-8 rounded-2xl border border-slate-800">
          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-white">Inquiry Received!</h4>
              <p className="text-xs sm:text-sm text-slate-300 max-w-sm mx-auto">
                Your details were dispatched to Raja Singh Chauhan's WhatsApp. If the tab did not open, click the button below.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="px-5 py-2.5 rounded-xl bg-slate-800 text-slate-200 text-xs font-semibold"
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
                    placeholder="e.g. Royal Rajputana Travels"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs sm:text-sm focus:border-indigo-500 outline-none"
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
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs sm:text-sm focus:border-indigo-500 outline-none"
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
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs sm:text-sm focus:border-indigo-500 outline-none"
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
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs sm:text-sm focus:border-indigo-500 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Business Category
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs sm:text-sm focus:border-indigo-500 outline-none"
                  >
                    <option value="tour_travel">Tour & Travels / Cabs</option>
                    <option value="hospital">Hospital, Doctor & Clinic</option>
                    <option value="hotel_restaurant">Hotel, Resort & Cafe</option>
                    <option value="real_estate">Real Estate & Builder</option>
                    <option value="coaching">Coaching & Institute</option>
                    <option value="retail_store">Retail Shop & Showroom</option>
                    <option value="service_provider">Local Service Provider</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Current Online Setup
                  </label>
                  <select
                    value={formData.currentPresence}
                    onChange={(e) => setFormData({ ...formData, currentPresence: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs sm:text-sm focus:border-indigo-500 outline-none"
                  >
                    <option value="offline_only">No Website (100% Offline)</option>
                    <option value="justdial_indiamart">Paying Justdial / Indiamart</option>
                    <option value="slow_wordpress">Old Slow WordPress Website</option>
                    <option value="unverified_maps">Google Maps not showing in Top 3</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Any specific requirement or question?
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell Raja Singh what kind of features or calculator you want on your website..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs sm:text-sm focus:border-indigo-500 outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-bold text-xs sm:text-sm shadow-xl shadow-emerald-500/25 flex items-center justify-center gap-2 transition-all active:scale-95"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Send Directly to Raja Singh on WhatsApp</span>
              </button>

              <p className="text-[11px] text-center text-slate-400">
                🔒 Your number is strictly private. We never spam.
              </p>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
