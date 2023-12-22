'use client';

import Link from 'next/link';

import GoogleIcon from '@/assets/icons/google-icon.svg';
import { Button } from '@/components';

export const GoogleLoginButton = () => {
  return (
    <Link href={{ pathname: `${process.env.NEXT_PUBLIC_API_URL}/oauth2/authorization/google` }}>
      <Button>
        <GoogleIcon width={24} alt="google-logo" />
        Google 로그인
      </Button>
    </Link>
  );
};
