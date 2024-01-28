'use client';

import { useCallback, useRef } from 'react';
import Link from 'next/link';
import { useOverlay } from '@toss/use-overlay';

import { Button } from '@/components';
import { useGetMemberData } from '@/hooks/reactQuery/auth';
import { useGetGoals } from '@/hooks/reactQuery/goal/useGetGoals';

import { ShareBottomSheet } from '../shareBottomSheet';
import { ImageDownloadBottomSheet } from '../shareBottomSheet/ImageDownloadBottomSheet';
import { ShareButton } from '../shareButton';

import { LifeMapContent } from './LifeMapContent';

export const PrivateLifeMap = () => {
  const { data: memberData } = useGetMemberData();
  const { data: privateGoals } = useGetGoals();

  const downloadSectionRef = useRef<HTMLElement>(null);
  const overlay = useOverlay();

  const handleOpenShareBottomSheet = useCallback(() => {
    overlay.open(({ isOpen, close }) => (
      <ShareBottomSheet
        open={isOpen}
        onClose={close}
        onClickImageDownload={() => {
          overlay.open(({ isOpen, close }) => (
            <ImageDownloadBottomSheet open={isOpen} onClose={close} ref={downloadSectionRef} />
          ));
        }}
      />
    ));
  }, [overlay]);

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
