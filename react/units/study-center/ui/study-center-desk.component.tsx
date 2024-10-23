import { SubTitle } from '@/react/components/ui/SubTitle';
import React from 'react';

export const StudyCenterDesk = () => {
  return (
    <div className="py-10 flex flex-col md:flex-row justify-between font-raleway ">
      {/* Левая колонка */}
      <div className="flex flex-col justify-between md:min-w-max mb-6 md:mb-0 md:min-w-96">
        <SubTitle>Учебный центр</SubTitle>
        <div className="flex flex-wrap mt-4">
          <p className="py-2 px-5 bg-centerLight text-primary rounded-2xl mr-3 mb-3">
            оффлайн
          </p>
          <p className="py-2 px-5 bg-centerLight text-primary rounded-2xl mr-3 mb-3">
            онлайн
          </p>
        </div>
      </div>
      {/* Правая колонка */}
      <div className="relative flex flex-col justify-between w-full">
        <div>
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-primary w-full"></div>
          <p className="mt-8 text-left md:text-right font-medium text-lg md:text-xl">
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
