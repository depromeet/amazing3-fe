import { useAtom } from 'jotai';

import { isLoggedInAtom } from '@/atoms';

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useAtom(isLoggedInAtom);
  const username = localStorage.getItem('username');

  const handleLogout = () => setIsLoggedIn(false);

  return { isLoggedIn, username, logout: handleLogout };
};
