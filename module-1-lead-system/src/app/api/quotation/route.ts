import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (id) {
      const quotation = await db.quotation.findUnique({
        where: { id },
        include: { lead: true }
      });
      return NextResponse.json({ success: true, data: quotation });
    }

    const quotations = await db.quotation.findMany({
      orderBy: { createdAt: "desc" },
      include: { lead: true }
    });

    return NextResponse.json({ success: true, data: quotations });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { leadId, clientName, clientBusiness, clientPhone, clientEmail, items, discount = 0, tax = 0, validDays = 30, notes } = body;

    if (!clientName || !clientPhone || !items || !items.length) {
      return NextResponse.json({ success: false, error: "Missing required quotation fields" }, { status: 400 });
    }

    // Calculate subtotal
    const subtotal = items.reduce((acc: number, item: any) => acc + (item.price * (item.qty || 1)), 0);
    const afterDiscount = Math.max(0, subtotal - discount);
    const total = Math.round(afterDiscount + (afterDiscount * (tax / 100)));

    // Generate unique quotation number
    const count = await db.quotation.count();
    const year = new Date().getFullYear();
    const quotationNo = `QT-${year}-${String(count + 1).padStart(3, "0")}`;

    const validUntil = new Date(Date.now() + validDays * 86400000);

    const quotation = await db.quotation.create({
      data: {
        quotationNo,
        leadId: leadId || null,
        clientName,
        clientBusiness,
        clientPhone,
        clientEmail: clientEmail || null,
        items: JSON.stringify(items),
        subtotal,
        discount: parseFloat(String(discount)) || 0,
        tax: parseFloat(String(tax)) || 0,
        total,
        validUntil,
        status: "draft",
        notes: notes || null
      }
    });

    // If linked to lead, log activity
    if (leadId) {
      await db.activity.create({
        data: {
          leadId,
          type: "whatsapp",
          content: `Generated Quotation ${quotationNo} for ₹${total.toLocaleString("en-IN")}`
        }
      });
    }

    return NextResponse.json({ success: true, data: quotation }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const { id, status, notes, convertToProject } = body;

    if (!id) {
      return NextResponse.json({ success: false, error: "Quotation ID required" }, { status: 400 });
    }

    const updated = await db.quotation.update({
      where: { id },
      data: {
        ...(status ? { status } : {}),
        ...(notes !== undefined ? { notes } : {})
      },
      include: { lead: true }
    });

    // If status changed to accepted and convertToProject is true, create a project record in pipeline
    let createdProject = null;
    if (convertToProject || status === "accepted") {
      // Check if project already exists for this quotation / client
      const existingProject = await db.project.findFirst({
        where: { clientName: updated.clientName }
      });
      if (!existingProject) {
        createdProject = await db.project.create({
          data: {
            clientName: updated.clientName,
            projectType: updated.clientBusiness + " Website & Digital Suite",
            price: updated.total,
            paidAmount: Math.round(updated.total * 0.5), // 50% advance standard
            status: "pending",
            deadline: new Date(Date.now() + 7 * 86400000) // 7-day turnaround standard
          }
        });
      }
    }

    if (updated.leadId && status) {
      await db.activity.create({
        data: {
          leadId: updated.leadId,
          type: "note",
          content: `Quotation ${updated.quotationNo} marked as ${status.toUpperCase()}.`
        }
      });
    }

    return NextResponse.json({ success: true, data: updated, project: createdProject });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
