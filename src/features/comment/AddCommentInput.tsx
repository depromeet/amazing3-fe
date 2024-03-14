import { useRef } from 'react';

import { Input, type InputProps } from '@/components/atoms/input/Input';
import { useInput } from '@/hooks';
import { useCreateComment } from '@/hooks/reactQuery/comment';

interface AddCommentInputProps extends InputProps {
  goalId: number;
}

export const COMMENT_MAX_LENGTH = 30;

export const AddCommentInput = ({ goalId, ...props }: AddCommentInputProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { value: comment, handleChange: handleComment, reset } = useInput('');
  const { mutate } = useCreateComment();

  const handleSubmit = () => {
    mutate({ goalId, content: comment });
    reset();
    inputRef.current?.focus();
  };

  return (
    <Input
      ref={inputRef}
      value={comment}
      onChange={handleComment}
      placeholder="댓글 작성하기"
      maxLength={COMMENT_MAX_LENGTH}
      includeSubmitButton
      onSubmit={handleSubmit}
      {...props}
    />
  );
};
