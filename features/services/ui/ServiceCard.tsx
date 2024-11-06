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
      className={`w-full p-2 my-2 md:m-2 rounded-md transition-colors duration-300 text-sm md:text-base ${
        isActive
          ? 'bg-purple-600 text-white'
          : 'bg-gray-200 text-black hover:bg-gray-300'
      }`}
      style={
        isActive
          ? {
              backgroundColor: category.color,
            }
          : {}
      }
    >
      {category.title}
    </button>
  );
};
