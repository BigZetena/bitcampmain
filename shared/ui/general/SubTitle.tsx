import React from 'react';

export const SubTitle = ({
  children,
  right,
}: {
  children: React.ReactNode;
  right?: boolean;
}) => {
  return (
    <h3
      className={`text-primary md:text-4xl text-3xl font-manrope ${
        right ? 'text-right' : 'text-left'
      }`}
    >
      {children}
    </h3>
  );
};
