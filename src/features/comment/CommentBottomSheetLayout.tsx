import { type PropsWithChildren, useRef } from 'react';
import type { BottomSheetRef } from 'react-spring-bottom-sheet';

import { BottomSheet, Typography } from '@/components';
import type { BottomSheetProps } from '@/components/atoms/bottomSheet/BottomSheet';

import { AddCommentInput } from './AddCommentInput';

import './styles/CommentBottomSheetLayout.styles.css';

export interface HeaderProps {
  total: number;
}

export interface CommentBottomSheetLayoutProps extends Omit<BottomSheetProps, 'title'>, HeaderProps {
  goalId: number;
  open: boolean;
  onClose: VoidFunction;
}

export const CommentBottomSheetLayout = ({
  goalId,
  open,
  onClose,
  total,
  children,
  ...props
}: PropsWithChildren<CommentBottomSheetLayoutProps>) => {
  const sheetRef = useRef<BottomSheetRef | null>(null);

  const handleFocusInput = () => {
    sheetRef.current?.snapTo(({ maxHeight }) => maxHeight * 0.99);
  };

  return (
    <BottomSheet
      ref={sheetRef}
      open={open}
      onDismiss={onClose}
      HeaderComponent={<Header total={total} />}
      FooterComponent={<AddCommentInput goalId={goalId} onFocus={handleFocusInput} />}
      defaultSnap={({ maxHeight }) => maxHeight * 0.99}
      snapPoints={({ maxHeight }) => [maxHeight / 2, maxHeight * 0.99]}
      {...props}
    >
      <div className="w-full flex flex-col px-xs mt-6xs">{children}</div>
    </BottomSheet>
  );
};

const Header = ({ total }: HeaderProps) => {
  return (
    <div className="flex gap-5xs items-center">
      <Typography type="heading3">댓글</Typography>
      <Typography type="body3" className="text-gray-40">
        {total}개
      </Typography>
    </div>
  );
};
