import * as Portal from '@radix-ui/react-portal';
import { useAtomValue } from 'jotai';

import { Toast } from './Toast';
import { toastBottomPositionAtom, toastsAtom } from './Toast.atom';

export const ToastProvider = () => {
  const { toasts } = useAtomValue(toastsAtom);
  const position = useAtomValue(toastBottomPositionAtom);

  return (
    <Portal.Root>
      <div className={`fixed ${position}`}>
        {toasts.map((toast) => (
          <Toast key={toast.id} {...toast} />
        ))}
      </div>
    </Portal.Root>
  );
};
