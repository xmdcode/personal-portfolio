import React from 'react';

interface TagProps {
  children?: string;
}

const Tag: React.FC<TagProps> = (props) => {
  const { children } = props;
  return (
    <span className="text-14-regular py-[6px] px-3 bg-main-onyx text-light-gray--">
      {children}
    </span>
  );
};

export default Tag;
