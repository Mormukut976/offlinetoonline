import React from 'react';
import EditionsHero from '@/components/editions/EditionsHero';
import EditionsShowcase from '@/components/editions/EditionsShowcase';
import EditionsGrid from '@/components/editions/EditionsGrid';
import EditionsPricing from '@/components/editions/EditionsPricing';
import EditionsFounder from '@/components/editions/EditionsFounder';

export default function HomePage() {
  return (
    <div className="w-full">
      <EditionsHero />
      <EditionsShowcase />
      <EditionsGrid />
      <EditionsPricing />
      <EditionsFounder />
    </div>
  );
}
