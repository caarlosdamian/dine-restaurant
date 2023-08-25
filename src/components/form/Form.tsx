'use client';
import React, { useState } from 'react';
import { LabelInput } from '../labelInput/LabelInput';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Select } from '../select/Select';
import { Button } from '..';
import { Counter } from '../counter/Counter';
import Image from 'next/image';

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().required().email(),
    date: yup.object({
      mm: yup.string().required(),
      dd: yup.string().required(),
      yyyy: yup.string().required(),
    }),
    hours: yup.object({
      hour: yup.string().required(),
      minute: yup.string().required(),
    }),
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
  const [people, setPeople] = useState(1);
  const handleSelect = (id: string) => {
    setSelectedItem(id);
  };

  const getErrorFromObject = (errors: object) => {
    const entries = Object.entries(errors);
    console.log(entries);
    const errorsArray = entries.map((item) => ({
      label: item[0],
      error: item[1].message,
    }));

    return errorsArray;
  };

  const handleCounter = (action: string) => {
    if (action === 'increment' && people < 20) {
      setPeople((prev) => prev + 1);
    } else if (action === 'decrement' && people > 1) {
      setPeople((prev) => prev - 1);
    }
  };

  return (
    <form
      onSubmit={handleSubmit((data: FormData) => {
        const formData = {
          ...data,
          hours: { ...data.hours, meridian: selectedItem },
          people,
        };
      })}
      className="bg-white h-[536px] relative lg:h-[312px]"
    >
      <Image
        src="images/patterns/pattern-curve-bottom-right.svg"
        alt="pattern"
        width={993}
        height={320}
        className="hidden lg:block absolute top-0 left-0 z-20"
      />
      <Image
        src="/images/patterns/pattern-lines.svg"
        alt="patterns-lines"
        height={76}
        width={160}
        className="hidden lg:block absolute top-[166px] left-[665px] z-40"
      />
      <div
        className="flex flex-col gap-[34px] bg-white h-[585px] w-[327px] absolute top-[-136px] left-[50%] right-[50%] translate-x-[-50%] p-8 md:w-[540px] lg:left-[70%] xl:left-[60%] lg:top-[-340px] z-50 md:p-12"
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
          <LabelInput
            label="email"
            placeholder="Email"
            register={register}
            isValid={!errors['email']?.message}
          />
          {errors['email']?.message && (
            <span className="text-[#B54949] text-[10px] font-medium tracking-[-0.125px]">
              {errors['email']?.message}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-2 md:flex-row md:justify-between md:gap-16 md:items-center">
          <div className="flex flex-col">
            <span className="font-normal text-xl leading-7 md:min-w-[90px]">
              Pick a date
            </span>
            {errors['date'] &&
              getErrorFromObject(errors['date']).map((item) => (
                <span
                  key={item.error}
                  className="text-[#B54949] text-[10px] font-medium tracking-[-0.125px]"
                >
                  {item.error}
                </span>
              ))}
          </div>
          <div className="flex gap-4">
            <LabelInput
              label="date.mm"
              placeholder="MM"
              register={register}
              maxLength={2}
              isValid={!errors[`date`]}
            />
            <LabelInput
              label="date.dd"
              placeholder="DD"
              register={register}
              maxLength={2}
              isValid={!errors[`date`]}
            />
            <LabelInput
              label="date.yyyy"
              placeholder="YYYY"
              register={register}
              maxLength={4}
              isValid={!errors[`date`]}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 md:flex-row md:justify-between md:gap-16 md:items-center">
          <div className="flex flex-col">
            <span className="font-normal text-xl leading-7 md:min-w-[90px]">
              Pick a time
            </span>
            {errors['hours'] &&
              getErrorFromObject(errors['hours']).map((item) => (
                <span
                  key={item.error}
                  className="text-[#B54949] text-[10px] font-medium tracking-[-0.125px]"
                >
                  {item.error}
                </span>
              ))}
          </div>
          <div className="flex gap-4">
            <LabelInput
              label="hours.hour"
              placeholder="09"
              register={register}
              maxLength={2}
              isValid={!errors['hours']}
            />
            <LabelInput
              label="hours.minute"
              placeholder="00"
              register={register}
              maxLength={2}
              isValid={!errors['hours']}
            />
            <Select handleSelect={handleSelect} selectedItem={selectedItem} />
          </div>
        </div>
        <Counter people={people} handleChange={handleCounter} />
        <Button variant="dark" label="MAKE RESERVATION" type="submit" />
      </div>
    </form>
  );
};
