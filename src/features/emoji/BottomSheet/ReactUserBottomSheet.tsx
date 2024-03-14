import { Root as TabsRoot } from '@radix-ui/react-tabs';

import { BottomSheet } from '@/components';
import { useGetEmojiByGoal } from '@/hooks/reactQuery/emoji';

import { Content } from './Content';
import { Header } from './Header';

interface ReactUserBottomSheetProps {
  goalId: number;
  open: boolean;
  onClose: VoidFunction;
}

export const ReactUserBottomSheet = ({ goalId, open, onClose }: ReactUserBottomSheetProps) => {
  const { data } = useGetEmojiByGoal({ goalId });

  return (
    <BottomSheet open={open} onDismiss={onClose} fixedMaxHeight={450}>
      {data && (
        <TabsRoot>
          <Header totalReactedEmojisCount={data?.totalReactedEmojisCount} reactedEmojis={data?.reactedEmojis} />
          <Content reactedEmojis={data.reactedEmojis} />
        </TabsRoot>
      )}
    </BottomSheet>
  );
};
