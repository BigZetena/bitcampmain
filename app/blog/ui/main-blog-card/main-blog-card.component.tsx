import React from 'react';

export const MainBlogCard = ({
  title,
}: {
  title: string | React.ReactNode;
}) => {
  return (
    <div className={`pt-32 pb-16 md:pt-60 md:pb-36 bg-[#1B1B1B] `}>
      <div className=" container max-w-container mx-auto">
        <h2 className=" font-raleway text-[#FFFFFF] font-bold text-2xl md:text-5xl md:leading-relaxed text-center">
          {title}
        </h2>
      </div>
    </div>
  );
};
