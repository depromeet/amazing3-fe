import { atom } from 'jotai';

import type { GoalProps } from '../types';

export const goalIdAtom = atom<number | null>(null);
export const goalDateAtom = atom<string>('');
export const goalStickerAtom = atom<string>('');
export const goalTitleAtom = atom<string>('');
export const goalMoreAtom = atom<string>('');
export const goalSubgoalAtom = atom<string>('');
export const goalTagAtom = atom<string>('');

export const goalAtom = atom(
  (get) => ({
    id: get(goalIdAtom),
    date: get(goalDateAtom),
    sticker: get(goalStickerAtom),
    title: get(goalTitleAtom),
    more: get(goalMoreAtom),
    subgoal: get(goalSubgoalAtom),
    tag: get(goalTagAtom),
  }),
  (_, set, update: GoalProps) => {
    set(goalIdAtom, update.id);
    set(goalDateAtom, update.deadline);
    set(goalStickerAtom, update.stickerUrl);
    set(goalTitleAtom, update.title);
    set(goalMoreAtom, update.description);
    set(goalTagAtom, update.tag);
  },
);
