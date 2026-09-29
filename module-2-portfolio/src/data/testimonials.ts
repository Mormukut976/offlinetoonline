export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  business: string;
  city: string;
  rating: number;
  quote: string;
  result: string;
  serviceUsed: string;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: '1',
    name: 'Kan Singh Ji',
    role: 'Managing Director',
    business: 'Bhumika Tour & Travels',
    city: 'Jaipur, Rajasthan',
    rating: 5,
    quote: 'Raja bhai ne hamari travels agency ke liye jo website banayi hai, uski speed kamaal ki hai. Calculator dekh kar customer direct WhatsApp par cab book kar lete hain. Google par Page 1 par aane se hamari Justdial ki dependence bilkul khatam ho gayi!',
    result: '140+ Direct monthly booking inquiries without paying any aggregator cut',
    serviceUsed: 'Growth Business Suite + Fare Calculator'
  },
  {
    id: '2',
    name: 'Dr. Vivek Sharma',
    role: 'Chief Dental Surgeon',
    business: 'Apex Dental Care',
    city: 'Vaishali Nagar, Jaipur',
    rating: 5,
    quote: 'Reception par jo NFC acrylic standee lagaya hai, usse har din 3-4 satisfied patients phone tap karke 5-star Google review de dete hain. Hamari rating 4.2 se badh kar 4.9 ho gayi aur local patient walk-ins 65% increase hue hain.',
    result: 'Google 3-Pack rank #2 in Vaishali Nagar within 45 days',
    serviceUsed: 'Local 3-Pack SEO + NFC Standee'
  },
  {
    id: '3',
    name: 'Mukesh Choudhary',
    role: 'Owner & Developer',
    business: 'Marudhar Real Estate',
    city: 'Mansarovar, Jaipur',
    rating: 5,
    quote: 'Website ka sabse bada fayda yeh hai ki har mahine server ka koi bill nahi aata. 0 rupees monthly hosting wali baat 100% sach hai! Raja Singh Chauhan ne khud pura setup 3 din mein deliver kiya.',
    result: 'Zero monthly hosting bills and 35+ verified buyer inquiries every month',
    serviceUsed: 'Jamstack Portal + EMI Estimator'
  }
];
