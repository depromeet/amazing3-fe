import * as Portal from '@radix-ui/react-portal';
import { useAtomValue } from 'jotai';

import { Toast } from './Toast';
import { toastsAtom } from './Toast.atom';

const TOAST_POSITION = 'bottom-[84px]';

export const ToastProvider = () => {
  const { toasts } = useAtomValue(toastsAtom);

  return (
    <Portal.Root>
      <div className={`fixed ${TOAST_POSITION} left-1/2 transform translate-x-[-50%]`}>
        {toasts.map((toast) => (
          <Toast key={toast.id} {...toast} />
        ))}
      </div>
    </Portal.Root>
  );
};
