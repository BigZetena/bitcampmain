import React from 'react';
import { StackDesk } from './stack-desk.component';
import { StackCategoryProps } from '@/types';

export const StackCategory: React.FC<StackCategoryProps> = ({
  name,
  items,
}) => (
  <div className="mt-6">
    <h3 className="font-medium mb-4 text-lg md:text-xl">{name}</h3>
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <StackDesk key={item}>{item}</StackDesk>
      ))}
    </div>
  </div>
);
