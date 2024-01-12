import { atom } from 'jotai';

import type { ToastProps } from './Toast';

type ToastsProps = ToastProps[];

export interface ToastOptionProps {
  position?: string;
}

export const toastsAtom = atom<ToastsProps>([]);

export const toastOptionAtom = atom<ToastOptionProps>({
  position: 'bottom-[84px]',
});

export const removeToastAtom = atom(null, (get, set, id: number) => {
  const prev = get(toastsAtom);
  set(
    toastsAtom,
    prev.filter((toast) => toast.id !== id),
  );
});

export const toastAtom = atom(
  (get) => get(toastsAtom),
  (get, set, type: ToastProps['type']) => (title: string) => () => {
    const prev = get(toastsAtom);
    const newToast = { type, title, id: prev.length };
    set(toastsAtom, [...prev, newToast]);
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
