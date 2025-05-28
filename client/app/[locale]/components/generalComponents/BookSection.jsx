"use client"
import React from 'react';
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const BookSection = () => {
  const t = useTranslations('Header');

  return (
    <div className='fixed flex bottom-4 -left-1 lg:left-2 md:bottom-4 lg:bottom-5 z-[998] w-full'>
      <div className='flex justify-between items-center '>
        <Link href="tel:+02422121264" className='flex w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] relative rounded-full border-white border ml-6 lg:ml-7 text-white bg-black/70 hover:bg-white hover:border-black hover:text-[#dec7a6] items-center justify-center animate-zoom cursor-pointer'>
            <LiaPhoneVolumeSolid className="z-[9999] wiggle-phone" size={36} />
          <div className="absolute w-[51px] h-[51px] lg:w-[61px] lg:h-[61px] bg-transparent border border-white rounded-full pulse-ring"></div>
        </Link>

        <a
          href="https://nihotellara.rezervasyonal.com/en/?currency=EUR&language=en&hideLayout=1&Checkin=2025-05-14&Checkout=2025-05-15&Adult=3&child=0&ChildAges="
          target="_blank"
          rel="noopener noreferrer"
          className='flex md:hidden whitespace-nowrap text-white bg-[#dec7a6] py-[8px] px-[24px] min-w-[200px] text-center items-center justify-center rounded-sm absolute left-1/2 -translate-x-1/2 cursor-pointer'
        >
          {t("booknow")}
        </a>
      </div>
    </div>
  );
};

export default BookSection;