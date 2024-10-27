import React from 'react';
import { CardProps } from '../types/study-with-us.type';

export const StudyWithUsCard: React.FC<CardProps> = ({
  icon,
  title,
  bgColor = 'light',
}) => {
  return (
    <div
      className={`relative flex flex-col justify-between p-5 rounded-lg  ${
        bgColor === 'dark'
          ? 'bg-black text-[#FDFDFD] hidden md:block'
          : 'bg-[#e5e5e5] text-[#1B1B1B]'
      } w-full md:w-[286px] md:h-[176px] `}
    >
      {icon && (
        <div className="justify-end hidden md:flex absolute top-5 right-5">
          {icon}
        </div>
      )}
      <div className="text-left h-full flex flex-col justify-end">
        <p className="font-medium leading-5">{title}</p>
      </div>
    </div>
  );
};
