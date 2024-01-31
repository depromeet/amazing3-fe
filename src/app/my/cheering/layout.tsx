import type { PropsWithChildren } from 'react';
import Link from 'next/link';

import BackIcon from '@/assets/icons/goal/back-icon.svg';
import { Typography } from '@/components/atoms/typography';

const CheeringLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="w-full h-[100dvh] bg-white">
      <div className="flex flex-col gap-3xs pt-5xs">
        <div className="flex items-center px-[24px]">
          <Link href="/my">
            <BackIcon />
          </Link>
          <Typography type="title1" className="absolute left-[50%] -translate-x-1/2">
            내가 받은 응원
          </Typography>
        </div>
        {children}
      </div>
    </div>
  );
};

export default CheeringLayout;
