'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useSetAtom } from 'jotai';
import Cookies from 'js-cookie';

import { memberAtom } from '@/features/member/atoms';
import { useAuth } from '@/hooks/useAuth';

const GoogleLogin = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  const setMemberData = useSetAtom(memberAtom);

  const { isLogin, memberData } = useAuth();

  useEffect(() => {
    if (token) {
      Cookies.set('accessToken', token, { secure: process.env.NODE_ENV !== 'development', expires: 7 });
    }
  }, [token]);

  useEffect(() => {
    setMemberData({ ...memberData });

    if (isLogin) {
      router.push(memberData?.username ? '/home' : '/member/new/nickname');
    }
  }, [memberData]);

  return <></>;
};

export default GoogleLogin;
