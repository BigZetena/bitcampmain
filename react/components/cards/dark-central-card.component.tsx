import Image from 'next/image';
import React from 'react';

export const DarkCentralCard = ({
  title,
  description,
  buttonText,
  link,
  image,
}: {
  title: React.ReactNode | string;
  description: React.ReactNode | string;
  buttonText: React.ReactNode | string;
  link?: string;
  image: string;
}) => {
  return (
    <div className="container max-w-container my-10 mx-auto bg-[#1B1B1b] flex flex-col md:flex-row items-center md:justify-between px-6 md:px-16 py-8 font-manrope rounded-3xl text-[#FDFDFD]">
      <div className="flex flex-col items-center md:items-start md:w-1/2">
        <div>
          <p className="font-semibold text-xl md:text-2xl leading-8 md:leading-9 text-center md:text-left">
            {title}
          </p>
          <p className="font-bold mt-4 md:mt-8 md:text-left">
            {description}
          </p>
        </div>
      </div>
      <div className="mt-6 md:mt-0 md:w-1/4 flex justify-center">
        <Image src={image} alt="figure" height={220} width={220} />
      </div>
      <div className="mt-6 md:mt-0 flex items-center md:w-1/4 justify-center md:justify-end">
        <button className="flex items-center justify-center gap-2 px-6 py-3 bg-purple-600 text-white font-semibold rounded-2xl hover:bg-purple-700 transition-all duration-300">
          {buttonText}
          <Image
            src="/images/lets-talk/arrow.svg"
            alt="arrow"
            width={20}
            height={20}
          />
        </button>
      </div>
    </div>
  );
};
