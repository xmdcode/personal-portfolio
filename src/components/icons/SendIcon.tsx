import React from 'react';
import { IconProps } from '.';

const SendIcon: React.FC<IconProps> = (props) => {
  const { className } = props;
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <defs>
        <clipPath id="clip897_2137">
          <rect
            id="Send"
            width="24.000000"
            height="24.000000"
            fill="currentColor"
            fillOpacity="0"
          />
        </clipPath>
      </defs>
      <g clipPath="url(#clip897_2137)">
        <path
          id="Vector"
          d="M4.93 12L3.08 18.26C2.6 19.9 4.14 21.41 5.75 20.89C10.2 19.46 14.45 17.46 18.39 14.93C19.52 14.2 21 13.55 21 12C21 10.44 19.52 9.79 18.39 9.06C14.45 6.53 10.2 4.53 5.75 3.1C4.14 2.58 2.6 4.09 3.08 5.73L4.93 12ZM4.93 12L9.83 12"
          stroke="currentColor"
          strokeOpacity="1.000000"
          strokeWidth="2.000000"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default SendIcon;
