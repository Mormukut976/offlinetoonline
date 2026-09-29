import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const {
      businessName,
      category = "tour_travel",
      city = "Jaipur",
      zone = "",
      hasWebsite = false,
      type = "whatsapp", // "whatsapp" | "email" | "audit"
      tone = "urgent_pain" // "urgent_pain" | "friendly_founder" | "social_proof"
    } = await req.json();

    if (!businessName) {
      return NextResponse.json({ success: false, error: "Business name required" }, { status: 400 });
    }

    // Get Groq API key
    const apiKeySetting = await db.appSetting.findUnique({ where: { key: "groqApiKey" } });
    const modelSetting = await db.appSetting.findUnique({ where: { key: "groqModel" } });
    const groqKey = apiKeySetting?.value || process.env.GROQ_API_KEY;
    const groqModel = modelSetting?.value || "llama-3.3-70b-versatile";

    if (groqKey) {
      // Prompt Groq AI
      let systemPrompt = `You are Raja Singh Chauhan, the Founder & CEO of O2O Digital Agency (Offline to Online) based in Jaipur, Rajasthan.
You specialize in helping offline businesses (doctors, tour & travel agencies, real estate builders, hotels, restaurants, salons) build modern Jamstack websites that rank on Google Page 1 with ZERO monthly maintenance.
Your flagship client proof is Bhumika Tour & Travels (https://bhumikatourandtravels.world/), which ranks on Google Search Page 1 (Average Position 6.7) with an interactive 200 KM fare calculator and 1-tap WhatsApp booking.
Always speak respectfully, persuasively, and with authentic local business understanding.`;

      let userPrompt = "";

      if (type === "whatsapp") {
        userPrompt = `Write a high-converting WhatsApp pitch in natural Hindi/Hinglish to the owner of "${businessName}" (${category}) in ${zone || city}.
Current status: ${hasWebsite ? "They have an outdated website" : "They have NO website at all, missing daily high-ticket customers"}.
Tone: ${tone}.
Keep it concise, friendly, with WhatsApp formatting (*bold*, bullet points, emojis).
Highlight:
1. Why ${category} businesses in ${city} are losing customers without Google Page 1 presence.
2. Bhumika Tour & Travels case study proof (https://bhumikatourandtravels.world/).
3. A low-friction CTA asking if you can send a free demo website mockup.
Sign off as:
Raja Singh Chauhan
Founder, O2O Digital Agency, Jaipur
+91 80009 07924`;
      } else if (type === "email") {
        userPrompt = `Write a compelling Cold Email Proposal to the owner of "${businessName}" (${category}) in ${city}.
Subject Line: Must be irresistible, personalized to ${businessName}, under 9 words.
Body: Professional, courteous, addressing local market competition in ${city}.
Include:
1. Problem: Offline clients missing online searches.
2. Solution: Fast 5-7 days Jamstack website + Google Local SEO.
3. Proof: Bhumika Tour & Travels (Rank 6.7 on Google).
4. Zero monthly server maintenance guarantee.
Format output as JSON:
{
  "subject": "...",
  "body": "..."
}`;
      } else {
        userPrompt = `Provide a 3-point quick Digital Audit for "${businessName}" in ${city} explaining specifically where they are losing revenue without a modern digital ecosystem.
Format as 3 crisp bullet points with emojis and a concluding recommendation.`;
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

    // Smart Fallback Generation if no key provided
    const cleanPhone = "+918000907924";
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
Jaipur, Rajasthan • +91 80009 07924`;
    } else if (type === "email") {
      emailData = {
        subject: `Quick question regarding ${businessName}'s digital growth in ${city}`,
        body: `Dear Owner,

I hope this email finds you well.

My name is Raja Singh Chauhan, Founder of O2O Digital Agency based in Jaipur. While researching top ${category.replace("_", " ")} businesses in ${city}, I noticed that ${businessName} doesn't have an official, Google-verified web presence.

Today, over 80% of local customers search on Google before making a booking or visit. Without an optimized website, valuable client inquiries are inevitably lost to online competitors.

We recently engineered the complete web and Local SEO architecture for Bhumika Tour & Travels (https://bhumikatourandtravels.world/), ranking them on Google Page 1 (Average Position 6.7) with zero monthly server maintenance costs.

I would love to prepare a complimentary, custom website mockup for ${businessName} to show you how you can capture these direct inquiries.

Would you be open to a brief 5-minute conversation or WhatsApp demo this week?

Warm regards,

Raja Singh Chauhan
Founder & CEO, O2O Digital
Jaipur, Rajasthan
Phone/WhatsApp: +91 80009 07924
Website: https://o2odigital.agency`
      };
      fallbackResult = emailData.body;
    } else {
      fallbackResult = `🔍 *Digital Audit for ${businessName} (${city}):*

1. 📍 *Missing Google Page 1 Real Estate:* Local clients searching for ${category.replace("_", " ")} in ${city} cannot find your direct booking channel.
2. 💸 *Zero Direct Inquiries:* Inquiries are lost to aggregators or local competitors who have Google Schema and WhatsApp booking buttons.
3. ⚡ *Opportunity:* A fast Jamstack website with 0 monthly server maintenance will immediately position you as the #1 trusted choice in ${zone || city}.`;
    }

    return NextResponse.json({
      success: true,
      provider: "smart_template",
      note: "Groq API key not configured yet. Add your free key in Settings for live AI generation!",
      result: fallbackResult,
      emailData
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
