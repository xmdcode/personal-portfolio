import React from 'react';
import { IconProps } from '.';

const HomeOutlineIcon: React.FC<IconProps> = (props) => {
  const { className } = props;
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <desc>Created with Pixso.</desc>
      <defs>
        <clipPath id="clip897_2139">
          <rect
            id="Home - Outline"
            width="24.000000"
            height="24.000000"
            fill="white"
            fillOpacity="0"
          />
        </clipPath>
      </defs>
      <rect
        id="Home - Outline"
        width="24.000000"
        height="24.000000"
        fill="#9D9192"
        fillOpacity="0"
      />
      <g clipPath="url(#clip897_2139)">
        <path
          id="Vector"
          d="M2.25 12L11.2 3.04C11.64 2.6 12.35 2.6 12.79 3.04L21.75 12M4.5 9.75L4.5 19.87C4.5 20.49 5 21 5.62 21L9.75 21L9.75 16.12C9.75 15.5 10.25 15 10.87 15L13.12 15C13.74 15 14.25 15.5 14.25 16.12L14.25 21L18.37 21C18.99 21 19.5 20.49 19.5 19.87L19.5 9.75M8.25 21L16.5 21"
          stroke="#0D0D0D"
          strokeOpacity="1.000000"
          strokeWidth="1.500000"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default HomeOutlineIcon;
