import { type PropsWithChildren, useEffect, useRef } from 'react';
import type { BottomSheetRef } from 'react-spring-bottom-sheet';
import { useAtomValue } from 'jotai';

import { BottomSheet } from '@/components';
import type { BottomSheetProps } from '@/components/atoms/bottomSheet/BottomSheet';
import { isIOS } from '@/utils/isIos';

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

  const overlayRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleFocusInput = () => {
    sheetRef.current?.snapTo(({ maxHeight }) => maxHeight * 0.55);

    /**
     * NOTE
     * IOS에서 Visual Viewport가 존재하여
     * viewport가 아닌 document 자체를 키보드 높이 만큼 올려버림
     * 참고 이미지:  https://velog.velcdn.com/images/gene028/post/acd8332c-9465-4b0e-94c9-469fe4e7056f/image.png
     */
    if (isIOS()) {
      overlayRef.current = document.querySelector('[data-rsbs-overlay]') as HTMLDivElement;

      overlayRef.current.style.bottom = '15px'; // 키패드 높이 만큼 올라감
      overlayRef.current.style.height = '100%';
      overlayRef.current.style.paddingBottom = '65%';
    }
  };

  const handleBlur = () => {
    if (overlayRef.current) {
      // Revert to the original state
      overlayRef.current.style.bottom = '';
      overlayRef.current.style.height = '';
      overlayRef.current.style.paddingBottom = '';
    }
  };

  useEffect(() => {
    if (isIOS()) {
      inputRef.current?.addEventListener('blur', handleBlur);

      return () => {
        inputRef.current?.removeEventListener('blur', handleBlur);
      };
    }
  }, []);

  return (
    <BottomSheet
      className="commentBottomSheet"
      ref={sheetRef}
      open={open}
      onDismiss={onClose}
      FooterComponent={<AddCommentInput ref={inputRef} goalId={goalId} onFocus={handleFocusInput} />}
      defaultSnap={({ maxHeight }) => maxHeight * 0.55}
      snapPoints={({ maxHeight }) => [maxHeight * 0.55, maxHeight * 0.99]}
      {...props}
    >
      <div className="w-full h-full flex flex-col justify-start px-xs mt-6xs flex-1">{children}</div>
    </BottomSheet>
  );
};
