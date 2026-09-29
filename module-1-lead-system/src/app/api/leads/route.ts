import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const search = searchParams.get("search") || "";
    const city = searchParams.get("city") || "";
    const category = searchParams.get("category") || "";
    const status = searchParams.get("status") || "";

    const where: any = {};

    if (search) {
      where.OR = [
        { businessName: { contains: search } },
        { ownerName: { contains: search } },
        { phone: { contains: search } },
        { address: { contains: search } }
      ];
    }

    if (city && city !== "all") where.city = city;
    if (category && category !== "all") where.category = category;
    if (status && status !== "all") where.status = status;

    const leads = await db.lead.findMany({
      where,
      orderBy: { createdAt: "desc" },
      include: {
        _count: {
          select: { quotations: true, activities: true }
        }
      }
    });

    return NextResponse.json({ success: true, count: leads.length, data: leads });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { businessName, ownerName, phone, email, website, category, city, state, address, rating, status, notes, followUpDate } = body;

    if (!businessName || !phone) {
      return NextResponse.json({ success: false, error: "Business name and phone are required" }, { status: 400 });
    }

    const lead = await db.lead.create({
      data: {
        businessName,
        ownerName: ownerName || null,
        phone,
        email: email || null,
        website: website || null,
        category: category || "other",
        city: city || "Jaipur",
        state: state || "Rajasthan",
        address: address || null,
        rating: rating ? parseFloat(rating) : null,
        status: status || "new",
        notes: notes || null,
        followUpDate: followUpDate ? new Date(followUpDate) : null,
        activities: {
          create: {
            type: "note",
            content: "Lead created in CRM system."
          }
        }
      }
    });

    return NextResponse.json({ success: true, data: lead }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
