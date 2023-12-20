'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAtom, useSetAtom } from 'jotai';
import Cookies from 'js-cookie';

import { AC_TOKEN_KEY } from '@/constants';
import { isLoginAtom } from '@/features/auth/atom';
import { memberAtom } from '@/features/member/atoms';

import { useGetMemberData } from './reactQuery/auth';

export const useAuth = () => {
  const router = useRouter();
  const accessToken = Cookies.get(AC_TOKEN_KEY);

  const { data: memberData } = useGetMemberData();

  const [isLogin, setIsLogin] = useAtom(isLoginAtom);
  const setMemberData = useSetAtom(memberAtom);

  useEffect(() => {
    setIsLogin(Boolean(accessToken));
    setMemberData({ ...memberData });
  }, [accessToken]);

  const handleLogOut = () => {
    Cookies.remove(AC_TOKEN_KEY);
    setIsLogin(false);
    setMemberData({});

    router.refresh();
  };

  return {
    isLogin,
    memberData,
    handleLogOut,
  };
};
