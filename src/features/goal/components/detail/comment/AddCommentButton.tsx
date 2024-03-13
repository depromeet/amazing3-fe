import type { ButtonHTMLAttributes } from 'react';
import { useOverlay } from '@toss/use-overlay';
import { useAtomValue } from 'jotai';

import BlueCommentIcon from '@/assets/icons/blue-comment-icon.svg';
import { CommentsBottomSheet } from '@/features/comment';
import { goalIdAtom } from '@/features/goal/atoms';

interface AddCommentButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  hasUnreadComments?: boolean;
}

export const AddCommentButton = ({ hasUnreadComments, ...props }: AddCommentButtonProps) => {
  const { open } = useOverlay();
  const goalId = useAtomValue(goalIdAtom);

  const handleOpenComments = () => {
    open(({ isOpen, close }) => <CommentsBottomSheet open={isOpen} onClose={close} goalId={goalId} />);
  };

  return (
    <div className="relative">
      <button
        className="w-[48px] h-[48px] bg-white rounded-full shadow-button flex items-center justify-center"
        onClick={handleOpenComments}
        {...props}
      >
        <BlueCommentIcon />
      </button>
      {hasUnreadComments && <span className="absolute top-0 right-0 w-[14px] h-[14px] rounded-full bg-red-30" />}
    </div>
  );
};
