import React from 'react'
import HeroSection from '@/components/Atoms/HeroSection'
import { getContact } from '@/providers/contact'
import ThreeDotsMacOsIcon from '@/components/icons/ThreeDotsMacOsIcon'
import Input from '@/components/Atoms/Input'
import InputTextArea from '@/components/Atoms/InputTextArea'
import { MainButton } from '@/components/Atoms/Button'
import MailIcon from '@/components/icons/MailIcon'
import LinkedInIcon from '@/components/icons/LinkedInIcon'
import XIcon from '@/components/icons/XIcon'
import GitHubIcon from '@/components/icons/GitHubIcon'
import Link from 'next/link'

const getData = async () => {
  return getContact()
}

const ContactLinks = [
  {
    link: '#',
    icon: <MailIcon className=" w-[28px] h-[24px] text-white" />,
  },
  {
    link: '#',
    icon: <LinkedInIcon className=" w-[28px] h-[24px] text-white" />,
  },
  { link: '#', icon: <XIcon className=" w-[28px] h-[24px] text-white" /> },
  {
    link: '#',
    icon: <GitHubIcon className=" w-[28px] h-[24px] text-white" />,
  },
]
export default async function Projects() {
  const { heroSection } = await getData()
  return (
    <section className="contact flex flex-col">
      <HeroSection title={heroSection.title} subtitle={heroSection.subtitle} />
      <div className="lg:max-w-[1024px] mx-auto w-full flex flex-col border border-[#383737] rounded-[12px] bg-main-onyx">
        <div className="w-full relative py-[18px] flex items-center justify-center border-b border-white/5">
          <ThreeDotsMacOsIcon className="absolute top-[16px] left-8 lg:left-4" />
          <span className="text-16-regular text-white">New Message</span>
        </div>
        <div className="py-[10px] px-[32px] w-full flex flex-col space-y-4">
          <Input
            name="Email"
            // className="text-14-regular lg:text-16-regular"
            wrapperClassName="text-14-regular lg:text-16-regular w-full max-w-full border-b border-white/10"
            placeholder="Enter your email address"
          />
          <Input
            name="Name"
            // className="text-14-regular lg:text-16-regular"
            wrapperClassName="text-14-regular lg:text-16-regular w-full max-w-full border-b border-white/10"
            placeholder="Enter your name"
          />
          <Input
            name="Subject"
            // className="text-14-regular lg:text-16-regular"
            wrapperClassName="text-14-regular lg:text-16-regular w-full max-w-full border-b border-white/10 pb-8 h-full"
            placeholder="Enter subject"
          />
          <InputTextArea
            className="h-[275px] text-white !mt-8 outline-none"
            name="Message"
            placeholder="Write your message here"
          />
          <div className="flex w-full justify-end px-[18px] py-[22px]">
            <MainButton>Send</MainButton>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-[45px] mt-[60px]">
        {ContactLinks.map((item, index) => (
          <Link href={item.link} key={index}>
            {item.icon}
          </Link>
        ))}
      </div>
    </section>
  )
}
