import { DarkCentralCard } from '@/shared/ui/cards/dark-central-card.component';
import React from 'react';
const title = (
  <>
    Мы готовы обучить ваш <br /> персонал
  </>
);
const description = (
  <>
    Обращайтесь к нам за бесплатной консультацией,
    <br />
    это возможность обсудить свои идеи с нашими
    <br />
    экспертами. Оставьте свой номер, мы перезвоним!
  </>
);
export const StudyPersonal = () => {
  return (
    <DarkCentralCard
      title={title}
      description={description}
      image="/images/study-personal/personal.png"
      buttonText="УЗНАТЬ ОБ ОБУЧЕНИИ"
    />
  );
};
