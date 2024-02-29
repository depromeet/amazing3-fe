import { type PropsWithChildren } from 'react';
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

interface MapSwiperProps {
  currentPage: number | null;
}

const MapSwiper = ({ currentPage, children }: PropsWithChildren<MapSwiperProps>) => {
  return (
    currentPage !== null && (
      <Swiper {...settings} initialSlide={currentPage} className="h-full">
        {children}
        <CustomPagination />
      </Swiper>
    )
  );
};

export default MapSwiper;
