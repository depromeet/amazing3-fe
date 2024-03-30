import type { ReactNode } from 'react';
import type { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

import BandiboodiErrorImage from '@/assets/images/bandiboodi_error.png';
import BandiboodiPublicErrorImage from '@/assets/images/bandiboodi-public-error.png';
import { Typography } from '@/components';

type BottomImageProps = 'default' | 'public';
export interface ErrorPageLayoutProps {
  TopComponent?: ReactNode;
  title: string;
  bottomImage?: BottomImageProps;
  footer?: ReactNode;
}

const bottomImageToStaticImport: Record<BottomImageProps, StaticImport> = {
  default: BandiboodiErrorImage,
  public: BandiboodiPublicErrorImage,
} as const;

export const ErrorPageLayout = ({ TopComponent, title, bottomImage = 'default', footer }: ErrorPageLayoutProps) => {
  return (
    <div className="relative h-[100dvh] flex items-center justify-center bg-gradient1 w-full">
      <div className="relative flex flex-col items-center gap-xs">
        <div>{TopComponent}</div>
        <Typography type="body1" className="text-blue-30 text-center">
          {title}
        </Typography>
        <Image src={bottomImageToStaticImport[bottomImage]} width={293} height={291} alt={`${bottomImage}_error`} />
      </div>
      <div className="absolute bottom-0 w-full px-xs mb-xs">{footer}</div>
    </div>
  );
};
