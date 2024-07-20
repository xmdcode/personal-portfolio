'use client';
import { MainButton } from '@/components/Atoms/Button';
import SendIcon from '@/components/icons/SendIcon';
import React from 'react';

const CTA = () => {
  return (
    <div className="w-full flex flex-col space-y-[34px] lg:space-y-0 lg:flex-row items-center pt-[100px] lg:max-w-[1024px] mx-auto ">
      <div className="flex flex-col lg:basis-1/2 space-y-2 text-center lg:text-start">
        <span className="text-32-bold lg:text-48-bold text-white">
          Let’s work together
        </span>
        <span className="text-15-regular lg:text-20-regular text-medium-gray">
          Want to discuss an opportunity to create something great? I’m ready
          when you are.
        </span>
      </div>
      <div className="lg:basis-1/2 flex items-center justify-end">
        <MainButton
          className="flex items-center  space-x-2"
          onClick={() => console.log('hi')}>
          <SendIcon className="w-[18px] h-[18px] lg:w-6 lg:h-6 text-white" />
          <span className="text-18-medium text-white">Get in Touch</span>
        </MainButton>
      </div>
    </div>
  );
};

export default CTA;
