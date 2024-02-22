import { useEffect, useState } from 'react';

import { CURRENT_LIFEMAP_USERNAME_KEY } from '@/constants/storageKey';

import { useGetMemberData } from './reactQuery/auth';
import { useAuth } from '.';

export const useIsMyMap = (username?: string) => {
  const [isMyMap, setIsMyMap] = useState<boolean | null>(null);
  const [currentUsername, setCurrentUsername] = useState<string | null>(null);
  const { data } = useGetMemberData();
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    if (username) {
      localStorage.setItem(CURRENT_LIFEMAP_USERNAME_KEY, username);
    }
    setCurrentUsername(localStorage.getItem(CURRENT_LIFEMAP_USERNAME_KEY));
    if (!isLoggedIn) {
      setIsMyMap(false);
    } else if (data?.username) {
      setIsMyMap(data.username === currentUsername);
    }
  }, [data, currentUsername, isLoggedIn, username]);

  return { isMyMap, currentUsername, username: data?.username };
};
