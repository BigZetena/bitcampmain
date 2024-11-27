import { TitleLineCard } from '@/shared/ui/cards/title-line-card.component';
import React from 'react';
import { PartherList } from './parther-list.component';
import { PartnerCardProps } from '../type/parthner-card-props.type';

export const Parther = ({
  coursesData,
  specials = false,
}: {
  coursesData: PartnerCardProps[];
  specials?: boolean;
}) => {
  return (
    <div id="partner" className="container max-w-container mx-auto py-10 font-raleway">
      <TitleLineCard
        title={
          <>
            Партнерские <br />
            программы
          </>
        }
        description="Мы предлагаем качественное интерактивное обучение на базе учебного центра по программам и при поддержке наших партнеров"
      />
      <div>
        <PartherList coursesData={coursesData} specials={specials} />
      </div>
    </div>
  );
};
