import React from 'react';
import CTA from '@/components/Molecules/HomePage/CTA';
import Hero from '@/components/Molecules/HomePage/Hero';
import Work from '@/components/Molecules/HomePage/Work';
import { getProjects } from '@/providers/home';

const HomePage = () => {
  return (
    <>
      <Hero />
      <CTA />
      <Work projects={getProjects()} />
    </>
  );
};

export default HomePage;
