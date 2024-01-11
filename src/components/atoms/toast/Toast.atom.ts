import { atom } from 'jotai';

import type { ToastProps } from './Toast';

interface ToastsProps {
  toasts: ToastProps[];
  sequence: number;
}

export interface ToastOptionProps {
  position?: string;
}

export const toastsAtom = atom<ToastsProps>({
  toasts: [],
  sequence: 0,
});

export const toastOptionAtom = atom<ToastOptionProps>({
  position: 'bottom-[84px]',
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
    const newToast = { type, title, id: prev.sequence };
    set(toastsAtom, {
      toasts: [...prev.toasts, newToast],
      sequence: prev.sequence + 1,
    });
  },
);

export const toastOptionChangeAtom = atom(
  (get) => get(toastOptionAtom),
  (get, set, changeOption: ToastOptionProps) => {
    const prev = get(toastOptionAtom);
    const updatedOption = { ...prev, ...changeOption };
    set(toastOptionAtom, updatedOption);
  },
);
