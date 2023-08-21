'use client';
import React, { useState } from 'react';
import { ResponsiveImage } from '../responsiveImage/ResponsiveImage';
import { sectionInfo } from '@/utils/info';
import { Button } from '@/components/button/Button';
import Image from 'next/image';

export const Events = () => {
  const [eventIndex, setEventIndex] = useState<number>(0);

  return (
    <section
      id="events"
      className="h-full flex flex-col px-6 pt-20 pb-32 gap-12 transition-all ease-in-out items-center md:gap-14 md:pt-[120px] md:px-10 lg:flex-row lg:px-[165px] lg:gap-[125px] lg:justify-center"
    >
      <div
        className="relative"
        style={{ boxShadow: '0px 75px 100px -50px rgba(56, 66, 85, 0.50)' }}
      >
        <ResponsiveImage
          desktop={sectionInfo[eventIndex]?.images[2]}
          tablet={sectionInfo[eventIndex]?.images[1]}
          mobile={sectionInfo[eventIndex]?.images[0]}
          className="z-10 relative"
        />
        <Image
          src="/images/patterns/pattern-lines.svg"
          alt="patterns-lines"
          height={76}
          width={160}
          className="hidden md:block absolute top-[-38px] left-[-58px] z-40"
        />
        <Image
          src="/images/patterns/pattern-curve-top-right.svg"
          alt="patterns-one"
          height={320}
          width={895}
          className="hidden md:block absolute top-[-120px] left-[-290px]"
        />
      </div>
      <div className="flex flex-col items-center gap-7 md:gap-14 lg:items-start">
        <div className="flex flex-col gap-4 md:flex-row lg:flex-col lg:order-3 lg:items-start">
          {sectionInfo.map((event, index) => (
            <div
              className="text-center flex flex-col items-center cursor-pointer lg:relative"
              key={event.id}
              onClick={() => setEventIndex(index)}
            >
              <p
                className={`uppercase text-xl text-[#4C4C4C] opacity-50 font-semibold leading-7 tracking-[2.5px] hover:opacity-100 ${
                  index === eventIndex ? 'opacity-100' : ''
                }`}
              >
                {event.title}
              </p>
              {index === eventIndex && (
                <div className="bg-beaver h-[1px] w-12 lg:absolute lg:left-[-125px] lg:top-[40%] lg:w-24"></div>
              )}
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center gap-16 lg:items-start">
          <div
            className={`text-center text-ebony_clay flex flex-col gap-3 items-center md:gap-7 lg:text-left min-h-[164px] md:min-h-[204px]`}
          >
            <h1 className="text-[32px] font-bold leading-10 tracking-tighter w-56 md:text-5xl md:leading-[48px] md:w-[350px] lg:w-[445px]">
              {sectionInfo[eventIndex].title}
            </h1>
            <h2 className="text-base font-normal leading-7 md:text-xl md:leading-8 md:w-[450px]">
              {sectionInfo[eventIndex].desc}
            </h2>
          </div>
          <Button variant='dark' label="BOOK A TABLE" />
        </div>
      </div>
    </section>
  );
};
