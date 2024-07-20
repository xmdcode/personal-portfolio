import React from 'react';
import { IconProps } from '.';

const PhotoIcon: React.FC<IconProps> = (props) => {
  const { className } = props;
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <defs>
        <clipPath id="clip1090_5353">
          <rect
            id="Photo"
            width="24.000000"
            height="24.000000"
            fill="white"
            fillOpacity="0"
          />
        </clipPath>
      </defs>
      <g clipPath="url(#clip1090_5353)">
        <path
          id="Vector"
          d="M6 8.5C6 7.67 6.67 7 7.5 7C8.32 7 9 7.67 9 8.5C9 9.32 8.32 10 7.5 10C6.67 10 6 9.32 6 8.5ZM14 3C16.79 3 18.2 3 19.26 3.54C20.21 4.02 20.97 4.78 21.45 5.73C21.95 6.7 21.99 7.94 22 10.27C22 10.5 22 10.74 22 11L22 13C22 15.8 22 17.2 21.45 18.26C20.97 19.21 20.21 19.97 19.26 20.45C18.2 21 16.79 21 14 21L10 21C9.24 21 8.58 21 8.01 20.98C6.46 20.96 5.5 20.85 4.73 20.45C3.78 19.97 3.02 19.21 2.54 18.26C2 17.2 2 15.8 2 13L2 11C2 8.19 2 6.79 2.54 5.73C3.02 4.78 3.78 4.02 4.73 3.54C5.79 3 7.2 3 10 3L14 3ZM8.01 20.98C8.27 14.87 13.32 10 19.5 10C20.35 10 21.19 10.09 22 10.27"
          stroke="#0D0D0D"
          strokeOpacity="1.000000"
          strokeWidth="2.000000"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default PhotoIcon;
