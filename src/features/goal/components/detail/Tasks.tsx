import PlusIcon from '@/assets/icons/plus.svg';
import { Typography } from '@/components';
import { GoalDetail } from '@/components/molecules';
import type { GoalTasksProps } from '@/hooks/reactQuery/goal/useGetGoal';

interface TasksProps {
  tasks: GoalTasksProps[];
  onOpenInput: VoidFunction;
}

// TODO : 목표 달성 요청 처리, 더보기 버튼 클릭 이벤트 등록
export const Tasks = ({ tasks, onOpenInput }: TasksProps) => {
  return (
    <div className="flex flex-col gap-4xs">
      <div className="flex justify-between">
        <Typography type="heading4">세부 목표</Typography>
        <button onClick={onOpenInput}>
          <PlusIcon width={20} height={20} />
        </button>
      </div>
      {tasks.map(({ taskId, isTaskDone, taskDescription }) => (
        <GoalDetail
          key={taskId}
          text={taskDescription}
          isDone={isTaskDone}
          onDoneClick={() => {}}
          onMoreOptionClick={() => {}}
        />
      ))}
    </div>
  );
};
