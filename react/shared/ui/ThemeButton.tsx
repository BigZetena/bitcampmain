'use client';
import { useEffect, useState } from 'react';

export function ThemeButton() {
  const [currentTheme, setCurrentTheme] = useState('system');

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
      document.documentElement.classList.add('dark');
    } else {
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
    <select
      onChange={(evt) => changeHandler(evt.target.value)}
      value={currentTheme}
    >
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="system">System</option>
    </select>
  );
}
