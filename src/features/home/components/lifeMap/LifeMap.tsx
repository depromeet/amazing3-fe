'use client';

import { CURRENT_LIFEMAP_USERNAME_KEY } from '@/constants/storageKey';
import { PrivateLifeMap } from '@/features/home/components/lifeMap/PrivateLifeMap';
import { PublicLifeMap } from '@/features/home/components/lifeMap/PublicLifeMap';

interface LifeMapContainerProps {
  username: string;
}

export const LifeMap = ({ username }: LifeMapContainerProps) => {
  localStorage.setItem(CURRENT_LIFEMAP_USERNAME_KEY, username);

  const currentUsername = localStorage.getItem('username');
  const isMyMap = username === currentUsername;

  return isMyMap ? <PrivateLifeMap /> : <PublicLifeMap username={username} />;
};
