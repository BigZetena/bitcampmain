'use client'; // Не забываем использовать для компонентов Next.js

import React, { InputHTMLAttributes, ForwardedRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const FormInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, ...props }, ref: ForwardedRef<HTMLInputElement>) => (
    <div>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        ref={ref} // Теперь мы можем передавать ref в input
        {...props}
        className={`font-manrope mt-1 block w-full border-b focus:border-primary transition-colors duration-200 ease-in-out focus:outline-none sm:text-sm ${
          error ? 'border-red-500' : ''
        }`}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  )
);

// Обязательно указываем displayName для лучшей отладки
FormInput.displayName = 'FormInput';
