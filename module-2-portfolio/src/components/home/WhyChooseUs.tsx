import React from 'react';
import { XCircle, CheckCircle, ShieldCheck, Zap } from 'lucide-react';

export default function WhyChooseUs() {
  const comparison = [
    {
      feature: 'Monthly Server / Hosting Bill',
      traditional: '₹1,500 - ₹3,000 / month forever',
      o2o: '₹0 / Month Lifetime (Jamstack Edge)'
    },
    {
      feature: 'Mobile Page Load Speed',
      traditional: '4 to 7 seconds (Bloated plugins)',
      o2o: 'Sub-second (0.6 - 0.9s, 100/100 PageSpeed)'
    },
    {
      feature: 'Customer Lead Routing',
      traditional: 'Complex forms or email in spam',
      o2o: '1-Tap Direct WhatsApp to Owner Mobile'
    },
    {
      feature: 'Google Maps 3-Pack SEO',
      traditional: 'Charged ₹10,000/mo extra retainer',
      o2o: 'Included in Growth & Domination Packages'
    },
    {
      feature: 'Physical Counter Standee',
      traditional: 'Not provided (Online only)',
      o2o: 'Custom Laser Acrylic NFC/QR Standee included'
    },
    {
      feature: 'Code & Domain Ownership',
      traditional: 'Hostage by agency locking you in',
      o2o: '100% Full Ownership handed to you on Day 1'
    }
  ];

  return (
    <section className="py-20 bg-[#070b13]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            The Anti-Agency Difference
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Why Local Business Owners Choose{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-indigo-400">
              O2O Digital
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Unlike typical web agencies that charge recurring monthly retainers for slow WordPress sites, we build fast, permanent, zero-maintenance assets.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-2xl border border-slate-800 glass-panel shadow-2xl">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-900/80 text-slate-300">
                <th className="py-4 px-5 font-bold uppercase tracking-wider">Capability</th>
                <th className="py-4 px-5 font-bold text-red-400 uppercase tracking-wider">Typical Web Agency / Freelancer</th>
                <th className="py-4 px-5 font-bold text-emerald-400 uppercase tracking-wider bg-emerald-950/20">O2O Digital (Raja Singh Chauhan)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/70">
              {comparison.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-900/40 transition-colors">
                  <td className="py-3.5 px-5 font-semibold text-white">{row.feature}</td>
                  <td className="py-3.5 px-5 text-slate-400 flex items-center gap-2">
                    <XCircle className="w-4 h-4 text-red-400 shrink-0" />
                    <span>{row.traditional}</span>
                  </td>
                  <td className="py-3.5 px-5 font-bold text-emerald-300 bg-emerald-950/10">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{row.o2o}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}
