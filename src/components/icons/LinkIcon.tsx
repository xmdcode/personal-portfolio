import React from 'react';
import { IconProps } from '.';

const LinkIcon: React.FC<IconProps> = (props) => {
  const { className } = props;
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <defs>
        <clipPath id="clip1220_17001">
          <rect
            id="Link"
            width="24.000000"
            height="24.000000"
            fill="white"
            fillOpacity="0"
          />
        </clipPath>
      </defs>
      <g clipPath="url(#clip1220_17001)">
        <path
          id="Vector"
          d="M14.12 9.87L9.87 14.12M10.58 6.34L11.29 5.63C13.24 3.68 16.41 3.68 18.36 5.63C20.31 7.58 20.31 10.75 18.36 12.7L17.65 13.41M6.34 10.58L5.63 11.29C3.68 13.24 3.68 16.41 5.63 18.36C7.58 20.31 10.75 20.31 12.7 18.36L13.41 17.65"
          stroke="#0D0D0D"
          strokeOpacity="1.000000"
          strokeWidth="2.000000"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default LinkIcon;
