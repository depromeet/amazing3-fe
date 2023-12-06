import { atom } from 'jotai';

export const isLoggedInAtom = atom<boolean>(false);
export const isTokenRequired = atom<boolean>(false);
export const isRequesting = atom<boolean>(false);
