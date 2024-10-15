import React from 'react';
import { CardProps } from '../types/study-with-us.type';

export const StudyWithUsCard: React.FC<CardProps> = ({
  icon,
  title,
  bgColor = 'light',
}) => {
  return (
    <div
      className={`flex flex-col justify-between p-5 rounded-lg  ${
        bgColor === 'dark'
          ? 'bg-black text-[#FDFDFD]'
          : 'bg-[#F3F2F7] text-[#1B1B1B]'
      } w-[286px] h-[176px] `}
    >
      {' '}
      {icon && <div className="flex justify-end">{icon}</div>}
      <div className="text-left h-full flex flex-col justify-end">
        <p className="font-medium">{title}</p>
      </div>
    </div>
  );
};
