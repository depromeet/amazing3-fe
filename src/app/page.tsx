'use client';

import Image from 'next/image';
import Link from 'next/link';

import SplashBandiboodi from '@/assets/images/bandiboodi-splash.png';
import LogoImage from '@/assets/images/logo.png';
import { Typography } from '@/components';
import { GoogleLoginButton } from '@/features/auth/components';

const SplashPage = () => {
  return (
    <div className="relative w-full h-[100vh] flex flex-col items-center bg-gradient1 overflow-hidden pt-[40px] ">
      <div className="flex flex-col gap-2xs z-10">
        <Typography type="heading2" className="text-center bg-clip-text bg-gradient4 text-transparent">
          내가 직접 그리는 <br /> 나의 인생지도
        </Typography>
        <Image src={LogoImage} width={320} height={160} alt="logo" priority />
      </div>
      <div className="absolute bottom-[-4%]">
        <Image src={SplashBandiboodi} width={520} alt="splash_bandiboodi" />
      </div>
      <div className="absolute bottom-[10px] w-full flex flex-col gap-3xs px-xs">
        <GoogleLoginButton />
        <Typography className="text-center text-gray-40" type="body3">
          회원가입 시{' '}
          <Link className=" underline" href="/">
            서비스 이용약관
          </Link>
          과 <br />{' '}
          <Link className="underline" href="/">
            개인정보 수집 및 이용
          </Link>
          에 동의하게 됩니다.
        </Typography>
      </div>
    </div>
  );
};

export default SplashPage;
