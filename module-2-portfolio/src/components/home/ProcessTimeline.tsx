import React from 'react';
import { MessageSquare, Cpu, Rocket, ShieldCheck } from 'lucide-react';

export default function ProcessTimeline() {
  const steps = [
    {
      step: '01',
      title: '15-Min Onboarding on WhatsApp',
      desc: 'Send your business name, photo of storefront, phone number, and services list. No complicated software or paper contracts.',
      icon: MessageSquare,
      time: 'Hour 0-2'
    },
    {
      step: '02',
      title: 'High-Speed Jamstack & Schema Build',
      desc: 'We engineer your lightning-fast web code, embed Google 3-Pack Schema.org tags, and connect zero-cost edge CDN hosting.',
      icon: Cpu,
      time: 'Hour 2-24'
    },
    {
      step: '03',
      title: 'Interactive Tools & WhatsApp Hookup',
      desc: 'We wire up your custom Outstation Fare Calculator, Doctor Appointment Picker, or Quote Estimator with direct WhatsApp triggers.',
      icon: Rocket,
      time: 'Hour 24-40'
    },
    {
      step: '04',
      title: 'Live Launch & NFC Standee Handover',
      desc: 'Your domain goes live! Domain & code ownership is transferred to you, and your custom laser acrylic NFC table standee is dispatched.',
      icon: ShieldCheck,
      time: 'Hour 48'
    }
  ];

  return (
    <section className="py-20 bg-[#080c14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            Turnkey Delivery Engine
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            From Shop To Live Brand in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">
              48 Hours Flat
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            We respect your time. Our streamlined deployment pipeline ensures zero downtime and rapid customer acquisition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="glass-card p-6 rounded-2xl relative space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black text-indigo-500/30 font-mono">{item.step}</span>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                    {item.time}
                  </span>
                </div>
                <div className="w-10 h-10 rounded-xl bg-indigo-600/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">{item.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
