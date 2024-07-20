import React from 'react';
import { IconProps } from '.';

const MoonIcon: React.FC<IconProps> = (props) => {
  const { className } = props;
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <defs>
        <clipPath id="clip912_3784">
          <rect
            id="Moon"
            width="24.000000"
            height="24.000000"
            fill="white"
            fillOpacity="0"
          />
        </clipPath>
      </defs>
      <rect
        id="Moon"
        width="24.000000"
        height="24.000000"
        fill="#FFFFFF"
        fillOpacity="0"
      />
      <g clipPath="url(#clip912_3784)">
        <path
          id="Vector"
          d="M19.19 17.48C18.14 18.84 16.72 19.87 15.11 20.46C13.49 21.04 11.75 21.15 10.07 20.78C8.39 20.4 6.86 19.56 5.64 18.35C4.43 17.13 3.59 15.6 3.21 13.92C2.84 12.24 2.95 10.5 3.53 8.88C4.12 7.27 5.15 5.85 6.51 4.8C7.87 3.75 9.5 3.11 11.21 2.95C10.2 4.3 9.72 5.97 9.85 7.65C9.97 9.33 10.7 10.91 11.89 12.1C13.08 13.29 14.66 14.02 16.34 14.14C18.02 14.27 19.69 13.79 21.04 12.78C20.88 14.5 20.24 16.12 19.19 17.48Z"
          stroke="#0D0D0D"
          strokeOpacity="1.000000"
          strokeWidth="1.925637"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default MoonIcon;
