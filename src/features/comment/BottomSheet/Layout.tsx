import { type PropsWithChildren, useRef } from 'react';
import type { BottomSheetRef } from 'react-spring-bottom-sheet';
import { useAtomValue } from 'jotai';

import { BottomSheet } from '@/components';
import type { BottomSheetProps } from '@/components/atoms/bottomSheet/BottomSheet';

import { AddCommentInput } from '../AddCommentInput';

import { goalIdAtom } from './atom';

import './styles/CommentBottomSheetLayout.styles.css';

export interface CommentBottomSheetLayoutProps extends Omit<BottomSheetProps, 'title'> {
  open: boolean;
  onClose: VoidFunction;
}

export const CommentBottomSheetLayout = ({
  open,
  onClose,
  children,
  ...props
}: PropsWithChildren<CommentBottomSheetLayoutProps>) => {
  const goalId = useAtomValue(goalIdAtom);
  const sheetRef = useRef<BottomSheetRef | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleFocusInput = () => {
    sheetRef.current?.snapTo(({ maxHeight }) => maxHeight * 0.55);
  };

  const handleBlurInput = () => {
    sheetRef.current?.snapTo(({ maxHeight }) => maxHeight * 0.99);
  };

  return (
    <BottomSheet
      className="commentBottomSheet"
      ref={sheetRef}
      open={open}
      onDismiss={onClose}
      FooterComponent={
        <AddCommentInput ref={inputRef} goalId={goalId} onFocus={handleFocusInput} onBlur={handleBlurInput} />
      }
      defaultSnap={({ maxHeight }) => maxHeight * 0.55}
      snapPoints={({ maxHeight }) => [maxHeight * 0.55, maxHeight * 0.99]}
      {...props}
    >
      <div className="w-full h-full flex flex-col justify-start px-xs mt-6xs flex-1">{children}</div>
    </BottomSheet>
  );
};
