import React from 'react';
import { IconProps } from '.';

const SunIcon: React.FC<IconProps> = (props) => {
  const { className } = props;
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <desc>Created with Pixso.</desc>
      <defs>
        <clipPath id="clip912_3783">
          <rect
            id="Sun"
            width="24.000000"
            height="24.000000"
            fill="white"
            fillOpacity="0"
          />
        </clipPath>
      </defs>
      <rect
        id="Sun"
        width="24.000000"
        height="24.000000"
        fill="#FFFFFF"
        fillOpacity="0"
      />
      <g clipPath="url(#clip912_3783)">
        <path
          id="Vector"
          d="M12 17C9.23 17 7 14.76 7 12C7 9.23 9.23 7 12 7C14.76 7 17 9.23 17 12C17 14.76 14.76 17 12 17Z"
          stroke="#0D0D0D"
          strokeOpacity="1.000000"
          strokeWidth="2.000000"
          strokeLinejoin="round"
        />
        <path
          id="Vector"
          d="M12 1L12 3M12 21L12 23M4.21 4.21L5.63 5.64M18.36 18.36L19.78 19.78M1 12L3 12M21 12L23 12M4.21 19.78L5.63 18.36M18.36 5.64L19.78 4.21"
          stroke="#0D0D0D"
          strokeOpacity="1.000000"
          strokeWidth="2.000000"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default SunIcon;
