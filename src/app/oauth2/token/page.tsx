'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import { useAuth } from '@/hooks';
import { useGetMemberData } from '@/hooks/reactQuery/auth';

const OAuthTokenPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  const { isLoggedIn, login } = useAuth();

  const { data: memberData } = useGetMemberData();

  // TODO: useGetMemberData 가져오는 로직이 항상 token 저장 이후에 실행되도록 수정 필요.
  useEffect(() => {
    if (token) login(token);
  }, [login, token]);

  useEffect(() => {
    if (isLoggedIn && memberData) {
      router.push(isLoggedIn ? `/home/${memberData.username}` : '/onboarding');
      localStorage.setItem('username', memberData.username);
    }
  }, [memberData, router, isLoggedIn]);

  return <></>;
};

export default OAuthTokenPage;
