'use client';

import React, { useState } from 'react';
import { Calculator, MapPin, QrCode, Phone, MessageSquare, ExternalLink, Star, ShieldCheck, CheckCircle2, ArrowRight, Car, Users, Sparkles } from 'lucide-react';
import { formatINR } from '@/lib/utils';

export default function EditionsShowcase() {
  // Calculator State
  const [vehicle, setVehicle] = useState<'dzire' | 'ertiga' | 'innova' | 'tempo'>('ertiga');
  const [days, setDays] = useState<number>(2);
  const [distanceKm, setDistanceKm] = useState<number>(550);

  const vehicleRates = {
    dzire: { 
      name: 'Swift Dzire (Sedan)', 
      seats: '4+1 Seater', 
      rate: 11, 
      minPerDay: 250, 
      driver: 300, 
      tag: 'Budget Friendly',
      image: '/images/swift_dzire_cab_1790123757335.jpg',
      features: ['Air Conditioned', 'Luggage Boot Space', 'Best for Couples & Small Family']
    },
    ertiga: { 
      name: 'Maruti Ertiga (SUV)', 
      seats: '6+1 Seater', 
      rate: 14, 
      minPerDay: 250, 
      driver: 350, 
      tag: 'Most Popular',
      image: '/images/maruti_ertiga_cab_1790123769718.jpg',
      features: ['Dual AC Vents', 'Foldable Seats', 'Perfect For Family Outstation']
    },
    innova: { 
      name: 'Innova Crysta (Luxury)', 
      seats: '7+1 Seater', 
      rate: 18, 
      minPerDay: 250, 
      driver: 400, 
      tag: 'VIP Luxury',
      image: '/images/innova_crysta_cab_1790123741494.jpg',
      features: ['Captain Seats', 'Superior Shockers', 'Corporate & Long Distance']
    },
    tempo: { 
      name: 'Tempo Traveller', 
      seats: '12/17 Seater', 
      rate: 24, 
      minPerDay: 250, 
      driver: 500, 
      tag: 'Group Tour',
      image: '/images/tempo_traveller_van_1790123787560.jpg',
      features: ['Pushback Seats', 'Individual AC', 'Chardham & Rajasthan Tour']
    }
  };

  const selectedVehicle = vehicleRates[vehicle];
  const minBillableKm = days * selectedVehicle.minPerDay;
  const billableKm = Math.max(distanceKm, minBillableKm);
  const baseFare = billableKm * selectedVehicle.rate;
  const driverAllowance = days * selectedVehicle.driver;
  const estimatedTotal = baseFare + driverAllowance;

  const fareWhatsAppMsg = `Namaste Raja bhai! I tested the Live Cab Fare Calculator on your O2O website for ${selectedVehicle.name} (${days} Days, ${distanceKm} KM = ₹${estimatedTotal}). I want this custom calculator built for my business website!`;

  return (
    <section id="case-study" className="py-20 bg-slate-50/80 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-100 text-indigo-800 text-xs font-bold border border-indigo-200">
            PROVEN CLIENT CONVERSION ENGINES
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            See The Real Fleet Calculator in Action
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            This is the actual interactive engine we built for <strong>Bhumika Tour & Travels</strong>. Customers choose their car, adjust kilometers, and get an instant transparent quote before messaging on WhatsApp.
          </p>
        </div>

        {/* Big Showcase Card with REAL Cab Photos */}
        <div id="fare-engine" className="wix-card p-6 sm:p-10 bg-white border border-slate-200 shadow-xl space-y-8">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 uppercase tracking-wider">
                  LIVE INTERACTIVE ENGINE
                </span>
                <span className="text-xs text-slate-500 font-semibold">Rajasthan Cab Rule (250 KM/day)</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                Outstation Cab Fare & Booking Engine
              </h3>
            </div>

            <div className="flex items-center gap-2 self-start sm:self-center">
              <span className="text-xs font-bold text-slate-600 bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200">
                100% Client Automation
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Car Selection with REAL PHOTOS */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Vehicle Grid with Real Photos */}
              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-3">
                  1. Select Cab Fleet
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {(Object.keys(vehicleRates) as Array<keyof typeof vehicleRates>).map((vKey) => (
                    <button
                      key={vKey}
                      type="button"
                      onClick={() => setVehicle(vKey)}
                      className={`rounded-2xl p-2.5 text-left border transition-all overflow-hidden flex flex-col justify-between ${
                        vehicle === vKey
                          ? 'bg-indigo-50/50 border-black ring-2 ring-black shadow-md'
                          : 'bg-white border-slate-200 hover:border-slate-300 shadow-xs'
                      }`}
                    >
                      <div className="w-full h-24 rounded-xl overflow-hidden mb-2 bg-slate-100 relative">
                        <img
                          src={vehicleRates[vKey].image}
                          alt={vehicleRates[vKey].name}
                          className="w-full h-full object-cover"
                        />
                        <span className="absolute top-1 right-1 text-[9px] font-bold px-1.5 py-0.5 rounded bg-black/75 text-white">
                          ₹{vehicleRates[vKey].rate}/KM
                        </span>
                      </div>
                      <div>
                        <div className="font-black text-xs text-slate-900">{vehicleRates[vKey].name.split(' ')[0]}</div>
                        <div className="text-[10px] text-slate-500 font-medium">{vehicleRates[vKey].seats}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Sliders for Days and KM */}
              <div className="space-y-4 p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-800 font-bold">Trip Duration: <strong>{days} Days</strong></span>
                    <span className="text-xs text-indigo-700 font-bold">Min {minBillableKm} KM (250 KM/day)</span>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={10}
                    value={days}
                    onChange={(e) => setDays(Number(e.target.value))}
                    className="w-full accent-black h-2.5 bg-slate-200 rounded-lg cursor-pointer"
                  />
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-800 font-bold">Estimated Roundtrip: <strong>{distanceKm} KM</strong></span>
                    <span className="text-xs text-slate-600 font-medium">Billable: {billableKm} KM</span>
                  </div>
                  <input
                    type="range"
                    min={100}
                    max={2500}
                    step={50}
                    value={distanceKm}
                    onChange={(e) => setDistanceKm(Number(e.target.value))}
                    className="w-full accent-black h-2.5 bg-slate-200 rounded-lg cursor-pointer"
                  />
                </div>

                <div className="pt-2 border-t border-slate-200 text-xs text-slate-600 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Rajasthan Outstation Cab Rule: Minimum 250 KM per calendar day applied automatically.</span>
                </div>
              </div>
            </div>

            {/* Right Column: Live Fare Card with Photo & WhatsApp Trigger */}
            <div className="lg:col-span-5 p-6 sm:p-7 rounded-3xl bg-white border-2 border-slate-900 shadow-2xl space-y-5">
              
              {/* Selected Car Highlight */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 h-44">
                <img
                  src={selectedVehicle.image}
                  alt={selectedVehicle.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4 text-white">
                  <span className="text-[10px] font-bold bg-emerald-500 text-white px-2 py-0.5 rounded w-fit mb-1">
                    {selectedVehicle.tag}
                  </span>
                  <p className="text-base font-black">{selectedVehicle.name}</p>
                  <p className="text-xs text-slate-300">{selectedVehicle.seats} • ₹{selectedVehicle.rate}/KM</p>
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="space-y-2 text-xs sm:text-sm">
                <div className="flex justify-between text-slate-600">
                  <span>Billable Running ({billableKm} KM @ ₹{selectedVehicle.rate}/KM):</span>
                  <span className="font-bold text-slate-900">₹{baseFare.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Driver Bhatta ({days} days @ ₹{selectedVehicle.driver}):</span>
                  <span className="font-bold text-slate-900">₹{driverAllowance.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-slate-500 text-xs">
                  <span>Tolls, State Tax & Parking:</span>
                  <span>Actual at toll plaza</span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-baseline justify-between">
                <span className="text-sm font-bold text-slate-700 uppercase tracking-wider">Estimated Fare:</span>
                <span className="text-3xl font-black text-slate-950 font-mono">₹{estimatedTotal.toLocaleString('en-IN')}</span>
              </div>

              <a
                href={`https://wa.me/918000907924?text=${encodeURIComponent(fareWhatsAppMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-full wix-btn-green text-xs sm:text-sm shadow-lg flex items-center justify-center gap-2 active:scale-95"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Build This Calculator For My Website</span>
              </a>

              <p className="text-xs text-center text-slate-500">
                ✓ Included in <strong>Growth Business Suite (₹9,999)</strong> with ₹0/mo hosting
              </p>
            </div>

          </div>
        </div>

        {/* 2-Column Split: Google Maps 3-Pack + Physical NFC Acrylic Standee */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 2: Google Maps 3-Pack */}
          <div id="google-maps" className="wix-card p-8 space-y-6 bg-white border border-slate-200">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                GOOGLE MAPS 3-PACK
              </span>
              <span className="text-xs font-extrabold text-slate-900">
                RANK #1 VISIBILITY
              </span>
            </div>

            <h3 className="text-2xl font-black text-slate-950">
              Rank in Google Maps Top 3 Results
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              When someone searches *"cab service near me"* or *"doctor in Vaishali Nagar"*, Google displays 3 businesses at the very top. We optimize your Google Business Profile (GBP), embed geotagged storefront photos, and align local citations so your shop captures all local search volume.
            </p>

            {/* Mock Google Search Card with verified proof */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex items-center gap-2 text-xs text-slate-500 border-b border-slate-200 pb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-600"></span>
                <span>Google Search: "Outstation cab rental Jaipur"</span>
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Bhumika Tour & Travels</h4>
                  <div className="flex items-center gap-1.5 text-xs text-yellow-500 mt-0.5">
                    <span>4.9 ★★★★★</span>
                    <span className="text-slate-600 text-[11px]">(140+ Google Reviews)</span>
                  </div>
                  <p className="text-xs text-emerald-700 font-semibold mt-1">Open 24 Hours • Outstation Cabs</p>
                </div>
                <div>
                  <span className="px-3.5 py-1.5 rounded-full bg-slate-900 text-white text-xs font-bold">
                    Call Direct
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-2 pt-2 text-xs text-slate-700 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Geotagged image metadata & service area geo-fencing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Schema.org JSON-LD integration for instant Google crawling</span>
              </div>
            </div>
          </div>

          {/* Card 3: Physical Laser-Engraved NFC Review Standee */}
          <div id="nfc-standees" className="wix-card p-8 space-y-6 bg-white border border-slate-200">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-purple-100 text-purple-800 border border-purple-200">
                PHYSICAL HARDWARE
              </span>
              <span className="text-xs font-extrabold text-slate-900">
                COUNTER STAND
              </span>
            </div>

            <h3 className="text-2xl font-black text-slate-950">
              Laser-Cut Acrylic NFC/QR Review Standee
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Placed directly on your billing or reception counter. When a satisfied walk-in customer is paying, they tap their smartphone on the acrylic stand — their phone screen instantly opens your Google 5-star review page!
            </p>

            {/* Standee Mockup Visual Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-tr from-slate-50 via-indigo-50/40 to-slate-100 border border-slate-200 text-center space-y-3">
              <div className="inline-block p-4 rounded-2xl bg-white shadow-sm border border-slate-200 text-slate-900">
                <QrCode className="w-8 h-8 mx-auto" />
              </div>
              <div>
                <p className="text-xs font-black text-slate-900 tracking-wider">TAP PHONE HERE OR SCAN QR</p>
                <p className="text-xs text-emerald-700 font-bold mt-0.5">Rate Us 5-Stars on Google</p>
                <p className="text-xs text-slate-500 mt-1">High-grade laser engraved transparent acrylic</p>
              </div>
              <div className="text-xs font-bold text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full w-fit mx-auto border border-indigo-200">
                INCLUDED FREE IN GROWTH & ENTERPRISE TIERS
              </div>
            </div>

            <div className="space-y-2 pt-2 text-xs text-slate-700 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>NTAG213 high-speed NFC microchip embedded</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Delivered physically to your storefront anywhere in North India</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
