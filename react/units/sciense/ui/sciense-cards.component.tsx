import React from 'react';

export const ScienseCards = () => {
  return (
    <section className="h-[483px] flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0 md:space-x-8 text-[#FDFDFD] font-raleway">
      {/* Левый блок */}
      <div className="w-full md:w-1/3 bg-[#4D4D4E] py-6 px-10 rounded-2xl h-full">
        <h2 className="text-2xl font-semibold">
          В настоящее время мы вкладываем ресурсы и проводим работы в основных
          направлениях:
        </h2>
      </div>

      {/* Правый блок с карточками */}
      <div className="w-full md:w-2/3 space-y-4 flex flex-col justify-between h-full ">
        <div className="bg-[#1B1B1B]  py-6 px-10 rounded-2xl flex flex-col justify-between   h-[144px]">
          <h3 className="font-medium text-xl">
            Программный комплекс проектирования протезов
          </h3>
          <p className="">
            Разработка программно-технического комплекса 3Д печати технологичных
            <br />
            протезов
          </p>
        </div>

        <div className="bg-[#F3F2F7] text-primary py-6 px-10 rounded-2xl flex flex-col justify-between h-[144px]">
          <h3 className="font-medium text-xl">
            Удаленный мониторинг параметров
          </h3>
          <p className="">
            Разработка программно-технического комплекса мониторинга
            инфраструктуры энергетических систем на основе технологий IIoT
          </p>
        </div>

        <div className="bg-[#1B1B1B]  py-6 px-10 rounded-2xl flex flex-col justify-between h-[144px]">
          <h3 className="font-medium text-xl">
            Разработка ПО для зондового геофизического сканирования
          </h3>
          <p className="">
            Повышение точности и достоверности получаемых данных за счет
            интеллектуальной обработки и анализа сигналов
          </p>
        </div>
      </div>
    </section>
  );
};
