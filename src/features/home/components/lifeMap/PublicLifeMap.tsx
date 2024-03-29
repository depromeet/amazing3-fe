import dynamic from 'next/dynamic';

const PublicLifeMapBottomArea = dynamic(() => import('@/features/home/components/lifeMap/PublicLifeMapBottomArea'));

import { useGetPublicGoals } from '@/hooks/reactQuery/goal/useGetPublicGoals';

import { LifeMapContent } from './LifeMapContent';

const CHEER_ANIMATION_INTERVAL = 5400;

export const PublicLifeMap = ({ username }: { username: string }) => {
  const { data: publicGoals } = useGetPublicGoals({ username });

  return (
    <>
      <LifeMapContent isPublic goalsData={publicGoals} memberData={publicGoals?.user} />
      <PublicLifeMapBottomArea username={username} />
    </>
  );
};
