'use client';

import type { ReactNode } from 'react';
import type { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import BandiboodiErrorImage from '@/assets/images/bandiboodi_error.png';
import Error404Image from '@/assets/images/error/404.png';
import Error500Image from '@/assets/images/error/500.png';
import ErrorTextImage from '@/assets/images/error/error.png';
import { Button, Typography } from '@/components';

interface ErrorPageLayoutProps {
  statusNum: 404 | 500;
}

type ErrorValuesProps = {
  [key in ErrorPageLayoutProps['statusNum']]: { title: string | ReactNode; statusImage: StaticImport };
};

const ERROR_VALUES: ErrorValuesProps = {
  '404': {
    title: (
      <>
        원하시는 페이지를 찾을 수 없어요. <br /> 페이지 주소를 다시 확인해 주세요.
      </>
    ),
    statusImage: Error404Image,
  },
  '500': {
    title: (
      <>
        앗, 에러가 발생했어요. <br /> 다시 시도해 주세요.
      </>
    ),
    statusImage: Error500Image,
  },
};

export const ErrorPageLayout = ({ statusNum }: ErrorPageLayoutProps) => {
  const router = useRouter();

  return (
    <main className="w-full h-[100vh] flex flex-col justify-center bg-gradient1">
      <section className="w-full h-full flex flex-col justify-between items-center">
        <div className="px-[45px] flex h-full flex-col items-center justify-center">
          <div className="flex flex-col gap-[3vh] items-center">
            <Image
              src={ERROR_VALUES[statusNum].statusImage}
              width={270}
              height={130}
              alt={`${statusNum}_error_image`}
            />
            <Image src={ErrorTextImage} width={211} height={54} alt="error" />
          </div>
          <Typography type="body1" className="text-blue-30 text-center mt-[3vh]">
            {ERROR_VALUES[statusNum].title}
          </Typography>
          <div className="mt-[0.1vh]">
            <Image src={BandiboodiErrorImage} width={293} height={291} alt="bandiboodi_error" />
          </div>
        </div>
        <div className="w-full pt-5xs pb-xs px-xs flex gap-5xs">
          <Link href={{ pathname: '/home' }} className="w-full">
            <Button variant="tertiary">홈화면</Button>
          </Link>
          <Button onClick={() => router.back()}>이전페이지</Button>
        </div>
      </section>
    </main>
  );
};
