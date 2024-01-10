import Image from 'next/image';

import BandiBoodi3DImage from '@/assets/images/bandiboodi-3d.png';
import LogoImage from '@/assets/images/logo.png';
import { BottomSheet, LoginIconSet, ToolTip, Typography } from '@/components';

import { StarBg } from './StarBg';

interface LoginBottomSheetProps {
  open: boolean;
  onClose: VoidFunction;
}

export const LoginBottomSheet = ({ open, onClose }: LoginBottomSheetProps) => {
  return (
    <BottomSheet open={open} onDismiss={onClose} fixedMaxHeight={504}>
      <div className="relative w-full h-[490px] flex flex-col items-center pt-sm">
        <StarBg />
        <div className="flex flex-col gap-4xs px-[49px] items-center">
          <Image src={LogoImage} width={133} alt="logo" />
          <Typography className="text-blue-50 font-insungit font-medium">내가 직접 그리는 나의 인생 지도</Typography>
        </div>
        <div className="absolute bottom-0 w-full h-[237px] pt-[100px] bg-gradient7 flex flex-col gap-4xs items-center">
          <ToolTip title="3초만에 시작하기" />
          <LoginIconSet google />
        </div>
        <div className="absolute top-[127px]">
          <Image src={BandiBoodi3DImage} width={220} alt="bandiboodi" />
        </div>
      </div>
    </BottomSheet>
  );
};
