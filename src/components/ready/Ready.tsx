import React from 'react';
import { Button } from '..';

export const Ready = () => {
  return (
    <div className="bg-[url('/images/homepage/ready-bg-mobile.jpg')] md:bg-[url('/images/homepage/ready-bg-tablet.jpg')]  lg:bg-[url('/images/homepage/ready-bg-desktop.jpg')] bg-no-repeat bg-cover px-6 py-20 min-h-[328px] flex items-center justify-center md:pl-[66px] md:pr-[84px]">
      <div className="flex flex-col gap-5 items-center text-center md:gap-6 lg:flex-row lg:gap-[250px]">
        <h1 className="text-[32px] text-white font-bold leading-10 tracking-[-0.4px] md:text-5xl md:leading-[48px]">
          Ready to make a reservation?
        </h1>
        <Button variant="transparent" label="BOOK A TABLE" />
      </div>
    </div>
  );
};
