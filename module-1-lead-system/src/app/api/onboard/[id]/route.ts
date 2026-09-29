import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const project = await db.project.findUnique({
      where: { id }
    });

    if (!project) {
      return NextResponse.json({ success: false, error: "Project not found" }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      data: {
        id: project.id,
        clientName: project.clientName,
        projectType: project.projectType,
        price: project.price,
        paidAmount: project.paidAmount,
        status: project.status,
        onboardingData: project.onboardingData ? JSON.parse(project.onboardingData) : null
      }
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const body = await req.json();

    const project = await db.project.findUnique({ where: { id } });
    if (!project) {
      return NextResponse.json({ success: false, error: "Project not found" }, { status: 404 });
    }

    const {
      businessName,
      ownerName,
      phone,
      email,
      address,
      mapsLink,
      tagline,
      servicesList,
      driveLink,
      advancePaid,
      transactionId,
      specialInstructions
    } = body;

    const onboardingPayload = {
      businessName: businessName || project.clientName,
      ownerName: ownerName || "",
      phone: phone || "",
      email: email || "",
      address: address || "",
      mapsLink: mapsLink || "",
      tagline: tagline || "",
      servicesList: servicesList || "",
      driveLink: driveLink || "",
      advancePaid: parseFloat(advancePaid) || project.paidAmount,
      transactionId: transactionId || "",
      specialInstructions: specialInstructions || "",
      submittedAt: new Date().toISOString()
    };

    const updated = await db.project.update({
      where: { id },
      data: {
        status: "designing", // Advance project to designing stage automatically!
        paidAmount: Math.max(project.paidAmount, parseFloat(advancePaid) || 0),
        onboardingData: JSON.stringify(onboardingPayload)
      }
    });

    return NextResponse.json({
      success: true,
      message: "Onboarding details saved successfully! Project moved to Designing stage.",
      data: updated
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
