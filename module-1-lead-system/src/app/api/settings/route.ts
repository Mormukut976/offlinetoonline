import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  try {
    const settings = await db.appSetting.findMany();
    const map: Record<string, string> = {};
    settings.forEach(s => {
      map[s.key] = s.value;
    });

    return NextResponse.json({
      success: true,
      data: {
        hasGroqKey: Boolean(map["groqApiKey"] || process.env.GROQ_API_KEY),
        groqApiKeyMasked: map["groqApiKey"] ? map["groqApiKey"].slice(0, 7) + "..." + map["groqApiKey"].slice(-4) : "",
        groqModel: map["groqModel"] || "llama-3.3-70b-versatile",
        smtpHost: map["smtpHost"] || "smtp.gmail.com",
        smtpPort: map["smtpPort"] || "587",
        smtpUser: map["smtpUser"] || "",
        hasSmtpPass: Boolean(map["smtpPass"]),
        smtpFromName: map["smtpFromName"] || "Raja Singh Chauhan | O2O Digital",
        smtpFromEmail: map["smtpFromEmail"] || ""
      }
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const allowedKeys = [
      "groqApiKey",
      "groqModel",
      "smtpHost",
      "smtpPort",
      "smtpUser",
      "smtpPass",
      "smtpFromName",
      "smtpFromEmail"
    ];

    for (const key of allowedKeys) {
      if (body[key] !== undefined && body[key] !== "") {
        await db.appSetting.upsert({
          where: { key },
          update: { value: String(body[key]) },
          create: { key, value: String(body[key]) }
        });
      }
    }

    return NextResponse.json({ success: true, message: "Settings saved successfully!" });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
