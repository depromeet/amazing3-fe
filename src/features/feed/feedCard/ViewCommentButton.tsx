import type { ButtonHTMLAttributes } from 'react';
import { useOverlay } from '@toss/use-overlay';
import { useAtomValue } from 'jotai';

import CommentIcon from '@/assets/icons/comment-icon.svg';
import { Typography } from '@/components';
import { CommentsBottomSheet } from '@/features/comment';
import { goalIdAtom } from '@/features/goal/atoms';

interface CommentButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  numberOfComments: number;
}

export const ViewCommentButton = ({ numberOfComments, ...props }: CommentButtonProps) => {
  const { open } = useOverlay();
  const goalId = useAtomValue(goalIdAtom);

  const handleOpenComments = () => {
    open(({ isOpen, close }) => <CommentsBottomSheet open={isOpen} onClose={close} goalId={goalId} />);
  };

  return (
    <div>
      <button className="flex gap-6xs items-center" onClick={handleOpenComments} {...props}>
        <CommentIcon />
        <Typography type="title4" className="text-gray-40">
          {numberOfComments > 0 ? `${numberOfComments}개의 댓글` : '댓글 작성하기'}
        </Typography>
      </button>
    </div>
  );
};
