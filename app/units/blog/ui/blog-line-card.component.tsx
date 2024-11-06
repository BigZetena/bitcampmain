/* eslint-disable @next/next/no-img-element */

import React from 'react';
import { StackDesk } from '../../stack/ui/stack-desk.component';

export const BlogLineCard = ({
  date,
  title,
  imageUrl,
  tag,
}: {
  date: string;
  title: string;
  tag: string;
  imageUrl: string;
}) => {
   return (
     <div className="flex flex-col gap-4">
       <div className="bg-background">
         <img src={imageUrl} alt={title} className="h-auto w-full" />
       </div>
       <p className="font-manrope font-medium text-sm md:text-base">[{date}]</p>
       <p className="font-medium text-base md:text-lg line-clamp-2">{title}</p>
       <div className="max-w-max">
         <StackDesk>{tag}</StackDesk>
       </div>
     </div>
   );
};
