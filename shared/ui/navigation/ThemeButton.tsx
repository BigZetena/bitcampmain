'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from '@/shared/ui/general/select.component';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export function ThemeButton() {
  const [currentTheme, setCurrentTheme] = useState('system');
  const [currentImg, setCurrentImg] = useState('light');

  useEffect(() => {
    const theme = localStorage.getItem('theme') || 'system';
    setCurrentTheme(theme);
    applyTheme(theme);
  }, []);

  function applyTheme(theme: string) {
    if (
      theme === 'dark' ||
      (theme === 'system' &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      localStorage.setItem('theme', 'dark');
      setCurrentImg('dark');
      document.documentElement.classList.add('dark');
    } else {
      setCurrentImg('light');
      document.documentElement.classList.remove('dark');
    }
  }

  function changeHandler(value: string) {
    setCurrentTheme(value);
    if (value === 'system') {
      localStorage.removeItem('theme');
    } else {
      localStorage.setItem('theme', value);
    }
    applyTheme(value);
  }

  return (
    <Select onValueChange={changeHandler} value={currentTheme}>
      <SelectTrigger className=" p-1 w-[40px] hover:border hover:border-solid text-white hover:border-gray-300  hover:text-accent-foreground transition-all duration-100  focus:ring-0 focus:ring-offset-0 border-transparent bg-transparent">
        <Image
          src={
            currentImg === 'dark'
              ? '/icons/moon-stars-fill.svg'
              : '/icons/sun.svg'
          }
          width={24}
          height={24}
          alt="луна"
        />
      </SelectTrigger>
      <SelectContent className="bg-[#1b1b1b] text-white">
        <SelectItem className="text-white" value="light">
          Light
        </SelectItem>
        <SelectItem className="text-white" value="dark">
          Dark
        </SelectItem>
        <SelectItem className="text-white" value="system">
          System
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
