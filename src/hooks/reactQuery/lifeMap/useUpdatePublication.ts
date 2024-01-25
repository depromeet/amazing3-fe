import { useMutation } from '@tanstack/react-query';

import { api } from '@/apis';
import type { MemberProps } from '@/features/member/types';

import { useOptimisticUpdate } from '../useOptimisticUpdate';

type isPublicRequest = {
  isPublic: boolean;
};

export const useUpdatePublication = () => {
  const { queryClient, optimisticUpdater } = useOptimisticUpdate();

  return useMutation({
    mutationFn: ({ isPublic }: isPublicRequest) => api.patch(`/life-map/publication`, { isPublic }),
    onMutate: async ({ isPublic }) => {
      const targetQueryKey = ['memberData'];

      const updater = (old: MemberProps): MemberProps => {
        return { ...old, lifeMap: { ...old.lifeMap, isPublic } };
      };
      const context = await optimisticUpdater({ queryKey: targetQueryKey, updater });
      return context;
    },
    onError: (_, _variable, context) => {
      const targetQueryKey = ['memberData'];
      queryClient.setQueryData(targetQueryKey, context?.previous);
    },
  });
};
