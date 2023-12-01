import { useAtom } from 'jotai';

import { handleAuthAtom } from '../store';
import type { AuthStateProps } from '../types/store';

const useAuthStore = () => {
  const [authStore, setAuthStore] = useAtom(handleAuthAtom);

  const setIsLoggedIn = (value: AuthStateProps['isLoggedIn']) => setAuthStore({ isLoggedIn: value });
  const setIsTokenRequired = (value: AuthStateProps['isTokenRequired']) => setAuthStore({ isTokenRequired: value });
  const setIsRequesting = (value: AuthStateProps['isRequesting']) => setAuthStore({ isRequesting: value });

  return { ...authStore, actions: { setIsLoggedIn, setIsTokenRequired, setIsRequesting } };
};

export default useAuthStore;
