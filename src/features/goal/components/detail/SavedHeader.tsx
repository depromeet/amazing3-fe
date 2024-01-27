import React from 'react';
import Link from 'next/link';

import CloseIcon from '@/assets/icons/goal/close-icon.svg';
import { Typography } from '@/components/atoms';
import { useGetMemberData } from '@/hooks/reactQuery/auth';

interface SavedHeaderProps {
  goalId: number;
}

export const SavedHeader = ({ goalId }: SavedHeaderProps) => {
  const { data: memberData } = useGetMemberData();

  const pathname = `/home/${memberData?.username}`;
  const query = { id: goalId };

  return (
    <div className="w-full h-[20px] flex justify-center items-center">
      <Typography type="header1">목표 저장 완료!</Typography>
      <div className="absolute right-[24px]">
        <Link href={{ pathname, query }}>
          <CloseIcon />
        </Link>
      </div>
    </div>
  );
};
