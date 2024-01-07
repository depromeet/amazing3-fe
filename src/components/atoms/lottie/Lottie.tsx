import type { HTMLAttributes } from 'react';
import { useEffect, useRef } from 'react';
import type { AnimationConfig, AnimationItem } from 'lottie-web';
import lottie from 'lottie-web';

interface LottieProps extends HTMLAttributes<HTMLDivElement>, Omit<AnimationConfig, 'container'> {
  src: string;
}

export const Lottie = ({ src, loop = true, autoplay = true, ...props }: LottieProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<AnimationItem>();

  useEffect(() => {
    if (!containerRef.current) return;

    animationRef.current = lottie.loadAnimation({
      container: containerRef.current,
      loop,
      autoplay,
      renderer: 'svg',
      path: src,
      rendererSettings: {
        progressiveLoad: true,
        hideOnTransparent: true,
      },
    });

    return () => {
      animationRef.current?.destroy();
    };
  }, [autoplay, loop, src]);

  return <div ref={containerRef} {...props} />;
};
