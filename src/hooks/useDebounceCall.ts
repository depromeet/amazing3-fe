import { useEffect, useState } from 'react';

export const useDebounceCall = (callback: VoidFunction, delay: number) => {
  const [callNow, setCallNow] = useState(false);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (callNow) callback();
      setCallNow(false);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [callNow, callback, delay]);

  const triggerCall = () => {
    setCallNow(true);
  };

  return triggerCall;
};
