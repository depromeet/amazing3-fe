import { api } from '@/apis';
import PrefetchHydration from '@/contexts/reactQuery/PrefetchHydration';
import { LifeMap } from '@/features/home/components';
import type { GoalResponse } from '@/hooks/reactQuery/goal/useGetGoals';

const HomePage = () => {
  return (
    <PrefetchHydration queryKey={['goals']} queryFn={() => api.get<GoalResponse>('/goal')}>
      <LifeMap />
    </PrefetchHydration>
  );
};

export default HomePage;
