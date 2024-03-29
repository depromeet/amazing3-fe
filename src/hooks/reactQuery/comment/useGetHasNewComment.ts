import { useQuery } from '@tanstack/react-query';

import { api } from '@/apis';

type CommentRequestParams = {
  isMyGoal: boolean;
  goalId: number;
};

type CommentResponse = boolean;

export const useGetHasNewComment = ({ goalId, isMyGoal }: CommentRequestParams) => {
  return useQuery<CommentResponse>({
    queryKey: ['comment', 'new', goalId],
    queryFn: () => api.get<CommentResponse>(`/goal/${goalId}/comment/new`),
    enabled: goalId !== -1 || isMyGoal,
    staleTime: 1000,
  });
};
