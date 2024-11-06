import { EducationList } from '@/features/education/ui/education-list.component';
import { TitleLineCard } from '@/shared/ui/cards/title-line-card.component';
import React from 'react';

const educationCardsData = [
  {
    duration: 'от 12 месяцев',
    title: 'Frontend-разработка',
    price: '27 000 ₽/мес',
    credit: 'в рассрочку на 36 месяцев',
    image: '/images/education-cards/frontend.png', // Замените на реальный путь к изображению
    href: '/frontend',
  },
  {
    duration: 'от 12 месяцев',
    title: 'Backend-разработка',
    price: '29 000 ₽/мес',
    credit: 'в рассрочку на 36 месяцев',
    image: '/images/education-cards/backend.png', // Замените на реальный путь к изображению
  },
  {
    duration: 'от 12 месяцев',
    title: 'UI/UX дизайн',
    price: '23 000 ₽/мес',
    credit: 'в рассрочку на 36 месяцев',
    image: '/images/education-cards/uxui.png', // Замените на реальный путь к изображению
  },
];

const educationProCardsData = [
  {
    duration: 'от 1 месяца',
    title: 'Moodle',
    price: '21 000 ₽/курс',
    credit: 'в рассрочку на 36 месяцев',
    image: '/images/education-cards/moodle.png', // Замените на реальный путь к изображению
  },
  {
    duration: 'от 3 месяцев',
    title: 'Нагрузочное тестирование (QA)',
    price: '85 000 ₽/курс',
    credit: 'в рассрочку на 36 месяцев',
    image: '/images/education-cards/qa.png', // Замените на реальный путь к изображению
  },
  {
    duration: 'от 12 месяцев',
    title: 'Backend-разработка',
    price: '29 000 ₽/мес',
    credit: 'в рассрочку на 36 месяцев',
    image: '/images/education-cards/backend.png', // Замените на реальный путь к изображению
  },
];

export const EducationSegment = () => {
  return (
    <div className="container max-w-container mx-auto">
      <div className="mt-10">
        <TitleLineCard
          title={
            <>
              Дополнительное <br />
              образование
            </>
          }
          description="Направлено на удовлетворение образовательных и профессиональных потребностей, профессиональное развитие человека, обеспечение соответствия его квалификации меняющимся условиям профессиональной деятельности."
        />
        <div className="py-20">
          <EducationList data={educationCardsData} />
        </div>
      </div>
      <div className="mt-10">
        <TitleLineCard
          title={
            <>
              Повышение <br />
              квалификации
            </>
          }
          description={
            <>
              Программа <b>повышения квалификации</b> направлена на
              совершенствование или получение новой компетенции, необходимой для
              профессиональной деятельности, или повышение профессионального
              уровня в рамках имеющейся квалификации.
            </>
          }
        />
        <div className="py-20">
          <EducationList data={educationProCardsData} />
        </div>
      </div>
    </div>
  );
};
