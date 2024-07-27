import Image from 'next/image'
import React from 'react'

export interface ImageCmsProps {
  className?: string
  src: string
  alt: string
}
const ImageCms: React.FC<ImageCmsProps> = (props) => {
  const { className, src, alt } = props
  return (
    <Image
      className={className}
      fill={true}
      src={`${process.env.NEXT_PUBLIC_API_URL}${src}`}
      alt={alt}
    />
  )
}

export default ImageCms
