'use client';

import { GoalDetailContent } from '@/features/goal/components';

interface ParamsProps {
  params: {
    id: string;
  };
}

const GoalDetailPage = ({ params }: ParamsProps) => {
  const id = +params['id'];

  return <GoalDetailContent id={id} />;
};

export default GoalDetailPage;
