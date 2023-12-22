'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAtom, useSetAtom } from 'jotai';
import Cookies from 'js-cookie';

import { isLoginAtom } from '@/features/auth/atom';
import { memberAtom } from '@/features/member/atoms';
import { useGetMemberData } from '@/hooks/reactQuery/auth';

const GoogleLogin = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  const setMemberData = useSetAtom(memberAtom);
  const [isLogin, setIsLogin] = useAtom(isLoginAtom);

  const { data: memberData } = useGetMemberData();

  useEffect(() => {
    if (token) {
      Cookies.set('accessToken', token, { secure: process.env.NODE_ENV !== 'development', expires: 7 });
    }
    setIsLogin(true);
  }, [token]);

  useEffect(() => {
    setMemberData({ ...memberData });
    if (isLogin) {
      router.push(memberData?.username ? '/home' : '/onboarding');
    }
  }, [memberData]);

  return <></>;
};

export default GoogleLogin;
