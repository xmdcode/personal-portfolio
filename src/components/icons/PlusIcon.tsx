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
            fill-opacity="0"
          />
        </clipPath>
      </defs>
      <g clip-path="url(#clip910_2216)">
        <path
          id="Vector"
          d="M12 19L12 12L12 5M5 12L12 12M12 12L19 12"
          stroke="#0D0D0D"
          stroke-opacity="1.000000"
          stroke-width="2.000000"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  );
};

export default PlusIcon;
