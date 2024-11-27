import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const Footer = () => {
  return (
    <footer className="container max-w-container py-10 mx-auto font-raleway flex flex-col md:flex-row justify-between items-start md:items-center">
      <div className="flex flex-col justify-between mb-6 md:mb-0">
        <div className="flex gap-4 items-center">
          <a href="https://t.me/bitcamp0110" target="_blank">
            <svg
              width="32"
              height="29"
              viewBox="0 0 32 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M32 1.02733L26.9382 27.7927C26.9382 27.7927 26.23 29.6484 24.2845 28.7584L12.6056 19.3662L12.5514 19.3385C14.129 17.8527 26.3619 6.31631 26.8966 5.79338C27.7242 4.9835 27.2104 4.50136 26.2494 5.11314L8.17986 17.1492L1.20865 14.689C1.20865 14.689 0.111591 14.2796 0.0060511 13.3897C-0.100878 12.4982 1.24476 12.0161 1.24476 12.0161L29.6642 0.322322C29.6642 0.322322 32 -0.754119 32 1.02733Z"
                fill="var(--primary)"
              />
            </svg>
          </a>
          <a href="https://vk.com/bitcamp" target="_blank">
            <svg
              width="35"
              height="22"
              viewBox="0 0 35 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.0631 22C7.10494 22 0.284197 13.7417 0 0H5.99001C6.18676 10.0861 10.6027 14.3584 14.1006 15.2392V0H19.7408V8.6987C23.1949 8.32432 26.8239 4.36036 28.0481 0H33.6883C33.227 2.26141 32.3074 4.4026 30.9871 6.28964C29.6668 8.17669 27.9741 9.769 26.015 10.967C28.2018 12.0616 30.1334 13.6109 31.6822 15.5127C33.231 17.4146 34.3618 19.6256 35 22H28.7914C28.2185 19.9377 27.054 18.0916 25.444 16.693C23.834 15.2945 21.8501 14.4057 19.7408 14.1381V22H19.0631Z"
                fill="var(--primary)"
              />
            </svg>
          </a>
        </div>
        <p className="text-2xl mt-4">© БИТКЭМП, 2024</p>
      </div>
      <div className="text-left md:text-right flex flex-col justify-between gap-2 items-start md:items-end">
        <p>
          196084, г. Санкт-Петербург, ул. Парфеновская д.12, БЦ “АКВИЛОН LINKS”
        </p>
        <a href="mailto:info@bit-camp.ru">info@bit-camp.ru</a>
        <div className="flex flex-col md:flex-row justify-start md:justify-between font-manrope w-full  md:w-auto mt-4 md:mt-0">
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
