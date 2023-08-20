'use client';
import useWindowSize from '@/hooks/useWindowSize';
import React from 'react';

export const Images = ({
  index,
  images,
}: {
  index: number;
  images: string[];
}) => {
  const { width } = useWindowSize();
  return (
    <div
      className={`w-[327px] bg-no-repeat h-[400px] object-contain bg-contain md:h-[360px] md:w-[573px] lg:w-[540px] lg:h-[720px]
    ${
      index === 0
        ? 'absolute top-[-392px] left-6 md:left-[98px] md:top-[-416px] lg:top-[-248px]'
        : 'lg:absolute lg:right-[165px] lg:bottom-[-80px]'
    }`}
      style={{
        backgroundImage: `url(${
          width >= 768 && width < 1024
            ? images[1]
            : width <= 767
            ? images[0]
            : images[2]
        })`,
        boxShadow: '0px 75px 100px -50px rgba(56, 66, 85, 0.50)',
      }}
    ></div>
  );
};
