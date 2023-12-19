import { atom } from 'jotai';

import type { Member } from '../types';

export const idAtom = atom<number>(0);
export const emailAtom = atom<string>('');
export const usernameAtom = atom<string>('');
export const nicknameAtom = atom<string>('');
export const birthAtom = atom<string>('');

export const memberAtom = atom(
  (get) => ({
    id: get(idAtom),
    email: get(emailAtom),
    username: get(usernameAtom),
    nickname: get(nicknameAtom),
    birth: get(birthAtom),
  }),
  (_, set, update: Member) => {
    set(idAtom, update.id);
    set(emailAtom, update.email);
    set(usernameAtom, update.username);
    set(nicknameAtom, update.nickname);
    set(birthAtom, update.birth);
  },
);
