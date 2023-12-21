'use client';

import Image from 'next/image';
import Link from 'next/link';
import { SwiperSlide } from 'swiper/react';

import MapSticker from '@/assets/stickers/map_sticker.png';
import TargetSticker from '@/assets/stickers/target_sticker.png';
import WritingSticker from '@/assets/stickers/writing_sticker.png';
import { Button } from '@/components';

import { OnboardingLayout } from '../onboardingLayout';
import type { OnboardingLayoutProps } from '../onboardingLayout/onboardingLayout';
import { OnboardingSwiper } from '../onboardingSwiper';

const ONBOARDING_VALUES: OnboardingLayoutProps[] = [
  {
    title: (
      <>
        내가 걸어온 길을 <br />
        떠올리면서 <br />
        회고를 적고,
      </>
    ),
    sticker: <Image src={WritingSticker} width={268} height={268} alt="onboarding_image_1" />,
  },
  {
    title: (
      <>
        내가 걸어갈 길의 <br />
        방향을 짚어가면서 <br />
        목표와 계획을 세워보세요.
      </>
    ),
    sticker: <Image src={TargetSticker} width={268} height={268} alt="onboarding_image_2" />,
  },
  {
    title: (
      <>
        한 조각씩 채우다 보면 <br />
        나만의 인생지도가 <br />
        완성될 거예요.
      </>
    ),
    sticker: <Image src={MapSticker} width={268} height={268} alt="onboarding_image_3" />,
  },
];

export const OnboardingBody = () => {
  return (
    <div className="w-full h-full px-xs flex flex-col">
      <div className="h-full">
        <OnboardingSwiper>
          {ONBOARDING_VALUES.map(({ title, sticker }, index) => (
            <SwiperSlide key={index}>
              <OnboardingLayout title={title} sticker={sticker} />
            </SwiperSlide>
          ))}
        </OnboardingSwiper>
      </div>
      <div className="h-full flex flex-col-reverse">
        <Button className="flex-grow-1">
          <Link href={{ pathname: '/member/new/nickname' }}>시작하기</Link>
        </Button>
      </div>
    </div>
  );
};
