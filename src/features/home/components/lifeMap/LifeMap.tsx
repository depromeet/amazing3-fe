'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useOverlay } from '@toss/use-overlay';
import { SwiperSlide } from 'swiper/react';

import StarBg from '@/app/home/startBg';
import { Avatar, Button, ContentWrapper } from '@/components';
import { useGetMemberData } from '@/hooks/reactQuery/auth';
import { useGetGoals } from '@/hooks/reactQuery/goal';
import type { GoalProps } from '@/hooks/reactQuery/goal/useGetGoals';
import { isLargerThanToday } from '@/utils/date';

import { GOAL_COUNT_PER_PAGE, TOTAL_CURRENT_POSITIONS } from '../../constants';
import { makeHomeDescription } from '../../utils/makeHomeDescription';
import { CurrentPositionCover } from '../currentPositionCover';
import { MapCardPositioner } from '../mapCardPositioner';
import { partitionArrayWithSmallerFirstGroup } from '../mapCardPositioner/MapCardPositioner.utils';
import { MapSwiper } from '../mapSwiper';
import { ShareBottomSheet } from '../shareBottomSheet';
import { ShareButton } from '../shareButton';

export const LifeMap = () => {
  const { data: memberData } = useGetMemberData();
  const { data: goalsData } = useGetGoals();

  const downloadSectionRef = useRef<HTMLElement>(null);
  const { open } = useOverlay();

  const participatedGoalsArray = partitionArrayWithSmallerFirstGroup(GOAL_COUNT_PER_PAGE, goalsData?.goals);
  const LAST_PAGE = participatedGoalsArray.length;

  const [position, setPosition] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState<number | null>(null);

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
    setPosition(position);
    setCurrentPage(Math.floor(position / GOAL_COUNT_PER_PAGE));
  };

  const handleOpenShareBottomSheet = () => {
    open(({ isOpen, close }) => <ShareBottomSheet ref={downloadSectionRef} open={isOpen} onClose={close} />);
  };

  return (
    <div className="w-full h-[100dvh] flex flex-col items-center justify-between pb-xs">
      <div className="w-[390px] relative pt-xs">
        <span className="absolute right-[24px]">
          <Avatar size={40} profileImage={memberData?.image} />
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
              <MapSwiper currentPosition={position}>
                {participatedGoalsArray?.map((goals, page) => (
                  <SwiperSlide key={`swiper-goal-${page}`}>
                    {!(page % 2) ? (
                      <MapCardPositioner type="A" goals={goals} isFirst={page === 0} isLast={page === LAST_PAGE - 1} />
                    ) : (
                      <MapCardPositioner type="B" goals={goals} isLast={page === LAST_PAGE - 1} />
                    )}
                    {position && currentPage === page && (
                      <CurrentPositionCover currentPosition={position % TOTAL_CURRENT_POSITIONS} />
                    )}
                  </SwiperSlide>
                ))}
              </MapSwiper>
            </div>
          </div>
        </ContentWrapper>
      </div>
      <div className="flex gap-5xs px-xs pt-5xs mt-[18px] w-full">
        <ShareButton onClick={handleOpenShareBottomSheet} />
        <Link href={{ pathname: '/goal/new/goal' }} className="w-full">
          <Button>목표 추가하기</Button>
        </Link>
      </div>
    </div>
  );
};
