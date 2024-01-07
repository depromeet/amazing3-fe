'use client';
import { useSearchParams } from 'next/navigation';

import { ContentBody, SavedFooterButton, SavedHeader, Sticker } from '@/features/goal/components';
import DetailLayout from '@/features/goal/components/detail/DetailLayout';
import { useGetGoal } from '@/hooks/reactQuery/goal';

// TODO: 추후 GoalDetailPage와 합칠 예정
const GoalSavedPage = () => {
  const id = useSearchParams().get('id');
  const { data: goal } = useGetGoal({ goalId: Number(id) });

  return (
    <DetailLayout
      header={<SavedHeader />}
      sticker={goal && <Sticker stickerUrl={goal.stickerUrl} />}
      body={
        goal && (
          <ContentBody title={goal.title} date={goal.deadline} tag={goal.tagInfo.tagContent} more={goal.description} />
        )
      }
      footer={<SavedFooterButton />}
    />
  );
};

export default GoalSavedPage;
