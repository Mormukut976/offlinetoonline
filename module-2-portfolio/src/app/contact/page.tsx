import React from 'react';
import ContactForm from '@/components/contact/ContactForm';
import { COMPANY } from '@/data/company';
import { MapPin, Phone, Mail, Clock, MessageSquare, ShieldCheck } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="py-12 lg:py-20 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <span className="text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            Direct Agency Contact
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Get In Touch With Raja Singh Chauhan
          </h1>
          <p className="text-slate-400 text-sm sm:text-base">
            Whether you want a quick review of your current Google ranking, need a custom fare calculator, or want to launch your website in 48 hours — we are ready to assist.
          </p>
        </div>

        {/* Contact Form Component */}
        <ContactForm />

        {/* Map / Local HQ Info Card */}
        <div className="mt-12 glass-card p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <MapPin className="w-5 h-5 text-emerald-400" />
                <span>Visit Agency Office in Jaipur</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Ekta Nagar, S Block, Gandhi Path West, Jaipur, Rajasthan 302021
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={`tel:${COMPANY.rawPhone}`}
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-2 border border-slate-700"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>Call +91 80009 07924</span>
              </a>

              <a
                href={`https://wa.me/918000907924?text=${encodeURIComponent('Namaste Raja bhai! I want to visit your Jaipur office / have a meeting.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white text-xs font-bold flex items-center gap-2 shadow-lg shadow-emerald-500/20"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-white" />
                <span>Schedule WhatsApp Meeting</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
