import LogoIcon from '@/components/icons/LogoIcon';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className="sticky top-5 max-w-[1024px] w-full p-4 bg-[#18181D]/30 flex items-center justify-between mx-auto rounded-[12px] backdrop-blur-sm">
      <div className="flex items-center">
        <Link href="/">
          <LogoIcon className="w-[100px] h-[30px] text-white" />
        </Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Work</Link>
        <Link href="/articles">Articles</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </header>
  );
};

export default Header;
