import { useSetAtom } from 'jotai';

import { toastAtom, toastBottomPositionAtom } from '@/components/atoms/toast/Toast.atom';

export const useToast = (position = 'bottom-0') => {
  const addToast = useSetAtom(toastAtom);
  const setBottomPosition = useSetAtom(toastBottomPositionAtom);

  setBottomPosition(position);

  return {
    success: addToast('success'),
    warning: addToast('warning'),
  };
};
