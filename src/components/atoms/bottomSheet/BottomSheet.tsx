import React, { forwardRef } from 'react';
import type { BottomSheetProps as BaseBottomSheetProps } from 'react-spring-bottom-sheet';
import { BottomSheet as BaseBottomSheet } from 'react-spring-bottom-sheet';
import type { RefHandles } from 'react-spring-bottom-sheet/dist/types';

import 'react-spring-bottom-sheet/dist/style.css';
import './style.css';

export interface BottomSheetProps extends BaseBottomSheetProps {
  HeaderComponent?: React.ReactNode;
  FooterComponent?: React.ReactNode;
  BodyComponent: React.ReactNode;
}

export const BottomSheet = forwardRef<RefHandles, BottomSheetProps>(
  ({ open, onDismiss, HeaderComponent, FooterComponent, BodyComponent, ...props }: BottomSheetProps, ref) => {
    return (
      <BaseBottomSheet
        {...props}
        ref={ref}
        open={open}
        onDismiss={onDismiss}
        snapPoints={({ maxHeight }) => maxHeight - maxHeight / 5}
        expandOnContentDrag
        header={HeaderComponent}
        footer={FooterComponent}
      >
        {BodyComponent}
      </BaseBottomSheet>
    );
  },
);
BottomSheet.displayName = 'BottomSheet';
