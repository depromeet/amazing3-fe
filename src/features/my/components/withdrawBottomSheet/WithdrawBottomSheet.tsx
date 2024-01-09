import Image from 'next/image';

import BandiMoori from '@/assets/images/bandi-moori.png';
import { BottomSheet, Typography } from '@/components';

import Footer from './Footer';

interface WithdrawBottomSheetProps {
  open: boolean;
  onClose: VoidFunction;
}

const WithdrawBottomSheet = ({ open, onClose }: WithdrawBottomSheetProps) => {
  return (
    <BottomSheet open={open} onDismiss={onClose} fixedMaxHeight={460} FooterComponent={<Footer onClose={onClose} />}>
      <div className="py-md flex flex-col items-center justify-center translate-y-[20px]">
        <div className="flex flex-col gap-3xs items-center">
          <Typography type="title1" className="text-gray-70 text-center">
            정말로 탈퇴하시겠어요?
          </Typography>
          <Typography type="body3" className="text-gray-50">
            삭제하면 복구할 수 없어요
          </Typography>
        </div>
        <Image src={BandiMoori} width={200} alt="bandimoori" />
      </div>
    </BottomSheet>
  );
};

export default WithdrawBottomSheet;
