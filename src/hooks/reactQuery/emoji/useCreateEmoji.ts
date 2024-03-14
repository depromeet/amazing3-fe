import { useMutation } from '@tanstack/react-query';

import { api } from '@/apis';
import type { MemberProps } from '@/features/member/types';

import { useOptimisticUpdate } from '../useOptimisticUpdate';

import type { Emoji, EmojisResponse } from './useGetAllEmoji';
import type { EmojiResponse } from './useGetEmojiByGoal';

type EmojiRequestParams = {
  goalId: number;
  emojiId: number;
};

export const useCreateEmoji = () => {
  const { queryClient, optimisticUpdater } = useOptimisticUpdate();

  return useMutation({
    mutationFn: ({ goalId, emojiId }: EmojiRequestParams) => api.post(`/goal/${goalId}/emoji/${emojiId}`),
    onMutate: async ({ goalId, emojiId }) => {
      const targetQueryKey = ['emoji', goalId];
      const my = queryClient.getQueryData(['memberData']) as MemberProps;

      const updater = (old: EmojiResponse): EmojiResponse => {
        // 모든 이모지 데이터에서 현재 반응하려는 이모지 데이터를 찾음
        const reactEmojiData = queryClient
          .getQueryData<EmojisResponse>(['all-emoji'])
          ?.find((emoji) => emoji.id === emojiId) as Emoji;

        // 반응하려는 이모지가 이미 존재하는지
        const exists = old.reactedEmojis.some((emoji) => emoji.id === emojiId);

        // 이모지 종류 별 최초의 이모지의 경우, default 구조 준비
        const defaultReactEmoji = {
          ...reactEmojiData,
          reactCount: 0,
          isMyReaction: false,
          reactUsers: [],
        };

        const addedReactedEmojis = exists ? [...old.reactedEmojis] : [...old.reactedEmojis, defaultReactEmoji];

        const updatedReactedEmojis = addedReactedEmojis.map((emoji) =>
          emoji.id === emojiId
            ? {
                ...emoji,
                reactCount: emoji.reactCount + 1,
                isMyReaction: true,
                reactUsers: [my, ...emoji.reactUsers],
              }
            : emoji,
        );

        return {
          totalReactedEmojisCount: old.totalReactedEmojisCount + 1,
          latestReactUserNickname: my.nickname,
          reactedEmojis: updatedReactedEmojis,
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
