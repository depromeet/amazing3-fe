import { useEffect } from 'react';
import { useSwiper } from 'swiper/react';

interface CurrentDatePositionProps {
  /* `currentPosition`: currentDate의 정확한 위치를 설정하기 위해 사용 */
  currentPosition: number;
}

/**
 * TODO: Position 값에 맞는 위치에 별 아이콘 출력하기
 */
export const CurrentDatePosition = ({ currentPosition }: CurrentDatePositionProps) => {
  const swiper = useSwiper();

  useEffect(() => {
    if (swiper) {
      swiper.slideTo(currentPosition / 5);
    }
  }, [currentPosition, swiper]);

  return <>{/* 별 위치를 표시하는 UI 생성 필요 */}</>;
};
