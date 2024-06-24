import React from 'react';
import { IconProps } from '.';

const StarsIcon: React.FC<IconProps> = (props) => {
  const { className } = props;
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <defs>
        <clipPath id="clip897_2126">
          <rect
            id="Stars"
            width="24.000000"
            height="24.000000"
            fill="white"
            fillOpacity="0"
          />
        </clipPath>
      </defs>
      <rect
        id="Stars"
        width="24.000000"
        height="24.000000"
        fill="#FFFFFF"
        fillOpacity="0"
      />
      <g clipPath="url(#clip897_2126)">
        <path
          id="Vector"
          d="M12.24 7.53C12.49 9.48 13.99 11.02 15.92 11.33L17 11.5L15.92 11.66C13.99 11.97 12.49 13.51 12.24 15.46L12.04 17L11.85 15.46C11.6 13.51 10.1 11.97 8.17 11.66L7.09 11.5L8.17 11.33C10.1 11.02 11.6 9.48 11.85 7.53L12.04 6L12.24 7.53ZM7.69 6.24C7.8 6.94 8.35 7.49 9.05 7.6L9.29 7.65L9.05 7.69C8.35 7.8 7.8 8.35 7.69 9.05L7.65 9.3L7.6 9.05C7.49 8.35 6.94 7.8 6.24 7.69L6 7.65L6.24 7.6C6.94 7.49 7.49 6.94 7.6 6.24L7.65 6L7.69 6.24ZM6.82 14.8L6.82 15.62L6.82 16.45M7.65 15.62L6.82 15.62M6.82 15.62L6 15.62"
          stroke="#0D0D0D"
          strokeOpacity="1.000000"
          strokeWidth="1.222222"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default StarsIcon;
