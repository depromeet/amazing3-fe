import Image from 'next/image';
import Link from 'next/link';

import { colors } from '@/../styles/theme';
import ForwardIcon from '@/assets/icons/forward-icon.svg';
import bandiboodiGray from '@/assets/images/bandi-boodi-gray.png';
import { Typography } from '@/components';

export const EmptyTimeline = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <Typography type="body3" className="text-gray-50 mb-[8px]">
        아직 작성한 목표 조각이 없어요
      </Typography>
      <Image src={bandiboodiGray} width={160} height={160} alt="empty_timeline" priority />
      <Link href="/goal/new/goal" className="flex mt-[24px] px-4xs py-[7px] gap-6xs bg-blue-10 rounded-md">
        <Typography type="title5" className="text-blue-30">
          목표 작성하기
        </Typography>
        <ForwardIcon width={16} fill={colors.blue[30]} />
      </Link>
    </div>
  );
};
