import type { PropsWithChildren } from 'react';
import { useEffect, useRef } from 'react';

import { Lottie } from '@/components/atoms/lottie';
import { useIntersectionObserver } from '@/hooks';

interface InfiniteScrollerProps extends PropsWithChildren {
  isLastPage: boolean;
  onIntersected: (entry?: IntersectionObserverEntry) => void;
}

export const InfiniteScroller = ({ onIntersected, isLastPage, children }: InfiniteScrollerProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const entry = useIntersectionObserver(ref, { threshold: 0.9 });

  useEffect(() => {
    if (!entry?.isIntersecting) return;
    if (isLastPage) return;

    onIntersected(entry);
  }, [entry, entry?.isIntersecting, onIntersected, isLastPage]);

  return (
    <>
      {children}
      <div ref={ref}>{!isLastPage && <Lottie src="/lotties/spinner.json" className="h-[80px]" />}</div>
    </>
  );
};
