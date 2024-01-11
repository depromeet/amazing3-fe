import { useEffect } from 'react';
import { useSetAtom } from 'jotai';

import type { ToastOptionProps } from '@/components/atoms/toast/Toast.atom';
import { toastAtom, toastOptionChangeAtom } from '@/components/atoms/toast/Toast.atom';

export const useToast = (option?: ToastOptionProps) => {
  const addToast = useSetAtom(toastAtom);
  const setOption = useSetAtom(toastOptionChangeAtom);

  useEffect(() => {
    if (option) setOption(option);
  }, [option, setOption]);

  return {
    success: addToast('success'),
    warning: addToast('warning'),
  };
};
