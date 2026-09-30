import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const {
      businessName,
      category = "tour_travel",
      city = "Jaipur",
      state = "Rajasthan",
      zone = "",
      hasWebsite = false,
      type = "whatsapp", // "whatsapp" | "email" | "audit"
      tone = "urgent_pain" // "urgent_pain" | "friendly_founder" | "social_proof"
    } = await req.json();

    if (!businessName) {
      return NextResponse.json({ success: false, error: "Business name required" }, { status: 400 });
    }

    // Get Groq API key and model
    const apiKeySetting = await db.appSetting.findUnique({ where: { key: "groqApiKey" } });
    const modelSetting = await db.appSetting.findUnique({ where: { key: "groqModel" } });
    const groqKey = apiKeySetting?.value || process.env.GROQ_API_KEY;
    
    // Valid chat model on this Groq key
    let groqModel = modelSetting?.value || "qwen/qwen3.8-27b";
    if (groqModel.includes("llama-3.3") || groqModel.includes("llama-3.1")) {
      groqModel = "qwen/qwen3.8-27b";
    }

    if (groqKey) {
      const systemPrompt = `You are Raja Singh Chauhan, the Founder & CEO of O2O Digital Agency (Offline to Online), headquarted in Jaipur and serving offline businesses across all of India.
You specialize in helping offline businesses (Doctors, Tour & Travel Operators, Real Estate Builders, Hotels, Restaurants, Salons, Coaching Academies) launch modern Jamstack websites that rank on Google Page 1 with ZERO monthly maintenance.
Your flagship client proof is Bhumika Tour & Travels (https://bhumikatourandtravels.world/), which ranks on Google Search Page 1 (Average Position 6.7) with an interactive 200 KM fare calculator and 1-tap WhatsApp booking.
You speak persuasively, respectfully, and with authentic local business context.`;

      let userPrompt = "";

      if (type === "whatsapp") {
        userPrompt = `Write a high-converting WhatsApp cold outreach pitch in natural Hindi/Hinglish to the owner of "${businessName}" (${category}) located in ${zone || city} (${state}).
Current status: ${hasWebsite ? "They have an outdated slow website" : "They have NO website at all, missing daily high-ticket customers searching on Google"}.
Tone: ${tone}.
Keep it concise (under 120 words), authentic, formatted with WhatsApp *bold*, clean bullet points, and emojis.
Include:
1. Local market hook: How businesses in ${city} are losing high-paying customers to competitors who have Google Page 1 presence.
2. Proof: Bhumika Tour & Travels case study (https://bhumikatourandtravels.world/ - Google Rank 6.7).
3. Low friction CTA: "Kya main aapke business ke liye ek Free Live Demo Website bana kar WhatsApp par share kar sakta hu?"
Sign off:
Raja Singh Chauhan
Founder & CEO, O2O Digital Agency
+91 80009 07924`;
      } else if (type === "email") {
        userPrompt = `Write a high-converting Cold Email Proposal to the business owner of "${businessName}" (${category}) in ${city}, ${state}.
Subject Line: Irresistible, personalized, under 9 words.
Body: Professional, courteous, addressing local market competition in ${city}.
Include:
1. Local problem: Over 80% of customers in ${city} search on Google before booking.
2. Solution: Modern Jamstack website + Google Local SEO with zero monthly maintenance.
3. Proof: Bhumika Tour & Travels (Rank 6.7 on Google Search).
4. Low-friction CTA: 5-minute WhatsApp demo or quick callback.
Return JSON format:
{
  "subject": "...",
  "body": "..."
}`;
      } else {
        userPrompt = `Provide a 3-point digital growth audit for "${businessName}" (${category}) located in ${zone || city}, ${state}.
Explain 3 specific vulnerabilities where they are losing revenue without an optimized website and Google Local SEO presence. Format as 3 crisp bullet points with emojis and a concluding recommendation.`;
      }

      try {
        const groqResp = await fetch("https://api.groq.com/openai/v1/chat/completions", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${groqKey}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            model: groqModel,
            messages: [
              { role: "system", content: systemPrompt },
              { role: "user", content: userPrompt }
            ],
            temperature: 0.7,
            max_tokens: 800
          })
        });

        if (groqResp.ok) {
          const groqJson = await groqResp.json();
          const content = groqJson.choices?.[0]?.message?.content || "";

          let parsedEmail = null;
          if (type === "email") {
            try {
              const cleaned = content.replace(/```json/g, "").replace(/```/g, "").trim();
              parsedEmail = JSON.parse(cleaned);
            } catch (e) {
              // fallback
            }
          }

          return NextResponse.json({
            success: true,
            provider: "groq_ai",
            model: groqModel,
            result: content,
            emailData: parsedEmail
          });
        }
      } catch (err: any) {
        console.error("Groq AI Error:", err.message);
      }
    }

    // Smart Fallback Generation
    let fallbackResult = "";
    let emailData = null;

    if (type === "whatsapp") {
      fallbackResult = `Namaste! 🙏 Kya meri baat *${businessName}* ke owner se ho rahi hai?

Main Raja Singh Chauhan (Founder, O2O Digital Agency) se baat kar raha hoon.

Maine dekha aapka business *${zone || city}* me kafi accha kaam kar raha hai, lekin Google par aapki official modern website nahi hone ki wajah se daily high-value clients aur inquiries competitors ke paas ja rahi hain.

Humne *Bhumika Tour & Travels* ke liye Google Page 1 (Rank 6.7) website banayi hai jisse unka business 3x grow hua hai (Live: https://bhumikatourandtravels.world/).

Kya main aapke business ke liye ek *Free Live Demo Website* bana kar WhatsApp par share kar sakta hu?

Dhanyawad,
*Raja Singh Chauhan*
Founder & CEO, O2O Digital Agency
Phone: +91 80009 07924`;
    } else if (type === "email") {
      emailData = {
        subject: `Quick question regarding ${businessName}'s digital growth in ${city}`,
        body: `Dear Owner,

I hope this email finds you well.

My name is Raja Singh Chauhan, Founder of O2O Digital Agency. While researching top ${category.replace("_", " ")} businesses in ${city}, I noticed that ${businessName} does not have an official Google-verified web presence.

Today, over 80% of local customers in ${city} search on Google before making a booking or visit. Without an optimized website, valuable inquiries are inevitably lost to online competitors.

We recently engineered the complete web and Local SEO architecture for Bhumika Tour & Travels (https://bhumikatourandtravels.world/), ranking them on Google Page 1 (Average Position 6.7) with zero monthly server maintenance.

I would love to prepare a complimentary, custom website mockup for ${businessName} to show you how you can capture these direct inquiries.

Would you be open to a brief 5-minute conversation or WhatsApp demo this week?

Warm regards,

Raja Singh Chauhan
Founder & CEO, O2O Digital Agency
Phone/WhatsApp: +91 80009 07924
Website: https://o2odigital.agency`
      };
      fallbackResult = emailData.body;
    } else {
      fallbackResult = `🔍 *Digital Audit for ${businessName} (${city}):*

1. 📍 *Missing Google Page 1 Real Estate:* Local clients searching in ${city} cannot find your direct booking channel.
2. 💸 *Zero Direct Inquiries:* Inquiries are lost to aggregators or local competitors who have Google Schema and WhatsApp booking buttons.
3. ⚡ *Opportunity:* A fast Jamstack website with 0 monthly server maintenance will immediately position you as the #1 trusted choice in ${zone || city}.`;
    }

    return NextResponse.json({
      success: true,
      provider: "smart_template",
      result: fallbackResult,
      emailData
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
