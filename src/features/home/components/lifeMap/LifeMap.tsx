'use client';

import { PrivateLifeMap } from '@/features/home/components/lifeMap/PrivateLifeMap';
import { PublicLifeMap } from '@/features/home/components/lifeMap/PublicLifeMap';

interface LifeMapContainerProps {
  username: string;
}

export const LifeMap = ({ username }: LifeMapContainerProps) => {
  const currentUsername = localStorage.getItem('username');
  const isMyMap = username === currentUsername;

  return isMyMap ? <PrivateLifeMap /> : <PublicLifeMap username={username} />;
};
