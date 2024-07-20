import React from 'react';
import { IconProps } from '.';

const GitHubIcon: React.FC<IconProps> = (props) => {
  const { className } = props;
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <defs>
        <clipPath id="clip1015_5621">
          <rect
            id="github-mark 1"
            width="24.000000"
            height="23.510206"
            fill="currentColor"
            fillOpacity="0"
          />
        </clipPath>
        <clipPath id="clip897_2132">
          <rect
            id="Github"
            width="24.000000"
            height="24.000000"
            fill="currentColor"
            fillOpacity="0"
          />
        </clipPath>
      </defs>
      <rect
        id="Github"
        width="24.000000"
        height="24.000000"
        fill="currentColor"
        fillOpacity="0"
      />
      <g clipPath="url(#clip897_2132)">
        <rect
          id="github-mark 1"
          width="24.000000"
          height="23.510206"
          fill="currentColor"
          fillOpacity="0"
        />
        <g clipPath="url(#clip1015_5621)">
          <path
            id="Vector"
            d="M11.96 0C5.34 0 0 5.38 0 12.05C0 17.38 3.42 21.89 8.18 23.48C8.77 23.6 8.99 23.22 8.99 22.9C8.99 22.62 8.97 21.67 8.97 20.67C5.64 21.39 4.95 19.23 4.95 19.23C4.41 17.84 3.62 17.48 3.62 17.48C2.53 16.74 3.7 16.74 3.7 16.74C4.91 16.82 5.54 17.97 5.54 17.97C6.61 19.81 8.33 19.29 9.03 18.97C9.13 18.19 9.44 17.66 9.78 17.36C7.13 17.08 4.33 16.04 4.33 11.41C4.33 10.09 4.81 9.01 5.56 8.18C5.44 7.88 5.03 6.64 5.68 4.98C5.68 4.98 6.69 4.66 8.97 6.22C9.94 5.96 10.95 5.82 11.96 5.82C12.97 5.82 14 5.96 14.95 6.22C17.23 4.66 18.24 4.98 18.24 4.98C18.89 6.64 18.48 7.88 18.36 8.18C19.13 9.01 19.59 10.09 19.59 11.41C19.59 16.04 16.79 17.06 14.12 17.36C14.55 17.74 14.93 18.45 14.93 19.59C14.93 21.21 14.91 22.5 14.91 22.9C14.91 23.22 15.13 23.6 15.72 23.48C20.48 21.89 23.9 17.38 23.9 12.05C23.92 5.38 18.56 0 11.96 0Z"
            fill="currentColor"
            fillOpacity="1.000000"
            fillRule="evenodd"
          />
        </g>
      </g>
    </svg>
  );
};

export default GitHubIcon;
