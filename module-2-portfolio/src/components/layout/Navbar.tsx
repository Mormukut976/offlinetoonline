'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { COMPANY } from '@/data/company';
import { MessageSquare, Phone, Menu, X, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Case Studies', href: '/portfolio' },
    { name: 'Packages & Pricing', href: '/pricing' },
    { name: 'Live Calculator', href: '/calculator' },
    { name: 'About Raja Singh', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <header className="sticky top-0 z-50 glass-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-emerald-400 p-0.5 shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-all">
              <div className="w-full h-full bg-[#080c14] rounded-[10px] flex items-center justify-center">
                <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400 text-lg">O2O</span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg text-white tracking-tight group-hover:text-indigo-300 transition-colors">
                  Offline to Online
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Jaipur HQ
                </span>
              </div>
              <p className="text-xs text-slate-400 font-medium">
                Founder & CEO: <span className="text-slate-200">Raja Singh Chauhan</span>
              </p>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-all ${
                    isActive
                      ? 'text-white bg-indigo-600/15 border border-indigo-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Quick CTA Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${COMPANY.rawPhone}`}
              className="hidden md:flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white px-3 py-2 rounded-lg bg-slate-800/50 border border-slate-700/60 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>+91 80009 07924</span>
            </a>

            <a
              href={`https://wa.me/918000907924?text=${encodeURIComponent('Namaste Raja bhai! I want to discuss digitizing my business with O2O Digital.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-bold px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white shadow-lg shadow-emerald-500/20 transition-all active:scale-95"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>WhatsApp Strategy</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-white rounded-lg bg-slate-800/60 border border-slate-700/50"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-800 bg-[#0a0f1d] px-4 pt-3 pb-6 space-y-3">
          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 text-sm font-medium rounded-lg block ${
                    isActive
                      ? 'text-white bg-indigo-600/20 border border-indigo-500/30'
                      : 'text-slate-300 hover:bg-slate-800/50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="pt-4 border-t border-slate-800 space-y-2">
            <a
              href={`tel:${COMPANY.rawPhone}`}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-800 text-slate-200 text-sm font-semibold border border-slate-700"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              Call Raja Singh: +91 80009 07924
            </a>
            <a
              href={`https://wa.me/918000907924?text=${encodeURIComponent('Namaste Raja bhai! I want to discuss digitizing my business with O2O Digital.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-500 text-white text-sm font-bold shadow-lg shadow-emerald-500/20"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              Chat on WhatsApp Directly
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
