import PlusIcon from '@/assets/icons/plus.svg';
import { Typography } from '@/components';
import { Task } from '@/components/molecules';
import type { GoalTasksProps } from '@/hooks/reactQuery/goal/useGetGoal';
import { useUpdateIsDone } from '@/hooks/reactQuery/task';

interface TasksProps {
  goalId: number;
  tasks: GoalTasksProps[];
  onOpenInput: VoidFunction;
}

export const Tasks = ({ goalId, tasks, onOpenInput }: TasksProps) => {
  const { mutate } = useUpdateIsDone();

  return (
    <div className="flex flex-col gap-4xs pb-4xl">
      <div className="flex justify-between">
        <Typography type="heading4">세부 목표</Typography>
        <button onClick={onOpenInput}>
          <PlusIcon width={20} height={20} />
        </button>
      </div>
      {tasks.map(({ taskId, isTaskDone, taskDescription }) => (
        <Task
          key={taskId}
          text={taskDescription}
          isDone={isTaskDone}
          onDoneClick={() => mutate({ goalId, isDone: !isTaskDone, taskId })}
          onMoreOptionClick={() => {}}
        />
      ))}
    </div>
  );
};
