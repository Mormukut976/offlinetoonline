'use client';

import React from 'react';
import Link from 'next/link';
import { SERVICES } from '@/data/services';
import { COMPANY } from '@/data/company';
import { ArrowRight, CheckCircle2, MessageSquare, Zap, Shield, Sparkles, Globe, MapPin, Calculator, QrCode } from 'lucide-react';
import ServicesCatalog from '@/components/home/ServicesCatalog';
import AgencyContact from '@/components/home/AgencyContact';

export default function ServicesPage() {
  return (
    <div className="py-12 lg:py-20 space-y-20">
      <ServicesCatalog />
      <AgencyContact />
    </div>
  );
}
