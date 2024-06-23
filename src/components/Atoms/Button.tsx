import React from 'react';
import { cn } from '../utils/utils';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset' | undefined;
  children?: JSX.Element;
  onClick(): void;
  className?: string;
}
const MainButton: React.FC<ButtonProps> = (props) => {
  const { type = 'button', children, onClick, className } = props;

  return (
    <button
      className={
        (cn(
          'py-5 px-8 bg-dark-gradient button-shadow text-main-white rounded-[9px] text-18-medium'
        ),
        className)
      }
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
      className={
        (cn(
          'py-5 px-8 bg-main-onyx text-main-dark-gray rounded-[9px] text-18-medium'
        ),
        className)
      }
      onClick={onClick}
      type={type}>
      {children}
    </button>
  );
};
export { MainButton, SecondaryButton };
