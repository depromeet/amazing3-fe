import { atom } from 'jotai';

import type { ToastProps } from './Toast';

interface ToastsProps {
  toasts: ToastProps[];
  sequence: number;
}

export const toastBottomPositionAtom = atom('0px');

export const toastsAtom = atom<ToastsProps>({
  toasts: [],
  sequence: 0,
});

export const removeToastAtom = atom(null, (get, set, id: number) => {
  const prev = get(toastsAtom);
  set(toastsAtom, {
    toasts: prev.toasts.filter((toast) => toast.id !== id),
    sequence: prev.sequence - 1,
  });
});

export const toastAtom = atom(
  (get) => get(toastsAtom).toasts,
  (get, set, type: ToastProps['type']) => (title: string) => () => {
    const prev = get(toastsAtom);
    set(toastsAtom, {
      toasts: [
        {
          type,
          title,
          id: prev.sequence,
        },
        ...prev.toasts,
      ],
      sequence: prev.sequence + 1,
    });
  },
);
