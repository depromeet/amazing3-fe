import { useQuery } from '@tanstack/react-query';

import { api } from '@/apis';

type CommentRequestParams = {
  goalId: number;
};

export type CommentResponse = {
  isMyGoal: boolean;
  comments: CommentProps[];
  commentCount: number;
};

type CommentProps = {
  id: number;
  content: string;
  writtenAt: string;
  commenter: CommenterProps;
  isMyComment: boolean;
};

type CommenterProps = {
  username: string;
  nickname: string;
  image: string;
};

export const useGetComment = ({ goalId }: CommentRequestParams) => {
  return useQuery<CommentResponse>({
    queryKey: ['comment', goalId],
    queryFn: () => api.get<CommentResponse>(`/goal/${goalId}/comment`),
    staleTime: 1000,
  });
};
