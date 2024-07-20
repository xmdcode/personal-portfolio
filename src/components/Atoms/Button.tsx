
import React, { ReactElement } from 'react';
import { cn } from '../utils/utils';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset' | undefined;
  children?: React.ReactNode;
  onClick(): void;
  className?: string;
}
const MainButton: React.FC<ButtonProps> = (props) => {
  const { type = 'button', children, onClick, className } = props;

  return (
    <button
      className={cn(
        'py-5 px-8 bg-dark-gradient button-shadow  rounded-[9px] text-18-medium text-main-white',
        className
      )}
      onClick={onClick}
      type={type}>
      {children}
    </button>
  );
};

const SecondaryButton: React.FC<ButtonProps> = (props) => {
  const { type = 'button', children, onClick, className } = props;

  return (
    <button
      className={cn(
        'py-5 px-8 bg-main-onyx  rounded-[9px] text-18-medium text-main-dark-gray',
        className
      )}
      onClick={onClick}
      type={type}>
      {children}
    </button>
  );
};
export { MainButton, SecondaryButton };
