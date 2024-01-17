'use client';

import { useGetPublicGoals } from '@/hooks/reactQuery/goal/useGetPublicGoals';

import { LifeMapContent } from './LifeMapContent';

export const PublicLifeMap = ({ username }: { username: string }) => {
  const { data: publicGoals } = useGetPublicGoals({ username });

  return <LifeMapContent isPublic goalsData={publicGoals} memberData={publicGoals?.user} />;
};
