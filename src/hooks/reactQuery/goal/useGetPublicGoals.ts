import { useQuery } from '@tanstack/react-query';

import { api } from '@/apis';

import type { GoalResponse } from './useGetGoals';

type GoalRequestParams = {
  username: string;
};

export const useGetPublicGoals = ({ username }: GoalRequestParams) => {
  return useQuery<GoalResponse>({
    queryKey: ['life-map', username],
    queryFn: () => api.get<GoalResponse>(`/open/life-map/${username}`),
    enabled: !!username,
    throwOnError: true,
  });
};
