import React from 'react'
import { getProjects } from '@/providers/home'
import payload from '@/lib/payload'
import Work from '@/components/Molecules/HomePage/Work'
import HeroSection from '@/components/Atoms/HeroSection'
import ProjectsCTA from '@/components/Molecules/Projects/ProjectsCTA'

const getLoaderData = async () => {
  const projects = await payload.find({
    collection: 'projects',
    sort: 'createdAt',
    depth: 2,
    limit: 3,
    showHiddenFields: false,
  })

  return {
    projects: projects.docs,
    heroSection: getProjects().heroSection,
    ctaSection: getProjects().ctaSection,
  }
}

export default async function Projects() {
  const { projects, heroSection, ctaSection } = await getLoaderData()

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
  )
}
