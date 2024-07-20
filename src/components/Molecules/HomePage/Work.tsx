import ArrowFullIcon from '@/components/icons/ArrowFullIcon';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface WorkProps {
  projects: {
    icon: string;
    title: string;
    description: string;
    link: string;
    preview_img: string;
  }[];
}

const Work: React.FC<WorkProps> = (props) => {
  const { projects } = props;
  return (
    <div className="flex flex-col space-y-8 lg:max-w-[1024px] mx-auto w-full">
      <span className="text-32-bold lg:text-48-bold text-white">
        Selected Work
      </span>
      {projects.map((item) => {
        return (
          <div
            key={item.title}
            className="h-[400px] lg:h-[565px] w-full flex items-center p-6 lg:pr-0 lg:pl-[60px] lg:py-[60px] bg-main-onyx rounded-[32px] border border-[#383737] overflow-hidden">
            <div className="flex flex-col justify-between lg:basis-3/5 space-y-4">
              <div className="w-[70px] h-[70px] relative">
                <Image fill={true} src={item.icon} alt={item.title} />
              </div>
              <span className="text-20-bold lg:text-32-bold text-white">
                {item.title}
              </span>
              <span className="text-15-regular lg:text-16-regular text-main-dark-gray h-[180px] lg:h-[225px]">
                {item.description}
              </span>
              <Link
                href={item.link}
                className="text-main-white flex items-center space-x-2 group ">
                <span className="text-18-medium">Visit Site</span>
                <ArrowFullIcon className="w-[18px] h-[18px] lg:w-6 lg:h-6 group-hover:translate-x-2 transition-all ease-in-out delay-200" />
              </Link>
            </div>
            <div className="hidden lg:block basis-2/5 relative h-full ml-4 py-8">
              <div className="w-full h-full rotate-6">
                <Image fill={true} src={item.preview_img} alt={item.title} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Work;
