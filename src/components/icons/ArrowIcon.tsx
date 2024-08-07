import React from 'react'
import { IconProps } from '.'

const ArrowIcon: React.FC<IconProps> = (props) => {
  const { className } = props
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M15 7L10 12L15 17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default ArrowIcon
