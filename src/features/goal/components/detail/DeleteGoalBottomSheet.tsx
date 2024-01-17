import Image from 'next/image';

import BandiMoori from '@/assets/images/bandi-moori.png';
import { BottomSheet, Button, Typography } from '@/components/atoms';
import { Spinner } from '@/components/atoms/spinner';
import { useDeleteGoal } from '@/hooks/reactQuery/goal';

interface DeleteGoalBottomSheetProps {
  open: boolean;
  onClose: () => void;
  goalId: number;
}

export const DeleteGoalBottomSheet = ({ open, onClose, goalId }: DeleteGoalBottomSheetProps) => {
  const { mutate, isPending } = useDeleteGoal();

  const handleDelete = () => {
    if (!goalId) return;

    mutate({ goalId });
  };

  return (
    <BottomSheet
      open={open}
      onDismiss={onClose}
      fixedMaxHeight={520}
      FooterComponent={<Footer onCancel={onClose} onDelete={handleDelete} isPending={isPending} />}
    >
      <div className="h-[400px] flex flex-col items-center justify-center gap-3xs translate-y-[20px]">
        <Typography type="title1" className="text-gray-70">
          목표를 삭제하시겠어요?
        </Typography>
        <Typography type="body3" className="text-gray-50">
          삭제하면 다시 복구할 수 없어요
        </Typography>
        <Image src={BandiMoori} width={250} alt="bandi_moori" priority />
      </div>
    </BottomSheet>
  );
};

const Footer = ({
  onCancel,
  onDelete,
  isPending,
}: {
  onCancel: VoidFunction;
  onDelete: VoidFunction;
  isPending: boolean;
}) => (
  <div className="flex flex-row gap-xs">
    <Button variant="tertiary" onClick={onCancel}>
      취소
    </Button>
    <Button variant="issue" onClick={onDelete} disabled={isPending}>
      {isPending ? <Spinner /> : '삭제하기'}
    </Button>
  </div>
);
