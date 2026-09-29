'use client';

import React from 'react';
import Link from 'next/link';
import { COMPANY } from '@/data/company';
import { ShieldCheck, MapPin, Phone, Mail, Award, CheckCircle2, Heart, ArrowRight, MessageSquare } from 'lucide-react';
import AgencyIDCard from '@/components/home/AgencyIDCard';
import AgencyContact from '@/components/home/AgencyContact';

export default function AboutPage() {
  return (
    <div className="py-12 lg:py-20 space-y-20">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="category-pill">
            <Award className="w-3.5 h-3.5 text-violet-400" />
            <span>FOUNDER MISSION & EXECUTIVE BIO</span>
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight font-heading">
            Meet Raja Singh Chauhan &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-300">
              The O2O Digital Studio
            </span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Why I built Offline to Online (O2O Digital) to liberate traditional Indian business owners from recurring software bills and aggregator commissions.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl modern-card bg-[#0e101c] border-white/10 text-center relative overflow-hidden">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-violet-600 to-cyan-400 p-0.5 mx-auto mb-4 shadow-xl shadow-violet-500/20">
                <div className="w-full h-full bg-[#0a0c16] rounded-[14px] flex items-center justify-center font-black text-2xl text-white">
                  RSC
                </div>
              </div>

              <h3 className="text-2xl font-black text-white font-heading">Raja Singh Chauhan</h3>
              <p className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mt-1">
                Founder & Chief Digital Architect
              </p>
              <p className="text-xs text-slate-400 mt-2">
                Ekta Nagar, Gandhi Path West, Jaipur, Rajasthan 302021
              </p>

              <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-2 gap-3 text-left text-xs">
                <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                  <span className="text-[10px] text-slate-400 block font-medium">Specialization</span>
                  <span className="font-bold text-white">Jamstack & Google 3-Pack</span>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                  <span className="text-[10px] text-slate-400 block font-medium">Hosting Cost</span>
                  <span className="font-bold text-emerald-400 font-mono">₹0 / Month Lifetime</span>
                </div>
              </div>

              <div className="mt-6">
                <a
                  href={`https://wa.me/${COMPANY.rawPhone}?text=${encodeURIComponent('Hello Raja! I read your story on the O2O Digital website and want to connect.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn-whatsapp-glow py-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>Connect Directly on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">
            <h3 className="text-2xl sm:text-3xl font-black text-white font-heading">
              &ldquo;Every local merchant, clinic, and service provider deserves full sovereignty over their digital pipeline.&rdquo;
            </h3>

            <p>
              In Jaipur and throughout Rajasthan, thousands of hard-working local businesses — multi-car taxi fleets, specialized dental clinics, rooftop cafes, coaching institutes, and real estate developers — struggle because they rely on aggregator directories that take 20% to 30% cuts on every customer.
            </p>

            <p>
              When these business owners approach traditional web development agencies, they are often given bloated, slow WordPress websites that take 6+ seconds to load on mobile 4G networks, followed by monthly recurring bills of ₹2,000 to ₹5,000 for server maintenance and plugin updates.
            </p>

            <div className="p-6 rounded-2xl bg-violet-950/20 border border-violet-500/20 space-y-3">
              <h4 className="text-white font-bold text-sm flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>The O2O Digital Core Architecture Commitment:</span>
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300 pl-6 list-disc">
                <li><strong>Zero Monthly Server Bills:</strong> We deploy on global edge CDN networks with lifetime ₹0 hosting costs.</li>
                <li><strong>Sub-Second Loading Speed:</strong> Touch-to-render within 0.6 seconds on mobile 4G and 5G networks.</li>
                <li><strong>Direct WhatsApp Customer Routing:</strong> Inquiries flow directly from search results to the business owner&apos;s phone.</li>
                <li><strong>Smart Acrylic NFC Hardware:</strong> Laser-engraved table and counter review standees to collect 5-star Google ratings on site.</li>
              </ul>
            </div>

            <p>
              Our philosophy is transparent: build the right architecture once, deploy in 48 hours, and hand over 100% source code and domain ownership on day one.
            </p>
          </div>

        </div>

      </div>

      <AgencyIDCard />
      <AgencyContact />
    </div>
  );
}
