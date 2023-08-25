import Image from 'next/image';
import React from 'react';

interface Props {
  handleChange: (action: string) => void;
  people: number;
}

export const Counter = ({ handleChange, people }: Props) => {
  return (
    <div className="flex justify-between items-center pb-4 px-5 border-b-[1px] border-[rgba(17, 17, 17, 0.5)]">
      <Image
        src="/images/icons/icon-minus.svg"
        alt=""
        height={10}
        width={10}
        onClick={() => handleChange('decrement')}
      />
      <span>{people} people</span>
      <Image
        src="/images/icons/icon-plus.svg"
        alt=""
        height={10}
        width={10}
        onClick={() => handleChange('increment')}
      />
    </div>
  );
};
