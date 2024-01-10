import { useSetAtom } from 'jotai';

import { toastAtom } from '@/components/atoms/toast/Toast.atom';

export const useToast = () => {
  const addToast = useSetAtom(toastAtom);

  return {
    success: addToast('success'),
    warning: addToast('warning'),
  };
};
