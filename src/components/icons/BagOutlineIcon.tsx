import React from 'react';
import { IconProps } from '.';

const BagOutlineIcon: React.FC<IconProps> = (props) => {
  const { className } = props;
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <defs>
        <clipPath id="clip897_2141">
          <rect
            id="Bag - Outline"
            width="24.000000"
            height="24.000000"
            fill="white"
            fillOpacity="0"
          />
        </clipPath>
      </defs>
      <rect
        id="Bag - Outline"
        width="24.000000"
        height="24.000000"
        fill="#FFFFFF"
        fillOpacity="0"
      />
      <g clipPath="url(#clip897_2141)">
        <path
          id="Vector"
          d="M20.25 14.15L20.25 18.4C20.25 19.49 19.46 20.43 18.37 20.58C16.29 20.85 14.16 21 12 21C9.83 21 7.7 20.85 5.62 20.58C4.53 20.43 3.75 19.49 3.75 18.4L3.75 14.15M20.8 13.4C20.93 13.11 21 12.8 21 12.48L21 8.7C21 7.62 20.23 6.69 19.16 6.53C18.03 6.36 16.89 6.23 15.75 6.14C13.25 5.95 10.74 5.95 8.25 6.14C7.1 6.23 5.96 6.36 4.83 6.53C3.76 6.69 3 7.62 3 8.7L3 12.48C2.99 12.8 3.06 13.11 3.19 13.4C3.32 13.68 3.51 13.94 3.75 14.15C3.94 14.31 4.17 14.44 4.42 14.53C6.8 15.32 9.35 15.75 12 15.75C14.57 15.75 17.13 15.34 19.57 14.53C19.83 14.44 20.05 14.31 20.25 14.15C20.48 13.94 20.67 13.68 20.8 13.4ZM15.75 6.14L15.75 5.25C15.75 4.65 15.51 4.08 15.09 3.65C14.66 3.23 14.09 3 13.5 3L10.5 3C9.9 3 9.33 3.23 8.9 3.65C8.48 4.08 8.25 4.65 8.25 5.25L8.25 6.14M12 12.75L12 12.75L12 12.75L12 12.75L12 12.75Z"
          stroke="#0D0D0D"
          strokeOpacity="1.000000"
          strokeWidth="1.500000"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default BagOutlineIcon;
