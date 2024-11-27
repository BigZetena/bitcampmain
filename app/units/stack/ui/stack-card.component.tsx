import { StackBlockProps } from '@/types/stack.type';
import React from 'react';
import { StackCategory } from './stack-category.component';

export const StackCard: React.FC<StackBlockProps> = ({
  title,
  link,
  categories,
  href
}) => (
  <div className="font-raleway pt-8 pb-12 relative">
    <div className="absolute top-0 left-0 right-0 h-[2px] bg-primary w-full"></div>
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
      <h3 className="font-medium text-2xl md:text-3xl text-primary">{title}</h3>
      {link && (
        <a
          href={href}
          className="text-[#A089D5] relative font-bold mt-2 md:mt-0 text-base md:text-lg transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#A089D5] after:transition-all after:duration-300 hover:after:w-full"
        >
          {link}
        </a>
      )}
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
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
