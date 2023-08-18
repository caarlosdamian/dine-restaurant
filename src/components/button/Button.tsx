import React, { ButtonHTMLAttributes, HTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: 'light' | 'dark';
}

export const Button = ({ label, variant = 'dark', ...props }: Props) => {
  return (
    <button
      className={`${
        variant === 'dark'
          ? 'ring-white bg-black hover:bg-white hover:text-black disabled:text-white'
          : 'ring-black  text-black hover:bg-black hover:text-white disabled:text-black'
      }     bg-transparent py-6 px-14 min-w-[245px] ring-1  text-lg font-semibold leading-4 tracking-[2.5px] cursor-pointer disabled:opacity-25 disabled:cursor-not-allowed disabled:bg-transparent `}
      {...props}
    >
      {label}
    </button>
  );
};
