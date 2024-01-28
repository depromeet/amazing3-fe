import { useEffect, useState } from 'react';
import { useAtomValue } from 'jotai';

import { CURRENT_LIFEMAP_USERNAME_KEY } from '@/constants/storageKey';
import { isLoginAtom } from '@/features/auth/atom';

import { useGetMemberData } from './reactQuery/auth';

export const useIsMyMap = (username?: string) => {
  const [isMyMap, setIsMyMap] = useState<boolean | null>(null);
  const [currentUsername, setCurrentUsername] = useState<string | null>(null);
  const { data } = useGetMemberData();
  const isLogin = useAtomValue(isLoginAtom);

  useEffect(() => {
    if (username) {
      localStorage.setItem(CURRENT_LIFEMAP_USERNAME_KEY, username);
    }
    setCurrentUsername(localStorage.getItem(CURRENT_LIFEMAP_USERNAME_KEY));
    if (!isLogin) {
      setIsMyMap(false);
    } else if (data?.username) {
      setIsMyMap(data.username === currentUsername);
    }
  }, [data, currentUsername, isLogin, username]);

  return { isMyMap, currentUsername, username: data?.username };
};
