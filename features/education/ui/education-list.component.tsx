import React from 'react';
import { EducationCard } from './education-card.component';
import { EducationCardsProps } from '../types';

export const EducationList = ({ data }: { data: EducationCardsProps[] }) => {
  return (
    <div className="flex gap-6 justify-between flex-wrap">
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
