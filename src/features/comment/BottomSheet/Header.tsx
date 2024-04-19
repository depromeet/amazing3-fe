import { useAtomValue } from 'jotai';

import { Typography } from '@/components';
import { useGetComment } from '@/hooks/reactQuery/comment';

import { goalIdAtom } from './atom';

export const CommentBottomSheetHeader = () => {
  const goalId = useAtomValue(goalIdAtom);
  const { data } = useGetComment({ goalId });

  return (
    <div className="flex gap-5xs items-center">
      <Typography type="heading3">댓글</Typography>
      <Typography type="body3" className="text-gray-40">
        {data?.commentCount}개
      </Typography>
    </div>
  );
};
