import React from 'react';
import { SubTitle } from '../../../shared/ui/general/SubTitle';
import Card from '../../../features/products/ui/ProductCard.component';

const cardsData = [
  {
    title: 'Сервис',
    description1:
      'IT-разработка по направлениям e-commerce, нефтегазового, медицинского, промышленного и других секторов',
    description2: 'Цифровые и комплексные решения в сфере импортозамещения',
    buttonText: 'Подробнее',
    href: '',
  },
  {
    title: 'Учебный центр',
    description1:
      'Очное обучение для юниоров, начинающих и практикующих разработчиков',
    description2:
      'Автоматизация и оптимизация бизнес-процессов под ваши цели и задачи',
    buttonText: 'Подробнее',
    href: '/education/adult',
  },
  {
    title: 'Наши проекты',
    description1:
      'Deep Tech, разработка инновационных продуктов, технологий и процессов',
    description2: 'Цифровые и комплексные решения в сфере импортозамещения',
    buttonText: 'Подробнее',
    href: '',
  },
];

export const Products = () => {
  return (
    <div>
      <div className="container max-w-container py-14">
        <div className="hidden md:block">
          <SubTitle right={true}>
            Мы помогаем компаниям разрабатывать новые <br /> цифровые продукты,
            а также оптимизировать существующие сервисы, ориентированные на
            потребности различных отраслей.
          </SubTitle>
        </div>
        <div className="md:hidden">
          <SubTitle>
            Мы помогаем компаниям разрабатывать новые цифровые продукты, а также
            оптимизировать существующие сервисы, ориентированные на потребности
            различных отраслей.
          </SubTitle>
        </div>
        <div className="flex flex-col md:flex-row flex-wrap justify-center mt-16 gap-8">
          {cardsData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description1={card.description1}
              description2={card.description2}
              buttonText={card.buttonText}
              href={card.href}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
