import React from 'react';
import { IconProps } from '.';

const LockIcon: React.FC<IconProps> = (props) => {
  const { className } = props;
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <defs>
        <clipPath id="clip912_4118">
          <rect
            id="Lock"
            width="24.000000"
            height="24.000000"
            fill="white"
            fillOpacity="0"
          />
        </clipPath>
      </defs>
      <rect
        id="Lock"
        width="24.000000"
        height="24.000000"
        fill="#FFFFFF"
        fillOpacity="0"
      />
      <g clipPath="url(#clip912_4118)">
        <path
          id="Vector"
          d="M16.5 10.5L16.5 6.75C16.5 5.55 16.02 4.41 15.18 3.56C14.33 2.72 13.19 2.25 12 2.25C10.8 2.25 9.66 2.72 8.81 3.56C7.97 4.41 7.5 5.55 7.5 6.75L7.5 10.5M17.25 21.75C17.84 21.75 18.41 21.51 18.84 21.09C19.26 20.66 19.5 20.09 19.5 19.5L19.5 12.75C19.5 12.15 19.26 11.58 18.84 11.15C18.41 10.73 17.84 10.5 17.25 10.5L6.75 10.5C6.15 10.5 5.58 10.73 5.15 11.15C4.73 11.58 4.5 12.15 4.5 12.75L4.5 19.5C4.5 20.09 4.73 20.66 5.15 21.09C5.58 21.51 6.15 21.75 6.75 21.75L17.25 21.75Z"
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

export default LockIcon;
