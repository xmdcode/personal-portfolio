import React from 'react';
import { IconProps } from '.';

const MessageOutlineIcon: React.FC<IconProps> = (props) => {
  const { className } = props;
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <desc>Created with Pixso.</desc>
      <defs>
        <clipPath id="clip897_2149">
          <rect
            id="Message - Outline"
            width="24.000000"
            height="24.000000"
            fill="white"
            fillOpacity="0"
          />
        </clipPath>
      </defs>
      <rect
        id="Message - Outline"
        width="24.000000"
        height="24.000000"
        fill="#FFFFFF"
        fillOpacity="0"
      />
      <g clipPath="url(#clip897_2149)">
        <path
          id="Vector"
          d="M21.75 17.25C21.75 17.84 21.51 18.41 21.09 18.84C20.66 19.26 20.09 19.5 19.5 19.5L4.5 19.5C3.9 19.5 3.33 19.26 2.9 18.84C2.48 18.41 2.25 17.84 2.25 17.25L2.25 6.75C2.25 6.15 2.48 5.58 2.9 5.15C3.33 4.73 3.9 4.5 4.5 4.5L19.5 4.5C20.09 4.5 20.66 4.73 21.09 5.15C21.51 5.58 21.75 6.15 21.75 6.75L21.75 17.25ZM21.75 6.75L21.75 6.99C21.75 7.37 21.65 7.75 21.46 8.09C21.27 8.42 21 8.7 20.67 8.9L13.17 13.52C12.82 13.74 12.41 13.85 12 13.85C11.58 13.85 11.17 13.74 10.82 13.52L3.32 8.91C2.99 8.7 2.72 8.42 2.53 8.09C2.34 7.75 2.25 7.37 2.25 6.99L2.25 6.75"
          stroke="#0D0D0D"
          strokeOpacity="1.000000"
          strokeWidth="1.500000"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default MessageOutlineIcon;
