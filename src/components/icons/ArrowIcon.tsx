import React from 'react'
import { IconProps } from '.'

const ArrowIcon: React.FC<IconProps> = (props) => {
  const { className } = props
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <defs>
        <clipPath id="clip910_2199">
          <rect
            id="Chevron Top"
            width="24.000000"
            height="24.000000"
            transform="translate(24.000000 24.000000) rotate(179.999985)"
            fill="currentColor"
            fillOpacity="0"
          />
        </clipPath>
      </defs>
      <g clipPath="url(#clip910_2199)">
        <path
          id="Vector"
          d="M16 13.86C14.93 12.39 13.69 11.08 12.29 9.96C12.12 9.82 11.87 9.82 11.7 9.96C10.3 11.08 9.06 12.39 8 13.86"
          stroke="#0D0D0D"
          strokeOpacity="1.000000"
          strokeWidth="2.000000"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </g>
    </svg>
  )
}

export default ArrowIcon
