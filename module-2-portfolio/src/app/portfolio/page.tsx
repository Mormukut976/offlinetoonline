'use client';

import React from 'react';
import PortfolioShowcase from '@/components/home/PortfolioShowcase';
import AgencyContact from '@/components/home/AgencyContact';

export default function PortfolioPage() {
  return (
    <div className="py-12 lg:py-20 space-y-20">
      <PortfolioShowcase />
      <AgencyContact />
    </div>
  );
}
