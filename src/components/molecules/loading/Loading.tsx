'use client';

import type { HTMLAttributes } from 'react';

import { Lottie } from '@/components/atoms/lottie';

interface LoadingProps extends HTMLAttributes<HTMLDivElement> {}

export const Loading = ({ ...props }: LoadingProps) => {
  return <Lottie src="/lotties/bandiboodi-loading.json" {...props} />;
};
