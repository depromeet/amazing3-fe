import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { SwiperSlide } from 'swiper/react';

import type { GoalProps, GoalResponse } from '@/hooks/reactQuery/goal/useGetGoals';
import { isLargerThanToday } from '@/utils/date';

import { GOAL_COUNT_PER_PAGE, TOTAL_CURRENT_POSITIONS } from '../../constants';
import { CurrentPositionCover } from '../currentPositionCover';
import { MapCardPositioner } from '../mapCardPositioner';
import { partitionArrayWithSmallerFirstGroup } from '../mapCardPositioner/MapCardPositioner.utils';
import MapSwiper from '../mapSwiper/MapSwiper';

interface PositionStateProps {
  position: number | null;
  positionPage: number | null;
}

export const Map = ({ goalsData }: { goalsData?: GoalResponse }) => {
  const participatedGoalsArray = partitionArrayWithSmallerFirstGroup(GOAL_COUNT_PER_PAGE, goalsData?.goals);
  const LAST_PAGE = participatedGoalsArray.length;

  const [positionState, setPositionState] = useState<PositionStateProps>({
    position: null,
    positionPage: null,
  });

  const [currentPage, setCurrentPage] = useState<number | null>(null);
  const paramGoalId = Number(useSearchParams().get('id'));

  useEffect(() => {
    if (goalsData?.goals) {
      findCurrentPosition(goalsData?.goals);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [goalsData]);

  const findCurrentPosition = (goals: Array<GoalProps>) => {
    const currentPosition = goals.findIndex(({ deadline }) => {
      const [year, month] = deadline.split('.');
      return isLargerThanToday(year, month);
    });

    let position;
    switch (currentPosition) {
      case -1: // goals이 아예 없는 경우를 제외하고 마지막 페이지로 이동
        position = goals.length === 0 ? 1 : goals.length + 1;
        break;
      case 0: // 첫번째 페이지의 0 포지션은 1로 변경
        position = 1;
        break;
      default:
        position = currentPosition + 1;
    }
    const positionPage = Math.floor(position / GOAL_COUNT_PER_PAGE);
    position = position % TOTAL_CURRENT_POSITIONS;
    setPositionState({ position, positionPage });

    let page = positionPage;
    // check if query params contains id value
    if (paramGoalId) {
      const index = goals.findIndex(({ id: goalId }) => goalId === paramGoalId);
      if (index > -1) {
        page = Math.floor((index + 1) / GOAL_COUNT_PER_PAGE);
      }
    }
    setCurrentPage(page);
  };

  return (
    <div className="absolute inset-x-0">
      <MapSwiper currentPage={currentPage}>
        {participatedGoalsArray?.map((goals, page) => (
          <SwiperSlide key={`swiper-goal-${page}`}>
            {!(page % 2) ? (
              <MapCardPositioner type="A" goals={goals} isFirst={page === 0} isLast={page === LAST_PAGE - 1} />
            ) : (
              <MapCardPositioner type="B" goals={goals} isLast={page === LAST_PAGE - 1} />
            )}
            {/** 현재 위치에 별 위치 시키기 위해 1) 현재 날짜가 포함된 페이지를 찾아서, 2) 포지션 위치에 별을 출력함. */}
            {positionState.positionPage === page && positionState.position !== null && (
              <CurrentPositionCover currentPosition={positionState.position} />
            )}
          </SwiperSlide>
        ))}
      </MapSwiper>
    </div>
  );
};
