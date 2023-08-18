'use client';
import { cardInfo } from '@/utils/info';
import React from 'react';

export const Featured = () => {
  return (
    <div>
      {cardInfo?.map((card) => (
        <div key={card.id}>
          <div
            className="w-screen h-screen bg-no-repeat"
            style={{ backgroundImage: `url(${card.images[0]})` }}
          ></div>
          <div className="">
            <h1>{card.title}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};
