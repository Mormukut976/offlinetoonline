export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  business: string;
  city: string;
  rating: number;
  quote: string;
  metric: string;
  verified: boolean;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'kan-singh-bhumika',
    name: 'Kan Singh',
    role: 'Founder & Managing Director',
    business: 'Shree Bhumika Tour & Travels',
    city: 'Jaipur, Rajasthan',
    rating: 5,
    quote: 'The web application built by Raja Singh Chauhan has incredible speed. Customers test the 250 KM outstation calculator and immediately book cabs on WhatsApp. Ranking on Google Page 1 has eliminated our dependence on third-party aggregators entirely!',
    metric: '140+ Monthly Direct Bookings',
    verified: true
  },
  {
    id: 'dr-vivek-apex',
    name: 'Dr. Vivek Sharma',
    role: 'Chief Dental Surgeon (BDS, MDS)',
    business: 'Apex Multi-Specialty Dental Clinic',
    city: 'Vaishali Nagar, Jaipur',
    rating: 5,
    quote: 'Our patient appointment scheduling became completely frictionless. Patients find us on Google Maps, review our treatments, and book slots directly on WhatsApp. The physical NFC counter standee at our reception has generated over 120 five-star reviews.',
    metric: '+68% Walk-in Consultations',
    verified: true
  },
  {
    id: 'kunal-rathore-haveli',
    name: 'Kunal Rathore',
    role: 'Managing Partner',
    business: 'The Royal Haveli Cafe & Lounge',
    city: 'MI Road, Jaipur',
    rating: 5,
    quote: 'Replacing paper menus with the contactless QR digital menu saved us thousands in printing costs. Table reservations for our rooftop seating are booked solid every weekend without paying food delivery aggregator commissions.',
    metric: '45+ Weekend Table Bookings',
    verified: true
  },
  {
    id: 'mahendra-shekhawat-realty',
    name: 'Mahendra Shekhawat',
    role: 'Director',
    business: 'Marudhar Estates Pvt Ltd',
    city: 'Mansarovar, Jaipur',
    rating: 5,
    quote: 'High-ticket buyers love the interactive EMI and plot size calculator. Instead of sharing leads with competitor brokers on classified portals, every buyer inquiry lands directly on our sales team phone.',
    metric: '₹4.2 Cr Pipeline Generated',
    verified: true
  }
];
