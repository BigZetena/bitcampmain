'use client'; // Не забываем использовать для компонентов Next.js

import React, { TextareaHTMLAttributes, ForwardedRef } from 'react';

// Переименовываем интерфейс для ясности
interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export const FormTextArea = React.forwardRef<
  HTMLTextAreaElement,
  TextAreaProps
>(({ label, error, ...props }, ref: ForwardedRef<HTMLTextAreaElement>) => (
  <div>
    <label className="block text-sm font-medium text-primary ">{label}</label>
    <textarea
      ref={ref}
      {...props}
      className={`resize-none text-primary bg-background font-manrope mt-1 block w-full border-b focus:border-primary transition-colors duration-200 ease-in-out focus:outline-none sm:text-sm ${
        error ? 'border-red-500' : ''
      }`}
    />
    {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
  </div>
));

// Обязательно указываем displayName для лучшей отладки
FormTextArea.displayName = 'FormTextArea';
