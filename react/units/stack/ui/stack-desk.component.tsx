import React from 'react';

export const StackDesk = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="font-raleway text-light rounded-md py-1 px-3 font-medium border-light border-solid border">
      <p>{children}</p>
    </div>
  );
};
