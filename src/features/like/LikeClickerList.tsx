'use client';

import { useRouter } from 'next/navigation';

import BackIcon from '@/assets/icons/goal/back-icon.svg';
import { Typography } from '@/components';

import LikeClicker from './LikeClicker';

const LikeClickerList = () => {
  const router = useRouter();

  const handleClickBack = () => {
    router.back();
  };

  return (
    <div className="flex flex-col gap-3xs pt-5xs">
      <div className="flex items-center px-[24px]">
        <BackIcon onClick={handleClickBack} />
        <Typography type="title1">내가 받은 응원</Typography>
      </div>

      <div className="flex justify-center px-[43px] py-[14.5px] mx-2xs my-[10px] rounded-md bg-gradient-to-r to-[#FCF3FF] from-[#EAF1FF]">
        <Typography className="font-insungit text-[13px] text-purple-30">
          {/* TODO: PR 머지 후 주석 해제 */}
          {/* <Image src={LikeIcon} alt="like-button-image" width={24} height={24} /> */}
          {/* FIXME: formatOver999 적용 */}
          <span>999명</span>
          <span className="text-[#6884F6]">의 반디가 내 인생 지도를 응원했어요 !</span>
        </Typography>
      </div>

      {/* FIXME: api 수정 예정 */}
      <div className="flex flex-col gap-6xs mx-[24px]">
        <LikeClicker image="/" nickname="유저 닉네임" likedAt="2023.08.23" />
        <LikeClicker image="/" nickname="유저 닉네임" likedAt="2023.08.23" />
        <LikeClicker image="/" nickname="유저 닉네임" likedAt="2023.08.23" />
      </div>
    </div>
  );
};

export default LikeClickerList;
