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
      className={`text-primary text-4xl font-manrope ${right && 'text-right'}`}
    >
      {children}
    </h3>
  );
};
