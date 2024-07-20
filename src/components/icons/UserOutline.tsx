import React from 'react';
import { IconProps } from '.';

const UserOutline: React.FC<IconProps> = (props) => {
  const { className } = props;
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <desc>Created with Pixso.</desc>
      <defs>
        <clipPath id="clip941_5389">
          <rect
            id="User - Outline"
            width="24.000000"
            height="24.000000"
            fill="white"
            fillOpacity="0"
          />
        </clipPath>
      </defs>
      <rect
        id="User - Outline"
        width="24.000000"
        height="24.000000"
        fill="#FFFFFF"
        fillOpacity="0"
      />
      <g clipPath="url(#clip941_5389)">
        <path
          id="Vector"
          d="M14.65 8.65C13.94 9.35 12.99 9.75 12 9.75C11 9.75 10.05 9.35 9.34 8.65C8.64 7.94 8.25 6.99 8.25 6C8.25 5 8.64 4.05 9.34 3.34C10.05 2.64 11 2.25 12 2.25C12.99 2.25 13.94 2.64 14.65 3.34C15.35 4.05 15.75 5 15.75 6C15.75 6.99 15.35 7.94 14.65 8.65ZM6.74 14.89C8.14 13.51 10.03 12.74 12 12.74C13.96 12.74 15.85 13.51 17.25 14.89C18.66 16.27 19.46 18.15 19.49 20.11C17.14 21.19 14.58 21.75 12 21.75C9.32 21.75 6.78 21.16 4.5 20.11C4.53 18.15 5.33 16.27 6.74 14.89Z"
          stroke="#000000"
          strokeOpacity="1.000000"
          strokeWidth="1.500000"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default UserOutline;
