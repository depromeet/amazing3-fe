import { useEffect, useRef } from 'react';

export const useScrollOnIncrease = (number: number) => {
  const bottomRef = useRef<HTMLDivElement>(null);
  const prev = useRef(number);

  useEffect(() => {
    // 배열 길이가 이전 길이보다 크면 스크롤 이동
    if (number > prev.current) {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
    // 현재 길이를 이전 길이로 업데이트
    prev.current = number;
  }, [number]);

  return bottomRef;
};
