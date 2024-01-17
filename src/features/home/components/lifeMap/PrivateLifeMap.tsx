'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { useOverlay } from '@toss/use-overlay';

import { Button } from '@/components';
import { useGetMemberData } from '@/hooks/reactQuery/auth';
import { useGetGoals } from '@/hooks/reactQuery/goal/useGetGoals';

import { ShareBottomSheet } from '../shareBottomSheet';
import { ShareButton } from '../shareButton';

import { LifeMapContent } from './LifeMapContent';

export const PrivateLifeMap = () => {
  const { data: memberData } = useGetMemberData();
  const { data: privateGoals } = useGetGoals();

  const downloadSectionRef = useRef<HTMLElement>(null);
  const { open } = useOverlay();

  const handleOpenShareBottomSheet = () => {
    open(({ isOpen, close }) => <ShareBottomSheet ref={downloadSectionRef} open={isOpen} onClose={close} />);
  };

  return (
    <>
      <LifeMapContent goalsData={privateGoals} memberData={memberData} downloadSectionRef={downloadSectionRef} />
      <div className="flex gap-5xs px-xs pt-5xs mt-[18px] w-full">
        <ShareButton onClick={handleOpenShareBottomSheet} />
        <Link href={{ pathname: '/goal/new/goal' }} className="w-full">
          <Button>목표 추가하기</Button>
        </Link>
      </div>
    </>
  );
};
