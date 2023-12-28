import { useEffect, useRef } from 'react';

import { isKakaoBrowser } from '@/utils/userAgent';

export const useOpenExternalBrowser = () => {
  const isOpen = useRef(false);

  useEffect(() => {
    if (!isKakaoBrowser()) return;
    if (isOpen.current) return;

    location.href = `kakaotalk://web/openExternal?url=${location.href}`;

    isOpen.current = true;
  }, []);
};
