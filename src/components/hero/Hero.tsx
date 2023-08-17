import Image from 'next/image';
import React from 'react';

export const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-[url('/images/homepage/hero-bg-mobile@2x.jpg')] bg-cover bg-no-repeat h-screen w-screen p-6 md:px-10 md:pt-[372px] lg:px-[165px] lg:py-[65px] md:bg-[url('/images/homepage/hero-bg-tablet@2x.jpg')] lg:md:bg-[url('/images/homepage/hero-bg-desktop@2x.jpg')] flex items-center justify-center flex-col gap-9 md:gap-[38px] lg:items-start lg:pt-16 lg:justify-start lg:gap-40"
    >
      <div className="relative h-8 w-20">
        <Image src="/logo.svg" alt="logo" fill className="object-contain" />
      </div>
      <div className="flex flex-col items-center gap-5 text-center text-white lg:text-left lg:items-start lg:gap-3">
        <h1 className="text-[32px] font-light leading-[40px] tracking-[-0.4px] md:text-5xl md:leading-[64px] md:tracking-[-0.6px] w-96 lg:text-[80px] lg:w-[508px] lg:tracking-[-1px] lg:leading-[80px]">
          Exquisite dining since 1989
        </h1>
        <p className="text-base font-normal leading-7 w-[327px] md:text-xl md:leading-8 md:w-[573px] lg:w-[445px]">
          Experience our seasonal menu in beautiful country surroundings. Eat
          the freshest produce from the comfort of our farmhouse.
        </p>
        <div className="h-[64px]"></div>
      </div>
    </section>
  );
};
