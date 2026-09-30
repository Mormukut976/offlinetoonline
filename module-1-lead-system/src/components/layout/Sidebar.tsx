"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  FileText,
  BadgePercent,
  Kanban,
  SearchCode,
  Layers,
  Sparkles,
  ExternalLink,
  ChevronRight,
  PhoneCall,
  Settings
} from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard },
  { href: "/leads", label: "Leads CRM", icon: Users, badge: "Live" },
  { href: "/follow-ups", label: "Follow-up War Room", icon: PhoneCall, badge: "Hot" },
  { href: "/quotation", label: "Quotations", icon: FileText },
  { href: "/rate-card", label: "Rate Card", icon: BadgePercent },
  { href: "/production", label: "Production Pipeline", icon: Kanban },
  { href: "/scripts", label: "Lead Extractor", icon: SearchCode, badge: "OSM" },
  { href: "/demos", label: "Demo Gallery", icon: Layers },
  { href: "/settings", label: "AI & SMTP Engine", icon: Settings, badge: "Groq" }
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-[#080C14]/80 backdrop-blur-2xl border-r border-white/5 flex flex-col h-screen fixed left-0 top-0 z-40 select-none shadow-xl">
      {/* Brand Header */}
      <div className="p-5 border-b border-white/5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-amber-400 flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
            <Sparkles className="w-5 h-5 text-white animate-pulse" />
          </div>
          <div>
            <div className="font-bold text-white tracking-wide text-base flex items-center gap-1.5">
              O2O <span className="text-indigo-400">Digital</span>
            </div>
            <p className="text-[11px] text-slate-400 font-medium">Agency Operating System</p>
          </div>
        </Link>
      </div>

      {/* Nav Menu */}
      <div className="flex-1 py-4 px-3 overflow-y-auto space-y-1">
        <div className="px-3 pb-2 text-[10px] font-bold uppercase tracking-wider text-slate-500 flex items-center justify-between">
          <span>Core Operations</span>
          <span className="text-amber-400/80 font-serif">॥ राधे ॥</span>
        </div>

        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-all group",
                isActive
                  ? "bg-indigo-600/20 text-indigo-300 border border-indigo-500/30 shadow-sm shadow-indigo-500/10 backdrop-blur-md"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/40"
              )}
            >
              <div className="flex items-center gap-3">
                <Icon className={cn("w-4 h-4 transition-colors", isActive ? "text-indigo-400" : "text-slate-500 group-hover:text-slate-300")} />
                <span>{item.label}</span>
              </div>
              {item.badge && (
                <span className={cn(
                  "text-[10px] font-bold px-1.5 py-0.5 rounded-full uppercase tracking-wider",
                  isActive ? "bg-indigo-500/30 text-indigo-200" : "bg-slate-800/80 text-slate-400"
                )}>
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}

        <div className="pt-6 px-3 pb-2 text-[10px] font-bold uppercase tracking-wider text-slate-500">
          Public Showcases
        </div>

        <Link
          href="/rate-card/public"
          target="_blank"
          className="flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-emerald-400 hover:bg-emerald-950/20 transition-all group border border-transparent hover:border-emerald-500/20"
        >
          <div className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span>Public Rate Card</span>
          </div>
          <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-400" />
        </Link>

        <a
          href="https://bhumikatourandtravels.world/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-amber-400 hover:bg-amber-950/20 transition-all group border border-transparent hover:border-amber-500/20"
        >
          <div className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span>Client Case Study #1</span>
          </div>
          <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-amber-400" />
        </a>
      </div>

      {/* Footer User Info with Divine Touch */}
      <div className="p-4 border-t border-white/5 bg-[#060810]/70 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-500/20 to-indigo-500/20 border border-amber-400/40 flex items-center justify-center font-bold text-amber-300 text-xs">
            RC
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-white truncate">Raja Singh Chauhan</p>
            <p className="text-[11px] text-amber-300/80 flex items-center gap-1 font-medium">
              <span>॥ जय श्री कृष्णा ॥</span>
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
