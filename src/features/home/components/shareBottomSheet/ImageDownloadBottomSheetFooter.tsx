import type { RefObject } from 'react';
import { forwardRef } from 'react';

import { Button } from '@/components';
import { Spinner } from '@/components/atoms/spinner';
import { useDownloadImage } from '@/hooks';

interface ImageDownloadBottomSheetFooterProps {
  onClose: VoidFunction;
}

const ImageDownloadBottomSheetFooter = forwardRef<HTMLElement, ImageDownloadBottomSheetFooterProps>(
  ({ onClose }: ImageDownloadBottomSheetFooterProps, ref) => {
    const { isDownloading, onDownloadImage } = useDownloadImage(ref as RefObject<HTMLElement>);

    const handleDownloadCurrentPage = async () => {
      await onDownloadImage();
      onClose();
    };

    const handleDownloadAllPage = async () => {
      // TODO: 전체 페이지 저장 기능 추가
      onClose();
    };

    return (
      <div className="flex flex-col gap-5xs px-5xs">
        <Button variant="tertiary" onClick={handleDownloadCurrentPage}>
          {isDownloading ? <Spinner /> : '현재 페이지 저장'}
        </Button>
        <Button variant="tertiary" onClick={handleDownloadAllPage}>
          전체 페이지 저장
        </Button>
      </div>
    );
  },
);

ImageDownloadBottomSheetFooter.displayName = 'ImageDownloadBottomSheetFooter';

export default ImageDownloadBottomSheetFooter;
