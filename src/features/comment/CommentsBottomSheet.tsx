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

  const handleDelete = (commentId: number) => () => {
    open(({ isOpen, close }) => (
      <DeleteCommentBottomSheet goalId={goalId} open={isOpen} onClose={close} commentId={commentId} />
    ));
  };

  return (
    <CommentBottomSheetLayout total={data?.commentCount || 0} goalId={goalId} {...props}>
      {data && data?.commentCount ? (
        <div className="h-full overflow-y-auto">
          <AnimatePresence>
            {data.comments.map((comment) => (
              <div className="flex flex-col gap-3xs" key={comment.id}>
                <Comment
                  {...comment}
                  isDeletable={data.isMyGoal || comment.isMyComment}
                  onDelete={handleDelete(comment.id)}
                />
                <div className="h-[1px] bg-gray-20 mb-3xs" />
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
