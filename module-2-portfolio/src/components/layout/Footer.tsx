import React from 'react';
import Link from 'next/link';
import { COMPANY } from '@/data/company';
import { MapPin, Phone, Mail, MessageSquare, ShieldCheck, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 text-slate-600 text-sm pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-200">
          
          {/* Agency Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center text-white font-black text-sm shadow-md">
                O2O
              </div>
              <div>
                <span className="font-extrabold text-slate-900 text-base tracking-tight">Offline to Online (O2O Digital)</span>
                <p className="text-xs text-indigo-600 font-bold">Founded by Raja Singh Chauhan</p>
              </div>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed max-w-sm">
              North India's premier Jamstack digital agency. We take traditional offline shops, doctors, travels, and contractors to Google Page 1 with ₹0 monthly recurring hosting costs.
            </p>

            <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 space-y-1.5 shadow-xs">
              <div className="flex items-center gap-2 text-emerald-700 font-bold">
                <ShieldCheck className="w-4 h-4" />
                <span>The O2O Anti-Agency Guarantee</span>
              </div>
              <p className="text-slate-600 leading-normal">
                No monthly server bills, no lock-in, 100% full code & domain ownership handed over to you on launch day.
              </p>
            </div>
          </div>

          {/* Quick Nav */}
          <div>
            <h4 className="text-slate-900 font-bold text-xs uppercase tracking-wider mb-4">Explore</h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li><a href="#hero" className="hover:text-black transition-colors">Home Showcase</a></li>
              <li><a href="#case-study" className="hover:text-black transition-colors">Bhumika Travels Case Study</a></li>
              <li><a href="#fare-engine" className="hover:text-black transition-colors">200 KM Fare Engine</a></li>
              <li><a href="#google-maps" className="hover:text-black transition-colors">Google Maps 3-Pack</a></li>
              <li><a href="#nfc-standees" className="hover:text-black transition-colors">Acrylic NFC Standees</a></li>
              <li><a href="#pricing" className="hover:text-black transition-colors">Transparent Packages</a></li>
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="text-slate-900 font-bold text-xs uppercase tracking-wider mb-4">Core Services</h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li><a href="#case-study" className="hover:text-black transition-colors">Jamstack Websites (₹0/mo)</a></li>
              <li><a href="#google-maps" className="hover:text-black transition-colors">Google 3-Pack Maps Domination</a></li>
              <li><a href="#fare-engine" className="hover:text-black transition-colors">Custom Outstation Fare Engines</a></li>
              <li><a href="#nfc-standees" className="hover:text-black transition-colors">Physical NFC Review Standees</a></li>
              <li><a href="#features" className="hover:text-black transition-colors">1-Tap WhatsApp Lead Funnels</a></li>
            </ul>
          </div>

          {/* Direct Contact HQ */}
          <div>
            <h4 className="text-slate-900 font-bold text-xs uppercase tracking-wider mb-4">Direct Agency HQ</h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5 text-slate-700">
                <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{COMPANY.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-indigo-600 shrink-0" />
                <a href={`tel:${COMPANY.rawPhone}`} className="hover:text-black transition-colors font-bold text-slate-900">
                  {COMPANY.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-slate-700">
                <Mail className="w-4 h-4 text-indigo-600 shrink-0" />
                <span>{COMPANY.email}</span>
              </div>
              <div className="pt-2">
                <a
                  href={`https://wa.me/918000907924?text=${encodeURIComponent('Namaste Raja bhai! Need info on O2O agency packages.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-emerald-700 hover:text-emerald-900 font-bold transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp: +91 80009 07924</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Offline to Online (O2O Digital). Handcrafted in Jaipur by Raja Singh Chauhan.</p>
          <div className="flex items-center gap-4 font-medium">
            <span>Official UPI: <strong className="text-slate-900 font-bold">80009079241@ybl</strong></span>
            <span>•</span>
            <span className="text-emerald-700 font-bold">48-Hour Live Guarantee</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
