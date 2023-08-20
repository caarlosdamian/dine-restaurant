import Image from 'next/image';
import React from 'react';
import { Button } from '..';

export const Hero = () => {
  return (
    <section
      id="hero"
      className="
       flex items-center min-h-[748px] md:min-h-[992px] md:pb-[120px] justify-center flex-col pt-40 px-6 gap-9 md:pt-[374px] md:gap-[38px] md:px-10 lg:pt-16 lg:px-[165px] lg:gap-[153px] lg:items-start lg:justify-start bg-cover bg-no-repeat h-screen w-screen bg-[url('/images/homepage/hero-bg-mobile@2x.jpg')] md:bg-[url('/images/homepage/hero-bg-tablet@2x.jpg')] lg:bg-[url('/images/homepage/hero-bg-desktop@2x.jpg')]"
    >
      <div className="relative h-[82.4px] w-20 md:w-[103px] md:h-[40px]">
        <Image src="/logo.svg" alt="logo" fill className="object-contain" />
      </div>
      <div className="flex flex-col items-center gap-5 text-center text-white lg:text-left lg:items-start lg:gap-3">
        <h1 className="text-[32px] font-light leading-[40px] tracking-[-0.4px] md:text-5xl md:leading-[64px] md:tracking-[-0.6px] w-96 lg:text-[80px] lg:w-[508px] lg:tracking-[-1px] lg:leading-[80px]">
          Exquisite dining since 1989
        </h1>
        <p className="text-base font-normal leading-7 w-[327px] mb-8 md:text-xl md:leading-8 md:w-[573px] lg:w-[445px] lg:mb-5">
          Experience our seasonal menu in beautiful country surroundings. Eat
          the freshest produce from the comfort of our farmhouse.
        </p>
        <Button label="BOOK A TABLE" />
      </div>
    </section>
  );
};
