import { useRouter } from 'next/navigation';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { api } from '@/apis';
import type { MemberProps } from '@/features/member/types';

type GoalRequestParams = {
  goalId: number;
};

export const useDeleteGoal = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: (data: GoalRequestParams) => api.delete(`/goal/${data.goalId}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['goals'] });
      const memberData = queryClient.getQueryData(['memberData']) as MemberProps;
      router.push(`/home/${memberData.username}`);
    },
  });
};
