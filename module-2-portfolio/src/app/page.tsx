import React from 'react';
import AgencyHero from '@/components/home/AgencyHero';
import AgencyIDCard from '@/components/home/AgencyIDCard';
import ArchitectureFlow from '@/components/home/ArchitectureFlow';
import ServicesCatalog from '@/components/home/ServicesCatalog';
import PortfolioShowcase from '@/components/home/PortfolioShowcase';
import BusinessROICalculator from '@/components/home/BusinessROICalculator';
import AgencyPricing from '@/components/home/AgencyPricing';
import AgencyContact from '@/components/home/AgencyContact';

export default function HomePage() {
  return (
    <div className="w-full">
      <AgencyHero />
      <AgencyIDCard />
      <ArchitectureFlow />
      <ServicesCatalog />
      <PortfolioShowcase />
      <BusinessROICalculator />
      <AgencyPricing />
      <AgencyContact />
    </div>
  );
}
