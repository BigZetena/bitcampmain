import React from 'react';
import { EducationCard } from './education-card.component';
import { EducationCardsProps } from '../types';

export const EducationList = ({ data }: { data: EducationCardsProps[] }) => {
  return (
    <div className="flex gap-11 xl:justify-between flex-wrap justify-center">
      {data.map((card, index) => (
        <EducationCard
          key={index}
          duration={card.duration}
          title={card.title}
          price={card.price}
          credit={card.credit}
          image={card.image}
          href={card.href}
        />
      ))}
    </div>
  );
};
