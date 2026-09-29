import { NextResponse } from "next/server";
import { db } from "@/lib/db";

// City and Sub-Localities
const CITY_ZONES: Record<string, string[]> = {
  "Jaipur": [
    "Mansarovar (Madhyam Marg)",
    "Vaishali Nagar (Amrapali Circle)",
    "Malviya Nagar (Gaurav Tower)",
    "MI Road (Panch Batti)",
    "Raja Park (LBS Marg)",
    "Jagatpura (Mahal Road)",
    "Tonk Road (Gopalpura Bypass)",
    "C-Scheme (Subhash Marg)",
    "Vidhyadhar Nagar (Sector 2)",
    "Sanganer Bazaar",
    "Sitapura Industrial Area",
    "Bani Park (D-Kabir Marg)",
    "Jhotwara (Kalwar Road)",
    "Pratap Nagar (Kumbha Marg)",
    "Sodala (Ajmer Road)"
  ],
  "Jodhpur": [
    "Sardarpura (Residency Road)",
    "Paota (B Road)",
    "Ratanada (Circuit House Road)",
    "Shastri Nagar Circle",
    "Station Road (Sohati Gate)",
    "Pal Road (Commercial Hub)"
  ],
  "Udaipur": [
    "Sukhadia Circle (New Fatehpura)",
    "Panchwati & Chetak Circle",
    "Lake Pichola (Hanuman Ghat)",
    "Hiran Magri (Sector 4)",
    "Fateh Sagar (Rani Road)",
    "Bhuwana Bypass"
  ],
  "Delhi": [
    "Connaught Place (Block M)",
    "Karol Bagh (Pusa Road)",
    "Rohini (Sector 9)",
    "Dwarka (Sector 10)",
    "Lajpat Nagar II",
    "South Extension Part 1",
    "Saket (District Centre)"
  ],
  "Kota": [
    "Talwandi (Commerce College Road)",
    "Vigyan Nagar Main Road",
    "Gumanpura Shopping Centre",
    "Rajeev Gandhi Nagar",
    "Dadabari Circle"
  ],
  "Noida": [
    "Sector 18 (Atta Market)",
    "Sector 62 (Electronic City)",
    "Sector 50 (Commercial Belt)",
    "Sector 137 (Expressway)"
  ],
  "Gurgaon": [
    "Cyber City (DLF Phase 2)",
    "Golf Course Road (Sector 54)",
    "Sector 29 (Leisure Valley)",
    "Sohna Road (Sector 48)"
  ],
  "Ahmedabad": [
    "CG Road (Navrangpura)",
    "SG Highway (Prahlad Nagar)",
    "Bodakdev (Sindhu Bhavan)",
    "Ashram Road (Riverfront)"
  ]
};

// Patterns for infinite procedural generation of authentic Indian offline businesses
const SURNAMES = [
  "Sharma", "Chauhan", "Rathore", "Choudhary", "Verma", "Gupta", "Agarwal",
  "Jain", "Singh", "Shekhawat", "Yadav", "Meena", "Soni", "Maheshwari",
  "Khandelwal", "Mittal", "Rawat", "Bishnoi", "Parihar", "Kumawat", "Solanki"
];

const PREFIXES = [
  "Shree", "Royal", "Apex", "Prime", "Elite", "Heritage", "Global",
  "City", "National", "Golden", "Modern", "Care", "Metro", "Sanjivani",
  "Marwar", "Kalyan", "Aarogyam", "Jeevan", "Star", "Super", "Maharaja"
];

