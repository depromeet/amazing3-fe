import { atom } from 'jotai';

import type { MemberProps } from '../types';

type OptionalMemberProps = Partial<MemberProps>;

export const idAtom = atom<OptionalMemberProps['id']>(undefined);
export const emailAtom = atom<OptionalMemberProps['email']>(undefined);
export const usernameAtom = atom<OptionalMemberProps['username']>(undefined);
export const nicknameAtom = atom<OptionalMemberProps['nickname']>(undefined);
export const birthAtom = atom<OptionalMemberProps['birth']>(undefined);

export const memberAtom = atom(
  (get) => ({
    id: get(idAtom),
    email: get(emailAtom),
    username: get(usernameAtom),
    nickname: get(nicknameAtom),
    birth: get(birthAtom),
  }),
  (_, set, update: OptionalMemberProps) => {
    set(idAtom, update.id);
    set(emailAtom, update.email);
    set(usernameAtom, update.username);
    set(nicknameAtom, update.nickname);
    set(birthAtom, update.birth);
  },
);
