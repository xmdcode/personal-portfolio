import React from 'react'
import { cn } from '../utils/utils'

interface InputTextAreaProps {
  className?: string
  name: string
  placeholder: string
}
const InputTextArea: React.FC<InputTextAreaProps> = (props) => {
  const { className, name, placeholder } = props
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      className={cn(
        'bg-main-black p-6 text-white text-16-regular placeholder:text-medium-gray rounded-[12px] shadow-[0px_19px_30px_0px_rgba(0,0,0,0.2)]',
        className,
      )}
    />
  )
}

export default InputTextArea
