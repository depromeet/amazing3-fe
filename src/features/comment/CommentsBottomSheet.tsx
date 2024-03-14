import { useOverlay } from '@toss/use-overlay';
import { AnimatePresence } from 'framer-motion';

import { Comment } from '@/components';
import { useGetComment } from '@/hooks/reactQuery/comment';

import { CommentBottomSheetLayout } from './CommentBottomSheetLayout';
import { DeleteCommentBottomSheet } from './DeleteCommentBottomSheet';
import { EmptyComments } from './EmptyComments';

interface CommentsBottomSheetProps {
  goalId: number;
  open: boolean;
  onClose: VoidFunction;
}

export const CommentsBottomSheet = ({ goalId, ...props }: CommentsBottomSheetProps) => {
  const { open } = useOverlay();
  const { data } = useGetComment({ goalId });

  // TODO: 응답값에 필드 추가되면 교체
  const isMyGoal = true;

  const handleDelete = (commentId: number) => () => {
    open(({ isOpen, close }) => (
      <DeleteCommentBottomSheet goalId={goalId} open={isOpen} onClose={close} commentId={commentId} />
    ));
  };

  return (
    <CommentBottomSheetLayout total={data?.commentCount || 0} goalId={goalId} {...props}>
      {data && data?.commentCount ? (
        <div className="h-[360px] overflow-y-auto">
          <AnimatePresence>
            {data.comments.map((comment) => (
              <div className="flex flex-col gap-3xs mb-3xs" key={comment.id}>
                <Comment
                  {...comment}
                  isDeletable={isMyGoal || comment.isMyComment}
                  onDelete={handleDelete(comment.id)}
                />
                <div className="h-[1px] bg-gray-20" />
              </div>
            ))}
          </AnimatePresence>
        </div>
      ) : (
        <EmptyComments />
      )}
    </CommentBottomSheetLayout>
  );
};
