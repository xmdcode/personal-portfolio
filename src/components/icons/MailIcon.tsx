import React from 'react';
import { IconProps } from '.';

const MailIcon: React.FC<IconProps> = (props) => {
  const { className } = props;
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <defs>
        <clipPath id="clip897_2123">
          <rect
            id="Message - Fill"
            width="24.000000"
            height="24.000000"
            fill="white"
            fillOpacity="0"
          />
        </clipPath>
      </defs>
      <rect
        id="Message - Fill"
        width="24.000000"
        height="24.000000"
        fill="#FFFFFF"
        fillOpacity="0"
      />
      <g clipPath="url(#clip897_2123)">
        <path
          id="Vector"
          d="M0 7.71L0 17.51C0 18.42 0.36 19.29 1 19.94C1.64 20.58 2.51 20.94 3.42 20.94L20.57 20.94C21.48 20.94 22.35 20.58 22.99 19.94C23.63 19.29 24 18.42 24 17.51L24 7.71L13.79 13.98C13.25 14.32 12.63 14.49 12 14.49C11.36 14.49 10.74 14.32 10.2 13.98L0 7.71Z"
          fill="#0D0D0D"
          fillOpacity="1.000000"
          fillRule="nonzero"
        />
        <path
          id="Vector"
          d="M24 5.69L24 5.51C24 4.6 23.63 3.73 22.99 3.09C22.35 2.45 21.48 2.08 20.57 2.08L3.42 2.08C2.51 2.08 1.64 2.45 1 3.09C0.36 3.73 0 4.6 0 5.51L0 5.69L11.1 12.53C11.37 12.69 11.68 12.78 12 12.78C12.31 12.78 12.62 12.69 12.89 12.53L24 5.69Z"
          fill="#0D0D0D"
          fillOpacity="1.000000"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
};

export default MailIcon;
