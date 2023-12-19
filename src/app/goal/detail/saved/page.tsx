'use client';

import { ContentBody, SavedFooterButton, SavedHeader, Sticker } from '@/features/goal/components';

import CustomLayout from '../customLayout';

const GoalSavedPage = () => {
  return (
    <CustomLayout
      header={<SavedHeader />}
      sticker={<Sticker />}
      body={<ContentBody />}
      footer={<SavedFooterButton />}
    />
  );
};

export default GoalSavedPage;
