import React from 'react';
import Link from 'next/link';

import BackIcon from '@/assets/icons/goal/back-icon.svg';
import CloseIcon from '@/assets/icons/goal/close-icon.svg';
import { Typography } from '@/components/atoms';

export const SavedHeader = () => {
  return (
    <>
      <Link href={{ pathname: '/home' }}>
        <BackIcon />
      </Link>
      <Typography type="header1">목표 저장 완료!</Typography>
      <Link href={{ pathname: '/home' }}>
        <CloseIcon />
      </Link>
    </>
  );
};
