import { type PropsWithChildren, useEffect, useState } from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper } from 'swiper/react';

import { CustomPagination } from './CustomPagination';

import 'swiper/css';
import 'swiper/css/pagination';
import './MapSwiper.styles.css';

const settings = {
  pagination: { clickable: true },
  modules: [Pagination],
};

interface MapSwiperProps extends PropsWithChildren {
  currentPosition: number | null;
}

export const MapSwiper = ({ currentPosition, children }: MapSwiperProps) => {
  const [initialSlide, setInitialSlide] = useState<number | null>(null);

  useEffect(() => {
    if (currentPosition) {
      setInitialSlide(Math.floor(currentPosition / 5));
    }
  }, [currentPosition]);

  return (
    initialSlide && (
      <Swiper {...settings} initialSlide={24} className="h-full">
        {children}
        <CustomPagination />
      </Swiper>
    )
  );
};
