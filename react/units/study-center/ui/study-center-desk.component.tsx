import { SubTitle } from '@/react/components/ui/SubTitle';
import React from 'react';

export const StudyCenterDesk = () => {
  return (
    <div className="py-10 flex flex-col md:flex-row justify-between font-raleway ">
      {/* Левая колонка */}
      <div className="flex  justify-between  mb-6 md:mb-0 md:min-w-96 flex-col">
        <SubTitle>Учебный центр</SubTitle>
        <div className="flex flex-wrap mt-4 ">
          <p className="py-1 px-1 bg-centerLight text-primary rounded-md md:py-2 md:px-3 md:rounded-2xl mr-3  max-w-max">
            оффлайн
          </p>
          <p className="py-1 px-1 bg-centerLight text-primary rounded-md md:py-2 md:px-3 md:rounded-2xl mr-3 max-w-max">
            онлайн
          </p>
        </div>
      </div>
      {/* Правая колонка */}
      <div className="relative flex flex-col justify-between w-full">
        <div>
          <div className="hidden md:block absolute top-0 left-0 right-0 h-[2px] bg-primary w-full"></div>
          <p className="md:mt-8 text-left md:text-right font-medium text-lg md:text-xl">
            Мы оказываем услуги по развитию бизнеса через
            <br />
            <b>подготовку квалифицированных кадров</b>, также разрабатываем
            <br /> образовательный контент под потребности заказчика.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 mt-8 md:mt-14 justify-start md:justify-end">
          <p className="py-2 px-5 bg-background text-primary rounded-2xl border border-primary font-medium">
            повышение квалификации
          </p>
          <p className="py-2 px-5 bg-background text-primary rounded-2xl border border-primary font-medium">
            дополнительное образование
          </p>
        </div>
      </div>
    </div>
  );
};
