'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ThemeButton } from './ThemeButton';

type NavLink = {
  label: string;
  href: string;
};
type Props = {
  navLinks: NavLink[];
};

export const Navigation = ({ navLinks }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="container max-w-container mx-auto flex items-center justify-between px-4">
        <Link href={'/'}>
          <div className="flex items-center space-x-6">
            <Image src="/images/logo.svg" alt="logo" width={30} height={20} />
            <span className="text-2xl  font-jetBrains font-bold text-[#FDFDFD]">
              БИТКЭМП
            </span>
          </div>
        </Link>
        {/* Бургер-меню для мобильных устройств */}
        <button className="block md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {/* Иконка бургера */}
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        {/* Навигационные ссылки для десктопа */}
        <ul className="space-x-6 hidden md:flex">
          {navLinks.map((link) => (
            <li key={link.label} className="flex items-center">
              <Link
                scroll={false}
                href={link.href}
                className="relative text-[#FDFDFD] font-raleway text-[15px] font-bold leading-[17.61px] tracking-[-0.02em] text-center transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#FDFDFD] after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </Link>
            </li>
          ))}{' '}
          <li>
            <ThemeButton />
          </li>
        </ul>
      </nav>
      {/* Мобильное меню */}
      {isOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col space-y-4 px-4 mt-4">
            <li>
              <ThemeButton />
            </li>
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="block text-[#FDFDFD] font-raleway text-[15px] font-bold leading-[17.61px] tracking-[-0.02em]"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
