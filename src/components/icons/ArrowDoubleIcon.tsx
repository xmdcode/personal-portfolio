import React from 'react'
import { IconProps } from '.'

const ArrowDoubleIcon: React.FC<IconProps> = (props) => {
  const { className } = props
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="m13 16 4-4-4-4M7 16l4-4-4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default ArrowDoubleIcon
