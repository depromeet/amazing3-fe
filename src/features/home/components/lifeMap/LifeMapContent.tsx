'use client';

import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { SwiperSlide } from 'swiper/react';

import ActiveFeedMenuIcon from '@/assets/icons/home/feed-tab-active-icon.svg';
import FeedMenuIcon from '@/assets/icons/home/feed-tab-default-icon.svg';
import ActiveMapMenuIcon from '@/assets/icons/home/map-tab-active-icon.svg';
import MapMenuIcon from '@/assets/icons/home/map-tab-default-icon.svg';
import { Avatar, ContentWrapper } from '@/components';
import { FeedBody } from '@/features/feed';
import type { MemberProps } from '@/features/member/types';
import type { GoalProps, GoalResponse } from '@/hooks/reactQuery/goal/useGetGoals';
import { isLargerThanToday } from '@/utils/date';

import { GOAL_COUNT_PER_PAGE, TOTAL_CURRENT_POSITIONS } from '../../constants';
import { CurrentPositionCover } from '../currentPositionCover';
import { HomeTab } from '../homeTab/HomeTab';
import { MapCardPositioner } from '../mapCardPositioner';
import { partitionArrayWithSmallerFirstGroup } from '../mapCardPositioner/MapCardPositioner.utils';
import MapSwiper from '../mapSwiper/MapSwiper';
import { ShareButton } from '../shareButton';

const StarBg = dynamic(() => import('@/app/home/[username]/startBg'));
const LifeMapInfo = dynamic(() => import('./LifeMapInfo'));

interface LifeMapProps {
  goalsData?: GoalResponse;
  memberData?: Pick<MemberProps, 'nickname' | 'image'>;
  isPublic?: boolean;
}

const TAB_LIST = [
  {
    name: 'MAP',
    Icon: MapMenuIcon,
    ActiveIcon: ActiveMapMenuIcon,
  },
  {
    name: 'FEED',
    Icon: FeedMenuIcon,
    ActiveIcon: ActiveFeedMenuIcon,
  },
];

export const LifeMapContent = ({ goalsData, memberData, isPublic = false }: LifeMapProps) => {
  const shareRef = useRef<HTMLElement>(null);

  const [tab, setTab] = useState(TAB_LIST[0]);

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
    <div className={`flex justify-center w-full ${tab.name === 'MAP' ? 'bg-gradient1' : 'bg-white'}`}>
      <div className="w-[390px] relative pt-xs">
        <span className="absolute right-[24px]">
          {isPublic ? (
            <Link href="/my" className="pointer-events-none">
              <Avatar size={40} profileImage={memberData?.image} />
            </Link>
          ) : (
            <ShareButton shareRef={shareRef} />
          )}
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
          ref={shareRef}
        >
          <div className="flex h-[24px] mt-5xs">
            <LifeMapInfo goalsData={goalsData} />
            <div className="absolute right-0">
              <HomeTab tabList={TAB_LIST} onChangeActiveTab={setTab} />
            </div>
          </div>
          <StarBg />
          <div className={`h-[520px] overflow-auto ${tab.name === 'FEED' ? 'mt-[16px] border-t border-blue-10' : ''}`}>
            {tab.name === 'MAP' ? (
              <div className="h-[520px]">
                <div className="absolute inset-x-0">
                  <MapSwiper currentPage={currentPage}>
                    {participatedGoalsArray?.map((goals, page) => (
                      <SwiperSlide key={`swiper-goal-${page}`}>
                        {!(page % 2) ? (
                          <MapCardPositioner
                            type="A"
                            goals={goals}
                            isFirst={page === 0}
                            isLast={page === LAST_PAGE - 1}
                          />
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
              </div>
            ) : (
              <FeedBody />
            )}
          </div>
        </ContentWrapper>
      </div>
    </div>
  );
};
