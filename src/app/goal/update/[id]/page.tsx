import React from 'react';

import GoalUpdateForm from '@/features/goal/components/update/GoalUpdateForm';
import GoalUpdateHeader from '@/features/goal/components/update/GoalUpdateHeader';

interface ParamsProps {
  params: {
    id: string;
  };
}

const UpdateGoalPage = ({ params }: ParamsProps) => {
  const goalId = +params['id'];

  return (
    <>
      <GoalUpdateHeader />
      <GoalUpdateForm goalId={goalId} />
    </>
  );
};

export default UpdateGoalPage;
