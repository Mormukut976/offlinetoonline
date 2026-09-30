export interface CategoryData {
  id: string;
  name: string;
  icon: string;
  searchTerms: string[];
  osmQuery: string; // OpenStreetMap Overpass amenity/tourism/shop selector
  typicalDealValue: string;
}

export const CATEGORIES: CategoryData[] = [
  {
    id: "tour_travel",
    name: "Tour & Travels / Cab Services",
    icon: "✈️",
    searchTerms: ["tour", "travel agency", "cab service", "taxi", "car rental", "tempo traveller"],
    osmQuery: 'node["tourism"~"travel_agency|information"];way["tourism"~"travel_agency|information"];node["amenity"="taxi"]',
    typicalDealValue: "₹25,000 - ₹60,000"
  },
  {
    id: "hospital",
    name: "Hospitals, Clinics & Dentists",
    icon: "🏥",
    searchTerms: ["hospital", "clinic", "doctor", "dental", "pathology", "diagnostic", "eye hospital"],
    osmQuery: 'node["amenity"~"hospital|clinic|doctors|dentist"];way["amenity"~"hospital|clinic|doctors|dentist"]',
    typicalDealValue: "₹35,000 - ₹95,000"
  },
  {
    id: "real_estate",
    name: "Real Estate & Builders",
    icon: "🏠",
    searchTerms: ["property dealer", "real estate", "builder", "developer", "plots", "flats"],
    osmQuery: 'node["office"~"estate_agent|property_management"];way["office"~"estate_agent|property_management"]',
    typicalDealValue: "₹45,000 - ₹1,50,000"
  },
  {
    id: "restaurant",
    name: "Restaurants, Cafes & Food",
    icon: "🍕",
    searchTerms: ["restaurant", "cafe", "dhaba", "sweet shop", "bakery", "rooftop"],
    osmQuery: 'node["amenity"~"restaurant|cafe|fast_food"];way["amenity"~"restaurant|cafe|fast_food"]',
    typicalDealValue: "₹20,000 - ₹45,000"
  },
  {
    id: "hotel",
    name: "Hotels, Resorts & Guest Houses",
    icon: "🏨",
    searchTerms: ["hotel", "resort", "guest house", "homestay", "villa"],
    osmQuery: 'node["tourism"~"hotel|guest_house|resort"];way["tourism"~"hotel|guest_house|resort"]',
    typicalDealValue: "₹35,000 - ₹85,000"
  },
  {
    id: "salon",
    name: "Salons, Spas & Beauty Studios",
    icon: "💇",
    searchTerms: ["salon", "spa", "beauty parlour", "makeover", "hair studio"],
    osmQuery: 'node["shop"~"hairdresser|beauty"];way["shop"~"hairdresser|beauty"]',
    typicalDealValue: "₹18,000 - ₹35,000"
  },
  {
    id: "education",
    name: "Coaching Institutes & Academies",
    icon: "🏫",
    searchTerms: ["coaching", "tuition", "classes", "academy", "institute", "neet", "jee"],
    osmQuery: 'node["amenity"="college"];node["amenity"="school"]',
    typicalDealValue: "₹25,000 - ₹55,000"
  },
  {
    id: "auto",
    name: "Car Garages & Detailing",
    icon: "🚗",
    searchTerms: ["car repair", "garage", "car detailing", "service center", "mechanic"],
    osmQuery: 'node["shop"="car_repair"];node["shop"="car_parts"]',
    typicalDealValue: "₹20,000 - ₹40,000"
  },
  {
    id: "retail",
    name: "Retail Showrooms & Boutiques",
    icon: "🛍️",
    searchTerms: ["shop", "store", "showroom", "boutique", "jewellery", "textiles"],
    osmQuery: 'node["shop"~"clothes|boutique|jewelry|department_store"]',
    typicalDealValue: "₹25,000 - ₹50,000"
  },
  {
    id: "event",
    name: "Event & Wedding Planners",
    icon: "🎉",
    searchTerms: ["event planner", "wedding planner", "tent house", "caterer", "banquet"],
    osmQuery: 'node["amenity"="events_venue"];node["office"="event_management"]',
    typicalDealValue: "₹30,000 - ₹75,000"
  }
];
