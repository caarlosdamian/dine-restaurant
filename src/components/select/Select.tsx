import { options } from '@/utils/info';
import Image from 'next/image';
import React, { useState } from 'react';

export const Select = ({
  selectedItem,
  handleSelect,
}: {
  selectedItem: string;
  handleSelect: (id: string) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="flex items-center gap-4 relative min-w-[88px]"
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <span className="uppercase">{selectedItem}</span>
      <Image
        src="/images/icons/icon-arrow.svg"
        width={16}
        height={8}
        alt="arrow"
        className={` transition-all ease-in-out duration-300 ${
          isOpen && 'rotate-[180deg]'
        }`}
      />
      <div
        style={{
          boxShadow: '0px 15px 25px 0px rgba(56, 66, 85, 0.25)',
        }}
        className={`${
          isOpen ? '' : 'hidden'
        } absolute bg-[#FFF] bottom-[-110px] left-0 h-[103px] w-[88px] z-40`}
      >
        {options.map((option) => (
          <div
            key={option.id}
            className="flex gap-4 items-center justify-end px-4 py-2"
            onClick={() => handleSelect(option.id)}
          >
            {selectedItem === option.id && (
              <Image
                src="/images/icons/icon-check.svg"
                width={10}
                height={10}
                alt="check"
              />
            )}
            <span className="uppercase font-normal text-xl">{option.id}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
