'use client';

import React from 'react';
import ContactForm from '@/components/contact/ContactForm';
import { COMPANY } from '@/data/company';
import { MapPin, Phone, Mail, Clock, MessageSquare, ShieldCheck, ArrowRight } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="py-12 lg:py-20 space-y-16 bg-section-contact min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <span className="category-pill">
            <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
            <span>DIRECT FOUNDER CONTACT</span>
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight font-heading">
            Connect With Raja Singh Chauhan
          </h1>
          <p className="text-slate-300 text-sm sm:text-base">
            Whether you want a free audit of your current Google ranking, need a custom fare calculator, or want to launch your website in 48 hours — we are ready to assist.
          </p>
        </div>

        {/* Contact Form */}
        <ContactForm />

        {/* HQ Coordinates Card */}
        <div className="mt-12 modern-card p-6 sm:p-8 bg-[#0d0f1c] border-white/10 space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <MapPin className="w-5 h-5 text-emerald-400" />
                <span>Visit Agency Studio in Jaipur</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                {COMPANY.address}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={`tel:${COMPANY.rawPhone}`}
                className="btn-secondary-dark px-4 py-2.5 text-xs font-semibold flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>Call {COMPANY.phone}</span>
              </a>

              <a
                href={`https://wa.me/${COMPANY.rawPhone}?text=${encodeURIComponent('Hello Raja! I want to schedule a consultation regarding my business.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp-glow px-4 py-2.5 text-xs font-bold flex items-center gap-2"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-white" />
                <span>WhatsApp Directly</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
