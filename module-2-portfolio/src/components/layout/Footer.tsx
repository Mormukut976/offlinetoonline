import React from 'react';
import Link from 'next/link';
import { COMPANY } from '@/data/company';
import { MapPin, Phone, Mail, MessageSquare, ShieldCheck, Heart, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-[#05080f] text-slate-400 text-sm pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Agency Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-emerald-400 p-0.5">
                <div className="w-full h-full bg-[#080c14] rounded-[10px] flex items-center justify-center">
                  <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400 text-sm">O2O</span>
                </div>
              </div>
              <div>
                <span className="font-bold text-white text-base tracking-tight">Offline to Online (O2O Digital)</span>
                <p className="text-xs text-indigo-400 font-medium">Founded by Raja Singh Chauhan</p>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              North India's premier Jamstack digital agency. We take traditional offline shops, doctors, travels, and contractors to Google Page 1 with ₹0 monthly recurring hosting costs.
            </p>

            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/90 text-xs text-slate-300 space-y-1.5">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>The O2O Anti-Agency Guarantee</span>
              </div>
              <p className="text-slate-400 leading-normal">
                No monthly server bills, no lock-in, 100% full code & domain ownership handed over to you on launch day.
              </p>
            </div>
          </div>

          {/* Quick Nav */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Explore</h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link href="/" className="hover:text-indigo-400 transition-colors">Home Showcase</Link></li>
              <li><Link href="/services" className="hover:text-indigo-400 transition-colors">Agency Services</Link></li>
              <li><Link href="/portfolio" className="hover:text-indigo-400 transition-colors">Bhumika Travels Case Study</Link></li>
              <li><Link href="/pricing" className="hover:text-indigo-400 transition-colors">Transparent Packages (from ₹4,999)</Link></li>
              <li><Link href="/calculator" className="hover:text-indigo-400 transition-colors">Interactive Fare & ROI Tool</Link></li>
              <li><Link href="/about" className="hover:text-indigo-400 transition-colors">Meet Raja Singh Chauhan</Link></li>
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Core Services</h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link href="/services#jamstack" className="hover:text-indigo-400 transition-colors">Jamstack Websites (₹0/mo)</Link></li>
              <li><Link href="/services#google-maps" className="hover:text-indigo-400 transition-colors">Google 3-Pack Maps Domination</Link></li>
              <li><Link href="/services#calculators" className="hover:text-indigo-400 transition-colors">Custom Outstation Fare Calculators</Link></li>
              <li><Link href="/services#standees" className="hover:text-indigo-400 transition-colors">Physical Acrylic NFC Review Standees</Link></li>
              <li><Link href="/services#whatsapp" className="hover:text-indigo-400 transition-colors">1-Tap WhatsApp Lead Funnels</Link></li>
            </ul>
          </div>

          {/* Direct Contact HQ */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Direct Agency HQ</h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{COMPANY.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-indigo-400 shrink-0" />
                <a href={`tel:${COMPANY.rawPhone}`} className="hover:text-white transition-colors font-medium">
                  {COMPANY.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
                <a href={`mailto:${COMPANY.email}`} className="hover:text-white transition-colors">
                  {COMPANY.email}
                </a>
              </div>
              <div className="pt-2">
                <a
                  href={`https://wa.me/918000907924?text=${encodeURIComponent('Namaste Raja bhai! Need info on O2O agency packages.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-bold transition-colors"
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
          <div className="flex items-center gap-4">
            <span>Official UPI: <strong className="text-slate-300">80009079241@ybl</strong></span>
            <span>•</span>
            <span className="text-emerald-400 font-medium">48-Hour Live Guarantee</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
