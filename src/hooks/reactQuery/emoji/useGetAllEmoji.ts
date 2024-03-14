import { useQuery, useQueryClient } from '@tanstack/react-query';

import { api } from '@/apis';

export type EmojisResponse = Emoji[];

export type Emoji = {
  id: number;
  name: string;
  url: string;
};

export const useGetAllEmoji = () => {
  return useQuery<EmojisResponse>({
    queryKey: ['all-emoji'],
    queryFn: () => api.get<EmojisResponse>('/emoji'),
  });
};

export const usePrefetchAllEmoji = () => {
  const queryClient = useQueryClient();
  queryClient.prefetchQuery({
    queryKey: ['all-emoji'],
    queryFn: () => api.get<EmojisResponse>('/emoji'),
  });
};
