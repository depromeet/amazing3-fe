import { atom } from 'jotai';

export const goalDateAtom = atom<string>('');
export const goalStickerAtom = atom<string>('');
export const goalTitleAtom = atom<string>('');
export const goalMoreAtom = atom<string>('');
export const goalSubgoalAtom = atom<string>('');
export const goalTagAtom = atom<string>('');

export const goalAtom = atom((get) => ({
  date: get(goalDateAtom),
  sticker: get(goalStickerAtom),
  title: get(goalTitleAtom),
  more: get(goalMoreAtom),
  subgoal: get(goalSubgoalAtom),
  tag: get(goalTagAtom),
}));
