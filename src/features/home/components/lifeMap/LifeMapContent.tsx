'use client';

import { useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { useSearchParams } from 'next/navigation';

import ActiveFeedMenuIcon from '@/assets/icons/home/feed-tab-active-icon.svg';
import FeedMenuIcon from '@/assets/icons/home/feed-tab-default-icon.svg';
import ActiveMapMenuIcon from '@/assets/icons/home/map-tab-active-icon.svg';
import MapMenuIcon from '@/assets/icons/home/map-tab-default-icon.svg';
import { Avatar, ContentWrapper } from '@/components';
import type { MemberProps } from '@/features/member/types';
import type { GoalResponse } from '@/hooks/reactQuery/goal/useGetGoals';

import { HomeTab } from '../homeTab/HomeTab';
import { ShareButton } from '../shareButton';
import { Timeline } from '../timeline';

import { Map } from './Map';

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

  const [, setTab] = useState(TAB_LIST[0]);
  const searchParams = useSearchParams();

  const tabName = searchParams.get('tab') ?? TAB_LIST[0].name;

  return (
    <div className={`flex justify-center w-full ${tabName === 'MAP' ? 'bg-gradient1' : 'bg-white'}`}>
      <div className="w-[390px] relative pt-xs">
        <span className="absolute right-[24px]">
          {isPublic ? <Avatar size={40} profileImage={memberData?.image} /> : <ShareButton shareRef={shareRef} />}
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
          <div className="flex h-[24px] items-center mt-5xs">
            <LifeMapInfo goalsData={goalsData} />
            <div className="absolute mr-xs right-0">
              <HomeTab tabList={TAB_LIST} onChangeActiveTab={setTab} />
            </div>
          </div>
          {tabName === 'MAP' && <StarBg />}
          <div className={`h-[520px] overflow-auto ${tabName === 'FEED' ? 'mt-[16px] border-t border-blue-10' : ''}`}>
            {tabName === 'MAP' ? <Map goalsData={goalsData} /> : <Timeline />}
          </div>
        </ContentWrapper>
      </div>
    </div>
  );
};
