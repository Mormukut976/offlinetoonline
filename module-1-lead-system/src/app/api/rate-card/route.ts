import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  try {
    const rateCards = await db.rateCard.findMany({
      where: { isActive: true },
      orderBy: { service: "asc" }
    });

    // Parse features JSON safely
    const parsed = rateCards.map(rc => ({
      ...rc,
      features: typeof rc.features === "string" ? JSON.parse(rc.features) : rc.features
    }));

    return NextResponse.json({ success: true, data: parsed });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const { id, basicPrice, standardPrice, premiumPrice, description, features } = body;

    const rateCard = await db.rateCard.update({
      where: { id },
      data: {
        basicPrice: parseFloat(basicPrice),
        standardPrice: parseFloat(standardPrice),
        premiumPrice: parseFloat(premiumPrice),
        description: description || null,
        features: typeof features === "string" ? features : JSON.stringify(features)
      }
    });

    return NextResponse.json({ success: true, data: rateCard });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
