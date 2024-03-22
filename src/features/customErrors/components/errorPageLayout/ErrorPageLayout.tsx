'use client';

import type { ReactNode } from 'react';
import type { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

import BandiboodiErrorImage from '@/assets/images/bandiboodi_error.png';
import BandiboodiPublicErrorImage from '@/assets/images/bandiboodi-public-error.png';
import Error404Image from '@/assets/images/error/404.png';
import Error500Image from '@/assets/images/error/500.png';
import ErrorTextImage from '@/assets/images/error/error.png';
import LockImage from '@/assets/images/error/lock.png';
import { Typography } from '@/components';

import { ResetButton } from './ResetButton';

export interface ErrorPageLayoutProps {
  statusCode: 404 | 500 | 403;
}

type ErrorValuesProps = {
  [key in ErrorPageLayoutProps['statusCode']]: {
    title: string | ReactNode;
    statusImage: { src: StaticImport; width: number; height: number };
  };
};

const ERROR_VALUES: ErrorValuesProps = {
  '404': {
    title: '원하시는 페이지를 찾을 수 없어요. \n 페이지 주소를 다시 확인해 주세요.',
    statusImage: {
      src: Error404Image,
      width: 270,
      height: 230,
    },
  },
  '500': {
    title: '앗, 에러가 발생했어요. \n 다시 시도해 주세요.',
    statusImage: {
      src: Error500Image,
      width: 270,
      height: 230,
    },
  },
  '403': {
    title: '공개되지 않은 인생 지도예요. \n 돌아가세요.',
    statusImage: {
      src: LockImage,
      width: 146,
      height: 189,
    },
  },
};

export const ErrorPageLayout = ({ statusCode }: ErrorPageLayoutProps) => (
  <main className="w-full h-[100dvh] flex flex-col justify-center bg-gradient1">
    <section className="w-full h-full flex flex-col justify-between items-center">
      <div className="px-[45px] flex h-full flex-col items-center justify-center">
        <div className="flex flex-col gap-[3vh] items-center">
          <Image
            src={ERROR_VALUES[statusCode].statusImage.src}
            width={ERROR_VALUES[statusCode].statusImage.width}
            height={ERROR_VALUES[statusCode].statusImage.height}
            alt={`${statusCode}_error_image`}
            priority
          />
          <Image src={ErrorTextImage} width={211} height={54} alt="error" />
        </div>
        <Typography type="body1" className="text-blue-30 text-center mt-[3vh]">
          {ERROR_VALUES[statusCode].title}
        </Typography>
        <div className="mt-[0.1vh]">
          <Image
            src={statusCode === 403 ? BandiboodiPublicErrorImage : BandiboodiErrorImage}
            width={293}
            height={291}
            alt="bandiboodi_error"
          />
        </div>
      </div>
      <div className="w-full pt-5xs pb-xs px-xs flex gap-5xs">
        <ResetButton statusCode={statusCode} />
      </div>
    </section>
  </main>
);
