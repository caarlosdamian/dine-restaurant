'use client';
import React, { useState } from 'react';
import { LabelInput } from '../labelInput/LabelInput';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Image from 'next/image';
import { options } from '@/utils/info';
import { Select } from '../select/Select';

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().required().email(),
    mm: yup.string().required(),
    dd: yup.string().required(),
    yyyy: yup.string().required(),
    meridian: yup.string(),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

export const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const [selectedItem, setSelectedItem] = useState('am');
  const handleSelect = (id:string) => {
    setSelectedItem(id)
  }

  return (
    <form
      onSubmit={handleSubmit((data: FormData) => console.log(data))}
      className="bg-white h-[536px] relative"
    >
      <div
        className="flex flex-col gap-[34px] bg-white h-[585px] w-[327px] absolute top-[-136px] left-[50%] right-[50%] translate-x-[-50%] p-8"
        style={{ boxShadow: '0px 75px 100px -50px rgba(56, 66, 85, 0.50)' }}
      >
        <div className="flex flex-col gap-3">
          <LabelInput
            label="name"
            placeholder="Name"
            register={register}
            isValid={!errors['name']?.message}
          />
          {errors['name']?.message && (
            <span className="text-[#B54949] text-[10px] font-medium tracking-[-0.125px]">
              {errors['name']?.message}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-3">
          <LabelInput label="email" placeholder="Email" register={register} />
          {errors['email']?.message && (
            <span className="text-[#B54949] text-[10px] font-medium tracking-[-0.125px]">
              {errors['email']?.message}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col">
            <span>Pick a date</span>
            <span className="text-[#B54949] text-[10px] font-medium tracking-[-0.125px]">
              This field is required
            </span>
          </div>
          <div className="flex gap-4">
            <LabelInput
              label="mm"
              placeholder="MM"
              register={register}
              maxLength={2}
            />
            <LabelInput
              label="dd"
              placeholder="DD"
              register={register}
              maxLength={2}
            />
            <LabelInput
              label="yyyy"
              placeholder="YYYY"
              register={register}
              maxLength={4}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col">
            <span>Pick a time</span>
            <span className="text-[#B54949] text-[10px] font-medium tracking-[-0.125px]">
              This field is required
            </span>
          </div>
          <div className="flex gap-4">
            <LabelInput
              label="hour"
              placeholder="09"
              register={register}
              maxLength={2}
            />
            <LabelInput
              label="minute"
              placeholder="00"
              register={register}
              maxLength={2}
            />
            <Select handleSelect={handleSelect} selectedItem={selectedItem}/>
          </div>
        </div>
        <button type="submit">Click</button>
      </div>
    </form>
  );
};
