import React from 'react'
import { cn } from '../utils/utils'
import { HeroSection as HeroSectionType } from '@/payload-types'

interface HeroSectionProps {
  title: HeroSectionType['title']
  subtitle: HeroSectionType['subtitle']
  wrapperClassname?: string
}

const HeroSection: React.FC<HeroSectionProps> = (props) => {
  const { title, subtitle, wrapperClassname } = props

  return (
    <div
      className={cn(
        'flex flex-col mb-[60px] border-b pb-[60px] border-[#ffffff1a]',
        wrapperClassname,
      )}
    >
      <div className="lg:max-w-[1024px] mx-auto w-full flex flex-col space-y-2">
        <span className="text-48-bold lg:text-80-bold text-white max-w-full break-words">
          {title}
        </span>
        <span className="text-16-regular lg:text-24-regular text-medium-gray max-w-full break-words">
          {subtitle}
        </span>
      </div>
    </div>
  )
}

export default HeroSection
