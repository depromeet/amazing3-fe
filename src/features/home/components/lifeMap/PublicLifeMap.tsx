import dynamic from 'next/dynamic';

const PublicLifeMapBottomArea = dynamic(() => import('@/features/home/components/lifeMap/PublicLifeMapBottomArea'));

import { useGetPublicGoals } from '@/hooks/reactQuery/goal/useGetPublicGoals';

import { LifeMapContent } from './LifeMapContent';

export const PublicLifeMap = ({ username }: { username: string }) => {
  const { data: publicGoals } = useGetPublicGoals({ username });

  return (
    <>
      <LifeMapContent goalsData={publicGoals} memberData={publicGoals?.user} />
      <PublicLifeMapBottomArea username={username} />
    </>
  );
};
