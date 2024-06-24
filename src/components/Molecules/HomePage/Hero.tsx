'use client';
import { MainButton, SecondaryButton } from '@/components/Atoms/Button';
import React from 'react';

const Hero = () => {
  return (
    <div className="w-full flex flex-col space-y-10 py-[140px]">
      <div className="flex items-center text-60-bold space-x-3">
        <span className="text-medium-gray">{"I'm"}</span>
        <span className="text-white">Xristos Marios Dimopoulos</span>
      </div>
      <span className="text-24-medium text-main-dark-gray max-w-[60%] w-full">
        A front-end engineer and UI/UX designer helping startups turn their
        visions into a digital reality. I specialize in designing and building
        modern mobile and web-based apps.
      </span>
      <div className="flex items-center space-x-4">
        <MainButton onClick={() => console.log('hi')}>See my resume</MainButton>
        <SecondaryButton onClick={() => console.log('hi')}>
          Get in touch
        </SecondaryButton>
      </div>
    </div>
  );
};

export default Hero;
