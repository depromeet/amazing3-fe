import * as Portal from '@radix-ui/react-portal';
import { useAtomValue } from 'jotai';

import { Toast } from './Toast';
import { toastOptionAtom, toastsAtom } from './Toast.atom';

export const ToastProvider = () => {
  const toasts = useAtomValue(toastsAtom);
  const { position } = useAtomValue(toastOptionAtom);

  return (
    <Portal.Root>
      <div className={`fixed ${position} left-1/2 transform translate-x-[-50%]`}>
        {toasts.map((toast) => (
          <Toast key={toast.id} {...toast} />
        ))}
      </div>
    </Portal.Root>
  );
};
