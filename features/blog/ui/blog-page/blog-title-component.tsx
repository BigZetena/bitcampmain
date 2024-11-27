import React from 'react';

export const BlogTitle = ({ text }: { text: string }) => {
  return <h1 className="text-xl md:text-3xl font-bold mb-4">{text}</h1>;
};
