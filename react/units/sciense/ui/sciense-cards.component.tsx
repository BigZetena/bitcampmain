import React from 'react';

export const ScienseCards = () => {
  return (
    <section className="container max-w-container py-10 text-[#FDFDFD] font-raleway ">
      {/* Flex-контейнер */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0 md:space-x-8 md:h-[428px]">
        {/* Левый блок */}
        <div className="w-full md:w-1/3 bg-[#4D4D4E] py-6 px-6 md:px-10 rounded-2xl h-full">
          <h2 className="text-xl md:text-2xl font-semibold">
            В настоящее время мы вкладываем ресурсы и проводим работы в основных
            направлениях:
          </h2>
        </div>

        {/* Правый блок с карточками */}
        <div className="w-full md:w-2/3 space-y-4 flex flex-col">
          <div className="bg-[#1B1B1B] py-6 px-6 md:px-10 rounded-2xl flex flex-col space-y-2">
            <h3 className="font-medium text-lg md:text-xl">
              Программный комплекс проектирования протезов
            </h3>
            <p>
              Разработка программно-технического комплекса 3D печати
              технологичных протезов
            </p>
          </div>

          <div className="bg-[#F3F2F7] text-primary py-6 px-6 md:px-10 rounded-2xl flex flex-col space-y-2">
            <h3 className="font-medium text-lg md:text-xl">
              Удаленный мониторинг параметров
            </h3>
            <p>
              Разработка программно-технического комплекса мониторинга
              инфраструктуры энергетических систем на основе технологий IIoT
            </p>
          </div>

          <div className="bg-[#1B1B1B] py-6 px-6 md:px-10 rounded-2xl flex flex-col space-y-2">
            <h3 className="font-medium text-lg md:text-xl">
              Разработка ПО для зондового геофизического сканирования
            </h3>
            <p>
              Повышение точности и достоверности получаемых данных за счет
              интеллектуальной обработки и анализа сигналов
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
