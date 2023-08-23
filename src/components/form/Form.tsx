'use client';
import React from 'react';
import { LabelInput } from '../labelInput/LabelInput';
import { useForm, SubmitHandler } from 'react-hook-form';
type Inputs = {
  name: string;
  email: string;
};

export const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  return (
    <form onSubmit={handleSubmit((data)=>console.log(data))} className="bg-white h-[536px] relative">
      <div
        className="bg-white  h-[585px] w-[327px] absolute top-[-136px] left-[50%] right-[50%] translate-x-[-50%] p-8"
        style={{ boxShadow: '0px 75px 100px -50px rgba(56, 66, 85, 0.50)' }}
      >
        <div className="flex flex-col gap-3">
          <LabelInput label="name" placeholder="Name" register={register} />
          <span className="text-[#B54949] text-[10px] font-medium tracking-[-0.125px]">
            This field is required
          </span>
        </div>
        <div className="flex flex-col gap-3">
          <LabelInput label="email" placeholder="Email" register={register} />
          <span className="text-[#B54949] text-[10px] font-medium tracking-[-0.125px]">
            This field is required
          </span>
        </div>
        <button type='submit'>Click</button>
      </div>
    </form>
  );
};
