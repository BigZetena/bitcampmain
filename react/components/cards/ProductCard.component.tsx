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
    <div className="bg-[#E4E4E4] rounded-lg py-8 px-6 shadow-md flex flex-col justify-between w-[360px] h-[440px] font-raleway">
      <h3 className="text-2xl">{title}</h3>
      <div className=" text-gray-700 h-[183px] flex flex-col justify-between ">
        <p>{description1}</p>
        <p>{description2}</p>
      </div>
      <div className="flex justify-end ">
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
