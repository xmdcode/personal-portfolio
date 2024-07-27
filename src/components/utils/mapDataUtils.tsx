import { Header } from '@/payload-types'
import GitHubIcon from '../icons/GitHubIcon'
import LinkedInIcon from '../icons/LinkedInIcon'
import XIcon from '../icons/XIcon'
import MailIcon from '../icons/MailIcon'

const Logos = [
  {
    label: 'linkedin',
    logo: <LinkedInIcon className="w-[22px] h-[22px] text-main-white/70" />,
  },
  {
    label: 'twitter',
    logo: <XIcon className="w-[22px] h-[22px] text-main-white/70" />,
  },
  {
    label: 'github',
    logo: <GitHubIcon className="w-[22px] h-[22px] text-main-white/70" />,
  },
  {
    label: 'email',
    logo: <MailIcon className="w-[22px] h-[22px] text-main-white/70" />,
  },
]

export const mapLogosToData = (data: Header['socialLinks']) => {
  return data
    ?.map((item) => {
      const foundLogo = Logos?.find((logo) => logo.label === item.label)
      if (foundLogo) {
        return { ...item, logo: foundLogo.logo }
      }
    })
    ?.filter((item) => item !== undefined)
}
