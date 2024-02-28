import { atom } from 'jotai';
import Cookies from 'js-cookie';

import { AC_TOKEN_KEY } from '@/constants';

const token = Cookies.get(AC_TOKEN_KEY);

export const isLoggedInAtom = atom(Boolean(token));
