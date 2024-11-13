import React from 'react';
import { EducationCardsProps } from '../types';
import Link from 'next/link';

export const EducationCard = ({
  duration,
  title,
  price,
  credit,
  image,
  href = '',
}: EducationCardsProps) => {
  return (
    <Link href={href} className="flex-grow max-w-[360px] w-full">
      <div className="  h-[442px]  rounded-xl text-white flex flex-col  transition-transform transform hover:scale-105 hover:shadow-2xl cursor-pointer overflow-hidden">
        <div
          className="py-10 px-6 font-raleway bg-center bg-cover h-full rounded-t-xl"
          style={{ backgroundImage: `url(${image})` }}
        >
          <p className="border-2 border-solid border-[#7c7c7c] rounded-lg w-max px-1">
            {duration}
          </p>
          <h3 className="mt-10 font-medium text-3xl">{title}</h3>
        </div>
        <div className="font-manrope py-5 px-6 bg-[#383838] rounded-b-xl">
          <p className="font-medium text-4xl">{price}</p>{' '}
          <p className="text-right mt-2">{credit}</p>
        </div>
      </div>
    </Link>
  );
};
