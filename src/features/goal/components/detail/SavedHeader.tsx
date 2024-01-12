import React from 'react';
import Link from 'next/link';

import BackIcon from '@/assets/icons/goal/back-icon.svg';
import CloseIcon from '@/assets/icons/goal/close-icon.svg';
import { Typography } from '@/components/atoms';
import { useGetMemberData } from '@/hooks/reactQuery/auth';

interface SavedHeaderProps {
  goalId: number;
}

export const SavedHeader = ({ goalId }: SavedHeaderProps) => {
  const { data: memberData } = useGetMemberData();

  const pathname = `/home/${memberData?.username}?id=${goalId}`;

  return (
    <>
      <Link href={{ pathname }}>
        <BackIcon />
      </Link>
      <Typography type="header1">목표 저장 완료!</Typography>
      <Link href={{ pathname }}>
        <CloseIcon />
      </Link>
    </>
  );
};
