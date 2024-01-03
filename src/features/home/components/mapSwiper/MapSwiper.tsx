'use client';

import type { PropsWithChildren } from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper } from 'swiper/react';

import { CurrentDatePosition } from './CurrentDatePosition';
import { CustomPagination } from './CustomPagination';

import 'swiper/css';
import 'swiper/css/pagination';
import './MapSwiper.styles.css';

const settings = {
  slidesPerView: 1,
  pagination: { clickable: true },
  modules: [Pagination],
};

interface MapSwiperProps extends PropsWithChildren {
  currentPosition: number | null;
}

export const MapSwiper = ({ currentPosition, children }: MapSwiperProps) => {
  return (
    <Swiper {...settings} className="h-full">
      {children}
      {currentPosition && <CurrentDatePosition currentPosition={currentPosition} />}
      <CustomPagination />
    </Swiper>
  );
};
