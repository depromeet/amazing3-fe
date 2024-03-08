'use client';

import { Root as TabsRoot } from '@radix-ui/react-tabs';

import { BottomSheet } from '@/components';

import { Content } from './Content';
import { Header } from './Header';

interface ReactUserBottomSheetProps {
  open: boolean;
  onClose: VoidFunction;
}

export const ReactUserBottomSheet = ({ open, onClose }: ReactUserBottomSheetProps) => {
  const data = {
    totalReactedEmojisCount: 1000,
    reactedEmojis: [
      {
        id: 1,
        name: '좋아요',
        url: 'https://github.com/depromeet/amazing3-fe/assets/112946860/8f87efc3-ec65-4650-b763-74501bc2e1c0',
        reactCount: 1000,
        reactUsers: [
          {
            username: 'BANDIBOODI-10',
            image: 'https://github.com/depromeet/amazing3-fe/assets/112946860/0ab4b6f0-ebaf-4212-a79a-edf0f50a5d62',
            nickname: '누민경',
          },
        ],
      },
    ],
  };

  return (
    <BottomSheet open={open} onDismiss={onClose} fixedMaxHeight={450}>
      <TabsRoot>
        <Header {...data} />
        <Content reactedEmojis={data.reactedEmojis} />
      </TabsRoot>
    </BottomSheet>
  );
};
