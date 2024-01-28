'use client';

import { PrivateLifeMap } from '@/features/home/components/lifeMap/PrivateLifeMap';
import { PublicLifeMap } from '@/features/home/components/lifeMap/PublicLifeMap';
import { useIsMyMap } from '@/hooks';

interface LifeMapContainerProps {
  username: string;
}

export const LifeMap = ({ username }: LifeMapContainerProps) => {
  const { isMyMap } = useIsMyMap(username);

  return isMyMap === null ? <></> : isMyMap ? <PrivateLifeMap /> : <PublicLifeMap username={username} />;
};
