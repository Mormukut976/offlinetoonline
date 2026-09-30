import Link from "next/link";
import { db } from "@/lib/db";
import { formatCurrency, formatDate } from "@/lib/utils";
import {
  Users,
  CheckCircle2,
  TrendingUp,
  Clock,
  ArrowUpRight,
  Phone,
  MessageSquare,
  Sparkles,
  ExternalLink,
  ChevronRight,
  SearchCode,
  FilePlus,
  Kanban
} from "lucide-react";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const [
    totalLeads,
    convertedLeads,
    interestedLeads,
    quotations,
    projects,
    recentActivities,
    urgentFollowUps,
    leadsByCategory
  ] = await Promise.all([
    db.lead.count(),
    db.lead.count({ where: { status: "converted" } }),
    db.lead.count({ where: { status: "interested" } }),
    db.quotation.findMany({ select: { total: true, status: true } }),
    db.project.findMany({ select: { price: true, paidAmount: true, status: true } }),
    db.activity.findMany({
      take: 6,
      orderBy: { createdAt: "desc" },
      include: { lead: { select: { businessName: true, phone: true } } }
    }),
    db.lead.findMany({
      where: {
        status: { in: ["new", "contacted", "interested"] }
      },
      take: 5,
      orderBy: { createdAt: "desc" }
    }),
    db.lead.groupBy({
      by: ["category"],
      _count: { category: true }
    })
  ]);

  const pipelineRevenue = quotations.reduce((acc, q) => acc + q.total, 0);
  const collectedRevenue = projects.reduce((acc, p) => acc + p.paidAmount, 0);
  const conversionRate = totalLeads > 0 ? Math.round((convertedLeads / totalLeads) * 100) : 0;

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12">
      {/* Welcome Banner with Divine Glassmorphism */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-950/30 via-slate-900/35 to-slate-950/45 backdrop-blur-xl border border-indigo-500/25 p-8 shadow-2xl">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2.5">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/15 text-amber-300 border border-amber-500/30">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                ॥ श्री राधा कृष्णा ॥
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                Founder Operating System • Jaipur Central
              </span>
            </div>
            <h1 className="text-3xl font-black text-white tracking-tight">
              Agency Command Center
            </h1>
            <p className="text-slate-300 text-sm max-w-2xl leading-relaxed">
              Dominating Pan-India local business digital transformations across 28 states & 100+ commercial hubs. Verified live proof:{" "}
              <a
                href="https://bhumikatourandtravels.world/"
                target="_blank"
                rel="noreferrer"
                className="text-amber-400 font-semibold underline underline-offset-4 hover:text-amber-300"
              >
                Bhumika Tour & Travels (Google Search Console Page 1)
              </a>.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/scripts"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-lg shadow-indigo-600/30 transition-all hover:scale-102"
            >
              <SearchCode className="w-4 h-4" />
              Scrape New Leads
            </Link>
            <Link
              href="/quotation"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-white font-medium text-xs border border-white/10 transition-all backdrop-blur-md"
            >
              <FilePlus className="w-4 h-4 text-amber-400" />
              Create Quotation
            </Link>
          </div>
        </div>
        <div className="absolute right-0 top-0 -mt-10 -mr-10 w-96 h-96 rounded-full bg-indigo-600/10 blur-3xl pointer-events-none" />
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="glass-card rounded-xl p-5 border border-slate-800">
          <div className="flex items-center justify-between text-slate-400 mb-3">
            <span className="text-xs font-semibold uppercase tracking-wider">Total Leads</span>
            <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <div className="text-3xl font-bold text-white tracking-tight">{totalLeads}</div>
          <p className="text-xs text-emerald-400 mt-2 flex items-center gap-1 font-medium">
            <ArrowUpRight className="w-3.5 h-3.5" />
            {interestedLeads} high-intent prospects
          </p>
        </div>

        <div className="glass-card rounded-xl p-5 border border-slate-800">
          <div className="flex items-center justify-between text-slate-400 mb-3">
            <span className="text-xs font-semibold uppercase tracking-wider">Conversion Rate</span>
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
            </div>
          </div>
          <div className="text-3xl font-bold text-white tracking-tight">{conversionRate}%</div>
          <p className="text-xs text-slate-400 mt-2 font-medium">
            {convertedLeads} paying client{convertedLeads === 1 ? "" : "s"} closed
          </p>
        </div>

        <div className="glass-card rounded-xl p-5 border border-slate-800">
          <div className="flex items-center justify-between text-slate-400 mb-3">
            <span className="text-xs font-semibold uppercase tracking-wider">Pipeline Revenue</span>
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400">
              <TrendingUp className="w-4 h-4" />
            </div>
          </div>
          <div className="text-3xl font-bold text-amber-400 tracking-tight">{formatCurrency(pipelineRevenue)}</div>
          <p className="text-xs text-slate-400 mt-2 font-medium">
            {quotations.length} active quotations sent
          </p>
        </div>

        <div className="glass-card rounded-xl p-5 border border-slate-800">
          <div className="flex items-center justify-between text-slate-400 mb-3">
            <span className="text-xs font-semibold uppercase tracking-wider">Collected Cashflow</span>
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
            </div>
          </div>
          <div className="text-3xl font-bold text-emerald-400 tracking-tight">{formatCurrency(collectedRevenue)}</div>
          <p className="text-xs text-slate-400 mt-2 font-medium">
            {projects.length} projects in production
          </p>
        </div>
      </div>

      {/* Main Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Urgent Leads for Outreach */}
        <div className="lg:col-span-2 space-y-6">
          <div className="glass-card rounded-2xl p-6 border border-slate-800">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-5">
              <div>
                <h3 className="font-bold text-white text-base flex items-center gap-2">
                  <Clock className="w-4 h-4 text-indigo-400" />
                  Priority Follow-Up Queue
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">Leads ready for 1-click WhatsApp pitch</p>
              </div>
              <Link href="/leads" className="text-xs text-indigo-400 hover:text-indigo-300 font-medium flex items-center gap-1">
                View All Leads ({totalLeads}) <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="divide-y divide-slate-800/80">
              {urgentFollowUps.map((lead) => (
                <div key={lead.id} className="py-4 flex items-center justify-between gap-4 group">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <Link href={`/leads/${lead.id}`} className="font-semibold text-white text-sm hover:text-indigo-400 transition-colors truncate">
                        {lead.businessName}
                      </Link>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-slate-800 text-slate-300 border border-slate-700">
                        {lead.category.replace("_", " ")}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mt-1 flex items-center gap-3">
                      <span>📍 {lead.city}</span>
                      <span>📞 {lead.phone}</span>
                      {lead.website ? (
                        <span className="text-emerald-400">🌐 Has Website</span>
                      ) : (
                        <span className="text-rose-400 font-semibold">❌ No Website (HOT LEAD)</span>
                      )}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <a
                      href={`https://wa.me/${lead.phone.replace(/[^0-9]/g, "")}?text=Namaste%20${encodeURIComponent(lead.ownerName || lead.businessName)}%20ji,%20main%20Raja%20(O2O%20Digital)%20se%20bol%20raha%20hoon.`}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-600/20 text-emerald-400 hover:bg-emerald-600/30 border border-emerald-500/30 flex items-center gap-1.5 transition-all"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Pitch WhatsApp</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Production Status Banner */}
          <div className="glass-card rounded-2xl p-6 border border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                <Kanban className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">Production Pipeline Active</h4>
                <p className="text-xs text-slate-400 mt-0.5">Track deliverables, revisions, and client handover</p>
              </div>
            </div>
            <Link
              href="/production"
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 transition-all flex items-center gap-1.5"
            >
              Open Kanban Board <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Right Column: Category Distribution & Activities */}
        <div className="space-y-6">
          {/* Category Breakdown */}
          <div className="glass-card rounded-2xl p-6 border border-slate-800">
            <h3 className="font-bold text-white text-base pb-3 border-b border-slate-800 mb-4">
              Niche Market Opportunities
            </h3>
            <div className="space-y-3">
              {leadsByCategory.map((c) => (
                <div key={c.category} className="flex items-center justify-between text-xs">
                  <span className="text-slate-300 font-medium capitalize">
                    {c.category.replace("_", " ")}
                  </span>
                  <div className="flex items-center gap-3">
                    <div className="w-24 bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-indigo-500 h-full rounded-full"
                        style={{ width: `${Math.min(100, (c._count.category / Math.max(totalLeads, 1)) * 100)}%` }}
                      />
                    </div>
                    <span className="text-white font-bold w-6 text-right">{c._count.category}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity Log */}
          <div className="glass-card rounded-2xl p-6 border border-slate-800">
            <h3 className="font-bold text-white text-base pb-3 border-b border-slate-800 mb-4">
              Recent Activity Feed
            </h3>
            <div className="space-y-3.5">
              {recentActivities.map((act) => (
                <div key={act.id} className="text-xs flex gap-3">
                  <span className="w-2 h-2 rounded-full bg-indigo-400 mt-1.5 shrink-0" />
                  <div>
                    <p className="text-slate-300 font-medium">{act.content}</p>
                    <p className="text-[10px] text-slate-500 mt-0.5">
                      {act.lead?.businessName} • {formatDate(act.createdAt)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
