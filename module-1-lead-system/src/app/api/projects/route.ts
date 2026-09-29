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
    const { clientName, projectType, price, paidAmount = 0, assignedTo, deadline, status = "pending" } = body;

    const project = await db.project.create({
      data: {
        clientName,
        projectType,
        price: parseFloat(price),
        paidAmount: parseFloat(paidAmount),
        assignedTo: assignedTo || null,
        deadline: deadline ? new Date(deadline) : null,
        status
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
    const { id, status, paidAmount } = body;

    const updateData: any = {};
    if (status !== undefined) updateData.status = status;
    if (paidAmount !== undefined) updateData.paidAmount = parseFloat(paidAmount);

    const project = await db.project.update({
      where: { id },
      data: updateData
    });

    return NextResponse.json({ success: true, data: project });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
