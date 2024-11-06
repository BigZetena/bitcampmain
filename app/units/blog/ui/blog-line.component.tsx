import React from 'react';
import { SubTitle } from '@/shared/ui/general/SubTitle';
import { BlogLineCard } from './blog-line-card.component';
const cards: {
  date: string;
  title: string;
  tag: string;
  imageUrl: string;
}[] = [
  {
    date: '02.10.2024',
    title:
      'Подкаст с бизнес экспертом Александрой Якубович о стартапах в России',

    tag: 'Менеджмент',
    imageUrl: '/images/blog/podcust.png',
  },
  {
    date: '10.09.2024',
    title:
      'Пополнение запасов в e-commerce: основные методики и лучшие практики',

    tag: 'Аналитика',
    imageUrl: '/images/blog/e-comer.png',
  },
  {
    date: '23.08.2024',
    title:
      'Защита критической инфраструктуры: кибербезопасность для энергетических и промышленных систем',

    tag: 'Кибербезопасность',
    imageUrl: '/images/blog/cyber.png',
  },
  {
    date: '13.09.2024',
    title:
      'Основные ошибки при внедрении ИТ-решений в ритейле и как их избежать',

    tag: 'Ритейл',
    imageUrl: '/images/blog/fail.png',
  },
];

export const BlogLine = () => {
  return (
    <div className="container max-w-container py-10 font-raleway">
      <div>
        <SubTitle>Блог</SubTitle>
      </div>
      <div className="h-[2px] bg-primary w-full my-5"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {cards.map((e, i) => (
          <BlogLineCard
            key={i}
            date={e.date}
            tag={e.tag}
            imageUrl={e.imageUrl}
            title={e.title}
          />
        ))}
      </div>
    </div>
  );
};
