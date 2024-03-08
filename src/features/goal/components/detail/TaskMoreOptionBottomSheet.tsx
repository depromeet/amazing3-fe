'use client';

import { BottomSheet, Button, Typography } from '@/components';
import { useDeleteTask } from '@/hooks/reactQuery/task/useDeleteTask';

interface TaskMoreOptionBottomSheetProps {
  open: boolean;
  onClose: VoidFunction;
  onTaskEdit: VoidFunction;
  targetTask: {
    goalId: number;
    taskId: number;
    description: string;
  };
}

interface FooterProps {
  onDelete: VoidFunction;
  onEdit: VoidFunction;
}

export const TaskMoreOptionBottomSheet = ({
  open,
  onClose,
  onTaskEdit,
  targetTask,
}: TaskMoreOptionBottomSheetProps) => {
  const { mutate } = useDeleteTask();

  const handleDeleteTask = () => mutate({ goalId: targetTask.goalId, taskId: targetTask.taskId });
  const handleEditTask = () => {
    onTaskEdit();
    onClose();
  };

  return (
    <BottomSheet
      open={open}
      onDismiss={onClose}
      fixedMaxHeight={224}
      FooterComponent={<Footer onDelete={handleDeleteTask} onEdit={handleEditTask} />}
    >
      <Typography type="title2" className="pt-[20px] px-xs text-gray-70">
        {targetTask.description}
      </Typography>
    </BottomSheet>
  );
};

const Footer = ({ onDelete, onEdit }: FooterProps) => {
  return (
    <div className="flex flex-col gap-5xs px-5xs">
      <Button variant="issue" onClick={onDelete}>
        삭제하기
      </Button>
      <Button variant="tertiary" onClick={onEdit}>
        수정하기
      </Button>
    </div>
  );
};
