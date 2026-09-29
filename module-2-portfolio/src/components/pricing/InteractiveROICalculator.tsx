'use client';

import React, { useState } from 'react';
import { Calculator, MessageSquare, ArrowRight, ShieldCheck, Car, Sparkles, DollarSign } from 'lucide-react';
import { formatINR } from '@/lib/utils';

export default function InteractiveROICalculator() {
  const [activeTab, setActiveTab] = useState<'fare' | 'roi'>('fare');

  // Cab Fare Calculator State
  const [vehicle, setVehicle] = useState<'dzire' | 'ertiga' | 'innova' | 'tempo'>('ertiga');
  const [days, setDays] = useState<number>(2);
  const [distanceKm, setDistanceKm] = useState<number>(550);

  const vehicleRates = {
    dzire: { name: 'Swift Dzire (Sedan)', rate: 11, minPerDay: 250, driver: 300 },
    ertiga: { name: 'Maruti Ertiga (SUV 6+1)', rate: 14, minPerDay: 250, driver: 350 },
    innova: { name: 'Innova Crysta (Luxury 7+1)', rate: 18, minPerDay: 250, driver: 400 },
    tempo: { name: 'Tempo Traveller (12/17 Seater)', rate: 24, minPerDay: 250, driver: 500 }
  };

  const selectedVehicle = vehicleRates[vehicle];
  const minBillableKm = days * selectedVehicle.minPerDay;
  const billableKm = Math.max(distanceKm, minBillableKm);
  const baseFare = billableKm * selectedVehicle.rate;
  const driverAllowance = days * selectedVehicle.driver;
  const estimatedTotal = baseFare + driverAllowance;

  // ROI Calculator State
  const [currentAggregatorSpend, setCurrentAggregatorSpend] = useState<number>(12000);
  const [avgTicketSize, setAvgTicketSize] = useState<number>(4500);

  const annualAggregatorLoss = currentAggregatorSpend * 12;
  const oneTimeO2OCost = 9999;
  const firstYearSavings = annualAggregatorLoss - oneTimeO2OCost;
  const estimatedDirectLeads = Math.round(currentAggregatorSpend / 200) + 15;

  const fareWhatsAppMsg = `Namaste Raja bhai! I tested the Live Cab Fare Calculator on your website for ${selectedVehicle.name} (${days} Days, ${distanceKm} KM = ₹${estimatedTotal}). I want a similar interactive tool for my business!`;
  const roiWhatsAppMsg = `Namaste Raja bhai! I calculated my aggregator savings: I spend ₹${currentAggregatorSpend}/month on Justdial/Indiamart. I want to switch to O2O Digital (Growth Suite ₹9,999) to save ₹${firstYearSavings} this year.`;

  return (
    <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-indigo-500/30 shadow-2xl">
      
      {/* Tab Switcher */}
      <div className="flex items-center justify-center p-1.5 rounded-2xl bg-slate-900/90 border border-slate-800 max-w-md mx-auto mb-8">
        <button
          onClick={() => setActiveTab('fare')}
          className={`flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all ${
            activeTab === 'fare'
              ? 'bg-gradient-to-r from-indigo-600 to-indigo-500 text-white shadow-lg shadow-indigo-500/20'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Car className="w-4 h-4" />
          <span>Cab Fare Tool (Live Demo)</span>
        </button>
        <button
          onClick={() => setActiveTab('roi')}
          className={`flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all ${
            activeTab === 'roi'
              ? 'bg-gradient-to-r from-emerald-600 to-teal-500 text-white shadow-lg shadow-emerald-500/20'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Sparkles className="w-4 h-4 text-emerald-400" />
          <span>Aggregator vs O2O ROI</span>
        </button>
      </div>

      {/* Tab 1: Live 200 KM Outstation Cab Fare Calculator Demo */}
      {activeTab === 'fare' && (
        <div className="space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-1.5">
            <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">
              As Built For Bhumika Tour & Travels
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Interactive 200 KM Outstation Fare Engine
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Customers love instant clarity. Move the sliders below to see how this tool calculates real fares and generates ready-to-book WhatsApp messages.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Controls */}
            <div className="lg:col-span-7 space-y-6 bg-slate-900/60 p-6 rounded-2xl border border-slate-800">
              
              {/* Vehicle Selection */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2.5">
                  Select Vehicle Category
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {(Object.keys(vehicleRates) as Array<keyof typeof vehicleRates>).map((vKey) => (
                    <button
                      key={vKey}
                      type="button"
                      onClick={() => setVehicle(vKey)}
                      className={`p-3 rounded-xl text-left border text-xs font-medium transition-all ${
                        vehicle === vKey
                          ? 'bg-indigo-600/20 border-indigo-500 text-white shadow-md'
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <div className="font-bold text-white">{vehicleRates[vKey].name.split(' ')[0]}</div>
                      <div className="text-[11px] text-emerald-400 font-mono mt-0.5">₹{vehicleRates[vKey].rate}/KM</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Days Slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-medium text-slate-300">
                  <span>Trip Duration: <strong>{days} Days</strong></span>
                  <span className="text-indigo-400">Min {minBillableKm} KM (250 KM/day rule)</span>
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

              {/* Distance Slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-medium text-slate-300">
                  <span>Estimated Total Distance: <strong>{distanceKm} KM</strong></span>
                  <span className="text-slate-400">Round-trip</span>
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

              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-[11px] text-slate-400 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Rajasthan standard commercial cab rule: Minimum 250 KM per calendar day applied automatically.</span>
              </div>
            </div>

            {/* Live Calculation Output Card */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-gradient-to-br from-indigo-950/40 to-slate-900 border border-indigo-500/30 shadow-xl space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Estimated Fare</span>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400 font-bold">
                  {selectedVehicle.name.split(' ')[0]}
                </span>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between text-slate-300">
                  <span>Billable Running ({billableKm} KM @ ₹{selectedVehicle.rate}/KM):</span>
                  <span className="font-semibold text-white">₹{baseFare.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Driver Allowance ({days} days @ ₹{selectedVehicle.driver}):</span>
                  <span className="font-semibold text-white">₹{driverAllowance.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-slate-400 text-[11px]">
                  <span>Tolls, State Tax & Parking:</span>
                  <span>Actual at toll plaza</span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-baseline justify-between">
                <span className="text-sm font-bold text-white">Total Estimated Fare:</span>
                <span className="text-2xl font-black text-emerald-400">₹{estimatedTotal.toLocaleString('en-IN')}</span>
              </div>

              <a
                href={`https://wa.me/918000907924?text=${encodeURIComponent(fareWhatsAppMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-bold text-xs sm:text-sm shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 transition-all"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>I Want This Calculator For My Business</span>
              </a>

              <p className="text-[11px] text-center text-slate-400">
                Included in our <strong>Growth Business Suite (₹9,999)</strong>
              </p>
            </div>

          </div>
        </div>
      )}

      {/* Tab 2: ROI vs Aggregator Portal (Justdial / Indiamart) */}
      {activeTab === 'roi' && (
        <div className="space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-1.5">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
              Stop Wasting Thousands on Aggregators
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Aggregator Commission vs O2O Jamstack Asset
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Justdial & Indiamart charge ₹10,000 to ₹25,000 every single month and share the exact same inquiry with 5 competitors. Here is what happens when you own your own digital presence.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Input Controls */}
            <div className="lg:col-span-7 space-y-6 bg-slate-900/60 p-6 rounded-2xl border border-slate-800">
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-medium text-slate-300">
                  <span>Monthly Spend on Portals / Aggregators:</span>
                  <span className="text-emerald-400 font-bold text-sm">₹{currentAggregatorSpend.toLocaleString('en-IN')} / mo</span>
                </div>
                <input
                  type="range"
                  min={3000}
                  max={50000}
                  step={1000}
                  value={currentAggregatorSpend}
                  onChange={(e) => setCurrentAggregatorSpend(Number(e.target.value))}
                  className="w-full accent-emerald-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-medium text-slate-300">
                  <span>Average Profit Per Customer Order:</span>
                  <span className="text-indigo-400 font-bold text-sm">₹{avgTicketSize.toLocaleString('en-IN')}</span>
                </div>
                <input
                  type="range"
                  min={1000}
                  max={25000}
                  step={500}
                  value={avgTicketSize}
                  onChange={(e) => setAvgTicketSize(Number(e.target.value))}
                  className="w-full accent-indigo-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
                  <span className="text-slate-400 block">Aggregator 1-Year Drain:</span>
                  <span className="text-lg font-bold text-red-400 mt-1 block">
                    ₹{annualAggregatorLoss.toLocaleString('en-IN')}
                  </span>
                  <span className="text-[10px] text-slate-500">Re-billed every year forever</span>
                </div>
                <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/30">
                  <span className="text-emerald-400 block font-semibold">O2O Digital 1-Time Setup:</span>
                  <span className="text-lg font-bold text-white mt-1 block">
                    ₹{oneTimeO2OCost.toLocaleString('en-IN')}
                  </span>
                  <span className="text-[10px] text-emerald-400">₹0 monthly hosting forever</span>
                </div>
              </div>
            </div>

            {/* Savings Result Card */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-gradient-to-br from-emerald-950/40 to-slate-900 border border-emerald-500/30 shadow-xl space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">1-Year Net Savings</span>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold">
                  PROFIT
                </span>
              </div>

              <div className="space-y-3">
                <div>
                  <span className="text-xs text-slate-400">Money Kept in Your Bank Account:</span>
                  <div className="text-3xl font-black text-emerald-400 mt-1">
                    +₹{firstYearSavings.toLocaleString('en-IN')}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 space-y-1.5">
                  <div className="flex items-center gap-1.5 text-white font-semibold">
                    <DollarSign className="w-4 h-4 text-emerald-400" />
                    <span>Estimated Direct Monthly Leads:</span>
                  </div>
                  <p className="text-base font-bold text-white">
                    ~{estimatedDirectLeads} Exclusive Leads / Month
                  </p>
                  <p className="text-[11px] text-slate-400">
                    Zero competitors sharing this inquiry. Straight to your WhatsApp.
                  </p>
                </div>
              </div>

              <a
                href={`https://wa.me/918000907924?text=${encodeURIComponent(roiWhatsAppMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 text-white font-bold text-xs sm:text-sm shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 transition-all"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Save ₹{firstYearSavings.toLocaleString('en-IN')} With Raja Singh</span>
              </a>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
