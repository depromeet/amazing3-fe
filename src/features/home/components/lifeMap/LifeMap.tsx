'use client';

import { SwiperSlide } from 'swiper/react';

import { Avatar, ContentWrapper, MapCardPositioner } from '@/components';
import { partitionArrayWithSmallerFirstGroup } from '@/components/molecules/mapCardPositioner/MapCardPositioner.utils';

import { GOAL_IN_MAP } from '../../constants';
import { makeHomeDescription } from '../../utils/makeHomeDescription';
import { MapSwiper } from '../mapSwiper';
import { ShareButton } from '../shareButton';

// mock
const nickname = '삼삼조';
const goals = [
  {
    id: 1,
    stickerImage: 'https://github.com/depromeet/amazing3-fe/assets/112946860/488a9652-ca22-4a81-93bc-c49df0d5458d',
    deadline: '2024.01',
    tag: '학업',
  },
  {
    id: 2,
    stickerImage: 'https://github.com/depromeet/amazing3-fe/assets/112946860/488a9652-ca22-4a81-93bc-c49df0d5458d',
    deadline: '2024.01',
    tag: '학업',
  },
  {
    id: 3,
    stickerImage: 'https://github.com/depromeet/amazing3-fe/assets/112946860/488a9652-ca22-4a81-93bc-c49df0d5458d',
    deadline: '2024.01',
    tag: '학업',
  },
  {
    id: 4,
    stickerImage: 'https://github.com/depromeet/amazing3-fe/assets/112946860/488a9652-ca22-4a81-93bc-c49df0d5458d',
    deadline: '2024.01',
    tag: '학업',
  },
  {
    id: 5,
    stickerImage: 'https://github.com/depromeet/amazing3-fe/assets/112946860/488a9652-ca22-4a81-93bc-c49df0d5458d',
    deadline: '2024.01',
    tag: '학업',
  },
  {
    id: 6,
    stickerImage: 'https://github.com/depromeet/amazing3-fe/assets/112946860/488a9652-ca22-4a81-93bc-c49df0d5458d',
    deadline: '2024.01',
    tag: '학업',
  },
  {
    id: 7,
    stickerImage: 'https://github.com/depromeet/amazing3-fe/assets/112946860/488a9652-ca22-4a81-93bc-c49df0d5458d',
    deadline: '2024.01',
    tag: '학업',
  },
  {
    id: 8,
    stickerImage: 'https://github.com/depromeet/amazing3-fe/assets/112946860/488a9652-ca22-4a81-93bc-c49df0d5458d',
    deadline: '2024.01',
    tag: '학업',
  },
  {
    id: 9,
    stickerImage: 'https://github.com/depromeet/amazing3-fe/assets/112946860/488a9652-ca22-4a81-93bc-c49df0d5458d',
    deadline: '2024.01',
    tag: '학업',
  },
  {
    id: 10,
    stickerImage: 'https://github.com/depromeet/amazing3-fe/assets/112946860/488a9652-ca22-4a81-93bc-c49df0d5458d',
    deadline: '2024.01',
    tag: '학업',
  },
  {
    id: 11,
    stickerImage: 'https://github.com/depromeet/amazing3-fe/assets/112946860/488a9652-ca22-4a81-93bc-c49df0d5458d',
    deadline: '2024.01',
    tag: '학업',
  },
  {
    id: 12,
    stickerImage: 'https://github.com/depromeet/amazing3-fe/assets/112946860/488a9652-ca22-4a81-93bc-c49df0d5458d',
    deadline: '2024.01',
    tag: '학업',
  },
];
const total = goals.length;

export const LifeMap = () => {
  const participatedGoalsArray = partitionArrayWithSmallerFirstGroup(goals, GOAL_IN_MAP);
  const LAST_PAGE = Math.ceil(total / GOAL_IN_MAP);

  return (
    <div>
      <span className="absolute right-[24px]">
        <Avatar size={40} />
      </span>
      <ContentWrapper
        title={
          <>
            반짝반짝 빛날
            <br />
            {nickname}님의
            <br />
            앞날을 응원해요!
          </>
        }
        description={makeHomeDescription(goals.length)}
      >
        <div className="h-[520px]">
          <div className="absolute inset-x-0">
            <MapSwiper>
              {participatedGoalsArray.map((goals, index) => (
                <SwiperSlide key={goals[0].id}>
                  {!(index % 2) ? (
                    <MapCardPositioner type="A" goals={goals} isFirst={index === 0} isLast={LAST_PAGE === index + 1} />
                  ) : (
                    <MapCardPositioner type="B" goals={goals} isLast={LAST_PAGE === index + 1} />
                  )}
                </SwiperSlide>
              ))}
            </MapSwiper>
          </div>
        </div>
      </ContentWrapper>
      <div className="pt-[10px] flex gap-5xs w-full px-xs">
        <ShareButton />
      </div>
    </div>
  );
};
