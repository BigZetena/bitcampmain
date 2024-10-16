'use client';
import React, { useState } from 'react';
import { CategoryData } from '@/types';
import { ServiceCard } from '../components/cards/ServiceCard';
import { ServicesList } from '../components/ui/ServicesList';
import { SubTitle } from '../components/ui/SubTitle';

const categoriesData: CategoryData[] = [
  {
    id: 1,
    title: 'Бизнес решения',
    color: '#8762DC',
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
    color: '#77A6F7',
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
      setIsVisible(false); // Начинаем анимацию скрытия
      setTimeout(() => {
        setSelectedCategory(id); // Меняем категорию после завершения анимации скрытия
        setIsVisible(true); // Показываем новый контент с анимацией появления
      }, 200); // Длительность анимации скрытия (должна совпадать с CSS)
    }
  };
  const activeCategory = categoriesData.find(
    (category) => category.id === selectedCategory
  );

  return (
    <div className="container  max-w-container mx-auto py-10 font-raleway">
      <div className="flex justify-between">
        <div className="shrink-0 w-[213px] ">
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
        <div className={`mt-10 `}>
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
