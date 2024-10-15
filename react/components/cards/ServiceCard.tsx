import { CategoryData } from '@/types';
import React from 'react';

export const ServiceCard: React.FC<{
  category: CategoryData;
  onClick: () => void;
  isActive: boolean;
}> = ({ category, onClick, isActive }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full p-2 m-2 rounded-md bg-gray-200 transition-colors duration-300  ${
        isActive ? 'bg-purple-600 text-white' : ' text-black hover:bg-gray-300'
      }`}
      style={
        isActive
          ? {
              background: category.color,
            }
          : {}
      }
    >
      {category.title}
    </button>
  );
};
