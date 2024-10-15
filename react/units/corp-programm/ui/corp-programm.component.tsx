import { ServicesList } from '@/react/components/ui/ServicesList';
import { SubTitle } from '@/react/components/ui/SubTitle';
import { Service } from '@/types';
import React from 'react';

const programsData: Service[] = [
  {
    title: 'Программы развития профессиональных навыков',
    description:
      'Ваши сотрудники получат актуальные знания и практические инструменты, чтобы максимально эффективно выполнять свои задачи.',
  },
  {
    title: 'Программы развития личностных качеств',
    description:
      'Мы предлагаем эффективные программы развития soft skills (лидерство, коммуникации, креативность и т.д.)',
  },
  {
    title: 'Адаптационные программы',
    description:
      'Мы поможем им быстро влиться в рабочую атмосферу и стать продуктивными специалистами в минимальные сроки.',
  },
  {
    title: 'Программы карьерного роста и наставничества',
    description:
      'Наставнические программы и курсы для управленцев помогут раскрыть потенциал ваших талантливых специалистов и сформировать сильную управленческую команду.',
  },
];

export const CorpProgramm = () => {
  return (
    <div className="flex justify-between container max-w-container mx-auto py-10">
      <div className="min-w-max">
        <SubTitle>
          Корпоративные
          <br />
          программы
        </SubTitle>
      </div>
      <div className="max-w-[689px]">
        <ServicesList servicesData={programsData} />
      </div>
    </div>
  );
};
