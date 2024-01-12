import { useEffect, useRef } from 'react';

export const useScrollOnTrigger = <T>(triggerState: T) => {
  const target = useRef<HTMLDivElement | null>(null);
  const prevRef = useRef<T | null>(null);

  useEffect(() => {
    if (prevRef.current && prevRef.current !== triggerState) {
      target.current?.scrollIntoView({ behavior: 'smooth' });
    }
    prevRef.current = triggerState;
  }, [triggerState]);

  return target;
};
