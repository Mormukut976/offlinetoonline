import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { db } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const {
      to,
      subject,
      bodyText,
      bodyHtml,
      leadId
    } = await req.json();

    if (!to || !subject || (!bodyText && !bodyHtml)) {
      return NextResponse.json({ success: false, error: "Missing required fields (to, subject, body)" }, { status: 400 });
    }

    // Load SMTP settings
    const settings = await db.appSetting.findMany();
    const map: Record<string, string> = {};
    settings.forEach(s => { map[s.key] = s.value; });

    const host = map["smtpHost"] || process.env.SMTP_HOST || "smtp.gmail.com";
    const port = parseInt(map["smtpPort"] || process.env.SMTP_PORT || "587");
    const user = map["smtpUser"] || process.env.SMTP_USER;
    const pass = map["smtpPass"] || process.env.SMTP_PASS;
    const fromName = map["smtpFromName"] || "Raja Singh Chauhan | O2O Digital";
    const fromEmail = map["smtpFromEmail"] || user;

    if (!user || !pass) {
      return NextResponse.json({
        success: false,
        error: "SMTP Credentials not configured. Please enter your email & App Password in Settings (/settings)."
      }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass }
    });

    const info = await transporter.sendMail({
      from: `"${fromName}" <${fromEmail}>`,
      to,
      subject,
      text: bodyText || bodyHtml?.replace(/<[^>]*>/g, ""),
      html: bodyHtml || bodyText?.replace(/\n/g, "<br>")
    });

    // If linked to lead, log activity
    if (leadId) {
      await db.activity.create({
        data: {
          leadId,
          type: "email",
          content: `Sent Cold Outreach Proposal: "${subject}" to ${to}`
        }
      });
    }

    return NextResponse.json({
      success: true,
      messageId: info.messageId,
      message: `Email successfully sent to ${to}!`
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
