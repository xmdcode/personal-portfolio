import React from 'react';
import { IconProps } from '.';

const MessageFilledIcon: React.FC<IconProps> = (props) => {
  const { className } = props;
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <desc>Created with Pixso.</desc>
      <defs>
        <clipPath id="clip986_6017">
          <rect
            id="Message - Fill"
            width="24.000000"
            height="24.000000"
            fill="currentColor"
            fillOpacity="0"
          />
        </clipPath>
      </defs>
      <rect
        id="Message - Fill"
        width="24.000000"
        height="24.000000"
        fill="currentColor"
        fillOpacity="0"
      />
      <g clipPath="url(#clip986_6017)">
        <path
          id="Vector"
          d="M1.5 8.67L1.5 17.25C1.5 18.04 1.81 18.8 2.37 19.37C2.94 19.93 3.7 20.25 4.5 20.25L19.5 20.25C20.29 20.25 21.05 19.93 21.62 19.37C22.18 18.8 22.5 18.04 22.5 17.25L22.5 8.67L13.57 14.16C13.09 14.45 12.55 14.6 12 14.6C11.44 14.6 10.9 14.45 10.42 14.16L1.5 8.67Z"
          fill="currentColor"
          fillOpacity="1.000000"
          fillRule="nonzero"
        />
        <path
          id="Vector"
          d="M22.5 6.9L22.5 6.75C22.5 5.95 22.18 5.19 21.62 4.62C21.05 4.06 20.29 3.75 19.5 3.75L4.5 3.75C3.7 3.75 2.94 4.06 2.37 4.62C1.81 5.19 1.5 5.95 1.5 6.75L1.5 6.9L11.21 12.88C11.45 13.03 11.72 13.1 12 13.1C12.27 13.1 12.54 13.03 12.78 12.88L22.5 6.9Z"
          fill="currentColor"
          fillOpacity="1.000000"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
};

export default MessageFilledIcon;
