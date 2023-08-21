import { menuInfo } from '@/utils/info';
import React from 'react';
import { ResponsiveImage } from '../responsiveImage/ResponsiveImage';
import Image from 'next/image';

export const Menu = () => {
  return (
    <section
      id="menu"
      className="bg-black h-full w-screen px-6 pt-[72px] pb-[100px] flex flex-col items-center gap-[85px] md:px-24 lg:pt-52 lg:pb-24 lg:flex-row lg:items-start lg:justify-center"
    >
      <div className="flex flex-col gap-3 text-white text-center items-center md:w-[445px] md:gap-7 lg:items-start lg:text-start">
        <Image
          src="/images/patterns/pattern-divide.svg"
          alt="divider"
          width={71}
          height={7}
          className={`object-contain mb-4`}
        />
        <h2 className="text-[32px] font-bold leading-10 tracking-[-0.4px] md:text-5xl">
          A few highlights from our menu
        </h2>
        <h2 className="text-base font-normal md:text-xl">
          We cater for all dietary requirements, but here’s a glimpse at some of
          our diner’s favourites. Our menu is revamped every season.
        </h2>
      </div>
      <div className="flex flex-col gap-6 items-center">
        {menuInfo.map((item, index) => (
          <div
            className={`flex flex-col gap-9 pb-14 md:flex-row md:gap-16 ${
              index === 0
                ? 'border-b-[1px] border-white border-opacity-25'
                : index === 1
                ? 'border-b-[1px] border-white border-opacity-25'
                : ''
            }`}
            key={item.id}
          >
            <div className="relative">
              <div className="hidden md:block absolute bg-beaver h-[1px] w-8 right-[-32px] top-[18px]"></div>
              <ResponsiveImage
                desktop={item.images[2]}
                tablet={item.images[1]}
                mobile={item.images[0]}
              />
            </div>
            <div className="flex flex-col gap-3 text-white items-center text-center md:text-start md:items-start">
              <h2 className="text-xl font-bold">{item.title}</h2>
              <h2 className="text-base font-normal">{item.desc}</h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
