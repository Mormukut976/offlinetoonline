import React from 'react';
import PricingTable from '@/components/pricing/PricingTable';
import InteractiveROICalculator from '@/components/pricing/InteractiveROICalculator';
import CTASection from '@/components/home/CTASection';
import { ShieldCheck, CheckCircle2, HelpCircle } from 'lucide-react';

export default function PricingPage() {
  const faqs = [
    {
      q: 'Kya sach mein monthly hosting ka koi kharcha nahi aayega?',
      a: 'Haan, bilkul 100% sach hai! Hum Jamstack architecture use karte hain jo Netlify/Vercel ke free global edge network par chalti hai. Isme WordPress ki tarah database ya shared cPanel server ki zaroorat nahi hoti, isliye lifetime ₹0 server maintenance bill rehta hai.'
    },
    {
      q: 'Website kitne din mein live ho jayegi?',
      a: 'Starter package 48 hours ke andar live hota hai. Growth package 72 hours mein aur custom calculators ke saath complete launch hota hai.'
    },
    {
      q: 'Payment kaise karni hogi?',
      a: 'Hamara official PhonePe / GooglePay UPI ID: 80009079241@ybl hai. Onboarding ke waqt 50% advance token rehta hai aur baki 50% final live website check karne ke baad.'
    },
    {
      q: 'NFC Acrylic Standee shop par kaise deliver hoga?',
      a: 'Growth aur Enterprise packages mein custom laser-engraved acrylic NFC standee shamil hai. Website live hone ke 4-5 business days ke andar yeh standee aapke shop address par courier se deliver ho jata hai.'
    }
  ];

  return (
    <div className="py-12 lg:py-20 space-y-20">
      <PricingTable />

      {/* ROI Calculator in Pricing */}
      <section className="py-12 bg-[#060a12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Calculate Your 1-Year Financial Gain
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              See how much you save by replacing recurring aggregator fees with your own high-speed asset.
            </p>
          </div>
          <InteractiveROICalculator />
        </div>
      </section>

      {/* FAQs */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
            Frequently Asked Questions
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Common Doubts Cleared Upfront
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="glass-card p-6 rounded-2xl space-y-2 border border-slate-800">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{faq.q}</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pl-6">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
