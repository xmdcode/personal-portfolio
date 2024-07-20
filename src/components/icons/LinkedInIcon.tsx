import React from 'react';
import { IconProps } from '.';

const LinkedInIcon: React.FC<IconProps> = (props) => {
  const { className } = props;
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <defs>
        <clipPath id="clip897_2125">
          <rect
            id="LinkedIn"
            width="24.000000"
            height="24.000000"
            fill="currentColor"
            fillOpacity="0"
          />
        </clipPath>
      </defs>
      <rect
        id="LinkedIn"
        width="24.000000"
        height="24.000000"
        fill="currentColor"
        fillOpacity="0"
      />
      <g clipPath="url(#clip897_2125)">
        <path
          id="Subtract"
          d="M3.44824 22.9979L20.5557 22.9979C21.9062 22.9979 23 21.9037 23 20.554L23 3.4458C23 2.09607 21.9062 1.00183 20.5557 1.00183L3.44824 1.00183C2.09766 1.00183 1.00391 2.09607 1.00391 3.4458L1.00391 20.554C1.00391 21.9037 2.09766 22.9979 3.44824 22.9979ZM4.05762 6.01123C4.05762 7.09045 4.92578 7.96545 5.99707 7.96545C7.06934 7.96545 7.93652 7.09045 7.93652 6.01123C7.93652 4.93201 7.06934 4.05688 5.99707 4.05688C4.92578 4.05688 4.05762 4.93201 4.05762 6.01123ZM16.6797 19.943L19.9434 19.943L19.9434 13.2375C19.9434 10.4005 18.3359 9.02869 16.0889 9.02869C13.8418 9.02869 12.8955 10.7788 12.8955 10.7788L12.8955 9.35229L9.75 9.35229L9.75 19.943L12.8955 19.943L12.8955 14.3834C12.8955 12.8938 13.582 12.0074 14.8945 12.0074C16.1006 12.0074 16.6797 12.8593 16.6797 14.3834L16.6797 19.943ZM7.65332 19.943L4.37305 19.943L4.37305 9.35229L7.65332 9.35229L7.65332 19.943Z"
          clipRule="evenodd"
          fill="currentColor"
          fillOpacity="1.000000"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
};

export default LinkedInIcon;
