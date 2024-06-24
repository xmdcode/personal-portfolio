import React from 'react';
import { IconProps } from '.';

const ArrowFullIcon: React.FC<IconProps> = (props) => {
  const { className } = props;
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <defs>
        <clipPath id="clip897_2138">
          <rect
            id="Arrow Right"
            width="24.000000"
            height="24.000000"
            fill="currentColor"
            fillOpacity="0"
          />
        </clipPath>
      </defs>
      <g clipPath="url(#clip897_2138)">
        <path
          id="Vector"
          d="M15.16 5C17.27 6.55 19.16 8.37 20.79 10.4C20.92 10.58 21 10.79 21 11C21 11.21 20.92 11.41 20.79 11.59C19.16 13.62 17.27 15.44 15.16 17M21 11L3 11"
          stroke="currentColor"
          strokeOpacity="1.000000"
          strokeWidth="2.000000"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default ArrowFullIcon;
