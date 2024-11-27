import Link from 'next/link';
import React from 'react';

interface CardProps {
  title: string;
  description1: string;
  description2: string;
  buttonText: string;
  href: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description1,
  description2,
  buttonText,
  href,
}) => {
  return (
    <div className="bg-darkCard rounded-lg py-8 px-6 shadow-md flex flex-col justify-between w-full md:w-[360px] h-auto font-raleway">
      <h3 className="text-xl md:text-2xl">{title}</h3>
      <div className="text-primary flex flex-col justify-between my-14 flex-grow ">
        <p>{description1}</p>
        <p className="mt-4">{description2}</p>
      </div>
      <div className="flex justify-end mt-4">
        <Link href={href}>
          <button className="flex items-center w-max text-sm text-primary py-1 px-2 hover:bg-foreground hover:text-secondary rounded-md transition-colors duration-300">
            {buttonText}
            <span className="ml-2 bg-primary text-secondary p-2 rounded-md">
              <svg
                width="12"
                height="13"
                viewBox="0 0 12 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.6066 1.3934C11.6066 1.11726 11.3827 0.893398 11.1066 0.893398L6.6066 0.893399C6.33046 0.893398 6.1066 1.11726 6.1066 1.3934C6.1066 1.66954 6.33046 1.8934 6.6066 1.8934L10.6066 1.8934L10.6066 5.8934C10.6066 6.16954 10.8305 6.3934 11.1066 6.3934C11.3827 6.3934 11.6066 6.16954 11.6066 5.8934L11.6066 1.3934ZM0.853553 12.3536L11.4602 1.74695L10.753 1.03985L0.146447 11.6464L0.853553 12.3536Z"
                  fill="var(--background)"
                />
              </svg>
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
