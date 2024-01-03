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

import { GOAL_COUNT_PER_PAGE } from '../../constants';
import { makeHomeDescription } from '../../utils/makeHomeDescription';
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

  // useEffect로 값을 찾기
  useEffect(() => {
    if (goalsData?.goals) {
      handleCurrentPageChange(goalsData?.goals);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [goalsData]);

  const handleCurrentPageChange = (goals: Array<GoalProps>) => {
    let currentPosition = 0;

    for (const goal of goals) {
      const [year, month] = goal.deadline.split('.');
      if (isLargerThanToday(year, month)) {
        break;
      }
      currentPosition++;
    }

    setPosition(currentPosition);
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
                {participatedGoalsArray?.map((goals, index) => (
                  <SwiperSlide key={`swiper-goal-${index}`}>
                    {!(index % 2) ? (
                      <MapCardPositioner
                        type="A"
                        goals={goals}
                        isFirst={index === 0}
                        isLast={index === LAST_PAGE - 1}
                      />
                    ) : (
                      <MapCardPositioner type="B" goals={goals} isLast={index === LAST_PAGE - 1} />
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
