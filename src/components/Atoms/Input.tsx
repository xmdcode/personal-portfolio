import React from 'react';
import { cn } from '../utils/utils';

interface InputProps {
  className?: string;
  name: string;
  type?: string;
  placeholder:string;
}

const Input: React.FC<InputProps> = (props) => {
  const { name, className, type = 'text',placeholder } = props;
  return (
    <div className="flex items-center max-w-[484px] h-[36px] pb-4 bg-main-onyx">
      <label className="text-main-white" htmlFor={name}>
        {name}:
      </label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        className={cn(
          'appearance-none outline-none bg-main-onyx text-white ml-2 placeholder:text-medium-gray',
          className
        )}
      />
    </div>
  );
};

export default Input;
