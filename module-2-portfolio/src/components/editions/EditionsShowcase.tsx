'use client';

import React, { useState } from 'react';
import { Calculator, MapPin, QrCode, Phone, MessageSquare, ExternalLink, Star, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { formatINR } from '@/lib/utils';

export default function EditionsShowcase() {
  // Calculator State
  const [vehicle, setVehicle] = useState<'dzire' | 'ertiga' | 'innova' | 'tempo'>('ertiga');
  const [days, setDays] = useState<number>(2);
  const [distanceKm, setDistanceKm] = useState<number>(550);

  const vehicleRates = {
    dzire: { name: 'Swift Dzire (Sedan)', rate: 11, minPerDay: 250, driver: 300, tag: 'Budget Friendly' },
    ertiga: { name: 'Maruti Ertiga (SUV 6+1)', rate: 14, minPerDay: 250, driver: 350, tag: 'Most Popular' },
    innova: { name: 'Innova Crysta (Luxury 7+1)', rate: 18, minPerDay: 250, driver: 400, tag: 'VIP Comfort' },
    tempo: { name: 'Tempo Traveller (12/17)', rate: 24, minPerDay: 250, driver: 500, tag: 'Group Tour' }
  };

  const selectedVehicle = vehicleRates[vehicle];
  const minBillableKm = days * selectedVehicle.minPerDay;
  const billableKm = Math.max(distanceKm, minBillableKm);
  const baseFare = billableKm * selectedVehicle.rate;
  const driverAllowance = days * selectedVehicle.driver;
  const estimatedTotal = baseFare + driverAllowance;

  const fareWhatsAppMsg = `Namaste Raja bhai! I tested the Live Cab Fare Calculator on your O2O Editions website for ${selectedVehicle.name} (${days} Days, ${distanceKm} KM = ₹${estimatedTotal}). I want this custom calculator built for my business website!`;

  return (
    <section id="case-study" className="py-20 border-t border-slate-800/80 bg-[#070a11]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-indigo-400">
              [ II // VERIFIED CASE STUDIES & SYSTEMS ]
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
            Interactive Product Engines in Action
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
            Every system we design includes specialized logic tailored for that specific industry. Here are the live modules built for our paying clients.
          </p>
        </div>

        {/* Big Showcase Card 1: Bhumika Tour & Travels Outstation Fare Engine */}
        <div id="fare-engine" className="edition-card p-6 sm:p-10 space-y-8">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400 font-bold uppercase tracking-wider">
                  CASE STUDY #1
                </span>
                <span className="text-xs text-slate-400 font-semibold">Jaipur, Rajasthan</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                Bhumika Tour & Travels — Outstation Fare Engine
              </h3>
            </div>

            <a
              href="https://bhumikatourandtravels.world/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-semibold border border-slate-700 inline-flex items-center gap-1.5 transition-all self-start sm:self-center"
            >
              <span>Visit bhumikatourandtravels.world</span>
              <ExternalLink className="w-3.5 h-3.5 text-indigo-400" />
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Interactive Calculator Simulation */}
            <div className="lg:col-span-7 space-y-6 bg-slate-950/60 p-6 rounded-2xl border border-slate-800/90">
              
              {/* Vehicle Picker */}
              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2.5">
                  1. Select Vehicle
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {(Object.keys(vehicleRates) as Array<keyof typeof vehicleRates>).map((vKey) => (
                    <button
                      key={vKey}
                      type="button"
                      onClick={() => setVehicle(vKey)}
                      className={`p-3 rounded-xl text-left border text-xs transition-all ${
                        vehicle === vKey
                          ? 'bg-indigo-600/25 border-indigo-500 text-white shadow-md'
                          : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <div className="font-bold text-white">{vehicleRates[vKey].name.split(' ')[0]}</div>
                      <div className="text-[10px] text-emerald-400 font-mono mt-0.5">₹{vehicleRates[vKey].rate}/KM</div>
                      <div className="text-[9px] text-slate-500 mt-1">{vehicleRates[vKey].tag}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Sliders */}
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-300 font-medium">Days: <strong>{days} Days</strong></span>
                    <span className="text-[11px] text-indigo-400 font-mono">Min {minBillableKm} KM (250 KM/day)</span>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={10}
                    value={days}
                    onChange={(e) => setDays(Number(e.target.value))}
                    className="w-full accent-indigo-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
                  />
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-300 font-medium">Estimated Roundtrip: <strong>{distanceKm} KM</strong></span>
                    <span className="text-[11px] text-slate-400 font-mono">Actual: {billableKm} KM</span>
                  </div>
                  <input
                    type="range"
                    min={100}
                    max={2500}
                    step={50}
                    value={distanceKm}
                    onChange={(e) => setDistanceKm(Number(e.target.value))}
                    className="w-full accent-indigo-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
                  />
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-[11px] text-slate-400 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Rajasthan standard commercial cab rule: Minimum 250 KM per calendar day applied automatically.</span>
              </div>
            </div>

            {/* Right Column: Live Output & 1-Tap WhatsApp Lead Action */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-gradient-to-br from-indigo-950/50 via-slate-900 to-[#0c1220] border border-indigo-500/30 space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Total Calculated Fare</span>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400 font-bold">
                  {selectedVehicle.name.split(' ')[0]}
                </span>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between text-slate-300">
                  <span>Billable Running ({billableKm} KM @ ₹{selectedVehicle.rate}):</span>
                  <span className="font-mono font-bold text-white">₹{baseFare.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Driver Allowance ({days} days @ ₹{selectedVehicle.driver}):</span>
                  <span className="font-mono font-bold text-white">₹{driverAllowance.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-slate-400 text-[11px]">
                  <span>Tolls, State Tax & Parking:</span>
                  <span>Actual at toll plaza</span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-baseline justify-between">
                <span className="text-xs font-bold text-white uppercase tracking-wider">Estimated Fare:</span>
                <span className="text-3xl font-black text-emerald-400 font-mono">₹{estimatedTotal.toLocaleString('en-IN')}</span>
              </div>

              <a
                href={`https://wa.me/918000907924?text=${encodeURIComponent(fareWhatsAppMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 text-white font-bold text-xs sm:text-sm shadow-xl shadow-emerald-500/25 flex items-center justify-center gap-2 transition-all active:scale-95"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>I Want This Calculator For My Website</span>
              </a>

              <p className="text-[11px] text-center text-slate-400 leading-normal">
                ✓ Included in <strong>Growth Business Suite (₹9,999)</strong> with ₹0/mo hosting forever
              </p>
            </div>

          </div>
        </div>

        {/* 2-Column Split: Google Maps Domination + Physical NFC Standees */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 2: Google 3-Pack Local Domination Engine */}
          <div id="google-maps" className="edition-card p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono font-bold text-emerald-400 uppercase tracking-wider">
                [ IV // GOOGLE 3-PACK ENGINE ]
              </span>
              <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold">
                RANK #1 VISIBILITY
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Google Maps & Local Search Domination
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              When someone searches *"cab service near me"* or *"doctor in Vaishali Nagar"*, Google displays 3 businesses at the very top. We optimize your Google Business Profile (GBP), embed geotagged storefront photos, and synchronize high-authority Indian citations so your shop captures all local search volume.
            </p>

            {/* Mock Google Search Card */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-[11px] text-slate-400 font-mono border-b border-slate-800 pb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-500"></span>
                <span>Google Search: "Outstation cab rental Jaipur"</span>
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white">Bhumika Tour & Travels</h4>
                  <div className="flex items-center gap-1.5 text-xs text-yellow-400 mt-0.5">
                    <span>4.9 ★★★★★</span>
                    <span className="text-slate-400 text-[11px]">(140+ Google Reviews)</span>
                  </div>
                  <p className="text-[11px] text-emerald-400 font-medium mt-1">Open 24 Hours • Outstation Cabs</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded bg-indigo-600/30 text-indigo-300 text-[10px] font-bold border border-indigo-500/30">
                    Call Direct
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Geotagged image metadata & service area fencing</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Schema.org JSON-LD integration for instant Google crawling</span>
              </div>
            </div>
          </div>

          {/* Card 3: Physical Laser-Engraved NFC Review Standee */}
          <div id="nfc-standees" className="edition-card p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono font-bold text-teal-400 uppercase tracking-wider">
                [ V // OFFLINE TRUST STAND ]
              </span>
              <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-teal-500/10 text-teal-400 border border-teal-500/20 font-bold">
                PHYSICAL HARDWARE
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Laser-Cut Acrylic NFC/QR Counter Standee
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Placed directly on your billing or reception counter. When a satisfied walk-in customer is paying, they tap their smartphone on the acrylic stand — their phone screen instantly opens your Google 5-star review box!
            </p>

            {/* Standee Mockup Visual Box */}
            <div className="p-5 rounded-2xl bg-gradient-to-tr from-slate-950 via-slate-900 to-indigo-950/40 border border-indigo-500/30 text-center space-y-3">
              <div className="inline-block p-3 rounded-2xl bg-indigo-600/20 border border-indigo-500/40 text-indigo-300">
                <QrCode className="w-8 h-8 mx-auto" />
              </div>
              <div>
                <p className="text-xs font-mono text-emerald-400 font-bold">TAP PHONE HERE OR SCAN QR</p>
                <p className="text-xs text-white font-bold mt-0.5">Rate Us 5-Stars on Google</p>
                <p className="text-[10px] text-slate-400 mt-1">High-grade laser engraved transparent acrylic</p>
              </div>
              <div className="text-[10px] font-mono text-slate-500">
                INCLUDED FREE IN GROWTH & ENTERPRISE TIERS
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>NTAG213 high-speed NFC microchip embedded</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Delivered physically to your storefront anywhere in North India</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
