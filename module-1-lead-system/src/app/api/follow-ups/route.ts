import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  try {
    const allLeads = await db.lead.findMany({
      where: {
        status: {
          in: ["contacted", "interested", "new"]
        }
      },
      orderBy: [
        { followUpDate: "asc" },
        { updatedAt: "desc" }
      ],
      include: {
        activities: {
          orderBy: { createdAt: "desc" },
          take: 3
        }
      }
    });

    const now = new Date();
    now.setHours(23, 59, 59, 999);

    const dueToday = allLeads.filter(l => !l.followUpDate || new Date(l.followUpDate) <= now);
    const upcoming = allLeads.filter(l => l.followUpDate && new Date(l.followUpDate) > now);

    const convertedCount = await db.lead.count({ where: { status: "converted" } });
    const contactedCount = await db.lead.count({ where: { status: { in: ["contacted", "interested"] } } });

    return NextResponse.json({
      success: true,
      stats: {
        dueTodayCount: dueToday.length,
        upcomingCount: upcoming.length,
        contactedCount,
        convertedCount,
        conversionRate: contactedCount > 0 ? Math.round((convertedCount / (contactedCount + convertedCount)) * 100) : 0
      },
      dueToday,
      upcoming
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const {
      leadId,
      actionType, // "call_tomorrow" | "said_thinking" | "price_objection" | "ready_to_close" | "rejected"
      notes,
      nextFollowUpDays = 1,
      newStatus
    } = await req.json();

    if (!leadId) {
      return NextResponse.json({ success: false, error: "Lead ID required" }, { status: 400 });
    }

    const currentLead = await db.lead.findUnique({ where: { id: leadId } });
    if (!currentLead) {
      return NextResponse.json({ success: false, error: "Lead not found" }, { status: 404 });
    }

    const nextDate = new Date(Date.now() + nextFollowUpDays * 86400000);
    const nextStage = Math.min(4, (currentLead.followUpStage || 1) + 1);

    const updateData: any = {
      followUpDate: nextDate,
      followUpStage: nextStage
    };

    if (newStatus) {
      updateData.status = newStatus;
    } else if (actionType === "ready_to_close") {
      updateData.status = "interested";
    } else if (actionType === "rejected") {
      updateData.status = "rejected";
    } else if (currentLead.status === "new") {
      updateData.status = "contacted";
    }

    const updatedLead = await db.lead.update({
      where: { id: leadId },
      data: updateData
    });

    // Log Activity
    const actionLabel =
      actionType === "call_tomorrow" ? "Client requested call tomorrow" :
      actionType === "said_thinking" ? "Client is reviewing demo / thinking" :
      actionType === "price_objection" ? "Price objection raised; scheduled discount offer" :
      actionType === "ready_to_close" ? "High intent! Ready to close quotation" :
      actionType === "rejected" ? "Client declined proposal" : "Follow-up completed";

    await db.activity.create({
      data: {
        leadId,
        type: "whatsapp",
        content: `Follow-up Stage ${currentLead.followUpStage}: ${actionLabel}. ${notes ? `Note: ${notes}` : ""}`
      }
    });

    return NextResponse.json({ success: true, data: updatedLead });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