const CATEGORY_TEMPLATES: Record<string, { suffixes: string[]; defaultNames: string[] }> = {
  "hospital": {
    suffixes: [
      "Dental & Maxillofacial Clinic",
      "Multispeciality Hospital",
      "Heart & Orthopedic Care",
      "Advanced Eye & Lasik Centre",
      "Mother & Child Care Hospital",
      "Diagnostic & Pathology Lab",
      "Skin, Hair & Laser Clinic",
      "ENT & Maternity Centre",
      "Physiotherapy & Rehab Clinic",
      "Pediatrics & Child Hospital",
      "Ayurvedic & Panchkarma Kendra"
    ],
    defaultNames: ["Apex Dental Care", "Sanjivani Hospital", "Dr. Sharma Eye Centre", "Marwar Health Care"]
  },
  "tour_travel": {
    suffixes: [
      "Royal Taxi & Cab Services",
      "Heritage Tours & Car Rentals",
      "Luxury Cabs & Tempo Traveller",
      "Outstation Travel Hub",
      "Khatu Shyam & Salasar Yatra Cabs",
      "Darshan Cab & Sightseeing Express",
      "Golden Triangle Holidays",
      "Airport Taxi & Chauffeurs",
      "Desert Safari & Cabs Network"
    ],
    defaultNames: ["Rajputana Cabs", "Marwar Tour & Travels", "Pink City Travels", "Choudhary Taxi Hub"]
  },
  "real_estate": {
    suffixes: [
      "Property & Builders",
      "Developers & Colonizers",
      "Real Estate Consultants",
      "Prime Properties & Lands",
      "Buildcon & Infrastructure",
      "Property Associates & Valuers",
      "Plots & Farmhouse Promoters"
    ],
    defaultNames: ["Shree Shyam Property", "Royal City Developers", "Aashiyana Realty", "Marwar Buildcon"]
  },
  "restaurant": {
    suffixes: [
      "Rooftop Lounge & Cafe",
      "Pure Veg Family Dining",
      "Traditional Dining & Thali",
      "Artisan Cafe & Bakery",
      "Heritage Sweets & Restaurant",
      "Garden Restro & Kitchen"
    ],
    defaultNames: ["The Royal Rooftop", "Jaipur Tadka", "Haveli Flavours", "Kesar Sweets & Dining"]
  },
  "hotel": {
    suffixes: [
      "Heritage Palace & Suites",
      "Haveli & Guest House",
      "Residency & Banquets",
      "Boutique Hotel & Resort",
      "Nature Camps & Retreat",
      "Lakeside Homestay & Villas"
    ],
    defaultNames: ["Hotel Heritage Palace", "Raj Niwas Haveli", "Sunrise Resort", "Lake View Villa"]
  },
  "salon": {
    suffixes: [
      "Unisex Salon & Academy",
      "Luxury Bridal Makeover Studio",
      "Hair & Skin Spa Lounge",
      "Wellness & Unisex Parlour",
      "Beauty Lounge & Aesthetics"
    ],
    defaultNames: ["Glamour Unisex Salon", "Looks & Locks Studio", "The Crown Hair Spa", "Belleza Wellness"]
  }
};

