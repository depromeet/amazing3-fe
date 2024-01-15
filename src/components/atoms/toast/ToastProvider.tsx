import { Portal } from '@radix-ui/react-portal';
import { useAtomValue } from 'jotai';

import { Toast } from './Toast';
import { toastOptionAtom, toastsAtom } from './Toast.atom';

export const ToastProvider = () => {
  const toasts = useAtomValue(toastsAtom);
  const { position } = useAtomValue(toastOptionAtom);

  return (
    <Portal>
      <div className={`fixed ${position} left-0 right-0 flex flex-col items-center z-50`}>
        {toasts.map((toast) => (
          <Toast key={toast.id} {...toast} />
        ))}
      </div>
    </Portal>
  );
};
