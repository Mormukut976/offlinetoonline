import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  try {
    const projects = await db.project.findMany({
      orderBy: { updatedAt: "desc" }
    });
    return NextResponse.json({ success: true, data: projects });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      clientName,
      projectType,
      price = 9999,
      paidAmount = 0,
      assignedTo,
      deadline,
      status = "pending",
      onboardingData
    } = body;

    if (!clientName) {
      return NextResponse.json({ success: false, error: "Client name required" }, { status: 400 });
    }

    const project = await db.project.create({
      data: {
        clientName,
        projectType: projectType || "Jamstack Website",
        price: parseFloat(String(price)),
        paidAmount: parseFloat(String(paidAmount)),
        assignedTo: assignedTo || "Raja Singh Chauhan",
        deadline: deadline ? new Date(deadline) : null,
        status,
        onboardingData: onboardingData
          ? (typeof onboardingData === "string" ? onboardingData : JSON.stringify(onboardingData))
          : null
      }
    });

    return NextResponse.json({ success: true, data: project }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const { id, status, paidAmount, price, clientName, projectType, deadline, assignedTo, onboardingData } = body;

    if (!id) {
      return NextResponse.json({ success: false, error: "Project ID required" }, { status: 400 });
    }

    const updateData: any = {};
    if (status !== undefined) updateData.status = status;
    if (paidAmount !== undefined) updateData.paidAmount = parseFloat(String(paidAmount));
    if (price !== undefined) updateData.price = parseFloat(String(price));
    if (clientName !== undefined) updateData.clientName = clientName;
    if (projectType !== undefined) updateData.projectType = projectType;
    if (assignedTo !== undefined) updateData.assignedTo = assignedTo;
    if (deadline !== undefined) updateData.deadline = deadline ? new Date(deadline) : null;
    if (onboardingData !== undefined) {
      updateData.onboardingData = typeof onboardingData === "string" ? onboardingData : JSON.stringify(onboardingData);
    }

    const project = await db.project.update({
      where: { id },
      data: updateData
    });

    return NextResponse.json({ success: true, data: project });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (!id) {
      return NextResponse.json({ success: false, error: "Project ID required" }, { status: 400 });
    }
    await db.project.delete({ where: { id } });
    return NextResponse.json({ success: true, message: "Project deleted successfully" });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
