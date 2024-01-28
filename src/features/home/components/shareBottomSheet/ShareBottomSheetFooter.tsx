import { forwardRef } from 'react';

import { Button } from '@/components';
import { shareLink } from '@/utils/share';

interface ShareBottomSheetFooterProps {
  onClose: VoidFunction;
  onClickImageDownload: VoidFunction;
}

const ShareBottomSheetFooter = forwardRef<HTMLElement, ShareBottomSheetFooterProps>(
  ({ onClose, onClickImageDownload }: ShareBottomSheetFooterProps) => {
    const handleCopyClipboard = () => {
      shareLink({ url: location.href });
      onClose();
    };

    return (
      <div className="flex gap-5xs mb-5xs">
        <Button variant="blue" onClick={handleCopyClipboard}>
          URL 복사
        </Button>
        <Button variant="heavy" onClick={onClickImageDownload}>
          이미지 저장
        </Button>
      </div>
    );
  },
);

ShareBottomSheetFooter.displayName = 'ShareBottomSheetFooter';

export default ShareBottomSheetFooter;
