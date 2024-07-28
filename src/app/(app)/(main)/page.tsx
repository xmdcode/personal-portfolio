import React from 'react'
import { getProjects } from '@/providers/home'
import { NextPageProps } from '@/genericTypes/nextjs'
import { getFourCardSection } from '@/providers/home'
import CTA from '@/components/Molecules/HomePage/CTA'
import Hero from '@/components/Molecules/HomePage/Hero'
import Work from '@/components/Molecules/HomePage/Work'

import FourCardSection from '@/components/Molecules/HomePage/FourCardSection'
import payload from '@/lib/payload'

const getLoaderData = async () => {
  const projects = await payload.find({
    collection: 'projects',
    sort: 'createdAt',
    depth: 2,
    limit: 3,
    showHiddenFields: false,
  })

  return { projects: projects.docs }
}

export const revalidate = 30

export default async function HomePage(props: NextPageProps) {
  const { projects } = await getLoaderData()
  return (
    <>
      <Hero />
      <Work projects={projects} />
      <FourCardSection {...getFourCardSection()} />
      <CTA />
    </>
  )
}
