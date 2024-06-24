import React from 'react';
import { IconProps } from '.';

const InfoOutlineIcon: React.FC<IconProps> = (props) => {
  const { className } = props;
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <defs>
        <clipPath id="clip897_2153">
          <rect
            id="Info - Outline"
            width="24.000000"
            height="24.000000"
            fill="white"
            fillOpacity="0"
          />
        </clipPath>
      </defs>
      <rect
        id="Info - Outline"
        width="24.000000"
        height="24.000000"
        fill="#FFFFFF"
        fillOpacity="0"
      />
      <g clipPath="url(#clip897_2153)">
        <path
          id="Vector"
          d="M11.25 11.25L11.29 11.23C11.41 11.16 11.56 11.14 11.7 11.15C11.84 11.17 11.98 11.22 12.09 11.31C12.2 11.4 12.29 11.52 12.33 11.66C12.38 11.79 12.38 11.94 12.35 12.08L11.64 14.91C11.61 15.05 11.61 15.2 11.66 15.33C11.7 15.47 11.79 15.59 11.9 15.68C12.01 15.77 12.15 15.83 12.29 15.84C12.43 15.86 12.58 15.83 12.7 15.77L12.75 15.75M20.31 15.44C19.86 16.53 19.19 17.52 18.36 18.36C17.52 19.19 16.53 19.86 15.44 20.31C14.35 20.76 13.18 21 12 21C10.81 21 9.64 20.76 8.55 20.31C7.46 19.86 6.47 19.19 5.63 18.36C4.8 17.52 4.13 16.53 3.68 15.44C3.23 14.35 3 13.18 3 12C3 9.61 3.94 7.32 5.63 5.63C7.32 3.94 9.61 3 12 3C14.38 3 16.67 3.94 18.36 5.63C20.05 7.32 21 9.61 21 12C21 13.18 20.76 14.35 20.31 15.44ZM12 8.25L12 8.25L12 8.25L12 8.25L12 8.25Z"
          stroke="#0D0D0D"
          strokeOpacity="1.000000"
          strokeWidth="1.500000"
          strokeLinejoin="round"
          stroke-linecap="round"
        />
      </g>
    </svg>
  );
};

export default InfoOutlineIcon;
