import Image from 'next/image';
import React from 'react';

export const Footer = () => {
  return (
    <footer className="py-20 px-6 text-white bg-code_gray flex flex-col items-center gap-11 md:flex-row md:items-start md:justify-start md:py-16 md:px-10 md:gap-32 lg:px-[165px] lg:gap-[190px]">
      <div className="relative h-[40px] w-[103px]">
        <Image src="/logo.svg" alt="logo" fill className="object-contain" />
      </div>
      <div className="flex flex-col text-center gap-8 text-sm font-normal tracking-[2px] uppercase md:text-start lg:flex-row lg:gap-32">
        <div className="flex flex-col gap-3">
          <p>Marthwaite, Sedbergh</p>
          <p>Cumbria</p>
          <p>+00 44 123 4567</p>
        </div>
        <div className="flex flex-col gap-3">
          <p>OPEN TIMES</p>
          <p>MON - FRI: 09:00 AM - 10:00 PM</p>
          <p>SAT - SUN: 09:00 AM - 11:30 PM</p>
        </div>
      </div>
    </footer>
  );
};
