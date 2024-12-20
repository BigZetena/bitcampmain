import { SubTitle } from '@/shared/ui/general/SubTitle';
import React from 'react';

export const TitleLineCard = ({
  title,
  description,
  right = false,
}: {
  right?: boolean;
  title: React.ReactNode | string;
  description: React.ReactNode | string;
}) => {
  return (
    <div className="flex justify-between  max-w-container mx-auto pb-10 flex-col md:flex-row gap-8 font-raleway">
      <div className="flex flex-col justify-between min-w-max">
        <SubTitle>{title}</SubTitle>
      </div>
      <div className="relative flex flex-col justify-between max-w-[689px] w-full">
        <div>
          <div
            className={`absolute top-0 left-0 right-0 h-[2px] bg-primary  w-full `}
          ></div>
          <p
            className={`mt-8 ${right && 'text-right'} font-medium md:text-xl `}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
