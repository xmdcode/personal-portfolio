import React from 'react';
import { IconProps } from '.';

const StackOutlineIcon: React.FC<IconProps> = (props) => {
  const { className } = props;
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <defs>
        <clipPath id="clip897_2147">
          <rect
            id="Stack - Outline"
            width="24.000000"
            height="24.000000"
            fill="white"
            fill-opacity="0"
          />
        </clipPath>
      </defs>
      <rect
        id="Stack - Outline"
        width="24.000000"
        height="24.000000"
        fill="#FFFFFF"
        fill-opacity="0"
      />
      <g clip-path="url(#clip897_2147)">
        <path
          id="Vector"
          d="M6.42 9.75L2.25 12L6.42 14.25L12 17.25L17.57 14.25L21.75 12L17.57 9.75M12 12.75L17.57 9.75L21.75 7.5L12 2.25L2.25 7.5L6.42 9.75L12 12.75ZM17.57 14.25L21.75 16.5L12 21.75L2.25 16.5L6.42 14.25"
          stroke="#0D0D0D"
          stroke-opacity="1.000000"
          stroke-width="1.500000"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  );
};

export default StackOutlineIcon;
