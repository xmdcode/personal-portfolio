import React from 'react';
import { IconProps } from '.';

const UserFilledIcon: React.FC<IconProps> = (props) => {
  const { className } = props;
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <defs>
        <clipPath id="clip941_5390">
          <rect
            id="User - Fill"
            width="24.000000"
            height="24.000000"
            fill="white"
            fillOpacity="0"
          />
        </clipPath>
      </defs>
      <rect
        id="User - Fill"
        width="24.000000"
        height="24.000000"
        fill="#FFFFFF"
        fillOpacity="0"
      />
      <g clipPath="url(#clip941_5390)">
        <path
          id="Vector"
          d="M7.5 6C7.5 4.8 7.97 3.66 8.81 2.81C9.66 1.97 10.8 1.5 12 1.5C13.19 1.5 14.33 1.97 15.18 2.81C16.02 3.66 16.5 4.8 16.5 6C16.5 7.19 16.02 8.33 15.18 9.18C14.33 10.02 13.19 10.5 12 10.5C10.8 10.5 9.66 10.02 8.81 9.18C7.97 8.33 7.5 7.19 7.5 6ZM3.75 20.1C3.78 17.93 4.66 15.87 6.21 14.35C7.75 12.83 9.83 11.98 12 11.98C14.16 11.98 16.24 12.83 17.78 14.35C19.33 15.87 20.21 17.93 20.24 20.1C20.25 20.25 20.21 20.39 20.13 20.51C20.05 20.64 19.94 20.73 19.81 20.8C17.36 21.92 14.69 22.5 12 22.5C9.21 22.5 6.56 21.89 4.18 20.8C4.05 20.73 3.94 20.64 3.86 20.51C3.78 20.39 3.74 20.25 3.75 20.1Z"
          fill="#000000"
          fillOpacity="1.000000"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
};

export default UserFilledIcon;
