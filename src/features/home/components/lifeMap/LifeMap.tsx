'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { SwiperSlide } from 'swiper/react';

import StarBg from '@/app/home/startBg';
import { Avatar, Button, ContentWrapper } from '@/components';
import { useGetMemberData } from '@/hooks/reactQuery/auth';
import { useGetGoals } from '@/hooks/reactQuery/goal';
import { useDownloadImage } from '@/hooks/useDownloadImage';

import { GOAL_COUNT_PER_PAGE } from '../../constants';
import { makeHomeDescription } from '../../utils/makeHomeDescription';
import { MapCardPositioner } from '../mapCardPositioner';
import { partitionArrayWithSmallerFirstGroup } from '../mapCardPositioner/MapCardPositioner.utils';
import { MapSwiper } from '../mapSwiper';
import { ShareButton } from '../shareButton';

export const LifeMap = () => {
  const { data: memberData } = useGetMemberData();
  const { data: goalsData } = useGetGoals();

  const downloadSectionRef = useRef<HTMLElement>(null);
  const { isDownloading, onDownloadImage } = useDownloadImage(downloadSectionRef);

  const participatedGoalsArray = partitionArrayWithSmallerFirstGroup(GOAL_COUNT_PER_PAGE, goalsData?.goals);
  const LAST_PAGE = participatedGoalsArray.length;

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
              <MapSwiper>
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
        <ShareButton isLoading={isDownloading} onClick={onDownloadImage} />
        <Link href={{ pathname: '/goal/new/goal' }} className="w-full">
          <Button>목표 추가하기</Button>
        </Link>
      </div>
    </div>
  );
};
