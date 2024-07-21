import React from 'react'
import HeroSection from '@/components/Atoms/HeroSection'
import { getContact } from '@/providers/contact'
import ThreeDotsMacOsIcon from '@/components/icons/ThreeDotsMacOsIcon'
import Input from '@/components/Atoms/Input'

const getData = async () => {
  return getContact()
}

export default async function Projects() {
  const { heroSection } = await getData()
  return (
    <section className="contact flex flex-col">
      <HeroSection title={heroSection.title} subtitle={heroSection.subtitle} />
      <div className="lg:max-w-[1024px] mx-auto w-full flex flex-col border border-[#383737] rounded-[12px] bg-main-onyx">
        <div className="w-full relative lg:py-[18px] flex items-center justify-center border-b border-white/5">
          <ThreeDotsMacOsIcon className="absolute top-[16px] left-4" />
          <span className="text-16-regular text-white">New Message</span>
        </div>
        <div className="py-[10px] px-[32px] w-full flex flex-col space-y-4">
          <Input
            name="Email"
            wrapperClassName="w-full max-w-full border-b border-white/10"
            placeholder="Enter your email address"
          />
          <Input
            name="Name"
            wrapperClassName="w-full max-w-full border-b border-white/10"
            placeholder="Enter your name"
          />
          <Input
            name="Subject"
            wrapperClassName="w-full max-w-full border-b border-white/10"
            placeholder="Enter subject"
          />
        </div>
      </div>
    </section>
  )
}
