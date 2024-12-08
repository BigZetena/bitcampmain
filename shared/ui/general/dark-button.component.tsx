'use client';

import React from 'react';

export const DarkButton = ({
  children,
  onClick = () => {},
  dark = true,
}: {
  children?: React.ReactNode | string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  dark?: boolean;
}) => {
  return (
    <button
      className={`md:py-5 md:px-10 p-2 rounded-md text-[#D6D6D6] font-raleway md:text-2xl ${
        dark ? 'bg-[#1b1b1b]' : 'bg-[#383838]'
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
