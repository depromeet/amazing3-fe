import type { RefObject } from 'react';
import { useEffect, useState } from 'react';

export const useIntersectionObserver = (
  elementRef: RefObject<Element>,
  { threshold = 0, root = null, rootMargin = '0%' }: IntersectionObserverInit,
) => {
  const [entry, setEntry] = useState<IntersectionObserverEntry>();

  const updateEntry = ([entry]: IntersectionObserverEntry[]) => {
    setEntry(entry);
  };

  useEffect(() => {
    const element = elementRef?.current;
    const isIOSupport = !!window.IntersectionObserver;

    if (!isIOSupport || entry?.isIntersecting || !element) return;

    const observer = new IntersectionObserver(updateEntry, { threshold, root, rootMargin });
    observer.observe(element);

    return () => observer.disconnect();
  }, [elementRef, entry, root, rootMargin, threshold]);

  return entry;
};
