export interface DemoDesign {
  id: string;
  title: string;
  category: string;
  categoryName: string;
  city: string;
  features: string[];
  liveUrl?: string;
  badge?: string;
  gradient: string;
}

export const DEMO_DESIGNS: DemoDesign[] = [
  {
    id: "bhumika-travels",
    title: "Bhumika Tour & Travels",
    category: "tour_travel",
    categoryName: "Tour & Travels",
    city: "Jaipur, Rajasthan",
    features: ["200 KM Fare Calculator", "Google Page 1 Ranking (Pos 6.7)", "Schema Reviews", "1-Tap WhatsApp Booking"],
    liveUrl: "https://bhumikatourandtravels.world/",
    badge: "Verified Live Client #1",
    gradient: "from-amber-600 to-rose-700"
  },
  {
    id: "raj-palace-hotel",
    title: "Raj Palace Heritage Hotel",
    category: "hotel",
    categoryName: "Hotel & Resort",
    city: "Udaipur, Rajasthan",
    features: ["Room Showcase & Virtual Tour", "Direct Booking Engine", "Amenities & Dining", "WhatsApp Concierge"],
    badge: "Ready-to-Deploy Template",
    gradient: "from-purple-600 to-indigo-800"
  },
  {
    id: "sharma-dental",
    title: "Dr. Sharma Dental & Implant Clinic",
    category: "hospital",
    categoryName: "Hospital & Clinic",
    city: "Mansarovar, Jaipur",
    features: ["Patient Appointment Picker", "Doctors Profile & Treatments", "Google Maps 5-Star Reviews", "Emergency Call"],
    badge: "Healthcare Template",
    gradient: "from-emerald-600 to-teal-800"
  },
  {
    id: "dream-homes",
    title: "Dream Homes Real Estate & Builders",
    category: "real_estate",
    categoryName: "Real Estate",
    city: "Jagatpura, Jaipur",
    features: ["Property Listings & Filters", "Floorplans & Virtual Tours", "EMI Calculator", "Direct Agent Inquiry"],
    badge: "High-Ticket Template",
    gradient: "from-blue-600 to-cyan-800"
  },
  {
    id: "jaipur-spice-kitchen",
    title: "Jaipur Spice & Rooftop Cafe",
    category: "restaurant",
    categoryName: "Restaurant & Cafe",
    city: "C-Scheme, Jaipur",
    features: ["Interactive Food Menu", "Table Reservation Flow", "Instagram Feed Sync", "Zomato/Swiggy Direct Links"],
    badge: "Food & Beverage Template",
    gradient: "from-orange-600 to-red-800"
  },
  {
    id: "glamour-salon",
    title: "Glamour Luxury Unisex Salon & Spa",
    category: "salon",
    categoryName: "Salon & Spa",
    city: "Vaishali Nagar, Jaipur",
    features: ["Services & Bridal Packages", "Slot Booking System", "Stylists Portfolio", "Price Menu"],
    badge: "Beauty & Wellness Template",
    gradient: "from-pink-600 to-rose-800"
  }
];
