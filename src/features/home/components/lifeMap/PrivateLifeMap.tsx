import { BottomNavigation } from '@/components/molecules/bottomNavigation';
import { useGetMemberData } from '@/hooks/reactQuery/auth';
import { useGetGoals } from '@/hooks/reactQuery/goal/useGetGoals';

import { LifeMapContent } from './LifeMapContent';

export const PrivateLifeMap = () => {
  const { data: memberData } = useGetMemberData();
  const { data: privateGoals } = useGetGoals();

  return (
    <>
      <LifeMapContent goalsData={privateGoals} memberData={memberData} />
      <BottomNavigation />
    </>
  );
};
