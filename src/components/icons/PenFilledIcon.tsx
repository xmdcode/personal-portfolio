import React from 'react';
import { IconProps } from '.';

const PenFilledIcon: React.FC<IconProps> = (props) => {
  const { className } = props;
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <defs>
        <clipPath id="clip897_2144">
          <rect
            id="Pen - Fill"
            width="24.000000"
            height="24.000000"
            fill="currentColor"
            fillOpacity="0"
          />
        </clipPath>
      </defs>
      <rect
        id="Pen - Fill"
        width="24.000000"
        height="24.000000"
        fill="currentColor"
        fillOpacity="0"
      />
      <g clipPath="url(#clip897_2144)">
        <path
          id="Vector"
          d="M21.73 2.26C21.23 1.77 20.57 1.5 19.87 1.5C19.17 1.5 18.51 1.77 18.01 2.26L16.86 3.42L20.57 7.13L21.73 5.98C22.22 5.48 22.5 4.82 22.5 4.12C22.5 3.42 22.22 2.76 21.73 2.26ZM19.51 8.19L15.8 4.48L3.65 16.63C3.03 17.25 2.58 18.01 2.33 18.85L1.53 21.53C1.49 21.66 1.49 21.8 1.52 21.93C1.55 22.06 1.62 22.18 1.71 22.28C1.81 22.37 1.93 22.44 2.06 22.47C2.19 22.51 2.33 22.5 2.46 22.46L5.14 21.66C5.98 21.41 6.74 20.96 7.36 20.34L19.51 8.19Z"
          fill="currentColor"
          fillOpacity="1.000000"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
};

export default PenFilledIcon;
