import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const lead = await db.lead.findUnique({
      where: { id },
      include: {
        activities: { orderBy: { createdAt: "desc" } },
        quotations: { orderBy: { createdAt: "desc" } }
      }
    });

    if (!lead) {
      return NextResponse.json({ success: false, error: "Lead not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: lead });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const body = await req.json();
    const { status, notes, followUpDate, businessName, ownerName, phone, email, website, newActivity } = body;

    const updateData: any = {};
    if (status !== undefined) updateData.status = status;
    if (notes !== undefined) updateData.notes = notes;
    if (followUpDate !== undefined) updateData.followUpDate = followUpDate ? new Date(followUpDate) : null;
    if (businessName !== undefined) updateData.businessName = businessName;
    if (ownerName !== undefined) updateData.ownerName = ownerName;
    if (phone !== undefined) updateData.phone = phone;
    if (email !== undefined) updateData.email = email;
    if (website !== undefined) updateData.website = website;

    if (newActivity) {
      await db.activity.create({
        data: {
          leadId: id,
          type: newActivity.type || "note",
          content: newActivity.content || "Updated lead record."
        }
      });
    }

    const lead = await db.lead.update({
      where: { id },
      data: updateData,
      include: {
        activities: { orderBy: { createdAt: "desc" } },
        quotations: { orderBy: { createdAt: "desc" } }
      }
    });

    return NextResponse.json({ success: true, data: lead });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    await db.lead.delete({ where: { id } });
    return NextResponse.json({ success: true, message: "Lead deleted" });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
