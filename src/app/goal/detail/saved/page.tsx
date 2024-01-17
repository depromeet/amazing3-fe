'use client';
import { useSearchParams } from 'next/navigation';

import { ContentBody, SavedFooterButton, SavedHeader, Sticker } from '@/features/goal/components';
import DetailLayout from '@/features/goal/components/detail/DetailLayout';
import { useGetGoal } from '@/hooks/reactQuery/goal';
import { usePrefetchGoals } from '@/hooks/reactQuery/goal/useGetGoals';

// TODO: 추후 GoalDetailPage와 합칠 예정
const GoalSavedPage = () => {
  const id = Number(useSearchParams().get('id'));
  const { data: goal } = useGetGoal({ goalId: id });
  usePrefetchGoals();

  return (
    goal && (
      <DetailLayout
        header={<SavedHeader goalId={id} />}
        sticker={<Sticker stickerUrl={goal.stickerUrl} />}
        body={
          <ContentBody title={goal.title} date={goal.deadline} tag={goal.tagInfo.tagContent} more={goal.description} />
        }
        footer={<SavedFooterButton goalId={id} />}
      />
    )
  );
};

export default GoalSavedPage;
