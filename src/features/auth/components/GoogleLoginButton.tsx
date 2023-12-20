'use client';

import Link from 'next/link';

import GoogleIcon from '@/assets/icons/google-icon.svg';
import { Button } from '@/components';

export const GoogleLoginButton = () => {
  return (
    <Link href="/api/oauth2/authorization/google">
      <Button className="pl-2xs pr-2xs">
        <GoogleIcon width={24} alt="google-logo" />
        Google 로그인
      </Button>
    </Link>
  );
};
