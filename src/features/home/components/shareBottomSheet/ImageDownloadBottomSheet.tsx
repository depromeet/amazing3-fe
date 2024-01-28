import type { RefObject } from 'react';
import { forwardRef } from 'react';

import { BottomSheet, Button, Typography } from '@/components/atoms';
import { Spinner } from '@/components/atoms/spinner';
import { useDownloadImage } from '@/hooks';

interface ImageDownloadBottomSheetProps {
  open: boolean;
  onClose: () => void;
}

export const ImageDownloadBottomSheet = forwardRef<HTMLElement, ImageDownloadBottomSheetProps>(
  ({ open, onClose }: ImageDownloadBottomSheetProps, ref) => {
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

    const handleCloseBottomSheet = () => {
      if (isCurrentPageDownloading || isAllPageDownloading) return;

      onClose();
    };

    return (
      <BottomSheet
        open={open}
        onDismiss={handleCloseBottomSheet}
        fixedMaxHeight={224}
        FooterComponent={
          <div className="flex flex-col gap-5xs px-5xs">
            <Button variant="tertiary" onClick={handleDownloadCurrentPage}>
              {isCurrentPageDownloading ? <Spinner /> : '현재 페이지 저장'}
            </Button>
            <Button variant="tertiary" onClick={handleDownloadAllPage}>
              {isAllPageDownloading ? <Spinner /> : '전체 페이지 저장'}
            </Button>
          </div>
        }
      >
        <Typography type="title2" className="pt-[20px] px-xs text-gray-70">
          이미지 저장
        </Typography>
      </BottomSheet>
    );
  },
);

ImageDownloadBottomSheet.displayName = 'ImageDownloadBottomSheet';
