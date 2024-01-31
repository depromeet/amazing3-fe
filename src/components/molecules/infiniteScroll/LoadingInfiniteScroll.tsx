import { useEffect, useRef } from 'react';

import { Lottie } from '@/components/atoms/lottie';
import { useIntersectionObserver } from '@/hooks';

interface LoadingInfiniteScrollProps {
  onIntersected: (entry?: IntersectionObserverEntry) => void;
}

export const LoadingInfiniteScroll = ({ onIntersected }: LoadingInfiniteScrollProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const entry = useIntersectionObserver(ref, { threshold: 0.9 });

  useEffect(() => {
    if (!entry?.isIntersecting) return;

    onIntersected(entry);
  }, [entry, entry?.isIntersecting, onIntersected]);

  return (
    <div ref={ref}>
      <Lottie src="/lotties/spinner.json" className="h-[80px]" />
    </div>
  );
};
