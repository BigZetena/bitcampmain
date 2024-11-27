import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const AddBlogCard = () => {
  return (
    <div className="bg-[#1b1b1b] text-white p-10 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
      {/* Левая часть */}
      <div className="flex flex-col shrink-0 gap-4">
        <Image
          width={90}
          height={42}
          src="/icons/1c.png" // Путь к логотипу
          alt="1C Logo"
          className="w-[90px] h-[42px] object-contain"
        />
        <div>
          <h2 className="text-xl font-bold">Курсы от партнеров 1С</h2>
          <p className="text-sm text-gray-400">
            Освойте популярные инструменты управления бизнес-процессами
          </p>
        </div>{' '}
        <Link
          href={'/education/adult#partner'}
          className="bg-white text-black px-4 py-2 rounded-md font-medium hover:bg-gray-200 max-w-64"
        >
          Оставить заявку
        </Link>
      </div>

      {/* Правая часть */}
      <div className="flex items-center justify-center gap-4 w-full">
        <Image
          width={206}
          height={138}
          src="/icons/naruto.png" // Путь к изображению облака
          alt="Cloud Icon"
          className="w-[206px] h-[138px] object-contain"
        />
      </div>
    </div>
  );
};
