import React from 'react';

export const BlogSubtitle = ({ text }: { text: string }) => {
  return <h2 className="text-lg md:text-2xl font-bold mb-4">{text}</h2>;
};
