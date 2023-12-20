import { atom } from 'jotai';

export const isLoginAtom = atom<boolean>(false);
export const isTokenRequiredAtom = atom<boolean>(false);
export const isRequestingAtom = atom<boolean>(false);
