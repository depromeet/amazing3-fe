import { useEffect } from 'react';
import { useSetAtom } from 'jotai';

import type { ToastOptionProps } from '@/components/atoms/toast/Toast.atom';
import { toastAtom, toastOptionAtom } from '@/components/atoms/toast/Toast.atom';

export const useToast = (option?: ToastOptionProps) => {
  const addToast = useSetAtom(toastAtom);
  const setOption = useSetAtom(toastOptionAtom);

  useEffect(() => {
    if (option) setOption(option);
  }, [option, setOption]);

  return {
    success: addToast('success'),
    warning: addToast('warning'),
  };
};
