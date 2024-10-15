import { CourseProps } from '@/types/study-center.type';
import Image from 'next/image';
import React from 'react';

export const StudyCenterCard: React.FC<CourseProps> = ({ course }) => {
  return (
    <div
      className={`${
        course.id % 2 === 0 ? 'bg-[#6E6C6C]' : 'bg-[#383838]'
      } text-[#FDFDFD] rounded-2xl p-6 w-[340px] min-h-[320px] flex flex-col justify-between mx-7 embla__slide__number`}
    >
      <div className="flex justify-center">
        <div className="h-[140px] w-[140px] relative ">
          <Image
            src={course.image}
            alt={course.title}
            fill={true}
            className="object-contain object-center"
          />
        </div>
      </div>
      <div className="flex flex-col justify-between min-h-[140px]">
        <h3 className="text-2xl leading-5 mt-4">{course.title}</h3>
        <p className=" leading-5 ">{course.description}</p>
      </div>
    </div>
  );
};
