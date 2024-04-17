import { type PropsWithChildren, useEffect, useRef, useState } from 'react';
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
  const [isFirstOpen, setFirstOpen] = useState(true);
  const sheetRef = useRef<BottomSheetRef | null>(null);

  const overlayRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const handleBlur = () => {
      if (overlayRef.current) {
        setFirstOpen(false);

        // 원래 상태로 복구
        overlayRef.current.style.bottom = '';
        overlayRef.current.style.height = '';
        overlayRef.current.style.paddingBottom = '';
      }
    };
    if (open && isIOS() && isFirstOpen) {
      // open 상태가 true로 변경된 후에, 오버레이를 찾기 위해 약간의 지연
      const timer = setTimeout(() => {
        overlayRef.current = document.querySelector('[data-rsbs-overlay]') as HTMLDivElement;

        overlayRef.current.style.bottom = '15px'; // 키패드 높이 만큼 올라감
        overlayRef.current.style.height = '100%';
        overlayRef.current.style.paddingBottom = '65%';

        inputRef.current?.addEventListener('blur', handleBlur);
      }, 300);

      return () => {
        clearTimeout(timer);
        inputRef.current?.removeEventListener('blur', handleBlur);
      };
    }
  }, [isFirstOpen, open]);

  const handleFocusInput = () => {
    sheetRef.current?.snapTo(({ maxHeight }) => maxHeight * 0.55);
  };

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
