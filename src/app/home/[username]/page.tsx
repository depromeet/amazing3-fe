import { api } from '@/apis/server';
import PrefetchHydration from '@/contexts/reactQuery/PrefetchHydration';
import { LifeMap } from '@/features/home/components';
import type { GoalResponse } from '@/hooks/reactQuery/goal/useGetGoal';

interface HomeRouteParams {
  params: { username: string };
}

const HomePage = ({ params: { username } }: HomeRouteParams) => {
  return (
    <PrefetchHydration queryKey={['goals']} queryFn={() => api.get<GoalResponse>('/life-map')}>
      <LifeMap username={username} />
    </PrefetchHydration>
  );
};

export default HomePage;
