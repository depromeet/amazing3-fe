import { Loading } from '@/components/molecules/loading';
import GoalUpdateForm from '@/features/goal/components/update/GoalUpdateForm';
import GoalUpdateHeader from '@/features/goal/components/update/GoalUpdateHeader';
import { useGetGoal } from '@/hooks/reactQuery/goal';

interface ParamsProps {
  params: {
    id: string;
  };
}

const UpdateGoalPage = ({ params }: ParamsProps) => {
  const goalId = +params['id'];
  const { data: goal, isLoading } = useGetGoal({ goalId });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loading />
      </div>
    );
  }

  return (
    goal && (
      <>
        <GoalUpdateHeader />
        <GoalUpdateForm goalId={goalId} goal={goal} />
      </>
    )
  );
};

export default UpdateGoalPage;
