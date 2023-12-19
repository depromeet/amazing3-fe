import type Swiper from 'swiper';

interface CustomPaginationProps {
  swiper?: Swiper;
}

/**
 * TODO: 반영되지 못하는 문제 해결하기
 */
export const CustomPagination = ({ swiper }: CustomPaginationProps) => {
  if (!swiper) return null;

  return (
    <div className="custom-pagination-wrapper">
      <div className="swiper-pagination-bullet" />
    </div>
  );
};
