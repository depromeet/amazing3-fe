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
    const { isDownloading: isCurrentPageDownloading, onDownloadImage: onDownloadCurrentPageImage } = useDownloadImage({
      type: 'CURRENT',
      imageRef: ref as RefObject<HTMLElement>,
    });

    const { isDownloading: isAllPageDownloading, onDownloadImage: onDownloadAllPageImage } = useDownloadImage({
      type: 'ALL',
      imageRef: ref as RefObject<HTMLElement>,
    });

    const handleDownloadCurrentPage = async () => {
      await onDownloadCurrentPageImage();
      onClose();
    };

    const handleDownloadAllPage = async () => {
      await onDownloadAllPageImage();
      onClose();
    };

    return (
      <div className="flex flex-col gap-5xs px-5xs">
        <Button variant="tertiary" onClick={handleDownloadCurrentPage}>
          {isCurrentPageDownloading ? <Spinner /> : '현재 페이지 저장'}
        </Button>
        <Button variant="tertiary" onClick={handleDownloadAllPage}>
          {isAllPageDownloading ? <Spinner /> : '전체 페이지 저장'}
        </Button>
      </div>
    );
  },
);

ImageDownloadBottomSheetFooter.displayName = 'ImageDownloadBottomSheetFooter';

export default ImageDownloadBottomSheetFooter;
