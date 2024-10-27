import { DarkCentralCard } from '@/react/components/cards/dark-central-card.component';
import React from 'react';

const title = (
  <>
    Давайте поговорим <br /> o вашем проекте
  </>
);
const description = (
  <>
    Обращайтесь к нам за бесплатной консультацией,
    <br />
    это возможность обсудить свои идеи c нашими экспертами.
    <br />
    Оставьте свой номер, мы перезвоним!
  </>
);

export const LetsTalk = () => {
  return (
    <DarkCentralCard
      title={title}
      description={description}
      image="/images/lets-talk/project.png"
      buttonText="ОБСУДИТЬ ПРОЕКТ"
      link="#form"
    />
  );
};
