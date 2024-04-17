import { Suspense, useEffect } from 'react';
import { useSetAtom } from 'jotai';

import { Loading, Skeleton } from '@/components';

import { goalIdAtom } from './atom';
import { CommentBottomSheetContent as Content } from './Content';
import { CommentBottomSheetHeader as Header } from './Header';
import { CommentBottomSheetLayout } from './Layout';

interface CommentsBottomSheetProps {
  goalId: number;
  open: boolean;
  onClose: VoidFunction;
}

export const CommentsBottomSheet = ({ goalId, ...props }: CommentsBottomSheetProps) => {
  const setGoalIdAtom = useSetAtom(goalIdAtom);

  useEffect(() => setGoalIdAtom(goalId), []);

  return (
    <CommentBottomSheetLayout
      header={
        <Suspense fallback={<Skeleton className="w-[103px] h-[28px]" />}>
          <Header />
        </Suspense>
      }
      {...props}
    >
      <Suspense
        fallback={
          <div className="w-full flex justify-center">
            <Loading className="w-[300px]" />
          </div>
        }
      >
        <Content />
      </Suspense>
    </CommentBottomSheetLayout>
  );
};
