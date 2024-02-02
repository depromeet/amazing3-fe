import { useMutation } from '@tanstack/react-query';

import { api } from '@/apis';
import type { MemberProps } from '@/features/member/types';

import type { PublicGoalResponse } from '../goal/useGetPublicGoals';
import { useOptimisticUpdate } from '../useOptimisticUpdate';

type CheeringRequest = {
  lifeMapId?: number;
  cheererId?: number;
};

export const useCreateCheering = (cheeredUsername: string) => {
  const { queryClient, optimisticUpdater } = useOptimisticUpdate();
  const memberData = queryClient.getQueryData<MemberProps>(['memberData']);

  const targetQueryKey = ['life-map', cheeredUsername];

  return useMutation({
    mutationFn: (data: CheeringRequest) => api.post('/cheering', { ...data, cheererId: memberData?.id }),
    onMutate: async () => {
      const updater = (old: PublicGoalResponse) => ({
        ...old,
        count: {
          ...old.count,
          cheering: old.count.cheering + 1,
        },
      });

      return await optimisticUpdater({ queryKey: targetQueryKey, updater });
    },
    onError: (_, __, context) => {
      queryClient.setQueryData(targetQueryKey, context?.previous);
    },
  });
};
