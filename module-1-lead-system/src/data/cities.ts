export interface StateData {
  name: string;
  phonePrefix: string;
  surnames: string[];
  cities: string[];
}

export interface CityZoneData {
  state: string;
  phonePrefix: string;
  zones: string[];
  bbox?: [number, number, number, number]; // [south, west, north, east] for Overpass OSM
}

export const STATES: Record<string, StateData> = {
  rajasthan: {
    name: "Rajasthan",
    phonePrefix: "9829",
    surnames: ["Sharma", "Jain", "Choudhary", "Singh", "Shekhawat", "Meena", "Soni", "Maheshwari", "Khandelwal", "Mittal", "Rawat", "Kumawat", "Solanki"],
    cities: [
      "Jaipur", "Jodhpur", "Udaipur", "Kota", "Ajmer", "Bikaner",
      "Alwar", "Bharatpur", "Sikar", "Bhilwara", "Pali", "Tonk", "Sri Ganganagar"
    ]
  },
  maharashtra: {
    name: "Maharashtra",
    phonePrefix: "9820",
    surnames: ["Patil", "Deshmukh", "Kulkarni", "Shinde", "Joshi", "Pawar", "More", "Sawant", "Chavan", "Kadam", "Bhosale", "Thakur", "Shah"],
    cities: [
      "Mumbai", "Pune", "Nagpur", "Nashik", "Thane", "Navi Mumbai",
      "Chhatrapati Sambhaji Nagar", "Solapur", "Kolhapur", "Amravati"
    ]
  },
  delhi_ncr: {
    name: "Delhi NCR",
    phonePrefix: "9810",
    surnames: ["Sharma", "Gupta", "Malhotra", "Verma", "Aggarwal", "Bansal", "Kapoor", "Chopra", "Arora", "Bhatia", "Garg", "Mehta"],
    cities: [
      "New Delhi", "Noida", "Greater Noida", "Gurgaon", "Faridabad", "Ghaziabad", "Meerut"
    ]
  },
  karnataka: {
    name: "Karnataka",
    phonePrefix: "9845",
    surnames: ["Gowda", "Shetty", "Rao", "Hegde", "Kumar", "Murthy", "Reddy", "Patil", "Bhat", "Prasad", "Naik"],
    cities: [
      "Bengaluru", "Mysuru", "Hubballi", "Mangaluru", "Belagavi", "Davanagere", "Ballari"
    ]
  },
  telangana: {
    name: "Telangana",
    phonePrefix: "9849",
    surnames: ["Reddy", "Rao", "Chowdary", "Varma", "Goud", "Sharma", "Raju", "Prasad", "Naidu", "Krishna"],
    cities: [
      "Hyderabad", "Secunderabad", "Warangal", "Nizamabad", "Karimnagar", "Khammam"
    ]
  },
  gujarat: {
    name: "Gujarat",
    phonePrefix: "9825",
    surnames: ["Patel", "Shah", "Mehta", "Desai", "Pandya", "Dave", "Prajapati", "Joshi", "Chauhan", "Modi", "Doshi"],
    cities: [
      "Ahmedabad", "Surat", "Vadodara", "Rajkot", "Gandhinagar", "Jamnagar", "Bhavnagar", "Junagadh", "Anand"
    ]
  },
  tamil_nadu: {
    name: "Tamil Nadu",
    phonePrefix: "9840",
    surnames: ["Iyer", "Iyengar", "Nadar", "Chettiar", "Gounder", "Naidu", "Pillai", "Sundaram", "Subramanian", "Raman"],
    cities: [
      "Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem", "Tiruppur", "Erode", "Vellore"
    ]
  },
  uttar_pradesh: {
    name: "Uttar Pradesh",
    phonePrefix: "9839",
    surnames: ["Mishra", "Pandey", "Shukla", "Tiwari", "Yadav", "Tripathi", "Dubey", "Gupta", "Srivastava", "Singh", "Maurya"],
    cities: [
      "Lucknow", "Kanpur", "Varanasi", "Agra", "Prayagraj", "Bareilly", "Aligarh", "Moradabad", "Gorakhpur", "Jhansi", "Ayodhya"
    ]
  },
  west_bengal: {
    name: "West Bengal",
    phonePrefix: "9830",
    surnames: ["Banerjee", "Chatterjee", "Mukherjee", "Bhattacharya", "Ghosh", "Dutta", "Das", "Roy", "Sengupta", "Chakraborty", "Bose"],
    cities: [
      "Kolkata", "Howrah", "Siliguri", "Durgapur", "Asansol", "Bardhaman", "Kharagpur"
    ]
  },
  madhya_pradesh: {
    name: "Madhya Pradesh",
    phonePrefix: "9826",
    surnames: ["Sharma", "Verma", "Patidar", "Yadav", "Mishra", "Jain", "Gupta", "Chouhan", "Tiwari", "Shrivastava"],
    cities: [
      "Indore", "Bhopal", "Gwalior", "Jabalpur", "Ujjain", "Sagar", "Dewas", "Satna", "Ratlam"
    ]
  },
  punjab: {
    name: "Punjab",
    phonePrefix: "9814",
    surnames: ["Singh", "Dhillon", "Sandhu", "Gill", "Sidhu", "Grewal", "Bajwa", "Batth", "Mann", "Chahal", "Kaur"],
    cities: [
      "Ludhiana", "Amritsar", "Jalandhar", "Patiala", "Bathinda", "Mohali", "Pathankot", "Hoshiarpur"
    ]
  },
  haryana: {
    name: "Haryana",
    phonePrefix: "9812",
    surnames: ["Choudhary", "Yadav", "Malik", "Dahiya", "Hooda", "Sangwan", "Dalal", "Tanwar", "Sheoran", "Rohilla"],
    cities: [
      "Chandigarh", "Ambala", "Karnal", "Panipat", "Hisar", "Rohtak", "Sonipat", "Rewari", "Yamunanagar"
    ]
  },
  andhra_pradesh: {
    name: "Andhra Pradesh",
    phonePrefix: "9848",
    surnames: ["Reddy", "Chowdary", "Naidu", "Raju", "Varma", "Prasad", "Sarma", "Murthy"],
    cities: [
      "Visakhapatnam", "Vijayawada", "Guntur", "Nellore", "Tirupati", "Kakinada", "Rajahmundry"
    ]
  },
  kerala: {
    name: "Kerala",
    phonePrefix: "9847",
    surnames: ["Nair", "Menon", "Pillai", "Kurian", "Mathew", "Varghese", "Nambiar", "Panicker", "Joseph"],
    cities: [
      "Kochi", "Thiruvananthapuram", "Kozhikode", "Thrissur", "Kollam", "Kannur", "Alappuzha"
    ]
  },
  bihar: {
    name: "Bihar",
    phonePrefix: "9835",
    surnames: ["Kumar", "Singh", "Yadav", "Mishra", "Jha", "Prasad", "Choudhary", "Pandey", "Verma"],
    cities: [
      "Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Darbhanga", "Purnia", "Begusarai"
    ]
  },
  jharkhand: {
    name: "Jharkhand",
    phonePrefix: "9835",
    surnames: ["Singh", "Mahato", "Munda", "Oram", "Verma", "Tiwary", "Choudhary", "Gupta"],
    cities: [
      "Ranchi", "Jamshedpur", "Dhanbad", "Bokaro", "Deoghar", "Hazaribagh"
    ]
  },
  odisha: {
    name: "Odisha",
    phonePrefix: "9861",
    surnames: ["Patnaik", "Mohanty", "Mishra", "Das", "Rath", "Pradhan", "Sahoo", "Nayak", "Panda"],
    cities: [
      "Bhubaneswar", "Cuttack", "Rourkela", "Berhampur", "Sambalpur", "Puri", "Balasore"
    ]
  },
  uttarakhand: {
    name: "Uttarakhand",
    phonePrefix: "9837",
    surnames: ["Rawat", "Negi", "Bisht", "Bhatt", "Joshi", "Panwar", "Chauhan", "Kandari"],
    cities: [
      "Dehradun", "Haridwar", "Rishikesh", "Haldwani", "Roorkee", "Nainital", "Kashipur"
    ]
  },
  assam: {
    name: "Assam",
    phonePrefix: "9864",
    surnames: ["Baruah", "Gogoi", "Saikia", "Bora", "Kalita", "Sarma", "Hazarika", "Das"],
    cities: [
      "Guwahati", "Silchar", "Dibrugarh", "Jorhat", "Nagaon", "Tinsukia"
    ]
  },
  goa: {
    name: "Goa",
    phonePrefix: "9822",
    surnames: ["Fernandes", "Pereira", "D'Souza", "Rodrigues", "Naik", "Kamat", "Shenvi", "Prabhu"],
    cities: [
      "Panaji", "Margao", "Vasco da Gama", "Mapusa", "Calangute", "Candolim", "Ponda"
    ]
  },
  chhattisgarh: {
    name: "Chhattisgarh",
    phonePrefix: "9827",
    surnames: ["Sahu", "Verma", "Dewangan", "Chandra", "Yadav", "Tiwari", "Sharma", "Baghel"],
    cities: [
      "Raipur", "Bhilai", "Bilaspur", "Korba", "Durg", "Rajnandgaon"
    ]
  },
  himachal_pradesh: {
    name: "Himachal Pradesh",
    phonePrefix: "9816",
    surnames: ["Thakur", "Sharma", "Chandel", "Rana", "Verma", "Kapoor", "Bhardwaj"],
    cities: [
      "Shimla", "Dharamshala", "Manali", "Solan", "Mandi", "Kullu", "Baddi"
    ]
  },
  jammu_kashmir: {
    name: "Jammu & Kashmir",
    phonePrefix: "9419",
    surnames: ["Sharma", "Bhat", "Gupta", "Raina", "Dar", "Lone", "Malik", "Pandit"],
    cities: [
      "Jammu", "Srinagar", "Udhampur", "Anantnag", "Baramulla"
    ]
  }
};

