import Image from 'next/image';

import BandiBoodiShare from '@/assets/images/bandiboodi-share.png';
import { BottomSheet, Typography } from '@/components/atoms';

import ShareBottomSheetFooter from './ShareBottomSheetFooter';

interface ShareGoalBottomSheetProps {
  open: boolean;
  onClose: () => void;
  onClickImageDownload: () => void;
}

export const ShareBottomSheet = ({ open, onClose, onClickImageDownload }: ShareGoalBottomSheetProps) => {
  return (
    <BottomSheet
      open={open}
      onDismiss={onClose}
      fixedMaxHeight={480}
      FooterComponent={<ShareBottomSheetFooter onClose={onClose} onClickImageDownload={onClickImageDownload} />}
    >
      <div className="flex flex-col items-center justify-center gap-3xs translate-y-[20px]">
        <Typography type="title1" className="text-gray-70 text-center">
          {`인생지도를\n공유하시겠어요?`}
        </Typography>
        <Typography type="body3" className="text-gray-50">
          친구랑 함께 쓰면 즐거움이 두배!
        </Typography>
        <Image src={BandiBoodiShare} width={250} alt="bandiboodi-share" />
      </div>
    </BottomSheet>
  );
};
