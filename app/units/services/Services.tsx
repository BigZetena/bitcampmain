'use client';
import React, { useState } from 'react';
import { CategoryData } from '@/types';
import { ServiceCard } from '../../../features/services/ui/ServiceCard';
import { ServicesList } from '../../../features/services/ui/ServicesList';
import { SubTitle } from '../../../shared/ui/general/SubTitle';

const categoriesData: CategoryData[] = [
  {
    id: 1,
    title: 'Бизнес решения',
    color: '#6d6296',
    services: [
      {
        title: 'Платежные системы',
        description:
          'Создание интегрированных операций с платежными услугами, которые оптимизируют затраты времени и повышают эффективность бизнеса.',
      },
      {
        title: 'Мобильные приложения',
        description:
          'Увеличение доступности вашего бизнеса и взаимодействия с клиентами с помощью разработки и внедрения мобильных приложений.',
      },
      {
        title: 'Web-разработка',
        description:
          'Проектирование и создание современных и функциональных веб-решений для улучшения взаимодействия с клиентами.',
      },
      {
        title: 'Системы аналитики и отчетности',
        description:
          'Разработка систем для сбора и анализа данных для улучшения стратегических решений.',
      },
    ],
  },
  {
    id: 2,
    title: 'Импортозамещение',
    color: '#24305E',
    services: [
      {
        title: 'Перенос ИТ-решений на российские СУБД',
        description:
          'Миграция ИТ-систем на российские СУБД для обеспечения независимости от зарубежных технологий.',
      },
      {
        title: 'Разработка собственных продуктов',
        description:
          'Производство уникальных решений, подходящих для потребностей вашего бизнеса и улучшения внутренней структуры.',
      },
      {
        title: 'Миграция на отечественное ПО',
        description:
          'Консультации и внедрение отечественного программного обеспечения для оптимизации бизнес-процессов.',
      },
      {
        title: 'Интеграция с отечественными сервисами',
        description:
          'Настройка и интеграция существующих решений с отечественными сервисами и системами для повышения их совместимости и эффективности.',
      },
    ],
  },
  {
    id: 3,
    title: 'Машинное обучение',
    color: '#4b689c',
    services: [
      {
        title: 'Машинное обучение и нейронные сети',
        description:
          'Решения на основе искусственного интеллекта для автоматизации процессов и улучшения бизнес-аналитики.',
      },
      {
        title: 'Робототехника',
        description:
          'Разработка и внедрение роботизированных систем для улучшения производственных процессов.',
      },
      {
        title: 'Generative AI',
        description:
          'Использование генеративного искусственного интеллекта для автоматизации творческих задач.',
      },
      {
        title: 'Интеллектуальные решения для автоматизации',
        description:
          'Решения для автоматизации бизнес-процессов с использованием передовых алгоритмов машинного обучения.',
      },
    ],
  },
];
export const Services: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(1);
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const handleCategoryClick = (id: number) => {
    if (selectedCategory !== id) {
      setIsVisible(false);
      setTimeout(() => {
        setSelectedCategory(id);
        setIsVisible(true);
      }, 200);
    }
  };
  const activeCategory = categoriesData.find(
    (category) => category.id === selectedCategory
  );

  return (
    <div className="container max-w-container py-10 font-raleway">
      <div className="flex flex-col md:flex-row justify-between gap-2 md:gap-8">
        <div className="w-full md:w-[213px] md:shrink-0">
          <SubTitle>Услуги</SubTitle>
          <div className="mt-10">
            {categoriesData.map((category) => (
              <ServiceCard
                key={category.id}
                category={category}
                onClick={() => handleCategoryClick(category.id)}
                isActive={selectedCategory === category.id}
              />
            ))}
          </div>
        </div>
        <div className="mt-4  md:mt-0">
          {activeCategory && (
            <ServicesList
              isVisible={isVisible}
              servicesData={activeCategory.services}
              color={activeCategory.color}
            />
          )}
        </div>
      </div>
    </div>
  );
};
