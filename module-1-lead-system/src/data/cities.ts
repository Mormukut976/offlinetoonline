export interface StateData {
  name: string;
  cities: string[];
}

export const STATES: Record<string, StateData> = {
  rajasthan: {
    name: "Rajasthan",
    cities: [
      "Jaipur",
      "Jodhpur",
      "Udaipur",
      "Kota",
      "Ajmer",
      "Bikaner",
      "Alwar",
      "Bharatpur",
      "Sikar",
      "Bhilwara",
      "Pali",
      "Tonk",
      "Sri Ganganagar"
    ]
  },
  delhi_ncr: {
    name: "Delhi NCR",
    cities: [
      "New Delhi",
      "Noida",
      "Greater Noida",
      "Gurgaon",
      "Faridabad",
      "Ghaziabad",
      "Meerut"
    ]
  },
  haryana: {
    name: "Haryana",
    cities: [
      "Chandigarh",
      "Ambala",
      "Karnal",
      "Panipat",
      "Hisar",
      "Rohtak",
      "Sonipat",
      "Rewari"
    ]
  },
  gujarat: {
    name: "Gujarat",
    cities: [
      "Ahmedabad",
      "Surat",
      "Vadodara",
      "Rajkot",
      "Gandhinagar",
      "Jamnagar",
      "Bhavnagar",
      "Junagadh"
    ]
  }
};

export const ALL_CITIES = Object.values(STATES).flatMap((s) => s.cities);
