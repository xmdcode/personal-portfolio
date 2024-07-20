import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface FourCardSectionProps {
  cards: {
    title: string;
    dscr: string;
    link: string;
    image: {
      src: string;
      alt: string;
    };
  }[];
  title: string;
}

const FourCardSection: React.FC<FourCardSectionProps> = (props) => {
  const { cards, title } = props;
  return (
    <div className="flex flex-col mt-[60px] lg:mt-[100px] lg:max-w-[1024px] mx-auto w-full">
      <span className="text-32-bold lg:text-48-bold text-white pb-4 lg:pb-8">
        {title}
      </span>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {cards?.map((item, index) => {
          return (
            <Link
              href={item.link}
              key={index}
              className="w-full flex flex-col items-center h-[500px] rounded-[32px] bg-[#151515] overflow-hidden">
              <span className="text-24-bold lg:text-32-bold text-white mt-[60px]">
                {item.title}
              </span>
              <span className="text-15-regular lg:text-16-regular text-main-dark-gray mt-4">
                {item.dscr}
              </span>
              <div className="w-full h-full relative mt-[40px]">
                <Image fill={true} src={item.image.src} alt={item.image.alt} />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default FourCardSection;
