'use client';

import React from 'react';
import { ExternalLink, Star, MapPin, Compass, ArrowRight, ShieldCheck } from 'lucide-react';

export default function EditionsGallery() {
  const destinations = [
    {
      title: 'Jaipur Heritage & Sightseeing Tour',
      city: 'Jaipur, Rajasthan',
      image: '/images/jaipur_hawa_mahal_1790124825188.jpg',
      package: 'Same-Day City Cab',
      rate: 'From ₹1,800/day',
      spots: 'Hawa Mahal, Amer Fort, City Palace, Jal Mahal'
    },
    {
      title: 'Udaipur Romantic Lake City Tour',
      city: 'Udaipur, Rajasthan',
      image: '/images/udaipur_lake_pichola_1790124840891.jpg',
      package: '2 Days / 1 Night',
      rate: 'From ₹14/KM (Ertiga)',
      spots: 'Lake Pichola, City Palace, Jag Mandir, Fateh Sagar'
    },
    {
      title: 'Jodhpur Blue City & Mehrangarh',
      city: 'Jodhpur, Rajasthan',
      image: '/images/jodhpur_blue_city_1790124856857.jpg',
      package: 'Heritage Roundtrip',
      rate: 'From ₹14/KM',
      spots: 'Mehrangarh Fort, Jaswant Thada, Umaid Bhawan'
    },
    {
      title: 'Khatu Shyam Ji & Salasar Balaji Yatra',
      city: 'Sikar / Churu, Rajasthan',
      image: '/images/khatu_shyam_mandir_1790123802130.jpg',
      package: 'Divine Pilgrimage',
      rate: 'Fixed Rate ₹3,500',
      spots: 'Khatu Shyam Mandir Darshan, Salasar Balaji'
    }
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
              REAL CLIENT TOUR CATALOG
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
              Tour Itineraries Built for Bhumika Travels
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              We don't just build plain web pages; we create full commercial tour catalogs with real destination photos and 1-tap WhatsApp booking buttons that close customers fast.
            </p>
          </div>

          <a
            href="https://bhumikatourandtravels.world/"
            target="_blank"
            rel="noopener noreferrer"
            className="wix-btn-secondary px-5 py-2.5 text-xs inline-flex items-center gap-2 self-start sm:self-auto"
          >
            <span>Live Tour Packages on Website</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
          </a>
        </div>

        {/* 4 Photo Destination Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((d, idx) => (
            <div key={idx} className="wix-card overflow-hidden group bg-white border border-slate-200 shadow-md hover:shadow-xl transition-all">
              <div className="h-52 w-full overflow-hidden relative bg-slate-100">
                <img
                  src={d.image}
                  alt={d.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 text-[10px] font-bold px-2 py-0.5 rounded-full bg-black/70 text-white backdrop-blur-xs">
                  {d.package}
                </span>
                <span className="absolute bottom-3 right-3 text-xs font-black px-2.5 py-1 rounded-lg bg-emerald-600 text-white shadow-md">
                  {d.rate}
                </span>
              </div>

              <div className="p-5 space-y-3">
                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{d.city}</span>
                </div>

                <h3 className="text-base font-extrabold text-slate-900 group-hover:text-indigo-600 transition-colors leading-snug">
                  {d.title}
                </h3>

                <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                  Covering: {d.spots}
                </p>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-emerald-700 font-bold">WhatsApp Instant Book</span>
                  <a
                    href={`https://wa.me/918000907924?text=${encodeURIComponent(`Namaste Raja bhai! I saw your tour itinerary for ${d.title} and want something similar for my business.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-slate-100 hover:bg-black hover:text-white text-slate-700 flex items-center justify-center transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
