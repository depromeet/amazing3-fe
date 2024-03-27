import { BottomSheet, Button, Typography } from '@/components';
import { useDeleteComment } from '@/hooks/reactQuery/comment';

interface DeleteCommentBottomSheetProps {
  open: boolean;
  onClose: VoidFunction;
  goalId: number;
  commentId: number;
}

export const DeleteCommentBottomSheet = ({ open, onClose, goalId, commentId }: DeleteCommentBottomSheetProps) => {
  return (
    <BottomSheet
      open={open}
      onDismiss={onClose}
      fixedMaxHeight={150}
      FooterComponent={<Footer goalId={goalId} commentId={commentId} onClose={onClose} />}
    >
      <Typography type="title2" className="w-full text-left px-xs pt-3xs">
        댓글을 삭제하시겠어요?
      </Typography>
    </BottomSheet>
  );
};

const Footer = ({ goalId, commentId, onClose }: { goalId: number; commentId: number; onClose: VoidFunction }) => {
  const { mutate } = useDeleteComment();

  const handleDelete = () => {
    mutate({ goalId, commentId });
    onClose();
  };

  return (
    <Button variant="issue" onClick={handleDelete}>
      삭제하기
    </Button>
  );
};
