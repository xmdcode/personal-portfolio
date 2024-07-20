import React from 'react';
import { IconProps } from '.';

const PenOutLineIcon: React.FC<IconProps> = (props) => {
  const { className } = props;
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <defs>
        <clipPath id="clip897_2143">
          <rect
            id="Pen - Outline"
            width="24.000000"
            height="24.000000"
            fill="white"
            fillOpacity="0"
          />
        </clipPath>
      </defs>
      <rect
        id="Pen - Outline"
        width="24.000000"
        height="24.000000"
        fill="#FFFFFF"
        fillOpacity="0"
      />
      <g clipPath="url(#clip897_2143)">
        <path
          id="Vector"
          d="M19.5 7.12L16.86 4.48L18.54 2.79C18.9 2.44 19.37 2.24 19.87 2.24C20.37 2.24 20.84 2.44 21.2 2.79C21.55 3.15 21.75 3.62 21.75 4.12C21.75 4.62 21.55 5.09 21.2 5.45L6.83 19.81C6.3 20.34 5.65 20.73 4.93 20.95L2.25 21.75L3.04 19.06C3.26 18.34 3.65 17.69 4.17 17.16L16.86 4.48L16.86 4.48"
          stroke="#0D0D0D"
          strokeOpacity="1.000000"
          strokeWidth="1.500000"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default PenOutLineIcon;
