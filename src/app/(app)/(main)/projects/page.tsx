import React from 'react';
import { getProjects } from '@/providers/home';
import Work from '@/components/Molecules/HomePage/Work';
import HeroSection from '@/components/Atoms/HeroSection';
import ProjectsCTA from '@/components/Molecules/Projects/ProjectsCTA';

const getData = async () => {
  return getProjects();
};

export default async function Projects() {
  const { projects, heroSection, ctaSection } = await getData();

  return (
    <section className="projects flex flex-col">
      <HeroSection title={heroSection.title} subtitle={heroSection.subtitle} />
      <Work projects={projects} />
      <ProjectsCTA
        title={ctaSection.title}
        subtitle={ctaSection.subtitle}
        CTAtext={ctaSection.CTAtext}
      />
    </section>
  );
}
