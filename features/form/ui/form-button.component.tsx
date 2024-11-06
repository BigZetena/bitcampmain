import React, { FC, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export const FormButton: FC<ButtonProps> = ({ text, ...props }) => (
  <button
    {...props}
    className="w-full bg-primary text-secondary py-2 px-4 rounded-md hover:bg-gray-500 transition duration-300"
  >
    {text}
  </button>
);
