'use client';

import { PrivateLifeMap } from '@/features/home/components/lifeMap/PrivateLifeMap';
import { PublicLifeMap } from '@/features/home/components/lifeMap/PublicLifeMap';
import { useGetMemberData } from '@/hooks/reactQuery/auth';

interface LifeMapContainerProps {
  username: string;
}

export const LifeMap = ({ username }: LifeMapContainerProps) => {
  const { data: currentMemberData } = useGetMemberData();
  const isMyMap = username === currentMemberData?.username;

  return isMyMap ? <PrivateLifeMap /> : <PublicLifeMap username={username} />;
};
