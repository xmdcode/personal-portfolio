import React from 'react';
import { IconProps } from '.';

const MoreOutlineIcon: React.FC<IconProps> = (props) => {
  const { className } = props;
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <defs>
        <clipPath id="clip941_5393">
          <rect
            id="More - Outline"
            width="24.000000"
            height="24.000000"
            fill="white"
            fillOpacity="0"
          />
        </clipPath>
      </defs>
      <rect
        id="More - Outline"
        width="24.000000"
        height="24.000000"
        fill="#FFFFFF"
        fillOpacity="0"
      />
      <g clipPath="url(#clip941_5393)">
        <path
          id="Vector"
          d="M4 12.5L20.5 12.5M4 16.25L20.5 16.25M4 20L20.5 20M18.62 5C19.12 5 19.59 5.19 19.95 5.54C20.3 5.9 20.5 6.37 20.5 6.87C20.5 7.37 20.3 7.84 19.95 8.2C19.59 8.55 19.12 8.75 18.62 8.75L5.87 8.75C5.37 8.75 4.9 8.55 4.54 8.2C4.19 7.84 4 7.37 4 6.87C4 6.37 4.19 5.9 4.54 5.54C4.9 5.19 5.37 5 5.87 5L18.62 5Z"
          stroke="#000000"
          strokeOpacity="1.000000"
          strokeWidth="1.500000"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default MoreOutlineIcon;
