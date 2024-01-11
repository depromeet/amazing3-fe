import { forwardRef } from 'react';
import { useOverlay } from '@toss/use-overlay';

import { Button } from '@/components';
import { shareLink } from '@/utils/share';

import { ImageDownloadBottomSheet } from './ImageDownloadBottomSheet';

interface BottomSheetFooterProps {
  onClose: VoidFunction;
}

const Footer = forwardRef<HTMLElement, BottomSheetFooterProps>(({ onClose }: BottomSheetFooterProps, ref) => {
  const { open } = useOverlay();

  const handleCopyClipboard = () => {
    shareLink({ url: location.href });
    onClose();
  };

  const handleDownloadImage = () => {
    open(({ isOpen, close }) => <ImageDownloadBottomSheet ref={ref} open={isOpen} onClose={close} />);
  };

  return (
    <div className="flex gap-5xs mb-5xs">
      <Button variant="blue" onClick={handleCopyClipboard}>
        URL 복사
      </Button>
      <Button variant="heavy" onClick={handleDownloadImage}>
        이미지 저장
      </Button>
    </div>
  );
});

Footer.displayName = 'ShareBottomSheetFooter';

export default Footer;
