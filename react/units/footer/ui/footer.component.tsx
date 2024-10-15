import React from 'react';

export const Footer = () => {
  return (
    <div className="container max-w-container py-10 mx-auto font-raleway flex justify-between h-[170px]">
      <div className="flex flex-col justify-between">
        <div>
          <img src="/images/footer/holder.png" alt="holder" />
        </div>
        <p className="text-2xl">© БИТКЭМП, 2024</p>
      </div>
      <div className="text-right flex flex-col justify-between">
        <p>
          196084, г. Санкт-Петербург, ул. Парфеновская д.12, БЦ “АКВИЛОН LINKS”
        </p>
        <p>Политика конфиденциальности</p>
      </div>
    </div>
  );
};
