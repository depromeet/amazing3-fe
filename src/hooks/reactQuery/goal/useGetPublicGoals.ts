import { useQuery, useQueryClient } from '@tanstack/react-query';

import { api } from '@/apis';
import type { MemberProps } from '@/features/member/types';

import type { GoalResponse } from './useGetGoals';

type GoalRequestParams = {
  username: string;
};

export type PublicGoalResponse = GoalResponse & { user: Pick<MemberProps, 'nickname' | 'image'> };

export const useGetPublicGoals = ({ username }: GoalRequestParams) => {
  const queryClient = useQueryClient();
  const memberData = queryClient.getQueryData<MemberProps>(['memberData']);

  const isDifferentUser = username !== memberData?.username;

  return useQuery<PublicGoalResponse>({
    queryKey: ['life-map', username],
    queryFn: () => api.get<GoalResponse>(`/open/life-map/${username}`),
    enabled: isDifferentUser,
    throwOnError: true,
  });
};
