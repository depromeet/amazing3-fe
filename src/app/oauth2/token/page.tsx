'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAtom } from 'jotai';
import Cookies from 'js-cookie';

import { isLoginAtom } from '@/features/auth/atom';
import { useGetMemberData } from '@/hooks/reactQuery/auth';

const OAuthTokenPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  const [isLogin, setIsLogin] = useAtom(isLoginAtom);

  // const { data: memberData } = useGetMemberData({ enabled: true });
  const { data: memberData } = useGetMemberData();

  // TODO: useGetMemberData 가져오는 로직이 항상 token 저장 이후에 실행되도록 수정 필요.
  useEffect(() => {
    if (token) {
      Cookies.set('accessToken', token, { secure: process.env.NODE_ENV !== 'development', expires: 7 });
      setIsLogin(true);
    }
  }, [setIsLogin, token]);

  useEffect(() => {
    if (isLogin && memberData) {
      router.push(memberData?.nickname ? `/home/${memberData?.username}` : '/onboarding');
    }
  }, [memberData, router, isLogin]);

  return <></>;
};

export default OAuthTokenPage;
