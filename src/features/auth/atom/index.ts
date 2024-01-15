import { atom } from 'jotai';
import Cookies from 'js-cookie';

export const isLoginAtom = atom<boolean>(Boolean(Cookies.get('accessToken')));
export const isTokenRequiredAtom = atom<boolean>(false);
export const isRequestingAtom = atom<boolean>(false);
