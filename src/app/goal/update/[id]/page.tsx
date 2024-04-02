'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import GoalUpdateForm from '@/features/goal/components/update/GoalUpdateForm';
import { useGetGoal } from '@/hooks/reactQuery/goal';

interface ParamsProps {
  params: {
    id: string;
  };
}

const UpdateGoalPage = ({ params }: ParamsProps) => {
  const goalId = +params['id'];
  const { data: goal } = useGetGoal({ goalId });
  const router = useRouter();

  useEffect(() => {
    if (goal?.isMyGoal === false) {
      router.push(`/goal/detail/${goalId}`);
    }
  }, [goal, goalId, router]);

  return goal?.isMyGoal && <GoalUpdateForm goalId={goalId} goal={goal} />;
};

export default UpdateGoalPage;
