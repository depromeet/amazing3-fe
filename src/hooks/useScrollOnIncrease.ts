import { useEffect, useRef } from 'react';

interface useScrollOnIncreaseProps {
  triggerNumber: number;
  scrollOnMount?: boolean;
}

export const useScrollOnIncrease = ({ triggerNumber, scrollOnMount = false }: useScrollOnIncreaseProps) => {
  const bottomRef = useRef<HTMLDivElement>(null);
  const prev = useRef(scrollOnMount ? 0 : triggerNumber);

  useEffect(() => {
    // 배열 길이가 이전 길이보다 크면 스크롤 이동
    if (triggerNumber > prev.current) {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
    // 현재 길이를 이전 길이로 업데이트
    prev.current = triggerNumber;
  }, [triggerNumber]);

  return bottomRef;
};
