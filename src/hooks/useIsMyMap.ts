import { CURRENT_LIFEMAP_USERNAME_KEY } from '@/constants/storageKey';

import { useGetMemberData } from './reactQuery/auth';

export const useIsMyMap = () => {
  const currentUsername = localStorage.getItem(CURRENT_LIFEMAP_USERNAME_KEY);
  const { data } = useGetMemberData();

  const isMyMap = data?.username === currentUsername;

  return { isMyMap, currentUsername, username: data?.username };
};
