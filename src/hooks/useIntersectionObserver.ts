import { useCallback, useEffect, useRef } from 'react';

type IntersectHandler = (entry: IntersectionObserverEntry, observer: IntersectionObserver) => void;

export const useIntersectionObserver = (
  onIntersect: IntersectHandler,
  { threshold = 0, root = null, rootMargin = '0%' }: IntersectionObserverInit,
) => {
  const ref = useRef<HTMLDivElement>(null);

  const updateEntry = useCallback(
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) onIntersect(entry, observer);
      });
    },
    [onIntersect],
  );

  useEffect(() => {
    const isIOSupport = !!window.IntersectionObserver;

    if (!isIOSupport || !ref?.current) return;

    const observer = new IntersectionObserver(updateEntry, { threshold, root, rootMargin });

    observer.observe(ref?.current);

    return () => observer.disconnect();
  }, [updateEntry, ref, root, rootMargin, threshold]);

  return ref;
};
