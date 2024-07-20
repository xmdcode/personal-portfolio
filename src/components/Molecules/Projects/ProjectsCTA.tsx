'use client';
import { MainButton } from '@/components/Atoms/Button';
import SendIcon from '@/components/icons/SendIcon';
import StarsIcon from '@/components/icons/StarsIcon';
import React from 'react';

export interface ProjectsCTAProps {
  title: string;
  subtitle: string;
  CTAtext: string;
}

const ProjectsCTA: React.FC<ProjectsCTAProps> = (props) => {
  const { title, subtitle, CTAtext } = props;

  return (
    <div className="flex flex-col items-center justify-center lg:max-w-[1024px] mx-auto w-full rounded-[32px] border border-dashed border-[#383737] lg:mt-4 pt-[35px] pb-[68px] lg:pt-[96px] lg:pb-[128px]">
      <StarsIcon className="lg:w-[106px] lg:h-[106px] text-white pb-4 lg:pb-[41px]" />
      <span className="text-20-bold lg:text-32-bold text-white lg:pb-4">
        {title}
      </span>
      <span className="text-15-bold lg:text-16-bold text-main-dark-gray">
        {subtitle}
      </span>
      <MainButton
        className="flex items-center space-x-2 mt-[90px] justify-center max-w-[250px] w-full"
        onClick={() => console.log('hello')}>
        <div className="border border-dashed border-main-dark-gray">
          <SendIcon className="m-1 w-[18px] h-[18px] text-white" />
        </div>
        <span>{CTAtext}</span>
      </MainButton>
    </div>
  );
};

export default ProjectsCTA;
