import { StackBlockProps } from '@/types/stack.type';
import React from 'react';
import { StackCategory } from './stack-category.component';

export const StackCard: React.FC<StackBlockProps> = ({
  title,
  link,
  categories,
}) => (
  <div className="font-raleway pt-4 pb-10 relative ">
    <div
      className={`absolute top-0 left-0 right-0 h-[2px] bg-primary  w-full `}
    ></div>
    <div className="flex  justify-between">
      <h3 className="font-medium text-3xl text-primary">{title}</h3>{' '}
      {link && (
        <a href="#" className="text-[#A089D5] font-bold">
          {link}
        </a>
      )}
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {categories.map((category, index) => (
        <StackCategory
          key={index}
          name={category.name}
          items={category.items}
        />
      ))}
    </div>
  </div>
);
