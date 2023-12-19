import type Swiper from 'swiper';

interface CustomPaginationProps {
  swiper?: Swiper;
}

export const CustomPagination = ({ swiper }: CustomPaginationProps) => {
  if (!swiper) return null;

  return (
    <div className="custom-pagination-wrapper">
      <div className="swiper-pagination-bullet" />
    </div>
  );
};
