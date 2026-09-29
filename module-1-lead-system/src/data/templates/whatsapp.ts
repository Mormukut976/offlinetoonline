export interface PitchTemplate {
  id: string;
  name: string;
  category: string;
  subject: string;
  template: (data: { ownerName?: string; businessName: string; city: string; category?: string; demoUrl?: string; price?: number }) => string;
}

export const WHATSAPP_TEMPLATES: PitchTemplate[] = [
  {
    id: "cold-outreach-general",
    name: "Cold Outreach (First Contact)",
    category: "general",
    subject: "Namaste & Website Proposition",
    template: ({ ownerName, businessName, category, price = 4999 }) => {
      const salutation = ownerName ? `नमस्ते ${ownerName} जी,` : `नमस्ते जी,`;
      return `${salutation}

मैं Raja Singh Chauhan (O2O Digital, Jaipur) से बोल रहा हूँ। 

मैंने आपका *${businessName}* Google पर देखा। आपका काम बहुत बढ़िया है! 👍

क्या आपकी कोई official website है? अगर नहीं, तो हम सिर्फ ₹${price.toLocaleString("en-IN")} में एक professional, ultra-fast website बना सकते हैं जिससे आपको Google से direct customer calls और WhatsApp bookings मिलेंगी।

✅ Zero monthly server bill (Lifetime free hosting)
✅ Google Maps 5-Star Listing
✅ 48 घंटे में Live Guarantee

🎁 Special Offer: इस हफ्ते जुड़ने पर 20% discount!
क्या मैं आपको एक 2-minute demo design भेज सकता हूँ?`;
    }
  },
  {
    id: "tour-travel-specific",
    name: "Tour & Travels (Proof Pitch)",
    category: "tour_travel",
    subject: "Bhumika Travels Proof + Fare Calculator",
    template: ({ ownerName, businessName }) => {
      const salutation = ownerName ? `नमस्ते ${ownerName} जी,` : `नमस्ते सर,`;
      return `${salutation}

हम राजस्थान के टूर व टैक्सी ऑपरेटर्स के लिए direct online booking system तैयार करते हैं। 

हाल ही में हमने जयपुर में *Bhumika Tour & Travels (bhumikatourandtravels.world)* का डिजिटल सेटअप किया, जो सिर्फ 48 घंटे में Google Page 1 पर रैंक कर गया! 🏆

आपके *${businessName}* के लिए भी:
🚗 200 KM Round-Trip Fare Calculator
📱 1-Tap Direct WhatsApp Booking
⚡ ₹0 Monthly Server Maintenance Cost

क्या हम आपके फ्लीट (Innova/Ertiga/Dzire) के लिए एक custom live demo तैयार करें?`;
    }
  },
  {
    id: "real-estate-pitch",
    name: "Real Estate & Builders (High Ticket)",
    category: "real_estate",
    subject: "Property Portfolio & WhatsApp Inquiries",
    template: ({ ownerName, businessName, city }) => {
      const salutation = ownerName ? `नमस्ते ${ownerName} जी,` : `नमस्ते सर,`;
      return `${salutation}

${city} में आपके *${businessName}* के प्रीमियम प्रोजेक्ट्स और प्लॉट्स के लिए हम एक ultra-fast luxury portfolio तैयार कर सकते हैं।

🏢 प्रॉपर्टी की शानदार गैलरी और वीडियो वॉकथ्रू
📲 डायरेक्ट खरीदार की WhatsApp इंक्वायरी (बिना किसी ब्रोकर कमीशन के)
⚡ Zero Monthly Server Maintenance

क्या हम आपके लिए 48 घंटे में एक सैंपल डिज़ाइन शेयर करें?`;
    }
  },
  {
    id: "clinic-doctor-pitch",
    name: "Doctors & Dental Clinics",
    category: "hospital",
    subject: "Google Maps 5-Star + Patient Appointments",
    template: ({ ownerName, businessName }) => {
      const docName = ownerName || "Doctor Saab";
      return `प्रणाम ${docName}! 

आपके क्लिनिक *${businessName}* के लिए हम Google Maps Local 3-Pack 5-Star विजिबिलिटी और ऑनलाइन अपॉइंटमेंट बुकिंग सिस्टम 48 घंटे में लाइव कर सकते हैं।

⭐ 5-Star रिव्यू बूस्टर सिस्टम
📅 पेशेंट डायरेक्ट WhatsApp अपॉइंटमेंट शेड्यूलर
🏥 क्लीनिकल सर्विसेज व टाइमिंग डिस्प्ले
⚡ कोई मंथली सर्वर चार्ज नहीं

क्या हम एक 2-मिनट का डेमो वॉकथ्रू शेयर करें?`;
    }
  },
  {
    id: "followup-demo",
    name: "Follow-Up (After Demo)",
    category: "followup",
    subject: "Demo Feedback & Starting Next Steps",
    template: ({ ownerName, businessName, demoUrl, price = 4999 }) => {
      const salutation = ownerName ? `नमस्ते ${ownerName} जी,` : `नमस्ते!`;
      return `${salutation}

पिछली बार हमने *${businessName}* की वेबसाइट के बारे में बात की थी।

मैंने आपके लिए एक FREE डेमो डिज़ाइन तैयार किया है! 🎨
👉 ${demoUrl || "https://bhumikatourandtravels.world"}

ये देखिए और बताइये कैसा लगा? 
Starting price सिर्फ ₹${price.toLocaleString("en-IN")} है और 48 घंटे में लाइव हो जाएगा! 🤝`;
    }
  }
];
