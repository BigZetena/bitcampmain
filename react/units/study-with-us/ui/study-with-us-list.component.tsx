import React from 'react';
import { StudyWithUsCard } from './study-with-us-card.component';
import Image from 'next/image';

// Массив объектов с данными для карточек
const cardsData = [
  {
    icon: (
      <div className="flex gap-0.5">
        <Image
          src="/images/study-with-us/lic-vent.svg"
          alt="book"
          width={24}
          height={24}
        />
        <Image
          src="/images/study-with-us/lic-book.svg"
          alt="book"
          width={24}
          height={24}
        />
        <Image
          src="/images/study-with-us/lic-star.svg"
          alt="book"
          width={24}
          height={24}
        />
      </div>
    ),
    title: 'Лицензия на образовательную деятельность',
    bgColor: 'light',
  },
  {
    title: 'Гибкий индивидуальный подход в обучении',
    bgColor: 'light',
  },
  {
    icon: (
      <div>
        {' '}
        <Image
          src="/images/study-with-us/mentor.svg"
          alt="book"
          width={40}
          height={40}
        />
      </div>
    ),
    title: 'Лучшие менторы с богатым практическим опытом',
    bgColor: 'dark',
  },
  {
    title: `Лекции практикующих экспертов`,
    bgColor: 'dark',
  },
  {
    title: 'Работа в команде над реальными проектами',
    bgColor: 'light',
  },
  {
    icon: (
      <div>
        <Image
          src="/images/study-with-us/world.svg"
          alt="book"
          width={47}
          height={32}
        />
      </div>
    ),
    title: 'Возможность обучения из любой точки мира',
    bgColor: 'light',
  },
];

export const StudyWithUsList: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-2 mt-20">
      {/* Пустое место для смещения */}
      <div className="w-[286px] h-[176px]"></div>
      {/* Карточки */}
      {cardsData.map((card, index) => (
        <StudyWithUsCard
          key={index}
          icon={card.icon}
          title={card.title}
          bgColor={card.bgColor}
        />
      ))}
      {/* Пустое место для последней ячейки */}
      <div className="w-[286px] h-[176px]"></div>
    </div>
  );
};
