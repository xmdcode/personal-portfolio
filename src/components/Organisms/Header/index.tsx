import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import GitHubIcon from '@/components/icons/GitHubIcon'
import HomeFilledIcon from '@/components/icons/HomeFilledIcon'
import LinkedInIcon from '@/components/icons/LinkedInIcon'
import LogoIcon from '@/components/icons/LogoIcon'
import XIcon from '@/components/icons/XIcon'
import bg_image from '/public/images/header_bg.png'
import { mapLogosToData } from '@/components/utils/mapDataUtils'
import { Header as HeaderType } from '@/payload-types'

const HeaderLinks = [
  { link: '/about', title: 'About' },
  { link: '/projects', title: 'Work' },
  { link: '/articles', title: 'Articles' },
  { link: '/contact', title: 'Contact' },
]

const Logos = [
  {
    link: '#',
    logo: <LinkedInIcon className="w-[22px] h-[22px] text-main-white/70" />,
  },
  {
    link: '#',
    logo: <XIcon className="w-[22px] h-[22px] text-main-white/70" />,
  },
  {
    link: '#',
    logo: <GitHubIcon className="w-[22px] h-[22px] text-main-white/70" />,
  },
]

interface HeaderSectionProps {
  navLinks: HeaderType['navLinks']
  socialLinks: HeaderType['socialLinks']
}
const HeaderSection: React.FC<HeaderSectionProps> = (props) => {
  const { navLinks, socialLinks } = props

  return (
    <header className="relative flex items-center justify-center">
      <div
        className="absolute z-[-1] top-0 left-0 right-0 w-full h-[550px] bg-center bg-cover"
        style={{ backgroundImage: 'url(/images/header_bg.png)' }}
      />
      <Link href="/" className="lg:hidden mt-8">
        <LogoIcon className="lg:hidden w-[160px] h-[30px] opacity-50" />
      </Link>
      <div className="hidden md:flex h-fit fixed left-0 right-0 z-10 bottom-5 mx-auto lg:top-5  max-w-[90%] lg:max-w-[1024px] w-full py-4 lg:p-4 bg-[#18181D]/30 items-center justify-between rounded-[12px] backdrop-blur-sm">
        <div className="flex basis-2/3 lg:basis-1/2 items-center justify-between">
          <Link href="/">
            <LogoIcon className="w-[160px] h-[30px] text-white" />
          </Link>
          {navLinks?.map((item) => (
            <Link className="text-16-medium text-light-gray" key={item.id} href={item?.link ?? '#'}>
              {item.label}
            </Link>
          ))}
        </div>
        <div className="basis-1/3 lg:basis-1/2 flex items-center justify-end space-x-6">
          {mapLogosToData(socialLinks)?.map((item) => (
            <a key={item.link} href={item?.link ?? '#'} target="_blank">
              {item.logo}
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}

export default HeaderSection
