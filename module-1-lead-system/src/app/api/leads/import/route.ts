import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { STATES } from "@/data/cities";

// Helper to find state from city name
function findStateForCity(city: string): string {
  if (!city) return "Rajasthan";
  const cleanCity = city.trim().toLowerCase();
  for (const [, stateData] of Object.entries(STATES)) {
    if (stateData.cities.some(c => c.toLowerCase() === cleanCity)) {
      return stateData.name;
    }
  }
  return "Rajasthan";
}

// Clean and normalize Indian phone numbers to standard format
function normalizePhone(raw: string): string {
  if (!raw) return "";
  const digits = raw.replace(/\D/g, "");
  if (digits.length === 10) {
    return `+91-${digits}`;
  } else if (digits.length === 12 && digits.startsWith("91")) {
    return `+91-${digits.slice(2)}`;
  } else if (digits.length === 11 && digits.startsWith("0")) {
    return `+91-${digits.slice(1)}`;
  }
  return raw.trim();
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const rawLeads = Array.isArray(body) ? body : body.leads;

    if (!Array.isArray(rawLeads) || rawLeads.length === 0) {
      return NextResponse.json({ success: false, error: "No leads data provided in array format" }, { status: 400 });
    }

    // 1. Fetch all existing phones and business names from CRM DB
    const existingLeads = await db.lead.findMany({
      select: { phone: true, businessName: true }
    });

    const existingPhones = new Set<string>();
    const existingNames = new Set<string>();

    for (const l of existingLeads) {
      if (l.phone) {
        const clean = l.phone.replace(/\D/g, "");
        if (clean) existingPhones.add(clean.slice(-10));
      }
      if (l.businessName) {
        existingNames.add(l.businessName.trim().toLowerCase());
      }
    }

    const leadsToInsert: any[] = [];
    const duplicates: any[] = [];
    const seenBatchPhones = new Set<string>();

    for (const item of rawLeads) {
      const name = (item.businessName || item.name || item.title || item.company || "").trim();
      const rawPhone = String(item.phone || item.mobile || item.contact || item.phoneNumber || "");
      const normalizedPhone = normalizePhone(rawPhone);
      const phoneDigits = normalizedPhone.replace(/\D/g, "").slice(-10);

      if (!name) continue;

      // Duplicate check: by 10-digit phone or exact name
      const isPhoneDup = phoneDigits && (existingPhones.has(phoneDigits) || seenBatchPhones.has(phoneDigits));
      const isNameDup = existingNames.has(name.toLowerCase());

      if (isPhoneDup || isNameDup) {
        duplicates.push({
          name,
          phone: normalizedPhone,
          reason: isPhoneDup ? "Phone already exists in CRM" : "Business name already in CRM"
        });
        continue;
      }

      if (phoneDigits) {
        seenBatchPhones.add(phoneDigits);
      }

      const city = (item.city || item.location || "Jaipur").trim();
      const state = item.state || findStateForCity(city);
      const category = item.category || "other";
      const website = item.website && item.website.trim() !== "" ? item.website.trim() : null;
      const rating = item.rating ? parseFloat(String(item.rating)) : null;

      leadsToInsert.push({
        businessName: name,
        ownerName: item.ownerName || item.owner || null,
        phone: normalizedPhone || "+91-9800000000",
        email: item.email || null,
        website: website,
        category: category,
        city: city,
        state: state,
        address: item.address || `${city}, ${state}`,
        rating: isNaN(rating as number) ? null : rating,
        status: "new",
        source: item.source || "csv_bulk_import",
        notes: item.notes || `Imported via CSV/Excel on ${new Date().toLocaleDateString("en-IN")}`
      });
    }

    // Insert new leads into database
    let importedCount = 0;
    if (leadsToInsert.length > 0) {
      for (const leadData of leadsToInsert) {
        await db.lead.create({
          data: {
            ...leadData,
            activities: {
              create: {
                type: "note",
                content: `Lead imported into CRM via bulk uploader from source: ${leadData.source}.`
              }
            }
          }
        });
        importedCount++;
      }
    }

    return NextResponse.json({
      success: true,
      totalReceived: rawLeads.length,
      importedCount,
      skippedCount: duplicates.length,
      duplicates: duplicates.slice(0, 50)
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
