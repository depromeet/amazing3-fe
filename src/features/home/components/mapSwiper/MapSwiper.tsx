'use client';

import type { PropsWithChildren } from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper } from 'swiper/react';

import { CustomPagination } from './CustomPagination';

import 'swiper/css';
import 'swiper/css/pagination';
import './MapSwiper.styles.css';

const settings = {
  slidesPerView: 1,
  pagination: { clickable: true },
  modules: [Pagination],
};

export const MapSwiper = ({ children }: PropsWithChildren) => {
  return (
    <Swiper {...settings} className="h-full">
      {children}
      <CustomPagination />
    </Swiper>
  );
};
