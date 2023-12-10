import React, { forwardRef } from 'react';
import type { RefHandles } from 'react-spring-bottom-sheet/dist/types';

import 'react-spring-bottom-sheet/dist/style.css';
import './style.css';

type ForwardedRef = React.ForwardedRef<RefHandles>;
import { BottomSheet as BaseBottomSheet } from 'react-spring-bottom-sheet';

export type BottomSheetProps = {
  open: boolean;
  onDismiss: () => void;
  HeaderComponent?: React.ReactNode;
  FooterComponent?: React.ReactNode;
  BodyComponent: React.ReactNode;
};

export const BottomSheet = forwardRef(
  (
    { open, onDismiss, HeaderComponent, FooterComponent, BodyComponent, ...props }: BottomSheetProps,
    ref: ForwardedRef,
  ) => {
    return (
      <BaseBottomSheet
        {...props}
        ref={ref}
        open={open}
        onDismiss={onDismiss}
        snapPoints={({ height, minHeight, maxHeight }) => [
          maxHeight - maxHeight / 5,
          Math.min(Math.max(height, minHeight), maxHeight * 0.525),
        ]}
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
