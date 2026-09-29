import React from 'react';
import EditionsSidebar from '@/components/editions/EditionsSidebar';
import EditionsHero from '@/components/editions/EditionsHero';
import EditionsShowcase from '@/components/editions/EditionsShowcase';
import EditionsGrid from '@/components/editions/EditionsGrid';
import EditionsPricing from '@/components/editions/EditionsPricing';
import EditionsFounder from '@/components/editions/EditionsFounder';

export default function HomePage() {
  return (
    <div className="flex max-w-[1600px] w-full mx-auto">
      {/* Left Sticky Index (Shopify Editions Style) */}
      <EditionsSidebar />

      {/* Main Editorial Content Stream */}
      <div className="flex-1 min-w-0">
        <EditionsHero />
        <EditionsShowcase />
        <EditionsGrid />
        <EditionsPricing />
        <EditionsFounder />
      </div>
    </div>
  );
}
