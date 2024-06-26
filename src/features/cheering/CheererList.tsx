'use client';

import { InfiniteScroller } from '@/components/molecules';
import { useGetCheerer } from '@/hooks/reactQuery/cheering';
import { generateId } from '@/utils/generateId';

import { Cheerer } from './Cheerer';
import { CheererCount } from './CheererCount';
import { EmptyCheerer } from './EmptyCheerer';

export const CheererList = () => {
  const { data: cheererList, fetchNextPage, hasNextPage } = useGetCheerer();

  if (cheererList?.pages[0].contents.length === 0) return <EmptyCheerer />;

  return (
    <>
      <CheererCount count={cheererList?.pages[0].total} />

      <InfiniteScroller isLastPage={!hasNextPage} onIntersect={() => fetchNextPage()}>
        <div className="flex flex-col gap-6xs mx-[24px] h-[calc(100dvh - 80px)]">
          {cheererList?.pages.map((page) =>
            page.contents.map(({ ...props }) => <Cheerer key={generateId()} {...props} />),
          )}
        </div>
      </InfiniteScroller>
    </>
  );
};
