import React from 'react';
import { IconProps } from '.';

const HeadPhones: React.FC<IconProps> = (props) => {
  const { className } = props;
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <defs>
        <clipPath id="clip929_8059">
          <rect
            id="Headphones"
            width="24.000000"
            height="24.000000"
            fill="white"
            fillOpacity="0"
          />
        </clipPath>
      </defs>
      <rect
        id="Headphones"
        width="24.000000"
        height="24.000000"
        fill="#FFFFFF"
        fillOpacity="0"
      />
      <g clipPath="url(#clip929_8059)">
        <path
          id="Vector"
          d="M3 18L3 12C3 9.61 3.94 7.32 5.63 5.63C7.32 3.94 9.61 3 12 3C14.38 3 16.67 3.94 18.36 5.63C20.05 7.32 21 9.61 21 12L21 18"
          stroke="#0D0D0D"
          strokeOpacity="1.000000"
          strokeWidth="2.000000"
          strokeLinejoin="round"
          stroke-linecap="round"
        />
        <path
          id="Vector"
          d="M20.41 20.41C20.03 20.78 19.53 21 19 21L18 21C17.46 21 16.96 20.78 16.58 20.41C16.21 20.03 16 19.53 16 19L16 16C16 15.46 16.21 14.96 16.58 14.58C16.96 14.21 17.46 14 18 14L21 14L21 19C21 19.53 20.78 20.03 20.41 20.41ZM3.58 20.41C3.96 20.78 4.46 21 5 21L6 21C6.53 21 7.03 20.78 7.41 20.41C7.78 20.03 8 19.53 8 19L8 16C8 15.46 7.78 14.96 7.41 14.58C7.03 14.21 6.53 14 6 14L3 14L3 19C3 19.53 3.21 20.03 3.58 20.41Z"
          stroke="#0D0D0D"
          strokeOpacity="1.000000"
          strokeWidth="2.000000"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default HeadPhones;
