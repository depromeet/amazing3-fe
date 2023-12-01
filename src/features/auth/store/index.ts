import { atom } from 'jotai';

import type { AuthStateProps } from '../types/store';

export const authAtom = atom<AuthStateProps>({
  isLoggedIn: false,
  isTokenRequired: false,
  isRequesting: false,
});

export const handleAuthAtom = atom(
  (get) => get(authAtom),
  (get, set, update: Partial<AuthStateProps>) => {
    set(authAtom, { ...get(authAtom), ...update });
  },
);
