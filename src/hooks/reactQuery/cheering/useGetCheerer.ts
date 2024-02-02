import { useInfiniteQuery } from '@tanstack/react-query';

import { api } from '@/apis';
import { useGetMemberData } from '@/hooks/reactQuery/auth/useGetMemberData';
import { createQueryString } from '@/utils/queryString';

export type CheererResponse = {
  contents: {
    userId: number;
    userName: string;
    userNickName: string;
    userImageUrl: string;
    cheeringAt: string;
  }[];
  isLastPage: boolean;
  total: number;
};

const PAGE_SIZE = 20;

export const useGetCheerer = () => {
  const { data: my } = useGetMemberData();

  return useInfiniteQuery<CheererResponse>({
    queryKey: ['cheerer', my?.lifeMap.lifeMapId],
    queryFn: ({ pageParam }) => {
      const queryString = createQueryString({
        pageSize: PAGE_SIZE,
        lastCursorAt: pageParam,
      });
      return api.get<CheererResponse>(`/cheering/squad/${my?.lifeMap.lifeMapId}?${queryString}`);
    },
    initialPageParam: null,
    getNextPageParam: ({ isLastPage, contents }) => (isLastPage ? null : contents[contents.length - 1].cheeringAt),
  });
};
