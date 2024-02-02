'use client';

import { Lottie } from '@/components/atoms/lottie';

export const CheeringClickedLottie = () => {
  return (
    <div className="fixed inset-0 w-full h-full max-w-[520px] mx-auto z-[0]">
      <Lottie src="/lotties/cheering-clicked.json" />
    </div>
  );
};
