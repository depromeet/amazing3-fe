import { useQuery, useQueryClient } from '@tanstack/react-query';

import { api } from '@/apis';
import { useAuth } from '@/hooks';

export type GoalProps = {
  id: number;
  deadline: string;
  stickerUrl: string;
  tagContent: string;
};

export type GoalResponse = {
  isPublic: boolean;
  goals: Array<GoalProps>;
  goalsCount: number;
  count: {
    cheering: number;
    history: number;
    view: number;
  };
  lifeMapId: number;
};

export const useGetGoals = () => {
  const { isLoggedIn } = useAuth();

  return useQuery<GoalResponse>({
    queryKey: ['goals'],
    queryFn: () => api.get<GoalResponse>('/life-map'),
    enabled: isLoggedIn,
  });
};

export const usePrefetchGoals = (): void => {
  const queryClient = useQueryClient();
  queryClient.prefetchQuery({
    queryKey: ['goals'],
    queryFn: () => api.get<GoalResponse>('/life-map'),
  });
};
