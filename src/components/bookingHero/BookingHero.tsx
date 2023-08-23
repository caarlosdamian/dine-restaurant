import Image from 'next/image';
import React from 'react';
import { Button } from '..';

export const BookingHero = () => {
  return (
    <div className="h-[600px]  bg-[url('/images/booking/hero-bg-mobile.jpg')] md:bg-[url('/images/booking/hero-bg-tablet.jpg')]  lg:bg-[url('/images/booking/hero-bg-desktop.jpg')] bg-no-repeat bg-cover px-6 py-14 flex flex-col items-center gap-11 justify-center md:px-10 md:justify-start md:gap-[70px] lg:px-[165px] lg:py-16 lg:items-start lg:gap-[154px]">
      <div className="relative h-[82.4px] w-20 md:w-[103px] md:h-[40px] md:self-start">
        <Image src="/logo.svg" alt="logo" fill className="object-contain" />
      </div>
      <div className="flex flex-col gap-5 items-center md:w-[573px] lg:w-[445px]">
        <div className="flex flex-col gap-3 text-white text-center lg:text-start lg:gap-[18px]">
          <h1 className="text-[32px] font-light leading-10 tracking-[-0.4px] md:text-5xl md:tracking-[-0.6px] md:leading-[64px] lg:text-[80px] lg:tracking-[-1px] lg:leading-[80px]">
            Reservations
          </h1>
          <h2 className="text-base font-normal leading-7 md:text-xl">
            We can’t wait to host you. If you have any special requirements
            please feel free to call on the phone number below. We’ll be happy
            to accommodate you.
          </h2>
        </div>
        <div className="md:hidden">
          <Button variant="transparent" label="RESERVE PLACE" />
        </div>
      </div>
    </div>
  );
};
