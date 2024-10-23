import { TitleLineCard } from '@/react/components/cards/title-line-card.component';
import React from 'react';
import { StudyWithUsList } from './study-with-us-list.component';
const title = (
  <>
    Обучение
    <br />с нами
  </>
);
const description = (
  <>
    Мы создаем сплоченное комьюнити в диджитал и прикладных инженерных
    специальностях для расширения области развития кадров.
  </>
);
export const StudyWithUs = () => {
  return (
    <div className="container max-w-container font-raleway mx-auto py-10 ">
      <TitleLineCard title={title} description={description} />
      <StudyWithUsList />
    </div>
  );
};
