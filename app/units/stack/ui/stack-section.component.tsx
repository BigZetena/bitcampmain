import React from 'react';
import { StackCard } from './stack-card.component';
import { StackSectionType } from '@/types';
const stackSections: StackSectionType[] = [
  {
    id: 1,
    title: 'Frontend',
    link: '[обучаем]',
    categories: [
      {
        name: 'Фреймворки, Инструменты:',
        items: ['React', 'Next.js'],
      },
      {
        name: 'Языки разработки:',
        items: ['JavaScript', 'TypeScript'],
      },
      {
        name: 'Технологии:',
        items: [
          'HTML5',
          'CSS3',
          'Sass',
          'Solid',
          'Astro',
          'Tailwind',
          'Zustand',
        ],
      },
    ],
  },
  {
    id: 2,
    title: 'Backend',
    link: '[обучаем]',
    categories: [
      {
        name: 'Базы данных:',
        items: ['PostgreSQL', 'MongoDB', 'Prisma'],
      },
      {
        name: 'Фреймворки, Языки:',
        items: ['Python', 'Go', '.NET'],
      },
      {
        name: 'Очереди:',
        items: ['RabbitMQ', 'Kafka'],
      },
    ],
  },
  {
    id: 3,
    title: 'DevOps',
    categories: [
      {
        name: 'Cluster Management:',
        items: ['Kubernetes', 'helmfile', 'K3s'],
      },
      {
        name: 'Container:',
        items: ['Docker'],
      },
      {
        name: 'CI/CD:',
        items: ['GitLab'],
      },
    ],
  },
];

export const StackSection = () => {
  return (
    <div className="relative max-w-[640px]">
      {stackSections.map((section) => (
        <StackCard
          key={section.id}
          title={section.title}
          link={section.link}
          categories={section.categories}
        />
      ))}
      <div className="md:hidden absolute bottom-0 left-0 right-0 h-[2px] bg-primary w-full"></div>
    </div>
  );
};
