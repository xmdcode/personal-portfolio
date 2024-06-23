import React from 'react';
import { IconProps } from '.';

const XIcon: React.FC<IconProps> = (props) => {
  const { className } = props;
  return (
    <svg width="24.000000" height="24.000000" viewBox="0 0 24 24" fill="none">
      <defs>
        <clipPath id="clip1218_16729">
          <rect
            id="Frame"
            width="24.000000"
            height="24.000000"
            fill="white"
            fill-opacity="0"
          />
        </clipPath>
        <clipPath id="clip897_2131">
          <rect
            id="X"
            width="24.000000"
            height="24.000000"
            fill="white"
            fill-opacity="0"
          />
        </clipPath>
      </defs>
      <g clip-path="url(#clip897_2131)">
        <rect
          id="Frame"
          width="24.000000"
          height="24.000000"
          fill="#FFFFFF"
          fill-opacity="0"
        />
        <g clip-path="url(#clip1218_16729)">
          <path
            id="Vector"
            d="M18.24 2.25L21.55 2.25L14.32 10.51L22.82 21.75L16.16 21.75L10.95 14.93L4.99 21.75L1.67 21.75L9.41 12.91L1.25 2.25L8.08 2.25L12.79 8.48L18.24 2.25ZM17.08 19.77L18.91 19.77L7.08 4.12L5.11 4.12L17.08 19.77Z"
            fill="#000000"
            fill-opacity="1.000000"
            fill-rule="nonzero"
          />
        </g>
      </g>
    </svg>
  );
};

export default XIcon;
