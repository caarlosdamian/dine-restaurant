'use client';
import React, { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: 'light' | 'dark' | 'transparent';
}

export const Button = ({ label, variant = 'dark', ...props }: Props) => {
  return (
    <button
      className={`ring-white text-white bg-black hover:bg-white hover:text-black hover:ring-black disabled:text-white py-6 px-7 min-w-[245px] ring-1  text-lg font-semibold leading-4 tracking-[2.5px] cursor-pointer disabled:opacity-25 disabled:cursor-not-allowed disabled:bg-transparent ${
        variant === 'transparent'
          ? 'bg-transparent'
          : variant === 'light' &&
            'ring-black  text-black hover:bg-black hover:text-white disabled:text-black'
      }`}
      {...props}
    >
      {label}
    </button>
  );
};
