import { cardInfo } from '@/utils/info';
import Image from 'next/image';
import React from 'react';
import { Images } from '../images/Images';

export const Featured = () => {
  return (
    <section id='featured' className="flex flex-col gap-24 items-center relative mt-80 px-6 pb-16 md:px-[98px] lg:gap-[320px] lg:px-[165px] lg:mt-[178px] lg:min-h-[1400px]">
      <Image
        src="/images/patterns/pattern-curve-top-right.svg"
        alt="patterns-one"
        height={320}
        width={895}
        className="hidden md:block absolute top-[-165px] left-[-390px]"
      />
      <Image
        src="/images/patterns/pattern-curve-top-left.svg"
        alt="patterns-left"
        height={320}
        width={895}
        className="hidden md:block absolute  right-[-390px] bottom-0"
      />
      <Image
        src="/images/patterns/pattern-lines.svg"
        alt="patterns-lines"
        height={76}
        width={160}
        className="hidden md:block absolute bottom-[450px] right-10 lg:bottom-72 lg:right-14 lg:z-30"
      />
      {cardInfo?.map((card, index) => (
        <div
          key={card.id}
          className="flex flex-col gap-9 even:mt-14 items-center md:even:mt-0 lg:justify-start lg:items-end lg:odd:items-start lg:odd:mt-[200px] lg:even:mt-0 lg:w-[1110px]"
        >
          <Images images={card.images} index={index} />
          <div
            className={`text-center text-ebony_clay flex flex-col gap-3 items-center md:gap-7 lg:text-left`}
          >
            <Image
              src="/images/patterns/pattern-divide.svg"
              alt="divider"
              width={71}
              height={7}
              className={`object-contain mt-3 lg:self-start`}
            />
            <h1 className="text-[32px] font-bold leading-10 tracking-tighter w-56 md:text-5xl md:leading-[48px] md:w-[350px] lg:w-[445px]">
              {card.title}
            </h1>
            <h2 className="text-base font-normal leading-7 md:text-xl md:leading-8 md:w-[450px]">
              {card.desc}
            </h2>
          </div>
        </div>
      ))}
    </section>
  );
};
