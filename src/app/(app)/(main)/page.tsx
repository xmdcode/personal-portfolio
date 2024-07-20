import React from 'react';
import { getProjects } from '@/providers/home';
import { getFourCardSection } from '@/providers/home';
import CTA from '@/components/Molecules/HomePage/CTA';
import Hero from '@/components/Molecules/HomePage/Hero';
import Work from '@/components/Molecules/HomePage/Work';

import FourCardSection from '@/components/Molecules/HomePage/FourCardSection';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Work projects={getProjects().projects} />
      <FourCardSection {...getFourCardSection()} />
      <CTA />
    </>
  );
};

export default HomePage;
