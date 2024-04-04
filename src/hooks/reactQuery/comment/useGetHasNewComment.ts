import { useQuery } from '@tanstack/react-query';

import { api } from '@/apis';

type CommentRequestParams = {
  isMyGoal: boolean;
  goalId: number;
  enabled: boolean;
};

type CommentResponse = boolean;

export const useGetHasNewComment = ({ goalId, isMyGoal, enabled }: CommentRequestParams) => {
  return useQuery<CommentResponse>({
    queryKey: ['comment', 'new', goalId],
    queryFn: () => api.get<CommentResponse>(`/goal/${goalId}/comment/new`),
    enabled: (goalId !== -1 || isMyGoal) && enabled,
    staleTime: 1000,
  });
};
