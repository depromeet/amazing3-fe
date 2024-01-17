'use client';

import type { RefObject } from 'react';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { SwiperSlide } from 'swiper/react';

import StarBg from '@/app/home/[username]/startBg';
import { Avatar, ContentWrapper } from '@/components';
import type { MemberProps } from '@/features/member/types';
import type { GoalResponse } from '@/hooks/reactQuery/goal/useGetGoals';
import { type GoalProps } from '@/hooks/reactQuery/goal/useGetGoals';
import { isLargerThanToday } from '@/utils/date';

import { GOAL_COUNT_PER_PAGE, TOTAL_CURRENT_POSITIONS } from '../../constants';
import { makeHomeDescription } from '../../utils/makeHomeDescription';
import { CurrentPositionCover } from '../currentPositionCover';
import { MapCardPositioner } from '../mapCardPositioner';
import { partitionArrayWithSmallerFirstGroup } from '../mapCardPositioner/MapCardPositioner.utils';
import { MapSwiper } from '../mapSwiper';

interface LifeMapProps {
  goalsData?: GoalResponse;
  memberData?: Pick<MemberProps, 'nickname' | 'image'>;
  downloadSectionRef?: RefObject<HTMLElement>;
  isPublic?: boolean;
}

interface PositionStateProps {
  position: number | null;
  positionPage: number | null;
}

export const LifeMapContent = ({ goalsData, memberData, downloadSectionRef, isPublic = false }: LifeMapProps) => {
  const participatedGoalsArray = partitionArrayWithSmallerFirstGroup(GOAL_COUNT_PER_PAGE, goalsData?.goals);
  const LAST_PAGE = participatedGoalsArray.length;

  const [positionState, setPositionState] = useState<PositionStateProps>({
    position: null,
    positionPage: null,
  });
  const [currentPage, setCurrentPage] = useState<number | null>(null);
  const paramId = Number(useSearchParams().get('id'));

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
    if (paramId) {
      const index = goals.findIndex(({ id: goalId }) => goalId === paramId);
      if (index > -1) {
        page = Math.floor((index + 1) / GOAL_COUNT_PER_PAGE);
      }
    }
    setCurrentPage(page);
  };

  return (
    <div className="w-[390px] relative pt-xs">
      <span className="absolute right-[24px]">
        <Link href="/my" className={isPublic ? `pointer-events-none` : ''}>
          <Avatar size={40} profileImage={memberData?.image} />
        </Link>
      </span>

      <ContentWrapper
        title={
          <>
            {!memberData?.nickname && (
              <>
                <br />
              </>
            )}
            반짝반짝 빛날
            <br />
            {memberData?.nickname && (
              <>
                {memberData.nickname} 님의
                <br />
              </>
            )}
            앞날을 응원해요!
          </>
        }
        description={makeHomeDescription(goalsData?.goalsCount || 0)}
        sectionStyles="px-xs"
        ref={downloadSectionRef}
      >
        <StarBg />
        <div className="h-[520px]">
          <div className="absolute inset-x-0">
            <MapSwiper currentPage={currentPage}>
              {participatedGoalsArray?.map((goals, page) => (
                <SwiperSlide key={`swiper-goal-${page}`}>
                  <div className={isPublic ? `pointer-events-none` : ''}>
                    {!(page % 2) ? (
                      <MapCardPositioner type="A" goals={goals} isFirst={page === 0} isLast={page === LAST_PAGE - 1} />
                    ) : (
                      <MapCardPositioner type="B" goals={goals} isLast={page === LAST_PAGE - 1} />
                    )}
                    {positionState.positionPage === page && positionState.position && (
                      <CurrentPositionCover currentPosition={positionState.position} />
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </MapSwiper>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};
