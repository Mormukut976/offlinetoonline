import React from 'react';
import Link from 'next/link';
import { COMPANY } from '@/data/company';
import { ShieldCheck, MapPin, Phone, Mail, Award, CheckCircle2, Heart, ArrowRight } from 'lucide-react';
import CTASection from '@/components/home/CTASection';

export default function AboutPage() {
  return (
    <div className="py-12 lg:py-20 space-y-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            Founder's Mission & Story
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Meet Raja Singh Chauhan &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">
              The O2O Mission
            </span>
          </h1>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Why I built Offline to Online (O2O Digital) to free traditional Indian business owners from the monthly extortion of aggregator portals and slow web agencies.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl glass-panel border border-indigo-500/30 text-center relative overflow-hidden">
              <div className="w-28 h-28 rounded-2xl bg-gradient-to-tr from-indigo-600 to-emerald-400 p-1 mx-auto mb-4 shadow-xl shadow-indigo-500/20">
                <div className="w-full h-full bg-[#080c14] rounded-[14px] flex items-center justify-center font-black text-3xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">
                  RSC
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white">Raja Singh Chauhan</h3>
              <p className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mt-1">
                Founder & Managing Director
              </p>
              <p className="text-xs text-slate-400 mt-2">
                Ekta Nagar, Gandhi Path West, Jaipur, Rajasthan
              </p>

              <div className="mt-6 pt-6 border-t border-slate-800 grid grid-cols-2 gap-3 text-left text-xs">
                <div className="p-2.5 rounded-lg bg-slate-900">
                  <span className="text-[10px] text-slate-400 block">Specialization</span>
                  <span className="font-bold text-white">Jamstack & Local SEO</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900">
                  <span className="text-[10px] text-slate-400 block">Philosophy</span>
                  <span className="font-bold text-emerald-400">₹0 Recurring Cost</span>
                </div>
              </div>

              <div className="mt-6">
                <a
                  href={`https://wa.me/918000907924?text=${encodeURIComponent('Namaste Raja bhai! I read your story on the website and want to connect.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
                >
                  <span>Direct WhatsApp Raja Singh</span>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">
            <h3 className="text-2xl font-bold text-white">
              "Har dukandar aur local vyapari ka haq hai ki wo Google ke pehle page par dikhe."
            </h3>

            <p>
              Main Jaipur, Rajasthan mein roz hazaron aisi shops, tour travels, clinics aur real estate offices dekhta hu jo saalon se mehnat kar rahe hain, lekin unke pass aane wale customers Justdial ya MakeMyTrip jaisi companies ke raste aate hain jo 20% se 30% commission kaat leti hain.
            </p>

            <p>
              Aur jab koi vyapari kisi web development agency ke pass jata hai, toh agency unhe purani WordPress website pakda deti hai jo phone par 6 second mein khulti hai, aur har mahine ₹2,000 hosting aur maintenance ka bill bhejna shuru kar deti hai.
            </p>

            <div className="p-5 rounded-2xl bg-indigo-950/30 border border-indigo-500/30 space-y-2">
              <h4 className="text-white font-bold text-sm flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>O2O Digital Ka Sankalp (Our Core Pledge):</span>
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-300 pl-6 list-disc">
                <li><strong>No Monthly Server Bills:</strong> Lifetime zero hosting fee Jamstack architecture.</li>
                <li><strong>Sub-second Speed:</strong> Phone par tap karte hi website khulni chahiye.</li>
                <li><strong>Direct WhatsApp Routing:</strong> Customer ka phone seedha dukandar ke haath mein aana chahiye.</li>
                <li><strong>Physical Acrylic Standee:</strong> Walk-in customers se cash counter par live 5-star Google review lene ka smart setup.</li>
              </ul>
            </div>

            <p>
              Humara model simple hai: Ek baar sahi setup banao, 48 ghante mein deliver karo, aur vyapari ko unki website aur domain ki 100% full ownership dedo.
            </p>
          </div>

        </div>

      </div>

      <CTASection />
    </div>
  );
}
