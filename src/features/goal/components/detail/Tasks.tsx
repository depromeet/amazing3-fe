import PlusIcon from '@/assets/icons/plus.svg';
import { Typography } from '@/components';
import { useIsMyMap } from '@/hooks';
import type { GoalTasksProps } from '@/hooks/reactQuery/goal/useGetGoal';
import { useUpdateIsDone } from '@/hooks/reactQuery/task';

import { Task } from './task';

interface TasksProps {
  goalId: number;
  tasks: GoalTasksProps[];
  onOpenInput: VoidFunction;
}

export const Tasks = ({ goalId, tasks, onOpenInput }: TasksProps) => {
  const { mutate } = useUpdateIsDone();
  const { isMyMap } = useIsMyMap();

  return (
    <div className="flex flex-col gap-4xs pb-4xl">
      <div className="flex justify-between">
        <Typography type="heading4">세부 목표</Typography>
        {isMyMap && (
          <button onClick={onOpenInput}>
            <PlusIcon width={20} height={20} />
          </button>
        )}
      </div>
      {tasks.map(({ taskId, isTaskDone, taskDescription }) => (
        <Task
          key={taskId}
          text={taskDescription}
          isDone={isTaskDone}
          targetIds={{ goalId, taskId }}
          onDoneClick={() => mutate({ goalId, isDone: !isTaskDone, taskId })}
        />
      ))}
    </div>
  );
};
