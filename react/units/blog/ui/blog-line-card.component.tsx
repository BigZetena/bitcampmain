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
    <div className="flex flex-col gap-4 max-w-[270px]">
      <div className=" bg-background">
        <img src={imageUrl} alt="blog-image" className="h-auto w-[270px] " />
      </div>
      <p className="font-manrope font-medium">[{date}]</p>
      <p className="font-medium">{title}</p>
      <div className="max-w-max">
        <StackDesk>{tag}</StackDesk>
      </div>
    </div>
  );
};
