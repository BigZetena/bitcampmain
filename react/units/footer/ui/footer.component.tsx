import Link from 'next/link';
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
        <a href="" className="">
          info@bit-camp.ru
        </a>
        <div className="flex justify-between font-manrope">
          {' '}
          <a href="tel:+79811550991" className="">
            <strong>Телефон:</strong> +7 981 155 09 91
          </a>
          <p>
            <strong>ИНН:</strong> 7838121334
          </p>
          <p>
            <strong>ОГРН:</strong> 1247800024592
          </p>
        </div>

        <Link href={'/policy'}>Политика конфиденциальности</Link>
      </div>
    </div>
  );
};
