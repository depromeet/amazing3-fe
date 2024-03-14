import { useMutation } from '@tanstack/react-query';

import { api } from '@/apis';
import type { MemberProps } from '@/features/member/types';

import { useOptimisticUpdate } from '../useOptimisticUpdate';

import type { EmojiResponse } from './useGetEmojiByGoal';

type EmojiRequestParams = {
  goalId: number;
  emojiId: number;
};

export const useDeleteReactedEmoji = () => {
  const { queryClient, optimisticUpdater } = useOptimisticUpdate();

  return useMutation({
    mutationFn: ({ goalId, emojiId }: EmojiRequestParams) => api.delete(`/goal/${goalId}/emoji/${emojiId}`),
    onMutate: async ({ goalId, emojiId }) => {
      const targetQueryKey = ['emoji', goalId];

      const updater = (old: EmojiResponse): EmojiResponse => {
        return {
          ...old,
          totalReactedEmojisCount: old.totalReactedEmojisCount - 1,
          latestReactUserNickname: '반디',
          reactedEmojis: old.reactedEmojis
            .map((emoji) => {
              if (emoji.id !== emojiId) return emoji; // 해당되지 않는 이모지는 그대로 반환

              // 쿼리 클라이언트에서 사용자 데이터를 가져오는 부분은 한 번만 호출
              const myUsername = queryClient.getQueryData<MemberProps>(['memberData'])?.username;

              // 이모지 반응 업데이트
              const updatedEmoji = {
                ...emoji,
                reactCount: emoji.reactCount - 1,
                isMyReaction: false,
                reactUsers: emoji.reactUsers.filter((user) => user.username !== myUsername),
              };

              return updatedEmoji;
            })
            // reactCount가 0이 아닌 이모지만 필터링
            .filter((emoji) => emoji.reactCount > 0),
        };
      };
      const context = await optimisticUpdater({ queryKey: targetQueryKey, updater });
      return context;
    },
    onError: (_, variable, context) => {
      const targetQueryKey = ['emoji', variable.goalId];
      queryClient.setQueryData(targetQueryKey, context?.previous);
    },
  });
};
