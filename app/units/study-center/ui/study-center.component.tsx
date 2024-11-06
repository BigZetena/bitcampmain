import React from 'react';
import { StudyCenterDesk } from './study-center-desk.component';
import { EmblaOptionsType } from 'embla-carousel';
import { StudyCenterCarusel } from './study-center-carusel.component';
import { Course } from '@/types';

const courses: Course[] = [
  {
    id: 1,
    title: 'Frontend-разработка',
    description:
      'Овладейте навыками создания современных, интерактивных веб-интерфейсов, которые привлекают пользователей.',
    image: '/images/study-center/frontend.png', // Добавьте путь к изображению
  },
  {
    id: 2,
    title: 'Нагрузочное тестирование (QA)',
    description:
      'Научитесь писать код для веб-сервисов. Сделайте первые шаги или смените направление в IT.',
    image: '/images/study-center/qa.png',
  },
  {
    id: 3,
    title: 'Аналитик 1С (с 14 лет)',
    description:
      'Получите востребованные навыки программирования 1С с раннего возраста.',
    image: '/images/study-center/1c.png',
  },
  {
    id: 4,
    title: 'Backend-разработка',
    description:
      'Научитесь писать код для серверов. Сделайте первые шаги или смените направление в IT.',
    image: '/images/study-center/backend.png',
  },
];

export const StudyCenter = () => {
  const OPTIONS: EmblaOptionsType = { loop: true };
  return (
    <div className="container max-w-container mx-auto font-raleway">
      <StudyCenterDesk />
      <StudyCenterCarusel slides={courses} options={OPTIONS} />
    </div>
  );
};
