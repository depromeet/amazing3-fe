import { useRef } from 'react';

export const useDebounceCall = (callback: VoidFunction, delay = 500) => {
  const timeoutId = useRef<NodeJS.Timeout | null>(null);

  const triggerCall = () => {
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }

    timeoutId.current = setTimeout(() => {
      callback();
    }, delay);
  };

  return triggerCall;
};
