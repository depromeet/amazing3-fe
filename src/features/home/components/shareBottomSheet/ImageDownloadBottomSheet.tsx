import { forwardRef } from 'react';

import { BottomSheet, Typography } from '@/components/atoms';

import ImageDownloadBottomSheetFooter from './ImageDownloadBottomSheetFooter';

interface ImageDownloadBottomSheetProps {
  open: boolean;
  onClose: () => void;
}

export const ImageDownloadBottomSheet = forwardRef<HTMLElement, ImageDownloadBottomSheetProps>(
  ({ open, onClose }: ImageDownloadBottomSheetProps, ref) => {
    return (
      <BottomSheet
        open={open}
        onDismiss={onClose}
        fixedMaxHeight={224}
        FooterComponent={<ImageDownloadBottomSheetFooter ref={ref} onClose={onClose} />}
      >
        <Typography type="title2" className="pt-[20px] px-xs text-gray-70">
          이미지 저장
        </Typography>
      </BottomSheet>
    );
  },
);

ImageDownloadBottomSheet.displayName = 'ImageDownloadBottomSheet';
