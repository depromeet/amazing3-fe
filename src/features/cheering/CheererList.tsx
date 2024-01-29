'use client';

import Image from 'next/image';

import LikeIcon from '@/assets/icons/like-icon.png';
import { Typography } from '@/components';
import { formatOver999 } from '@/utils/number';

import Cheerer from './Cheerer';
import { EmptyCheerer } from './EmptyCheerer';

const CheererList = () => {
  // FIXME: 추후 api로 수정 예정
  const cheererCount = 0;

  if (!cheererCount) return <EmptyCheerer />;

  return (
    <>
      <div className="flex items-center justify-center px-2xs py-[14.5px] mx-2xs my-[10px] rounded-md bg-gradient-to-r to-[#FCF3FF] from-[#EAF1FF]">
        <Typography className="font-insungit text-[13px] text-purple-30">
          <Image src={LikeIcon} alt="like-button-image" width={24} height={24} className="inline-block mr-[8px]" />

          <span>{`${formatOver999(1000)}명`}</span>
          <span className="text-blue-35">의 반디가 내 인생 지도를 응원했어요 !</span>
        </Typography>
      </div>

      {/* FIXME: api 수정 예정 */}
      <div className="flex flex-col gap-6xs mx-[24px]">
        <Cheerer image="/" nickname="유저 닉네임" cheeredAt="2023.08.23" />
        <Cheerer image="/" nickname="유저 닉네임" cheeredAt="2023.08.23" />
        <Cheerer image="/" nickname="유저 닉네임" cheeredAt="2023.08.23" />
      </div>
    </>
  );
};

export default CheererList;
