import type { RefObject } from 'react';
import { useCallback } from 'react';
import Link from 'next/link';
import { useOverlay } from '@toss/use-overlay';

import { Button } from '@/components';

import ImageDownloadBottomSheet from '../shareBottomSheet/ImageDownloadBottomSheet';
import ShareBottomSheet from '../shareBottomSheet/ShareBottomSheet';
import ShareButton from '../shareButton/ShareButton';

interface PrivateLifeMapBottomAreaProps {
  downloadSectionRef?: RefObject<HTMLElement>;
}

const PrivateLifeMapBottomArea = ({ downloadSectionRef }: PrivateLifeMapBottomAreaProps) => {
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
    <div className="flex gap-5xs px-xs pt-5xs mt-[18px] w-full">
      <ShareButton onClick={handleOpenShareBottomSheet} />
      <Link href={{ pathname: '/goal/new/goal' }} className="w-full">
        <Button>목표 추가하기</Button>
      </Link>
    </div>
  );
};

export default PrivateLifeMapBottomArea;
