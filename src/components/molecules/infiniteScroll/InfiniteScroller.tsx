import type { PropsWithChildren } from 'react';

import { Lottie } from '@/components/atoms/lottie';
import { useIntersectionObserver } from '@/hooks';

interface InfiniteScrollerProps extends PropsWithChildren {
  isLastPage: boolean;
  onIntersect: (entry?: IntersectionObserverEntry) => void;
}

export const InfiniteScroller = ({ onIntersect, isLastPage, children }: InfiniteScrollerProps) => {
  const ref = useIntersectionObserver(
    (entry, observer) => {
      observer.unobserve(entry.target);

      if (isLastPage) return;

      onIntersect();
    },
    { threshold: 0.9 },
  );

  return (
    <>
      {children}
      <div ref={ref}>{!isLastPage && <Lottie src="/lotties/spinner.json" className="h-[80px]" />}</div>
    </>
  );
};
