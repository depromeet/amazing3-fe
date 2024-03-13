import { useQuery } from '@tanstack/react-query';

import { api } from '@/apis';

type EmojiRequestParams = {
  goalId: number;
};

export type EmojiResponse = {
  totalReactedEmojisCount: number;
  latestReactUserNickname: string;
  reactedEmojis: ReactedEmojisProps[];
};

type ReactedEmojisProps = {
  id: number;
  name: string;
  url: string;
  reactCount: number;
  isMyReaction: boolean;
  reactUsers: ReactUserProps[];
};

type ReactUserProps = {
  username: string;
  nickname: string;
  image: string;
};

export const useGetEmojiByGoal = ({ goalId }: EmojiRequestParams) => {
  return useQuery<EmojiResponse>({
    queryKey: ['emoji', goalId],
    queryFn: () => api.get<EmojiResponse>(`/goal/${goalId}/emoji`),
  });
};
