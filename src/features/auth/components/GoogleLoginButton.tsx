'use client';

import Link from 'next/link';

import GoogleIcon from '@/assets/icons/google-icon.svg';
import { Button } from '@/components';

export const GoogleLoginButton = () => {
  return (
    <Link href={{ pathname: '/api/oauth2/authorization/google' }}>
      {/* // <Link href={{ pathname: 'https://www.one-bailey.o-r.kr/api/oauth2/authorization/google' }}> */}
      <Button>
        <GoogleIcon width={24} alt="google-logo" />
        Google 로그인
      </Button>
    </Link>
  );
};
