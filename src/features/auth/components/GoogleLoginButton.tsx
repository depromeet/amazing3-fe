'use client';
import Image from 'next/image';

import GoogleIcon from '@/assets/images/google-icon.svg';
import { Button } from '@/components/atoms/button';

export const GoogleLoginButton = () => {
  const onClickButton = () => {
    window.location.href = 'https://8d84-118-219-132-159.ngrok-free.app/oauth2/authorization/google';
  };

  return (
    <Button className="pl-2xs pr-2xs" size="lg" onClick={onClickButton}>
      <Image src={GoogleIcon} width={24} alt="google-logo" />
      Google 로그인
    </Button>
  );
};
