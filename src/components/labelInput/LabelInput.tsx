import React, { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  register: any;
  isValid?: boolean;
}

export const LabelInput = ({
  id,
  label,
  register,
  isValid,
  ...props
}: Props) => {
  return (
    <input
      id={id}
      {...register(`${label}`)}
      type="text"
      {...props}
      className={`w-full outline-none px-4 pt-1 pb-3 border-b-[1px] border-[rgba(17, 17, 17, 0.5)] placeholder:text-[rgba(17, 17, 17, 0.5)] ${
        isValid ? '' : 'border-[#B54949]'
      }`}
    />
  );
};
