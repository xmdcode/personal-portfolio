import React from 'react';
import { IconProps } from '.';

const PlusIcon: React.FC<IconProps> = (props) => {
  const { className } = props;
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <defs>
        <clipPath id="clip910_2216">
          <rect
            id="Plus"
            width="24.000000"
            height="24.000000"
            transform="translate(24.000000 0.000000) rotate(90.000000)"
            fill="white"
            fillOpacity="0"
          />
        </clipPath>
      </defs>
      <g clipPath="url(#clip910_2216)">
        <path
          id="Vector"
          d="M12 19L12 12L12 5M5 12L12 12M12 12L19 12"
          stroke="#0D0D0D"
          strokeOpacity="1.000000"
          strokeWidth="2.000000"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default PlusIcon;
