import React from 'react';

interface CardProps {
  title: string;
  description1: string;
  description2: string;
  buttonText: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description1,
  description2,
  buttonText,
}) => {
  return (
    <div className="bg-darkCard rounded-lg py-8 px-6 shadow-md flex flex-col justify-between w-full md:w-[360px] h-auto font-raleway">
      <h3 className="text-xl md:text-2xl">{title}</h3>
      <div className="text-primary flex flex-col justify-between my-14 flex-grow ">
        <p>{description1}</p>
        <p className="mt-4">{description2}</p>
      </div>
      <div className="flex justify-end mt-4">
        <button className="flex items-center w-max text-sm text-primary py-1 px-2 hover:bg-foreground hover:text-secondary rounded-md transition-colors duration-300">
          {buttonText}
          <span className="ml-2 bg-primary text-secondary py-1 px-2 rounded-md">
            ↗
          </span>
        </button>
      </div>
    </div>
  );
};

export default Card;
