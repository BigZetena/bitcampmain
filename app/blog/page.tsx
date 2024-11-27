import React from 'react';

import { blogCardsData } from '@/features/blog/lib/data/data';
import { MainBlogCard } from './ui/main-blog-card/main-blog-card.component';
import { SubTitle } from '@/shared/ui/general/SubTitle';
import { BlogLineList } from '@/features/blog/ui/blog-line-list.component';
import { AddBlogCard } from './ui/main-blog-card/add-blog-card.component';

const Page = () => {
  return (
    <div className="bg-darkBackground font-raleway">
      <MainBlogCard
        title={
          <>
            Мы <span className="text-[#B3B3B3]">разрабатыаем</span>,{' '}
            <span className="text-[#CDCDCD]">исследуем</span>,{' '}
            <span className="text-[#E3E3E3]">обучаем</span>,
            <br />а здесь{' '}
            <span className="bg-[#8864FF] px-2"> делимся опытом </span>
          </>
        }
      />
      <div className="container max-w-container mx-auto py-14">
        <SubTitle>Последнее в блоге</SubTitle>
        <div className="py-14">
          <BlogLineList blogCardsData={blogCardsData} />
        </div>
        <AddBlogCard />
      </div>
    </div>
  );
};
export default Page;
