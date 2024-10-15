import { SubTitle } from '@/react/components/ui/SubTitle';
import React from 'react';

export const StudyCenterDesk = () => {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col justify-between min-w-max">
        <SubTitle>Учебный центр</SubTitle>
        <div className="flex">
          <p className="py-2 px-5 bg-centerLight text-primary rounded-2xl mr-3">
            оффлайн
          </p>
          <p className="py-2 px-5 bg-centerLight text-primary rounded-2xl mr-3">
            онлайн
          </p>
          <p className="py-2 px-5 bg-centerLight text-primary rounded-2xl mr-16">
            от партнеров
          </p>
        </div>
      </div>
      <div className="relative flex flex-col justify-between w-full">
        <div>
          <div
            className={`absolute top-0 left-0 right-0 h-[2px] bg-primary  w-full `}
          ></div>
          <p className="mt-8 text-right font-medium text-xl">
            Мы оказываем услуги по развитию бизнеса через
            <br />
            <b>подготовку квалифицированных кадров</b>, также разрабатываем
            <br /> образовательный контент под потребности заказчика.
          </p>
        </div>
        <div className="flex gap-3 mt-14 justify-end ">
          <p className="py-2 px-5 bg-background text-primary rounded-2xl border border-primary font-medium">
            повышение квалифкации
          </p>
          <p className="py-2 px-5 bg-background text-primary rounded-2xl border border-primary font-medium">
            дополнительное образование
          </p>
        </div>
      </div>
    </div>
  );
};
