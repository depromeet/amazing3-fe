import { useQuery } from '@tanstack/react-query';

import { api } from '@/apis';

type TagResponse = Array<{
  id: number;
  content: string;
}>;

export const useGetTags = () => {
  return useQuery<TagResponse>({
    queryKey: ['tags'],
    queryFn: () => api.get<TagResponse>('/tag'),
  });
};
