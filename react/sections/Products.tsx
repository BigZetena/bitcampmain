import React from 'react';
import { SubTitle } from '../components/ui/SubTitle';
import Card from '../components/cards/ProductCard.component';

const cardsData = [
  {
    title: 'Сервис',
    description1:
      'IT-разработка по направлениям e-commerce, нефтегазового, медицинского, промышленного и других секторов',
    description2: 'Цифровые и комплексные решения в сфере импортозамещения',
    buttonText: 'Подробнее',
  },
  {
    title: 'Учебный центр',
    description1:
      'Очное обучение для юниоров, начинающих и практикующих разработчиков',
    description2:
      'Автоматизация и оптимизация бизнес-процессов под ваши цели и задачи',
    buttonText: 'Подробнее',
  },
  {
    title: 'Наши проекты',
    description1:
      'Deep Tech, разработка инновационных продуктов, технологий и процессов',
    description2: 'Цифровые и комплексные решения в сфере импортозамещения',
    buttonText: 'Подробнее',
  },
];

export const Products = () => {
  return (
    <div>
      <div className="conainer max-w-container mx-auto py-14">
        <SubTitle right={true}>
          Мы помогаем компаниям разрабатывать новые <br /> цифровые продукты, а
          также оптимизировать существующие сервисы, ориентированные на
          потребности различных отраслей.
        </SubTitle>

        <div className="flex flex-wrap justify-between mt-16">
          {cardsData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description1={card.description1}
              description2={card.description2}
              buttonText={card.buttonText}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
