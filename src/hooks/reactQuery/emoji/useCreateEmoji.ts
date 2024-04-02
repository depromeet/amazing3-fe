import { useMutation, useQueryClient } from '@tanstack/react-query';

import { api } from '@/apis';

type EmojiRequestParams = {
  goalId: number;
  emojiId: number;
};

export const useCreateEmoji = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ goalId, emojiId }: EmojiRequestParams) => api.post(`/goal/${goalId}/emoji/${emojiId}`),
    onSuccess: (_, { goalId }) => queryClient.invalidateQueries({ queryKey: ['emoji', goalId] }),
  });
};
