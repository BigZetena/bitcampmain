import { EducationList } from '@/app/education/untis/education/ui/education-list.component';
import { TitleLineCard } from '@/shared/ui/cards/title-line-card.component';
import React from 'react';
import { EducationCardsProps } from '../types';

export const EducationSegment = ({
  educationCardsData,
  educationProCardsData,
}: {
  educationCardsData: EducationCardsProps[];
  educationProCardsData?: EducationCardsProps[];
}) => {
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
        {educationProCardsData && (
          <div className="py-20">
            <EducationList data={educationProCardsData} />
          </div>
        )}
      </div>
    </div>
  );
};
