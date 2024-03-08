import type { ReactNode } from 'react';
import Image from 'next/image';

import BandiMoori from '@/assets/images/bandi-moori.png';
import { BottomSheet, Typography } from '@/components';

interface MyPageBottomSheetProps {
  open: boolean;
  onClose: VoidFunction;
  Footer: ReactNode;
  title: string;
  subTitle: string;
}

const MyPageBottomSheet = ({ open, onClose, Footer, title, subTitle }: MyPageBottomSheetProps) => {
  return (
    <BottomSheet open={open} onDismiss={onClose} fixedMaxHeight={460} FooterComponent={Footer}>
      <div className="py-md flex flex-col items-center justify-center translate-y-[20px]">
        <div className="flex flex-col gap-3xs items-center">
          <Typography type="title1" className="text-gray-70 text-center">
            {title}
          </Typography>
          <Typography type="body3" className="text-gray-50">
            {subTitle}
          </Typography>
        </div>
        <Image src={BandiMoori} width={200} alt="bandimoori" />
      </div>
    </BottomSheet>
  );
};

export default MyPageBottomSheet;
