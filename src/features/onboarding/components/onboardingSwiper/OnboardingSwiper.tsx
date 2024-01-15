'use client';

import type { PropsWithChildren } from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const settings = {
  slidesPerView: 1,
  pagination: { clickable: true },
  modules: [Pagination],
};

export const OnboardingSwiper = ({ children }: PropsWithChildren) => {
  return (
    <Swiper {...settings} className="w-full h-[80%]">
      {children}
    </Swiper>
  );
};
