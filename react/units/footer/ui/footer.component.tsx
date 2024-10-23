import Link from 'next/link';
import React from 'react';

export const Footer = () => {
  return (
    <footer className="container max-w-container py-10 mx-auto font-raleway flex flex-col md:flex-row justify-between items-start md:items-center">
      <div className="flex flex-col justify-between mb-6 md:mb-0">
        <div>
          <img src="/images/footer/holder.png" alt="Логотип компании БИТКЭМП" />
        </div>
        <p className="text-2xl mt-4">© БИТКЭМП, 2024</p>
      </div>
      <div className="text-left md:text-right flex flex-col justify-between items-start md:items-end">
        <p>
          196084, г. Санкт-Петербург, ул. Парфеновская д.12, БЦ “АКВИЛОН LINKS”
        </p>
        <a href="mailto:info@bit-camp.ru">info@bit-camp.ru</a>
        <div className="flex flex-col md:flex-row justify-start md:justify-between font-manrope w-full md:w-auto mt-4 md:mt-0">
          <a href="tel:+79811550991">
            <strong>Телефон:</strong> +7 981 155 09 91
          </a>
          <p className="md:ml-4 mt-2 md:mt-0">
            <strong>ИНН:</strong> 7838121334
          </p>
          <p className="md:ml-4 mt-2 md:mt-0">
            <strong>ОГРН:</strong> 1247800024592
          </p>
        </div>
        <Link
          className={
            "w-max relative text-primary font-raleway font-bold mt-4 transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
          }
          href={'/policy'}
        >
          Политика конфиденциальности
        </Link>
      </div>
    </footer>
  );
};
