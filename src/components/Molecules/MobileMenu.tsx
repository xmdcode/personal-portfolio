import React from 'react';
import Link from 'next/link';
import { cn } from '@/components/utils/utils';
import BagFilledIcon from '@/components/icons/BagFilledIcon';
import HomeFilledIcon from '@/components/icons/HomeFilledIcon';
import MessageFilledIcon from '@/components/icons/MessageFilledIcon';
import PenFilledIcon from '@/components/icons/PenFilledIcon';

interface MobileMenuProps {
  activeLink: string;
}

const MobileMenu: React.FC<MobileMenuProps> = (props) => {
  const { activeLink } = props;
  return (
    <div className="fixed bg-[#18181d99] rounded-[12px] p-4 max-w-[90%] w-full mx-auto bottom-5 left-4 right-4 flex md:hidden items-center justify-between">
      <Link
        className={cn('py-2 px-4 bg-inherit rounded-xl', {
          'bg-[#ffffff1a]': activeLink === '/',
        })}
        href="/">
        <HomeFilledIcon
          className={cn(`w-6 h-6 text-white opacity-70`, {
            'opacity-100': activeLink === '/',
          })}
        />
      </Link>
      <Link
        className={cn('py-2 px-4 bg-inherit rounded-xl', {
          'bg-[#ffffff1a]': activeLink === '/projects',
        })}
        href="/projects">
        <BagFilledIcon
          className={cn(`w-6 h-6 text-white opacity-70 `, {
            'opacity-100': activeLink === '/projects',
          })}
        />
      </Link>
      <Link
        className={cn('py-2 px-4 bg-inherit rounded-xl', {
          'bg-[#ffffff1a]': activeLink === '/articles',
        })}
        href="/articles">
        <PenFilledIcon
          className={cn(`w-6 h-6 text-white opacity-70 `, {
            'opacity-100': activeLink === '/articles',
          })}
        />
      </Link>
      <Link
        className={cn('py-2 px-4 bg-inherit rounded-xl', {
          'bg-[#ffffff1a]': activeLink === '/contact',
        })}
        href="/contact">
        <MessageFilledIcon
          className={cn(`w-6 h-6 text-white opacity-70 `, {
            'opacity-100': activeLink === '/contact',
          })}
        />
      </Link>
    </div>
  );
};

export default MobileMenu;
