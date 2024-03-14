import type { RefObject } from 'react';
import { useCallback } from 'react';
import { useOverlay } from '@toss/use-overlay';

import ShareIcon from '@/assets/icons/share.svg';

import { ImageDownloadBottomSheet, ShareBottomSheet } from '../shareBottomSheet';

interface ShareButtonProps {
  shareRef?: RefObject<HTMLElement>;
}

export const ShareButton = ({ shareRef }: ShareButtonProps) => {
  const overlay = useOverlay();

  const handleOpenShareBottomSheet = useCallback(() => {
    overlay.open(({ isOpen, close }) => (
      <ShareBottomSheet
        open={isOpen}
        onClose={close}
        onClickImageDownload={() => {
          overlay.open(({ isOpen, close }) => (
            <ImageDownloadBottomSheet open={isOpen} onClose={close} ref={shareRef} />
          ));
        }}
      />
    ));
  }, [overlay, shareRef]);

  return (
    <button
      className="flex justify-center items-center w-[40px] h-[40px] rounded-full bg-white transition duration-300 ease-in-out hover:scale-110 hover:bg-gradient5"
      onClick={handleOpenShareBottomSheet}
    >
      <ShareIcon />
    </button>
  );
};
