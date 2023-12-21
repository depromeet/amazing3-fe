'use client';

import { ContentBody, SavedFooterButton, SavedHeader, Sticker } from '@/features/goal/components';
import DetailLayout from '@/features/goal/components/detail/DetailLayout';

const GoalSavedPage = () => {
  return (
    <DetailLayout
      header={<SavedHeader />}
      sticker={<Sticker />}
      body={<ContentBody />}
      footer={<SavedFooterButton />}
    />
  );
};

export default GoalSavedPage;