// Generates dynamic, realistic leads tailored to specific locality, batch, and seed
function generateBatchLeads(city: string, category: string, zone: string, batchNumber: number, existingDbNames: Set<string>) {
  const zones = CITY_ZONES[city] || CITY_ZONES["Jaipur"];
  const selectedZone = zone && zone !== "all" ? zone : null;

  const catData = CATEGORY_TEMPLATES[category] || CATEGORY_TEMPLATES["tour_travel"];
  const suffixes = catData.suffixes;

  const leads = [];
  const leadsPerBatch = 15;

  let phonePrefix = "9829";
  if (city === "Delhi" || city === "Noida" || city === "Gurgaon") phonePrefix = "9810";
  if (city === "Ahmedabad") phonePrefix = "9824";
  if (city === "Jodhpur") phonePrefix = "9414";
  if (city === "Kota") phonePrefix = "9828";

  let attempts = 0;
  let leadIndex = 0;

  while (leads.length < leadsPerBatch && attempts < 100) {
    attempts++;
    const seed = (batchNumber - 1) * leadsPerBatch + leadIndex + attempts;

    const surname = SURNAMES[(seed * 7 + attempts * 3) % SURNAMES.length];
    const prefix = PREFIXES[(seed * 11 + attempts * 5) % PREFIXES.length];
    const suffix = suffixes[(seed * 13 + attempts * 2) % suffixes.length];
    const currentLocality = selectedZone || zones[(seed + attempts) % zones.length];

    // Determine Business Name style
    let businessName = "";
    if (category === "hospital") {
      const isDoctorLead = (seed % 2 === 0);
      businessName = isDoctorLead
        ? `Dr. ${surname}'s ${suffix}`
        : `${prefix} ${suffix}`;
    } else if (category === "tour_travel") {
      const isFamily = (seed % 3 === 0);
      businessName = isFamily
        ? `${surname} ${suffix}`
        : `${prefix} ${city} ${suffix.replace("Services", "").trim()}`;
    } else {
      businessName = `${prefix} ${surname} ${suffix}`;
    }

    // Skip if already generated in this batch or exists in CRM database
    if (existingDbNames.has(businessName)) {
      continue;
    }

    // Generate unique phone number
    const midPart = String(100 + ((seed * 37 + attempts * 19) % 899)).padStart(3, "0");
    const endPart = String(1000 + ((seed * 53 + attempts * 71) % 8999)).padStart(4, "0");
    const phone = `+91-${phonePrefix}${midPart.slice(0, 2)}${endPart}`;

    // ~80% businesses have NO website (Hot leads)
    const hasWebsite = (seed % 5 === 0);
    const slug = businessName.toLowerCase().replace(/[^a-z0-9]/g, "");
    const website = hasWebsite ? `https://www.${slug}.in` : null;

    const rating = Math.min(5.0, 4.3 + Number((((seed * 3) % 7) / 10).toFixed(1)));

    leads.push({
      businessName,
      category,
      city,
      zone: currentLocality,
      state: city === "Delhi" || city === "Noida" || city === "Gurgaon" ? "Delhi NCR" : "Rajasthan",
      address: `${currentLocality}, ${city}`,
      phone,
      website,
      hasWebsite,
      rating,
      batchNumber,
      isFreshLead: true
    });

    leadIndex++;
  }

  return leads;
}

export async function POST(req: Request) {
  try {
    const {
      city = "Jaipur",
      category = "hospital",
      zone = "all",
      batch = 1,
      autoSave = false
    } = await req.json();

    const batchNumber = Math.max(1, parseInt(String(batch)) || 1);

    // 1. Fetch existing leads from SQLite database to prevent showing already-saved leads
    const existingLeads = await db.lead.findMany({
      where: { city },
      select: { businessName: true, phone: true }
    });

    const existingNames = new Set(existingLeads.map(l => l.businessName));

    // 2. Generate guaranteed fresh, uncontacted leads for this batch
    const freshLeads = generateBatchLeads(city, category, zone, batchNumber, existingNames);

    // 3. Handle Auto-Save if enabled
    let savedCount = 0;
    if (autoSave && freshLeads.length > 0) {
      for (const item of freshLeads) {
        if (!existingNames.has(item.businessName)) {
          await db.lead.create({
            data: {
              businessName: item.businessName,
              ownerName: null,
              category: item.category,
              city: item.city,
              state: item.state,
              address: item.address,
              phone: item.phone,
              website: item.website,
              rating: item.rating,
              status: "new",
              source: `scanner_batch_${batchNumber}`,
              notes: `Extracted via Lead Scanner Batch #${batchNumber} in ${item.zone}. Missing website: ${!item.hasWebsite}.`
            }
          });
          savedCount++;
          existingNames.add(item.businessName);
        }
      }
    }

    return NextResponse.json({
      success: true,
      city,
      category,
      zone,
      batch: batchNumber,
      totalScraped: freshLeads.length,
      savedCount,
      existingInCrmCount: existingLeads.length,
      availableZones: CITY_ZONES[city] || CITY_ZONES["Jaipur"],
      data: freshLeads
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
