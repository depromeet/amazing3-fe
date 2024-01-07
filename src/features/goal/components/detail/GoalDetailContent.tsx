'use client';

import { useGetGoal } from '@/hooks/reactQuery/goal';

import DetailLayout from './DetailLayout';
import { ContentBody, DetailFooterButton, DetailHeader, Sticker } from '.';

export const GoalDetailContent = ({ id }: { id: number }) => {
  const { data: goal } = useGetGoal({ goalId: Number(id) });

  return (
    <DetailLayout
      header={<DetailHeader goalId={id} />}
      sticker={goal && <Sticker stickerUrl={goal.stickerUrl} />}
      body={
        goal && (
          <ContentBody title={goal.title} date={goal.deadline} tag={goal.tagInfo.tagContent} more={goal.description} />
        )
      }
      footer={<DetailFooterButton />}
    />
  );
};

export default GoalDetailContent;
