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
    <div className="container max-w-container my-10 mx-auto bg-[#1B1B1b] flex justify-between px-16 font-manrope rounded-3xl text-[#FDFDFD]">
      <div className="flex">
        <div className="py-6">
          <p className=" font-semibold text-2xl leading-9">{title}</p>
          <p className=" font-bold mt-8">{description}</p>
        </div>
      </div>
      <Image src={image} alt="figure" height={220} width={220} />
      <div className="flex items-center">
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
