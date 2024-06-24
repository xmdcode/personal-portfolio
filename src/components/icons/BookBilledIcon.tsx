import React from 'react';
import { IconProps } from '.';

const BookBilledIcon: React.FC<IconProps> = (props) => {
  const { className } = props;
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <defs>
        <clipPath id="clip897_2146">
          <rect
            id="Book - Fill"
            width="24.000000"
            height="24.000000"
            fill="white"
            fillOpacity="0"
          />
        </clipPath>
      </defs>
      <rect
        id="Book - Fill"
        width="24.000000"
        height="24.000000"
        fill="#FFFFFF"
        fillOpacity="0"
      />
      <g clipPath="url(#clip897_2146)">
        <path
          id="Vector"
          d="M11.25 4.53C9.68 3.52 7.86 2.99 6 3C4.89 2.99 3.79 3.18 2.75 3.55C2.6 3.6 2.47 3.7 2.38 3.82C2.29 3.95 2.25 4.1 2.25 4.26L2.25 18.51C2.25 18.63 2.27 18.75 2.33 18.85C2.38 18.96 2.46 19.05 2.56 19.12C2.66 19.19 2.77 19.23 2.89 19.25C3.01 19.27 3.13 19.25 3.25 19.21C4.13 18.9 5.06 18.74 6 18.75C7.99 18.75 9.82 19.45 11.25 20.63L11.25 4.53ZM12.75 20.63C14.22 19.41 16.08 18.74 18 18.75C18.96 18.75 19.88 18.91 20.75 19.21C20.86 19.26 20.98 19.27 21.1 19.25C21.22 19.23 21.33 19.19 21.43 19.12C21.53 19.05 21.61 18.96 21.66 18.85C21.72 18.75 21.75 18.63 21.75 18.51L21.75 4.26C21.75 4.1 21.7 3.95 21.61 3.82C21.52 3.7 21.39 3.6 21.25 3.55C20.2 3.18 19.1 2.99 18 3C16.13 2.99 14.31 3.52 12.75 4.53L12.75 20.63Z"
          fill="#0D0D0D"
          fillOpacity="1.000000"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
};

export default BookBilledIcon;
