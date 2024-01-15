'use client';

import Image from 'next/image';
import Link from 'next/link';
import { SwiperSlide } from 'swiper/react';

import MapSticker from '@/assets/stickers/map_sticker.png';
import TargetSticker from '@/assets/stickers/target_sticker.png';
import { Button } from '@/components';

import { OnboardingLayout } from '../onboardingLayout';
import type { OnboardingLayoutProps } from '../onboardingLayout/onboardingLayout';
import { OnboardingSwiper } from '../onboardingSwiper';

const ONBOARDING_VALUES: OnboardingLayoutProps[] = [
  {
    title: '내가 걸어갈 길의 \n 방향을 짚어가면서 \n 목표와 계획을 세워보세요.',
    sticker: <Image src={TargetSticker} width={268} height={268} alt="onboarding_image_2" priority />,
  },
  {
    title: '한 조각씩 채우다 보면 \n 나만의 인생지도가 \n 완성될 거예요.',
    sticker: <Image src={MapSticker} width={268} height={268} alt="onboarding_image_3" priority />,
  },
];

export const OnboardingBody = () => {
  return (
    <div className="w-full h-full px-xs flex flex-col justify-between">
      <div className="h-full flex items-center">
        <OnboardingSwiper>
          {ONBOARDING_VALUES.map(({ title, sticker }, index) => (
            <SwiperSlide key={index}>
              <OnboardingLayout title={title} sticker={sticker} />
            </SwiperSlide>
          ))}
        </OnboardingSwiper>
      </div>
      <Link href={{ pathname: '/member/new/nickname' }}>
        <Button className="flex-grow-1">시작하기</Button>
      </Link>
    </div>
  );
};
