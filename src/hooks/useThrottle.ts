import { useRef } from 'react';

export const useThrottle = (callback: () => void, interval = 500) => {
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  return () => {
    if (!timer.current) {
      callback();

      timer.current = setTimeout(() => {
        timer.current = null;
      }, interval);
    }
  };
};
