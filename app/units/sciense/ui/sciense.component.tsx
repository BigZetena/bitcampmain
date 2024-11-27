import { TitleLineCard } from '@/shared/ui/cards/title-line-card.component';
import React from 'react';
import { ScienseCards } from './sciense-cards.component';

const title = (
  <>
    Технологические <br /> направления
  </>
);

const description = (
  <>
    Мы предоставляем полный спектр услуг по проведению прикладных исследований и
    разработке новых технологий, включая консалтинг, разработку, тестирование,
    внедрение и поддержку.
  </>
);

export const Sciense = () => {
  return (
    <div className=" max-w-container container md:py-10 mx-auto" id="sciense">
      <TitleLineCard title={title} description={description} /> <ScienseCards />
    </div>
  );
};
