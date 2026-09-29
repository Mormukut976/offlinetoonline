'use client';

import React, { useState } from 'react';
import { COMPANY } from '@/data/company';
import { MessageSquare, Phone, MapPin, Mail, ShieldCheck, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

export default function AgencyContact() {
  const [formData, setFormData] = useState({
    businessName: '',
    ownerName: '',
    phone: '',
    category: 'Tour & Travels',
    city: 'Jaipur',
    requirement: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hello Raja! I am submitting an inquiry via O2O Digital website:
• Business Name: ${formData.businessName || 'N/A'}
• Owner Name: ${formData.ownerName || 'N/A'}
• Mobile / WhatsApp: ${formData.phone || 'N/A'}
• Business Category: ${formData.category}
• Target City: ${formData.city}
• Requirement: ${formData.requirement || 'Looking for 48-Hour Jamstack Web & Google 3-Pack launch'}
Please connect with me!`;

    const url = `https://wa.me/${COMPANY.rawPhone}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative overflow-hidden bg-[#0c0e1a]">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[700px] h-[500px] ambient-glow-purple blur-[160px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="category-pill">
            <Sparkles className="w-3.5 h-3.5 text-violet-400" />
            <span>DIRECT FOUNDER CONSULTATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-heading">
            Ready to take your business online in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-300">
              48 hours?
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Submit your requirements below or message Raja Singh Chauhan directly on WhatsApp for an instant response.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left: Contact Form (7 cols) */}
          <div className="lg:col-span-7 modern-card p-6 sm:p-10 bg-[#0e101c] border-white/10 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    Business / Shop Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Royal Haveli Sweets"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-violet-500 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    Your Name (Founder / Owner) *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Vikram Singh"
                    value={formData.ownerName}
                    onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-violet-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    Mobile / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-violet-500 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    Business Industry
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#14172a] border border-white/10 text-white text-sm focus:outline-none focus:border-violet-500 transition-colors"
                  >
                    <option value="Tour & Travels">Tour & Travels / Taxi Operator</option>
                    <option value="Healthcare & Clinic">Healthcare Clinic & Doctor Practice</option>
                    <option value="Restaurant & Cafe">Restaurant, Cafe & Lounge</option>
                    <option value="Real Estate">Real Estate & Property Development</option>
                    <option value="Education & Coaching">Education & Coaching Academy</option>
                    <option value="Retail & Showroom">Retail Store & Showroom</option>
                    <option value="Other">Other Local Service Business</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  Target City / Location
                </label>
                <input
                  type="text"
                  placeholder="e.g. Jaipur, Rajasthan"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-violet-500 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  Project Notes / Specific Needs
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your current customer channels and what you want to achieve..."
                  value={formData.requirement}
                  onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-violet-500 transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full btn-whatsapp-glow py-4 text-sm font-bold flex items-center justify-center gap-3 cursor-pointer active:scale-95"
              >
                <MessageSquare className="w-5 h-5 fill-white" />
                <span>Send Direct Inquiry to Raja Singh Chauhan</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </form>
          </div>

          {/* Right: Direct Coordinates & Assurance (5 cols) */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            
            <div className="modern-card p-6 sm:p-8 bg-[#0f1222] border-white/10 space-y-6">
              
              <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-violet-600 to-emerald-400 p-0.5">
                  <div className="w-full h-full bg-[#0d0e18] rounded-[14px] flex items-center justify-center font-black text-white text-sm">
                    O2O
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-black text-white">{COMPANY.founder}</h3>
                  <p className="text-xs text-slate-400 font-medium">Principal Solutions Architect</p>
                </div>
              </div>

              <div className="space-y-4 text-xs text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block font-medium">Headquarters</span>
                    <span className="text-white font-semibold">{COMPANY.address}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <span className="text-slate-400 block font-medium">Direct Hotline</span>
                    <span className="text-white font-semibold">{COMPANY.phone}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                  <div>
                    <span className="text-slate-400 block font-medium">Email Address</span>
                    <span className="text-white font-semibold">{COMPANY.email}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                  <div>
                    <span className="text-slate-400 block font-medium">Verified UPI</span>
                    <span className="text-white font-mono font-semibold">{COMPANY.upiId}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Immediate response within 15 minutes</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Free local Google ranking audit included</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>100% full source code ownership guaranteed</span>
                </div>
              </div>

            </div>

            {/* Quick Call Box */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-violet-950/40 to-cyan-950/30 border border-violet-500/20 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-400 block">Prefer a direct voice call?</span>
                <span className="text-sm font-bold text-white">Call Raja Singh Chauhan</span>
              </div>
              <a
                href={`tel:${COMPANY.rawPhone}`}
                className="px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold flex items-center gap-2 transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>Call Now</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
