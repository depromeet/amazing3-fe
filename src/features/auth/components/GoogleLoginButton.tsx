'use client';

import Link from 'next/link';

import GoogleIcon from '@/assets/icons/google-icon.svg';
import { Button } from '@/components/atoms/button';

export const GoogleLoginButton = () => {
  /**
   * TODO: 이후 proxy 및 env로 따로 관리해야 합니다
   */
  const oauthRequestUrl = 'https://8d84-118-219-132-159.ngrok-free.app/oauth2/authorization/google';

  return (
    <Link href={oauthRequestUrl}>
      <Button className="pl-2xs pr-2xs" size="lg">
        <GoogleIcon width={24} />
        Google 로그인
      </Button>
    </Link>
  );
};
