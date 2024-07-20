'use client';
import { MainButton, SecondaryButton } from '@/components/Atoms/Button';
import React from 'react';

const Hero = () => {
  return (
    <div className="w-full flex flex-col space-y-10 lg:pb-[370px] lg:max-w-[1024px] mx-auto">
      <div className="flex flex-col lg:flex-row lg:items-center text-48-bold lg:text-60-bold space-y-2 lg:space-x-3">
        <span className="text-medium-gray">{"I'm"}</span>
        <span className="text-white">Xristos Marios Dimopoulos</span>
      </div>
      <span className="text-15-medium lg:text-24-medium text-main-dark-gray lg:max-w-[60%] w-full">
        A front-end engineer and UI/UX designer helping startups turn their
        visions into a digital reality. I specialize in designing and building
        modern mobile and web-based apps.
      </span>
      <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-4">
        <MainButton className="w-full" onClick={() => console.log('hi')}>
          See my resume
        </MainButton>
        <SecondaryButton className="w-full" onClick={() => console.log('hi')}>
          Get in touch
        </SecondaryButton>
      </div>
    </div>
  );
};

export default Hero;
