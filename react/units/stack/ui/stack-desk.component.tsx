import React from 'react';

export const StackDesk = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="font-raleway text-light rounded-md py-1 px-3 font-medium border border-light">
      <p className="text-sm md:text-base">{children}</p>
    </div>
  );
};
