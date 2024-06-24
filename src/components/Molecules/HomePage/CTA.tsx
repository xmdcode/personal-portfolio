'use client';
import { MainButton } from '@/components/Atoms/Button';
import SendIcon from '@/components/icons/SendIcon';
import React from 'react';

const CTA = () => {
  return (
    <div className="w-full flex items-center">
      <div className="flex flex-col basis-1/2">
        <span className="text-48-bold text-white">Let’s work together</span>
        <span className="text-20-regular text-white text-medium-gray">
          Want to discuss an opportunity to create something great? I’m ready
          when you are.
        </span>
      </div>
      <div className="basis-1/2 flex items-center justify-end">
        <MainButton
          className="flex items-center  space-x-2"
          onClick={() => console.log('hi')}>
          <SendIcon className="w-6 h-6 text-white" />
          <span className="text-white">Get in Touch</span>
        </MainButton>
      </div>
    </div>
  );
};

export default CTA;