// Prime commercial zones & market areas for key Indian cities
export const CITY_ZONES: Record<string, CityZoneData> = {
  // Rajasthan
  "Jaipur": {
    state: "Rajasthan",
    phonePrefix: "9829",
    zones: [
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
    bbox: [26.7554, 75.6589, 27.0754, 75.9789]
  },
  "Jodhpur": {
    state: "Rajasthan",
    phonePrefix: "9414",
    zones: [
      "Sardarpura (Residency Road)",
      "Paota (B Road)",
      "Ratanada (Circuit House Road)",
      "Shastri Nagar Circle",
      "Station Road (Sohati Gate)",
      "Pal Road (Commercial Hub)",
      "Basni Industrial Area"
    ],
    bbox: [26.2000, 72.9500, 26.3500, 73.1000]
  },
  "Udaipur": {
    state: "Rajasthan",
    phonePrefix: "9414",
    zones: [
      "Sukhadia Circle (New Fatehpura)",
      "Panchwati & Chetak Circle",
      "Lake Pichola (Hanuman Ghat)",
      "Hiran Magri (Sector 4)",
      "Fateh Sagar (Rani Road)",
      "Bhuwana Bypass",
      "Subhash Nagar"
    ],
    bbox: [24.5200, 73.6500, 24.6400, 73.7500]
  },
  "Kota": {
    state: "Rajasthan",
    phonePrefix: "9828",
    zones: [
      "Talwandi (Commerce College Road)",
      "Vigyan Nagar Main Road",
      "Gumanpura Shopping Centre",
      "Rajeev Gandhi Nagar",
      "Dadabari Circle",
      "Indraprastha Industrial Area"
    ]
  },

  // Maharashtra
  "Mumbai": {
    state: "Maharashtra",
    phonePrefix: "9820",
    zones: [
      "Bandra Kurla Complex (BKC)",
      "Andheri West (Link Road)",
      "Lower Parel (Phoenix Palladium)",
      "Borivali West (SV Road)",
      "Dadar West (Ranade Road)",
      "Colaba & Fort Heritage Hub",
      "Powai (Hiranandani Gardens)",
      "Malad West (Mindspace Hub)",
      "Ghatkopar East (MG Road)",
      "Vashi (Sector 17 Navi Mumbai)",
      "Thane West (Ghodbunder Road)",
      "Juhu (JVPD Scheme)",
      "Kandivali West (Mahavir Nagar)"
    ],
    bbox: [18.9000, 72.8000, 19.2500, 72.9800]
  },
  "Pune": {
    state: "Maharashtra",
    phonePrefix: "9822",
    zones: [
      "Koregaon Park (North Main Road)",
      "Baner & Balewadi High Street",
      "Viman Nagar (Phoenix Marketcity Area)",
      "FC Road & JM Road (Shivaji Nagar)",
      "Kothrud (Paud Road Commercial Belt)",
      "Hinjewadi (Phase 1 InfoTech Park)",
      "Wakad (Datta Mandir Road)",
      "Camp (MG Road)",
      "Aundh (Parihar Chowk)",
      "Hadapsar (Magarpatta City)"
    ],
    bbox: [18.4300, 73.7600, 18.6200, 73.9500]
  },
  "Nagpur": {
    state: "Maharashtra",
    phonePrefix: "9823",
    zones: [
      "Dharampeth (WHC Road)",
      "Sadar (Residency Road)",
      "Ramdaspeth (Central Bazaar Road)",
      "Sitabuldi Market",
      "Wardha Road (MIHAN Hub)",
      "Pratap Nagar Main Road"
    ]
  },

  // Delhi NCR
  "New Delhi": {
    state: "Delhi NCR",
    phonePrefix: "9810",
    zones: [
      "Connaught Place (Inner & Outer Circle)",
      "Karol Bagh (Pusa Road & Ajmal Khan Rd)",
      "South Extension Part 1 & 2",
      "Lajpat Nagar (Central Market)",
      "Rohini (Sector 9 & 10 Hub)",
      "Dwarka (Sector 10 & 12 Sector Market)",
      "Saket (District Centre & PVR Anupam)",
      "Nehru Place (Commercial IT Hub)",
      "Chandni Chowk & Chawri Bazar",
      "Hauz Khas & Green Park Market"
    ],
    bbox: [28.5000, 77.0500, 28.7500, 77.3000]
  },
  "Noida": {
    state: "Delhi NCR",
    phonePrefix: "9818",
    zones: [
      "Sector 18 (Atta Market Commercial Hub)",
      "Sector 62 (Electronic City & IT Parks)",
      "Sector 50 (Central Commercial Belt)",
      "Sector 137 (Expressway Residential Hub)",
      "Sector 76 & 78 High Street Market",
      "Greater Noida (Pari Chowk & Alpha 1)"
    ],
    bbox: [28.5000, 77.3000, 28.6200, 77.4000]
  },
  "Gurgaon": {
    state: "Delhi NCR",
    phonePrefix: "9811",
    zones: [
      "Cyber City & DLF Phase 2",
      "Golf Course Road (Sector 42 & 43)",
      "Sector 29 (Commercial Leisure Hub)",
      "Sohna Road (Subhash Chowk)",
      "MG Road (Malls & Commercial Mile)",
      "Sector 56 (Huda Market)",
      "Palam Vihar Commercial Hub"
    ],
    bbox: [28.4000, 77.0000, 28.5200, 77.1000]
  },

  // Karnataka
  "Bengaluru": {
    state: "Karnataka",
    phonePrefix: "9845",
    zones: [
      "Koramangala (5th & 6th Block 80ft Road)",
      "Indiranagar (100ft & 12th Main Road)",
      "HSR Layout (Sector 1 & 27th Main)",
      "Whitefield (ITPL Main Road)",
      "Jayanagar (4th Block Commercial Complex)",
      "Electronic City (Phase 1 & Velankani Drive)",
      "Malleshwaram (Sampige Road)",
      "MG Road & Brigade Road Central",
      "Marathahalli (Outer Ring Road)",
      "Bellandur & Sarjapur Road Hub",
      "BTM Layout (2nd Stage 7th Main)"
    ],
    bbox: [12.8500, 77.5000, 13.1000, 77.7500]
  },
  "Mysuru": {
    state: "Karnataka",
    phonePrefix: "9845",
    zones: [
      "Devaraja Urs Road",
      "Gokulam (Contour Road)",
      "Saraswathipuram",
      "KRS Road Industrial Belt",
      "Jayalakshmipuram"
    ]
  },

  // Telangana
  "Hyderabad": {
    state: "Telangana",
    phonePrefix: "9849",
    zones: [
      "Banjara Hills (Road No 1 & Road No 12)",
      "Jubilee Hills (Check Post & Road No 36)",
      "Hitec City & Madhapur (Cyber Towers)",
      "Gachibowli (Financial District)",
      "Kukatpally (KPHB Colony Commercial Belt)",
      "Secunderabad (MG Road & Paradise)",
      "Begumpet & Somajiguda",
      "Kondapur (Botanical Garden Road)",
      "Ameerpet (Commercial & Training Hub)",
      "Manikonda & Puppalguda"
    ],
    bbox: [17.3000, 78.3500, 17.5200, 78.6000]
  },

  // Gujarat
  "Ahmedabad": {
    state: "Gujarat",
    phonePrefix: "9825",
    zones: [
      "SG Highway (Bodakdev & Thaltej Belt)",
      "CG Road (Navrangpura)",
      "Prahlad Nagar (Corporate Road)",
      "Satellite (Shivranjani Cross Roads)",
      "Sindhu Bhavan Road (SBR Luxury Belt)",
      "Ashram Road Commercial Hub",
      "Vastrapur Lake Commercial Complex",
      "Maninagar (Rambaug Market)",
      "Bopal & South Bopal High Street"
    ],
    bbox: [22.9500, 72.4800, 23.1200, 72.6800]
  },
  "Surat": {
    state: "Gujarat",
    phonePrefix: "9824",
    zones: [
      "Ring Road (Textile Market Hub)",
      "Ghod Dod Road (High-Street Fashion)",
      "Piplod (Dumas Road Commercial)",
      "Adajan (Honey Park Road)",
      "Varachha (Diamond & Business Hub)",
      "Vesu (VIP Road Luxury Belt)"
    ],
    bbox: [21.1200, 72.7500, 21.2600, 72.9000]
  },
  "Vadodara": {
    state: "Gujarat",
    phonePrefix: "9824",
    zones: [
      "Alkapuri (RC Dutt Road)",
      "Old Padra Road",
      "Sayajigunj (Station Road)",
      "Karelibaug Commercial Area",
      "Manjalpur Main Road",
      "Gotri Road"
    ]
  },

  // Tamil Nadu
  "Chennai": {
    state: "Tamil Nadu",
    phonePrefix: "9840",
    zones: [
      "T. Nagar (Ranganathan Street & Usman Rd)",
      "Anna Nagar (2nd Avenue Commercial)",
      "Nungambakkam High Road (NH Road)",
      "OMR (Thoraipakkam & Sholinganallur IT Belt)",
      "Adyar (LB Road & Shastri Nagar)",
      "Velachery (Bypass Road)",
      "Alwarpet & Mylapore Cultural Hub",
      "Kilpauk (Poonamallee High Road)",
      "Guindy (SIDCO Industrial Estate)"
    ],
    bbox: [12.9500, 80.1500, 13.1500, 80.3000]
  },
  "Coimbatore": {
    state: "Tamil Nadu",
    phonePrefix: "9842",
    zones: [
      "RS Puram (DB Road)",
      "Gandhipuram (Cross Cut Road)",
      "Race Course Road",
      "Avinashi Road IT Belt",
      "Saibaba Colony"
    ]
  },

  // Uttar Pradesh
  "Lucknow": {
    state: "Uttar Pradesh",
    phonePrefix: "9839",
    zones: [
      "Hazratganj (MG Marg Commercial Corridor)",
      "Gomti Nagar (Vipin Khand & Patrakarpuram)",
      "Alambagh Commercial Market",
      "Indira Nagar (Munshi Pulia)",
      "Mahanagar (Gole Market)",
      "Ashiyana (Sector K & L)",
      "Chowk (Heritage Business Hub)"
    ],
    bbox: [26.7800, 80.8500, 26.9500, 81.0500]
  },
  "Kanpur": {
    state: "Uttar Pradesh",
    phonePrefix: "9839",
    zones: [
      "Civil Lines (Mall Road)",
      "Swaroop Nagar",
      "Govind Nagar Market",
      "Gumti No. 5",
      "Birhana Road (Jewellery Market)"
    ]
  },
  "Varanasi": {
    state: "Uttar Pradesh",
    phonePrefix: "9839",
    zones: [
      "Sigra (Rath Yatra Road)",
      "Cantt (Station Road & Mall Area)",
      "Lanka (BHU Commercial Belt)",
      "Godowlia (Heritage Ghat Hub)",
      "Bhojubeer Circle"
    ]
  },

  // West Bengal
  "Kolkata": {
    state: "West Bengal",
    phonePrefix: "9830",
    zones: [
      "Park Street & Camac Street",
      "Salt Lake (Sector V IT & BPO Hub)",
      "New Town (Action Area 1 & 2)",
      "Gariahat Road (South Kolkata Hub)",
      "Ballygunge Circular Road",
      "Burrabazar & Posta Commercial Wholesale",
      "Howrah AC Market & Station Area",
      "Behala Chowrasta (Diamond Harbour Rd)",
      "Dum Dum & Lake Town VIP Road"
    ],
    bbox: [22.4500, 88.2500, 22.6500, 88.4500]
  },

  // Madhya Pradesh
  "Indore": {
    state: "Madhya Pradesh",
    phonePrefix: "9826",
    zones: [
      "Vijay Nagar (Scheme 54 & C21 Mall Belt)",
      "Palasia (56 Dukan & Old Palasia)",
      "MG Road (Treasure Island Commercial Belt)",
      "Rajwada & Sarafa Heritage Market",
      "Bhawarkua (Student & Coaching Hub)",
      "AB Road Commercial Strip",
      "Sapna Sangeeta Road"
    ],
    bbox: [22.6800, 75.8000, 22.7800, 75.9200]
  },
  "Bhopal": {
    state: "Madhya Pradesh",
    phonePrefix: "9826",
    zones: [
      "MP Nagar (Zone 1 & Zone 2 Business Hub)",
      "Arera Colony (10 No. Market & Bittan Market)",
      "New Market (TT Nagar)",
      "Hoshangabad Road Commercial Belt",
      "Kolar Road"
    ]
  },

  // Punjab & Chandigarh
  "Chandigarh": {
    state: "Punjab",
    phonePrefix: "9814",
    zones: [
      "Sector 17 (City Centre Commercial Plaza)",
      "Sector 35 (Commercial & Hotel Belt)",
      "Sector 8 & 9 (Inner Market & Cafes)",
      "Industrial Area Phase 1 & 2",
      "Mohali (Phase 7 & Phase 3B2 High Street)",
      "Panchkula (Sector 9 & 11 Commercial Complex)"
    ],
    bbox: [30.6800, 76.7200, 30.7800, 76.8400]
  },
  "Ludhiana": {
    state: "Punjab",
    phonePrefix: "9814",
    zones: [
      "Ferozepur Road (Mall Road Belt)",
      "Ghumar Mandi Commercial Market",
      "Model Town (Market Area)",
      "Chaura Bazaar (Textile Hub)",
      "Focal Point Industrial Zone"
    ]
  },

  // Bihar
  "Patna": {
    state: "Bihar",
    phonePrefix: "9835",
    zones: [
      "Fraser Road & Dak Bungalow Crossing",
      "Boring Road & Boring Canal Road",
      "Kankarbagh Main Road",
      "Bailey Road (Raja Bazar Belt)",
      "Exhibition Road Commercial Corridor",
      "Patliputra Colony"
    ],
    bbox: [25.5800, 85.0800, 25.6400, 85.2000]
  },

  // Kerala
  "Kochi": {
    state: "Kerala",
    phonePrefix: "9847",
    zones: [
      "MG Road (South to North)",
      "Marine Drive Commercial Hub",
      "Edappally (Lulu Mall Belt)",
      "Kakkanad (Infopark SEZ Belt)",
      "Panampilly Nagar Boutique Avenue",
      "Kaloor & Palarivattom Junction"
    ],
    bbox: [9.9300, 76.2500, 10.0500, 76.3500]
  },

  // Andhra Pradesh
  "Visakhapatnam": {
    state: "Andhra Pradesh",
    phonePrefix: "9848",
    zones: [
      "Dwaraka Nagar (Diamond Park Belt)",
      "Siripuram Junction & VIP Road",
      "Gajuwaka Industrial & Commercial Hub",
      "Jagadamba Junction",
      "Madhurawada IT SEZ Belt"
    ]
  },

  // Odisha
  "Bhubaneswar": {
    state: "Odisha",
    phonePrefix: "9861",
    zones: [
      "Janpath (Kharvela Nagar & Ashok Nagar)",
      "Saheed Nagar Commercial Street",
      "Patia (KIIT Road Tech Corridor)",
      "Nayapalli (IRC Village)",
      "Jayadev Vihar Circle"
    ]
  },

  // Uttarakhand
  "Dehradun": {
    state: "Uttarakhand",
    phonePrefix: "9837",
    zones: [
      "Rajpur Road (Commercial & Boutique Belt)",
      "Paltan Bazaar (Clock Tower)",
      "Chakrata Road Commercial Hub",
      "Ballupur Chowk",
      "Dharampur & Haridwar Road"
    ]
  },

  // Goa
  "Panaji": {
    state: "Goa",
    phonePrefix: "9822",
    zones: [
      "MG Road & 18th June Road",
      "Fontainhas Heritage Quarter",
      "Patto Plaza Commercial Centre",
      "Miramar & Caranzalem Belt",
      "Calangute & Candolim Tourist Strip",
      "Margao (Market Area & Station Rd)"
    ]
  },

  // Assam
  "Guwahati": {
    state: "Assam",
    phonePrefix: "9864",
    zones: [
      "GS Road (Christian Basti & Bhangagarh)",
      "Paltan Bazaar & Pan Bazaar",
      "Fancy Bazaar Wholesale Commercial Hub",
      "Zoo Road (RG Baruah Road)",
      "Six Mile & Khanapara"
    ]
  }
};

// Flattened list of ALL unique Indian cities across all states
export const ALL_CITIES = Array.from(
  new Set(Object.values(STATES).flatMap((s) => s.cities))
).sort((a, b) => a.localeCompare(b));
