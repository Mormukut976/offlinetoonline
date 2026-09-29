'use client';

import React, { useState } from 'react';
import { Calculator, MessageSquare, ArrowRight, ShieldCheck, Car, Sparkles, DollarSign, TrendingUp } from 'lucide-react';
import { formatINR } from '@/lib/utils';
import { COMPANY } from '@/data/company';

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

  const fareWhatsAppMsg = `Hello Raja! I tested the Demo Fare Calculator on your website for ${selectedVehicle.name} (${days} Days, ${distanceKm} KM = ₹${estimatedTotal}). I want a similar interactive tool built for my business!`;
  const roiWhatsAppMsg = `Hello Raja! I calculated my aggregator savings on your website: I currently spend ₹${currentAggregatorSpend}/month on directories. I want to deploy the Growth Engine Suite (₹9,999) to save ₹${firstYearSavings} this year.`;

  return (
    <div className="modern-card rounded-3xl p-6 sm:p-10 bg-[#0e101c] border-white/10 shadow-2xl">
      
      {/* Tab Switcher */}
      <div className="flex items-center justify-center p-1.5 rounded-2xl bg-white/5 border border-white/10 max-w-md mx-auto mb-8">
        <button
          onClick={() => setActiveTab('fare')}
          className={`flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
            activeTab === 'fare'
              ? 'bg-violet-600 text-white shadow-lg shadow-violet-600/30'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Car className="w-4 h-4" />
          <span>Demo Outstation Tool</span>
        </button>
        <button
          onClick={() => setActiveTab('roi')}
          className={`flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
            activeTab === 'roi'
              ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <TrendingUp className="w-4 h-4" />
          <span>Aggregator ROI Savings</span>
        </button>
      </div>

      {activeTab === 'fare' ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-1">
              <span className="text-[11px] font-bold text-violet-400 uppercase tracking-wider">Interactive Example</span>
              <h3 className="text-2xl font-black text-white font-heading">
                Rajasthan 250 KM/Day Fare Engine
              </h3>
              <p className="text-xs text-slate-400">
                Calculates calendar days, minimum 250 KM rule, vehicle rates, and driver allowances in real time.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {(Object.keys(vehicleRates) as Array<keyof typeof vehicleRates>).map((key) => (
                <button
                  key={key}
                  onClick={() => setVehicle(key)}
                  className={`p-3 rounded-xl border text-xs font-bold text-left transition-all cursor-pointer ${
                    vehicle === key
                      ? 'border-violet-500 bg-violet-600/20 text-white shadow-sm'
                      : 'border-white/5 bg-white/5 text-slate-300 hover:bg-white/10'
                  }`}
                >
                  <div className="text-[10px] text-slate-400">₹{vehicleRates[key].rate}/KM</div>
                  <div className="truncate mt-0.5">{vehicleRates[key].name.split(' ')[0]}</div>
                </button>
              ))}
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="font-bold text-slate-300">Trip Duration (Days)</span>
                  <span className="font-mono font-bold text-violet-400">{days} Days ({minBillableKm} KM min)</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={days}
                  onChange={(e) => setDays(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-violet-500"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="font-bold text-slate-300">Estimated Total Distance</span>
                  <span className="font-mono font-bold text-cyan-400">{distanceKm} KM</span>
                </div>
                <input
                  type="range"
                  min="200"
                  max="2500"
                  step="50"
                  value={distanceKm}
                  onChange={(e) => setDistanceKm(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 p-6 rounded-2xl bg-[#121528] border border-violet-500/20 space-y-4">
            <div className="flex justify-between items-center pb-3 border-b border-white/10">
              <span className="text-xs font-bold text-slate-400 uppercase">Estimated Quotation</span>
              <span className="px-2 py-0.5 rounded bg-violet-500/20 text-violet-300 text-[10px] font-bold">
                {selectedVehicle.name}
              </span>
            </div>

            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex justify-between">
                <span>Billable Distance ({billableKm} KM @ ₹{selectedVehicle.rate}/KM)</span>
                <span className="font-mono text-white">{formatINR(baseFare)}</span>
              </div>
              <div className="flex justify-between">
                <span>Driver Allowance ({days} Days @ ₹{selectedVehicle.driver}/day)</span>
                <span className="font-mono text-white">{formatINR(driverAllowance)}</span>
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 flex justify-between items-baseline">
              <span className="text-xs font-bold text-slate-200">Total Customer Quote:</span>
              <span className="text-3xl font-black text-emerald-400 font-mono">
                {formatINR(estimatedTotal)}
              </span>
            </div>

            <a
              href={`https://wa.me/${COMPANY.rawPhone}?text=${encodeURIComponent(fareWhatsAppMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full btn-whatsapp-glow py-3 text-xs font-bold flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>Inquire About Custom Calculator</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-1">
              <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider">Directory Replacement</span>
              <h3 className="text-2xl font-black text-white font-heading">
                Stop Paying Monthly Aggregator Fees
              </h3>
              <p className="text-xs text-slate-400">
                Compare your current recurring directory spend with your own permanent digital asset.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between text-xs">
                <span className="font-bold text-slate-300">Monthly Spend on Classified Aggregators</span>
                <span className="font-mono font-bold text-rose-400">{formatINR(currentAggregatorSpend)} / month</span>
              </div>
              <input
                type="range"
                min="3000"
                max="50000"
                step="1000"
                value={currentAggregatorSpend}
                onChange={(e) => setCurrentAggregatorSpend(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-rose-500"
              />
            </div>
          </div>

          <div className="lg:col-span-5 p-6 rounded-2xl bg-[#121528] border border-emerald-500/20 space-y-4">
            <div className="space-y-1">
              <span className="text-xs text-slate-400">Annual Directory Loss</span>
              <div className="text-2xl font-black text-rose-400 font-mono">
                {formatINR(annualAggregatorLoss)} / year
              </div>
            </div>

            <div className="space-y-1 pt-2 border-t border-white/10">
              <span className="text-xs text-slate-400">1st Year Net Savings With O2O Digital</span>
              <div className="text-3xl font-black text-emerald-400 font-mono">
                +{formatINR(firstYearSavings)}
              </div>
              <p className="text-[11px] text-slate-400">After paying the one-time ₹9,999 setup fee with ₹0 hosting forever.</p>
            </div>

            <a
              href={`https://wa.me/${COMPANY.rawPhone}?text=${encodeURIComponent(roiWhatsAppMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full btn-whatsapp-glow py-3 text-xs font-bold flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>Claim These Savings on WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}

    </div>
  );
}
