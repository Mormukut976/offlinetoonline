export interface CategoryData {
  id: string;
  name: string;
  icon: string;
  searchTerms: string[];
}

export const CATEGORIES: CategoryData[] = [
  { id: "tour_travel", name: "Tour & Travels", icon: "✈️", searchTerms: ["tour", "travel agency", "cab service", "taxi jaipur"] },
  { id: "hospital", name: "Hospital & Clinic", icon: "🏥", searchTerms: ["hospital", "clinic", "doctor", "dental"] },
  { id: "real_estate", name: "Real Estate", icon: "🏠", searchTerms: ["property dealer", "real estate", "builder", "flat"] },
  { id: "restaurant", name: "Restaurant & Cafe", icon: "🍕", searchTerms: ["restaurant", "cafe", "dhaba", "sweet shop"] },
  { id: "hotel", name: "Hotel & Resort", icon: "🏨", searchTerms: ["hotel", "resort", "guest house", "dharamshala"] },
  { id: "retail", name: "Retail Shop", icon: "🛍️", searchTerms: ["shop", "store", "showroom", "boutique"] },
  { id: "salon", name: "Salon & Spa", icon: "💇", searchTerms: ["salon", "spa", "beauty parlour", "barber"] },
  { id: "education", name: "Education & Coaching", icon: "🏫", searchTerms: ["coaching", "school", "tuition", "institute"] },
  { id: "gym", name: "Gym & Fitness", icon: "💪", searchTerms: ["gym", "fitness", "yoga", "sports"] },
  { id: "auto", name: "Auto & Garage", icon: "🚗", searchTerms: ["garage", "car service", "auto parts", "mechanic"] },
  { id: "event", name: "Event & Wedding", icon: "🎉", searchTerms: ["event planner", "wedding", "tent house", "caterer"] },
  { id: "other", name: "Other Business", icon: "🏢", searchTerms: ["business", "company", "service"] }
];
