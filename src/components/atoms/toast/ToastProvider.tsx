'use client';

import { Portal } from '@radix-ui/react-portal';
import { useAtomValue } from 'jotai';

import { useIsMounted } from '@/hooks';

import { Toast } from './Toast';
import { toastOptionAtom, toastsAtom } from './Toast.atom';

export const ToastProvider = () => {
  const isMounted = useIsMounted();
  const toasts = useAtomValue(toastsAtom);
  const { position } = useAtomValue(toastOptionAtom);

  return (
    isMounted && (
      <Portal>
        <div className={`fixed ${position} left-0 right-0 flex flex-col items-center z-[999]`}>
          {toasts.map((toast) => (
            <Toast key={toast.id} {...toast} />
          ))}
        </div>
      </Portal>
    )
  );
};
