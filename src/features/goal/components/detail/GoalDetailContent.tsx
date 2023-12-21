import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSetAtom } from 'jotai';

import { useGetGoal } from '@/hooks/reactQuery/goal';

import { goalAtom } from './atom';
import DetailLayout from './DetailLayout';
import { ContentBody, DetailFooterButton, DetailHeader, Sticker } from '.';

export const GoalDetailContent = ({ id }: { id: number }) => {
  const router = useRouter();
  const { data: goal, isError } = useGetGoal({ goalId: Number(id) });
  const setGoalData = useSetAtom(goalAtom);

  useEffect(() => {
    if (goal) {
      const { title, deadline, tagInfo, stickerUrl, description } = goal;

      setGoalData({
        id: Number(id),
        title,
        deadline,
        stickerUrl,
        tag: tagInfo.tagContent,
        description,
      });
    }

    if (isError) {
      window.alert('목표 조회에 실패했습니다.');
      router.push('/home');
    }
  }, [goal, id, isError, router, setGoalData]);

  return (
    <DetailLayout
      header={<DetailHeader />}
      sticker={<Sticker />}
      body={<ContentBody />}
      footer={<DetailFooterButton />}
    />
  );
};

export default GoalDetailContent;
