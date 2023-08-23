import React, { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  register: any;
}

export const LabelInput = ({ id, label, register, ...props }: Props) => {
  return (
    <input
      id={id}
      {...register(`${label}`)}
      type="text"
      {...props}
      className=" outline-none px-4 pt-1 pb-3 border-b-[1px] border-[rgba(17, 17, 17, 0.5)] placeholder:text-[rgba(17, 17, 17, 0.5)]"
    />
  );
};
