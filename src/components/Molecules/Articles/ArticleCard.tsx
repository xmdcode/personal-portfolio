import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export interface ArticleCardProps {
  title: string;
  date: string;
  id: number;
  articleimg: {
    src: string;
    alt: string;
  };
}
const ArticleCard: React.FC<ArticleCardProps> = (props) => {
  const { articleimg, date, id, title } = props;
  return (
    <Link
      href={`/articles/${id}`}
      className="flex flex-col justify-end relative rounded-[22px] border-[#383737] h-[504px] w-full overflow-hidden group">
      <div className="w-full h-full object-cover absolute group-hover:scale-105 transition-all ease-in-out delay-300">
        <Image
          className="object-cover"
          fill={true}
          src={articleimg.src}
          alt={articleimg.alt}
        />
      </div>
      <div
        className="flex flex-col justify-end relative z-[10] space-y-2 px-6 pb-6 h-1/3 w-full"
        style={{
          background:
            'linear-gradient(180.00deg, rgba(21, 21, 21, 0),rgb(0, 0, 0) 100%)',
        }}>
        <span className="text-white text-20-semi-bold lg:text-32-semi-bold">
          {title}
        </span>
        <span className="text-main-dark-gray text-15-regular ++lg:text-16-regular">
          {date}
        </span>
      </div>
    </Link>
  );
};

export default ArticleCard;
