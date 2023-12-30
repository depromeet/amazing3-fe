import type { RefObject } from 'react';
import { forwardRef } from 'react';

import { Button } from '@/components';
import { Spinner } from '@/components/atoms/spinner';
import { useDownloadImage } from '@/hooks/useDownloadImage';
import { shareLink } from '@/utils/share';

interface BottomSheetFooterProps {
  onClose: VoidFunction;
}

const Footer = forwardRef<HTMLElement, BottomSheetFooterProps>(({ onClose }: BottomSheetFooterProps, ref) => {
  const { isDownloading, onDownloadImage } = useDownloadImage(ref as RefObject<HTMLElement>);

  const handleCopyClipboard = () => {
    shareLink({ url: location.href });
    onClose();
  };

  const handleDownloadImage = async () => {
    await onDownloadImage();
    onClose();
  };

  return (
    <div className="flex gap-5xs mb-5xs">
      <Button variant="blue" onClick={handleCopyClipboard}>
        URL 복사
      </Button>
      <Button variant="heavy" onClick={handleDownloadImage}>
        {isDownloading ? <Spinner /> : '이미지 저장'}
      </Button>
    </div>
  );
});

Footer.displayName = 'ShareBottomSheetFooter';

export default Footer;
