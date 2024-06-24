import React from 'react';
import { IconProps } from '.';

const BookOutlineIcon: React.FC<IconProps> = (props) => {
  const { className } = props;
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <defs>
        <clipPath id="clip897_2145">
          <rect
            id="Book - Outline"
            width="24.000000"
            height="24.000000"
            fill="white"
            fillOpacity="0"
          />
        </clipPath>
      </defs>
      <rect
        id="Book - Outline"
        width="24.000000"
        height="24.000000"
        fill="#FFFFFF"
        fillOpacity="0"
      />
      <g clipPath="url(#clip897_2145)">
        <path
          id="Vector"
          d="M12 6.04C10.35 4.56 8.21 3.74 6 3.75C4.94 3.75 3.93 3.93 3 4.26L3 18.51C3.96 18.17 4.97 17.99 6 18C8.3 18 10.4 18.86 12 20.29C13.64 18.81 15.78 17.99 18 18C19.02 17.99 20.03 18.17 21 18.51L21 4.26C20.06 3.93 19.05 3.75 18 3.75C15.78 3.74 13.64 4.56 12 6.04L12 20.29"
          stroke="#0D0D0D"
          strokeOpacity="1.000000"
          strokeWidth="1.500000"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default BookOutlineIcon;
