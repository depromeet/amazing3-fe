'use client';

import Link from 'next/link';

import GoogleIcon from '@/assets/icons/google-icon.svg';
import { Button } from '@/components';

export const GoogleLoginButton = () => {
  /**
   * TODO: 이후 proxy 및 env로 따로 관리해야 합니다
   */
  const oauthRequestUrl = 'https://8d84-118-219-132-159.ngrok-free.app/oauth2/authorization/google';

  return (
    <Link href={oauthRequestUrl}>
      <Button>
        <GoogleIcon width={24} alt="google-logo" />
        Google 로그인
      </Button>
    </Link>
  );
};
