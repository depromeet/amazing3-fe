import type { MutableRefObject } from 'react';
import { forwardRef, useEffect } from 'react';

import { Input, type InputProps } from '@/components/atoms/input/Input';
import { useInput } from '@/hooks';
import { useCreateComment } from '@/hooks/reactQuery/comment';

interface AddCommentInputProps extends InputProps {
  goalId: number;
}

export const COMMENT_MAX_LENGTH = 30;

export const AddCommentInput = forwardRef<HTMLInputElement, AddCommentInputProps>(
  ({ goalId, ...props }: AddCommentInputProps, ref) => {
    const { value: comment, handleChange: handleComment, reset } = useInput('');
    const { mutate } = useCreateComment();

    const handleFocusAction = () => (ref as MutableRefObject<HTMLInputElement>).current?.focus();

    const handleSubmit = () => {
      mutate({ goalId, content: comment });
      reset();
      handleFocusAction();
    };

    useEffect(() => handleFocusAction(), []);

    return (
      <Input
        ref={ref}
        value={comment}
        onChange={handleComment}
        placeholder="댓글 작성하기"
        maxLength={COMMENT_MAX_LENGTH}
        includeSubmitButton
        onSubmit={handleSubmit}
        {...props}
      />
    );
  },
);

AddCommentInput.displayName = 'AddCommentInput';
