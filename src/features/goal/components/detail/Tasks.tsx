import { useAtomValue } from 'jotai';

import PlusIcon from '@/assets/icons/plus.svg';
import { Typography } from '@/components';
import type { GoalTasksProps } from '@/hooks/reactQuery/goal/useGetGoal';
import { useUpdateIsDone } from '@/hooks/reactQuery/task';

import { isMyGoalAtom } from '../../atom';
import { goalIdAtom } from '../../atoms';

import { Task } from './task';

interface TasksProps {
  tasks: GoalTasksProps[];
  onOpenInput: VoidFunction;
}

export const Tasks = ({ tasks, onOpenInput }: TasksProps) => {
  const goalId = useAtomValue(goalIdAtom);
  const { mutate } = useUpdateIsDone();
  const isMyGoal = useAtomValue(isMyGoalAtom);

  return (
    <div className="flex flex-col gap-4xs pb-4xl">
      <div className="flex justify-between">
        <Typography type="heading4">세부 목표</Typography>
        {isMyGoal && (
          <button onClick={onOpenInput}>
            <PlusIcon width={20} height={20} />
          </button>
        )}
      </div>
      {tasks.map(({ taskId, isTaskDone, taskDescription }) => (
        <Task
          key={taskId}
          text={taskDescription}
          initialIsDone={isTaskDone}
          targetIds={{ goalId, taskId }}
          onDoneClick={() => mutate({ goalId, isDone: !isTaskDone, taskId })}
        />
      ))}
    </div>
  );
};
