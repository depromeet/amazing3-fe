import { useInfiniteQuery } from '@tanstack/react-query';

import { api } from '@/apis';
import { useGetMemberData } from '@/hooks/reactQuery/auth/useGetMemberData';

export type CheererResponse = {
  contents: {
    cheererId: number;
    userId: number;
    userName: string;
    userNickName: string;
    userImageUrl: string;
    cheeringAt: string;
    cursorId: number;
  }[];
  isLast: boolean;
  nextCursor: number;
  total: number;
};

const PAGE_SIZE = 20;

export const useGetCheerer = () => {
  const { data: my } = useGetMemberData();

  return useInfiniteQuery<CheererResponse>({
    queryKey: ['cheerer', my?.lifeMap.lifeMapId],
    queryFn: ({ pageParam }) => {
      return api.get<CheererResponse>(`/cheering/squad/${my?.lifeMap.lifeMapId}`, {
        params: { cursor: pageParam, size: PAGE_SIZE },
      });
    },
    initialPageParam: null,
    getNextPageParam: ({ isLast, nextCursor }) => (isLast ? null : nextCursor),
    enabled: my?.lifeMap.lifeMapId !== undefined,
  });
};
