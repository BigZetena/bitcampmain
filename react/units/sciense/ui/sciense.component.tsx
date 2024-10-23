import { TitleLineCard } from '@/react/components/cards/title-line-card.component';
import React from 'react';
import { ScienseCards } from './sciense-cards.component';

const title = (
  <>
    Прикладные <br /> исследования
  </>
);

const description = (
  <>
    Мы предоставляем полный спектр услуг по проведению
    <br />
    прикладных исследований и разработке новых
    <br />
    технологий, включая консалтинг, разработку,
    <br />
    тестирование, внедрение и поддержку.
  </>
);

export const Sciense = () => {
  return (
    <div className=" max-w-container py-10 mx-auto">
      <TitleLineCard title={title} description={description} /> <ScienseCards />
    </div>
  );
};
