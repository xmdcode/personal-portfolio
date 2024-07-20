import Image from 'next/image';
import React from 'react';
import LogoIcon from '@/components/icons/LogoIcon';
import bg_image from '/public/images/header_bg.png';

interface FooterProps {}

const Footer: React.FC<FooterProps> = (props) => {
  const {} = props;
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-main-dark-gray/10 px-4 2xl:px-0 left-0 right-0 bottom-0">
      <div
        className="absolute z-[-1] top-0 bottom-0 left-0 right-0 w-full  flex items-center justify-center rotate-180 bg-center bg-cover"
        style={{ backgroundImage: 'url(/images/header_bg.png)' }}
      />
      <div className="max-w-[1024px]  w-full mx-auto flex items-center pt-5 pb-[108px] lg:pb-[50px]">
        <div className="flex items-center py-[42px] w-full">
          <div className="basis-3/5 flex flex-col justify-between lg:h-[210px]">
            <div className="flex flex-col space-y-4">
              <LogoIcon className="w-[160px] h-[30px] lg:w-[320px] lg:h-[60px] text-white" />
              <span className="text-20-medium text-medium-gray ">
                Thanks for stopping by ッ
              </span>
            </div>
            <span className="text-14-regular lg:text-14-medium text-medium-gray mt-[30px] lg:mt-0">
              © {year} Xristos-Marios Dimopoulos. All Rights Reserved.
            </span>
          </div>
          {/* <div className="basis-2/5 flex flex-col items-center"></div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
