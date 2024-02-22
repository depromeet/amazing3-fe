import { useRouter } from 'next/navigation';
import { useAtom } from 'jotai';
import Cookies from 'js-cookie';

import { isLoggedInAtom } from '@/atoms';

export const useAuth = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useAtom(isLoggedInAtom);
  const username = localStorage.getItem('username');

  const handleLogin = (token: string) => {
    Cookies.set('accessToken', token, { secure: process.env.NODE_ENV !== 'development', expires: 7 });
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    Cookies.remove('accessToken');
    localStorage.clear();
    router.replace('/');
  };

  return { isLoggedIn, username, login: handleLogin, logout: handleLogout };
};
