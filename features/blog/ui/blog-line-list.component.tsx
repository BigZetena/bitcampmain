import React from 'react';
import { BlogLineCard } from './blog-line-card.component';
import { BlogCardData } from '../types/blog.type';

export const BlogLineList = ({
  blogCardsData,
  short = false,
}: {
  blogCardsData: BlogCardData[];
  short?: boolean;
}) => {
  return (
    <div
      className={`${
        short
          ? 'flex flex-wrap'
          : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'
      } `}
    >
      {blogCardsData.map((e, i) => (
        <BlogLineCard
          key={i}
          date={e.date}
          tag={e.tag}
          imageUrl={e.imageUrl}
          title={e.title}
          author={e.author}
          id={e.id} // добавим автора
          short={short}
        />
      ))}
    </div>
  );
};
